import { OpenAI } from "openai";
import { createPublicClient, createWalletClient, http, parseEther } from "viem";
import { base } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { TOKEN_FACTORY_ADDRESS, TOKEN_FACTORY_ABI } from "./abi";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

// viem clients for Base mainnet
const publicClient = createPublicClient({
  chain: base,
  transport: http(process.env.BASE_RPC_URL!),
});
const account = privateKeyToAccount(
  process.env.DEPLOYER_PRIVATE_KEY! as `0x${string}`
);
const walletClient = createWalletClient({
  account,
  chain: base,
  transport: http(process.env.BASE_RPC_URL!),
});

export async function suggestToken(text: string) {
  const prompt = `Suggest a meme coin token symbol (all caps, <=7 chars) and name (<=15 chars) for this viral tweet. Respond in JSON: {"symbol": "...", "name": "..."}\nTweet: "${text}"`;
  const chat = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 100,
    temperature: 0.7,
  });
  const response = chat.choices[0].message.content;
  try {
    return JSON.parse(response!);
  } catch (e) {
    // fallback: extract with regex
    const match = response?.match(/\{[^}]+\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error("Failed to parse OpenAI response: " + response);
  }
}

export async function deployToken(
  name: string,
  symbol: string,
  xUrl: string,
  xUser: string
) {
  const hash = await walletClient.writeContract({
    address: TOKEN_FACTORY_ADDRESS,
    abi: TOKEN_FACTORY_ABI,
    functionName: "deployERC20Token",
    args: [name, symbol, xUrl, xUser],
    value: 0n,
  });
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  // Try to get the token address from the contract
  const tokenInfo = await publicClient.readContract({
    address: TOKEN_FACTORY_ADDRESS,
    abi: TOKEN_FACTORY_ABI,
    functionName: "getTokenByXUrl",
    args: [xUrl],
  });
  console.log("Token deployed", tokenInfo.tokenAddress);
  return { hash, tokenAddress: tokenInfo.tokenAddress };
}

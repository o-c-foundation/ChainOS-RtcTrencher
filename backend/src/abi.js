"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_FACTORY_ABI = exports.TOKEN_FACTORY_ADDRESS = void 0;
exports.TOKEN_FACTORY_ADDRESS = "0x8ABc0c5f1f85eF0D988f3b7721e0A07381a10abd";
exports.TOKEN_FACTORY_ABI = [
    {
        type: "constructor",
        inputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "INITIAL_AMOUNT",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "contractAddress",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "deployERC20Token",
        inputs: [
            {
                name: "name",
                type: "string",
                internalType: "string",
            },
            {
                name: "ticker",
                type: "string",
                internalType: "string",
            },
            {
                name: "xUrl",
                type: "string",
                internalType: "string",
            },
            {
                name: "xUser",
                type: "string",
                internalType: "string",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "getTokenByXUrl",
        inputs: [
            {
                name: "xUrl",
                type: "string",
                internalType: "string",
            },
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct TokenFactory.TokenStructure",
                components: [
                    {
                        name: "tokenAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "tokenName",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "tokenSymbol",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "totalSupply",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "xUrl",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "xUser",
                        type: "string",
                        internalType: "string",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getTokensByXUser",
        inputs: [
            {
                name: "xUser",
                type: "string",
                internalType: "string",
            },
        ],
        outputs: [
            {
                name: "",
                type: "tuple[]",
                internalType: "struct TokenFactory.TokenStructure[]",
                components: [
                    {
                        name: "tokenAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "tokenName",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "tokenSymbol",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "totalSupply",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "xUrl",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "xUser",
                        type: "string",
                        internalType: "string",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "setPoolAddress",
        inputs: [
            {
                name: "newAddr",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "tokenCount",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "tokens",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenName",
                type: "string",
                internalType: "string",
            },
            {
                name: "tokenSymbol",
                type: "string",
                internalType: "string",
            },
            {
                name: "totalSupply",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "xUrl",
                type: "string",
                internalType: "string",
            },
            {
                name: "xUser",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
];

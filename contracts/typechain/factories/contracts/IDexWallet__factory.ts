/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDexWallet,
  IDexWalletInterface,
} from "../../contracts/IDexWallet";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ExchangeType",
            name: "exchangeType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "nft",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "address",
            name: "settleToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "settleAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
        ],
        internalType: "struct NFTBundleOrder",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "uint256[]",
        name: "exchangeIds",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "makerSignature",
        type: "bytes",
      },
    ],
    name: "makeNFTBundleExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ExchangeType",
            name: "exchangeType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "nft",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "address",
            name: "settleToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
        ],
        internalType: "struct NFTUnitOrder",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "uint256[]",
        name: "exchangeIds",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "makerSignature",
        type: "bytes",
      },
    ],
    name: "makeNFTUnitExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "makerTokenIn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "makerAmountIn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "makerTokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "makerAmountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
        ],
        internalType: "struct SwapOrder",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "makerSignature",
        type: "bytes",
      },
    ],
    name: "makeTokenSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ExchangeType",
            name: "exchangeType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "baseToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "quoteToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "exchangeRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
        ],
        internalType: "struct ExchangeOrder",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "baseAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "makeTokensExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "verifyNFTs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "verifyTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDexWallet__factory {
  static readonly abi = _abi;
  static createInterface(): IDexWalletInterface {
    return new utils.Interface(_abi) as IDexWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDexWallet {
    return new Contract(address, _abi, signerOrProvider) as IDexWallet;
  }
}
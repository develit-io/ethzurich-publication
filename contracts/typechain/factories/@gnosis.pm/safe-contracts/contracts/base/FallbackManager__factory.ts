/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  FallbackManager,
  FallbackManagerInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/base/FallbackManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "handler",
        type: "address",
      },
    ],
    name: "ChangedFallbackHandler",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "handler",
        type: "address",
      },
    ],
    name: "setFallbackHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576101be908161001c8239f35b600080fdfe60806040526004361015610019575b341561013557600080fd5b6000803560e01c63f08a032314610030575061000e565b346101325760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101325760043573ffffffffffffffffffffffffffffffffffffffff81169081810361012e573033036100d6577f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d5556080527f5ac6c46c93c8d0e53714ba3b53db3e7c046da994313d7ed0d192028bc7c228b060206080a180f35b7f08c379a0000000000000000000000000000000000000000000000000000000006080526020608452600560a4527f475330333100000000000000000000000000000000000000000000000000000060c45260646080fd5b8280fd5b80fd5b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d5548015610186576000808092368280373360601b3652818060143601925af13d82803e15610182573d90f35b3d90fd5b00fea2646970667358221220c319138196178d5beae732783338fb4c7fe7c9e555c245ff83fddd83766d0fdb64736f6c63430008130033";

type FallbackManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FallbackManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FallbackManager__factory extends ContractFactory {
  constructor(...args: FallbackManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FallbackManager> {
    return super.deploy(overrides || {}) as Promise<FallbackManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FallbackManager {
    return super.attach(address) as FallbackManager;
  }
  override connect(signer: Signer): FallbackManager__factory {
    return super.connect(signer) as FallbackManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FallbackManagerInterface {
    return new utils.Interface(_abi) as FallbackManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FallbackManager {
    return new Contract(address, _abi, signerOrProvider) as FallbackManager;
  }
}

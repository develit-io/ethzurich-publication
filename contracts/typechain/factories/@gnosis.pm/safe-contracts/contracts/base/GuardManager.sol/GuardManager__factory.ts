/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  GuardManager,
  GuardManagerInterface,
} from "../../../../../../@gnosis.pm/safe-contracts/contracts/base/GuardManager.sol/GuardManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "guard",
        type: "address",
      },
    ],
    name: "ChangedGuard",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guard",
        type: "address",
      },
    ],
    name: "setGuard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761016e908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c63e19a9dd91461002a57600080fd5b346101345760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101345760043573ffffffffffffffffffffffffffffffffffffffff811691828203610130573033036100d457507f1151116914515bc0891ff9047a6cb32cf902546f83066499bcf8ba33d2353fa2916020917f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c855604051908152a180f35b807f08c379a0000000000000000000000000000000000000000000000000000000006064925260206004820152600560248201527f47533033310000000000000000000000000000000000000000000000000000006044820152fd5b8380fd5b5080fdfea264697066735822122056a7c34405329668b1aaf49b3631aa068e674081f47b046fc4cdbe645e8c21b464736f6c63430008130033";

type GuardManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GuardManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GuardManager__factory extends ContractFactory {
  constructor(...args: GuardManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GuardManager> {
    return super.deploy(overrides || {}) as Promise<GuardManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GuardManager {
    return super.attach(address) as GuardManager;
  }
  override connect(signer: Signer): GuardManager__factory {
    return super.connect(signer) as GuardManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuardManagerInterface {
    return new utils.Interface(_abi) as GuardManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuardManager {
    return new Contract(address, _abi, signerOrProvider) as GuardManager;
  }
}
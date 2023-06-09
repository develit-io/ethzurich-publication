/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ModuleManager,
  ModuleManagerInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/base/ModuleManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "DisabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "EnabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleSuccess",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "disableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "enableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModule",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModuleReturnData",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "start",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
      },
    ],
    name: "getModulesPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "next",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "isModuleEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610c30908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081632d9ad53d1461007a57508063468721a7146100755780635229073f14610070578063610b59251461006b578063cc2f8452146100665763e009cfde1461006157600080fd5b61074f565b6105e2565b610350565b6102b3565b61028d565b346100f95760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f95773ffffffffffffffffffffffffffffffffffffffff806100c76100fc565b1691826001141592836100e1575b83151560805260206080f35b604092935081528060205220541615158180806100d5565b80fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361011f57565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361011f57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f604051930116820182811067ffffffffffffffff8211176101ba57604052565b610147565b60643590600282101561011f57565b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc82011261011f576102006100fc565b916024359167ffffffffffffffff60443581811161011f578260238201121561011f5780600401359182116101ba5761026060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85011601610176565b928284526024838301011161011f578160009260246020930183860137830101529061028a6101bf565b90565b3461011f5760206102a96102a0366101ce565b9291909161097c565b6040519015158152f35b3461011f576102c46102a0366101ce565b604051602091823d8301016040523d82523d60008484013e6040519283911515825260408183015282519283604084015260005b848110610339575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f836000606080968601015201168101030190f35b8181018301518682016060015285935082016102f8565b3461011f5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011f576103876100fc565b61038f610b93565b73ffffffffffffffffffffffffffffffffffffffff80821680151580610566575b6103b990610917565b60005260006020526040600020541661050857600160009081526020527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f844090610503906104a861043e7fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d5b5473ffffffffffffffffffffffffffffffffffffffff1690565b6104688373ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b600160009081526020526104dc817fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d610468565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b0390a1005b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f47533130320000000000000000000000000000000000000000000000000000006044820152fd5b5060018114156103b0565b90929192604082016040835281518091526060830160208093019160005b848282106105b85750505073ffffffffffffffffffffffffffffffffffffffff91509416910152565b845173ffffffffffffffffffffffffffffffffffffffff168452938401939092019160010161058f565b3461011f5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011f576106196100fc565b6024359061062e61062983610adc565b610176565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061065b84610adc565b0136602083013760009273ffffffffffffffffffffffffffffffffffffffff8093168452836020526106a56040852073ffffffffffffffffffffffffffffffffffffffff90541690565b8381168015159081610743575b508061073a575b1561072357610717610424826106f161071d946106d68a89610af4565b9073ffffffffffffffffffffffffffffffffffffffff169052565b73ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b94610b37565b936106a5565b8285815261073660405192839283610571565b0390f35b508185106106b9565b600191501415386106b2565b3461011f5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011f576107866100fc565b61078e610124565b90610797610b93565b73ffffffffffffffffffffffffffffffffffffffff808316908115158061090c575b6107c290610917565b808316600052600060205260406000205416036108ae5781610859610503926104686108326104247faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace40542769773ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b9173ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b6104dc6108868273ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b7fffffffffffffffffffffffff00000000000000000000000000000000000000008154169055565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f47533130330000000000000000000000000000000000000000000000000000006044820152fd5b5060018214156107b9565b1561091e57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f47533130310000000000000000000000000000000000000000000000000000006044820152fd5b91929092600133141580610a50575b156109f25761099b935a93610a7d565b9081156109ca57337f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb8600080a2565b337facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd375600080a2565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f47533130340000000000000000000000000000000000000000000000000000006044820152fd5b5033600052600060205273ffffffffffffffffffffffffffffffffffffffff60406000205416151561098b565b9390936002841015610aad576000948594600103610aa1575060208351930191f490565b9060208451940192f190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b67ffffffffffffffff81116101ba5760051b60200190565b8051821015610b085760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b645760010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b303303610b9c57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f47533033310000000000000000000000000000000000000000000000000000006044820152fdfea264697066735822122094e810f6913e679b4721b51fbb5a6e514fa9a73868988be20a497ac77771285364736f6c63430008130033";

type ModuleManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ModuleManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ModuleManager__factory extends ContractFactory {
  constructor(...args: ModuleManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ModuleManager> {
    return super.deploy(overrides || {}) as Promise<ModuleManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ModuleManager {
    return super.attach(address) as ModuleManager;
  }
  override connect(signer: Signer): ModuleManager__factory {
    return super.connect(signer) as ModuleManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModuleManagerInterface {
    return new utils.Interface(_abi) as ModuleManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleManager {
    return new Contract(address, _abi, signerOrProvider) as ModuleManager;
  }
}

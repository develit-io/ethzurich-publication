/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  VerifyingPaymaster,
  VerifyingPaymasterInterface,
} from "../../../../contracts/account-abstraction/samples/VerifyingPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_verifyingSigner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "uint48",
        name: "validUntil",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "validAfter",
        type: "uint48",
      },
    ],
    name: "getHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "paymasterAndData",
        type: "bytes",
      },
    ],
    name: "parsePaymasterAndData",
    outputs: [
      {
        internalType: "uint48",
        name: "validUntil",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "validAfter",
        type: "uint48",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "senderNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
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
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyingSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c0346100f957601f61170538819003918201601f19168301916001600160401b038311848410176100fe5780849260409485528339810103126100f95780516001600160a01b039182821682036100f957602001519082821682036100f9576000543360018060a01b0319821617600055604051933391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a360805260a0526115f0908161011582396080518181816101740152818161027801528181610757015281816107cb015281816108910152818161097701528181610a2e0152610ddd015260a05181818161033c015261111c0152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001257600080fd5b60003560e01c80630396cb6014610117578063205c28781461011257806323d9ac9b1461010d578063715018a6146101085780638da5cb5b1461010357806394d4ad60146100fe57806394e1fc19146100f95780639c90b443146100f4578063a9a23409146100ef578063b0d691fe146100ea578063bb9fe6bf146100e5578063c23a5cea146100e0578063c399ec88146100db578063d0e30db0146100d6578063f2fde38b146100d15763f465c77e146100cc57600080fd5b610c32565b610a9b565b6109ec565b6108fe565b610833565b61077b565b61070c565b61064a565b6105e1565b61055e565b61047d565b6103fd565b610360565b6102f1565b61021a565b600060207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101f45760043563ffffffff81168091036101f05761015c610cb2565b8173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691823b156101f0576024604051809481937f0396cb60000000000000000000000000000000000000000000000000000000008352600483015234905af180156101eb576101df575080f35b6101e890610d60565b80f35b610dba565b5080fd5b80fd5b73ffffffffffffffffffffffffffffffffffffffff81160361021557565b600080fd5b3461021557600060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101f457600435610257816101f7565b61025f610cb2565b8173ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001692833b156102ed576044908360405195869485937f205c287800000000000000000000000000000000000000000000000000000000855216600484015260243560248401525af180156101eb576101df575080f35b8280fd5b346102155760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610215576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101f457610398610cb2565b8073ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b346102155760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021557602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b9181601f840112156102155782359167ffffffffffffffff8311610215576020838186019501011161021557565b346102155760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102155760043567ffffffffffffffff8111610215576080601f6104fa6104f47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe094369060040161044f565b9061156c565b809160409794979593955197889665ffffffffffff80921688521660208701526060604087015281606087015286860137600085828601015201168101030190f35b90816101609103126102155790565b359065ffffffffffff8216820361021557565b346102155760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102155760043567ffffffffffffffff8111610215576105ad90369060040161053c565b6024359065ffffffffffff8083168303610215576044359081168103610215576020926105d992610e63565b604051908152f35b346102155760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102155773ffffffffffffffffffffffffffffffffffffffff600435610631816101f7565b1660005260016020526020604060002054604051908152f35b346102155760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021557600360043510156102155760243567ffffffffffffffff8111610215576106a490369060040161044f565b50506106ae610dc6565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6d757374206f76657272696465000000000000000000000000000000000000006044820152fd5b346102155760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610215576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101f4576107b3610cb2565b8073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016803b156108305781906004604051809481937fbb9fe6bf0000000000000000000000000000000000000000000000000000000083525af180156101eb576101df575080f35b50fd5b3461021557600060207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101f457600435610870816101f7565b610878610cb2565b8173ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001692833b156102ed576024908360405195869485937fc23a5cea0000000000000000000000000000000000000000000000000000000085521660048401525af180156101eb576101df575080f35b34610215576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101f4576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260208160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa9081156101eb5782916109b6575b604051828152602090f35b0390f35b90506020813d82116109e4575b816109d060209383610d79565b810103126101f0576109b2915051386109a7565b3d91506109c3565b6000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101f45773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001681813b156101f457602491604051928380927fb760faf900000000000000000000000000000000000000000000000000000000825230600483015234905af180156101eb576101df575080f35b346102155760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021557600435610ad6816101f7565b610ade610cb2565b73ffffffffffffffffffffffffffffffffffffffff8091168015610b50576000918254827fffffffffffffffffffffffff00000000000000000000000000000000000000008216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b919082519283825260005b848110610c1e5750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b602081830181015184830182015201610bdf565b346102155760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102155760043567ffffffffffffffff811161021557610c94610c87610ca892369060040161053c565b610c8f610dc6565b611060565b604051928392604084526040840190610bd4565b9060208301520390f35b73ffffffffffffffffffffffffffffffffffffffff600054163303610cd357565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff8111610d7457604052565b610d31565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610d7457604052565b6040513d6000823e3d90fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163303610e0557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e7400000000000000000000006044820152fd5b610f249080610e76610120820182610f2a565b50039373ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09283870160405197880160405280885281602089013735166000526001602052604060002054604051948592610ef1602085019860c08a5260e0860190610bd4565b92466040860152306060860152608085015265ffffffffffff80921660a08501521660c083015203908101835282610d79565b51902090565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610215570180359067ffffffffffffffff82116102155760200191813603831361021557565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610fa85760010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92919267ffffffffffffffff8211610d74576040519161101f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160184610d79565b829481845281830111610215578281602093846000960137010152565b604051906020820182811067ffffffffffffffff821117610d745760405260008252565b906110726104f4610120840184610f2a565b9060408296939614801561126d575b156111e957611119916110fa611100926110a461109f8a8989610e63565b611518565b926110e773ffffffffffffffffffffffffffffffffffffffff8098351673ffffffffffffffffffffffffffffffffffffffff166000526001602052604060002090565b6110f18154610f7b565b90553691610fd7565b90611277565b73ffffffffffffffffffffffffffffffffffffffff1690565b907f000000000000000000000000000000000000000000000000000000000000000016036111935779ffffffffffff00000000000000000000000000000000000000007fffffffffffff000000000000000000000000000000000000000000000000000061118561103c565b9460d01b169160a01b161790565b60019079ffffffffffff00000000000000000000000000000000000000007fffffffffffff00000000000000000000000000000000000000000000000000006111da61103c565b9560d01b169160a01b16171790565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604060248201527f566572696679696e675061796d61737465723a20696e76616c6964207369676e60448201527f6174757265206c656e67746820696e207061796d6173746572416e64446174616064820152fd5b5060418214611081565b61128c9161128491611451565b9190916112c8565b90565b6005111561129957565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6112d18161128f565b806112d95750565b6112e28161128f565b60018103611349576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b6113528161128f565b600281036113b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b806113c560039261128f565b146113cc57565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b90604181511460001461147f5761147b916020820151906060604084015193015160001a90611489565b9091565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831161150c5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156101eb57815173ffffffffffffffffffffffffffffffffffffffff811615611506579190565b50600190565b50505050600090600390565b60405160208101917f19457468657265756d205369676e6564204d6573736167653a0a3332000000008352603c820152603c81526060810181811067ffffffffffffffff821117610d745760405251902090565b919080605411610215576115826014840161054b565b917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffac60546115b26034870161054b565b94950192019056fea26469706673582212207820ab548177bfeda1fd9273c43b90929bc2b5e4afebc5cb05df815a53b7f65564736f6c63430008130033";

type VerifyingPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifyingPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifyingPaymaster__factory extends ContractFactory {
  constructor(...args: VerifyingPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VerifyingPaymaster> {
    return super.deploy(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    ) as Promise<VerifyingPaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    );
  }
  override attach(address: string): VerifyingPaymaster {
    return super.attach(address) as VerifyingPaymaster;
  }
  override connect(signer: Signer): VerifyingPaymaster__factory {
    return super.connect(signer) as VerifyingPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyingPaymasterInterface {
    return new utils.Interface(_abi) as VerifyingPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifyingPaymaster {
    return new Contract(address, _abi, signerOrProvider) as VerifyingPaymaster;
  }
}
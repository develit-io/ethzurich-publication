/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  BLSSignatureAggregator,
  BLSSignatureAggregatorInterface,
} from "../../../../../contracts/account-abstraction/samples/bls/BLSSignatureAggregator";

const _abi = [
  {
    inputs: [],
    name: "BLS_DOMAIN",
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
    name: "N",
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
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "delay",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "struct UserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
    ],
    name: "aggregateSignatures",
    outputs: [
      {
        internalType: "bytes",
        name: "aggregatedSignature",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getTrailingPublicKey",
    outputs: [
      {
        internalType: "uint256[4]",
        name: "publicKey",
        type: "uint256[4]",
      },
    ],
    stateMutability: "pure",
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
    ],
    name: "getUserOpHash",
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
    ],
    name: "getUserOpPublicKey",
    outputs: [
      {
        internalType: "uint256[4]",
        name: "publicKey",
        type: "uint256[4]",
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
    ],
    name: "userOpToMessage",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
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
        internalType: "struct UserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateSignatures",
    outputs: [],
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
    ],
    name: "validateUserOpSignature",
    outputs: [
      {
        internalType: "bytes",
        name: "sigForUserOp",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657611c15908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081629d9250146100b957508063275e2d79146100b457806340864431146100af57806345171159146100aa57806357f09b72146100a557806364c530cd146100a0578063a61935311461009b578063b7620eb414610096578063c9e525df146100915763e3563a4f1461008c57600080fd5b61098c565b610933565b6108d9565b6108ac565b610757565b610732565b61063a565b6105d5565b6101bc565b3461011157807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610111577fd84c4373167c517e9ccd66803f86d8a4f49e7e1315a7a73b516affea7428f82b60805260206080f35b80fd5b9181601f840112156101455782359167ffffffffffffffff8311610145576020808501948460051b01011161014557565b600080fd5b919082519283825260005b8481106101945750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b602081830181015184830182015201610155565b9060206101b992818152019061014a565b90565b34610145576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101455760043567ffffffffffffffff81116101455761020c903690600401610114565b9161021683610ce7565b926102246040519485610390565b8084527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0928361025383610ce7565b018360005b82811061030e5750505060005b85518110156102c5578061029661028e6102836102c0948787610e7d565b61014081019061141b565b81019061151f565b61029e6103d1565b918252868201526102af8289610ecd565b526102ba8188610ecd565b50610e1c565b610265565b61030a846102fe876102d68a611535565b8051908401516040805195860192835260208301919091528491015b03908101835282610390565b604051918291826101a8565b0390f35b6103166114f5565b82828a010152018490610258565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761036f57604052565b610324565b6080810190811067ffffffffffffffff82111761036f57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761036f57604052565b604051906103de82610353565b565b60405190610160820182811067ffffffffffffffff82111761036f57604052565b604051906103de82610374565b73ffffffffffffffffffffffffffffffffffffffff81160361014557565b35906103de8261040e565b81601f820112156101455780359067ffffffffffffffff821161036f576040519261048a60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610390565b8284526020838301011161014557816000926020809301838601378301015290565b919061016083820312610145576104c16103e0565b926104cb8161042c565b84526020810135602085015260408101359167ffffffffffffffff9283811161014557816104fa918401610437565b604086015260608201358381116101455781610517918401610437565b60608601526080820135608086015260a082013560a086015260c082013560c086015260e082013560e08601526101008083013590860152610120808301358481116101455782610569918501610437565b908601526101409283830135908111610145576105869201610437565b90830152565b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc820112610145576004359067ffffffffffffffff8211610145576101b9916004016104ac565b346101455761060d6105e63661058c565b604080516105f381610353565b36903761060761060282610a3b565b6113da565b9061116d565b60405190600090825b6002831061062357604084f35b600190825181526020809101920192019190610616565b600060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610111576004356106728161040e565b816024359163ffffffff83168093036107005773ffffffffffffffffffffffffffffffffffffffff1691823b15610700576024604051809481937f0396cb60000000000000000000000000000000000000000000000000000000008352600483015234905af180156106fb576106e6575080f35b67ffffffffffffffff811161036f5760405280f35b610a2f565b5080fd5b6080810192916000915b6004831061071b57505050565b60019082518152602080910192019201919061070e565b346101455761030a61074b6107463661058c565b610a3b565b60405191829182610704565b34610145577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6020813601126101455760043567ffffffffffffffff81116101455761016081600401928236030112610145576107c66107be61014461083d93018461141b565b810190610c98565b916108336107f46107da61074636856104ac565b926107ef6107e7856113da565b9136906104ac565b61116d565b91610829604051957febbdac910000000000000000000000000000000000000000000000000000000087526004870190610ef9565b6044850190610f21565b60c4830190610ef9565b6020816101048173__$2cd5236aa1e412d7491cf41e45a53ede2c$__5af480156106fb576108739160009161087e575b5061146c565b61030a6102fe6114d1565b61089f915060203d81116108a5575b6108978183610390565b810190610ee1565b3861086d565b503d61088d565b346101455760206108d16108bf3661058c565b6108cb61060282610a3b565b906112a0565b604051908152f35b346101455760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101455760043567ffffffffffffffff81116101455761074b61092e61030a923690600401610437565b610b34565b346101455760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101455760206040517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478152f35b346101455760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101455767ffffffffffffffff600435818111610145576109dc903690600401610114565b9190602435928284116101455736602385011215610145578360040135928311610145573660248486010111610145576024610a19940191611055565b005b60405190610a2882610374565b6080368337565b6040513d6000823e3d90fd5b60405190610a4882610374565b608080923690376040810151805190919015610a6957506101b99150610b34565b6004915073ffffffffffffffffffffffffffffffffffffffff83915116604051928380927fe02afbae00000000000000000000000000000000000000000000000000000000825261c350fa9182156106fb57600092610ac757505090565b803d8211610b2d575b610ada8184610390565b8201918181840312610b295782601f82011215610b295760405193610afe85610374565b849282019384116101115750905b828210610b195750505090565b8151815260209182019101610b0c565b8380fd5b503d610ad0565b90604051610b4181610374565b6080368237809280516080811115610bd557606091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa081015183527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc081015160208401527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810151604084015251910152565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6461746120746f6f2073686f727420666f7220736967000000000000000000006044820152fd5b15610c3a57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f424c533a20696e76616c6964207369676e6174757265000000000000000000006044820152fd5b906040828203126101455780601f830112156101455760405191610cbb83610353565b82906040810192831161014557905b828210610cd75750505090565b8135815260209182019101610cca565b67ffffffffffffffff811161036f5760051b60200190565b90610d0982610ce7565b604090610d1882519182610390565b8381527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610d468295610ce7565b019160005b838110610d585750505050565b6020908251610d6681610374565b608036823782828601015201610d4b565b90610d8182610ce7565b6040610d8f81519283610390565b8382527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610dbd8395610ce7565b019160005b838110610dcf5750505050565b6020908351610ddd81610353565b8436823782828501015201610dc2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610e495760010190565b610ded565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9190811015610ebd5760051b810135907ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffea181360301821215610145570190565b610e4e565b6101b99036906104ac565b8051821015610ebd5760209160051b010190565b90816020910312610145575180151581036101455790565b6000915b60028310610f0a57505050565b600190825181526020809101920192019190610efd565b6000915b60048310610f3257505050565b600190825181526020809101920192019190610f25565b91608092610f5a8185810194610ef9565b6040938085830152825180945260a08201936020809401916000905b828210610fca575050505060608184039101528080855193848152019401926000905b838210610fa857505050505090565b9091929394838282610fbd6001948a51610ef9565b0196019493920190610f99565b909192969495868282610fe06001948c51610f21565b9799970197960193920190610f76565b15610ff757565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f424c533a2076616c69646174655369676e617475726573206661696c656400006044820152fd5b9161106791936107be60408214610c33565b61107083610cff565b9161107a84610d77565b9360005b81811061111257505050906020916110c360405194859384937f9141376300000000000000000000000000000000000000000000000000000000855260048501610f49565b038173__$2cd5236aa1e412d7491cf41e45a53ede2c$__5af480156106fb576103de916000916110f4575b50610ff0565b61110c915060203d81116108a5576108978183610390565b386110ee565b8061115e61112c611127611168948688610e7d565b610ec2565b61113581610a3b565b61113f848a610ecd565b5261114a8389610ecd565b50610607611158848a610ecd565b516113da565b6102af8289610ecd565b61107e565b906111899060409283805161118181610353565b3690376112a0565b611201828051602093848201528381526111a281610353565b8151809381927fa850a9090000000000000000000000000000000000000000000000000000000083527fd84c4373167c517e9ccd66803f86d8a4f49e7e1315a7a73b516affea7428f82b6004840152846024840152604483019061014a565b038173__$2cd5236aa1e412d7491cf41e45a53ede2c$__5af49283156106fb5760009361122f575b50505090565b803d8211611299575b6112428184610390565b82019181818403126112955782601f820112156112955781519461126586610353565b859282019384116101115750905b8282106112865750505050388080611229565b81518152908301908301611273565b8480fd5b503d611238565b906113d46112c2835173ffffffffffffffffffffffffffffffffffffffff1690565b926020938461137281840151936040810151838151910120906060810151848151910120608082015160a083015160c08401519160e085015193610120610100870151960151898151910120966040519b8c9a8b019b8c9693909a9998959261012098959273ffffffffffffffffffffffffffffffffffffffff6101408a019d168952602089015260408801526060870152608086015260a085015260c084015260e08301526101008201520152565b03916113a47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093848101835282610390565b519020604080519586019182526020820194909452309381019390935246606084015291929182608085016102f2565b51902090565b6040516113d4816113ef602082019485610704565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610390565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610145570180359067ffffffffffffffff82116101455760200191813603831361014557565b1561147357565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f424c533a2077726f6e67207369670000000000000000000000000000000000006044820152fd5b604051906020820182811067ffffffffffffffff82111761036f5760405260008252565b604051906040820182811067ffffffffffffffff82111761036f5760405260006020838281520152565b9190826040910312610145576020823592013590565b9061153e6114f5565b825115610ebd576020908184019182515192855115610ebd575181015160019390845b87518610156115aa5791611595916115a0949361157e888b610ecd565b5151918561158c8a8d610ecd565b510151936117bc565b949193909395610e1c565b9491929093611561565b919294509295508080151590816116f1575b50806116e9575b1561168b5760009060017f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47825b61162f575050507f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47929181848082819509809309885209900990830152565b8061167d7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611665866116839598969798611b93565b9461167282888809611781565b900894958094611bcc565b906117af565b9190826115f0565b606484604051907f08c379a00000000000000000000000000000000000000000000000000000000082526004820152600e60248201527f496e76616c6964206e756d6265720000000000000000000000000000000000006044820152fd5b5060016115c3565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4791501415386115bc565b1561172357565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f557365206a6163446f75626c652066756e6374696f6e20696e737465616400006044820152fd5b907f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47918203918211610e4957565b91908203918211610e4957565b949290919394801580611b8b575b611b8057811580611b78575b611b6f576118b46117e5610a1b565b967f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780888009808a52880960208901527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476040890195600187528160608b019560018752611851610401565b9851900994858852519009907f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478060208801968488528b519009916020604089019b848d52015190099060608701948286521491821592611b64575b505061171c565b6118bc610a1b565b955183516118c990611781565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47910886525181516118fa90611781565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479108602086019281845286517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4781800960408901918183527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47910992606089019380855261198890611781565b90807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479109907f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479108825182517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4791097f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790600209611a2690611781565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4791089451915190517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479109611a7b85611781565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4791087f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479109915190517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479109611af190611781565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479108935190939260017f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4791097f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47910990565b1415905038806118ad565b91945050929190565b5085156117d6565b509392506001919050565b5082156117ca565b8115611b9d570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b81810292918115918404141715610e495756fea2646970667358221220e32495796bf54758fb5ab30c18dae7282490678f00c0e91656698f5f4505cc5a64736f6c63430008130033";

type BLSSignatureAggregatorConstructorParams =
  | [
      linkLibraryAddresses: BLSSignatureAggregatorLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BLSSignatureAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class BLSSignatureAggregator__factory extends ContractFactory {
  constructor(...args: BLSSignatureAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        BLSSignatureAggregator__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: BLSSignatureAggregatorLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$2cd5236aa1e412d7491cf41e45a53ede2c\\$__", "g"),
      linkLibraryAddresses[
        "contracts/account-abstraction/samples/bls/lib/BLSOpen.sol:BLSOpen"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BLSSignatureAggregator> {
    return super.deploy(overrides || {}) as Promise<BLSSignatureAggregator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BLSSignatureAggregator {
    return super.attach(address) as BLSSignatureAggregator;
  }
  override connect(signer: Signer): BLSSignatureAggregator__factory {
    return super.connect(signer) as BLSSignatureAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BLSSignatureAggregatorInterface {
    return new utils.Interface(_abi) as BLSSignatureAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BLSSignatureAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BLSSignatureAggregator;
  }
}

export interface BLSSignatureAggregatorLibraryAddresses {
  ["contracts/account-abstraction/samples/bls/lib/BLSOpen.sol:BLSOpen"]: string;
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export interface BLSOpenInterface extends utils.Interface {
  functions: {
    "hashToPoint(bytes32,bytes)": FunctionFragment;
    "isZeroBLSKey(uint256[4])": FunctionFragment;
    "verifyMultiple(uint256[2],uint256[4][],uint256[2][])": FunctionFragment;
    "verifySingle(uint256[2],uint256[4],uint256[2])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "hashToPoint"
      | "isZeroBLSKey"
      | "verifyMultiple"
      | "verifySingle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "hashToPoint",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isZeroBLSKey",
    values: [
      [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyMultiple",
    values: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ][],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>][]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySingle",
    values: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "hashToPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isZeroBLSKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyMultiple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifySingle",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BLSOpen extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BLSOpenInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    hashToPoint(
      domain: PromiseOrValue<BytesLike>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber]]>;

    isZeroBLSKey(
      blsKey: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyMultiple(
      signature: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      pubkeys: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ][],
      messages: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>][],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifySingle(
      signature: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      pubkey: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      message: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  hashToPoint(
    domain: PromiseOrValue<BytesLike>,
    message: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  isZeroBLSKey(
    blsKey: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ],
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyMultiple(
    signature: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    pubkeys: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ][],
    messages: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>][],
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifySingle(
    signature: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    pubkey: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ],
    message: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    hashToPoint(
      domain: PromiseOrValue<BytesLike>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    isZeroBLSKey(
      blsKey: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyMultiple(
      signature: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      pubkeys: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ][],
      messages: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>][],
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifySingle(
      signature: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      pubkey: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      message: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    hashToPoint(
      domain: PromiseOrValue<BytesLike>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isZeroBLSKey(
      blsKey: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyMultiple(
      signature: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      pubkeys: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ][],
      messages: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>][],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifySingle(
      signature: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      pubkey: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      message: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    hashToPoint(
      domain: PromiseOrValue<BytesLike>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isZeroBLSKey(
      blsKey: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyMultiple(
      signature: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      pubkeys: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ][],
      messages: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>][],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifySingle(
      signature: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      pubkey: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      message: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
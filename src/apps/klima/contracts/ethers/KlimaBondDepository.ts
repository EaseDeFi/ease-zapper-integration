/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface KlimaBondDepositoryInterface extends utils.Interface {
  functions: {
    'DAO()': FunctionFragment;
    'KLIMA()': FunctionFragment;
    'adjustment()': FunctionFragment;
    'bondCalculator()': FunctionFragment;
    'bondInfo(address)': FunctionFragment;
    'bondPrice()': FunctionFragment;
    'bondPriceInUSD()': FunctionFragment;
    'currentDebt()': FunctionFragment;
    'debtDecay()': FunctionFragment;
    'debtRatio()': FunctionFragment;
    'deposit(uint256,uint256,address)': FunctionFragment;
    'initializeBondTerms(uint256,uint256,uint256,uint256,uint256,uint256,uint256)': FunctionFragment;
    'isLiquidityBond()': FunctionFragment;
    'lastDecay()': FunctionFragment;
    'maxPayout()': FunctionFragment;
    'payoutFor(uint256)': FunctionFragment;
    'pendingPayoutFor(address)': FunctionFragment;
    'percentVestedFor(address)': FunctionFragment;
    'policy()': FunctionFragment;
    'principle()': FunctionFragment;
    'pullManagement()': FunctionFragment;
    'pushManagement(address)': FunctionFragment;
    'recoverLostToken(address)': FunctionFragment;
    'redeem(address,bool)': FunctionFragment;
    'renounceManagement()': FunctionFragment;
    'setAdjustment(bool,uint256,uint256,uint256)': FunctionFragment;
    'setBondTerms(uint8,uint256)': FunctionFragment;
    'setStaking(address,bool)': FunctionFragment;
    'staking()': FunctionFragment;
    'stakingHelper()': FunctionFragment;
    'standardizedDebtRatio()': FunctionFragment;
    'terms()': FunctionFragment;
    'totalDebt()': FunctionFragment;
    'treasury()': FunctionFragment;
    'useHelper()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'DAO'
      | 'KLIMA'
      | 'adjustment'
      | 'bondCalculator'
      | 'bondInfo'
      | 'bondPrice'
      | 'bondPriceInUSD'
      | 'currentDebt'
      | 'debtDecay'
      | 'debtRatio'
      | 'deposit'
      | 'initializeBondTerms'
      | 'isLiquidityBond'
      | 'lastDecay'
      | 'maxPayout'
      | 'payoutFor'
      | 'pendingPayoutFor'
      | 'percentVestedFor'
      | 'policy'
      | 'principle'
      | 'pullManagement'
      | 'pushManagement'
      | 'recoverLostToken'
      | 'redeem'
      | 'renounceManagement'
      | 'setAdjustment'
      | 'setBondTerms'
      | 'setStaking'
      | 'staking'
      | 'stakingHelper'
      | 'standardizedDebtRatio'
      | 'terms'
      | 'totalDebt'
      | 'treasury'
      | 'useHelper',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'DAO', values?: undefined): string;
  encodeFunctionData(functionFragment: 'KLIMA', values?: undefined): string;
  encodeFunctionData(functionFragment: 'adjustment', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bondCalculator', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bondInfo', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'bondPrice', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bondPriceInUSD', values?: undefined): string;
  encodeFunctionData(functionFragment: 'currentDebt', values?: undefined): string;
  encodeFunctionData(functionFragment: 'debtDecay', values?: undefined): string;
  encodeFunctionData(functionFragment: 'debtRatio', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'initializeBondTerms',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'isLiquidityBond', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastDecay', values?: undefined): string;
  encodeFunctionData(functionFragment: 'maxPayout', values?: undefined): string;
  encodeFunctionData(functionFragment: 'payoutFor', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'pendingPayoutFor', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'percentVestedFor', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'policy', values?: undefined): string;
  encodeFunctionData(functionFragment: 'principle', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pullManagement', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pushManagement', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'recoverLostToken', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'redeem', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'renounceManagement', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setAdjustment',
    values: [
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'setBondTerms',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'setStaking', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'staking', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stakingHelper', values?: undefined): string;
  encodeFunctionData(functionFragment: 'standardizedDebtRatio', values?: undefined): string;
  encodeFunctionData(functionFragment: 'terms', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalDebt', values?: undefined): string;
  encodeFunctionData(functionFragment: 'treasury', values?: undefined): string;
  encodeFunctionData(functionFragment: 'useHelper', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'DAO', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'KLIMA', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'adjustment', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bondCalculator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bondInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bondPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bondPriceInUSD', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentDebt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'debtDecay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'debtRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initializeBondTerms', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isLiquidityBond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastDecay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxPayout', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'payoutFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingPayoutFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'percentVestedFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'policy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'principle', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pullManagement', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pushManagement', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recoverLostToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceManagement', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAdjustment', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setBondTerms', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setStaking', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'staking', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakingHelper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'standardizedDebtRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'terms', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalDebt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'treasury', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'useHelper', data: BytesLike): Result;

  events: {
    'BondCreated(uint256,uint256,uint256,uint256)': EventFragment;
    'BondPriceChanged(uint256,uint256,uint256)': EventFragment;
    'BondRedeemed(address,uint256,uint256)': EventFragment;
    'ControlVariableAdjustment(uint256,uint256,uint256,bool)': EventFragment;
    'OwnershipPulled(address,address)': EventFragment;
    'OwnershipPushed(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'BondCreated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'BondPriceChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'BondRedeemed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ControlVariableAdjustment'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipPulled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipPushed'): EventFragment;
}

export interface BondCreatedEventObject {
  deposit: BigNumber;
  payout: BigNumber;
  expires: BigNumber;
  priceInUSD: BigNumber;
}
export type BondCreatedEvent = TypedEvent<[BigNumber, BigNumber, BigNumber, BigNumber], BondCreatedEventObject>;

export type BondCreatedEventFilter = TypedEventFilter<BondCreatedEvent>;

export interface BondPriceChangedEventObject {
  priceInUSD: BigNumber;
  internalPrice: BigNumber;
  debtRatio: BigNumber;
}
export type BondPriceChangedEvent = TypedEvent<[BigNumber, BigNumber, BigNumber], BondPriceChangedEventObject>;

export type BondPriceChangedEventFilter = TypedEventFilter<BondPriceChangedEvent>;

export interface BondRedeemedEventObject {
  recipient: string;
  payout: BigNumber;
  remaining: BigNumber;
}
export type BondRedeemedEvent = TypedEvent<[string, BigNumber, BigNumber], BondRedeemedEventObject>;

export type BondRedeemedEventFilter = TypedEventFilter<BondRedeemedEvent>;

export interface ControlVariableAdjustmentEventObject {
  initialBCV: BigNumber;
  newBCV: BigNumber;
  adjustment: BigNumber;
  addition: boolean;
}
export type ControlVariableAdjustmentEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, boolean],
  ControlVariableAdjustmentEventObject
>;

export type ControlVariableAdjustmentEventFilter = TypedEventFilter<ControlVariableAdjustmentEvent>;

export interface OwnershipPulledEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipPulledEvent = TypedEvent<[string, string], OwnershipPulledEventObject>;

export type OwnershipPulledEventFilter = TypedEventFilter<OwnershipPulledEvent>;

export interface OwnershipPushedEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipPushedEvent = TypedEvent<[string, string], OwnershipPushedEventObject>;

export type OwnershipPushedEventFilter = TypedEventFilter<OwnershipPushedEvent>;

export interface KlimaBondDepository extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KlimaBondDepositoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DAO(overrides?: CallOverrides): Promise<[string]>;

    KLIMA(overrides?: CallOverrides): Promise<[string]>;

    adjustment(overrides?: CallOverrides): Promise<
      [boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
        add: boolean;
        rate: BigNumber;
        target: BigNumber;
        buffer: BigNumber;
        lastBlock: BigNumber;
      }
    >;

    bondCalculator(overrides?: CallOverrides): Promise<[string]>;

    bondInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        payout: BigNumber;
        vesting: BigNumber;
        lastBlock: BigNumber;
        pricePaid: BigNumber;
      }
    >;

    bondPrice(overrides?: CallOverrides): Promise<[BigNumber] & { price_: BigNumber }>;

    bondPriceInUSD(overrides?: CallOverrides): Promise<[BigNumber] & { price_: BigNumber }>;

    currentDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    debtDecay(overrides?: CallOverrides): Promise<[BigNumber] & { decay_: BigNumber }>;

    debtRatio(overrides?: CallOverrides): Promise<[BigNumber] & { debtRatio_: BigNumber }>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      _maxPrice: PromiseOrValue<BigNumberish>,
      _depositor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    initializeBondTerms(
      _controlVariable: PromiseOrValue<BigNumberish>,
      _vestingTerm: PromiseOrValue<BigNumberish>,
      _minimumPrice: PromiseOrValue<BigNumberish>,
      _maxPayout: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _maxDebt: PromiseOrValue<BigNumberish>,
      _initialDebt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    isLiquidityBond(overrides?: CallOverrides): Promise<[boolean]>;

    lastDecay(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxPayout(overrides?: CallOverrides): Promise<[BigNumber]>;

    payoutFor(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    pendingPayoutFor(
      _depositor: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { pendingPayout_: BigNumber }>;

    percentVestedFor(
      _depositor: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { percentVested_: BigNumber }>;

    policy(overrides?: CallOverrides): Promise<[string]>;

    principle(overrides?: CallOverrides): Promise<[string]>;

    pullManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    pushManagement(
      newOwner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    recoverLostToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    redeem(
      _recipient: PromiseOrValue<string>,
      _stake: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    renounceManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    setAdjustment(
      _addition: PromiseOrValue<boolean>,
      _increment: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<BigNumberish>,
      _buffer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setBondTerms(
      _parameter: PromiseOrValue<BigNumberish>,
      _input: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setStaking(
      _staking: PromiseOrValue<string>,
      _helper: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    staking(overrides?: CallOverrides): Promise<[string]>;

    stakingHelper(overrides?: CallOverrides): Promise<[string]>;

    standardizedDebtRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    terms(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        controlVariable: BigNumber;
        vestingTerm: BigNumber;
        minimumPrice: BigNumber;
        maxPayout: BigNumber;
        fee: BigNumber;
        maxDebt: BigNumber;
      }
    >;

    totalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    useHelper(overrides?: CallOverrides): Promise<[boolean]>;
  };

  DAO(overrides?: CallOverrides): Promise<string>;

  KLIMA(overrides?: CallOverrides): Promise<string>;

  adjustment(overrides?: CallOverrides): Promise<
    [boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
      add: boolean;
      rate: BigNumber;
      target: BigNumber;
      buffer: BigNumber;
      lastBlock: BigNumber;
    }
  >;

  bondCalculator(overrides?: CallOverrides): Promise<string>;

  bondInfo(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      payout: BigNumber;
      vesting: BigNumber;
      lastBlock: BigNumber;
      pricePaid: BigNumber;
    }
  >;

  bondPrice(overrides?: CallOverrides): Promise<BigNumber>;

  bondPriceInUSD(overrides?: CallOverrides): Promise<BigNumber>;

  currentDebt(overrides?: CallOverrides): Promise<BigNumber>;

  debtDecay(overrides?: CallOverrides): Promise<BigNumber>;

  debtRatio(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _amount: PromiseOrValue<BigNumberish>,
    _maxPrice: PromiseOrValue<BigNumberish>,
    _depositor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  initializeBondTerms(
    _controlVariable: PromiseOrValue<BigNumberish>,
    _vestingTerm: PromiseOrValue<BigNumberish>,
    _minimumPrice: PromiseOrValue<BigNumberish>,
    _maxPayout: PromiseOrValue<BigNumberish>,
    _fee: PromiseOrValue<BigNumberish>,
    _maxDebt: PromiseOrValue<BigNumberish>,
    _initialDebt: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  isLiquidityBond(overrides?: CallOverrides): Promise<boolean>;

  lastDecay(overrides?: CallOverrides): Promise<BigNumber>;

  maxPayout(overrides?: CallOverrides): Promise<BigNumber>;

  payoutFor(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  pendingPayoutFor(_depositor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  percentVestedFor(_depositor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  policy(overrides?: CallOverrides): Promise<string>;

  principle(overrides?: CallOverrides): Promise<string>;

  pullManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  pushManagement(
    newOwner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  recoverLostToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  redeem(
    _recipient: PromiseOrValue<string>,
    _stake: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  renounceManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  setAdjustment(
    _addition: PromiseOrValue<boolean>,
    _increment: PromiseOrValue<BigNumberish>,
    _target: PromiseOrValue<BigNumberish>,
    _buffer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setBondTerms(
    _parameter: PromiseOrValue<BigNumberish>,
    _input: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setStaking(
    _staking: PromiseOrValue<string>,
    _helper: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  staking(overrides?: CallOverrides): Promise<string>;

  stakingHelper(overrides?: CallOverrides): Promise<string>;

  standardizedDebtRatio(overrides?: CallOverrides): Promise<BigNumber>;

  terms(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      controlVariable: BigNumber;
      vestingTerm: BigNumber;
      minimumPrice: BigNumber;
      maxPayout: BigNumber;
      fee: BigNumber;
      maxDebt: BigNumber;
    }
  >;

  totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

  treasury(overrides?: CallOverrides): Promise<string>;

  useHelper(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    DAO(overrides?: CallOverrides): Promise<string>;

    KLIMA(overrides?: CallOverrides): Promise<string>;

    adjustment(overrides?: CallOverrides): Promise<
      [boolean, BigNumber, BigNumber, BigNumber, BigNumber] & {
        add: boolean;
        rate: BigNumber;
        target: BigNumber;
        buffer: BigNumber;
        lastBlock: BigNumber;
      }
    >;

    bondCalculator(overrides?: CallOverrides): Promise<string>;

    bondInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        payout: BigNumber;
        vesting: BigNumber;
        lastBlock: BigNumber;
        pricePaid: BigNumber;
      }
    >;

    bondPrice(overrides?: CallOverrides): Promise<BigNumber>;

    bondPriceInUSD(overrides?: CallOverrides): Promise<BigNumber>;

    currentDebt(overrides?: CallOverrides): Promise<BigNumber>;

    debtDecay(overrides?: CallOverrides): Promise<BigNumber>;

    debtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      _maxPrice: PromiseOrValue<BigNumberish>,
      _depositor: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initializeBondTerms(
      _controlVariable: PromiseOrValue<BigNumberish>,
      _vestingTerm: PromiseOrValue<BigNumberish>,
      _minimumPrice: PromiseOrValue<BigNumberish>,
      _maxPayout: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _maxDebt: PromiseOrValue<BigNumberish>,
      _initialDebt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    isLiquidityBond(overrides?: CallOverrides): Promise<boolean>;

    lastDecay(overrides?: CallOverrides): Promise<BigNumber>;

    maxPayout(overrides?: CallOverrides): Promise<BigNumber>;

    payoutFor(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    pendingPayoutFor(_depositor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    percentVestedFor(_depositor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    policy(overrides?: CallOverrides): Promise<string>;

    principle(overrides?: CallOverrides): Promise<string>;

    pullManagement(overrides?: CallOverrides): Promise<void>;

    pushManagement(newOwner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    recoverLostToken(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    redeem(
      _recipient: PromiseOrValue<string>,
      _stake: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    renounceManagement(overrides?: CallOverrides): Promise<void>;

    setAdjustment(
      _addition: PromiseOrValue<boolean>,
      _increment: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<BigNumberish>,
      _buffer: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setBondTerms(
      _parameter: PromiseOrValue<BigNumberish>,
      _input: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setStaking(
      _staking: PromiseOrValue<string>,
      _helper: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    staking(overrides?: CallOverrides): Promise<string>;

    stakingHelper(overrides?: CallOverrides): Promise<string>;

    standardizedDebtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    terms(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        controlVariable: BigNumber;
        vestingTerm: BigNumber;
        minimumPrice: BigNumber;
        maxPayout: BigNumber;
        fee: BigNumber;
        maxDebt: BigNumber;
      }
    >;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<string>;

    useHelper(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    'BondCreated(uint256,uint256,uint256,uint256)'(
      deposit?: null,
      payout?: PromiseOrValue<BigNumberish> | null,
      expires?: PromiseOrValue<BigNumberish> | null,
      priceInUSD?: PromiseOrValue<BigNumberish> | null,
    ): BondCreatedEventFilter;
    BondCreated(
      deposit?: null,
      payout?: PromiseOrValue<BigNumberish> | null,
      expires?: PromiseOrValue<BigNumberish> | null,
      priceInUSD?: PromiseOrValue<BigNumberish> | null,
    ): BondCreatedEventFilter;

    'BondPriceChanged(uint256,uint256,uint256)'(
      priceInUSD?: PromiseOrValue<BigNumberish> | null,
      internalPrice?: PromiseOrValue<BigNumberish> | null,
      debtRatio?: PromiseOrValue<BigNumberish> | null,
    ): BondPriceChangedEventFilter;
    BondPriceChanged(
      priceInUSD?: PromiseOrValue<BigNumberish> | null,
      internalPrice?: PromiseOrValue<BigNumberish> | null,
      debtRatio?: PromiseOrValue<BigNumberish> | null,
    ): BondPriceChangedEventFilter;

    'BondRedeemed(address,uint256,uint256)'(
      recipient?: PromiseOrValue<string> | null,
      payout?: null,
      remaining?: null,
    ): BondRedeemedEventFilter;
    BondRedeemed(recipient?: PromiseOrValue<string> | null, payout?: null, remaining?: null): BondRedeemedEventFilter;

    'ControlVariableAdjustment(uint256,uint256,uint256,bool)'(
      initialBCV?: null,
      newBCV?: null,
      adjustment?: null,
      addition?: null,
    ): ControlVariableAdjustmentEventFilter;
    ControlVariableAdjustment(
      initialBCV?: null,
      newBCV?: null,
      adjustment?: null,
      addition?: null,
    ): ControlVariableAdjustmentEventFilter;

    'OwnershipPulled(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipPulledEventFilter;
    OwnershipPulled(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipPulledEventFilter;

    'OwnershipPushed(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipPushedEventFilter;
    OwnershipPushed(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipPushedEventFilter;
  };

  estimateGas: {
    DAO(overrides?: CallOverrides): Promise<BigNumber>;

    KLIMA(overrides?: CallOverrides): Promise<BigNumber>;

    adjustment(overrides?: CallOverrides): Promise<BigNumber>;

    bondCalculator(overrides?: CallOverrides): Promise<BigNumber>;

    bondInfo(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    bondPrice(overrides?: CallOverrides): Promise<BigNumber>;

    bondPriceInUSD(overrides?: CallOverrides): Promise<BigNumber>;

    currentDebt(overrides?: CallOverrides): Promise<BigNumber>;

    debtDecay(overrides?: CallOverrides): Promise<BigNumber>;

    debtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      _maxPrice: PromiseOrValue<BigNumberish>,
      _depositor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    initializeBondTerms(
      _controlVariable: PromiseOrValue<BigNumberish>,
      _vestingTerm: PromiseOrValue<BigNumberish>,
      _minimumPrice: PromiseOrValue<BigNumberish>,
      _maxPayout: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _maxDebt: PromiseOrValue<BigNumberish>,
      _initialDebt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    isLiquidityBond(overrides?: CallOverrides): Promise<BigNumber>;

    lastDecay(overrides?: CallOverrides): Promise<BigNumber>;

    maxPayout(overrides?: CallOverrides): Promise<BigNumber>;

    payoutFor(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    pendingPayoutFor(_depositor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    percentVestedFor(_depositor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    policy(overrides?: CallOverrides): Promise<BigNumber>;

    principle(overrides?: CallOverrides): Promise<BigNumber>;

    pullManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    pushManagement(
      newOwner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    recoverLostToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    redeem(
      _recipient: PromiseOrValue<string>,
      _stake: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    renounceManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    setAdjustment(
      _addition: PromiseOrValue<boolean>,
      _increment: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<BigNumberish>,
      _buffer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setBondTerms(
      _parameter: PromiseOrValue<BigNumberish>,
      _input: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setStaking(
      _staking: PromiseOrValue<string>,
      _helper: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    staking(overrides?: CallOverrides): Promise<BigNumber>;

    stakingHelper(overrides?: CallOverrides): Promise<BigNumber>;

    standardizedDebtRatio(overrides?: CallOverrides): Promise<BigNumber>;

    terms(overrides?: CallOverrides): Promise<BigNumber>;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    useHelper(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    KLIMA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adjustment(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bondCalculator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bondInfo(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bondPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bondPriceInUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    debtDecay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    debtRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _amount: PromiseOrValue<BigNumberish>,
      _maxPrice: PromiseOrValue<BigNumberish>,
      _depositor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    initializeBondTerms(
      _controlVariable: PromiseOrValue<BigNumberish>,
      _vestingTerm: PromiseOrValue<BigNumberish>,
      _minimumPrice: PromiseOrValue<BigNumberish>,
      _maxPayout: PromiseOrValue<BigNumberish>,
      _fee: PromiseOrValue<BigNumberish>,
      _maxDebt: PromiseOrValue<BigNumberish>,
      _initialDebt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    isLiquidityBond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastDecay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxPayout(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payoutFor(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingPayoutFor(_depositor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    percentVestedFor(_depositor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    policy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    principle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    pushManagement(
      newOwner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    recoverLostToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    redeem(
      _recipient: PromiseOrValue<string>,
      _stake: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    renounceManagement(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    setAdjustment(
      _addition: PromiseOrValue<boolean>,
      _increment: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<BigNumberish>,
      _buffer: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setBondTerms(
      _parameter: PromiseOrValue<BigNumberish>,
      _input: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setStaking(
      _staking: PromiseOrValue<string>,
      _helper: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    staking(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakingHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    standardizedDebtRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    terms(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    useHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

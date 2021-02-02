// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
export default {
  "CallOf": "Call",
  "DispatchTime": {
    "_enum": {
      "At": "BlockNumber",
      "After": "BlockNumber"
    }
  },
  "ScheduleTaskIndex": "u32",
  "DelayedOrigin": {
    "delay": "BlockNumber",
    "origin": "PalletsOrigin"
  },
  "StorageValue": "Vec<u8>",
  "GraduallyUpdate": {
    "key": "StorageKey",
    "targetValue": "StorageValue",
    "perBlock": "StorageValue"
  },
  "RpcDataProviderId": "Text",
  "DataProviderId": {
    "_enum": [
      "Aggregated",
      "Shadows",
      "Band"
    ]
  },
  "TimestampedValue": {
    "value": "OracleValue",
    "timestamp": "Moment"
  },
  "TimestampedValueOf": "TimestampedValue",
  "OrderedSet": "Vec<AccountId>",
  "OrmlAccountData": {
    "free": "Balance",
    "frozen": "Balance",
    "reserved": "Balance"
  },
  "OrmlBalanceLock": {
    "amount": "Balance",
    "id": "LockIdentifier"
  },
  "AuctionInfo": {
    "bid": "Option<(AccountId, Balance)>",
    "start": "BlockNumber",
    "end": "Option<BlockNumber>"
  },
  "DelayedDispatchTime": {
    "_enum": {
      "At": "BlockNumber",
      "After": "BlockNumber"
    }
  },
  "DispatchId": "u32",
  "Price": "FixedU128",
  "OrmlVestingSchedule": {
    "start": "BlockNumber",
    "period": "BlockNumber",
    "periodCount": "u32",
    "perPeriod": "Compact<Balance>"
  },
  "VestingScheduleOf": "OrmlVestingSchedule",
  "PoolInfo": {
    "totalShares": "Compact<Share>",
    "totalRewards": "Compact<Balance>",
    "totalWithdrawnRewards": "Compact<Balance>"
  },
  "Share": "u128",
  "OracleValue": "Price",
  "PalletBalanceOf": "Balance",
  "CollateralAuctionItem": {
    "refundRecipient": "AccountId",
    "currencyId": "CurrencyId",
    "initialAmount": "Compact<Balance>",
    "amount": "Compact<Balance>",
    "target": "Compact<Balance>",
    "startTime": "BlockNumber"
  },
  "DebitAuctionItem": {
    "initialAmount": "Compact<Balance>",
    "amount": "Compact<Balance>",
    "fix": "Compact<Balance>",
    "startTime": "BlockNumber"
  },
  "SurplusAuctionItem": {
    "amount": "Compact<Balance>",
    "startTime": "BlockNumber"
  },
  "LiquidationStrategy": {
    "_enum": [
      "Auction",
      "Exchange"
    ]
  },
  "OptionRate": "Option<Rate>",
  "OptionRatio": "Option<Ratio>",
  "ChangeOptionRate": {
    "_enum": {
      "NoChange": "Null",
      "NewValue": "OptionRate"
    }
  },
  "ChangeOptionRatio": {
    "_enum": {
      "NoChange": "Null",
      "NewValue": "OptionRatio"
    }
  },
  "ChangeBalance": {
    "_enum": {
      "NoChange": "Null",
      "NewValue": "Balance"
    }
  },
  "RiskManagementParams": {
    "maximumTotalDebitValue": "Balance",
    "stabilityFee": "Option<Rate>",
    "liquidationRatio": "Option<Rate>",
    "liquidationPenalty": "Option<Rate>",
    "requiredCollateralRatio": "Option<Rate>"
  },
  "TradingPairProvisionParameters": {
    "minContribution": "(Balance, Balance)",
    "targetProvision": "(Balance, Balance)",
    "accumulatedProvision": "(Balance, Balance)",
    "notBefore": "BlockNumber"
  },
  "BalanceWrapper": {
    "amount": "Balance"
  },
  "BalanceRequest": {
    "amount": "Balance"
  },
  "TradingPairStatus": {
    "_enum": {
      "NotEnabled": "Null",
      "Provisioning": "TradingPairProvisionParameters",
      "Enabled": "Null"
    }
  },
  "EvmAccountInfo": {
    "nonce": "Index",
    "contractInfo": "Option<EvmContractInfo>",
    "storageRentDeposit": "Balance",
    "storageQuota": "u32",
    "storageUsage": "u32",
    "developerDeposit": "Option<Balance>"
  },
  "CodeInfo": {
    "codeSize": "u32",
    "refCount": "u32"
  },
  "EvmContractInfo": {
    "storageCount": "u32",
    "codeHash": "H256",
    "existentialDeposit": "Balance",
    "maintainer": "H160",
    "deployed": "bool"
  },
  "EvmAddress": "H160",
  "CallRequest": {
    "from": "Option<H160>",
    "to": "Option<H160>",
    "gasLimit": "Option<u32>",
    "value": "Option<U128>",
    "data": "Option<Bytes>"
  },
  "ExitReason": {
    "_enum": {
      "Succeed": "ExitSucceed",
      "Error": "ExitError",
      "Revert": "ExitRevert",
      "Fatal": "ExitFatal"
    }
  },
  "ExitSucceed": {
    "_enum": [
      "Stopped",
      "Returned",
      "Suicided"
    ]
  },
  "ExitError": {
    "_enum": {
      "StackUnderflow": "Null",
      "StackOverflow": "Null",
      "InvalidJump": "Null",
      "InvalidRange": "Null",
      "DesignatedInvalid": "Null",
      "CallTooDeep": "Null",
      "CreateCollision": "Null",
      "CreateContractLimit": "Null",
      "OutOfOffset": "Null",
      "OutOfGas": "Null",
      "OutOfFund": "Null",
      "PCUnderflow": "Null",
      "CreateEmpty": "Null",
      "Other": "Text"
    }
  },
  "ExitRevert": {
    "_enum": [
      "Reverted"
    ]
  },
  "ExitFatal": {
    "_enum": {
      "NotSupported": "Null",
      "UnhandledInterrupt": "Null",
      "CallErrorAsFatal": "ExitError",
      "Other": "Text"
    }
  },
  "RedeemStrategy": {
    "_enum": {
      "Immediately": "Null",
      "Target": "EraIndex",
      "WaitForUnbonding": "Null"
    }
  },
  "PoolId": {
    "_enum": {
      "Loans": "CurrencyId",
      "DexIncentive": "CurrencyId",
      "DexSaving": "CurrencyId",
      "Homa": "Null"
    }
  },
  "Position": {
    "collateral": "Balance",
    "debit": "Balance"
  },
  "CID": "Vec<u8>",
  "ClassId": "u32",
  "ClassIdOf": "ClassId",
  "TokenId": "u64",
  "TokenIdOf": "TokenId",
  "ClassInfoOf": {
    "metadata": "CID",
    "totalIssuance": "TokenId",
    "owner": "AccountId",
    "data": "ClassData"
  },
  "TokenInfoOf": {
    "metadata": "CID",
    "owner": "AccountId",
    "data": "TokenData"
  },
  "ClassData": {
    "deposit": "Balance",
    "properties": "Properties"
  },
  "TokenData": {
    "deposit": "Balance"
  },
  "Properties": {
    "_set": {
      "_bitLength": 8,
      "Transferable": 1,
      "Burnable": 2
    }
  },
  "HomaUnlockChunk": {
    "value": "Compact<Balance>",
    "era": "Compact<EraIndex>"
  },
  "BondingLedger": {
    "total": "Compact<Balance>",
    "active": "Compact<Balance>",
    "unlocking": "Vec<UnlockChunk>"
  },
  "Amount": "i128",
  "AmountOf": "Amount",
  "AuctionId": "u32",
  "AuctionIdOf": "AuctionId",
  "TokenSymbol": {
    "_enum": [
      "DOS",
      "AUSD",
      "DOT",
      "XBTC",
      "LDOT",
      "RENBTC"
    ]
  },
  "CurrencyId": {
    "_enum": {
      "Token": "TokenSymbol",
      "DEXShare": "(TokenSymbol, TokenSymbol)",
      "ERC20": "EvmAddress"
    }
  },
  "CurrencyIdOf": "CurrencyId",

  "AuthoritysOriginId": {
    "_enum": [
      "Root",
      "ShadowsTreasury",
      "HonzonTreasury",
      "HomaTreasury",
      "DSWF"
    ]
  },
  "TradingPair": "(CurrencyId,  CurrencyId)",
  "NFTBalance": "u128",
  "OracleKey": "CurrencyId",
  "DestAddress": "Vec<u8>",
  "AsOriginId": "AuthoritysOriginId",
  "SubAccountStatus": {
    "bonded": "Balance",
    "available": "Balance",
    "unbonding": "Vec<(EraIndex,Balance)>",
    "mockRewardRate": "Rate"
  },
  "Params": {
    "targetMaxFreeUnbondedRatio": "Ratio",
    "targetMinFreeUnbondedRatio": "Ratio",
    "targetUnbondingToFreeRatio": "Ratio",
    "unbondingToFreeAdjustment": "Ratio",
    "baseFeeRate": "Rate"
  },
  "Ledger": {
    "bonded": "Balance",
    "unbondingToFree": "Balance",
    "freePool": "Balance",
    "toUnbondNextEra": "(Balance, Balance)"
  },
  "ChangeRate": {
    "_enum": {
      "NoChange": "Null",
      "NewValue": "Rate"
    }
  },
  "ChangeRatio": {
    "_enum": {
      "NoChange": "Null",
      "NewValue": "Ratio"
    }
  },
  "BalanceInfo": {
    "amount": "Balance"
  },
  "PolkadotAccountId": "AccountId",
  "PolkadotAccountIdOf": "PolkadotAccountId",
  "ExchangeRate": "FixedU128",
  "Rate": "FixedU128",
  "Ratio": "FixedU128",
  "Keys": "SessionKeys2",
  "PalletsOrigin": {
    "_enum": {
      "System": "SystemOrigin",
      "Timestamp": "Null",
      "RandomnessCollectiveFlip": "Null",
      "Balances": "Null",
      "Accounts": "Null",
      "Currencies": "Null",
      "Tokens": "Null",
      "Vesting": "Null",
      "ShadowsTreasury": "Null",
      "Utility": "Null",
      "Multisig": "Null",
      "Recovery": "Null",
      "Proxy": "Null",
      "Scheduler": "Null",
      "Indices": "Null",
      "GraduallyUpdate": "Null",
      "Authorship": "Null",
      "Babe": "Null",
      "Grandpa": "Null",
      "Staking": "Null",
      "Session": "Null",
      "Historical": "Null",
      "GeneralCouncil": "CollectiveOrigin",
      "GeneralCouncilMembership": "Null",
      "HonzonCouncil": "CollectiveOrigin",
      "HonzonCouncilMembership": "Null",
      "HomaCouncil": "CollectiveOrigin",
      "HomaCouncilMembership": "Null",
      "TechnicalCommittee": "CollectiveOrigin",
      "TechnicalCommitteeMembership": "Null",
      "Authority": "DelayedOrigin",
      "ElectionsPhragmen": "Null",
      "ShadowsOracle": "Null",
      "BandOracle": "Null",
      "OperatorMembershipShadows": "Null",
      "OperatorMembershipBand": "Null",
      "Auction": "Null",
      "Rewards": "Null",
      "OrmlNFT": "Null",
      "Ingester": "Null",
      "Exchange": "Null",
      "AuctionManager": "Null",
      "Lend": "Null",
      "Mintx": "Null",
      "DebtTreasury": "Null",
      "DebtEngine": "Null",
      "EmergencyShutdown": "Null",
      "Homa": "Null",
      "NomineesElection": "Null",
      "StakingPool": "Null",
      "PolkadotBridge": "Null",
      "Incentives": "Null",
      "NFT": "Null",
      "RenVmBridge": "Null",
      "Contracts": "Null",
      "EVM": "Null",
      "Sudo": "Null",
      "TransactionPayment": "Null"
    }
  }
};

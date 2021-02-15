// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
export default {
  AccountId: "EthereumAccountId",
  Address: "AccountId",
  Balance: "u128",
  LookupSource: "AccountId",
  Account: {
    nonce: "U256",
    balance: "u128",
  },
  ExtrinsicSignature: "EthereumSignature",
  RoundIndex: "u32",
  Candidate: {
    validator: "AccountId",
    fee: "Perbill",
    nominators: "Vec<Bond>",
    total: "Balance",
    state: "ValidatorStatus",
  },
  Bond: {
    owner: "AccountId",
    amount: "Balance",
  },
  ValidatorStatus: {
    _enum: ["Active", "Idle", "Leaving(RoundIndex)"],
  },
};

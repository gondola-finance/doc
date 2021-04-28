This contract is responsible for custody of closely pegged assets (eg. group of stablecoins)
and automatic market making system. Users become an LP (Liquidity Provider) by depositing their tokens
in desired ratios for an exchange of the pool token that represents their share of the pool.
Users can burn pool tokens and withdraw their share of token(s).

Each time a swap between the pooled tokens happens, a set fee incurs which effectively gets
distributed to the LPs.

In case of emergencies, admin can pause additional deposits, swaps, or single-asset withdraws - which
stops the ratio of the tokens in the pool from changing.
Users can always withdraw their tokens via multi-asset withdraws.


Most of the logic is stored as a library `SwapUtils` for the sake of reducing contract's
deployment size.

## Functions
### initialize
```solidity
  function initialize(
    contract IERC20[] _pooledTokens,
    uint8[] decimals,
    string lpTokenName,
    string lpTokenSymbol,
    uint256 _a,
    uint256 _fee,
    uint256 _adminFee,
    uint256 _withdrawFee
  ) public
```
Initializes this Swap contract with the given parameters.
This will also deploy the LPToken that represents users
LP position. The owner of LPToken will be this contract - which means
only this contract is allowed to mint new tokens.



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_pooledTokens` | contract IERC20[] | an array of ERC20s this pool will accept
|`decimals` | uint8[] | the decimals to use for each pooled token,
eg 8 for WBTC. Cannot be larger than POOL_PRECISION_DECIMALS
|`lpTokenName` | string | the long-form name of the token to be deployed
|`lpTokenSymbol` | string | the short symbol for the token to be deployed
|`_a` | uint256 | the amplification coefficient * n * (n - 1). See the
StableSwap paper for details
|`_fee` | uint256 | default swap fee to be initialized with
|`_adminFee` | uint256 | default adminFee to be initialized with
|`_withdrawFee` | uint256 | default withdrawFee to be initialized with

### getA
```solidity
  function getA(
  ) external returns (uint256)
```
Return A, the amplification coefficient * n * (n - 1)

See the StableSwap paper for details


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`A`|  | parameter
### getAPrecise
```solidity
  function getAPrecise(
  ) external returns (uint256)
```
Return A in its raw precision form

See the StableSwap paper for details


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`A`|  | parameter in its raw precision form
### getToken
```solidity
  function getToken(
    uint8 index
  ) public returns (contract IERC20)
```
Return address of the pooled token at given index. Reverts if tokenIndex is out of range.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`index` | uint8 | the index of the token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`address`| uint8 | of the token at given index
### getTokenIndex
```solidity
  function getTokenIndex(
    address tokenAddress
  ) public returns (uint8)
```
Return the index of the given token address. Reverts if no matching
token is found.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenAddress` | address | address of the token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| address | index of the given token address
### getDepositTimestamp
```solidity
  function getDepositTimestamp(
  ) external returns (uint256)
```
Return timestamp of last deposit of given address



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`timestamp`| address | of the last deposit made by the given address
### getTokenBalance
```solidity
  function getTokenBalance(
    uint8 index
  ) external returns (uint256)
```
Return current balance of the pooled token at given index


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`index` | uint8 | the index of the token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`current`| uint8 | balance of the pooled token at given index with token's native precision
### getVirtualPrice
```solidity
  function getVirtualPrice(
  ) external returns (uint256)
```
Get the virtual price, to help calculate profit



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`|  | virtual price, scaled to the POOL_PRECISION_DECIMALS
### calculateSwap
```solidity
  function calculateSwap(
    uint8 tokenIndexFrom,
    uint8 tokenIndexTo,
    uint256 dx
  ) external returns (uint256)
```
Calculate amount of tokens you receive on swap


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIndexFrom` | uint8 | the token the user wants to sell
|`tokenIndexTo` | uint8 | the token the user wants to buy
|`dx` | uint256 | the amount of tokens the user wants to sell. If the token charges
a fee on transfers, use the amount that gets transferred after the fee.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint8 | of tokens the user will receive
### calculateTokenAmount
```solidity
  function calculateTokenAmount(
    address account,
    uint256[] amounts,
    bool deposit
  ) external returns (uint256)
```
A simple method to calculate prices from deposits or
withdrawals, excluding fees but including slippage. This is
helpful as an input into the various "min" parameters on calls
to fight front-running


This shouldn't be used outside frontends for user estimates.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | address that is depositing or withdrawing tokens
|`amounts` | uint256[] | an array of token amounts to deposit or withdrawal,
corresponding to pooledTokens. The amount should be in each
pooled token's native precision. If a token charges a fee on transfers,
use the amount that gets transferred after the fee.
|`deposit` | bool | whether this is a deposit or a withdrawal

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`token`| address | amount the user will receive
### calculateRemoveLiquidity
```solidity
  function calculateRemoveLiquidity(
    address account,
    uint256 amount
  ) external returns (uint256[])
```
A simple method to calculate amount of each underlying
tokens that is returned upon burning given amount of LP tokens


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | the address that is withdrawing tokens
|`amount` | uint256 | the amount of LP tokens that would be burned on withdrawal

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`array`| address | of token balances that the user will receive
### calculateRemoveLiquidityOneToken
```solidity
  function calculateRemoveLiquidityOneToken(
    address account,
    uint256 tokenAmount,
    uint8 tokenIndex
  ) external returns (uint256 availableTokenAmount)
```
Calculate the amount of underlying token available to withdraw
when withdrawing via only single token


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | the address that is withdrawing tokens
|`tokenAmount` | uint256 | the amount of LP token to burn
|`tokenIndex` | uint8 | index of which token will be withdrawn

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`availableTokenAmount`| address | calculated amount of underlying token
available to withdraw
### calculateCurrentWithdrawFee
```solidity
  function calculateCurrentWithdrawFee(
    address user
  ) external returns (uint256)
```
Calculate the fee that is applied when the given user withdraws. The withdraw fee
decays linearly over period of 4 weeks. For example, depositing and withdrawing right away
will charge you the full amount of withdraw fee. But withdrawing after 4 weeks will charge you
no additional fees.

returned value should be divided by FEE_DENOMINATOR to convert to correct decimals

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | address you want to calculate withdraw fee of

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`current`| address | withdraw fee of the user
### getAdminBalance
```solidity
  function getAdminBalance(
    uint256 index
  ) external returns (uint256)
```
This function reads the accumulated amount of admin fees of the token with given index


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`index` | uint256 | Index of the pooled token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`s`| uint256 | token balance in the token's precision
### swap
```solidity
  function swap(
    uint8 tokenIndexFrom,
    uint8 tokenIndexTo,
    uint256 dx,
    uint256 minDy,
    uint256 deadline
  ) external returns (uint256)
```
Swap two tokens using this pool


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIndexFrom` | uint8 | the token the user wants to swap from
|`tokenIndexTo` | uint8 | the token the user wants to swap to
|`dx` | uint256 | the amount of tokens the user wants to swap from
|`minDy` | uint256 | the min amount the user would like to receive, or revert.
|`deadline` | uint256 | latest timestamp to accept this transaction

### addLiquidity
```solidity
  function addLiquidity(
    uint256[] amounts,
    uint256 minToMint,
    uint256 deadline
  ) external returns (uint256)
```
Add liquidity to the pool with the given amounts of tokens


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amounts` | uint256[] | the amounts of each token to add, in their native precision
|`minToMint` | uint256 | the minimum LP tokens adding this amount of liquidity
should mint, otherwise revert. Handy for front-running mitigation
|`deadline` | uint256 | latest timestamp to accept this transaction

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256[] | of LP token user minted and received
### removeLiquidity
```solidity
  function removeLiquidity(
    uint256 amount,
    uint256[] minAmounts,
    uint256 deadline
  ) external returns (uint256[])
```
Burn LP tokens to remove liquidity from the pool. Withdraw fee that decays linearly
over period of 4 weeks since last deposit will apply.

Liquidity can always be removed, even when the pool is paused.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | the amount of LP tokens to burn
|`minAmounts` | uint256[] | the minimum amounts of each token in the pool
       acceptable for this burn. Useful as a front-running mitigation
|`deadline` | uint256 | latest timestamp to accept this transaction

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amounts`| uint256 | of tokens user received
### removeLiquidityOneToken
```solidity
  function removeLiquidityOneToken(
    uint256 tokenAmount,
    uint8 tokenIndex,
    uint256 minAmount,
    uint256 deadline
  ) external returns (uint256)
```
Remove liquidity from the pool all in one token. Withdraw fee that decays linearly
over period of 4 weeks since last deposit will apply.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenAmount` | uint256 | the amount of the token you want to receive
|`tokenIndex` | uint8 | the index of the token you want to receive
|`minAmount` | uint256 | the minimum amount to withdraw, otherwise revert
|`deadline` | uint256 | latest timestamp to accept this transaction

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | of chosen token user received
### removeLiquidityImbalance
```solidity
  function removeLiquidityImbalance(
    uint256[] amounts,
    uint256 maxBurnAmount,
    uint256 deadline
  ) external returns (uint256)
```
Remove liquidity from the pool, weighted differently than the
pool's current balances. Withdraw fee that decays linearly
over period of 4 weeks since last deposit will apply.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amounts` | uint256[] | how much of each token to withdraw
|`maxBurnAmount` | uint256 | the max LP token provider is willing to pay to
remove liquidity. Useful as a front-running mitigation.
|`deadline` | uint256 | latest timestamp to accept this transaction

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256[] | of LP tokens burned
### updateUserWithdrawFee
```solidity
  function updateUserWithdrawFee(
    address recipient,
    uint256 transferAmount
  ) external
```
Updates the user withdraw fee. This function can only be called by
the pool token. Should be used to update the withdraw fee on transfer of pool tokens.
Transferring your pool token will reset the 4 weeks period. If the recipient is already
holding some pool tokens, the withdraw fee will be discounted in respective amounts.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address | address of the recipient of pool token
|`transferAmount` | uint256 | amount of pool token to transfer

### withdrawAdminFees
```solidity
  function withdrawAdminFees(
  ) external
```
Withdraw all admin fees to the contract owner



### setAdminFee
```solidity
  function setAdminFee(
    uint256 newAdminFee
  ) external
```
Update the admin fee. Admin fee takes portion of the swap fee.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newAdminFee` | uint256 | new admin fee to be applied on future transactions

### setSwapFee
```solidity
  function setSwapFee(
    uint256 newSwapFee
  ) external
```
Update the swap fee to be applied on swaps


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newSwapFee` | uint256 | new swap fee to be applied on future transactions

### setDefaultWithdrawFee
```solidity
  function setDefaultWithdrawFee(
    uint256 newWithdrawFee
  ) external
```
Update the withdraw fee. This fee decays linearly over 4 weeks since
user's last deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newWithdrawFee` | uint256 | new withdraw fee to be applied on future deposits

### rampA
```solidity
  function rampA(
    uint256 futureA,
    uint256 futureTime
  ) external
```
Start ramping up or down A parameter towards given futureA and futureTime
Checks if the change is too rapid, and commits the new A value only when it falls under
the limit range.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`futureA` | uint256 | the new A to ramp towards
|`futureTime` | uint256 | timestamp when the new A should be reached

### stopRampA
```solidity
  function stopRampA(
  ) external
```
Stop ramping A immediately. Reverts if ramp A is already stopped.



## Events
### TokenSwap
```solidity
  event TokenSwap(
  )
```



### AddLiquidity
```solidity
  event AddLiquidity(
  )
```



### RemoveLiquidity
```solidity
  event RemoveLiquidity(
  )
```



### RemoveLiquidityOne
```solidity
  event RemoveLiquidityOne(
  )
```



### RemoveLiquidityImbalance
```solidity
  event RemoveLiquidityImbalance(
  )
```



### NewAdminFee
```solidity
  event NewAdminFee(
  )
```



### NewSwapFee
```solidity
  event NewSwapFee(
  )
```



### NewWithdrawFee
```solidity
  event NewWithdrawFee(
  )
```



### RampA
```solidity
  event RampA(
  )
```



### StopRampA
```solidity
  event StopRampA(
  )
```




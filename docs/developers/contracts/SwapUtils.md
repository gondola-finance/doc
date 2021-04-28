A library to be used within Swap.sol. Contains functions responsible for custody and AMM functionalities.

Contracts relying on this library must initialize SwapUtils.Swap struct then use this library
for SwapUtils.Swap struct. Note that this library contains both functions called by users and admins.
Admin functions should be protected within contracts using this library.

## Functions
### getA
```solidity
  function getA(
    struct SwapUtils.Swap self
  ) external returns (uint256)
```
Return A, the amplification coefficient * n * (n - 1)

See the StableSwap paper for details

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`A`| struct SwapUtils.Swap | parameter
### _getA
```solidity
  function _getA(
    struct SwapUtils.Swap self
  ) internal returns (uint256)
```
Return A, the amplification coefficient * n * (n - 1)

See the StableSwap paper for details

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`A`| struct SwapUtils.Swap | parameter
### getAPrecise
```solidity
  function getAPrecise(
    struct SwapUtils.Swap self
  ) external returns (uint256)
```
Return A in its raw precision

See the StableSwap paper for details

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`A`| struct SwapUtils.Swap | parameter in its raw precision form
### _getAPrecise
```solidity
  function _getAPrecise(
    struct SwapUtils.Swap self
  ) internal returns (uint256)
```
Calculates and returns A based on the ramp settings

See the StableSwap paper for details

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`A`| struct SwapUtils.Swap | parameter in its raw precision form
### getDepositTimestamp
```solidity
  function getDepositTimestamp(
    struct SwapUtils.Swap self
  ) external returns (uint256)
```
Retrieves the timestamp of last deposit made by the given address


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`timestamp`| struct SwapUtils.Swap | of last deposit
### calculateWithdrawOneToken
```solidity
  function calculateWithdrawOneToken(
    struct SwapUtils.Swap account,
    address tokenAmount,
    uint256 tokenIndex,
    uint8 self
  ) public returns (uint256, uint256)
```
Calculate the dy, the amount of selected token that user receives and
the fee of withdrawing in one token


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | struct SwapUtils.Swap | the address that is withdrawing
|`tokenAmount` | address | the amount to withdraw in the pool's precision
|`tokenIndex` | uint256 | which token will be withdrawn
|`self` | uint8 | Swap struct to read from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| struct SwapUtils.Swap | amount of token user will receive and the associated swap fee
### calculateWithdrawOneTokenDY
```solidity
  function calculateWithdrawOneTokenDY(
    struct SwapUtils.Swap self,
    uint8 tokenIndex,
    uint256 tokenAmount
  ) internal returns (uint256, uint256)
```
Calculate the dy of withdrawing in one token


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from
|`tokenIndex` | uint8 | which token will be withdrawn
|`tokenAmount` | uint256 | the amount to withdraw in the pools precision

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| struct SwapUtils.Swap | d and the new y after withdrawing one token
### getYD
```solidity
  function getYD(
    uint256 a,
    uint8 tokenIndex,
    uint256[] xp,
    uint256 d
  ) internal returns (uint256)
```
Calculate the price of a token in the pool with given
precision-adjusted balances and a particular D.


This is accomplished via solving the invariant iteratively.
See the StableSwap paper and Curve.fi implementation for further details.

x_1**2 + x1 * (sum' - (A*n**n - 1) * D / (A * n**n)) = D ** (n + 1) / (n ** (2 * n) * prod' * A)
x_1**2 + b*x_1 = c
x_1 = (x_1**2 + c) / (2*x_1 + b)


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`a` | uint256 | the amplification coefficient * n * (n - 1). See the StableSwap paper for details.
|`tokenIndex` | uint8 | Index of token we are calculating for.
|`xp` | uint256[] | a precision-adjusted set of pool balances. Array should be
the same cardinality as the pool.
|`d` | uint256 | the stableswap invariant

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| uint256 | price of the token, in the same precision as in xp
### getD
```solidity
  function getD(
    uint256[] xp,
    uint256 a
  ) internal returns (uint256)
```
Get D, the StableSwap invariant, based on a set of balances and a particular A.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xp` | uint256[] | a precision-adjusted set of pool balances. Array should be the same cardinality
as the pool.
|`a` | uint256 | the amplification coefficient * n * (n - 1) in A_PRECISION.
See the StableSwap paper for details

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| uint256[] | invariant, at the precision of the pool
### getD
```solidity
  function getD(
    struct SwapUtils.Swap self
  ) internal returns (uint256)
```
Get D, the StableSwap invariant, based on self Swap struct


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| struct SwapUtils.Swap | invariant, at the precision of the pool
### _xp
```solidity
  function _xp(
    uint256[] balances,
    uint256[] precisionMultipliers
  ) internal returns (uint256[])
```
Given a set of balances and precision multipliers, return the
precision-adjusted balances.



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`balances` | uint256[] | an array of token balances, in their native precisions.
These should generally correspond with pooled tokens.

|`precisionMultipliers` | uint256[] | an array of multipliers, corresponding to
the amounts in the balances array. When multiplied together they
should yield amounts at the pool's precision.


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`an`| uint256[] | array of amounts "scaled" to the pool's precision
### _xp
```solidity
  function _xp(
    struct SwapUtils.Swap self,
    uint256[] balances
  ) internal returns (uint256[])
```
Return the precision-adjusted balances of all tokens in the pool


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from
|`balances` | uint256[] | array of balances to scale

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balances`| struct SwapUtils.Swap | array "scaled" to the pool's precision, allowing
them to be more easily compared.
### _xp
```solidity
  function _xp(
    struct SwapUtils.Swap self
  ) internal returns (uint256[])
```
Return the precision-adjusted balances of all tokens in the pool


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| struct SwapUtils.Swap | pool balances "scaled" to the pool's precision, allowing
them to be more easily compared.
### getVirtualPrice
```solidity
  function getVirtualPrice(
    struct SwapUtils.Swap self
  ) external returns (uint256)
```
Get the virtual price, to help calculate profit


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| struct SwapUtils.Swap | virtual price, scaled to precision of POOL_PRECISION_DECIMALS
### getY
```solidity
  function getY(
    struct SwapUtils.Swap self,
    uint8 tokenIndexFrom,
    uint8 tokenIndexTo,
    uint256 x,
    uint256[] xp
  ) internal returns (uint256)
```
Calculate the new balances of the tokens given the indexes of the token
that is swapped from (FROM) and the token that is swapped to (TO).
This function is used as a helper function to calculate how much TO token
the user should receive on swap.



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from
|`tokenIndexFrom` | uint8 | index of FROM token
|`tokenIndexTo` | uint8 | index of TO token
|`x` | uint256 | the new total amount of FROM token
|`xp` | uint256[] | balances of the tokens in the pool

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| struct SwapUtils.Swap | amount of TO token that should remain in the pool
### calculateSwap
```solidity
  function calculateSwap(
    struct SwapUtils.Swap self,
    uint8 tokenIndexFrom,
    uint8 tokenIndexTo,
    uint256 dx
  ) external returns (uint256 dy)
```
Externally calculates a swap between two tokens.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from
|`tokenIndexFrom` | uint8 | the token to sell
|`tokenIndexTo` | uint8 | the token to buy
|`dx` | uint256 | the number of tokens to sell. If the token charges a fee on transfers,
use the amount that gets transferred after the fee.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`dy`| struct SwapUtils.Swap | the number of tokens the user will get
### _calculateSwap
```solidity
  function _calculateSwap(
    struct SwapUtils.Swap self,
    uint8 tokenIndexFrom,
    uint8 tokenIndexTo,
    uint256 dx
  ) internal returns (uint256 dy, uint256 dyFee)
```
Internally calculates a swap between two tokens.


The caller is expected to transfer the actual amounts (dx and dy)
using the token contracts.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from
|`tokenIndexFrom` | uint8 | the token to sell
|`tokenIndexTo` | uint8 | the token to buy
|`dx` | uint256 | the number of tokens to sell. If the token charges a fee on transfers,
use the amount that gets transferred after the fee.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`dy`| struct SwapUtils.Swap | the number of tokens the user will get
|`dyFee`| uint8 | the associated fee
### calculateRemoveLiquidity
```solidity
  function calculateRemoveLiquidity(
    struct SwapUtils.Swap account,
    address amount
  ) external returns (uint256[])
```
A simple method to calculate amount of each underlying
tokens that is returned upon burning given amount of
LP tokens



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | struct SwapUtils.Swap | the address that is removing liquidity. required for withdraw fee calculation
|`amount` | address | the amount of LP tokens that would to be burned on
withdrawal

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`array`| struct SwapUtils.Swap | of amounts of tokens user will receive
### _calculateRemoveLiquidity
```solidity
  function _calculateRemoveLiquidity(
  ) internal returns (uint256[])
```




### calculateCurrentWithdrawFee
```solidity
  function calculateCurrentWithdrawFee(
    struct SwapUtils.Swap user
  ) public returns (uint256)
```
Calculate the fee that is applied when the given user withdraws.
Withdraw fee decays linearly over 4 weeks.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | struct SwapUtils.Swap | address you want to calculate withdraw fee of

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`current`| struct SwapUtils.Swap | withdraw fee of the user
### calculateTokenAmount
```solidity
  function calculateTokenAmount(
    struct SwapUtils.Swap self,
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
|`self` | struct SwapUtils.Swap | Swap struct to read from
|`account` | address | address of the account depositing or withdrawing tokens
|`amounts` | uint256[] | an array of token amounts to deposit or withdrawal,
corresponding to pooledTokens. The amount should be in each
pooled token's native precision. If a token charges a fee on transfers,
use the amount that gets transferred after the fee.
|`deposit` | bool | whether this is a deposit or a withdrawal

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`if`| struct SwapUtils.Swap | deposit was true, total amount of lp token that will be minted and if
deposit was false, total amount of lp token that will be burned
### getAdminBalance
```solidity
  function getAdminBalance(
    struct SwapUtils.Swap self,
    uint256 index
  ) external returns (uint256)
```
return accumulated amount of admin fees of the token with given index


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from
|`index` | uint256 | Index of the pooled token

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`admin`| struct SwapUtils.Swap | balance in the token's precision
### _feePerToken
```solidity
  function _feePerToken(
    struct SwapUtils.Swap self
  ) internal returns (uint256)
```
internal helper function to calculate fee per token multiplier used in
swap fee calculations


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from

### swap
```solidity
  function swap(
    struct SwapUtils.Swap self,
    uint8 tokenIndexFrom,
    uint8 tokenIndexTo,
    uint256 dx,
    uint256 minDy
  ) external returns (uint256)
```
swap two tokens in the pool


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from and write to
|`tokenIndexFrom` | uint8 | the token the user wants to sell
|`tokenIndexTo` | uint8 | the token the user wants to buy
|`dx` | uint256 | the amount of tokens the user wants to sell
|`minDy` | uint256 | the min amount the user would like to receive, or revert.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| struct SwapUtils.Swap | of token user received on swap
### addLiquidity
```solidity
  function addLiquidity(
    struct SwapUtils.Swap self,
    uint256[] amounts,
    uint256 minToMint
  ) external returns (uint256)
```
Add liquidity to the pool


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from and write to
|`amounts` | uint256[] | the amounts of each token to add, in their native precision
|`minToMint` | uint256 | the minimum LP tokens adding this amount of liquidity
should mint, otherwise revert. Handy for front-running mitigation
allowed addresses. If the pool is not in the guarded launch phase, this parameter will be ignored.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| struct SwapUtils.Swap | of LP token user received
### updateUserWithdrawFee
```solidity
  function updateUserWithdrawFee(
    struct SwapUtils.Swap self,
    address user,
    uint256 toMint
  ) external
```
Update the withdraw fee for `user`. If the user is currently
not providing liquidity in the pool, sets to default value. If not, recalculate
the starting withdraw fee based on the last deposit's time & amount relative
to the new deposit.



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from and write to
|`user` | address | address of the user depositing tokens
|`toMint` | uint256 | amount of pool tokens to be minted

### _updateUserWithdrawFee
```solidity
  function _updateUserWithdrawFee(
  ) internal
```




### removeLiquidity
```solidity
  function removeLiquidity(
    struct SwapUtils.Swap self,
    uint256 amount,
    uint256[] minAmounts
  ) external returns (uint256[])
```
Burn LP tokens to remove liquidity from the pool.

Liquidity can always be removed, even when the pool is paused.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from and write to
|`amount` | uint256 | the amount of LP tokens to burn
|`minAmounts` | uint256[] | the minimum amounts of each token in the pool
acceptable for this burn. Useful as a front-running mitigation

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amounts`| struct SwapUtils.Swap | of tokens the user received
### removeLiquidityOneToken
```solidity
  function removeLiquidityOneToken(
    struct SwapUtils.Swap self,
    uint256 tokenAmount,
    uint8 tokenIndex,
    uint256 minAmount
  ) external returns (uint256)
```
Remove liquidity from the pool all in one token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from and write to
|`tokenAmount` | uint256 | the amount of the lp tokens to burn
|`tokenIndex` | uint8 | the index of the token you want to receive
|`minAmount` | uint256 | the minimum amount to withdraw, otherwise revert

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| struct SwapUtils.Swap | chosen token that user received
### removeLiquidityImbalance
```solidity
  function removeLiquidityImbalance(
    struct SwapUtils.Swap self,
    uint256[] amounts,
    uint256 maxBurnAmount
  ) public returns (uint256)
```
Remove liquidity from the pool, weighted differently than the
pool's current balances.



#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to read from and write to
|`amounts` | uint256[] | how much of each token to withdraw
|`maxBurnAmount` | uint256 | the max LP token provider is willing to pay to
remove liquidity. Useful as a front-running mitigation.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`actual`| struct SwapUtils.Swap | amount of LP tokens burned in the withdrawal
### withdrawAdminFees
```solidity
  function withdrawAdminFees(
    struct SwapUtils.Swap self,
    address to
  ) external
```
withdraw all admin fees to a given address


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to withdraw fees from
|`to` | address | Address to send the fees to

### setAdminFee
```solidity
  function setAdminFee(
    struct SwapUtils.Swap self,
    uint256 newAdminFee
  ) external
```
Sets the admin fee

adminFee cannot be higher than 100% of the swap fee

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to update
|`newAdminFee` | uint256 | new admin fee to be applied on future transactions

### setSwapFee
```solidity
  function setSwapFee(
    struct SwapUtils.Swap self,
    uint256 newSwapFee
  ) external
```
update the swap fee

fee cannot be higher than 1% of each swap

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to update
|`newSwapFee` | uint256 | new swap fee to be applied on future transactions

### setDefaultWithdrawFee
```solidity
  function setDefaultWithdrawFee(
    struct SwapUtils.Swap self,
    uint256 newWithdrawFee
  ) external
```
update the default withdraw fee. This also affects deposits made in the past as well.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to update
|`newWithdrawFee` | uint256 | new withdraw fee to be applied

### rampA
```solidity
  function rampA(
    struct SwapUtils.Swap self,
    uint256 futureA_,
    uint256 futureTime_
  ) external
```
Start ramping up or down A parameter towards given futureA_ and futureTime_
Checks if the change is too rapid, and commits the new A value only when it falls under
the limit range.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to update
|`futureA_` | uint256 | the new A to ramp towards
|`futureTime_` | uint256 | timestamp when the new A should be reached

### stopRampA
```solidity
  function stopRampA(
    struct SwapUtils.Swap self
  ) external
```
Stops ramping A immediately. Once this function is called, rampA()
cannot be called for another 24 hours


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`self` | struct SwapUtils.Swap | Swap struct to update

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




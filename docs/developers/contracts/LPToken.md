This token is an ERC20 detailed token with added capability to be minted by the owner.
It is used to represent user's shares when providing liquidity to swap contracts.


## Functions
### constructor
```solidity
  function constructor(
    string name_,
    string symbol_,
    uint8 decimals_
  ) public
```
Deploys LPToken contract with given name, symbol, and decimals

the caller of this constructor will become the owner of this contract

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`name_` | string | name of this token
|`symbol_` | string | symbol of this token
|`decimals_` | uint8 | number of decimals this token will be based on

### mint
```solidity
  function mint(
    address recipient,
    uint256 amount
  ) external
```
Mints the given amount of LPToken to the recipient.

only owner can call this mint function

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address | address of account to receive the tokens
|`amount` | uint256 | amount of tokens to mint

### _beforeTokenTransfer
```solidity
  function _beforeTokenTransfer(
  ) internal
```

Overrides ERC20._beforeTokenTransfer() which get called on every transfers including
minting and burning. This ensures that swap.updateUserWithdrawFees are called everytime.



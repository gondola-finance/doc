This contract simulates a generic ERC20 token that is mintable and burnable.


## Functions
### constructor
```solidity
  function constructor(
    string name_,
    string symbol_,
    uint8 decimals_
  ) public
```
Deploy this contract with given name, symbol, and decimals

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
Mints given amount of tokens to recipient

only owner can call this mint function

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address | address of account to receive the tokens
|`amount` | uint256 | amount of tokens to mint


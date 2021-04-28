
A wrapper for an ERC-20 that can be staked and withdrawn.

In this contract, staked tokens don't do anything- instead other
contracts can inherit from this one to add functionality.
/
c

## Functions
### constructor
```solidity
  function constructor(
    contract IERC20 _stakedToken
  ) public
```

Creates a new StakeableTokenWrapper with given `_stakedToken` address


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_stakedToken` | contract IERC20 | address of a token that will be used to stake
/

### balanceOf
```solidity
  function balanceOf(
    address account
  ) external returns (uint256)
```

Read how much `account` has staked in this contract


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | address of an account

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| address | of total staked ERC20(this.stakedToken) by `account`
/
### stake
```solidity
  function stake(
    uint256 amount
  ) external
```

Stakes given `amount` in this contract


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | amount of ERC20(this.stakedToken) to stake
/

### withdraw
```solidity
  function withdraw(
    uint256 amount
  ) external
```

Withdraws given `amount` from this contract


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | amount of ERC20(this.stakedToken) to withdraw
/

## Events
### Staked
```solidity
  event Staked(
  )
```



### Withdrawn
```solidity
  event Withdrawn(
  )
```




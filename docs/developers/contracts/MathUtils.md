A library to be used in conjunction with SafeMath. Contains functions for calculating
differences between two uint256.


## Functions
### within1
```solidity
  function within1(
    uint256 a,
    uint256 b
  ) external returns (bool)
```
Compares a and b and returns true if the difference between a and b
        is less than 1 or equal to each other.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`a` | uint256 | uint256 to compare with
|`b` | uint256 | uint256 to compare with

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`True`| uint256 | if the difference between a and b is less than 1 or equal,
        otherwise return false
### difference
```solidity
  function difference(
    uint256 a,
    uint256 b
  ) external returns (uint256)
```
Calculates absolute difference between a and b


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`a` | uint256 | uint256 to compare with
|`b` | uint256 | uint256 to compare with

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Difference`| uint256 | between a and b
### _difference
```solidity
  function _difference(
    uint256 a,
    uint256 b
  ) internal returns (uint256)
```
Calculates absolute difference between a and b


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`a` | uint256 | uint256 to compare with
|`b` | uint256 | uint256 to compare with

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Difference`| uint256 | between a and b

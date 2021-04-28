Replacement of Virtual Synths in favor of gas savings. Allows swapping synths via the Synthetix protocol
or Gondola's pools. The `Bridge.sol` contract will deploy minimal clones of this contract upon initiating
any cross-asset swaps.


## Functions
### constructor
```solidity
  function constructor(
  ) public
```
Deploys this contract and sets the `owner`. Note that when creating clones of this contract,
the owner will be constant and cannot be changed.



### swapSynth
```solidity
  function swapSynth(
    bytes32 sourceKey,
    uint256 synthAmount,
    bytes32 destKey
  ) external returns (uint256)
```
Swaps the synth to another synth via the Synthetix protocol.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`sourceKey` | bytes32 | currency key of the source synth
|`synthAmount` | uint256 | amount of the synth to swap
|`destKey` | bytes32 | currency key of the destination synth

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| bytes32 | of the destination synth received
### swapSynthToToken
```solidity
  function swapSynthToToken(
    contract ISwap swap,
    contract IERC20 tokenFrom,
    uint8 tokenFromIndex,
    uint8 tokenToIndex,
    uint256 tokenFromAmount,
    uint256 minAmount,
    uint256 deadline,
    address recipient
  ) external returns (contract IERC20, uint256)
```
Approves the given `tokenFrom` and swaps it to another token via the given `swap` pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swap` | contract ISwap | the address of a pool to swap through
|`tokenFrom` | contract IERC20 | the address of the stored synth
|`tokenFromIndex` | uint8 | the index of the token to swap from
|`tokenToIndex` | uint8 | the token the user wants to swap to
|`tokenFromAmount` | uint256 | the amount of the token to swap
|`minAmount` | uint256 | the min amount the user would like to receive, or revert.
|`deadline` | uint256 | latest timestamp to accept this transaction
|`recipient` | address | the address of the recipient

### withdraw
```solidity
  function withdraw(
    contract IERC20 token,
    address recipient,
    uint256 withdrawAmount,
    bool shouldDestroy
  ) external
```
Withdraws the given amount of `token` to the `recipient`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | contract IERC20 | the address of the token to withdraw
|`recipient` | address | the address of the account to receive the token
|`withdrawAmount` | uint256 | the amount of the token to withdraw
|`shouldDestroy` | bool | whether this contract should be destroyed after this call

### destroy
```solidity
  function destroy(
  ) external
```
Destroys this contract. Only owner can call this function.



### _destroy
```solidity
  function _destroy(
  ) internal
```





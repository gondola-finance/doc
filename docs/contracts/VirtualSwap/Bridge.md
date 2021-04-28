This contract is responsible for cross-asset swaps using the Synthetix protocol as the bridging exchange.
There are three types of supported cross-asset swaps, tokenToSynth, synthToToken, and tokenToToken.

1) tokenToSynth
Swaps a supported token in a gondola pool to any synthetic asset (e.g. tBTC -> sAAVE).

2) synthToToken
Swaps any synthetic asset to a suported token in a gondola pool (e.g. sDEFI -> USDC).

3) tokenToToken
Swaps a supported token in a gondola pool to one in another pool (e.g. renBTC -> DAI).

Due to the settlement periods of synthetic assets, the users must wait until the trades can be completed.
Users will receive an ERC721 token that represents pending cross-asset swap. Once the waiting period is over,
the trades can be settled and completed by calling the `completeToSynth` or the `completeToToken` function.
In the cases of pending `synthToToken` or `tokenToToken` swaps, the owners of the pending swaps can also choose
to withdraw the bridging synthetic assets instead of completing the swap.


## Functions
### constructor
```solidity
  function constructor(
  ) public
```
Deploys this contract and initializes the master version of the SynthSwapper contract. The address to
the Synthetix protocol's Exchanger contract is also set on deployment.



### getProxyAddressFromTargetSynthKey
```solidity
  function getProxyAddressFromTargetSynthKey(
    bytes32 synthKey
  ) public returns (contract IERC20)
```
Returns the address of the proxy contract targeting the synthetic asset with the given `synthKey`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`synthKey` | bytes32 | the currency key of the synth

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`address`| bytes32 | of the proxy contract
### getPendingSwapInfo
```solidity
  function getPendingSwapInfo(
    uint256 itemId
  ) external returns (enum Bridge.PendingSwapType swapType, uint256 secsLeft, address synth, uint256 synthBalance, address tokenTo)
```
Returns various information of a pending swap represented by the given `itemId`. Information includes
the type of the pending swap, the number of seconds left until it can be settled, the address and the balance
of the synth this swap currently holds, and the address of the destination token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`itemId` | uint256 | ID of the pending swap

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`swapType`| uint256 | the type of the pending virtual swap,
secsLeft number of seconds left until this swap can be settled,
synth address of the synth this swap uses,
synthBalance amount of the synth this swap holds,
tokenTo the address of the destination token
### _settle
```solidity
  function _settle(
  ) internal
```




### withdraw
```solidity
  function withdraw(
    uint256 itemId,
    uint256 amount
  ) external
```
Settles and withdraws the synthetic asset without swapping it to a token in a Gondola pool. Only the owner
of the ERC721 token of `itemId` can call this function. Reverts if the given `itemId` does not represent a
`synthToToken` or a `tokenToToken` swap.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`itemId` | uint256 | ID of the pending swap
|`amount` | uint256 | the amount of the synth to withdraw

### completeToSynth
```solidity
  function completeToSynth(
    uint256 itemId
  ) external
```
Completes the pending `tokenToSynth` swap by settling and withdrawing the synthetic asset.
Reverts if the given `itemId` does not represent a `tokenToSynth` swap.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`itemId` | uint256 | ERC721 token ID representing a pending `tokenToSynth` swap

### calcCompleteToToken
```solidity
  function calcCompleteToToken(
    uint256 itemId,
    uint256 swapAmount
  ) external returns (uint256)
```
Calculates the expected amount of the token to receive on calling `completeToToken()` with
the given `swapAmount`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`itemId` | uint256 | ERC721 token ID representing a pending `SynthToToken` or `TokenToToken` swap
|`swapAmount` | uint256 | the amount of bridging synth to swap from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`expected`| uint256 | amount of the token the user will receive
### completeToToken
```solidity
  function completeToToken(
    uint256 itemId,
    uint256 swapAmount,
    uint256 minAmount,
    uint256 deadline
  ) external
```
Completes the pending `SynthToToken` or `TokenToToken` swap by settling the bridging synth and swapping
it to the desired token. Only the owners of the pending swaps can call this function.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`itemId` | uint256 | ERC721 token ID representing a pending `SynthToToken` or `TokenToToken` swap
|`swapAmount` | uint256 | the amount of bridging synth to swap from
|`minAmount` | uint256 | the minimum amount of the token to receive - reverts if this amount is not reached
|`deadline` | uint256 | the timestamp representing the deadline for this transaction - reverts if deadline is not met

### _addToPendingSynthSwapList
```solidity
  function _addToPendingSynthSwapList(
  ) internal returns (uint256)
```




### _addToPendingSynthToTokenSwapList
```solidity
  function _addToPendingSynthToTokenSwapList(
  ) internal returns (uint256)
```




### calcTokenToSynth
```solidity
  function calcTokenToSynth(
    contract ISwap swap,
    uint8 tokenFromIndex,
    bytes32 synthOutKey,
    uint256 tokenInAmount
  ) external returns (uint256)
```
Calculates the expected amount of the desired synthetic asset the caller will receive after completing
a `TokenToSynth` swap with the given parameters. This calculation does not consider the settlement periods.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swap` | contract ISwap | the address of a Gondola pool to use to swap the given token to a bridging synth
|`tokenFromIndex` | uint8 | the index of the token to swap from
|`synthOutKey` | bytes32 | the currency key of the desired synthetic asset
|`tokenInAmount` | uint256 | the amount of the token to swap form

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| contract ISwap | expected amount of the desired synth
### tokenToSynth
```solidity
  function tokenToSynth(
    contract ISwap swap,
    uint8 tokenFromIndex,
    bytes32 synthOutKey,
    uint256 tokenInAmount,
    uint256 minAmount
  ) external returns (uint256)
```
Initiates a cross-asset swap from a token supported in the `swap` pool to any synthetic asset.
The caller will receive an ERC721 token representing their ownership of the pending cross-asset swap.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swap` | contract ISwap | the address of a Gondola pool to use to swap the given token to a bridging synth
|`tokenFromIndex` | uint8 | the index of the token to swap from
|`synthOutKey` | bytes32 | the currency key of the desired synthetic asset
|`tokenInAmount` | uint256 | the amount of the token to swap form
|`minAmount` | uint256 | the amount of the token to swap form

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`ID`| contract ISwap | of the ERC721 token sent to the caller
### calcSynthToToken
```solidity
  function calcSynthToToken(
    contract ISwap swap,
    bytes32 synthInKey,
    uint8 tokenToIndex,
    uint256 synthInAmount
  ) external returns (uint256, uint256)
```
Calculates the expected amount of the desired token the caller will receive after completing
a `SynthToToken` swap with the given parameters. This calculation does not consider the settlement periods or
any potential changes of the `swap` pool composition.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swap` | contract ISwap | the address of a Gondola pool to use to swap the given token to a bridging synth
|`synthInKey` | bytes32 | the currency key of the synth to swap from
|`tokenToIndex` | uint8 | the index of the token to swap to
|`synthInAmount` | uint256 | the amount of the synth to swap form

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| contract ISwap | expected amount of the bridging synth and the expected amount of the desired token
### synthToToken
```solidity
  function synthToToken(
    contract ISwap swap,
    bytes32 synthInKey,
    uint8 tokenToIndex,
    uint256 synthInAmount,
    uint256 minMediumSynthAmount
  ) external returns (uint256)
```
Initiates a cross-asset swap from a synthetic asset to a supported token. The caller will receive
an ERC721 token representing their ownership of the pending cross-asset swap.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swap` | contract ISwap | the address of a Gondola pool to use to swap the given token to a bridging synth
|`synthInKey` | bytes32 | the currency key of the synth to swap from
|`tokenToIndex` | uint8 | the index of the token to swap to
|`synthInAmount` | uint256 | the amount of the synth to swap form
|`minMediumSynthAmount` | uint256 | the minimum amount of the bridging synth at pre-settlement stage

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| contract ISwap | ID of the ERC721 token sent to the caller
### calcTokenToToken
```solidity
  function calcTokenToToken(
    contract ISwap[2] swaps,
    uint8 tokenFromIndex,
    uint8 tokenToIndex,
    uint256 tokenFromAmount
  ) external returns (uint256, uint256)
```
Calculates the expected amount of the desired token the caller will receive after completing
a `TokenToToken` swap with the given parameters. This calculation does not consider the settlement periods or
any potential changes of the pool compositions.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swaps` | contract ISwap[2] | the addresses of the two Gondola pools used to do the cross-asset swap
|`tokenFromIndex` | uint8 | the index of the token in the first `swaps` pool to swap from
|`tokenToIndex` | uint8 | the index of the token in the second `swaps` pool to swap to
|`tokenFromAmount` | uint256 | the amount of the token to swap from

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| contract ISwap[2] | expected amount of bridging synth at pre-settlement stage and the expected amount of the desired
token
### tokenToToken
```solidity
  function tokenToToken(
    contract ISwap[2] swaps,
    uint8 tokenFromIndex,
    uint8 tokenToIndex,
    uint256 tokenFromAmount,
    uint256 minMediumSynthAmount
  ) external returns (uint256)
```
Initiates a cross-asset swap from a token in one Gondola pool to one in another. The caller will receive
an ERC721 token representing their ownership of the pending cross-asset swap.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swaps` | contract ISwap[2] | the addresses of the two Gondola pools used to do the cross-asset swap
|`tokenFromIndex` | uint8 | the index of the token in the first `swaps` pool to swap from
|`tokenToIndex` | uint8 | the index of the token in the second `swaps` pool to swap to
|`tokenFromAmount` | uint256 | the amount of the token to swap from
|`minMediumSynthAmount` | uint256 | the minimum amount of the bridging synth at pre-settlement stage

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| contract ISwap[2] | ID of the ERC721 token sent to the caller
### setSynthIndex
```solidity
  function setSynthIndex(
    contract ISwap swap,
    uint8 synthIndex,
    bytes32 currencyKey
  ) external
```
Registers the index and the address of the supported synth from the given `swap` pool. The matching currency key must
be supplied for a successful registration.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swap` | contract ISwap | the address of the pool that contains the synth
|`synthIndex` | uint8 | the index of the supported synth in the given `swap` pool
|`currencyKey` | bytes32 | the currency key of the synth in bytes32 form

### getSynthIndex
```solidity
  function getSynthIndex(
    contract ISwap swap
  ) public returns (uint8)
```
Returns the index of the supported synth in the given `swap` pool. Reverts if the `swap` pool
is not registered.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swap` | contract ISwap | the address of the pool that contains the synth

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| contract ISwap | index of the supported synth
### getSynthAddress
```solidity
  function getSynthAddress(
    contract ISwap swap
  ) public returns (address)
```
Returns the address of the supported synth in the given `swap` pool. Reverts if the `swap` pool
is not registered.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swap` | contract ISwap | the address of the pool that contains the synth

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| contract ISwap | address of the supported synth
### getSynthKey
```solidity
  function getSynthKey(
    contract ISwap swap
  ) public returns (bytes32)
```
Returns the currency key of the supported synth in the given `swap` pool. Reverts if the `swap` pool
is not registered.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`swap` | contract ISwap | the address of the pool that contains the synth

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`the`| contract ISwap | currency key of the supported synth
### updateExchangerCache
```solidity
  function updateExchangerCache(
  ) public
```
Updates the stored address of the `EXCHANGER` contract. When the Synthetix team upgrades their protocol,
a new Exchanger contract is deployed. This function manually updates the stored address.



## Events
### SynthIndex
```solidity
  event SynthIndex(
  )
```



### TokenToSynth
```solidity
  event TokenToSynth(
  )
```



### SynthToToken
```solidity
  event SynthToToken(
  )
```



### TokenToToken
```solidity
  event TokenToToken(
  )
```



### Settle
```solidity
  event Settle(
  )
```



### Withdraw
```solidity
  event Withdraw(
  )
```




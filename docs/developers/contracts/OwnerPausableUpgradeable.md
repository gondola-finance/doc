An ownable contract allows the owner to pause and unpause the
contract without a delay.

Only methods using the provided modifiers will be paused.

## Functions
### __OwnerPausable_init
```solidity
  function __OwnerPausable_init(
  ) internal
```




### pause
```solidity
  function pause(
  ) external
```
Pause the contract. Revert if already paused.



### unpause
```solidity
  function unpause(
  ) external
```
Unpause the contract. Revert if already unpaused.




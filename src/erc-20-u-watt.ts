import {
  Approval as ApprovalEvent,
  DelegateChanged as DelegateChangedEvent,
  DelegateVotesChanged as DelegateVotesChangedEvent,
  Transfer as TransferEvent,
} from "../generated/ERC20UWatt/ERC20UWatt";
import {
  Approval,
  DelegateChanged,
  DelegateVotesChanged,
  Transfer,
} from "../generated/schema";

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.spender = event.params.spender;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDelegateChanged(event: DelegateChangedEvent): void {
  let entity = new DelegateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.delegator = event.params.delegator;
  entity.fromDelegate = event.params.fromDelegate;
  entity.toDelegate = event.params.toDelegate;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDelegateVotesChanged(
  event: DelegateVotesChangedEvent
): void {
  let entity = new DelegateVotesChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.delegate = event.params.delegate;
  entity.previousBalance = event.params.previousBalance;
  entity.newBalance = event.params.newBalance;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

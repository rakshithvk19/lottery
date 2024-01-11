## Blockchain notes

# Steps to develop a Dapp.

# What is EVM?

- https://www.quicknode.com/guides/ethereum-development/getting-started/what-is-the-ethereum-virtual-machine-evm
  EVM stands for Ethereum Virtual Machine

- It is a VIRTUALIZED RUNTIME environment that is used to execute byte code.

What is RUNTIME Environmemt? -> runtime environment is the environment in which a program or application is executed. It's the hardware and software infrastructure that supports the running of a particular codebase in real time

- EVM is a piece of software that executes smart contracts (and its transcations) and computes the state of the Ethereum network after each new block is added to the chain(so its a state machine).

- The Ethereum Virtual Machine (EVM) is the computation engine for Ethereum that manages the state of the blockchain and enables smart contract functionality.

- Unlike a normal virtual machine, EVM is maintained by all the nodes executing the blockchain network.

- Unlike other runtime environments, it does not have any specific hardware.

- The EVM participates in 1.)block creation and 2.)transaction execution.

- The EVM executes tasks formatted in bytecode which the EVM interprets in Opcodes.
  i.e the smart contracts are compiled to bytecode, but they are interpreted as OpCodes, EX:{
  60003560e01c80632e64cec11461003b5780636057361d1461005957

  Each byte in the example above refers to a different Opcode. For example, the first byte (e.g., 60) refers to a PUSH1 opcode, the next byte (e.g., 00) refers to the data being pushed, the third byte (60) refers to the PUSH1 opcode again, and the next byte refers to its input (e.g., e0).
  }

1. Write the smart contract for the DApp using Solidity or any other programming language.
2. Then you compile the contract using a compilier, so that you compile the code as a BYTECODE and ABI
   - BYTECODE is the machine level instructions of the same smartcontract, which is deployed into the blockchain.
   - It is not human readable.

# Setting up Hardhat

https://www.youtube.com/watch?v=gXacfUFfZ_Q

1. Node
2. Transcation --> Cryptographically signed instructions from account. It is used to update the state of the Ethereum network.
3. Address --> An identifier to specify a particular account state.
4. Blocks --> Its a bunch of transcations.
5. Mining --> The process to check the validity of a block(Bunch of Transcations) / for a computer to create a valid block (i.e, group together a bunch of valid transcations) / Or bundle the transcations in such a way that the ?
6. Accounts --> Its an entity that can send transcations on Ethereum. Each account has a state + 20 Byte Address( to recognise the account ) ?
   a. Externally Owned Accounts
   b. Contract Accounts
7. State --> ?

# Transaction.

Cryptographically signed instructions from Externally Owned Account(EOA) and not a contract account.
It is used to update the state of the Ethereum network.

## Parts of Transcation

1. Nonce :The nonce is an integer value that starts from zero for the first transaction sent from the account and increments by one for each subsequent transaction.
   This ensures that each transaction is unique and maintains a specific order.
   They help in preventing replay attack -- > if a malicious actor tries to take an earlier transaction with a lower nonce and re-broadcast it to the network, then the validator nodes will check for the nonce value and if it is lesser than the current nonce its gonna reject the transcation broadcast.
   Nonce is calculated based on the senders address by the ethereum network.
2. From --> The account address from which the instruction is sent from.
3. To --> The account address to which the instruction sent to.
4. Value --> The amount of Ether (ETH) being sent with the transaction.
5. GasLimit -->
6. MaxFeePerGas -->
7. MaxPriorityFeePerGas -->
8. Data/ Transcation Input / init --> For normal value transfers, this field is typically empty. For contract calls, this field contains the input data required for the smart contract to execute specific functions.

# Storage

In Ethereum, a contract has three types of storage:

1. Storage:
   i.Persistant data storage --> contract’s long-term memory area that stores variables even after a function or a transaction is done executing.
   ii.A contract’s state variables (i.e. variables declared inside a contract, but not inside a function) are stored in the `storage` memory area.
   iii. In other programming environments, if we want to store data in the long term, we pawn this off to database or a file system, a smart contract’s code and data are both persisted together long-term on the blockchain.
   iv.Variables stored in storage are tamper proof via the cryptographic-sealing properties that blockchains give us.
   v. Each contact gets its own `storage` which is PERSISTANT and READ-WRITE data into it.
   vi. Contracts can read and write into its own `storage` only.
   vii. A contract’s `storage` is divided up into 2²⁵⁶ slots of 32 bytes each and are referenced by indexes, starting at 0 and ending at 2²⁵⁶.
2. Memory: Temporary data storage that exists during function execution and is erased after the function execution completes.
3. Stack / Calldata:
   i. Used to stored the arguments passed to a function, in a specific part of the memory.
   ii. Storage is read-only, so immutable and its much secure.
   iii. Accessing data from calldata is much more gas-efficient -- how? --> Since calldata is read-only and its content cannot be changed, operations on calldata tend to consume less gas than operations on other types of storage.
   Note: Functions having `external` modifiers, automatically have their parameters stored as `calldata`.
   iv. external functions have their parameters stored in `calldata`.
   whats the advantage?
   i. creates a standardized way to interact between different contracts in the blockchain.
   ii.since calldata is a readonly field, external contracts can use the data, without the worry of the parameters changing during execution and maintaining integrity.

# Validator

# Gas

## Solidity

1. Modifiers --> modifiers are a way to encapsulate reusable code that can be added to functions in a smart contract.
   Modifiers are commonly used for access control, input validation, or other common checks. They help improve code readability, maintainability, and the overall security of smart contracts.

2. Require --> it is same like if else, BUT they reverse the transaction if the condition fails, hence being more gas efficient.

3. Mapping --> its used to declare a data structure that associates keys with values. It is similar to a hash table or dictionary in other programming languages.

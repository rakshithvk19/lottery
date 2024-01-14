# Lottery

1. Multiple people can set up a lottery, where the owner of the lottery get some percentage of the money and the platform gets some percentage of teh money.
   i. have to add restrictions to it.

2. Add a timer to the lottery that will automatically pick the winner after a certain time or the timer can be set by the owner.
   i. the timer start only when the minimum number of players are met.
   ii. min lottery pool met

   External Scheduler (Web2):
   Web3.js / ethers.js Script (Web2 or Web3):
   Ethereum Alarm Clock (Web3):

   Chainlink VRF (Web3): -- gotta pay
   Chainlink Keepers (Web3): -- gotta pay

3. Cost to maintain the contract to be considered.
4. Percentage of the pool money to the contract owner

Consider what happens if the contract has more than 10 players, but not enough to be statistically meaningful. Adjust the threshold based on your specific requirements.

3. **Handling Ether Overflow:**

   - Consider scenarios where the total Ether balance in the contract exceeds what can be transferred using the `transfer` function due to gas limitations. This could happen if there is a very large number of players, and the gas cost for transferring exceeds the block gas limit.

4. **Multiple Transactions in a Single Block:**

   - When multiple transactions are included in a single block, the order of execution can impact the randomness generated using `block.timestamp`. Ensure that the randomness generation logic is resilient to potential manipulation.

5. **Race Conditions:**

   - Be aware of potential race conditions, especially when handling arrays and balances. Ensure that multiple transactions can't interfere with each other, leading to unexpected outcomes.

6. **Gas Costs and Block Limitations:**

   - Be mindful of the gas costs associated with the functions, especially when handling arrays or loops. Ensure that the functions do not exceed the block gas limit, which could result in transactions being reverted.

7. **Handling Reentrancy Attacks:**

   - Protect against reentrancy attacks by being cautious when interacting with external contracts or sending Ether. Consider using the reentrancyGuard pattern to prevent reentrancy vulnerabilities.

8. **Testing and Simulation:**

   - Test the contract thoroughly under various conditions, including edge cases, to ensure its correctness. Use testing frameworks like Truffle or Hardhat to simulate different scenarios.

9. **Gas Efficiency:**

   - Optimize the contract for gas efficiency. For example, consider the gas costs associated with array operations, especially when the array becomes large.

10. **Upgradeability:**
    - Consider whether the contract needs to be upgradeable in the future. If upgradeability is a requirement, ensure that the necessary patterns are implemented.

Remember that the specific requirements and edge cases can vary based on the intended use and design of your lottery contract. Always thoroughly test and audit your contract, and consider seeking external code reviews for security and best practices.

11. Fallback function, what happens to an address, once created, can it be destroyed?
12. Implementing scalability of the contact?

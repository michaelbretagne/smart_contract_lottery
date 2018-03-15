const path = require('path');
const fs = require('fs');

// Solidity compiler
const solc = require('solc');

// Get the path of our contract
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
// Read our contract
const source =  fs.readFileSync(lotteryPath, 'utf8');

// Export our compiled contract
module.exports = solc.compile(source, 1).contracts[':Lottery'];
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      accounts: ["0xТВОЙ_ПРИВАТНЫЙ_КЛЮЧ"]
    }
  }
};

const networkConfig = {
    31337: {
        name: "localhost",
    },
    11155111: {
        name: "sepolia",
        ethUSDPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306"
    },
    5: {
        name: "goeril",
        ethUSDPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
    }
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
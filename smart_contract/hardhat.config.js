require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/JADNHhnRnDCj3kZlFalqQ4WVytnPZ-D2',
      accounts: ['50ada5ec20ae0564576168e2d52ec55c277ee0daea0bc255a2429eed75129457'],
    },
  },
};
const twitter = artifacts.require('./Twitter.sol');

module.exports = function(deployer) {
  deployer.deploy(twitter);
};
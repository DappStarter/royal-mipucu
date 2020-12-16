require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strategy regret scrub property inside light army gentle'; 
let testAccounts = [
"0x54ac5ed957a899881c7e916d98148ce2b2ed50b526657f7a1d65eeaccac1a78a",
"0x65b425bd7eadfcd5eb7fcbca5fc57b999b754dcbd21eb0e52504b6b638f2150a",
"0x1f407b42152a9576e84e71823522d4312212cf373127c83685bf5aefa3b271ca",
"0x4f78698464e9a60e73a727b15d10dba9190fe7a3c34e9611c2a612993d397c7c",
"0x91fea5d7c04a1a7738d249ebd96c91fc3196eea6ad1b0a4ae8252c56a174eae5",
"0x5fa37c278e43596f661376202114e3288680d6bb726a552613fbdbea913ca824",
"0x6a2eff6879fe5501aa616b66468bafbd99fc81ba187b38b08ae0f3f68178fd5d",
"0xc9f0a78492b6ae5bd5eb16ac0a297d6565cd1f630048675f84a2acdfcb17ed43",
"0x9047245b236465012fc3174e953e1fc02fef87eecdd4fea7f6d7d8d080fd35a7",
"0x2c9019a834f7cf1f85b7ce53963c5e4e11046db8526206380a76823314c4eb4f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

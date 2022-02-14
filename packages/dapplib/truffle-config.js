require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note soccer method hidden process bright sense'; 
let testAccounts = [
"0x3f64705c09bcd87db5b1cb118a8c58bebfcfd82bee65abe1b5872596b013f332",
"0x82942cae0972e4cfd256d9b30b293b2601ac7adefa0f1a7274f065aa56450a15",
"0xe3de8b0646de40f42546d6a7fe5a16a76f22b0a9e675220d0828669e545a467d",
"0x055b7f9109b087f3f2902cd58987c2435199050cbd9a1426f78c6209d2bd488f",
"0xb4c321bfd58576b2fc09703f09949fb803f6725615308ee0149ee32a0c706a23",
"0x2fbdff06bc7a42c4a730a0a0ecda503beedc11a942e42825219a817621d02086",
"0x8ec8a9bbba21a5136593bf5739f61786da005cb345adb9218528d69ef98171a7",
"0xe8755f171f50d382b648ddf0db9de7a08f9a60e693c948814d8dfe4d55c1b1e6",
"0xde7cb949cc394fa15071bf2e5eac00e69ccd99e9bc47b3d5fd76544c0adcb4b8",
"0x367f8368fa933c6d5ad9702405c3da4df1b4ec8161d947146e6caa823211519f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



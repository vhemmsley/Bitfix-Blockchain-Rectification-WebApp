import { createStore } from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default createStore({
  state() {
    return {
      exchanges: [
        { id: 'metamask', name: 'Metamask', picture: 'static/metamask.png' },
        { id: 'coinbase', name: 'Coinbase', picture: 'static/coinbase.png' },
        { id: 'trustwallet', name: 'Trust Wallet', picture: 'static/trustwallet.png' },
        { id: 'phantom', name: 'Phantom Wallet', picture: 'static/phantom1.png' },
        { id: 'binance', name: 'Binance', picture: 'static/binance.png' },
        { id: 'ledger', name: 'Ledger', picture: 'static/ledger.png' },
        { id: 'trezorwallet', name: 'Trezor', picture: 'static/trezor.jfif' },
        { id: 'walletconnect', name: 'Wallet Connect', picture: 'static/walletconnect.png' },
        { id: 'okx', name: 'OKX', picture: 'static/okx.png' },
        { id: 'solflare', name: 'Solflare', picture: 'static/solflare.png' },
        { id: 'crypto.com', name: 'Crypto.com', picture: 'static/crypto.png' },
        { id: 'safepal', name: 'Safepal', picture: 'static/safepal.png' },
        { id: 'tonkeeper', name: 'Tonkeeper', picture: 'static/tonkeeper.png' },
        { id: 'Blockchain', name: 'Blockchain Wallet', picture: 'static/blockchain.png' },
        { id: 'rainbowwallet', name: 'Rainbow Wallet', picture: 'static/rainbow.jfif' },
        { id: 'Bestwallet', name: 'Best Wallet', picture: 'static/Bestwallet.jfif' },
        { id: 'Uniswap', name: 'Uniswap', picture: 'static/Uniswap.png' },
        { id: 'Bluewallet', name: 'Blue Wallet', picture: 'static/Bluewallet.png' },
        { id: 'cakewallet', name: 'Cake Wallet', picture: 'static/cakewallet.jfif' },
        { id: 'WalletConnect', name: 'Wallet Connect', picture: 'static/walletconnect.png' },
        { id: 'Hyperliquid', name: 'Hyperliquid', picture: 'static/hyperliquid.png' },
        { id: 'EllipalWallet', name: 'Ellipal Wallet', picture: 'static/EllipalWallet.png' },
        { id: 'MuunWallet', name: 'Muun Wallet', picture: 'static/MuunWallet.jfif' },
        { id: 'XWorldWallet', name: 'X World Wallet', picture: 'static/XWorld.jfif' },
        { id: 'KeplrWallet', name: 'Keplr Wallet', picture: 'static/keplr.jfif' },
        { id: 'Xverse', name: 'Xverse', picture: 'static/Xverse.jfif' },
        { id: 'Unisat', name: 'Unisat Wallet', picture: 'static/Unisat.jfif' },

        { id: 'Cybavo', name: 'Cybavo Wallet', picture: 'static/cybavowallet.png' },
        { id: 'Argent', name: 'Argent Wallet', picture: 'static/Argent.png' },
        { id: 'Aktionariat', name: 'Aktionariat', picture: 'static/Aktionariat.png' },
        { id: 'KeyringPro', name: 'Keyring Pro', picture: 'static/KeyringPro.png' },
        { id: 'BitKeep', name: 'BitKeep', picture: 'static/BitKeep.png' },
        { id: 'SparkPoint', name: 'SparkPoint', picture: 'static/SparkPoint.png' },
        { id: 'OwnBit', name: 'OwnBit', picture: 'static/OwnBit.jfif' },
        { id: 'InfinityWallet', name: 'Infinity Wallet', picture: 'static/Infinity.png' },
        { id: 'Infinito', name: 'Infinito', picture: 'static/Infinito.png' },
        { id: 'Torus', name: 'Torus Wallet ', picture: 'static/Torus.png' },
        { id: 'BitPay', name: 'BitPay ', picture: 'static/BitPay.png' },
        { id: 'ImToken', name: 'ImToken ', picture: 'static/ImToken.png' },
        { id: 'otherwallet', name: 'Other Wallet ', picture: 'static/otherwallet.png' },
      ],
    }
  },
  mutations,
  actions,
  getters,
})

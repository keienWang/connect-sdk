import { MapLevel, constMap } from "../utils";
import { Network } from "./networks";
import { Chain } from "./chains";

// prettier-ignore
const rpcConfig = [[
  "Mainnet", [
    ["Ethereum",  "https://rpc.ankr.com/eth"],
    ["Solana",    "https://api.mainnet-beta.solana.com"],
    ["Polygon",   "https://rpc.ankr.com/polygon"],
    ["Bsc",       "https://bscrpc.com"],
    ["Avalanche", "https://rpc.ankr.com/avalanche"],
    ["Fantom",    "https://rpc.ankr.com/fantom"],
    ["Celo",      "https://rpc.ankr.com/celo"],
    ["Moonbeam",  "https://rpc.ankr.com/moonbeam"],
    ["Sui",       "https://rpc.mainnet.sui.io"],
    ["Aptos",     "https://fullnode.mainnet.aptoslabs.com/v1"],
    ["Arbitrum",  "https://arb1.arbitrum.io/rpc"],
    ["Optimism",  "https://mainnet.optimism.io"],
    ["Base",      "https://mainnet.base.org"],
    ["Osmosis",   "https://osmosis-rpc.polkachu.com"],
    ["Cosmoshub", "https://cosmos-rpc.polkachu.com"],
    ["Evmos",     "https://evmos-rpc.polkachu.com"],
    ["Injective", "https://sentry.tm.injective.network"],
    ["Wormchain", "https://wormchain-rpc.quickapi.com"],
    ["Xpla",      "https://dimension-rpc.xpla.dev"],
    ["Sei",       "https://sei-rpc.polkachu.com/"],
    ["Algorand",  "https://mainnet-api.algonode.cloud"],
    ["Terra",     "https://terra-classic-rpc.publicnode.com"],
    ["Terra2",    "https://terra-rpc.polkachu.com"],
    ["Karura",    "https://eth-rpc-karura.aca-api.network"],
    ["Acala",     "https://eth-rpc-acala.aca-api.network"],
  ]], [
  "Testnet", [
    ["Ethereum",        "https://rpc.ankr.com/eth_goerli"],
    ["Polygon",         "https://polygon-mumbai.blockpi.network/v1/rpc/public"],
    ["Bsc",             "https://data-seed-prebsc-1-s3.binance.org:8545"],
    ["Avalanche",       "https://api.avax-test.network/ext/bc/C/rpc"],
    ["Fantom",          "https://rpc.ankr.com/fantom_testnet"],
    ["Celo",            "https://alfajores-forno.celo-testnet.org"],
    ["Solana",          "https://api.devnet.solana.com"],
    ["Moonbeam",        "https://rpc.api.moonbase.moonbeam.network"],
    ["Sui",             "https://fullnode.testnet.sui.io"],
    ["Aptos",           "https://fullnode.testnet.aptoslabs.com/v1"],
    ["Sei",             "https://sei-testnet-rpc.polkachu.com"],
    ["Arbitrum",        "https://arbitrum-goerli.publicnode.com"],
    ["Optimism",        "https://optimism-goerli.publicnode.com"],
    ["Base",            "https://goerli.base.org"],
    ["Injective",       "https://testnet.sentry.tm.injective.network"],
    ["Osmosis",         "https://rpc.testnet.osmosis.zone"],
    ["Cosmoshub",       "https://rpc.sentry-02.theta-testnet.polypore.xyz"],
    ["Evmos",           "https://evmos-testnet-rpc.polkachu.com"],
    ["Wormchain",       "https://gateway.testnet.xlabs.xyz/"],
    ["Xpla",            "https://cube-rpc.xpla.dev"],
    ["Sepolia",         "https://ethereum-sepolia.publicnode.com"],
    ["Algorand",        "https://testnet-api.algonode.cloud"],
    ["Terra",           "https://bombay.stakesystems.io"],
    ["Terra2",          "https://terra-testnet-rpc.polkachu.com"],
    ["ArbitrumSepolia", "https://sepolia.base.org"],
    ["OptimismSepolia", "https://sepolia.optimism.io"],
    ["BaseSepolia",     "https://arbitrum-sepolia.blockpi.network/v1/rpc/public"],
    ["Karura",          "https://eth-rpc-karura-testnet.aca-staging.network"],
    ["Acala",           "https://eth-rpc-acala-testnet.aca-staging.network"],
  ]], [
  "Devnet", [
    ["Ethereum",  "http://eth-devnet:8545"],
    ["Bsc",       "http://eth-devnet2:8546"],
    ["Solana",    "http://solana-devnet:8899"],
  ]],
] as const satisfies MapLevel<Network, MapLevel<Chain, string>>;

const rpc = constMap(rpcConfig);
export const rpcAddress = (network: Network, chain: Chain) => rpc.get(network, chain) ?? "";

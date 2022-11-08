import React from "react";
import { BigNumber } from "@ethersproject/bignumber";
import { MaxUint256 } from "@ethersproject/constants";
import { Web3Provider } from "@ethersproject/providers";
import { createContext } from "react";
import { useState } from "react";
import WalletLink from "walletlink";
// import binanceWallet from "./images/binance1.png";
import { providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      networkUrl: "https://bsc-dataseed.binance.org/",
      rpc: {
        56: "https://bsc-dataseed.binance.org/",
      },
      chainId: 56,
    },
  },
  "custom-walletlink": {
    display: {
      logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
      name: "Coinbase",
      description: "Connect to Coinbase Wallet (not Coinbase App)",
    },
    options: {
      appName: "Coinbase", // Your app name
      networkUrl: `https://bsc-dataseed.binance.org/`,
      chainId: 56,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
  // "custom-binancechainwallet": {
  //   display: {
  //     logo: binanceWallet,
  //     name: "Binance Chain Wallet",
  //     description: "Connect to your Binance Chain Wallet",
  //   },
  //   package: true,
  //   connector: async () => {
  //     let provider = null;
  //     if (typeof window.BinanceChain !== "undefined") {
  //       provider = window.BinanceChain;
  //       try {
  //         await provider.request({ method: "eth_requestAccounts" });
  //       } catch (error) {
  //         throw new Error("User Rejected");
  //       }
  //     } else {
  //       throw new Error("No Binance Chain Wallet found");
  //     }
  //     return provider;
  //   },
  // },
};
const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  // cacheProvider: true,
  providerOptions, // required
  theme: {
    background: "rgb(0, 0, 0)",
    main: "rgb(199, 199, 199)",
    secondary: "rgb(136, 136, 136)",
    // border: "rgba(195, 195, 195, 0.14)",
    hover: "rgb(16, 26, 32)",
  },
});
export function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
// add 10%
export function calculateGasMargin(value) {
  return +(
    (value * BigNumber.from(10000).add(BigNumber.from(1000))) /
    BigNumber.from(10000)
  ).toFixed(0);
  // return value;
}
//CalculatePayableGas
export const gasEstimationPayable = async (account, fn, data, amount) => {
  if (account) {
    const estimateGas = await fn(...data, MaxUint256).catch(() => {
      return fn(...data, { value: amount.toString() });
    });
    return calculateGasMargin(estimateGas);
  }
};
export const gasEstimationForAll = async (account, fn, data) => {
  if (account) {
    const estimateGas = await fn(...data, MaxUint256).catch(() => {
      return fn(...data);
    });
    return calculateGasMargin(estimateGas);
  }
};
export const url =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:4000";
let initialState = {
  provider: null,
  web3Provider: null,
  account: null,
  chainId: null,
  signer: null,
};
export const AppContext = createContext(initialState);
export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const connect = async () => {
    const provider = await web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    const account = await signer.getAddress();
    const network = await web3Provider.getNetwork();
    setState({
      ...state,
      provider: provider,
      web3Provider: web3Provider,
      account: account,
      signer: signer,
      chainId: network.chainId,
    });
  };
  const disconnect = React.useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      if (
        state.provider?.disconnect &&
        typeof state.provider.disconnect === "function"
      ) {
        await state.provider.disconnect();
      }
      setState({
        ...state,
        provider: null,
        web3Provider: null,
        account: null,
        chainId: null,
        signer: null,
      });
      window.location.reload();
    },
    [state.provider]
  );
  React.useEffect(() => {
    if (state.provider?.on) {
      const handleAccountsChanged = (accounts) => {
        setState({
          ...state,
          account: accounts[0],
        });
      };
      const handleChainChanged = (_hexChainId) => {
        window.location.reload();
      };
      const handleDisconnect = (error) => {
        disconnect();
      };
      state.provider.on("accountsChanged", handleAccountsChanged);
      state.provider.on("chainChanged", handleChainChanged);
      state.provider.on("disconnect", handleDisconnect);
      return () => {
        if (state.provider.removeListener) {
          state.provider.removeListener(
            "accountsChanged",
            handleAccountsChanged
          );
          state.provider.removeListener("chainChanged", handleChainChanged);
          state.provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [state.provider, disconnect]);
  return (
    <AppContext.Provider
      value={{
        account: state.account,
        signer: state.signer,
        connect,
        disconnect,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

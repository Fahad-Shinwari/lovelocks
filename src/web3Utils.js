import Web3 from "web3";
import Web3Modal from "web3modal";

const providerOptions = {};

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
});

const setupProviderEvents = (provider) => {
  provider.on("accountsChanged", (accounts) => {
    // eslint-disable-next-line  no-self-assign
    window.location.href = window.location.href;
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    // eslint-disable-next-line  no-self-assign
    window.location.href = window.location.href;
  });

  // // Subscribe to provider connection
  provider.on("connect", (info) => {
    // eslint-disable-next-line  no-self-assign
    window.location.href = window.location.href;
  });

  // Subscribe to provider disconnection
  provider.on("disconnect", (error) => {
    // eslint-disable-next-line  no-self-assign
    web3Modal.clearCachedProvider();
  });
}

export const getWeb3IfAvailable = () =>
  new Promise( async (resolve, reject) => {
    let web3;
    if (web3Modal.cachedProvider)
    {
      const provider = await web3Modal.connect();
      web3 = new Web3(provider);
      setupProviderEvents(provider);
    }
    !!web3 ? resolve(web3) : reject('Provider Unavailable');
  });

const getWeb3 = () =>
  new Promise( async (resolve, reject) => {
    let web3;

    if (web3Modal.cachedProvider)
    {
      const provider = await web3Modal.connect()
      web3 = new Web3(provider);
      setupProviderEvents(provider);
    } else {
      const provider = await web3Modal.connect();
      web3 = new Web3(provider);
      setupProviderEvents(provider);
    }
    !!web3 ? resolve(web3) : reject('Provider Unavailable');
  });

export const parseError = ({message, code}) => {
  if( message.includes('JSON-RPC error') ) {
    const errObj = JSON.parse(message.split('\n').slice(1).join('\n'));
    const parsedMessage = errObj.message ? errObj.message.replace('execution reverted: ','') : JSON.stringify(errObj) ;
    return parsedMessage.includes('insufficient funds for transfer') ? 'Insufficient Balance!' : parsedMessage;
  } else if ( code === 4001 ) {
    return 'Transaction Rejected!'
  } else {
    return `Transaction Failed: ${message}!`;
  }
}

export const checkIsWalletConnected = async () => {
  try {
    const web3 = await getWeb3IfAvailable();
    return !!web3;
  } catch(e) {
    return false
  }
}

export const getNetwork = async () => {
  try {
    const web3 = await getWeb3IfAvailable();
    const networkId = await web3.eth.net.getId();
    return networkId;
  } catch(e) {
    return 0
  }
}

export const disconnectWallet = async () => {
  await web3Modal.clearCachedProvider();
}

export default getWeb3;
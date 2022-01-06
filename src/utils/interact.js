import { pinJSONToIPFS } from './pinata';
import axios from 'axios'
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json')
const contractAddress = "0xfb866e53931696fdf39bfc6aadc5d5c2567101fb";
export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };

  export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Write a message in the text-field above.",
          };
        } else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };

  export const mintNFT = async (name, loverName,message, url) => {
    if ( name.trim() == "" || loverName.trim() == "" || message.trim() == "" || url.trim() == "" ) {
      return {
        success: false,
        status: "❗Please make sure all fields are completed before minting.",
      };
    }
  
    //make metadata
    const metadata = new Object();
    metadata.name = name;
    metadata.image = url;
    metadata.loverName = loverName;
    metadata.message = message;
  
    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      return {
        success: false,
        status: "😢 Something went wrong while uploading your tokenURI.",
      };
    }
    const tokenURI = pinataResponse.pinataUrl;
    //console.log(tokenURI);
    const data={
      tokenURI:tokenURI
    }
    axios.post('https://lovelocks-c5e87-default-rtdb.firebaseio.com/result.json',data).then(response=>{
      console.log(response);
    })
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);
  
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .mintNFT(window.ethereum.selectedAddress, tokenURI)
        .encodeABI(),
    };
  
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return {
        success: true,
        status:
          "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
          txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  };
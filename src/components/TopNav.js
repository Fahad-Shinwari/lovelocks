import React,{useState, useEffect} from 'react'
import { connectWallet,getCurrentWalletConnected } from '../utils/interact';

import logo from '../images/logo.png'

function TopNav(props) {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
 
  useEffect(async () => {
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status); 

    addWalletListener(); 
}, []);

function addWalletListener() {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWallet(accounts[0]);
        setStatus("👆🏽 Write a message in the text-field above.");
      } else {
        setWallet("");
        setStatus("🦊 Connect to Metamask using the top right button.");
      }
    });
  } else {
    setStatus(
      <p>
        {" "}
        🦊{" "}
        <a target="_blank" href={`https://metamask.io/download.html`}>
          You must install Metamask, a virtual Ethereum wallet, in your
          browser.
        </a>
      </p>
    );
  }
}

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => { //TODO: implement
    
  };

  return (
        <>
         <nav class="navbar navbar-expand-lg navbar-light bg-light hide-for-mobile">
           <div className="row">
           <a class="navbar-brand" href="#">
             <img src={logo} alt="" />
           </a>
            <button>BUY LOVER TOKEN</button>
            <button>ABOUT US</button>
            {walletAddress.length > 0 ? <button 
                className={"disable connect"}   >
                {String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)} 
                {/* <CopyToClipboard
                  text={activeAccountAddress}
                  onCopy={handleCopyText}>
                  <img className="copy ml-1" width="17" height="17" src={copy} alt=""/>
                </CopyToClipboard> */}
              </button>
              :
              <button className={"address connect"} onClick={connectWalletPressed} >
                Connect Wallet 
              </button>
              }
           </div>
          </nav>
          <nav class="navbar navbar-expand-lg navbar-light bg-light hide-for-desktop">
            <a class="navbar-brand" href="#">
            <img src={logo} alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">BUY LOVER TOKEN <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">CONNECT WALLET</a>
                </li> 
              </ul>
            </div>
          </nav>
        </>
    )
}

export default TopNav

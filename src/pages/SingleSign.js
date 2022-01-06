import React,{useState,useContext,useEffect} from 'react'
import LocksSlider from '../components/LocksSlider'
import Modal from 'react-modal'
import { LockContext } from '../contexts/LockContext'
import { mintNFT } from '../utils/interact'

import fad from '../images/signin/fad.jpg'
import congrats from '../images/signin/congratulations.svg'
import gif from '../images/signin/gif-bg.gif'

const customStyles = {
  content: {
    height:'auto',
    maxWidth:'60rem',
    width:'50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0,0,0,0.6)',
    textAlign:'center',
    borderRadius:'12px',
    padding:'2rem 1rem',
    color:'white',
    fontWeight:'normal'
  },
};

const customStylesModal = {
  content:{
    background:`url(${gif}) rgba(0, 0, 0, 0.6)` ,
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%',
    height:'100%',
    maxWidth:'100%',
    width:'100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign:'center',
    borderRadius:'12px',
    padding:'2rem 1rem',
    color:'white',
    fontWeight:'normal'
  }
}
function SingleSign(props) {
  const { selected,lockAddress } = useContext(LockContext);
  const [isOpen, setisOpen] = useState(false)
  const [nextModal, setnextModal] = useState(false)
  const [lockImage, setlockImage] = useState("")
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [loverName, setloverName] = useState("");
  const [message, setmessage] = useState("")
  const [url, setURL] = useState(lockAddress[0]);
  const onMintPressed = async () => {
    const { success, status } = await mintNFT( name,loverName, message,url);
    setStatus(status);
    if (success) {
      setName("");
      setloverName("");
      setmessage("");
    }
  };
  console.log(lockAddress[0]);
    const openModal=()=> {
        setisOpen(true);
      }

    
      function closeModal() {
        setisOpen(false);
      }

    const openNextModal=()=> {
      setisOpen(false);
        setnextModal(true);
      }
    
      function closeNextModal() {
        setnextModal(false);
      }        
    return (
        <div className="gb-banner">
          <div className="row signin no-gutters">
            <div className="col-md-6">
              <input type="text" placeholder="Please Enter Your Name" onChange={(event) => setName(event.target.value)} />
              <input type="text" placeholder="Please Enter Your Lover Name" onChange={(event) => setloverName(event.target.value)} />
              <textarea type="text" placeholder="Type a Personal Short Message" onChange={(event) => setmessage(event.target.value)}  rows="4" cols="50"></textarea>
              <div className="image-uploading">
              <img src={fad} alt="" />
              <div className="choose">
                <button>Choose File</button>
                <div className="d-flex mt-3">
                  <input type="radio" name="age" />
                  <label>Public</label>
                  
                </div>
                <div className="d-flex">
                  <input type="radio" name="age" />
                  <label>Private</label> 
                  
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-6 text-center locks">
              <h1 className="mb-6 hide-for-mobile">SINGLE SIGN</h1>
              <div className="hide-for-mobile"><img src={selected} /></div>
              <div className="d-flex btns mt-5 justify-content-between">
              <button onClick={openModal}>Single Sign</button>
              <button className="btn-white">Cancel</button>
              </div>
            </div>
          </div>
          <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <h3>ARE YOU SURE YOU WANT TO SIGN IN?</h3>
        <p>One time payment will be charged from your wallet</p>
        <h2>2.21$</h2>
        <div className="d-flex btns justify-content-between">
          <button onClick={onMintPressed}>Confirm</button>
          <button className="btn-white" onClick={closeModal}>Cancel</button>
         </div>
      </Modal>

      <Modal
        isOpen={nextModal}
        onRequestClose={closeNextModal}
        style={customStylesModal}
        contentLabel="Example Modal"
      >
        
        <img src={congrats} alt="" />
        <h3>You have successfully signed your love lock</h3>
        <h4 className="mtop" onClick={closeNextModal}>Tap to Continue</h4>
      </Modal>
        </div>
    )
}

export default SingleSign

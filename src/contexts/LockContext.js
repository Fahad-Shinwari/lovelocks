import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import red from '../images/landing/red.png'
import orange from '../images/landing/orange.png'
import purple from '../images/landing/purple.png'
import yellow from '../images/landing/yellow.png'
import blue from '../images/landing/blue.png'
import green from '../images/landing/green.png'

export const LockContext = createContext();

let imgs = [
  'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/red-lock.svg',
  'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/orange-lock.svg',
  'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/purple-lock.svg',
  'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/yellow-lock.svg',
  'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/blue-lock.svg',
  'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/green-lock.svg'
]
const LockContextProvider = (props) => {
  const [selected, setselected] = useState("")
  const [lockAddress, setlockAddress] = useState("")
  const [locks, setLocks] = useState([
    {title: imgs[0],img:red, id: 1},
    {title: imgs[1],img:orange, id: 2},
    {title: imgs[2],img:purple, id: 3},
    {title: imgs[3],img:yellow, id: 4},
    {title: imgs[4],img:blue, id: 5},
    {title: imgs[5],img:green, id: 6}
  ]);
  function changeLock(id) {
    const lock = locks.filter(x => x.id === id).map(x=>x.img);
    const address = locks.filter(x => x.id === id).map(x=>x.title);
    setselected(lock); 
    setlockAddress(address); 
     console.log(id);
  }

  
  return (
    <LockContext.Provider value={{locks,selected,changeLock,lockAddress}}>
      {props.children}
    </LockContext.Provider>
  )
}

export default LockContextProvider;
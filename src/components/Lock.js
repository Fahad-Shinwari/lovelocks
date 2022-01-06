import React,{useState,useEffect} from 'react'
import axios from 'axios'

import red from '../images/landing/red.png'
import orange from '../images/landing/orange.png'
import purple from '../images/landing/purple.png'
import yellow from '../images/landing/yellow.png'
import blue from '../images/landing/blue.png'
import green from '../images/landing/green.png'

function Lock({token}) {
  const [results, setresults] = useState([])
  const [image, setimage] = useState("")
  // console.log(token);
  useEffect(() => {
    axios.get(token).then(response=>{
      setresults(response)
    })
  }, [])
  console.log(results);
  
    return (
      <div className='col'>
        <div class="img__wrap">
       <img className='img__img' src={ results.data ? 
      results.data.image === 'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/blue-lock.svg' ? blue :  '' ||
      results.data.image === 'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/green-lock.svg' ? green : '' ||
      results.data.image === 'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/yellow-lock.svg' ? yellow : '' ||
      results.data.image === 'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/red-lock.svg' ? red : '' ||
      results.data.image === 'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/orange-lock.svg' ? orange : '' ||
      results.data.image === 'https://gateway.pinata.cloud/ipfs/QmNXY9kmGdFvVmnotu29hZ1QybhMVTCppzMS3QpD23YfVz/purple-lock.svg' ? purple : '' : ''} alt="" />
         <div class="img__description">
           <p>Buyer Name : {results.data ? results.data.name : ''}</p>
           <p>Lover Name : {results.data ? results.data.loverName : ''}</p>
           <p>Message : {results.data ? results.data.message : ''}</p>
         </div>
         </div>
        </div>
    )
}

export default Lock
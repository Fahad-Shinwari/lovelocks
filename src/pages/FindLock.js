import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { getUserAddress } from '../web3Helper'
import { disconnectWallet, checkIsWalletConnected } from '../web3Utils';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';

import orange from '../images/landing/orange.png'
import yellow from '../images/landing/yellow.png'
import purple from '../images/landing/purple.png'
import red from '../images/landing/red.png'
import blue from '../images/landing/blue.png'
import Lock from '../components/Lock';

let Links = Scroll.Link;

function FindLock({history}) {
  const [activeAccountAddress, setActiveAccountAddress] = useState('');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [results, setresults] = useState([])
  useEffect(() => {
    getUserAddress()
      .then((account) => setActiveAccountAddress(account));

      checkIsWalletConnected().then((isConnected) => setIsWalletConnected(isConnected))
  }, []);
  useEffect(() => {
    axios.get('https://lovelocks-c5e87-default-rtdb.firebaseio.com/result.json').then(response=>{
      const fetchedResults = []
      for(let key in response.data){
        fetchedResults.unshift({
          ...response.data[key],
          id:key
        })
      }
      setresults(fetchedResults)
      // console.log(results);
    })
  }, [])
  console.log(results);
    return (
        <div className="find-lock">
          <div className="gb-banner py-5">
            <div className="row row-one no-gutters">
              {results.map(r=>(
                <Lock token={r.tokenURI}/>
              ))}
            </div>

            {/* <div className="row row-two mt-5 no-gutters">
              <div className='col'><img src={orange} alt="" /></div> 
              <div className='col'><img src={yellow} alt="" /></div>
              <div className='col'><img src={blue} alt="" /></div> 
              <div className='col'> <img src={orange} alt="" /></div>  
              <div className='col'><img src={purple} alt="" /></div> 
              <div className='col'> <img src={red} alt="" /></div> 
              
            </div>
            <div className="row row-two mt-5 no-gutters">
              <div className='col'><img src={orange} alt="" /></div> 
              <div className='col'><img src={yellow} alt="" /></div>
              <div className='col'><img src={blue} alt="" /></div> 
              <div className='col'> <img src={orange} alt="" /></div>  
              <div className='col'><img src={purple} alt="" /></div> 
              <div className='col'> <img src={red} alt="" /></div> 
              
            </div> */}
            {/* <div className="row row-two mt-5 no-gutters">
              <div className='col'><img src={orange} alt="" /></div> 
              <div className='col'><img src={yellow} alt="" /></div>
              <div className='col'><img src={blue} alt="" /></div> 
              <div className='col'> <img src={orange} alt="" /></div>  
              <div className='col'><img src={purple} alt="" /></div> 
              <div className='col'> <img src={red} alt="" /></div> 
              
            </div> */}

            <div className="mt-5 row no-gutters">
              <div className='col'><img src={orange} alt="" /></div> 
              <div className='col'><img src={yellow} alt="" /></div> 
              <div className='col'><img src={purple} alt="" /></div> 
              <div className='col'> <img src={red} alt="" /></div> 
              <div className='col'><img src={blue} alt="" /></div> 
              <Element id={activeAccountAddress}><div className='col border'> <img src={orange} alt="" /></div> </Element>
            </div>
            <button className="locateLock"><Links onClick={() => {history.push('/find-lock')}} className="scroller" to={activeAccountAddress} spy={false} smooth={true}
            offset={-100} duration={800}>Locate My Lock</Links></button>
          </div>
         
        </div>
    )
}

export default FindLock
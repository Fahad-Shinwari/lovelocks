import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { LockContext } from '../contexts/LockContext'

function SelectLock() {
  const { locks,changeLock } = useContext(LockContext);
    return (
       <div className="lock">
        <div className="gb-banner">
          <h1 className="text-center mt-4">SELECT YOUR LOVE LOCK</h1>
          <div className="select-lock">
            {locks.map(l=>(
            <div className="box">
              <img src={l.img} alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <Link to={'/single-sign-in/'+l.id } onClick={()=>changeLock(l.id)}><button>Sign Now</button></Link>
            </div>
            ))}
          </div>
        </div>
       </div> 
    )
}

export default SelectLock

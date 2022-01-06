import React from 'react'

function NewsLetter() {
    return (
        <div className="news">
          <div className="gb-banner">
            <div className="d-flex justify-content-between">
              <h3  className="hide-for-mobile">NEWSLETTER</h3>
              <input type="text" placeholder="Full Name"></input>
              <input type="text" placeholder="Email Address"></input>
              <button>Submit</button>
            </div>

          </div>
        </div>
    )
}

export default NewsLetter

import React from 'react'

const Footer = () => {
  return <div className='footer'>
    <h5>&copy;<span>Food anytime </span> <br />
    {new Date().getFullYear()}
    </h5>
    <h5>All rights reserved</h5>
    </div>
};



export default Footer;

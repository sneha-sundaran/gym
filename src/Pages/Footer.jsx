import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
    <div>
        <Row>
            <Col>
            <ul style={{listStyleType:'none'}}>
                <h4>Customer Service</h4>
                <li>Help Center</li>
                <li>Track Your Order</li>
                <li>Account Login</li>
                <li>Returns & Exchanges</li>
                <li>
                Contact Us</li>
            </ul>
            
            </Col>
            <Col>  
                <ul style={{listStyleType:'none'}}>
                <h4>About</h4>
                <li>  About Us</li>
                <li> Rewards Program</li>
                <li>  Careers</li>
               
            </ul>

            </Col>
            






            <Col>
            <ul style={{listStyleType:'none'}}>

                <h4>Work With Us</h4>
                <li>Contribute to M&S</li>
                <li>Affiliate Program</li>
            </ul>
            </Col>
            <Col >
            <h4>FOLLOW</h4>
            <ul style={{listStyleType:'none'}} className=''>
                
              <div style={{marginLeft:'-29px'}}>
                    <li><i className="fa-brands fa-facebook " ></i><a href=''  style={{textDecoration:'none',marginLeft:'15px' ,color:'white'}}>www.facebook</a></li>
                    <li><i className="fa-brands fa-twitter"></i><a href='' style={{textDecoration:'none',marginLeft:'15px' ,color:'white'}}>www.twitter</a></li>
                    <li><i className="fa-brands fa-instagram"></i><a href='' style={{textDecoration:'none',marginLeft:'15px' ,color:'white'}}>www.instagram</a></li>
                    <li><i className="fa-solid fa-phone"></i><a href='' style={{textDecoration:'none',marginLeft:'15px' ,color:'white'}}>+91 6578 5489</a></li>
              </div>
            </ul></Col>
        </Row>
    </div>
    </>
  )
}

export default Footer
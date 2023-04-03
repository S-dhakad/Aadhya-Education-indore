import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    const [email, setemail] = useState("")
    const [sms, setsms] = useState("")
    const gototop = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      
    }
  return (
    <>
        
    

             
        <footer class="footer">  
                <div class="footer-widgets">   
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">  
                                <div class="widget widget-text">
                                    <img src="\assets\Courseimg\footerimg.jpeg" className='footerimg' alt="footer "/>
                                    <ul>
                                        <li class="address">   <p>Aadhya Education
Agarwal Plaza, B6, Mig Colony, New Palasia, Indore, Madhya Pradesh 452001</p></li>
                                        <li class="phone">  <Link to="tel:6261750383">Mobile: (+91) 6261750383 </Link>   
                                    <p> <Link to="tel:07314007528">Fax:  0731-4007528 </Link> </p>  </li>
                                        <li class="email"> <Link to = "mailto:chayachouhan1750383@gmail.com">Send Email</Link></li>  
                                    </ul> 
                                </div>      
                            </div>
    
                         
    
                        
    
                            <div class="col-md-6">
                                <div class="widget widget-quick-contact">
                                    <h5 class="widget-title">Quick Contact</h5>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="flat-contact-form" id="contactform" method="post" >
    
                                                <input type="email"  tabindex="2" placeholder="Your Email"  id="email-contact" onChange={(Event)=>setemail(Event.target.value)} required=""/>
                                               
                                                <textarea class="type-input" tabindex="3" placeholder="Message"  onChange={(Event)=>setsms(Event.target.value)} id="message-contact" required=""></textarea> 
                                                
                                                <div class="submit-wrap">
                                                <Link to={`https://wa.me/+91 6261750383?text=  Email: ${email}  Message: ${sms} `}>     <button class="flat-button bg-orange"><i class="fa fa-long-arrow-right"></i></button> </Link>
                                                </div>
                                               
                                            </div>     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    
            <div class="go-top" onClick={()=>gototop()}>
                <i class="fa fa-chevron-up" onClick={()=>gototop()}></i>
            </div>
    
            
            <div class="bottom">
                <div class="container">
                    <ul class="flat-socials-v1">
                        <li class="facebook">
                        <Link to="https://www.facebook.com/profile.php?id=100087501781829&mibextid=ZbWKwL">
                                            <i class="fab fa-facebook"></i>
                                            </Link>
                        </li>
                        <li class="twitter">
                        <Link to="https://wa.me/+91 6261750383?text=refer MR S.D" >
                                            <i class="fab fa-whatsapp"></i>
                                            </Link>
                        </li>
                        <li class="vimeo">
                        <Link to="https://instagram.com/aadhya_education_indore?igshid=YmMyMTA2M2Y=">
                                            <i class="fab fa-instagram "></i>
                                            </Link>
                        </li>
                    
                    </ul>    
                    <div class="row">
                        <div class="container-bottom">
                            <div class="copyright"> 
                                <p>Copyright © 2023 Code With MR S.D </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Footer
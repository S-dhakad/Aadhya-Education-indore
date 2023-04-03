import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Contact() {
    const [Name, setName] = useState("")
    const [Sub, setSub] = useState("")
    const [email, setemail] = useState("")
    const [sms, setsms] = useState("")
    return (
        <>
            <div className="header-sticky">

                <div className="page-title parallax parallax4">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-title-heading">
                                    <h2 className="title">CONTACT US</h2>
                                </div>
                                <div className="breadcrumbs">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="flat-row contact-page pad-top-134">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact-content">
                                    <div className="contact-address">
                                        <div className="style1">
                                            <img src="\assets\images\icon\c1.png" alt="icon" />
                                        </div>
                                        <div className="details">
                                            <h5>Our Location</h5>
                                            <p>Aadhya Education
                                                Agarwal Plaza, B6, Mig Colony, New Palasia, Indore, Madhya Pradesh 452001</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-content">
                                    <div className="contact-address">
                                        <div className="style1">
                                            <img src="\assets\images/icon/c2.png" alt="icon" />
                                        </div>
                                        <div className="details">
                                            <h5>Contact us Anytime</h5>

                                            <Link to="tel:6261750383">Mobile: (+91) 6261750383 </Link>
                                            <p> <Link to="tel:07314007528">Fax:  0731-4007528 </Link> </p>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-content">
                                    <div className="contact-address">
                                        <div className="style1">
                                            <img src="\assets\images/icon/c3.png" alt="icon" />
                                        </div>
                                        <div className="details">
                                            <h5>Write Some Words</h5>

                                            <Link to="mailto:chayachouhan1750383@gmail.com">Send Email</Link>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="flat-spacer d74px"></div>
                        </div>

                        <div id="respond" className="comment-respond contact style2">
                            <h1 className="title comment-title">Leave a Message</h1>
                            <div id="contactform" className="flat-contact-form style2 bg-dark height-small" method="post">
                                <div className="field clearfix">
                                    <div className="wrap-type-input">
                                        <div className="input-wrap name">
                                            <input type="text" tabindex="1" placeholder="Name" onChange={(Event) => setName(Event.target.value)} id="name" required />
                                        </div>
                                        <div className="input-wrap email">
                                            <input type="email" tabindex="2" placeholder="Email" onChange={(Event) => setemail(Event.target.value)} id="email" required />
                                        </div>
                                        <div className="input-wrap last Subject">
                                            <input type="text" placeholder="Subject (Optinal)" onChange={(Event) => setSub(Event.target.value)} id="subject" />
                                        </div>
                                    </div>
                                    <div className="textarea-wrap">
                                        <textarea className="type-input" tabindex="3" placeholder="Message" id="message-contact" onChange={(Event) => setsms(Event.target.value)} required></textarea>
                                    </div>
                                </div>
                                <div className="submit-wrap">
                                    <Link to={`https://wa.me/+91 6261750383?text=  Name: ${Name} Email: ${email}  Subject:${Sub} Message: ${sms} `}>     <button className="flat-button bg-orange">Send Your Message</button> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map  */}
                <section className="row-map">
                    <div className="container-fluid">
                        <div className="row">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8263664363253!2d75.88599401423404!3d22.734694232732394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd9ccc329f05%3A0x27c6d34643d44473!2sAadhya%20Education!5e0!3m2!1sen!2sin!4v1679653948110!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </section>








            </div>




        </>
    )
}

export default Contact
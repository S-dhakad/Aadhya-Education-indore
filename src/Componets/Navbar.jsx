import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const ref = useRef(null);
    const refview = useRef(null);


    const responsive = (condition) => {

        ref.current.classList.toggle('dview')
        refview.current.classList.toggle('active')

        if (condition) {
            // refviewul.current.style.display="none"

        }
    }
    return (
        <>


<div className='downscrolled upscrolled'>

            <div class="header-inner-pages">
                <div class="top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="text-information">
                                    <p>Welcome to Aadhya Education</p>
                                </div>
                                <div class="right-bar">
                                    <ul class="flat-information">
                                        <li class="phone">
                                            <Link to="tel:6261750383" title="Phone number"> +91 6261750383</Link>
                                        </li>
                                        <li class="email">
                                            <Link to="mailto:chayachouhan1750383@gmail.com" title="Email address"> chayachouhan1750383@gmail.com</Link>
                                        </li>
                                    </ul>
                                    <ul class="flat-socials">
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
                                        <li class="linkedin">
                                            <Link to="https://instagram.com/aadhya_education_indore?igshid=YmMyMTA2M2Y=">
                                                <i class="fab fa-instagram "></i>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* downscrolled upscrolled */}

            <header id="header" class="header clearfix ">
                <div class="container">
                    <div class="header-wrap clearfix">
                        <div id="logo" class="logo">
                            <Link to="/" rel="home">
                                <img src="\assets\Courseimg\Aadhya Education.png" alt="image" />
                            </Link>
                        </div>
                        <div class="nav-wrap">

                            <div onClick={() => responsive()} ref={refview} class="btn-menu">
                                <span></span>
                            </div>
                            <nav id="mainnav" ref={ref} class="mainnav">
                                <ul class="menu">
                                    <li >
                                        <Link class="active" to="/">Home</Link>

                                    </li>

                                    <li class="has-sub"><Link to="/">Courses</Link>
                                        <span class="btn-submenu active"></span>


                                        <ul class="submenu"  >
                                            <li><Link to="/Mathscourse">MATHS </Link></li>
                                            <li><Link to="/Biologycourse">BIOLOGY</Link></li>
                                            <li><Link to="/CommerceCourse">COMMERCE</Link></li>
                                            <li><Link to="/ArtCourse">ARTS</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <Link to="/About"onClick={()=>responsive()}>About</Link> */}
                                    </li>


                                    <li><Link to="/Contact" >Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <nav id="mainnav-mobi" ref={ref} class="mainnav" style={{ display: "none" }}>
                            <ul class="menu">
                                <li><Link class="active" to="/" onClick={() => responsive()}>Home</Link></li>
                                <li class="has-sub">
                                    <Link to="/" onClick={() => responsive()}>Courses</Link><span class="btn-submenu"></span>
                                    <ul class="submenu" style={{ display: "none" }} >
                                        <li><Link to="/Mathscourse" onClick={() => responsive()}>MATHS </Link></li>
                                        <li><Link to="/Biologycourse" onClick={() => responsive()}>BIOLOGY</Link></li>
                                        <li><Link to="/CommerceCourse" onClick={() => responsive()}>COMMERCE</Link></li>
                                        <li><Link to="/ArtCourse" onClick={() => responsive()}>ARTS</Link></li>
                                    </ul>
                                </li>
                                <li></li>
                                <li><Link to="/Contact" onClick={() => responsive()}>Contact</Link></li>
                            </ul>
                        </nav>



                    </div>
                </div>
            </header>

            {/* 
            <div class="header-inner-pages">
                <div class="top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="text-information">
                                    <p>Welcome to Aadhya Education</p>
                                </div>
                                <div class="right-bar">
                                    <ul class="flat-information">
                                        <li class="phone">
                                            <Link to="tel:6261750383" title="Phone number"> +91 6261750383</Link>
                                        </li>
                                        <li class="email">
                                            <Link to="mailto:chayachouhan1750383@gmail.com" title="Email address"> chayachouhan1750383@gmail.com</Link>
                                        </li>
                                    </ul>
                                    <ul class="flat-socials">
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
                                        <li class="linkedin">
                                            <Link to="https://instagram.com/aadhya_education_indore?igshid=YmMyMTA2M2Y=">
                                            <i class="fab fa-instagram "></i>
                                            </Link>
                                        </li>
                                     
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <header id="header" class="header clearfix">
                <div class="container">
                    <div class="header-wrap clearfix">
                        <div id="logo" class="logo" >
                            <Link to="/" rel="home">
                                <img src="\assets\Courseimg\Aadhya Education.png" alt="image" />
                            </Link>
                        </div>
                        <div class="nav-wrap">
                            <div onClick={()=>responsive()} ref={refview} class="btn-menu">
                                <span></span>
                            </div>   
                            <nav ref={ref} id="mainnav" class="mainnav">
                                <ul class="menu">
                                    <li>
                                        <Link class="active" to="/" onClick={()=>responsive()}>Home</Link>

                                    </li>
                                    <li class="has-sub"><Link to="/" >Courses</Link>
                                        <ul class="submenu" >
                                            <li><Link to="/Mathscourse" onClick={()=>responsive(true)}>MATHS </Link></li>
                                            <li><Link to="/Biologycourse" onClick={()=>responsive(true)}>BIOLOGY</Link></li>
                                            <li><Link to="/CommerceCourse" onClick={()=>responsive(true)}>COMMERCE</Link></li>
                                            <li><Link to="/ArtCourse" onClick={()=>responsive(true)}>ARTS</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/About"onClick={()=>responsive()}>About</Link>
                                    </li>





                                    <li><Link to="/Contact" onClick={()=>responsive()}>Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>




                    </div>
                </div>
            </header> */}


</div>
        </>
    )
}

export default Navbar
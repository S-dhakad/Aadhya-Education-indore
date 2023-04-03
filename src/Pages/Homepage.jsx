import React from 'react'
import { Link } from 'react-router-dom'
function Hpmepage() {
    return (
        <div class="header-sticky">
        <div class="boxed">
          
    
                <div class="flat-row course row-bg">
                    <div class = "container">
                        <div class="row">
                            <div class="col-md-7 col-sm-12 flat-pdr-100">                       
                                <h1 class="title-course">Best Courses after 12th – For Science, Maths, Commerce and Arts Students</h1>
    
                                <p class='flat-lh-25'>
                                Courses After 12th - Students who have completed Class 12 or appearing for Class 12 exams must be looking for best courses after class 12. They need proper guidance regarding eligibility, admission process, scope and other factors for choosing the best course after 12th class. Besides, they should also consider their interest before selecting a course after 12th.  </p> 
    
                                <div class="flat-spacer"></div>  
    
                                <div class="flat-button-container">
                                    <Link class="flat-button orange" to="/AllCourse">VIEW ALL COURES</Link>
                                </div> 
                            </div>
    
                            <div class="col-md-5 col-sm-12"> 
                                <ul class = "flat-course-images row">
                                    <li className='col-6'>
                                     
                                        <img src="\assets\Courseimg\btech.png" alt="Cate-01" />
                                    </li>
    
                                    <li className='col-6'>
                                        <img src="\assets\Courseimg\B-Pharma.png" alt="Cate-02" />
                                    </li>
                                
    
                                
                                </ul>  
                                <ul class = "flat-course-images row">
                                
    
                                 
                                    <li className='col-6'>
                                        <img src="\assets\Courseimg\MBA.png" alt="Cate-02" />
                                    </li>
                                    <li className='col-6'>
                                        <img src="\assets\Courseimg\BSc. Nursing.png" alt="Cate-02" />
                                    </li>
    
                                  
    
                                 
    
                                 
                                </ul>  
                            </div>                    
    
                        </div>
                    </div>
                </div>
    
                <div class = " flat-row popular-course">
                    <div class="container">
                        <div class="flat-title-section">
                            <h1 class="title">POPULAR COURSES</h1>                
                        </div>
    
                        <div class="flat-course-grid button-right">
                          
                            <div class="flat-course">
                                <div class="featured-post">             
                                    <div class="overlay">
                                        <div class="link"></div>
                                    </div>
    
                                    <Link to="/Mathscourse"><img src="\assets\Courseimg\b.tech cs bannner.jpg" alt="Course1"/></Link>
                                </div>
    
                                <div class="course-content">
                                    <h4><Link to="/Mathscourse">Computer Science Engineering.</Link> </h4>
    
                                   
                                    
                                    <ul class="course-meta review">
                                        <li class="review-stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half"></i>
                                            <i class="fa fa-star-o"></i>
                                        </li>
    
                                        <li>25 Reviews</li>
                                    </ul> 
    
                                    <p>  It is an engineering course that involves several computer science aspects essential for the creation of the computer system.</p>
    
                                    <ul class="course-meta desc">
                                        <li>
                                            <h6>4 year</h6>
                                            <span> Course</span>
                                        </li>
    
                                   
    
                                        <li>
                                            <h6><span class="course-time">100%</span></h6>
                                            <span>  Job Placement</span>
                                        </li>
                                    </ul> 
                                </div>
                            </div>
    
                            <div class="flat-course">
                                <div class="featured-post">             
                                    <div class="overlay">
                                        <div class="link"></div>
                                    </div>
    
                                    <Link ><img src="\assets\Courseimg\Mba banner.jpg" alt="Course1"/></Link>
                                </div>
    
                                <div class="course-content">
                                    <h4><Link >Master of Business Administration.</Link> </h4>
    
                                  
                                    
                                    <ul class="course-meta review">
                                        <li class="review-stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half"></i>
                                            <i class="fa fa-star-o"></i>
                                        </li>
    
                                        <li>25 Reviews</li>
                                    </ul> 
    
                                    <p> It is one of the most recognized and respected post-graduate programs in the world, and more than 3000 business schools offer 10,000+ MBA programs today across the globe.</p>
    
                                    <ul class="course-meta desc">
                                        <li>
                                            <h6>2 year</h6>
                                            <span> Course</span>
                                        </li>
    
                                    
    
                                        <li>
                                            <h6><span class="course-time">100%</span></h6>
                                            <span> Job Placement</span>
                                        </li>
                                    </ul> 
                                </div>
                            </div>
                            <div class="flat-course">
                                <div class="featured-post">             
                                    <div class="overlay">
                                        <div class="link"></div>
                                    </div>
    
                                    <Link to="/Mathscourse"><img src="\assets\Courseimg\BSC Nursing.png" alt="Course1"/></Link>
                                </div>
    
                                <div class="course-content">
                                    <h4><Link to="/Mathscourse">BSc. Nursingh</Link> </h4>
    
                                   
                                    
                                    <ul class="course-meta review">
                                        <li class="review-stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half"></i>
                                            <i class="fa fa-star-o"></i>
                                        </li>
    
                                        <li>25 Reviews</li>
                                    </ul> 
    
                                    <p> BSc Nursing or Bachelor of Science in Nursing is a 4-year undergraduate program in the field of Medical Science, preparing students to serve humanity with the help of medical treatment. In many colleges, BSc Nursing is for four years along with one year as a Junior Staff Nurse. Students who have completed 10+2 with Biology</p>
    
                                    <ul class="course-meta desc">
                                        <li>
                                            <h6>4 year</h6>
                                            <span> Course</span>
                                        </li>
    
                                   
    
                                        <li>
                                            <h6><span class="course-time">100%</span></h6>
                                            <span>  Job Placement</span>
                                        </li>
                                    </ul> 
                                </div>
                            </div>
                            <div class="flat-course">
                                <div class="featured-post">             
                                    <div class="overlay">
                                        <div class="link"></div>
                                    </div>
    
                                    <Link ><img src="\assets\Courseimg\Ballb banner.png" alt="Course1"/></Link>
                                </div>
    
                                <div class="course-content">
                                    <h4><Link > Bachelor of Legislative Law  </Link> </h4>
    
                                   
                                    
                                    <ul class="course-meta review">
                                        <li class="review-stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half"></i>
                                            <i class="fa fa-star-o"></i>
                                        </li>
    
                                        <li>25 Reviews</li>
                                    </ul> 
    
                                    <p> The BA Bachelor of Legislative Law (BA LLB) is a bachelor's degree program. The BA LLB is a five-year integrated course that includes an interdisciplinary study of Arts stream disciplines including Sociology, History, and others, as well as a legal study of legislation.</p>
    
                                    <ul class="course-meta desc">
                                        <li>
                                            <h6>5 years.</h6>
                                            <span> Course</span>
                                        </li>
    
                                     
    
                                        <li>
                                            <h6><span class="course-time">100%</span></h6>
                                            <span> Job Placement</span>
                                        </li>
                                    </ul> 
                                </div>
                            </div>






                            <div class="flat-course">
                                <div class="featured-post">             
                                    <div class="overlay">
                                        <div class="link"></div>
                                    </div>
    
                                    <Link ><img src="\assets\Courseimg\CA banner.png" alt="Course1"/></Link>
                                </div>
    
                                <div class="course-content">
                                    <h4><Link >chartered accountant </Link> </h4>
       
                                    
                                    <ul class="course-meta review">
                                        <li class="review-stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half"></i>
                                            <i class="fa fa-star-o"></i>
                                        </li>
    
                                        <li>25 Reviews</li>
                                    </ul> 
    
                                    <p>A chartered accountant (CA) is an international accounting designation granted to accounting professionals in many countries around the world, aside from the United States.</p>
    
                                    <ul class="course-meta desc">
                                        <li>
                                            <h6>4.5 years.</h6>
                                            <span> Course</span>
                                        </li>
    
                                     
    
                                        <li>
                                            <h6><span class="course-time">100%</span></h6>
                                            <span> Job Placement</span>
                                        </li>
                                    </ul> 
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
    
                <div class="flat-row join-us parallax parallax1 overlay bg-222">
                    <div class="overlay bg-222">
                        <div class="container">
                            <div class="row">
    
                                <div class="counter-content">
                                    <span class="counter-prefix">Join</span>
                                    <div class="numb-counter">
                                        <div class="numb-count" data-to="2912093" data-speed="1000" data-waypoint-active="yes">99+</div>
                                    </div>          
                                    <span class="counter-suffix">people</span>
                                </div>
    
                                <p>Don't take strees we are helping you to choose right career If you need any kind of information you can JOIN NOW</p>
                                <Link to="https://instagram.com/aadhya_education_indore?igshid=YmMyMTA2M2Y=" class="flat-button"> JOIN NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
    
        
    
              
                
      
        </div>
    
    </div>
    )
}

export default Hpmepage
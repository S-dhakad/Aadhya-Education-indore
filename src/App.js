
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Componets/Footer';
import Navbar from './Componets/Navbar';
import Homepage from './Pages/Homepage';
import Contact from './Pages/Contact';
import Course from './Pages/Course';
// import About from './Pages/About';
import ArtsCourse from './Pages/ARTSCourse';
import Commercecourse from './Pages/Commercecourse';
import Mathscourse from './Pages/Mathscourse';
import Biocourse from './Pages/Biocourse';

function App() {
  return (

     <>

<BrowserRouter>
<Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/Contact' element={<Contact />} />
          {/* <Route path='/About' element={<About />} /> */}
          <Route path='/AllCourse' element={<Course />} />
          <Route path='/ArtCourse' element={<ArtsCourse />} />
          <Route path='/CommerceCourse' element={<Commercecourse />} />
          <Route path='/Mathscourse' element={<Mathscourse />} />
          <Route path='/Biologycourse' element={<Biocourse />} />
        </Routes>
        <Footer/>
      </BrowserRouter>



 
    </>
  );
}

export default App;

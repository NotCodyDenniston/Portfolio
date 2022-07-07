import './App.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios'
import {Route,  Link, Routes}  from 'react-router-dom'


import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';


function App() {

  const initialFormValues = {
    name: '',
    description: ''
  
  }

  const initialTestimonialData = [
    {
      "id": 1,
      "name": "some guy at google",
      "description": "This guy is freaking amazing!!!"
    },
    {
      "id": 2,
      "name": "Cody Denniston-2022",
      "description": "I will make a database for this with CRUD operations soon"
    },
    {
      "id": 3,
      "name": "Elon Munsk",
      "description": " He needs to be stopped before he creates autonomous AI!!!!"
    },
    {
      "id": 4,
      "name": "Cody's mom",
      "description": "My son is the sweetest kid. Please get him out of the house :')"
    }
  ]
  
  const [testimonials, setTestimonials] = useState(initialTestimonialData)
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = () => {
 
   
      setTestimonials([formValues, ...testimonials])
    }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='myName'>CD</h1>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Projects'}>Projects</Link>
        <Link to={'/Testimonials'}>Testimonials</Link>

      </nav>
      </header>
      <section className='main-body'>

      <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route path={'/About'} element={<About/>}/>
        <Route path={'/Projects'} element={<Projects/>}/>
        <Route path={'/Testimonials'}
         element={<Testimonials
          testimonials={testimonials}
           setTestimonials={setTestimonials}
           submit = {handleSubmit}
           change={handleChange}
           values={formValues}
           />}/>

      </Routes>
      </section>
    </div>
  );
}

export default App;

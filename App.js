import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.js";

import { RiPencilRuler2Line } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";
import { FiCoffee } from "react-icons/fi";
import { FiAirplay } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
function App() {
  return (  
   <>
   
     <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="http://localhost:3000"><h2><b>Brooklyn</b></h2></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="http://localhost:3000">Home</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="http://localhost:3000" >
                Services
                </a> 
            </li>
            <li className="nav    z-item ">
              <a className="nav-link" href="http://localhost:3000" >
                Work
                </a> 
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="http://localhost:3000" >
                About
                </a> 
            </li>
 
            <li className="nav-item ">
              <a className="nav-link" href="http://localhost:3000" >
                Testimonials
                </a> 
            </li>

            <li className="nav-item ">
              <a className="nav-link" href="http://localhost:3000" >
                contact
                </a> 
            </li>
          </ul>
          <div className="social-links ms-auto">
            <a className='a' href="http://localhost:3000"><i class="ri-facebook-box-fill"></i></a>
            <a className='a' href="http://localhost:3000"><i class="ri-twitter-box-fill"></i></a>
            <a className='a' href="http://localhost:3000"><i class="ri-google-box-fill"></i></a>
          </div>
 
        </div>
      </div>
    </nav> 

    <section id="hero">
      <div className="container">
      <div className="row">
        <div className="col-lg-6" >
          <h1 className='h' data-aos="fade-left"
     data-aos-duration="1000">Borrklyn Simmons</h1>
          <p  data-aos="fade-up"
     data-aos-duration="3000">
            Hi! im simmons a product designer based in peshawar. I create user-friendly interfaces for fast-growing startups
          </p>
          <a href="http://localhost:3000" className="a text-white btn btn-outline-dark" data-aos="fade-up"
     data-aos-duration="4000">Explore my Work</a>
        </div>
      </div>
      </div>
    </section>

    <section id='services'>
      <div className='container'>
        <div className='row' >
          <div className='col-12' data-aos='fade-up'>
            <div className='intro text-center'>
              <div className='hr-line'></div>
              <h1 className='display-3'>OUR SERVICES</h1>
              <p className=' display-6 text-center'>
                it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-6' data-aos="fade-up"
     data-aos-duration="3000">
            <div className='services'>
              <div className='icon'>
              <RiPencilRuler2Line/>
              </div>
              <div>
                <h4><b>SERVICES TITLE</b></h4>
                <p>
                it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <a href='http://localhost:3000/' className='likn-arrow'><FiArrowUpRight/>Read More</a>
              </div>
            </div>
          </div>

          <div className='col-lg-6' data-aos="fade-up"
     data-aos-duration="3000">
            <div className='services'>
              <div className='icon'>
              <FiCoffee/>
              </div>
              <div>
                <h4><b>UI/UX Design</b></h4>
                <p>
                it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <a href='http://localhost:3000/' className='likn-arrow'><FiArrowUpRight/>Read More</a>
              </div>
            </div>
          </div>

          <div className='col-lg-6' data-aos="fade-up"
     data-aos-duration="3000">
            <div className='services'>
              <div className='icon'>
              <FiAirplay/>
              </div>
              <div>
                <h4><b>WEB DEVELOPMENT</b></h4>
                <p>
                it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <a href='http://localhost:3000/' className='likn-arrow'><FiArrowUpRight/>Read More</a>
              </div>
            </div>
          </div>

          <div className='col-lg-6' data-aos="fade-up"
     data-aos-duration="3000">
            <div className='services'>
              <div className='icon'>
              <FiAward/>
              </div>
              <div>
                <h4><b>BRAND IDENTITY</b></h4>
                <p>
                it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <a href='http://localhost:3000/' className='likn-arrow'><FiArrowUpRight/>Read More</a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </section>


    <section id='work'>
      <div className='container'>
        <div className='row align-content-center justify-content-between' data-aos="fade-up"
      >
          <div className='col-6'>
            <div className='intro intro-dark'>
              <div className='hr-line'></div>
              <h1 className='display-3'>PROJECTS</h1>
              <p className=' display-6 '>
                it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className='col-auto'>
            <a href=' http://localhost:3000/' className='btn btn-outline-light' >VIEW MORE</a>
          </div>
        </div>
         <div className='row gy-5'>
          <div className='col-lg-4 col-sm-6' data-aos="fade-up">
            <div className='project'>
              <div className='image-wrapper'>
                <img src='https://images.pexels.com/photos/12712600/pexels-photo-12712600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='nature'></img>
              </div>
              <h3>Amet Consector</h3>
              <a href='http://localhost:3000/' className='likn-arrow likn-dark font-size-xxlarge'><FiArrowUpRight/>Read More</a>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6' data-aos="fade-up">
            <div className='project'>
              <div className='image-wrapper'>
                <img src='https://images.pexels.com/photos/6692306/pexels-photo-6692306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='nature'></img>
              </div>
              <h3>Amet Consector</h3>
              <a href='http://localhost:3000/' className='likn-arrow likn-dark font-size-xxlarge'><FiArrowUpRight/>Read More</a>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6' data-aos="fade-up">
            <div className='project'>
              <div className='image-wrapper'>
                <img src='https://images.pexels.com/photos/4227198/pexels-photo-4227198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='nature'></img>
              </div>
              <h3>Amet Consector</h3>
              <a href='http://localhost:3000/' className='likn-arrow likn-dark font-size-xxlarge'><FiArrowUpRight/>Read More</a>
            </div>
          </div>
         </div>
        </div>
        </section>


        <section id='about'>
      <div className='container'>
        <div className='row' >
          <div className='col-lg-5' data-aos='fade-up'>
            <div className='intro mb-4'>
              <div className='hr-line'></div>
              <h1 className='display-3'>Little bit about me</h1>
            <p className='display-4'>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <a href='http://localhost:3000/ ' className='btn btn-outline-dark'>Contact me</a>
            </div>
          </div>
          <div className='col-lg-6 offset-lg-1'>
            <img src='https://images.pexels.com/photos/4640899/pexels-photo-4640899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='portfolio'></img>
          </div>
        </div>
        </div>
        </section>

   </>
  );
}

export default App;

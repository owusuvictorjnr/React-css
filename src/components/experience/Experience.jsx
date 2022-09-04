import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      
      <h5>What Skills I Have</h5>

      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>HTML</h4>
            <small className='text-light'>Experience</small>
          </div>
          </article>
          

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>CSS</h4>
            <small className='text-light'>Experience</small>
          </div>
          </article>


          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
          </div>
          </article>


          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>Vue.js</h4>
            <small className='text-light'>Intermediate</small>
          </div>
          </article>


          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>React.js</h4>
            <small className='text-light'>Intermediate</small>
          </div>
          </article>


          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>WordPress</h4>
            <small className='text-light'>Intermediate</small>
          </div>
          </article>
        </div>
        </div>


         {/* Start Of Backend */}
      <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>


            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Django and Flask</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
      </div>


      {/* Start Of Others */}
      <div className="others">
          <h3>Others</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Project Management</h4>
              <small className='text-light'>Experience</small>
            </article>


            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <h4>I.T Assistant</h4>
              <small className='text-light'>Experience</small>
            </article>


            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Networking</h4>
              <small className='text-light'>Intermediate</small>
            </article>


            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Cyber Security</h4>
              <small className='text-light'>Intermediate</small>
            </article>


            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Cloud Networking</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
      </div>
    
      </div>


     


      
    
    </section>
  )
}

export default Experience
import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className='d-flex flex-row justify-content-center'>
          <div className="col-lg-4 mt-5 p-5">
            <h4>
              Hello this is vikram, this whole website is built using Next.js
            </h4>
            
            <Image src='/next.svg' width='200' height='200' />
          </div>
        </div>
      </div>
    </div>
    
    

    </>
    
  )
}

export default About

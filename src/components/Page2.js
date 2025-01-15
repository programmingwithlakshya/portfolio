import React from 'react'
import i1 from '../assets/img1.jpeg'
import resume from '../assets/Resume.pdf'
function Page2() {
  return (
    <div className='page2' id='page2'>
                <h1 className='bo pi'>About Me</h1>
            <div className='img2'>
                <img src={i1} className="img-fluid" alt="..."/>
            </div>
            <div className='text2'>
                <h1>Hi There! I'm Lakshya Garg</h1>
                <h1>Python Full Stack Developer </h1><br></br>
                <h4>A "Python Full Stack Developer" refers to a professional with expertise in both front-end and back-end development using the Python programming language. "Full Stack" implies proficiency in working on both the client-side (user interface) and the server-side (backend) of web applications.</h4>
                    <div className='info'>
                    <h5> Birthday&emsp;&emsp;&ensp;&nbsp;:&emsp;&emsp; January 12,2003 <br />  Phone&emsp;&emsp;&emsp;&ensp;:&emsp;&emsp;+91 7428704891  <br /> Email&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp; garglakshya019@gmail.com  <br /> From&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp; Ghaziabad, U.P. , India  <br />  Language&emsp;&emsp;:&emsp;&emsp; English, Hindi   <br /> </h5>
                    
                    <a href={resume} download='resume'>
                    <button type="button" className="t3">Download CV</button>
                    </a>

                    </div>   
            </div>
        </div>
  )
}

export default Page2
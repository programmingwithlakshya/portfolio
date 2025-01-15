import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'

function Project() {
  return (
        <div className='page5' id='page5'>
                <h1 className='bo'>Project</h1>
                {/* <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div> */}

                              <div className='col11'>
                                <a href='https://alk-fashion-clothing.netlify.app/'><img src={p1} className="img-fluid fs" alt="..."/></a>
                                {/* <a href=""><img src="" className="img-fluid sd" alt="..."/></> */}
                              </div>
                              <div className='col12'>
                              <a href='https://lak-octa69.github.io/winbuzz-clone/'><img src={p2} className="img-fluid fs" alt="..."/></a>
                               {/* <a href=""><img src="" className="img-fluid sd" alt="..."/></> */}
                              </div>
                              <div className='col13'>
                               {/* <a href=""><img src="" className="img-fluid fs" alt="..."/></> */}
                               {/* <a href=""><img src="" className="img-fluid sd" alt="..."/></> */}
                              </div>
                              </div>

  )
}

export default Project
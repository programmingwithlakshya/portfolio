import React from 'react'

function Header() {
  return (
        <div className='head'>
            <div className='fl'>
                                <button className="nav-link" href="#page1"><h3>Laksh</h3></button> 
                                <button type="button" className="btn btn-primaryz bg5 h24" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Hire Me</button>
                                <button className="btn btn-secondary dropdown-toggle h24" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#page1">Home</a></li>
                                    <li><a className="dropdown-item" href="#page2">About</a></li>
                                    <li><a className="dropdown-item" href="#page3">Skills</a></li>
                                    <li><a className="dropdown-item" href="#page5">Project</a></li>
                                    <li><a className="dropdown-item" href="#page4">Contact</a></li>
                                </ul>
                               
                                
            </div>
            <div className='fr'>
                    <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active h21" aria-current="page" href="#page1">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h21" href="#page2">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h21" href="#page3">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h21" href="#page5">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h21" href="#page4">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h21" href="model1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Hire Me</a>
                </li>
                
                 
                
                {/* <button type="button" className="btn btn-primaryz" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Hire Me</button> */}
                </ul>          

                
                
            </div>
        </div>

        
  )
}

export default Header
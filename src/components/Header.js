import React from 'react'

function Header() {
  return (
        <div className='head'>
            <div className='fl'>
                <a className="nav-link" href="#page1"><h3>Laksh</h3></a>
            </div>
            <div className='fr'>
                    <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#page1">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#page2">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#page3">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#page5">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#page4">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="model1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Hire Me</a>
                </li>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        more
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#page1">Home</a></li>
                        <li><a className="dropdown-item" href="#page2">ABout</a></li>
                        <li><a className="dropdown-item" href="#page3">Skills</a></li>
                        <li><a className="dropdown-item" href="#page5">Project</a></li>
                        <li><a className="dropdown-item" href="#page4">Contact</a></li>
                        <li><a className="dropdown-item" href="difhfh" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Hire Me</a></li>
                    </ul>
                </div>
                {/* <button type="button" className="btn btn-primaryz" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Hire Me</button> */}
                </ul>

                

                
                
            </div>
        </div>

        
  )
}

export default Header
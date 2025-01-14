import React from 'react'

function Header() {
  return (
        <div className='head'>
            <div className='fl'>
                <a className="nav-link" href="#"><h3>Laksh</h3></a>
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
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#page4">Contact</a>
                </li>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Hire Me</button>
                </ul>
                
            </div>
        </div>
  )
}

export default Header
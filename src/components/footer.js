"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css"

function Footer() {
    return ( 
        <footer className='container-fluid bg-dark text-white pt-1 pb-1'>
            <p className='text-center'>@FastNews</p>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='d-flex justify-content-around w-25 '>
                    <i className="h2 bi bi-github"/>
                    <i className="h2 bi bi-google"/>
                    <i className="h2 bi bi-instagram"/>
                </div>
            </div>
            
        </footer>
     );
}

export default Footer;
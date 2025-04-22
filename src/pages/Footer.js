import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiYourtraveldottv } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold"><span className='text-warning me-1'><SiYourtraveldottv /></span>Dot</h5>
            <hr className="mb-3 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#fff', height: '2px' }} />
            <p>
              We create awesome products and help businesses grow with technology & innovation.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Links</h6>
            <hr className="mb-3 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#fff', height: '2px' }} />
            <p><a href="#" className="text-white text-decoration-none">Home</a></p>
            <p><a href="#" className="text-white text-decoration-none">About</a></p>
            <p><a href="#" className="text-white text-decoration-none">Services</a></p>
            <p><a href="#" className="text-white text-decoration-none">Contact</a></p>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Newsletter</h6>
            <hr className="mb-3 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#fff', height: '2px' }} />
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>

          {/* Social */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Follow us</h6>
            <hr className="mb-3 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#fff', height: '2px' }} />
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-light btn-floating rounded-circle"><FaFacebookF /></a>
              <a href="#" className="btn btn-outline-light btn-floating rounded-circle"><FaTwitter /></a>
              <a href="#" className="btn btn-outline-light btn-floating rounded-circle"><FaInstagram /></a>
              <a href="#" className="btn btn-outline-light btn-floating rounded-circle"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-3 border-top mt-4">
        © {new Date().getFullYear()} MyCompany. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;


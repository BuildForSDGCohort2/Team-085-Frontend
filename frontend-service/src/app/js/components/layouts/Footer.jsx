import React from "react";
import { Link } from 'react-router-dom';

function Footer() {

    return (
      <div>
          <footer className="container" style={{marginTop:"300px"}}>
            <div className="row">
              <div className="col">
                <h4>Artisan</h4>
                <ul>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4>For Artisan</h4>
                <ul>
                  <li>
                    <Link to="/">Services policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4>About Us</h4>
                <ul>
                  <li>
                  <a href='/'>Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4>Handiwork</h4>
                <ul>
                  <li>
                    <a href="/">Terms of Service</a>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4>Top Categories</h4>
                <ul>
                  <li>
                    <Link to="/">Fashion design</Link>
                  </li>
                  <li>
                    <Link to="/">Painting</Link>
                  </li>
                  <li>
                    <Link to="/" >Plumbering</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            <hr/>
            <div
              className="center"
            >
              Copyright &copy; {new Date().getFullYear()} Handiwork
            </div>
          </footer>
        )
      </div>
    );
  }

export default Footer;

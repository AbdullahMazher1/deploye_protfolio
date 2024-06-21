import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>AMA SOLUTIONS</h2>
              <p className="pr-5 text-white-50">We focus on delivering innovative, user-friendly, and efficient applications that drive engagement and str- <br/>eam line operations. </p>
              <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Links</h4>
              <ul className="m-0 p-0">
                <li>- <a href="#Header">Home</a></li>
                <li>- <a href="#Container">About Us</a></li>
                <li>- <a href="#ServicesContainer">Our Services</a></li>
                <li>- <a href="#Analyticscontainer">Our Profile</a></li>
                <li>- <a href="#Header">Contact Us</a></li>
                <li>- <a href="#Projects">Deployed Projects</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
              <p className="mb-0"><i className="fa fa-phone mr-3"></i>(92) 304 5678898</p>
              <p><i className="fa fa-envelope-o mr-3"></i>abd.sialvi64@gmail.com</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className=""><small className="text-white-50">© 2024. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

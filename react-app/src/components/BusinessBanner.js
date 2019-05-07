import React, { Component } from "react";

class BusinessBanner extends Component {
  render() {
    return (
      <header className="bg-primary py-5 mb-5">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <h1 className="display-4 text-white mt-5 mb-2">
                Business Name or Tagline
              </h1>
              <p className="lead mb-5 text-white-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                possimus ab labore provident mollitia. Id assumenda voluptate
                earum corporis facere quibusdam quisquam iste ipsa cumque unde
                nisi, totam quas ipsam.
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default BusinessBanner;

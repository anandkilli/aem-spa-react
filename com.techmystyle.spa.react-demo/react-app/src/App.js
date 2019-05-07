import React, { Component } from "react";
import Navbar from "./components/Navbar";
import BusinessBanner from "./components/BusinessBanner";
import BusinessOverview from "./components/BusineeOverview";
import ContactUs from "./components/ContactUs";
import CardTile from "./components/CardTile";
import Footer from "./components/Footer";
import { Page, withModel } from "@adobe/cq-react-editable-components";
import { ModelManager } from "@adobe/cq-spa-page-model-manager";

class App extends Page {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <BusinessBanner />
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-5">
              <BusinessOverview
                text={
                  ModelManager.modelStore._findItemData(
                    "root/responsivegrid/text"
                  ).data.text
                }
                cqPath={
                  "/content/react-demo/en/jcr:content/root/responsivegrid/text"
                }
              />
            </div>
            <div className="col-md-4 mb-5">
              <ContactUs />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <CardTile />
            </div>
            <div className="col-md-4 mb-5">
              <CardTile />
            </div>
            <div className="col-md-4 mb-5">
              <CardTile />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withModel(App);

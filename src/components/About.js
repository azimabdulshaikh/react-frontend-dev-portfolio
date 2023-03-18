import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import bgimage from './profile.jpg'
import './animate.css'
import './bootstrap.css'
import './flexslider.css'
import './style.css'
class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      // <section id="about">
      <section class="site-hero" style={{
        backgroundImage: `url(${bgimage})`
      }} id="section-home" data-stellar-background-ratio="0.5">
        <div className="col-md-12">
          <div className="row center mx-auto mb-5">
            <div class="container">
              <div class="row intro-text align-items-center justify-content-center">
                <div class="col-md-10 text-center pt-5">
                  <h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">Abdul Azim Shaikh</strong></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      // </section>
    );
  }
}

export default About;

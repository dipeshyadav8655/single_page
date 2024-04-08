import React from "react";
import "./Footer.css";
import ButtonBackground from "../../Assets/Rectangle 1.svg";
import Profile from "../../Assets/iconamoon_profile-fill.svg";
import Mail from "../../Assets/material-symbols-light_mail.svg";
import Call from "../../Assets/material-symbols_call.svg";
import Write from "../../Assets/system-uicons_write.svg";
import Location from "../../Assets/fluent_location-24-filled.svg";
import Facebook from "../../Assets/Social Media Icon.svg";
import Instgram from "../../Assets/Social Media Icon Square.svg";
import Twitter from "../../Assets/Group 73.svg";
import LinkedIn from "../../Assets/Social Media Icon Square (1).svg";
import Logo from "../../asset/Logo.svg";
import FacebookDark from "../../Assets/FacebookDark.svg"
import InstaDark from "../../Assets/InstaDark.svg"
import YouTubeDark from "../../Assets/YoutubeDark.svg"
import TwitterDark from "../../Assets/TwitterDark.svg"
import LinkedInDark from "../../Assets/LinkedInDark.svg"

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="ContactUs">
        <div className="Form flex flex-column flex-center">
          <div className="input-style InputDiv">
            <img className="Icon" src={Profile} />
            <input className="text" placeholder="Full Name" />
          </div>
          <div className="input-style InputDiv">
            <img className="Icon" src={Mail} />
            <input className="text" placeholder="Email-ID" />
          </div>
          <div className="input-style InputDiv">
            <img className="Icon" src={Call} />
            <input className="text" placeholder="Mobile no." />
          </div>
          <div className="input-style TextDiv">
            <img className="Icon" src={Write} />
            <textarea
              className="text"
              placeholder="Drop your message"
            ></textarea>
          </div>

          <div className="Submit flex flex-center text">Submit</div>
        </div>
        <div className="Detail">
          <div className="heading text-white">Get in touch today</div>
          <div className="text text-white subText">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
            adipiscing tincidunt interdum tellus du.
          </div>
          <div className="text text-white subDetail">
            <img className="Icon" src={Call} />
            Phone: +91 99880908009
          </div>
          <div className="text text-white subDetail">
            <img className="Icon" src={Mail} />
            Email: info@spheretechlab.in
          </div>
          <div className="text text-white subDetail flex">
            <div>
              <img className="Icon" src={Location} />
            </div>
            Bhopal Address: ABC, Ram Road, Bhopal, Madhya
            <br /> Pradesh, India - 765687
          </div>
          <div className="SocialLinks flex">
            <div>
              <img className="Icon" src={Facebook} />
            </div>
            <div>
              <img className="Icon" src={Twitter} />
            </div>
            <div>
              <img className="Icon" src={Instgram} />
            </div>
            <div>
              <img className="Icon" src={LinkedIn} />
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="Links flex ">
        <div className="LogoDiv">
          <div>
            <img className="Icon" src={Logo} />
          </div>
          <div className="text-white">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </div>
          <div className="flex linkDiv">
            <div>
              <img className="Icon" src={FacebookDark} />
            </div>
            <div>
              <img className="Icon" src={InstaDark} />
            </div>
            <div>
              <img className="Icon" src={YouTubeDark} />
            </div>
            <div>
              <img className="Icon" src={LinkedInDark} />
            </div>
            <div>
              <img className="Icon" src={TwitterDark} />
            </div>
          </div>
        </div>
        <div className="text-white block">
          <div className="linkHeading button-text"> Company</div>
          <div>
            <a>About</a>
          </div>
          <div>
            <a> Contact us</a>
          </div>
          <div>
            <a> Careers</a>
          </div>
          <div>
            <a> Blog</a>
          </div>
        </div>
        <div className="text-white block">
          <div className="linkHeading button-text">Service</div>
          <div>
            <a>AI & ML Service</a>
          </div>
          <div>
            <a>Cloud Transformation</a>
          </div>
          <div>
            <a>Data Engineering</a>
          </div>
          <div>
            <a>Application services</a>
          </div>
          <div>
            {" "}
            <a>QA & Testing</a>
          </div>
        </div>
        <div className="text-white block">
          <div className="linkHeading button-text">Technology</div>
          <div>
            <a>Blockchain</a>
          </div>
          <div>
            <a>Mobility</a>
          </div>
          <div>
            <a>Cloud</a>
          </div>
          <div>
            <a>Data Analytics</a>
          </div>
          <div>
            <a>Open Source</a>
          </div>
        </div>
        <div className="text-white block">
          <div className="linkHeading button-text">Industries</div>
          <div>
            <a> Web3</a>
          </div>
          <div>
            <a>Hi - Tech</a>
          </div>
          <div>
            <a>Financial services</a>
          </div>
          <div>
            <a>Insurance</a>
          </div>
          <div>
            <a>Healthcare</a>
          </div>
        </div>
      </div>
      </div>
      <div>

      </div>
      
    </div>
  );
}

export default Footer;

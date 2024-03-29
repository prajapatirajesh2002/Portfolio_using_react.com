import React from "react";
// import img from "../../public/images/mamun.jpg";
import { GiCalendar, GiClawSlashes, GiLaddersPlatform, GiLoad, GiPathTile, GiPhone } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";
const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="public/images/mamun.jpg" alt="" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name"> Rajesh Prajapati</h1>
          <p className="title">Web developer </p>
        </div>
        <button className="info_more-btn">
          <span>show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>
      {/* Contacts info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a className="contact-link" href="mailto:rp1378265@gmail.com">
                rp13265@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">PHONE</p>
              <a className="contact-link" href="tel:+916265153363">
                +91 6265153363
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>
            <div className="contact-info">
              <p className="contact-title">BIRTHDAY</p>
              <time className="contact-link" dateTime="2002-12-20">
                20 December, 2002
              </time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiLoad />
            </div>
            <div className="contact-info">
              <p className="contact-title">LOCATION</p>
              <address>
               new Ashoka garden bhopal
              </address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;

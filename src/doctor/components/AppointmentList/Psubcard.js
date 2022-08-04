import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import img from "../../../../src/assets/profile.jpg";
import {Link} from 'react-router-dom';

export default function Psubcard({ name, status, phoneNumber, date, time }) {
  return (
      <div className="container shadow-sm PatientSubcard mt-3 mb-3">
        <div className="Status rb leftdiv">
          <h5>Long Discuss</h5>
          <h6>{status}</h6>
        </div>
        <div className="rightdiv">
          <div className="date-rightdiv ">
            <div>
              <BsCalendarDate color="cadetblue" /> {date}
            </div>
            <div>
              <BsClock color="cadetblue" /> {time}
            </div>
          </div>
          <div className="details-rightdiv">
            <img src={img} alt="sub" />
            <div className="details-right-div-name">
              <div className="details-right-div-mob">
              <p>{name}</p>
                <h6>
                <i class="fa-solid fa-phone-volume"></i> {phoneNumber} 
                </h6>
              </div>
              <div className="rightArrowButton"><button class="btn"><Link className="psubcard-link" to='/doctor/patient-details'><i class="fa-solid fa-arrow-right-long"></i></Link></button></div>
            </div>
          </div>
        </div>
      </div>
  );
}
import React from "react";
import "../styles/BookAppointment.css";
import appointmentImage from  "../assets/c6.jpg"

function BookAppointment() {
  return (
    <div className="appointment-page">

      <div className="appointment-heading">
        <h1>Book Appointment</h1>

        <div className="heart-divider">
          <span></span>
          <span className="heart">♥</span>
          <span></span>
        </div>

        <p>
          Your health matters. Schedule your visit with our professional doctors.
        </p>
      </div>

      <div className="container">
        <div className="appointment-card row">

          <div className="col-lg-5 appointment-image">
            <img
              src={appointmentImage}
              alt="Book Appointment"
            />

            <div className="image-text">
              <h2>Take Care of Your Health</h2>
              <p>We are here to care for you.</p>
            </div>
          </div>

          <div className="col-lg-7 appointment-form">
            <h2>Make an Appointment</h2>
            <p>Fill in your information below</p>

            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Select Doctor</label>
                <select className="form-select">
                  <option value="">Choose a doctor</option>
                  <option>Dr. Alex</option>
                  <option>Dr. Adam</option>
                  <option>Dr. Sara</option>
                </select>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Appointment Date</label>
                  <input type="date" className="form-control" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Appointment Time</label>
                  <input type="time" className="form-control" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="appointment-btn">
                Book Appointment
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}

export default BookAppointment;
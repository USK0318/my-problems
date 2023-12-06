import React from 'react';
import '../css/Form.css'

class Form extends React.Component {
  render() {
    return (
      <div className="body-container">
        <form className="custom-form">
          <h1 className="form-title">Saikiran</h1>

          <label className="form-label" htmlFor="name">
            Full Name:
          </label>
          <input className="form-input" type="text" id="name" name="name" required />

          <label className="form-label" htmlFor="fatherName">
            Father's Name:
          </label>
          <input className="form-input" type="text" id="fatherName" name="fatherName" required />

          <label className="form-label" htmlFor="mobileNumber">
            Mobile Number:
          </label>
          <input
            className="form-input"
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            pattern="[0-9]{10}"
            required
          />

          <label className="form-label" htmlFor="email">
            Email ID:
          </label>
          <input className="form-input" type="email" id="email" name="email" required />

          <label className="form-label" htmlFor="age">
            Age:
          </label>
          <input className="form-input" type="number" id="age" name="age" required />

          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;

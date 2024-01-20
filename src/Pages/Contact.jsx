import React from 'react'
import logo1 from '../Components/Assets/small-logo-removebg-preview.png'
import './CSS/Contact.css'

export default function Contact() {

  return (
    <div className='contact-page'>
      <div className="contact-box">
    <h1 className="contact-title">Contact Us/Custom Order</h1>
    <h2 className="contact-thank">Thank you for visiting our page!</h2>
    <p className="contact-p">
      Need to contact us? Please fill out the form below completely. A response
      will be sent no later than 24 hours after form submission.
    </p>
    <p className="contact-p">
      To place a <strong>Custom Order</strong> please fill out the message box
      with as much detail as possible. If clothing, please take a look at our{" "}
      <a href="/about">Sizing Chart</a> and include your
      measurements.
    </p>
    <p className="contact-p">
      Turn around time for <strong>Custom Orders</strong> is about 2-3 weeks.
    </p>
    <form>
            <div className="contact-inputs">
            <input type="text" placeholder='First Name' required/>
            <input type="text" placeholder='Last Name' required/>
            <input type="email" placeholder='Your Email' required/>
        </div>
        <div className="contact-row">
          <label className="form-section">Reason for contact</label>
          <br />
          <label>
            <span>Custom Order</span>
          </label>
          <br />
          <label>
            <input name="group1" id="radio" type="radio" />
            <span>Issue With Order</span>
          </label>
          <br />
          <label>
            <input name="group1" id="radio" type="radio" />
            <span>Contact MLA</span>
          </label>
          <br />
          <label>
            <input name="group1" id="radio" type="radio" />
            <span>Other</span>
          </label>
                </div>
                <div className="contact-inputs">
          <textarea placeholder="Message (Optional)" id="textarea1" defaultValue={""} />
        </div>
        <button className="submit-btn" type="submit" name="action">Submit</button>

        <img className="logo-img" src={logo1} alt="mla crochet logo" />
        </form>
    </div>
    </div>
  )
}

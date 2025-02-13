import React, { useState, useRef } from "react";
import axios from "axios";

const ContactUs: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/contact", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section area-padding">
      <div className="container">
        {/* Google Map */}
        <div className="d-none d-sm-block mb-5 pb-4">
          <iframe
            ref={iframeRef}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5728430182317!2d27.834505175024347!3d-26.404984572180588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a94df7ad5695%3A0xa280c7729a1c9782!2sFred%20Norman%20Secondary!5e0!3m2!1sen!2sza!4v1739185508539!5m2!1sen!2sza"
            width="100%"
            height="450"
            className="google-map"
            title="Map location of Fred Norman Secondary"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form */}
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8 mx-auto">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row">
                {/* Name Field */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" disabled={loading} className="btn btn-primary mt-3">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            {/* Success Message */}
            {success && <p className="text-success mt-3">Message sent successfully!</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
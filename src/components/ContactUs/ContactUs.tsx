import React, { useEffect, useRef } from "react";

const ContactUs: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    // Check if the browser supports 'loading="lazy"'
    const supportsLazyLoading = "loading" in HTMLIFrameElement.prototype;

    if (!supportsLazyLoading && iframeRef.current) {
      // If lazy loading is not supported, use IntersectionObserver as a fallback
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Load iframe content when it enters the viewport
              const iframe = entry.target as HTMLIFrameElement;
              iframe.src = iframe.dataset.src || ""; // Use data-src for the iframe's URL
              observer.unobserve(entry.target); // Stop observing once the iframe is loaded
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the iframe is visible
      );

      if (iframeRef.current) {
        observer.observe(iframeRef.current);
      }
    }
  }, []);

  return (
    <section className="contact-section area-padding">
      <div className="container">
        <div className="d-none d-sm-block mb-5 pb-4">
          <iframe
            ref={iframeRef}
            data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.5728430182317!2d27.834505175024347!3d-26.404984572180588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a94df7ad5695%3A0xa280c7729a1c9782!2sFred%20Norman%20Secondary!5e0!3m2!1sen!2sza!4v1739185508539!5m2!1sen!2sza"
            width="100%"
            height="450"
            className="google-map"
            title="Map location of Fred Norman Secondary"
            allowFullScreen
            loading="lazy"  // This will work on modern browsers
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          {/* Form fields and other content */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

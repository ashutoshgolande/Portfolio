import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:ashutoshgolande0608@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS (you only need to do this once in your app)
      emailjs.init(emailConfig.publicKey);

      // Log configuration for debugging (remove in production)
      console.log('EmailJS Config:', {
        serviceId: emailConfig.serviceId,
        templateId: emailConfig.templateId,
        publicKey: emailConfig.publicKey ? 'Present' : 'Missing'
      });

      // Send email using EmailJS
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ashutoshgolande0608@gmail.com', // Your email
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error: any) {
      console.error('Failed to send email:', error);
      
      // Log detailed error information
      let errorDetails = 'Unknown error';
      if (error.status) {
        console.error('Error status:', error.status);
        errorDetails = `Error ${error.status}`;
      }
      if (error.text) {
        console.error('Error message:', error.text);
        errorDetails += `: ${error.text}`;
        
        // Handle specific Gmail authentication error
        if (error.text.includes('insufficient authentication scopes')) {
          errorDetails = 'Gmail authentication issue - please use the email button below';
          
          // Automatically open mailto as fallback
          setTimeout(() => {
            const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
            const body = encodeURIComponent(
              `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            );
            const mailtoLink = `mailto:ashutoshgolande0608@gmail.com?subject=${subject}&body=${body}`;
            window.open(mailtoLink, '_blank');
          }, 2000);
        }
      }
      
      setErrorMessage(errorDetails);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-content">
        <h2 className="section-title">📞 Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss opportunities, projects, or just say hello!
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>ashutoshgolande0608@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 9175043690</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitStatus === 'success' && (
              <div className="form-message success">
                ✅ Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-message error">
                ❌ Failed to send message. {errorMessage ? `(${errorMessage})` : ''} Please try again or contact me directly at ashutoshgolande0608@gmail.com
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <div className="form-buttons">
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    Sending...
                    <i className="fas fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
              
              <button 
                type="button" 
                className="mailto-btn" 
                onClick={handleMailto}
                disabled={!formData.name || !formData.email || !formData.message}
              >
                Email Me Directly
                <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

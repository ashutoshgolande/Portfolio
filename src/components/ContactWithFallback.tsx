import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import './Contact.css';

const ContactWithFallback: React.FC = () => {
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

  const handleEmailJSSubmit = async () => {
    try {
      emailjs.init(emailConfig.publicKey);

      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ashutoshgolande0608@gmail.com',
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error: any) {
      console.error('EmailJS failed:', error);
      throw error;
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:ashutoshgolande0608@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Try EmailJS first
      await handleEmailJSSubmit();
    } catch (error: any) {
      console.warn('EmailJS failed, falling back to mailto');
      
      // Fallback to mailto
      try {
        handleMailtoFallback();
      } catch (fallbackError) {
        console.error('Both methods failed:', fallbackError);
        setErrorMessage('Email service unavailable');
        setSubmitStatus('error');
      }
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
                ❌ Email service temporarily unavailable. {errorMessage && `(${errorMessage})`} Please contact me directly at ashutoshgolande0608@gmail.com
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
                onClick={handleMailtoFallback}
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              >
                Open in Email App
                <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactWithFallback;

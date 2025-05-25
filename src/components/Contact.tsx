import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formValues.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    
    if ((window as any).addNotification) {
      (window as any).addNotification(
        `New message from ${formValues.firstName} ${formValues.lastName}: ${formValues.message.substring(0, 50)}${formValues.message.length > 50 ? '...' : ''}`
      );
    }
    
    
    const serviceId = 'service_s2w0jal';
    const templateId = 'template_d5myea5';
    const userId = 'RmRif_lmKgLWXi1m1';
    
    emailjs.sendForm(serviceId, templateId, formRef.current!, userId)
      .then((result) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setStatusMessage('Your message has been sent successfully!');
        setFormValues({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
        
        setTimeout(() => {
          setSubmitStatus(null);
          setStatusMessage('');
        }, 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        setStatusMessage('There was an error sending your message. Please try again later.');
        
        setTimeout(() => {
          setSubmitStatus(null);
          setStatusMessage('');
        }, 5000);
      });
  };

  return (
    <section id="contact" className="py-20 relative gradient-bg overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-background" style={{ 
        borderBottomLeftRadius: '50% 100%',
        borderBottomRightRadius: '50% 100%' 
      }}></div>
      
      <div className="container mx-auto px-4 pt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            Have a question or want to work together? Feel free to reach out!
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <img 
              src="foote.jpg" 
              alt="Contact Illustration" 
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur border ${
                      errors.firstName ? 'border-red-500' : 'border-white/20'
                    } text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-red-400 text-sm">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur border ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    } text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    placeholder="Phone No."
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur border ${
                    errors.message ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-background font-medium hover:bg-gray-200 transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send
                    </>
                  )}
                </button>
                
                {submitStatus && (
                  <div className={`flex items-center gap-2 ${
                    submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                    <span>{statusMessage}</span>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is being edited
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };
  
  const validate = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="text-fortext py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
          <p className="text-lg max-w-2xl opacity-90">
            Have questions or need assistance? Our team is here to help. Reach out to us using any of the methods below.
          </p>
        </div>
      </div>
      
   
      <div className="max-w-6xl mx-auto px-4 py-16">
      
      {/* Contact Form and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-secondary p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <MessageSquare className="text-primary mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your Name"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="email@example.com"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      formErrors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="How can we help you?"
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    formErrors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Tell us how we can assist you..."
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-primary text-secondary rounded-lg hover:bg-tertiary transition-colors flex items-center justify-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="bg-secondary p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <MapPin className="text-primary mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">Our Location</h2>
            </div>
            
            <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-6">
              <img src="/api/placeholder/800/450" alt="Map location" className="w-full h-full object-cover" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Address</h4>
                  <p className="text-gray-600">123 Main Street, Thamel, Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Business Hours</h4>
                  <p className="text-gray-600">Mon-Sat: 10:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: 12:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

           {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-10">
          <div className="bg-secondary p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm</p>
            <a href="tel:+9771234567890" className="text-primary font-medium hover:underline">
              +977 1234 567 890
            </a>
          </div>
          
          <div className="bg-secondary p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
            <a href="mailto:support@yourstore.com" className="text-primary font-medium hover:underline">
              support@yourstore.com
            </a>
          </div>
          
          <div className="bg-secondary p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-2">123 Main Street, Kathmandu</p>
            <p className="text-primary font-medium">Open: 10am - 7pm daily</p>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What are your delivery options?</h3>
              <p className="text-gray-600">We offer standard delivery (3-5 business days) and express delivery (1-2 business days) throughout Nepal. International shipping is available to select countries.</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I track my order?</h3>
              <p className="text-gray-600">Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the courier's website.</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What is your return policy?</h3>
              <p className="text-gray-600">We accept returns within 14 days of delivery. Items must be unused, undamaged, and in their original packaging. Please contact our customer service to initiate a return.</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer assembly services?</h3>
              <p className="text-gray-600">Yes, we offer professional assembly services for an additional fee. You can select this option during checkout or contact our customer service team for more information.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="bg-primary text-secondary py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-secondary/80 mb-6 max-w-2xl mx-auto">Stay updated with our latest products, exclusive offers, and interior design tips.</p>
          
          <form className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
            />
            <button type="submit" className="bg-secondary text-tertiary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
import React, { useEffect, useState } from 'react';

const ZohoCRMForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // 'success' or 'error'

  useEffect(() => {
    // Load jQuery if not already loaded
    if (!window.jQuery) {
      const script = document.createElement('script');
      script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const validateEmail = () => {
      const form = document.forms['WebToLeadsForm'];
      const emailFld = form.querySelectorAll('[ftype=email]');
      for (let i = 0; i < emailFld.length; i++) {
        const emailVal = emailFld[i].value.trim();
        if (emailVal.length !== 0) {
          const atpos = emailVal.indexOf('@');
          const dotpos = emailVal.lastIndexOf('.');
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Please enter a valid email address.');
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    };

    const checkMandatory = () => {
      const mndFields = ['Company', 'Last Name'];
      const fldLangVal = ['Company', 'Last Name'];

      for (let i = 0; i < mndFields.length; i++) {
        const fieldObj = document.forms['WebToLeadsForm'][mndFields[i]];
        if (fieldObj) {
          if (fieldObj.value.trim().length === 0) {
            alert(fldLangVal[i] + ' cannot be empty.');
            fieldObj.focus();
            return false;
          }
        }
      }
      return validateEmail();
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!checkMandatory()) return;

      setSubmitting(true);
      setMessage('Submitting...');
      setStatus('info');

      const form = e.target;
      const formData = {
        'First_Name': form.querySelector('[name="First Name"]')?.value || '',
        'Last_Name': form.querySelector('[name="Last Name"]')?.value || '',
        'Email': form.querySelector('[name="Email"]')?.value || '',
        'Phone': form.querySelector('[name="Phone"]')?.value || '',
        'Company': form.querySelector('[name="Company"]')?.value || '',
        'Description': form.querySelector('[name="Description"]')?.value || ''
      };

      // Create AbortController for request timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      try {
        const response = await fetch('http://localhost:5000/api/submit-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        
        setStatus('success');
        setMessage(result.message || 'Thank you! Our team will contact you shortly');
        form.reset();
      } catch (error) {
        console.error('Form submit error:', error);
        setStatus('error');
        setMessage(error.name === 'AbortError' 
          ? 'Request timed out. Your form is being processed.' 
          : 'Thank you! Your form has been submitted. If needed, we\'ll be in touch.');
      } finally {
        setSubmitting(false);
        // Auto-hide message after 5 seconds
        setTimeout(() => {
          setMessage('');
          setStatus('');
        }, 5000);
      }
    };

    const form = document.getElementById('webform856288000000632014');
    if (form) form.addEventListener('submit', handleSubmit);

    return () => {
      if (form) form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <div>
      {/* Success/Error message */}
      {message && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 rounded-md px-4 py-3 flex items-center z-50 transition-all duration-500 ${
            status === 'success'
              ? 'bg-green-100 border border-green-400 text-green-800'
              : status === 'error'
              ? 'bg-red-100 border border-red-400 text-red-800'
              : 'bg-blue-100 border border-blue-400 text-blue-800'
          }`}
        >
          {status === 'success' && (
            <div className="w-5 h-5 rounded-full bg-green-500 mr-2 relative">
              <div className="absolute left-1 top-1 w-[3px] h-[8px] border-r-2 border-b-2 border-white rotate-45"></div>
            </div>
          )}
          {status === 'error' && (
            <div className="w-5 h-5 rounded-full bg-red-500 mr-2 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2"></div>
            </div>
          )}
          {status === 'info' && (
            <div className="w-5 h-5 rounded-full bg-blue-500 mr-2 flex items-center justify-center text-white text-xs font-bold">i</div>
          )}
          <span>{message}</span>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

      <form id="webform856288000000632014" name="WebToLeadsForm" method="POST" className="space-y-2">
        <input type="hidden" name="xnQsjsdp" value="" />
        <input type="hidden" name="xmIwtLD" value="" />
        <input type="hidden" name="actionType" value="" />
        <input type="hidden" name="returnURL" value="" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="First_Name" className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              id="First_Name"
              name="First Name"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="Last_Name" className="block text-sm font-medium mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Last_Name"
              name="Last Name"
              placeholder="Enter your last name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="Email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            ftype="email"
            id="Email"
            name="Email"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="Company" className="block text-sm font-medium mb-1">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="Company"
              name="Company"
              placeholder="Enter your company name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="Phone"
              name="Phone"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="Description" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="Description"
            name="Description"
            placeholder="Type your message here..."
            className="w-full border border-gray-300 rounded px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition ${
            submitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ZohoCRMForm;

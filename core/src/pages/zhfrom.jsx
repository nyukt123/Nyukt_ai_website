import React, { useEffect } from 'react';

const ZohoCRMForm = () => {
    useEffect(() => {
        // Load jQuery if not already loaded
        if (!window.jQuery) {
            const script = document.createElement('script');
            script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
            script.async = true;
            document.body.appendChild(script);
        }

        // Form validation and submission logic
        const validateEmail = () => {
            const form = document.forms['WebToLeads856288000000632014'];
            const emailFld = form.querySelectorAll('[ftype=email]');
            for (let i = 0; i < emailFld.length; i++) {
                const emailVal = emailFld[i].value;
                if ((emailVal.replace(/^\s+|\s+$/g, '')).length !== 0) {
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
            const mndFileds = ['Company', 'Last Name'];
            const fldLangVal = ['Company', 'Last Name'];

            for (let i = 0; i < mndFileds.length; i++) {
                const fieldObj = document.forms['WebToLeads856288000000632014'][mndFileds[i]];
                if (fieldObj) {
                    if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length === 0) {
                        if (fieldObj.type === 'file') {
                            alert('Please select a file to upload.');
                            fieldObj.focus();
                            return false;
                        }
                        alert(fldLangVal[i] + ' cannot be empty.');
                        fieldObj.focus();
                        return false;
                    } else if (fieldObj.nodeName === 'SELECT') {
                        if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
                            alert(fldLangVal[i] + ' cannot be none.');
                            fieldObj.focus();
                            return false;
                        }
                    } else if (fieldObj.type === 'checkbox') {
                        if (fieldObj.checked === false) {
                            alert('Please accept ' + fldLangVal[i]);
                            fieldObj.focus();
                            return false;
                        }
                    }
                }
            }
            return validateEmail();
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const isMandatory = checkMandatory();

            if (isMandatory) {
                const form = e.target;
                const formData = new URLSearchParams();

                // Get all form data
                const formElements = form.elements;
                for (let i = 0; i < formElements.length; i++) {
                    const element = formElements[i];
                    if (element.name && element.type !== 'submit') {
                        formData.append(element.name, element.value);
                    }
                }

                // Add the required parameters
                formData.append('xnQsjsdp', '166fa02d5b7e11c1d9d7eba9637366edd1bb1834c93c860a301689d92266fe30');
                formData.append('xmIwtLD', '5b4a941c23642abf7e70c569a7ba60016d92085b5c0afef66e10495496835aee0cef8afdce0479ce5f2755e2c19f35c5');
                formData.append('actionType', 'TGVhZHM=');
                formData.append('returnURL', 'null');

                // Construct the URL with query parameters
                const url = `https://crm.zoho.in/crm/WebToLeadForm?${formData.toString()}`;

                // Use a hidden iframe to submit the form (avoids CORS)
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.name = 'zohoFormFrame';
                document.body.appendChild(iframe);

                // Create a form to submit
                const hiddenForm = document.createElement('form');
                hiddenForm.target = 'zohoFormFrame';
                hiddenForm.method = 'GET';
                hiddenForm.action = url;
                document.body.appendChild(hiddenForm);

                // Submit the form
                hiddenForm.submit();

                // Show success message
                const splashInfo = document.getElementById('wf_splash_info');
                const splash = document.getElementById('wf_splash');

                if (splashInfo) splashInfo.innerText = 'Thank you for your submission!';
                if (splash) {
                    splash.style.display = '';
                    setTimeout(() => {
                        splash.style.display = 'none';
                    }, 5000);
                }
                form.reset();

                // Clean up
                setTimeout(() => {
                    document.body.removeChild(iframe);
                    document.body.removeChild(hiddenForm);
                }, 5000);
            }
        };

        const form = document.getElementById('webform856288000000632014');
        if (form) {
            form.addEventListener('submit', handleSubmit);
        }

        return () => {
            if (form) {
                form.removeEventListener('submit', handleSubmit);
            }
        };
    }, []);

    return (
        <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm"
            style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px', padding: '25px', margin: '0 auto' }}>

            <style dangerouslySetInnerHTML={{
                __html: `
          .wf_customMessageBox {
            font-family: Arial, Helvetica, sans-serif;
            color: #132C14;
            background: #F5FAF5;
            box-shadow: 0 2px 6px 0 rgba(0,0,0,0.25);
            max-width: 90%;
            width: max-content;
            word-break: break-word;
            z-index: 11000;
            border-radius: 6px;
            border: 1px solid #A9D3AB;
            min-width: 100px;
            padding: 10px 15px;
            display: flex;
            align-items: center;
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
          }
          .wf_customCircle {
            position: relative;
            background-color: #12AA67;
            border-radius: 100%;
            width: 20px;
            height: 20px;
            flex: none;
            margin-right: 7px;
          }
          .wf_customCheckMark {
            box-sizing: unset !important;
            position: absolute;
            transform: rotate(45deg) translate(-50%, -50%);
            left: 6px;
            top: 9px;
            height: 8px;
            width: 3px;
            border-bottom: 2px solid #fff;
            border-right: 2px solid #fff;
          }
          .zcwf_lblLeft .formsubmit {
            background: linear-gradient(0deg, #7C3AED 0%, #6D28D9 100%) !important;
            color: white !important;
            border: none !important;
            padding: 10px 20px !important;
            border-radius: 4px !important;
            cursor: pointer !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            transition: all 0.3s ease !important;
          }
          .zcwf_lblLeft .formsubmit:hover {
            background: linear-gradient(0deg, #6D28D9 0%, #5B21B6 100%) !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
          }
          .zcwf_lblLeft .zcwf_col_fld input[type=text],
          .zcwf_lblLeft .zcwf_col_fld textarea {
            width: 100% !important;
            padding: 10px !important;
            border: 1px solid #E5E7EB !important;
            border-radius: 4px !important;
            margin-bottom: 10px !important;
          }
          .zcwf_lblLeft .zcwf_col_fld textarea {
            min-height: 100px !important;
          }
          .zcwf_lblLeft .zcwf_col_lab {
            font-weight: 500 !important;
            margin-bottom: 5px !important;
            color: #4B5563 !important;
          }
          .zcwf_lblLeft .zcwf_title {
            font-size: 1.5rem !important;
            font-weight: 600 !important;
            margin-bottom: 1.5rem !important;
            color: #1F2937 !important;
          }
        `
            }} />

            <div className="wf_customMessageBox" id="wf_splash" style={{ display: 'none' }}>
                <div className="wf_customCircle">
                    <div className="wf_customCheckMark"></div>
                </div>
                <span id="wf_splash_info"></span>
            </div>

            <form
              id="webform856288000000632014" 
              name="WebToLeads856288000000632014"
              method="GET"
              action="https://crm.zoho.in/crm/WebToLeadForm"
              target="hiddenIframe"
              acceptCharset="UTF-8"
            >
                <input type="hidden" name="xnQsjsdp" value="166fa02d5b7e11c1d9d7eba9637366edd1bb1834c93c860a301689d92266fe30" />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                <input type="hidden" name="xmIwtLD" value="5b4a941c23642abf7e70c569a7ba60016d92085b5c0afef66e10495496835aee0cef8afdce0479ce5f2755e2c19f35c5" />
                <input type="hidden" name="actionType" value="TGVhZHM=" />
                <input type="hidden" name="returnURL" value="null" />

                <div className="zcwf_title" style={{ maxWidth: '600px', color: 'black', fontFamily: 'Arial' }}>
                    Contact Us
                </div>

                <div className="zcwf_row">
                    <div className="zcwf_col_lab" style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                        <label htmlFor="First_Name">First Name</label>
                    </div>
                    <div className="zcwf_col_fld">
                        <input
                            type="text"
                            id="First_Name"
                            aria-required="false"
                            aria-label="First Name"
                            name="First Name"
                            maxLength="40"
                            style={{ width: '100%', padding: '10px' }}
                        />
                    </div>
                </div>

                <div className="zcwf_row">
                    <div className="zcwf_col_lab" style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                        <label htmlFor="Last_Name">Last Name <span style={{ color: 'red' }}>*</span></label>
                    </div>
                    <div className="zcwf_col_fld">
                        <input
                            type="text"
                            id="Last_Name"
                            aria-required="true"
                            aria-label="Last Name"
                            name="Last Name"
                            maxLength="80"
                            style={{ width: '100%', padding: '10px' }}
                            required
                        />
                    </div>
                </div>

                <div className="zcwf_row">
                    <div className="zcwf_col_lab" style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                        <label htmlFor="Email">Email</label>
                    </div>
                    <div className="zcwf_col_fld">
                        <input
                            type="email"
                            id="Email"
                            ftype="email"
                            autoComplete="false"
                            aria-required="false"
                            aria-label="Email"
                            name="Email"
                            maxLength="100"
                            style={{ width: '100%', padding: '10px' }}
                        />
                    </div>
                </div>

                <div className="zcwf_row">
                    <div className="zcwf_col_lab" style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                        <label htmlFor="Company">Company <span style={{ color: 'red' }}>*</span></label>
                    </div>
                    <div className="zcwf_col_fld">
                        <input
                            type="text"
                            id="Company"
                            aria-required="true"
                            aria-label="Company"
                            name="Company"
                            maxLength="200"
                            style={{ width: '100%', padding: '10px' }}
                            required
                        />
                    </div>
                </div>

                <div className="zcwf_row">
                    <div className="zcwf_col_lab" style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                        <label htmlFor="Description">Message</label>
                    </div>
                    <div className="zcwf_col_fld">
                        <textarea
                            id="Description"
                            aria-required="false"
                            aria-label="Description"
                            name="Description"
                            style={{
                                width: '100%',
                                padding: '10px',
                                minHeight: '100px',
                                fontFamily: 'Arial, sans-serif',
                                border: '1px solid #E5E7EB',
                                borderRadius: '4px'
                            }}
                        ></textarea>
                    </div>
                </div>

                <input type="hidden" name="aG9uZXlwb3Q" value="" />

                <div className="zcwf_row">
                    <div className="zcwf_col_lab"></div>
                    <div className="zcwf_col_fld">
                        <input
                            type="submit"
                            id="formsubmit"
                            role="button"
                            className="formsubmit zcwf_button"
                            value="Submit"
                            aria-label="Submit"
                            title="Submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ZohoCRMForm;
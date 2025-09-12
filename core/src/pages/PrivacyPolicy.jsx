import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 15, pb: 10, lineHeight: 1.6 }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Privacy Policy - <span style={{fontWeight:"700"}}>Nyukt.AI</span>
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography paragraph>
            At Nyukt.AI ("we", "our", "us"), your privacy is a priority. We are committed to protecting personal data in line with the Dubai International Financial Centre (DIFC) Data Protection Law, DIFC Law No. 5 of 2020, the EU General Data Protection Regulation (GDPR), and other global standards.
          </Typography>
          <Typography paragraph>
            This Privacy Policy explains what data we collect, how we use it, where it is stored, and the rights you have.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 4, fontStyle: 'italic' }}>
            Last updated: August 2025
          </Typography>

          <Typography variant="h5" gutterBottom>1. Who We Are</Typography>
          <Typography paragraph>
            Nyukt.AI is a technology company headquartered in the Dubai International Financial Centre (DIFC), UAE. We design and provide AI-driven products and services. For privacy-related inquiries, please contact: <Link href="mailto:privacy@nyukt.ai">privacy@nyukt.ai</Link>
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>2. What Information We Collect</Typography>
          <Typography paragraph>
            We only collect personal data that you choose to provide or that is necessary for site functionality:
          </Typography>
          
          <Typography variant="h6" gutterBottom>2.1. Website Cookies & Analytics</Typography>
          <Typography paragraph>
            We use Google Tag Manager and Google Analytics (GA4) to understand website traffic and improve user experience. These cookies do not directly identify you; they collect anonymous usage data (e.g., page views, browser type, approximate region). We do not serve targeted ads or use third-party marketing cookies.
          </Typography>

          <Typography variant="h6" gutterBottom>2.2. Forms Submitted by You</Typography>
          <Typography paragraph>
            <strong>Contact Form:</strong> Name, email (mandatory), business name & query (optional).<br />
            <strong>Access Registration (Product Sign-Up):</strong> Name, email (mandatory), phone, company, job title (optional); product selection & number of users (mandatory in step 2).<br />
            <strong>Demo Request Form:</strong> Name, email, company, city/country of residence (mandatory); demo purpose and AI knowledge level (mandatory, but no sensitive personal data).
          </Typography>
          <Typography paragraph sx={{ fontStyle: 'italic' }}>
            As of now, forms are disabled on this site. No new personal data is being collected until migration to our integrated privacy center.
          </Typography>

          <Typography variant="h6" gutterBottom>2.3. Technical Data</Typography>
          <Typography paragraph>
            Device type, IP address (anonymized in GA4), and browser type.
            We do not collect sensitive categories of data (e.g., health, biometrics, political opinions) through our website.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>3. How We Use Your Information</Typography>
          <Typography paragraph>We use your data only for the following purposes:</Typography>
          <ul>
            <li>To respond to your inquiries and provide requested information.</li>
            <li>To create and manage product login accounts.</li>
            <li>To validate demo requests and comply with region-specific regulations.</li>
            <li>To analyze site usage and improve website performance.</li>
            <li>To send service-related communications (if you consent to marketing communications, you can opt-out at any time).</li>
          </ul>
          <Typography paragraph>We do not sell, rent, or trade your personal data.</Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>4. Lawful Basis for Processing</Typography>
          <Typography paragraph>We process personal data under the following lawful bases:</Typography>
          <ul>
            <li><strong>Consent:</strong> For cookies, demo requests, and form submissions.</li>
            <li><strong>Contract:</strong> To create and provide product accounts.</li>
            <li><strong>Legitimate Interests:</strong> To respond to inquiries and monitor site performance.</li>
            <li><strong>Legal Obligations:</strong> Where retention is required by applicable law.</li>
          </ul>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>5. Data Sharing & Transfers</Typography>
          <ul>
          <Typography paragraph>
          <li>Your data may be shared with trusted service providers who support our systems such as Google, AWS, Cloudflare, Mixo etc.</li>
            
          </Typography>
          <Typography paragraph>
          <li>Data may be transferred outside DIFC/UAE. Where this occurs, we apply appropriate safeguards in line with DIFC Data Protection Law Articles 26–27 (e.g., Standard Contractual Clauses) and GDPR international transfer rules or similar regulations applicable for such transfers.</li>
          </Typography>
        
          <Typography paragraph><li>We do not share your personal data with third parties for marketing purposes.</li></Typography>
          </ul>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>6. Data Retention</Typography>
          <Typography paragraph>We retain personal data only for as long as necessary:</Typography>
          <ul>
            <li>Queries (Contact form): up to 12 months.</li>
            <li>Demo requests & registrations: while the business relationship is active + up to 2 years.</li>
            <li>Analytics data: retained per Google Analytics settings (currently 14 months).</li>
            <li> Where legally required, data may be kept longer.</li>
            <li>After expiry, data is securely deleted or anonymized.</li>
            <li>Where data is stored temporarily by our website host (Mixo), we export and delete submissions regularly to minimize storage duration.</li>
          </ul>
        

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>7. Your Rights</Typography>
          <Typography paragraph>
            You have the following rights under DIFC Law, GDPR, and global data protection laws:
          </Typography>
          <ul>
            <li>Access your personal data.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion ("right to be forgotten").</li>
            <li>Object to or restrict processing.</li>
            <li>Withdraw consent at any time (e.g., unsubscribe from communications).</li>
            <li>Data portability (where technically feasible).</li>
          </ul>
          <Typography paragraph>
            To exercise your rights, contact us at <Link href="mailto:privacy@nyukt.ai">privacy@nyukt.ai</Link>.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>8. Cookies and Tracking</Typography>
          <ul>
            <li>Strictly necessary cookies:Required for site functionality.</li>
            <li>Analytics cookies: Used for understanding site usage (optional).</li>
            <li> Users may accept optional cookies through the consent banner.</li>
            <li> You may also adjust cookie settings in your browser.</li>
            <li>  You may change or withdraw your cookie preferences at any time. If you previously accepted analytics cookies and wish to opt-out, please clear cookies from your browser or contact us at <Link href="mailto:privacy@nyukt.ai">privacy@nyukt.ai</Link>.</li>
          </ul>
         
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>9. Data Security</Typography>
          <Typography paragraph>We implement appropriate technical and organizational measures to protect your data, including but not limited to:</Typography>
          <ul>
            <li>Encrypted connections (HTTPS).</li>
            <li>Secure hosting with access controls.</li>
            <li>Regular monitoring and limited data access.</li>
          </ul>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>10. Children's Privacy</Typography>
          <Typography paragraph>Our services are intended for business users and not directed at children under 16.</Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>11. Changes to This Policy</Typography>
          <Typography paragraph>
            We may update this Privacy Policy from time to time to reflect changes in technology, regulation, or our practices. Updates will be posted here with a new "Last Updated" date.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>12. Contact Us</Typography>
          <Typography paragraph>
            If you have any questions, concerns, or requests about this Privacy Policy, please contact:
          </Typography>
          <Typography paragraph>
            📧 <Link href="mailto:privacy@nyukt.ai">privacy@nyukt.ai</Link><br />
            📍Unit 147, Innovation Hub Gate Avenue - South Zone DIFC.
          </Typography>
        </Box>
      </Container>
      <ScrollToTopButton />
    </Box>
  );
};

export default PrivacyPolicy;

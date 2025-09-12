import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";

const TermsAndConditions = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ py: 8, minHeight: '80vh', marginTop: '60px' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Terms & Conditions
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          Last Updated: September 12, 2025
        </Typography>

        <Typography paragraph>
          These Terms and Conditions (“Terms”) govern your access to and use of the AI platform and
          related products and services provided by <strong>nyukt.ai</strong> (“nyukt.ai,” “we,” “us,” or “our”).
          By accessing or using our platform and services, you agree to be legally bound by these Terms.
          If you do not agree, please do not use our services.
        </Typography>

        {/* Section 1 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>1. Definitions</Typography>
        <Typography paragraph>• <strong>Platform:</strong> The software, tools, algorithms, AI models, and any related updates, enhancements, or modifications provided by nyukt.ai.</Typography>
        <Typography paragraph>• <strong>User:</strong> Any individual or entity accessing or using the platform.</Typography>
        <Typography paragraph>• <strong>Content:</strong> Any data, information, text, images, or materials uploaded, submitted, or created using the platform.</Typography>
        <Typography paragraph>• <strong>Subscription:</strong> The package or service tier selected by the user.</Typography>

        {/* Section 2 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>2. Eligibility and Account Registration</Typography>
        <Typography paragraph>• Users must be at least 18 years old or the age of majority in their jurisdiction.</Typography>
        <Typography paragraph>• To use nyukt.ai, you must create an account with accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</Typography>
        <Typography paragraph>• Providing false information or impersonating others is prohibited.</Typography>

        {/* Section 3 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>3. Payment and Billing</Typography>
        <Typography paragraph>• <strong>Pricing:</strong> All fees, prices, and charges for subscriptions, usage, or credits are clearly stated during the ordering process.</Typography>
        <Typography paragraph>• <strong>Payment Methods:</strong> Accepted payment methods include credit card, debit card, and/or third-party payment services (e.g., PayPal), as specified at checkout.</Typography>
        <Typography paragraph>• <strong>Billing Cycle:</strong> Subscriptions are billed on a recurring (monthly or annual) cycle, as specified at sign-up. Subscriptions automatically renew at the end of each billing cycle unless cancelled before the renewal date.</Typography>
        <Typography paragraph>• <strong>Refund Policy:</strong> Refunds are subject to our refund guidelines, which are available at checkout or on request. Generally, prepaid credits or services are non-refundable except as required by law.</Typography>
        <Typography paragraph>• <strong>Actions and Credits:</strong> Usage-based pricing may apply for certain advanced services, and pre-paid credits (“AI Credits”) may be offered for third-party model usage. Credits expire upon subscription cancellation, termination, or account deletion.</Typography>

        {/* Section 4 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>4. User Conduct and Prohibited Activities</Typography>
        <Typography paragraph>The platform must only be used for lawful purposes and in compliance with these Terms and all applicable laws.</Typography>
        <Typography paragraph>Users may not:</Typography>
        <Typography paragraph>• Use the platform to engage in illegal, fraudulent, or misleading activities.</Typography>
        <Typography paragraph>• Infringe upon the intellectual property rights or other rights of others.</Typography>
        <Typography paragraph>• Upload, submit, or share content that is discriminatory, harassing, hateful, or otherwise objectionable.</Typography>
        <Typography paragraph>• Share malware, spam, or malicious code.</Typography>
        <Typography paragraph>• Attempt to gain unauthorized access to any part of the platform or its related systems.</Typography>
        <Typography paragraph>• Circumvent the platform’s technical or security controls.</Typography>

        {/* Section 5 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>5. Intellectual Property</Typography>
        <Typography paragraph>• All platform software, models, and documentation are the property of nyukt.ai or its licensors. Users are granted a limited, non-exclusive, non-transferable license to use the platform as permitted under these Terms.</Typography>
        <Typography paragraph>• Users retain any rights in the original content uploaded to the platform but grant nyukt.ai a license to use, process, store, and display such content to provide the services.</Typography>
        <Typography paragraph>• Except as expressly permitted, users may not reproduce, distribute, or create derivative works from any part of the platform without prior written consent.</Typography>

        {/* Section 6 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>6. Termination and Suspension</Typography>
        <Typography paragraph>• <strong>User Termination:</strong> Users may terminate their account at any time through the account settings. Termination takes effect at the end of the current billing period unless stated otherwise.</Typography>
        <Typography paragraph>• <strong>Platform Termination or Suspension:</strong> nyukt.ai reserves the right to suspend or terminate user accounts for violations of these Terms, illegal conduct, or other just cause. We may delete user data associated with terminated accounts.</Typography>
        <Typography paragraph>• After termination, users must cease using the platform, and any remaining credits or access may be immediately revoked without refund.</Typography>

        {/* Section 7 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>7. Disclaimer of Warranties</Typography>
        <Typography paragraph>The platform and services are provided on an “as is” and “as available” basis. nyukt.ai expressly disclaims all warranties, whether express or implied, including warranties of merchantability, non-infringement, fitness for a particular purpose, and uninterrupted or error-free operation.</Typography>

        {/* Section 8 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>8. Limitation of Liability</Typography>
        <Typography paragraph>To the fullest extent permitted by applicable law, nyukt.ai shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or relating to the use, or inability to use, the platform. Our liability for direct damages is limited to the amount paid by the user for the 12 months preceding the claim.</Typography>
        <Typography paragraph>Certain damages caused by nyukt.ai’s gross negligence or willful misconduct may not be limited.</Typography>

        {/* Section 9 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>9. Indemnity</Typography>
        <Typography paragraph>Users agree to indemnify and hold harmless nyukt.ai from any claims, damages, or expenses (including reasonable attorney’s fees) arising from their use of the platform, violation of these Terms, or infringement of any third-party rights.</Typography>

        {/* Section 10 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>10. Governing Law and Dispute Resolution</Typography>
        <Typography paragraph>These Terms shall be governed under the laws of the jurisdiction where nyukt.ai is incorporated or operates.</Typography>
        <Typography paragraph>Any disputes will be resolved through binding arbitration or in the courts of the said jurisdiction, unless otherwise required by law.</Typography>

        {/* Section 11 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>11. Changes to Terms</Typography>
        <Typography paragraph>nyukt.ai reserves the right to update these Terms at any time. Updated Terms will be posted on our website, and your continued use of the platform constitutes acceptance of the revised Terms.</Typography>

        {/* Section 12 */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>12. Contact</Typography>
        <Typography paragraph>
          For questions, concerns, or to request account termination, contact us at <strong>info@nyukt.ai</strong>.
        </Typography>

        <Typography paragraph sx={{ mt: 4 }}>
          By accessing, registering for, or using nyukt.ai, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions.
        </Typography>
      </Container>

      {/* scroll-to-page btn */}
      <section>
        <ScrollToTopButton />
      </section>
    </>
  );
};

export default TermsAndConditions;

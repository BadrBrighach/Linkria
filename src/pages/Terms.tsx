import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const Terms = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      
      {/* Main content area */}
      <div className="flex-1 bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Top left Linky text */}
            <div className="mb-8">
            <p className="text-sm text-gray-600">Linkria / Link in Bio</p>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Terms of Service
            </h1>
            
            {/* Last updated */}
            <p className="text-sm text-gray-500 mb-12">
              Last updated: March 3rd 2025
            </p>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">Welcome to Linkria ("Company", "we", "our")!</p>
                <p className="mb-4">These Terms of Service ("Terms", "Terms of Service") govern your use of our web application located at linkria (together or individually "Service") operated by Linkria.</p>
                <p className="mb-4">Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.</p>
                <p className="mb-4">Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.</p>
                <p className="mb-4">If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at support@linkria so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">2. Communications</h2>
                <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at support@linkria.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">3. Purchases</h2>
                <p>If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">4. Contests, Sweepstakes and Promotions</h2>
                <p>Any contests, sweepstakes or other promotions (collectively, "Promotions") made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">5. Content</h2>
                <p>Content found on or through this Service are the property of Linkria or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">6. Prohibited Uses</h2>
                <p className="mb-4">You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>In any way that violates any applicable national or international law or regulation.</li>
                  <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                  <li>To transmit, or procure the sending of any advertising or promotional material, including any "junk mail", "chain letter", "spam," or any other similar solicitation.</li>
                  <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">7. Analytics</h2>
                <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">8. No Use By Minors</h2>
                <p>Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">9. Accounts</h2>
                <p>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">10. Intellectual Property</h2>
                <p>Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Linkria and its licensors.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">11. Error Reporting and Feedback</h2>
                <p>You may provide us directly at support@linkria with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">12. Termination</h2>
                <p>We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">13. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">14. Changes To Service</h2>
                <p>We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">15. Amendments to Terms</h2>
                <p>We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">16. Waiver and Severability</h2>
                <p>No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">17. Acknowledgement</h2>
                <p className="uppercase font-semibold">BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">18. Contact Us</h2>
                <p className="mb-4">Please send your feedback, comments, requests for technical support by email: support@linkria</p>
                <p className="text-sm text-gray-600">Linkria - linkria</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default Terms; 
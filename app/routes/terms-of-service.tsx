import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import type { Route } from "./+types/home";

const SITE_URL = "https://enhancresume.com";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms of Service | EnhancResume – AI ATS Resume Checker" },
    {
      name: "description",
      content:
        "Review EnhancResume's Terms of Service to understand the rules and conditions for using our AI-powered ATS resume checker, resume analyzer, and resume optimization tools.",
    },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/terms-of-service` },
    { property: "og:title", content: "Terms of Service | EnhancResume" },
    { property: "og:description", content: "Terms and conditions for using EnhancResume's AI resume checker and ATS optimization platform." },
    { property: "og:url", content: `${SITE_URL}/terms-of-service` },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: "Terms of Service | EnhancResume" },
    { name: "twitter:description", content: "Terms and conditions for using EnhancResume's AI resume checker and ATS optimization platform." },
  ];
}

export default function TermsOfService() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />

      <section className="policy-page" aria-label="Terms of Service">
        <div className="policy-header">
          <div className="policy-badge">Legal</div>
          <h1 className="policy-title">Terms of Service</h1>
          <p className="policy-subtitle">
            Last updated: <strong>June 1, 2025</strong>
          </p>
          <p className="policy-intro">
            Please read these Terms of Service carefully before using{" "}
            <strong>EnhancResume</strong>. By accessing or using our AI resume
            checker and ATS analysis service, you agree to be bound by these
            terms. If you disagree with any part, please do not use our service.
          </p>
        </div>

        <div className="policy-body">
          <PolicySection
            number="1"
            title="Acceptance of Terms"
            content={
              <p>
                By creating an account or using EnhancResume in any way, you
                confirm that you are at least 13 years of age and agree to be
                legally bound by these Terms of Service and our Privacy Policy.
                If you are using the service on behalf of an organization, you
                represent that you have the authority to bind that organization
                to these terms.
              </p>
            }
          />

          <PolicySection
            number="2"
            title="Description of Service"
            content={
              <>
                <p>
                  EnhancResume is an AI-powered ATS resume checker and resume
                  analysis platform that allows users to:
                </p>
                <ul>
                  <li>Upload resumes in PDF or document format for ATS scanning.</li>
                  <li>
                    Input job descriptions to compare against their resume for
                    ATS compatibility checking.
                  </li>
                  <li>
                    Receive an ATS (Applicant Tracking System) compatibility
                    score and resume score analysis.
                  </li>
                  <li>
                    Receive AI-generated feedback, resume keyword analysis, and
                    improvement suggestions.
                  </li>
                  <li>Track and review past resume analyses and ATS scores.</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue the
                  service at any time with or without notice.
                </p>
              </>
            }
          />

          <PolicySection
            number="3"
            title="User Accounts"
            content={
              <>
                <p>
                  Authentication is provided through Puter.com. You are
                  responsible for:
                </p>
                <ul>
                  <li>
                    Maintaining the confidentiality of your account credentials.
                  </li>
                  <li>
                    All activities that occur under your account, whether or not
                    authorized by you.
                  </li>
                  <li>
                    Notifying us immediately of any unauthorized use of your
                    account.
                  </li>
                </ul>
                <p>
                  We are not liable for any loss or damage arising from your
                  failure to maintain account security.
                </p>
              </>
            }
          />

          <PolicySection
            number="4"
            title="Acceptable Use"
            content={
              <>
                <p>You agree not to use EnhancResume to:</p>
                <ul>
                  <li>
                    Upload content that is illegal, harmful, fraudulent,
                    defamatory, or violates any third-party rights.
                  </li>
                  <li>
                    Impersonate another person or misrepresent your affiliation
                    with any entity.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to our systems, servers,
                    or databases.
                  </li>
                  <li>
                    Reverse-engineer, scrape, or systematically extract data
                    from our platform.
                  </li>
                  <li>
                    Use the service for any commercial purpose without our
                    express written consent.
                  </li>
                  <li>
                    Upload resumes containing malicious code, viruses, or
                    harmful content.
                  </li>
                </ul>
                <p>
                  Violation of these rules may result in immediate termination
                  of your account.
                </p>
              </>
            }
          />

          <PolicySection
            number="5"
            title="Intellectual Property"
            content={
              <>
                <p>
                  <strong>Your Content:</strong> You retain full ownership of
                  the resumes and job descriptions you upload. By using the
                  service, you grant us a limited, non-exclusive, royalty-free
                  license to process your content solely for the purpose of
                  providing the ATS resume analysis service to you.
                </p>
                <p>
                  <strong>Our Content:</strong> All software, design, branding,
                  trademarks, and content on the EnhancResume platform are the
                  exclusive property of EnhancResume and are protected by
                  applicable intellectual property laws. You may not copy,
                  modify, distribute, or create derivative works without our
                  express written permission.
                </p>
              </>
            }
          />

          <PolicySection
            number="6"
            title="AI-Generated Content Disclaimer"
            content={
              <>
                <p>
                  EnhancResume uses artificial intelligence to generate ATS
                  scores, resume analysis, and resume feedback. Please note:
                </p>
                <ul>
                  <li>
                    AI-generated analysis is for informational purposes only and
                    does not constitute professional career or HR advice.
                  </li>
                  <li>
                    ATS scores are estimates and may not perfectly predict
                    outcomes with specific employer systems.
                  </li>
                  <li>
                    We do not guarantee that following our suggestions will
                    result in job interviews or employment.
                  </li>
                  <li>
                    AI resume analysis accuracy may vary depending on resume format,
                    language, and job description complexity.
                  </li>
                </ul>
                <p>
                  Always use your own judgment and consider consulting a
                  professional career advisor for important decisions.
                </p>
              </>
            }
          />

          <PolicySection
            number="7"
            title="Limitation of Liability"
            content={
              <>
                <p>
                  To the fullest extent permitted by law, EnhancResume and its
                  creators shall not be liable for any:
                </p>
                <ul>
                  <li>
                    Indirect, incidental, special, or consequential damages.
                  </li>
                  <li>Loss of profits, data, or business opportunities.</li>
                  <li>
                    Damages resulting from use or inability to use the service.
                  </li>
                  <li>
                    Actions taken based on AI-generated resume feedback.
                  </li>
                </ul>
                <p>
                  Our total liability for any claims arising from use of the
                  service shall not exceed the amount you paid us in the past
                  twelve (12) months, or $10 USD if no payment was made.
                </p>
              </>
            }
          />

          <PolicySection
            number="8"
            title="Disclaimer of Warranties"
            content={
              <p>
                EnhancResume is provided on an <strong>"as is"</strong> and{" "}
                <strong>"as available"</strong> basis without warranties of any
                kind, either express or implied, including but not limited to
                implied warranties of merchantability, fitness for a particular
                purpose, or non-infringement. We do not warrant that the service
                will be uninterrupted, error-free, or free of viruses or other
                harmful components.
              </p>
            }
          />

          <PolicySection
            number="9"
            title="Termination"
            content={
              <p>
                We reserve the right to suspend or terminate your access to
                EnhancResume at our sole discretion, without notice, for conduct
                that we believe violates these Terms of Service or is harmful to
                other users, us, or third parties, or for any other reason. You
                may delete your account and data at any time using the built-in
                data wipe feature.
              </p>
            }
          />

          <PolicySection
            number="10"
            title="Governing Law"
            content={
              <p>
                These Terms of Service are governed by and construed in
                accordance with applicable laws, without regard to conflict of
                law principles. Any disputes arising under these terms shall be
                resolved through binding arbitration or in courts of competent
                jurisdiction.
              </p>
            }
          />

          <PolicySection
            number="11"
            title="Changes to Terms"
            content={
              <p>
                We reserve the right to modify these Terms at any time. Changes
                will be indicated by updating the "Last updated" date. Your
                continued use of EnhancResume after changes are posted
                constitutes your acceptance of the modified terms. We recommend
                reviewing this page periodically to stay informed.
              </p>
            }
          />

          <PolicySection
            number="12"
            title="Contact Us"
            content={
              <>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="policy-contact-card">
                  <p>
                    <strong>EnhancResume</strong>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:legal@enhancresume.com"
                      className="policy-link"
                    >
                      legal@enhancresume.com
                    </a>
                  </p>
                  <p>Website: enhancresume.com</p>
                </div>
              </>
            }
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PolicySection({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="policy-section">
      <div className="policy-section-header">
        <span className="policy-section-number">{number}</span>
        <h2 className="policy-section-title">{title}</h2>
      </div>
      <div className="policy-section-content">{content}</div>
    </div>
  );
}

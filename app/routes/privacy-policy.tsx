import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import type { Route } from "./+types/home";

const SITE_URL = "https://enhancresume.com";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | EnhancResume – AI ATS Resume Checker" },
    {
      name: "description",
      content:
        "Read EnhancResume's Privacy Policy to understand how we collect, use, and protect your personal data when you use our AI-powered ATS resume checker and analysis tools.",
    },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/privacy-policy` },
    { property: "og:title", content: "Privacy Policy | EnhancResume" },
    { property: "og:description", content: "How EnhancResume handles and protects your personal data and resume information." },
    { property: "og:url", content: `${SITE_URL}/privacy-policy` },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: "Privacy Policy | EnhancResume" },
    { name: "twitter:description", content: "How EnhancResume handles and protects your personal data and resume information." },
  ];
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />

      <section className="policy-page" aria-label="Privacy Policy">
        <div className="policy-header">
          <div className="policy-badge">Legal</div>
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-subtitle">
            Last updated: <strong>June 1, 2025</strong>
          </p>
          <p className="policy-intro">
            At <strong>EnhancResume</strong>, we take your privacy seriously.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our AI-powered ATS resume
            checker and resume analysis service.
          </p>
        </div>

        <div className="policy-body">
          <PolicySection
            number="1"
            title="Information We Collect"
            content={
              <>
                <p>We may collect the following types of information:</p>
                <ul>
                  <li>
                    <strong>Resume Data:</strong> The content of resumes you
                    upload, including personal details, work history, education,
                    and skills used for ATS resume analysis.
                  </li>
                  <li>
                    <strong>Job Descriptions:</strong> Text or files you provide
                    to compare against your resume for ATS compatibility checking.
                  </li>
                  <li>
                    <strong>Account Information:</strong> Authentication data
                    managed via Puter.com's secure identity platform. We do not
                    store raw passwords.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Anonymized analytics including
                    pages visited, features used, and session duration to help
                    us improve the service.
                  </li>
                  <li>
                    <strong>Device &amp; Browser Information:</strong> Browser type,
                    operating system, IP address, and referring URLs, collected
                    automatically via standard web logs.
                  </li>
                </ul>
              </>
            }
          />

          <PolicySection
            number="2"
            title="How We Use Your Information"
            content={
              <>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, operate, and improve our AI resume analyzer and ATS checker service.</li>
                  <li>
                    Generate AI-powered ATS scores and improvement suggestions
                    tailored to your resume and job description.
                  </li>
                  <li>
                    Store your resume history securely so you can access it
                    across sessions.
                  </li>
                  <li>
                    Respond to your inquiries and provide customer support.
                  </li>
                  <li>
                    Monitor usage patterns and diagnose technical problems.
                  </li>
                  <li>
                    Comply with legal obligations and enforce our Terms of
                    Service.
                  </li>
                </ul>
                <p>
                  We do <strong>not</strong> sell, rent, or trade your personal
                  information to third parties for their marketing purposes.
                </p>
              </>
            }
          />

          <PolicySection
            number="3"
            title="Data Storage & Security"
            content={
              <>
                <p>
                  Your resume data and ATS analysis results are stored using{" "}
                  <strong>Puter.com</strong>'s key-value storage, which is
                  sandboxed to your individual account. We implement
                  industry-standard security measures including:
                </p>
                <ul>
                  <li>HTTPS/TLS encryption for all data in transit.</li>
                  <li>
                    Secure, isolated per-user storage — no other user can access
                    your data.
                  </li>
                  <li>
                    Regular security reviews and vulnerability assessments.
                  </li>
                </ul>
                <p>
                  While we strive to protect your information, no method of
                  electronic transmission or storage is 100% secure. We
                  encourage you to use a strong password and keep your account
                  credentials confidential.
                </p>
              </>
            }
          />

          <PolicySection
            number="4"
            title="Third-Party Services"
            content={
              <>
                <p>
                  EnhancResume integrates with the following third-party
                  services:
                </p>
                <ul>
                  <li>
                    <strong>Puter.com</strong> — Cloud storage and
                    authentication. Subject to{" "}
                    <a
                      href="https://puter.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="policy-link"
                    >
                      Puter's Privacy Policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Google Fonts</strong> — Typography delivery via
                    Google's CDN. Google may collect anonymized usage data per
                    their privacy policy.
                  </li>
                  <li>
                    <strong>AI Model Provider</strong> — Resume text is sent to
                    an AI model to generate ATS analysis and resume feedback. This data is processed
                    transiently and is not used to train the model on your
                    personal information.
                  </li>
                </ul>
                <p>
                  We have no control over the content and practices of
                  third-party services and are not responsible for their privacy
                  policies.
                </p>
              </>
            }
          />

          <PolicySection
            number="5"
            title="Your Rights & Choices"
            content={
              <>
                <p>You have the right to:</p>
                <ul>
                  <li>
                    <strong>Access:</strong> Request a copy of the personal data
                    we hold about you.
                  </li>
                  <li>
                    <strong>Deletion:</strong> Delete your resume data at any
                    time via the "Wipe" feature in the application, or by
                    contacting us.
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate
                    personal data.
                  </li>
                  <li>
                    <strong>Portability:</strong> Request your data in a
                    machine-readable format.
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Opt out of non-essential analytics
                    by contacting us.
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@enhancresume.com"
                    className="policy-link"
                  >
                    privacy@enhancresume.com
                  </a>
                  .
                </p>
              </>
            }
          />

          <PolicySection
            number="6"
            title="Cookies & Tracking"
            content={
              <>
                <p>
                  We use minimal, essential cookies required for authentication
                  and session management. We do not use advertising or
                  cross-site tracking cookies.
                </p>
                <p>
                  You can configure your browser to refuse cookies, though this
                  may affect your ability to log in and use certain features.
                </p>
              </>
            }
          />

          <PolicySection
            number="7"
            title="Children's Privacy"
            content={
              <p>
                EnhancResume is not directed at children under the age of 13. We
                do not knowingly collect personal information from children. If
                you believe a child has provided us with personal data, please
                contact us immediately so we can take appropriate action.
              </p>
            }
          />

          <PolicySection
            number="8"
            title="Changes to This Policy"
            content={
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of significant changes by updating the "Last updated"
                date at the top of this page. Your continued use of EnhancResume
                after any changes constitutes your acceptance of the revised
                policy. We encourage you to review this page periodically.
              </p>
            }
          />

          <PolicySection
            number="9"
            title="Contact Us"
            content={
              <>
                <p>
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or our data practices, please contact us:
                </p>
                <div className="policy-contact-card">
                  <p>
                    <strong>EnhancResume</strong>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:privacy@enhancresume.com"
                      className="policy-link"
                    >
                      privacy@enhancresume.com
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

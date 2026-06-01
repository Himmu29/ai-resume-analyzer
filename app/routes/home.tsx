import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const SITE_URL = "https://enhancresume.com";

/* ─────────────────────────────────────────────
   SEO Meta Tags
───────────────────────────────────────────── */
export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "EnhancResume – Free ATS Resume Checker, AI Resume Analyzer & Score Checker",
    },
    {
      name: "description",
      content:
        "EnhancResume is a free AI-powered ATS resume checker and resume analyzer. Instantly scan your resume, get an ATS compatibility score, identify missing keywords, and receive expert AI feedback to improve your chances of landing interviews.",
    },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: SITE_URL },
    // Open Graph
    {
      property: "og:title",
      content:
        "EnhancResume – Free ATS Resume Checker & AI Resume Analyzer",
    },
    {
      property: "og:description",
      content:
        "Scan your resume for ATS compatibility in seconds. Get a resume score, keyword analysis, and AI-powered improvement tips — completely free.",
    },
    { property: "og:url", content: SITE_URL },
    { property: "og:type", content: "website" },
    // Twitter
    {
      name: "twitter:title",
      content: "EnhancResume – Free ATS Resume Checker & AI Resume Analyzer",
    },
    {
      name: "twitter:description",
      content:
        "Scan your resume for ATS compatibility in seconds. Get a resume score, keyword analysis, and AI-powered improvement tips — completely free.",
    },
  ];
}

/* ─────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────── */
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "EnhancResume – ATS Resume Checker",
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  description:
    "An AI-powered ATS Resume Checker and Resume Analyzer that helps job seekers improve their resumes, increase ATS compatibility, identify missing keywords, and get actionable AI-powered feedback.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "ATS Resume Scan",
    "AI Resume Analysis",
    "Resume Score Checker",
    "Keyword Gap Analysis",
    "Resume Improvement Suggestions",
    "ATS Compatibility Checker",
  ],
};

const faqItems = [
  {
    question: "How do I enhance my resume?",
    answer:
      "To enhance your resume, start by tailoring it to each job description using relevant keywords from the posting. Use clear, concise bullet points that quantify achievements (e.g., 'Increased sales by 30%'). Ensure your resume has a clean, ATS-friendly format — avoid tables, graphics, and unusual fonts. Include a strong professional summary, an up-to-date skills section, and relevant certifications. Tools like EnhancResume can instantly scan your resume and give you a personalized ATS score with specific recommendations for improvement.",
  },
  {
    question: "How do I use AI to enhance my resume?",
    answer:
      "AI resume tools like EnhancResume analyze your resume against a specific job description to identify keyword gaps, structural weaknesses, and formatting issues that might cause ATS systems to reject it. Upload your resume and paste the job description, and the AI resume analyzer will generate an ATS compatibility score alongside actionable, prioritized suggestions. AI can also help you reword bullet points to be more impactful, suggest skills to add, and identify sections that need strengthening.",
  },
  {
    question: "How can I use keywords to enhance my resume?",
    answer:
      "Keywords are the terms ATS systems use to filter resumes before a human ever sees them. To use keywords effectively: (1) Read the job description carefully and highlight repeated terms and required skills. (2) Mirror those exact keywords naturally in your work experience, skills, and summary sections. (3) Include both full terms and acronyms (e.g., 'Search Engine Optimization (SEO)'). (4) Avoid keyword stuffing — include keywords only where they genuinely apply to your experience. EnhancResume's AI resume keyword checker automatically identifies which keywords you're missing based on your target job description.",
  },
  {
    question: "How can online certificates enhance my resume?",
    answer:
      "Online certificates from platforms like Coursera, LinkedIn Learning, Google, AWS, and HubSpot can significantly boost your resume, especially when you're changing careers or entering a new field. They demonstrate initiative, current knowledge, and commitment to professional development. List certificates in a dedicated 'Certifications' section with the certificate name, issuing organization, and date. Prioritize certificates from recognized organizations that are directly relevant to the job you're applying for — these are the ones ATS systems are most likely to flag positively.",
  },
  {
    question: "What are the most common resume mistakes?",
    answer:
      "The most common resume mistakes include: (1) Using a non-ATS-friendly format with tables, columns, or graphics that confuse applicant tracking systems. (2) Including generic, vague descriptions like 'responsible for managing projects' instead of quantified achievements. (3) Failing to tailor the resume to each job — using the same generic resume for every application. (4) Spelling and grammar errors, which immediately signal a lack of attention to detail. (5) Missing important keywords that ATS scanners look for. (6) Incorrect contact information or an unprofessional email address. (7) Making the resume too long (more than 2 pages for most roles) or too short (missing relevant details). EnhancResume's ATS resume checker catches most of these automatically.",
  },
  {
    question: "How can I tailor my resume for a specific job?",
    answer:
      "To tailor your resume for a specific job: (1) Analyze the job description and identify the top 5–10 required skills and keywords. (2) Mirror those keywords naturally in your skills section, professional summary, and work experience bullet points. (3) Reorder your bullet points so the most relevant achievements appear first. (4) Customize your professional summary to speak directly to the role. (5) Remove or de-emphasize experience that is not relevant to this position. (6) Use EnhancResume's resume optimization tool — paste the job description and it will identify exactly which keywords are missing from your resume and what changes to make.",
  },
  {
    question: "What is an ATS score and why does it matter?",
    answer:
      "An ATS (Applicant Tracking System) score is a measure of how well your resume matches a specific job description as interpreted by automated software. Over 98% of Fortune 500 companies use ATS to filter applicants, meaning a low ATS score can cause your resume to be rejected before any human sees it. Factors that affect your ATS score include keyword match rate, resume formatting, section headers, file type, and overall structure. EnhancResume's ATS resume checker gives you a score out of 100 with specific tips to improve it.",
  },
  {
    question: "How accurate is EnhancResume's ATS checker?",
    answer:
      "EnhancResume uses advanced AI models trained on resume analysis to simulate how modern ATS systems evaluate resumes. It analyzes keyword density, formatting compatibility, section structure, tone, and skill alignment — providing one of the most comprehensive free ATS resume scans available. While no tool can perfectly replicate every employer's specific ATS configuration, EnhancResume's scores and recommendations closely reflect what modern applicant tracking systems look for, giving you a strong foundation for optimizing your resume.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/* ─────────────────────────────────────────────
   FAQ Accordion Component
───────────────────────────────────────────── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`faq-chevron ${open ? "faq-chevron--open" : ""}`}>
          ▾
        </span>
      </button>
      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Home Page
───────────────────────────────────────────── */
export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);
      const resumes = (await kv.list("resume:*", true)) as KVItem[];
      const parsedResumes = resumes?.map((resume) =>
        JSON.parse(resume.value) as Resume
      );
      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };
    loadResumes();
  }, []);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── Hero / Dashboard Section ── */}
      <section className="main-section" aria-label="Resume dashboard">
        <div className="page-heading py-16">
          <h1>Track Your Applications &amp; Resume ATS Scores</h1>
          {!loadingResumes && resumes.length === 0 ? (
            <h2>
              No resumes yet. Upload your first resume to get your free ATS
              compatibility score and AI-powered feedback.
            </h2>
          ) : (
            <h2>
              Review your resume submissions and check your AI-powered ATS
              analysis results
            </h2>
          )}
        </div>

        {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/resume-scan-2.gif"
              className="w-[200px]"
              alt="Loading your resume analyses"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        )}

        {!loadingResumes && resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}

        {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link to="/upload" className="primary-button w-fit text-xl font-semibold" id="hero-upload-cta">
              Check My ATS Resume Score — Free
            </Link>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════
          SEO CONTENT SECTION
      ══════════════════════════════════════════ */}
      <article className="seo-content-section" aria-label="About EnhancResume">

        {/* ── What is EnhancResume ── */}
        <section className="seo-section" id="what-is-enhancresume">
          <h2 className="seo-h2">What Is EnhancResume? The Smartest Free ATS Resume Checker Online</h2>
          <p className="seo-p">
            <strong>EnhancResume</strong> is a free, AI-powered{" "}
            <strong>ATS resume checker</strong> and{" "}
            <strong>resume analyzer</strong> designed to help job seekers at
            every level optimize their resumes for modern hiring systems. Whether
            you're a recent graduate entering the workforce for the first time or
            an experienced professional targeting a senior leadership role,
            EnhancResume gives you the data-driven insights you need to stand
            out.
          </p>
          <p className="seo-p">
            In today's competitive job market, over 98% of Fortune 500 companies
            use Applicant Tracking Systems (ATS) to automatically filter resumes
            before a human recruiter ever sees them. That means a resume with
            great experience but poor ATS optimization can be silently rejected
            at the very first step. EnhancResume's{" "}
            <strong>AI resume analysis tool</strong> levels the playing field —
            giving you instant, actionable feedback to make sure your resume gets
            noticed.
          </p>
          <div className="seo-cta-inline">
            <Link to="/upload" className="primary-button w-fit" id="content-cta-1">
              Run a Free ATS Resume Scan Now →
            </Link>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="seo-section seo-section--alt" id="how-it-works">
          <h2 className="seo-h2">How Our ATS Resume Checker Works in 3 Simple Steps</h2>
          <p className="seo-p">
            Our <strong>resume scanner</strong> uses advanced AI to simulate how
            real ATS software evaluates your resume against a job description.
            The process is fast, private, and completely free:
          </p>
          <div className="seo-steps">
            <div className="seo-step">
              <div className="seo-step-number">1</div>
              <div className="seo-step-content">
                <h3 className="seo-h3">Upload Your Resume</h3>
                <p>
                  Upload your resume in PDF format. Our system securely processes
                  your document — your data is never shared or sold.
                </p>
              </div>
            </div>
            <div className="seo-step">
              <div className="seo-step-number">2</div>
              <div className="seo-step-content">
                <h3 className="seo-h3">Paste the Job Description</h3>
                <p>
                  Add the company name, job title, and the full job description
                  for the role you're targeting. The more detail you provide, the
                  more accurate your <strong>ATS compatibility score</strong>{" "}
                  will be.
                </p>
              </div>
            </div>
            <div className="seo-step">
              <div className="seo-step-number">3</div>
              <div className="seo-step-content">
                <h3 className="seo-h3">Get Your AI-Powered ATS Score &amp; Feedback</h3>
                <p>
                  Within seconds, receive a detailed{" "}
                  <strong>resume score</strong> out of 100, a full keyword gap
                  analysis, and personalized improvement suggestions organized by
                  category — tone &amp; style, content, structure, and skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why ATS Matters ── */}
        <section className="seo-section" id="why-ats-matters">
          <h2 className="seo-h2">Why ATS Optimization Is Non-Negotiable in 2025</h2>
          <p className="seo-p">
            The modern job application process is a numbers game. Large
            employers receive hundreds — sometimes thousands — of applications
            for a single position. ATS software like Workday, Taleo, Greenhouse,
            and Lever automatically parse and rank resumes before any human
            reviews them. Resumes that don't meet the ATS threshold are discarded
            automatically, regardless of how qualified the candidate is.
          </p>
          <p className="seo-p">
            Research shows that up to <strong>75% of resumes are rejected by ATS</strong> before
            reaching a recruiter. Common reasons include missing job-specific
            keywords, incompatible formatting (tables, text boxes, images), and
            non-standard section headings. An{" "}
            <strong>ATS-friendly resume</strong> isn't just helpful — it's the
            minimum requirement for getting your application seen.
          </p>
          <p className="seo-p">
            EnhancResume's <strong>ATS resume scan</strong> checks all of these
            factors automatically and tells you exactly what to fix, in plain
            language, with no technical expertise required.
          </p>
        </section>

        {/* ── Key Features ── */}
        <section className="seo-section seo-section--alt" id="features">
          <h2 className="seo-h2">Key Features of EnhancResume's AI Resume Analysis Tool</h2>
          <p className="seo-p">
            EnhancResume is more than a basic{" "}
            <strong>resume checker</strong>. Here's everything you get:
          </p>
          <div className="seo-features-grid">
            <div className="seo-feature-card">
              <div className="seo-feature-icon">🎯</div>
              <h3 className="seo-h3">ATS Compatibility Score</h3>
              <p>
                Get a precise <strong>ATS resume score</strong> out of 100
                showing exactly how well your resume is optimized for the
                target job's ATS system.
              </p>
            </div>
            <div className="seo-feature-card">
              <div className="seo-feature-icon">🔑</div>
              <h3 className="seo-h3">Keyword Gap Analysis</h3>
              <p>
                Our <strong>resume keyword checker</strong> identifies
                which critical keywords from the job description are missing
                from your resume, so you know exactly what to add.
              </p>
            </div>
            <div className="seo-feature-card">
              <div className="seo-feature-icon">🤖</div>
              <h3 className="seo-h3">AI-Powered Feedback</h3>
              <p>
                Receive detailed, category-by-category feedback from our{" "}
                <strong>AI resume review</strong> engine — covering tone,
                content quality, structure, and skills alignment.
              </p>
            </div>
            <div className="seo-feature-card">
              <div className="seo-feature-icon">📊</div>
              <h3 className="seo-h3">Multi-Category Scoring</h3>
              <p>
                Unlike basic <strong>resume evaluators</strong>, EnhancResume
                scores your resume across four dimensions: Tone &amp; Style,
                Content, Structure, and Skills — giving you a complete picture.
              </p>
            </div>
            <div className="seo-feature-card">
              <div className="seo-feature-icon">📝</div>
              <h3 className="seo-h3">Resume History Tracking</h3>
              <p>
                Track every resume version you've analyzed. Compare ATS scores
                across different job applications to refine your{" "}
                <strong>resume optimization</strong> strategy over time.
              </p>
            </div>
            <div className="seo-feature-card">
              <div className="seo-feature-icon">⚡</div>
              <h3 className="seo-h3">Instant Results, Always Free</h3>
              <p>
                Get your complete{" "}
                <strong>resume analysis</strong> in under 60 seconds.
                No credit card. No subscription. No hidden fees. Just
                actionable insights to help you get interviews.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who Is It For ── */}
        <section className="seo-section" id="who-its-for">
          <h2 className="seo-h2">Who Uses EnhancResume?</h2>
          <p className="seo-p">
            EnhancResume's <strong>resume improvement tool</strong> is built for:
          </p>
          <ul className="seo-list">
            <li>
              <strong>Job Seekers &amp; Career Changers</strong> — Quickly
              optimize your resume for a new industry or role without hiring an
              expensive resume writer.
            </li>
            <li>
              <strong>Recent Graduates</strong> — Make your entry-level resume
              competitive by ensuring it passes ATS filters that screen out
              unoptimized resumes.
            </li>
            <li>
              <strong>Experienced Professionals</strong> — Maximize your chances
              at senior roles with a targeted, keyword-rich resume that speaks
              directly to ATS requirements.
            </li>
            <li>
              <strong>Recruiters &amp; Career Coaches</strong> — Use
              EnhancResume to quickly assess and improve client resumes with
              objective AI-powered feedback.
            </li>
          </ul>
          <div className="seo-cta-inline mt-6">
            <Link to="/upload" className="primary-button w-fit" id="content-cta-2">
              Analyze My Resume for Free →
            </Link>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="seo-section seo-section--alt" id="faq" aria-label="Frequently Asked Questions">
          <h2 className="seo-h2">Frequently Asked Questions About Resume Enhancement &amp; ATS Optimization</h2>
          <p className="seo-p">
            Everything you need to know about improving your resume, understanding
            ATS systems, and getting more interviews.
          </p>
          <div className="faq-list" role="list">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="seo-section seo-cta-section" id="get-started">
          <h2 className="seo-h2 text-center">Ready to Beat the ATS &amp; Land More Interviews?</h2>
          <p className="seo-p text-center">
            Stop sending resumes into the void. Use EnhancResume's free{" "}
            <strong>ATS resume checker</strong> right now and get a clear,
            actionable plan to improve your resume in minutes.
          </p>
          <div className="flex justify-center">
            <Link to="/upload" className="primary-button w-fit text-xl font-semibold" id="bottom-cta">
              Get My Free ATS Score →
            </Link>
          </div>
          <p className="seo-legal-note">
            By using EnhancResume, you agree to our{" "}
            <Link to="/terms-of-service" className="policy-link">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy" className="policy-link">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}

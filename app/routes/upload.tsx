import React, { type FormEvent } from 'react'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import { useState } from 'react'
import FileUploader from '~/components/FileUploader';
import { usePuterStore } from '~/lib/puter';
import { useNavigate, Link } from 'react-router';
import { convertPdfToImage } from '~/lib/pdf2img';
import { generateUUID } from '~/lib/utils';
import { prepareInstructions, AIResponseFormat } from 'constants';
import type { Route } from "./+types/home";

const SITE_URL = "https://enhancresume.com";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Free ATS Resume Checker – AI Resume Analyzer & Score Checker | EnhancResume",
    },
    {
      name: "description",
      content:
        "Use EnhancResume's free ATS resume checker to instantly scan your resume, get an AI-powered ATS compatibility score, identify missing keywords, and receive actionable improvement tips to beat applicant tracking systems.",
    },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/upload` },
    // Open Graph
    {
      property: "og:title",
      content: "Free ATS Resume Checker – AI Resume Analyzer | EnhancResume",
    },
    {
      property: "og:description",
      content:
        "Instantly scan your resume for ATS compatibility. Get a resume score, find missing keywords, and receive AI-powered improvement suggestions — free.",
    },
    { property: "og:url", content: `${SITE_URL}/upload` },
    { property: "og:type", content: "website" },
    // Twitter
    {
      name: "twitter:title",
      content: "Free ATS Resume Checker – AI Resume Analyzer | EnhancResume",
    },
    {
      name: "twitter:description",
      content:
        "Instantly scan your resume for ATS compatibility. Get a resume score, find missing keywords, and receive AI-powered improvement suggestions — free.",
    },
  ];
}

/** BreadcrumbList JSON-LD for the upload page */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ATS Resume Checker",
      item: `${SITE_URL}/upload`,
    },
  ],
};

const Upload = () => {
    const {auth,isLoading,fs,ai,kv}= usePuterStore();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState(''); 
    const [file,setFile] = useState<File | null>(null);

    const handleFileSelect = (file: File | null) => {
        setFile(file);
    }

    const handleAnalyze = async({companyName,jobTitle,jobDescription,file}:{companyName:string, jobTitle:string, jobDescription:string, file: File})=>{
        setIsProcessing(true);
        setStatusText('Uploading the file...');

        const uploadedFile= await fs.upload([file]);
        if(!uploadedFile) return setStatusText('Error: Failed to upload file.');
        
        setStatusText('Converting to image...');
        const imageFile = await convertPdfToImage(file);
        if(!imageFile.file) return setStatusText('Error: Failed to convert PDF to image.');

        setStatusText('Uploading the image...');
        const uploadedImage = await fs.upload([imageFile.file]);
        if(!uploadedImage) return setStatusText('Error: Failed to upload image.');

        setStatusText('Preparing data...');

        const uuid = generateUUID();
        const data = {
            id:uuid,
            resumePath: uploadedFile.path,
            imagePath: uploadedImage.path,
            companyName,
            jobTitle,
            jobDescription,
            feedback:'',
        }
        await kv.set(`resume:${uuid}`,JSON.stringify(data));

        setStatusText('Analyzing your resume for ATS compatibility...');

        const feedback = await ai.feedback(
            uploadedFile.path,
            prepareInstructions({jobTitle,jobDescription,AIResponseFormat})
        )

        if(!feedback) return setStatusText('Error: Failed to analyze resume.');

        const feedbackText = typeof feedback.message.content === 'string' 
        ? feedback.message.content
        : feedback.message.content[0].text;

        data.feedback = JSON.parse(feedbackText);
        await kv.set(`resume:${uuid}`,JSON.stringify(data));
        setStatusText('Analysis complete! Redirecting...');
        navigate(`/resume/${uuid}`);
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.currentTarget.closest('form');
        if(!form) return;
        const formData = new FormData(form);

        const companyName = formData.get('company-name') as string;
        const jobTitle = formData.get('job-title') as string;
        const jobDescription = formData.get('job-description') as string;
        
        if(!file) return;
        handleAnalyze({companyName,jobTitle,jobDescription,file});
    }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar/>
      <section className="main-section" aria-label="ATS Resume Checker Tool">
          <div className='page-heading py-10'>
              <h1>Free ATS Resume Checker &amp; AI Resume Analyzer</h1>
              {isProcessing ? (
                  <>
                      <h2>{statusText}</h2>
                      <img
                        src="/images/resume-scan.gif"
                        className="w-full"
                        alt="EnhancResume AI scanning and analyzing resume for ATS compatibility"
                        width={600}
                        height={400}
                      />
                  </>
              ) : (
                  <h2>Upload your resume and job description for an instant ATS compatibility score and AI-powered improvement tips</h2>
              )}
          </div>

          {!isProcessing && (
              <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8' aria-label="Resume upload form">
                  <div className='form-div'>
                      <label htmlFor="company-name">Company Name</label>
                      <input
                        type="text"
                        name='company-name'
                        placeholder='e.g. Google, Microsoft, Amazon'
                        id='company-name'
                        autoComplete="organization"
                      />
                  </div>

                  <div className='form-div'>
                      <label htmlFor="job-title">Job Title</label>
                      <input
                        type="text"
                        name='job-title'
                        placeholder='e.g. Software Engineer, Product Manager'
                        id='job-title'
                        autoComplete="off"
                      />
                  </div>

                  <div className='form-div'>
                      <label htmlFor="job-description">Job Description</label>
                      <textarea
                        rows={5}
                        name='job-description'
                        placeholder='Paste the full job description here for the most accurate ATS resume scan...'
                        id='job-description'
                      />
                  </div>

                  <div className='form-div'>
                      <label htmlFor="uploader">Upload Your Resume (PDF)</label>
                      <FileUploader onFileSelect={handleFileSelect} />
                  </div>

                  <button className='primary-button' type='submit' id="analyze-resume-btn">
                      Analyze My Resume — Get ATS Score
                  </button>
              </form>
          )}

          {/* Internal link to homepage */}
          {!isProcessing && (
            <p className="text-sm text-center text-gray-500 mt-4">
              Already analyzed a resume?{" "}
              <Link to="/" className="text-[#606beb] hover:underline font-medium">
                View your resume history →
              </Link>
            </p>
          )}
      </section>
      <Footer />
    </main>
  )
}

export default Upload
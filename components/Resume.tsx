import React from 'react';
import { ArrowDown } from 'lucide-react';
import resumePath from '@/assets/profile.pdf';

const Resume: React.FC = () => {

  return (
    <section className="min-h-screen py-20 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold">Resume</h2>
          <a
            href={resumePath}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold"
          >
            <ArrowDown className="w-4 h-4" /> Download PDF
          </a>
        </div>

        <div className="w-full h-[80vh] border border-white/10 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Resume PDF"
            src={resumePath}
            className="w-full h-full bg-white"
            aria-label="Resume PDF viewer"
          />
        </div>

        <p className="text-sm text-gray-400 mt-4">
          If the PDF does not display, you can <a href={resumePath} className="text-blue-400 underline">open or download it here</a>.
        </p>
      </div>
    </section>
  );
};

export default Resume;

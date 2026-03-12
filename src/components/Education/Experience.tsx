import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto  py-16 -mt-12">
      {/* Tiêu đề Section */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
        <p className="text-gray-500">My professional journey so far.</p>
      </div>

      {/* Thẻ Experience Card */}
      <div className="relative bg-white rounded-3xl p-6 md:p-10 border border-[#e85d38]/15 shadow-[0_8px_30px_rgba(232,93,56,0.06)] hover:shadow-[0_12px_40px_rgba(232,93,56,0.12)] transition-shadow duration-300 group">
        
        {/* Badge "Latest" góc phải trên */}
        <div className="absolute top-0 right-8 -translate-y-1/2 hidden sm:block">
          <span className="bg-[#e85d38] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md tracking-wide">
            LATEST ROLE
          </span>
        </div>

        {/* Header: Role & Company */}
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#e85d38]/10 flex items-center justify-center shrink-0 border border-[#e85d38]/20 group-hover:scale-105 transition-transform duration-300">
            <Briefcase size={28} className="text-[#e85d38]" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 leading-tight">
              Frontend Developer Intern
            </h3>
            <div className="text-[#e85d38] font-bold text-lg mt-1">
              ECOTEL Co., Ltd.
            </div>
            
            {/* Meta info: Thời gian & Địa điểm */}
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                <Calendar size={14} className="text-gray-400" />
                <span>Oct 2025 – Now</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                <MapPin size={14} className="text-gray-400" />
                <span>Hanoi, Vietnam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-gray-100 via-[#e85d38]/10 to-transparent mb-8"></div>

        {/* Body: Công việc & Thành tựu ĐÃ ĐƯỢC CẬP NHẬT */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-[#e85d38] mt-0.5 shrink-0" />
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Architected and developed a completely new corporate website from scratch to replace the legacy system, currently in the pre-launch staging phase.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-[#e85d38] mt-0.5 shrink-0" />
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Engineered a modern, fully responsive client-facing UI featuring seamless dark/light mode transitions and multi-language support (VN/EN).
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-[#e85d38] mt-0.5 shrink-0" />
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Built a custom, intuitive Admin Dashboard (CMS) empowering administrators to efficiently manage CRUD operations for dynamic content, services, and blogs.
            </p>
          </div>
        </div>

        {/* Footer: Tech Stack */}
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {["ReactJS", "TypeScript", "Tailwind CSS", "RESTful APIs", "Git"].map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:border-[#e85d38]/40 hover:text-[#e85d38] hover:bg-[#e85d38]/5 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
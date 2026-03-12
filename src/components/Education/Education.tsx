import React from 'react';
import { 
  Code, 
  Binary,
  Cpu,
  Lightbulb,
  Monitor,
  Network,
  Award,
  ExternalLink
} from 'lucide-react'; 

const EducationCard = () => {
  return (
    // Mình bọc thêm 1 thẻ section bên ngoài để chứa cả Tiêu đề và Card
    <section id="education" className="max-w-6xl mx-auto py-16 -mt-20">
      
      {/* Header Section (Đã được đưa ra ngoài card) */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Education</h2>
        <p className="text-gray-500 italic">Academic Journey</p>
      </div>

      {/* Khối Card chứa nội dung - Giữ nguyên 100% code của bạn */}
      <div className="p-8 bg-white text-slate-800 font-sans border border-gray-100 rounded-xl shadow-sm relative overflow-hidden">
        
        {/* Decorative background elements (optional) */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100"><path d="M0 100 Q 50 0 100 100" fill="none" stroke="currentColor" strokeWidth="1"/></svg>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* University Info */}
          <div className="flex gap-4">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center border-2 border-gray-200 rounded-lg">
               <span className="text-3xl">🏛️</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold leading-tight">
                Hanoi University of Science <br /> and Technology (HUST)
              </h3>
              <p className="text-gray-600 mt-1">Major: Mathematics and Informatics</p>
            </div>
          </div>

          {/* Degree Info */}
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center">
               <span className="text-4xl">🎓</span>
            </div>
            <div className="text-sm space-y-1">
              <p className="font-semibold text-gray-700 text-base">Bachelor of Science Degree (Ongoing)</p>
              <p>3rd Year Student</p>
              <p>Expected Graduation: 2027</p>
              <p className="font-medium text-gray-800">Current GPA: <span className="text-lg">3.2 / 4.0</span></p>
            </div>
          </div>
        </div>

        {/* Key Coursework Section */}
        <div className="relative bg-white border border-[#e85d38]/15 rounded-2xl p-6 pt-8  shadow-[0_8px_30px_rgba(232,93,56,0.08)] transition-shadow duration-300">
          
          {/* Đã sửa border của thẻ span thành cam nhạt và dùng flex để căn chỉnh chữ A/A+ đẹp hơn */}
          <span className="absolute -top-3 left-4 px-4 py-0.5 font-bold text-gray-700 border border-[#e85d38]/20 rounded-full text-sm bg-[#e85d38]/15 flex items-center gap-1.5 shadow-[0_2px_10px_rgba(232,93,56,0.05)]">
            Key Coursework
            <strong className="text-[#e85d38] "> A / A+</strong>
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 ">
            {/* Column 1 */}
            <div className="space-y-5 w-fit mx-auto">
              <CourseItem icon={<Code size={20} className="text-gray-400 group-hover:text-[#e85d38] transition-colors"/>} text="Programming Techniques" />
              <CourseItem icon={<Binary size={20} className="text-gray-400 group-hover:text-[#e85d38] transition-colors"/>} text="Data Structures & Algorithms" />
              <CourseItem icon={<Cpu size={20} className="text-gray-400 group-hover:text-[#e85d38] transition-colors"/>} text="Computer Architecture" />
            </div>

            {/* Column 2 */}
            <div className="space-y-5 w-fit mx-auto">
              <CourseItem icon={<Monitor size={20} className="text-gray-400 group-hover:text-[#e85d38] transition-colors"/>} text="Introduction to Informatics" />
              <CourseItem icon={<Network size={20} className="text-gray-400 group-hover:text-[#e85d38] transition-colors"/>} text="System Analysis & Design" />
              <CourseItem icon={<Lightbulb size={20} className="text-gray-400 group-hover:text-[#e85d38] transition-colors"/>} text="Technology and technical design thinking" />
            </div>
            <div className="space-y-4 md:pl-6 md:border-l border-gray-100">
              
              
              {/* Thay link "#" bằng link ảnh thực tế của bạn */}
              <CertificateItem 
                icon={<Award size={20} className="text-gray-400 group-hover:text-[#e85d38] transition-colors" />} 
                title="Responsive Web Design" 
                subtitle="FreeCodeCamp" 
                link="#" 
              />
              <CertificateItem 
                icon={<Award size={20} className="text-gray-400 group-hover:text-[#e85d38] transition-colors" />} 
                title="TOEIC (2 Skills): 600" 
                link="#" 
              />
              <CertificateItem 
                icon={<Award size={20} className="text-gray-400 group-hover:text-[#e85d38] transition-colors" />} 
                title="Samsung Innovation Campus" 
                subtitle="Completed Big Data course" 
                link="#" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component cho từng dòng môn học
const CourseItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center gap-3 group">
    <div className="p-2 bg-gray-100 rounded-lg text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-700 leading-snug">{text}</span>
  </div>
);
const CertificateItem = ({ icon, title, subtitle, link }: { icon: React.ReactNode, title: string, subtitle?: string, link: string }) => (
  <a href={link} target="_blank" rel="noreferrer" className="flex items-start gap-3 group cursor-pointer w-fit">
    <div className="p-2 bg-gray-100 rounded-lg text-gray-500 group-hover:bg-[#e85d38]/10 group-hover:text-[#e85d38] transition-colors shrink-0">
      {icon}
    </div>
    <div className="mt-1">
      <span className="text-sm font-bold text-gray-700 leading-snug group-hover:text-[#e85d38] transition-colors flex items-center gap-1.5">
        {title}
        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#e85d38]" />
      </span>
      {subtitle && <p className="text-[13px] font-medium text-gray-500 mt-0.5">{subtitle}</p>}
    </div>
  </a>
);
export default EducationCard;
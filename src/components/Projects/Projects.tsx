import React, { useState } from 'react';
import { Figma, Github, ExternalLink, X, PlayCircle, Calendar } from 'lucide-react';

// Giả định bạn đã import các ảnh này, mình giữ nguyên cấu trúc import của bạn

import library2 from '@/assets/library2.png';
import library3 from '@/assets/library3.png';
import smartdriver from '@/assets/taxi-pulse-pro - Cốc Cốc 2025-10-02 15-58-44.mp4';
import website from '@/assets/website3 (1).png';
import website1 from '@/assets/website1.png';
import admin from '@/assets/admin1.png';
import library4 from '@/assets/Screenshot 2026-03-11 203358.png';
import smartdriver1 from '@/assets/smart-driver1.jpg';
import smartdriver2 from '@/assets/smart-driver2.jpg';
import smartdriver3 from '@/assets/smart-driver.jpg';

// --- TYPE DEFINITIONS ---
interface ProjectLink {
  type: string;
  text: string;
  url: string;
}

interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

interface ProjectDetails {
  fullDesc: string;
  media: MediaItem[];
}

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  tags: string[];
  shortDesc: string;
  links: ProjectLink[];
  details: ProjectDetails;
}

// --- MOCK DATA ---
// --- MOCK DATA ---
const projectsData: Project[] = [
  {
    id: 1,
    title: "Ecotel Website & CMS",
    thumbnail: website,
    duration: "12/2025 – 02/2026 | Company Project",
    tags: ["ReactJS", "TypeScript", "Tailwind CSS"],
    shortDesc: "Design & developed a completely new corporate website and a custom Content Management System (CMS) with dark/light themes and multi-language support.",
    links: [
      { type: 'demo', text: 'Website', url: 'https://ecotel-wheat.vercel.app/' },
      { type: 'demo', text: 'Admin', url: 'https://ecotel-admin.vercel.app/auth' },
 
    ],
    details: {
      fullDesc: "Spearheaded the development of a comprehensive digital platform for ECOTEL Co., Ltd., encompassing both a client-facing website and a robust, custom-built Content Management System (CMS).\n\n• Client-Facing Interface: Engineered a modern, fully responsive UI to showcase the company's digital transformation solutions (ERP, MES). Implemented seamless dark/light mode integration and multi-language support (VN/EN) to maximize accessibility.\n• Admin Dashboard: Designed an intuitive, secure CMS empowering administrators to efficiently manage and streamline CRUD operations for dynamic content, including navigation menus, services, products, and blogs.\n\nImpact: Delivered a scalable web solution that significantly enhanced the company's online presence and optimized their internal content management workflow.",
      media: [
        { type: 'image', url: website1 },
        { type: 'image', url: admin },
      ]
    }
  },
  {
    id: 2,
    title: "Smart-Drive",
    thumbnail: smartdriver3,
    duration: "07/2025 – 08/2025 | Group Project",
    tags: ["ReactJS", "TypeScript", "Tailwind CSS"],
    shortDesc: "Built a web demo using TLC Trip Record Data to visualize taxi demand predictions and suggest optimal pickup areas.",
    links: [
      { type: 'demo', text: 'Demo', url: 'https://drive.google.com/file/d/1yaI_qndq3lvMVVtFe9iNXpTXzraf-wsI/view' },
      { type: 'github', text: 'Code', url: 'https://github.com/HuongLan123/SMART-DRIVE' }
    ],
    details: {
      fullDesc: "Took charge of Web Interface Design and Frontend Development for a predictive analytics platform. The application utilizes TLC Trip Record Data to visualize taxi demand and suggest optimal pickup locations for drivers.\n\n• Data Visualization: Translated complex predictive data models into clear, actionable, and visually appealing interactive maps.\n• UI/UX Optimization: Architected a user-centric flow ensuring smooth navigation and rapid data comprehension for end-users.\n\nAchievement: The intuitive design and flawless technical execution played a key role in the team achieving a perfect score of 100/100 from the evaluation panel at the Samsung Innovation Campus Big Data course.",
      media: [
        { type: 'image', url: smartdriver1 },
        { type: 'image', url: smartdriver2 },
        { type: 'video', url: smartdriver },
      ]
    }
  },
  {
    id: 3,
    title: "Library Management System",
    thumbnail: library4,
    duration: "05/2025 | Personal Project",
    tags: ["Python", "Tkinter", "Data Structures"],
    shortDesc: "Developed a desktop application using Python and Tkinter to manage books, readers, and loan/return slips with CSV export.",
    links: [
      { type: 'demo', text: 'Demo', url: 'https://github.com/HuongLan123/Library-Management-System/releases/tag/v2.0' },
      { type: 'github', text: 'Code', url: 'https://github.com/HuongLan123/Library-Management-System' }
    ],
    details: {
      fullDesc: "Architected and developed a standalone desktop application to streamline daily library operations, built entirely with Python and the Tkinter GUI framework.\n\n• Core Functionalities: Implemented robust modules for managing book inventories, tracking reader profiles, and automating loan/return ticket processing.\n• Data Management: Integrated features for generating comprehensive statistical reports and seamless data exporting to CSV formats.\n\nOutcome: Highly commended by university faculty for solid application of Data Structures and Algorithms, clean code architecture, and flawless real-world functionality.",
      media: [
        { type: 'image', url: library3 },
        { type: 'image', url: library2 },
      ]
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderLinkIcon = (type: string) => {
    switch (type) {
      case 'figma': return <Figma size={16} />;
      case 'github': return <Github size={16} />;
      case 'demo': return <ExternalLink size={16} />;
      default: return null;
    }
  };

  const sharpImageStyle = {
    backfaceVisibility: 'hidden' as const,
    transform: 'translateZ(0)',
    imageRendering: '-webkit-optimize-contrast' as const
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto  py-16 -mt-10">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">My Projects</h2>
        <p className="text-gray-500">Some of my highlighted projects.</p>
      </div>

      {/* Grid */}
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            // 1. CHUYỂN `group` LÊN ĐÂY & THÊM `cursor-pointer` cho cả card
            className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
            // 2. CHUYỂN sự kiện onClick lên toàn bộ card
            onClick={() => setSelectedProject(project)}
          >
            {/* Thumbnail */}
            <div className="h-48 relative overflow-hidden">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={sharpImageStyle}
              />
              {/* Lớp phủ đen và nút View Details */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <PlayCircle size={18} /> View Details
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow relative z-10 bg-white">
              {/* Lưu ý nhỏ: Thêm relative z-10 bg-white để phần chữ đè lên và không bị lỗi hiệu ứng */}
              <h3 className="text-[22px] font-bold text-gray-800 leading-tight mb-2 group-hover:text-[#e85d38] transition-colors duration-300">
                {/* Mình gợi ý thêm hiệu ứng hover đổi màu tiêu đề sang cam cho đồng bộ */}
                {project.title.split('—').map((part, index) => (
                  <React.Fragment key={index}>
                    {index === 0 ? <span>{part}</span> : <span className="text-gray-600 block text-lg font-medium mt-1 group-hover:text-[#e85d38]/80 transition-colors">— {part}</span>}
                  </React.Fragment>
                ))}
              </h3>
              
         
              
              {/* Duration Info */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 font-medium">
                <Calendar size={14} className="text-gray-400" />
                <span>{project.duration}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
  key={index} 
  className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-semibold rounded-full border border-amber-100/50"
>
  {tag}
</span>
                ))}
              </div>

              {/* Short Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
                {project.shortDesc}
              </p>

              {/* Links */}
              <div className="flex items-center gap-5 mt-auto">
                {project.links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[#e85d38] hover:text-[#c74c2d] transition-colors text-sm font-semibold"
                  >
                    {renderLinkIcon(link.type)}
                    <span>{link.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col relative overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-gray-800">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 font-medium">
                <Calendar size={16} className="text-gray-400" />
                <span>{selectedProject.duration}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag: string, index: number) => (
                  <span 
  key={index} 
  className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-semibold rounded-full border border-amber-200/50"
>
  {tag}
</span>
                ))}
              </div>

              <div className="text-gray-700 leading-normal text-[15px] mb-8 flex flex-col gap-2.5">
  {selectedProject.details.fullDesc.split('\n').map((line: string, index: number) => {
    // Bỏ qua các dòng trống do \n\n tạo ra
    if (!line.trim()) return null; 
    
    // Kiểm tra xem dòng này có phải là gạch đầu dòng không
    const isBullet = line.trim().startsWith('•');
    
    return (
      <p 
        key={index} 
        className={isBullet ? "pl-4 relative text-gray-600" : "font-medium text-gray-800"}
      >
        {line}
      </p>
    );
  })}
</div>

              <h4 className="text-lg font-bold text-amber-600 mb-4">Project Gallery</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.details.media.map((item: MediaItem, index: number) => (
                  <div 
                    key={index} 
                    // Thêm điều kiện md:col-span-2 nếu item.type là 'video'
                    className={`rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-video flex items-center justify-center ${item.type === 'video' ? 'md:col-span-2' : ''}`}
                  >
                    {item.type === 'image' ? (
                      <img 
                        src={item.url} 
                        alt="Project detail" 
                        className="w-full h-full object-cover"
                        style={sharpImageStyle}
                      />
                    ) : (
                      <video src={item.url} autoPlay 
                        muted 
                        loop 
                        playsInline 
                        controls className="w-full h-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
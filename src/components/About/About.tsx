import React from 'react';
import Navbar from './Header'; // Nhớ kiểm tra lại tên file Navbar/Header của bạn nhé
import { Mail, Github, Facebook, Palette, Code, Users, Lightbulb } from 'lucide-react';

import ImageCollageWall from './Image';

const Home = () => {
  const skills = [
    {
      title: "UI/UX Design",
      desc: "Figma, Prototyping",
      icon: <Palette size={24} className="text-[#f26e46]" />,
    },
    {
      title: "Frontend Dev",
      desc: "React, TypeScript, Tailwind CSS",
      icon: <Code size={24} className="text-[#2596be]" />,
    },
    {
      title: "User Research",
      desc: "Usability Testing, Surveys",
      icon: <Users size={24} className="text-[#8c52ff]" />,
    },
    {
      title: "Creative Thinking",
      desc: "Design Systems, Branding",
      icon: <Lightbulb size={24} className="text-[#ff6b6b]" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7fa] to-[#fbf7ef] font-sans pb-10">
      <Navbar />

      <main className="max-w-6xl mx-auto  py-16 flex flex-col lg:flex-row gap-10 h-fit lg:items-stretch ">
        
        {/* SỬA Ở ĐÂY: Thay p-8 thành px-8 pt-8 pb-5 (hoặc pb-4) để thu hẹp khoảng trống bên dưới cùng */}
        <div className="w-full lg:w-[60%] -mt-5 bg-white/60 backdrop-blur-sm rounded-3xl px-8 pt-8 pb-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-gray-200 rounded-bl-full opacity-50"></div>
          
          <h2 className="text-[28px] font-bold text-gray-900 mb-3.5 relative z-10">A Little About Me</h2>
          
          <p className="text-gray-600 leading-relaxed mb-8 relative z-10 text-[15px]">
             A 3rd-year Mathematics and Informatics student with a strong passion for building interactive, user-centric web applications. 
             Hands-on experience with <span className="font-semibold text-gray-800"> Frontend (ReactJS, TS) </span>  with a growing, foundational interest in UI/UX Design. 
             I’m seeking an internship to leverage my coding skills and design mindset to create intuitive digital experiences.
             
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 mb-8 -mt-5">
  {skills.map((skill, index) => (
    <div 
      key={index} 
      className="group bg-white rounded-2xl p-4 flex items-center gap-4 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      <div>
        <h3 className="text-[15px] font-bold text-gray-800 mb-0.5">
          {skill.title}
        </h3>
        <p className="text-[13px] text-gray-500">
          {skill.desc}
        </p>
      </div>
    </div>
  ))}
</div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-1 bg-[#e85d38]/15 text-[#e85d38] text-sm font-bold rounded-t-lg">
  Connect me
</span>
            <div className="flex justify-center items-center gap-8 sm:gap-12 p-3 bg-[#e85d38]/5 border border-[#e85d38]/15 rounded-b-2xl rounded-tr-2xl shadow-sm">
              
              <a href="mailto:huongphamlan0907@gmail.com" className="flex flex-col items-center gap-1.5 group ">
                <div className="p-2.5  bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:text-blue-600 transition-all group-hover:-translate-y-1">
                  <Mail className="text-gray-600  group-hover:text-blue-600 transition-colors" size={20} />
                </div>
                <span className="text-[12px] font-bold text-gray-600 group-hover:text-blue-600">Email</span>
              </a>
              
              <a href="https://github.com/HuongLan123" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 group">
                <div className="p-2.5 bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:text-[#24292e] transition-all group-hover:-translate-y-1">
                  <Github className="text-gray-600 group-hover:text-[#24292e] transition-colors" size={20} />
                </div>
                <span className="text-[12px] font-bold text-gray-600 group-hover:text-[#24292e]">Github</span>
              </a>

              <a href="https://www.facebook.com/huong.phamlan.752" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 group">
                <div className="p-2.5 bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:text-[#1877f2] transition-all group-hover:-translate-y-1">
                  <Facebook className="text-gray-600 group-hover:text-[#1877f2] transition-colors" size={20} />
                </div>
                <span className="text-[12px] font-bold text-gray-600 group-hover:text-[#1877f2]">Facebook</span>
              </a>
              
            </div>
          </div>
        </div>

        {/* Khối bên phải chứa Quả cầu 3D */}
        <div className="hidden lg:flex lg:w-[40%] items-center justify-center -mt-4">
            <ImageCollageWall />
        </div>

      </main>
    </div>
  );
};

export default Home;
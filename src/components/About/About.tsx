import Navbar from './Header';
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

      <main className="max-w-6xl mx-auto py-16">
        {/* Card nội dung A Little About Me hợp nhất chứa cả ImageCollageWall bên trong */}
        <div className="w-full -mt-5 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
          
          {/* Họa tiết trang trí góc card */}
          <div className="absolute top-0 right-0 w-36 h-36 border-l border-b border-gray-200/60 rounded-bl-full opacity-40 pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch relative z-10">
            {/* Cột trái: Giới thiệu bản thân, Kỹ năng, Connect Me */}
            <div className="w-full lg:w-[55%] flex flex-col justify-between">
              <div>
                <h2 className="text-[28px] font-bold text-gray-900 mb-3.5">A Little About Me</h2>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                  A 3rd-year Mathematics and Informatics student with a strong passion for building interactive, user-centric web applications.
                  Hands-on experience with <span className="font-semibold text-gray-800"> Frontend (ReactJS, TS) </span> with a growing, foundational interest in UI/UX Design.
                  I’m seeking an internship to leverage my coding skills and design mindset to create intuitive digital experiences.
                </p>

                {/* Danh sách Skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-3.5 flex items-center gap-3.5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-[14px] font-bold text-gray-800 mb-0.5">
                          {skill.title}
                        </h3>
                        <p className="text-[12px] text-gray-500">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thanh Connect Me */}
              <div className="pt-2">
                <span className="inline-block px-4 py-1 bg-[#e85d38]/15 text-[#e85d38] text-xs font-bold rounded-t-lg">
                  Connect me
                </span>
                <div className="flex justify-around items-center p-3 bg-[#e85d38]/5 border border-[#e85d38]/15 rounded-b-2xl rounded-tr-2xl shadow-xs">
                  <a href="mailto:huongphamlan0907@gmail.com" className="flex flex-col items-center gap-1 group">
                    <div className="p-2 bg-white rounded-full shadow-xs group-hover:shadow-sm group-hover:text-blue-600 transition-all group-hover:-translate-y-0.5">
                      <Mail className="text-gray-600 group-hover:text-blue-600 transition-colors" size={18} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-600 group-hover:text-blue-600">Email</span>
                  </a>

                  <a href="https://github.com/HuongLan123" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                    <div className="p-2 bg-white rounded-full shadow-xs group-hover:shadow-sm group-hover:text-[#24292e] transition-all group-hover:-translate-y-0.5">
                      <Github className="text-gray-600 group-hover:text-[#24292e] transition-colors" size={18} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-600 group-hover:text-[#24292e]">Github</span>
                  </a>

                  <a href="https://www.facebook.com/huong.phamlan.752" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                    <div className="p-2 bg-white rounded-full shadow-xs group-hover:shadow-sm group-hover:text-[#1877f2] transition-all group-hover:-translate-y-0.5">
                      <Facebook className="text-gray-600 group-hover:text-[#1877f2] transition-colors" size={18} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-600 group-hover:text-[#1877f2]">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Cột phải: Khối ImageCollageWall nằm trọn vẹn trong Card */}
            <div className="w-full lg:w-[45%] flex flex-col min-h-[460px] lg:min-h-0">
              <ImageCollageWall />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
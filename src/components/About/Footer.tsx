import React from 'react';
import { MapPin, Mail, Github, Facebook, ArrowUp, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  // Hàm xử lý cuộn mượt mà lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* =========================================
          1. FLOATING DOCK (Luôn nổi ở giữa dưới cùng)
          ========================================= */}
      {/* SỬA LỖI Ở ĐÂY: Thêm thẻ bọc ngoài cùng với các class fixed, bottom-0, w-full, z-50 */}
      <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-200/60 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          
          {/* 1. Bên Trái: Bản quyền */}
          <p className="text-[13px] text-gray-500 font-medium hidden md:block flex-1">
            © {new Date().getFullYear()} Huong's Portfolio.
          </p>

          {/* 2. Ở Giữa: Các icon Connect */}
          <div className="flex items-center justify-center gap-5 sm:gap-6 flex-1">
            <a 
              href="mailto:hustdream2k5@gmail.com" 
              title="Email"
              className="text-gray-500 hover:text-blue-600 hover:-translate-y-0.5 transition-all"
            >
              <Mail size={18} />
            </a>
            
            <a 
              href="https://github.com/HuongLan123" 
              target="_blank" 
              rel="noreferrer" 
              title="Github"
              className="text-gray-500 hover:text-[#24292e] hover:-translate-y-0.5 transition-all"
            >
              <Github size={18} />
            </a>
            
            <a 
              href="https://facebook.com/huong.phamlan.752" 
              target="_blank" 
              rel="noreferrer" 
              title="Facebook"
              className="text-gray-500 hover:text-[#1877f2] hover:-translate-y-0.5 transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
          
          {/* 3. Bên Phải: Nút Back to top */}
          <div className="flex-1 flex justify-end">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <span>Back to top</span>
              <div className="p-1.5 bg-gray-100 group-hover:bg-blue-50 rounded-full transition-colors">
                <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* =========================================
          2. STATIC FOOTER (Nằm cố định ở cuối trang)
          ========================================= */}
      <footer className="w-full bg-gradient-to-b from-transparent to-white border-t border-gray-200/60 mt-20 pt-16 pb-32">
        {/* pb-32 cực kỳ quan trọng: Tạo khoảng trống ở đáy để Floating Dock không che mất chữ khi cuộn kịch kim */}
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Huong's Portfolio</h2>
            <p className="text-gray-500">Thanks for stopping by! I'm always open to discussing new opportunities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Địa chỉ */}
            <div className="flex items-start gap-4 text-gray-600 group">
              <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-full group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors shrink-0">
                <MapPin size={18} className="text-gray-500 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</span>
                <span className="text-[14px] leading-relaxed font-medium text-gray-700">63 Nguyễn An Ninh, Tương Mai, Hoàng Mai</span>
              </div>
            </div>

            {/* Email */}
            <a href="mailto:hustdream2k5@gmail.com" className="flex items-start gap-4 text-gray-600 hover:text-blue-600 transition-colors group">
              <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-full group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors shrink-0">
                <Mail size={18} className="text-gray-500 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</span>
                <span className="text-[14px] leading-relaxed font-medium break-all">hustdream2k5@gmail.com</span>
              </div>
            </a>

            {/* Github */}
            <a href="https://github.com/HuongLan123" target="_blank" rel="noreferrer" className="flex items-start gap-4 text-gray-600 hover:text-[#24292e] transition-colors group">
              <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-full group-hover:bg-gray-100 group-hover:border-gray-200 transition-colors shrink-0">
                <LinkIcon size={18} className="text-gray-500 group-hover:text-[#24292e] transition-colors" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Github</span>
                <span className="text-[14px] leading-relaxed font-medium break-all">github.com/HuongLan123</span>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/huong.phamlan.752" target="_blank" rel="noreferrer" className="flex items-start gap-4 text-gray-600 hover:text-[#1877f2] transition-colors group">
              <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-full group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors shrink-0">
                <Facebook size={18} className="text-gray-500 group-hover:text-[#1877f2] transition-colors" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Facebook</span>
                <span className="text-[14px] leading-relaxed font-medium">huong.phamlan.752</span>
              </div>
            </a>

          </div>

          {/* Đường kẻ ngang phân cách & Bản quyền */}
          <div className="w-full pt-8 border-t border-gray-200/80 flex justify-center items-center">
            <p className="text-[13px] text-gray-400 font-medium">
              © {new Date().getFullYear()} Huong's Portfolio. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
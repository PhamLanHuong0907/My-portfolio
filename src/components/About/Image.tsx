
import library1 from '@/assets/library1.png';
 // Bạn có thể dùng library2 hoặc 3 tùy ý
import smartdriver from '@/assets/taxi-pulse-pro - Cốc Cốc 2025-10-02 15-58-44.mp4';
import website from '@/assets/website3 (1).png';
import website1 from '@/assets/website1.png';
import admin from '@/assets/admin1.png';
import { useState } from 'react';
interface CollageItem {
  type: 'image' | 'video';
  src: string;
  className: string;
}

// Cấu trúc ma trận 12x6 mới: Ưu tiên chiều ngang cho UI/Video
const collageItems: CollageItem[] = [
  // 1. Admin - Top Left: Rộng 7 cột, cao 4 hàng (Tỉ lệ rất hợp cho dashboard)
  { type: 'image', src: admin, className: "col-start-1 col-span-7 row-start-1 row-span-4" }, 
  
  // 2. Video - Top Right: Rộng 5 cột, cao 3 hàng (Tập trung vào khung hình video)
  { type: 'video', src: smartdriver, className: "col-start-8 col-span-5 row-start-1 row-span-3" },

  // 3. Website Main - Bottom Right: Chiếm phần còn lại bên phải
  { type: 'image', src: website, className: "col-start-8 col-span-5 row-start-4 row-span-3" },

  // 4. Library Small 1 - Bottom Left: Rộng 4 cột, cao 2 hàng
  { type: 'image', src: library1, className: "col-start-1 col-span-4 row-start-5 row-span-2" },

  // 5. Website Small 2 - Bottom Middle: Rộng 3 cột, cao 2 hàng (khít vào giữa)
  { type: 'image', src: website1, className: "col-start-5 col-span-3 row-start-5 row-span-2" },
];

const ImageCollageWall = () => {
  const [hoveredItem, setHoveredItem] = useState<CollageItem | null>(null);

  const renderItem = (item: CollageItem, index: number) => {
    return (
      <div 
        key={index} 
        // Kích hoạt popup khi di chuột vào
        onMouseEnter={() => setHoveredItem(item)}
        // Đóng popup khi di chuột ra
        onMouseLeave={() => setHoveredItem(null)}
        className={`
          relative overflow-hidden group cursor-zoom-in
          border-[0.5px] border-white/20 bg-gray-100 
          transition-all duration-500 ease-out
          hover:z-10
          ${item.className}
        `}
      >
        {item.type === 'image' ? (
          <img 
            src={item.src} 
            alt={`Portfolio ${index}`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <video src={item.src} className="w-full h-full object-cover" muted loop autoPlay playsInline />
        )}
        
        {/* Lớp phủ nhẹ khi hover để báo hiệu */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col relative"> 
      
      {/* Grid ảnh gốc */}
      <div className="flex-grow min-h-0 grid grid-cols-12 grid-rows-6 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
        {collageItems.map((item, index) => renderItem(item, index))}
      </div>

      {/* Footer (Giữ nguyên) */}
      <div className="mt-5 flex justify-between items-center flex-shrink-0">
        <div>
          <h3 className="text-[16px] font-bold text-gray-800">Featured Projects</h3>
          <p className="text-[13px] text-gray-500">Hover to preview gallery.</p>
        </div>
       <a 
  href="#projects" 
  className="group inline-flex items-center justify-center gap-1.5 py-2 px-5 bg-[#e85d38]/15 text-[#e85d38] rounded-full text-sm font-bold border border-[#e85d38]/20 hover:bg-[#e85d38] hover:text-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
>
  View All
  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
</a>
      </div>

      {/* POPUP HIỆN KHI HOVER */}
      {/* pointer-events-none là cực kỳ quan trọng để không làm nhấp nháy ảnh */}
      <div 
        className={`
          fixed inset-0 z-[9999] flex items-center justify-center 
          bg-black/60 backdrop-blur-[2px] pointer-events-none
          transition-opacity duration-300 ease-in-out
          ${hoveredItem ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div className="max-w-4xl w-[80%] transition-transform duration-500 ease-out transform">
          {hoveredItem && (
            <div className="relative animate-in zoom-in-90 duration-300">
              {hoveredItem.type === 'image' ? (
                <img 
                  src={hoveredItem.src} 
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20" 
                  alt="Preview"
                />
              ) : (
                <video 
                  src={hoveredItem.src} 
                  autoPlay muted loop
                  className="w-full h-auto max-h-[80vh] rounded-2xl shadow-2xl border border-white/20"
                />
              )}
              
              {/* Hiệu ứng viền phát sáng nhẹ cho popup */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent -z-10 blur-sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default ImageCollageWall;
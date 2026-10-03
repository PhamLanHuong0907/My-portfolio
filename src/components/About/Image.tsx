import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

import library1 from '@/assets/library1.png';
import smartdriver from '@/assets/taxi-pulse-pro - Cốc Cốc 2025-10-02 15-58-44.mp4';
import website from '@/assets/website3 (1).png';
import website1 from '@/assets/website1.png';
import admin from '@/assets/admin1.png';

interface CollageItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  badge: string;
}

const collageItems: CollageItem[] = [
  { id: 'admin', type: 'image', src: admin, title: 'Admin Management', badge: 'Dashboard' },
  { id: 'smartdriver', type: 'video', src: smartdriver, title: 'Taxi Pulse Pro', badge: 'Driver UI' },
  { id: 'website', type: 'image', src: website, title: 'Business Platform', badge: 'Landing Page' },
  { id: 'library1', type: 'image', src: library1, title: 'Library System', badge: 'Web App' },
  { id: 'website1', type: 'image', src: website1, title: 'Showcase Studio', badge: 'UI/UX' },
];

interface GridSlot {
  gridColumn: string;
  gridRow: string;
  isHero: boolean;
}

// 5 Cấu trúc Layout hoán đổi vị trí và kích thước linh hoạt, phủ kín ma trận 12x6 (72 ô)
const LAYOUT_PRESETS: GridSlot[][] = [
  // Preset 0: Hero Góc trên bên Trái (7 cột x 4 hàng)
  [
    { gridColumn: '1 / span 7', gridRow: '1 / span 4', isHero: true },
    { gridColumn: '8 / span 5', gridRow: '1 / span 3', isHero: false },
    { gridColumn: '8 / span 5', gridRow: '4 / span 3', isHero: false },
    { gridColumn: '1 / span 4', gridRow: '5 / span 2', isHero: false },
    { gridColumn: '5 / span 3', gridRow: '5 / span 2', isHero: false },
  ],
  // Preset 1: Hero Góc trên bên Phải (7 cột x 4 hàng)
  [
    { gridColumn: '6 / span 7', gridRow: '1 / span 4', isHero: true },
    { gridColumn: '1 / span 5', gridRow: '1 / span 3', isHero: false },
    { gridColumn: '1 / span 5', gridRow: '4 / span 3', isHero: false },
    { gridColumn: '6 / span 3', gridRow: '5 / span 2', isHero: false },
    { gridColumn: '9 / span 4', gridRow: '5 / span 2', isHero: false },
  ],
  // Preset 2: Hero Trung tâm Toàn Chiều Cao (6 cột x 6 hàng)
  [
    { gridColumn: '4 / span 6', gridRow: '1 / span 6', isHero: true },
    { gridColumn: '1 / span 3', gridRow: '1 / span 3', isHero: false },
    { gridColumn: '1 / span 3', gridRow: '4 / span 3', isHero: false },
    { gridColumn: '10 / span 3', gridRow: '1 / span 3', isHero: false },
    { gridColumn: '10 / span 3', gridRow: '4 / span 3', isHero: false },
  ],
  // Preset 3: Hero Góc dưới bên Phải (7 cột x 4 hàng)
  [
    { gridColumn: '6 / span 7', gridRow: '3 / span 4', isHero: true },
    { gridColumn: '1 / span 5', gridRow: '1 / span 3', isHero: false },
    { gridColumn: '1 / span 5', gridRow: '4 / span 3', isHero: false },
    { gridColumn: '6 / span 3', gridRow: '1 / span 2', isHero: false },
    { gridColumn: '9 / span 4', gridRow: '1 / span 2', isHero: false },
  ],
  // Preset 4: Hero Góc dưới bên Trái (7 cột x 4 hàng)
  [
    { gridColumn: '1 / span 7', gridRow: '3 / span 4', isHero: true },
    { gridColumn: '8 / span 5', gridRow: '1 / span 3', isHero: false },
    { gridColumn: '8 / span 5', gridRow: '4 / span 3', isHero: false },
    { gridColumn: '1 / span 4', gridRow: '1 / span 2', isHero: false },
    { gridColumn: '5 / span 3', gridRow: '1 / span 2', isHero: false },
  ],
];

const SWAP_INTERVAL_MS = 3800; // Thời gian chuyển vị trí tự động (3.8s)

const ImageCollageWall = () => {
  const [step, setStep] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<CollageItem | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Tự động xoay tua vị trí & kích thước liên tục
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % collageItems.length);
    }, SWAP_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  // Dọn dẹp hover timeout khi unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Chọn preset layout tương ứng với bước hiện tại
  const currentLayoutPreset = LAYOUT_PRESETS[step % LAYOUT_PRESETS.length];

  // Khi click vào 1 ô, ô đó sẽ được kích hoạt thành Hero ngay lập tức
  const handleItemClick = (itemIndex: number) => {
    setStep(itemIndex);
  };

  // Hover với độ trễ nhẹ (200ms) để di chuột lướt qua không làm chớp giật modal zoom
  const handleItemMouseEnter = (item: CollageItem) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(item);
    }, 200);
  };

  const handleItemMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredItem(null);
  };

  return (
    <div className="w-full h-full flex flex-col relative select-none">
      {/* Container Grid chính với animation layout tự động mượt mà */}
      <div className="flex-grow min-h-0 w-full grid grid-cols-12 grid-rows-6 gap-2 p-2 bg-white/60 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden relative">
        {collageItems.map((item, itemIndex) => {
          // Tính toán vị trí slot cho item: item nào trùng với step sẽ vào slot 0 (Hero)
          const slotIndex = (itemIndex - step + collageItems.length) % collageItems.length;
          const slot = currentLayoutPreset[slotIndex];

          return (
            <motion.div
              key={item.id}
              layout
              transition={{
                layout: {
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1], // Hiệu ứng cubic-bezier chuẩn iOS/macOS
                },
              }}
              style={{
                gridColumn: slot.gridColumn,
                gridRow: slot.gridRow,
              }}
              onClick={() => handleItemClick(itemIndex)}
              onMouseEnter={() => handleItemMouseEnter(item)}
              onMouseLeave={handleItemMouseLeave}
              className={`
                relative overflow-hidden group cursor-pointer rounded-2xl
                border border-white/60 bg-gray-900/5 shadow-sm
                hover:shadow-xl hover:z-20 transition-all duration-300
                ${slot.isHero ? 'ring-2 ring-[#e85d38]/40 shadow-md ring-offset-1' : ''}
              `}
            >
              {/* Media: Image hoặc Video */}
              {item.type === 'image' ? (
                <motion.img
                  layout
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                />
              ) : (
                <motion.video
                  layout
                  src={item.src}
                  className="w-full h-full object-cover pointer-events-none"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              )}

              {/* Lớp phủ gradient khi hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Tag nhãn hiển thị tên dự án */}
              <div 
                className={`
                  absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none
                  transition-all duration-300
                  ${slot.isHero ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0'}
                `}
              >
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white shadow-sm border border-white/10 max-w-[85%]">
                  <span className="text-[11px] font-medium truncate">{item.title}</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-[#e85d38] text-white rounded-full font-bold">
                    {item.badge}
                  </span>
                </div>

                {slot.isHero && (
                  <span className="flex h-2.5 w-2.5 relative mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e85d38] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e85d38]"></span>
                  </span>
                )}
              </div>

              {/* Icon phóng to góc trên khi hover */}
              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 text-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Maximize2 size={13} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
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

      {/* POPUP PREVIEW KHI HOVER */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 backdrop-blur-sm pointer-events-none"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-4xl w-[82%] relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/20 bg-gray-900">
                {hoveredItem.type === 'image' ? (
                  <img 
                    src={hoveredItem.src} 
                    className="w-full h-auto max-h-[78vh] object-contain" 
                    alt={hoveredItem.title}
                  />
                ) : (
                  <video 
                    src={hoveredItem.src} 
                    autoPlay 
                    muted 
                    loop
                    className="w-full h-auto max-h-[78vh] object-contain"
                  />
                )}

                {/* Banner thông tin bên dưới popup */}
                <div className="p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex justify-between items-center text-white absolute bottom-0 inset-x-0">
                  <div>
                    <h4 className="text-base font-bold">{hoveredItem.title}</h4>
                    <p className="text-xs text-white/70">{hoveredItem.badge}</p>
                  </div>
                  <span className="text-[11px] bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                    Preview
                  </span>
                </div>
              </div>

              {/* Viền phát sáng nhẹ */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#e85d38]/30 via-white/10 to-transparent -z-10 blur-md" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageCollageWall;
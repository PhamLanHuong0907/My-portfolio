import codingClub from '@/assets/coding club.jpg'
import environmental from '@/assets/volunteer.jpg'
import robotics from '@/assets/events.jpg'
import community from '@/assets/teambuilding.jpg'

const activities = [
  { src: codingClub, label: "Coding Club" },              
  { src: environmental, label: "Community Volunteer" },    
  { src: robotics, label: "Join in events" },            
  { src: community, label: "Team building" },         
];

const Activities = () => {
  return (
    <section id="activities" className="max-w-6xl mx-auto  py-16 relative mb-20">
      
      <div className="relative w-full mx-auto">
        
        {/* Lưới 2x2 */}
        <div className="grid grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {activities.map((act, index) => {
            const isTopRow = index < 2; 

            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl md:rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#e85d38]/10 flex flex-col overflow-hidden group hover:shadow-[0_8px_30px_rgba(232,93,56,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {isTopRow ? (
                  <>
                    <div className="w-full h-40 sm:h-56 md:h-72 lg:h-80 overflow-hidden bg-gray-50">
                      <img 
                        src={act.src} 
                        alt={act.label} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    {/* Đã thêm group-hover:text-[#e85d38] cho chữ */}
                    <div className="w-full py-4 sm:py-5 px-2 text-center bg-white border-t border-[#e85d38]/10 z-10 relative">
                      <span className="text-gray-800 font-bold text-sm sm:text-base md:text-lg lg:text-xl transition-colors duration-300 group-hover:text-[#e85d38]">{act.label}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full py-4 sm:py-5 px-2 text-center bg-white border-b border-[#e85d38]/10 z-10 relative">
                      <span className="text-gray-800 font-bold text-sm sm:text-base md:text-lg lg:text-xl transition-colors duration-300 group-hover:text-[#e85d38]">{act.label}</span>
                    </div>
                    <div className="w-full h-40 sm:h-56 md:h-72 lg:h-80 overflow-hidden bg-gray-50 flex-grow">
                      <img 
                        src={act.src} 
                        alt={act.label} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Vòng tròn trung tâm */}
        {/* Đã sửa màu viền border thành cam nhạt và đổ bóng tone cam */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 
                     w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60
                     bg-white rounded-full flex flex-col items-center justify-center 
                     shadow-[0_8px_30px_rgba(232,93,56,0.15)] border-[4px] sm:border-[8px] md:border-[10px] border-[#e85d38]/5"
        >
          {/* Sửa màu vạch gạch ngang thành màu cam đậm */}
         
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#e85d38] text-center leading-tight">
            My<br />Activities
          </h2>
        </div>

      </div>
    </section>
  );
};

export default Activities;
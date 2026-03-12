import avatar from '@/assets/avatar.png'

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto  w-full flex justify-between items-center py-6 bg-transparent">
      {/* Logo / Avatar & Name */}
      <div className="flex items-center gap-4 group cursor-pointer">
        <img 
          src={avatar} 
          alt="Profile Avatar" 
          className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-[#e85d38]/30 transition-all duration-300 shadow-sm"
        />
        <h1 className="text-2xl font-medium text-gray-800">
          Hi, I'm <span className="text-[#e85d38] font-bold">Huong</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-sm font-bold tracking-wider">
        <a href="#home" className="text-[#e85d38] transition-colors duration-300">HOME</a>
        <a href="#education" className="text-gray-500 hover:text-[#e85d38] transition-colors duration-300">EDUCATION</a>
        <a href="#experience" className="text-gray-500 hover:text-[#e85d38] transition-colors duration-300">EXPERIENCE</a>
        <a href="#projects" className="text-gray-500 hover:text-[#e85d38] transition-colors duration-300">PROJECTS</a>
        <a href="#activities" className="text-gray-500 hover:text-[#e85d38] transition-colors duration-300">ACTIVITIES</a>
      </div>
    </nav>
  );
};

export default Navbar;
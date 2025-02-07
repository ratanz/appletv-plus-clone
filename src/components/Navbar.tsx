import { Link } from "react-router-dom"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Main Navigation */}
      <nav className="h-[6vh] bg-[#000000f3] px-4 md:px-8">
        <div className="main-container flex justify-between md:justify-center items-center h-full">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

            <div className="main-container flex justify-center items-center gap-12">
          {/* Logo */}
          <div className="logo md:hidden">
            <Link to="/" className="text-white">
              <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`${isMenuOpen ? 'absolute top-[6vh] left-0 right-0 bg-[#000000f3] p-4' : 'hidden'} md:flex md:justify-center md:items-center md:space-x-10 md:gap-12`}>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-10">
              <div className="hidden md:block">
                <Link to="/" className="text-white">
                  <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                    <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
                  </svg>
                </Link>
              </div>

              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-[12px] text-white/90 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Search className="h-4 w-4 text-white/90 hover:text-white cursor-pointer" />
            <ShoppingBag className="h-4 w-4 text-white/90 hover:text-white cursor-pointer" />
          </div>
        </div>
        </div>
      </nav>

      {/* Apple TV+ Navigation */}
      <div className="flex h-10 px-4 md:px-10 justify-around bg-[#000000f3]">
        <div className="flex items-center justify-between px-2 w-full md:w-[70%]">
          <span className="text-lg md:text-xl font-semibold text-white">Apple TV+</span>
          <span className="text-[11px] md:text-[12px] text-black bg-white p-1 px-2 rounded-full">Stream now</span>
        </div>
      </div>
    </div>
  )
}

// Navigation links array
const navLinks = [
  { path: "/store", label: "Store" },
  { path: "/mac", label: "Mac" },
  { path: "/ipad", label: "iPad" },
  { path: "/iphone", label: "iPhone" },
  { path: "/watch", label: "Watch" },
  { path: "/airpods", label: "AirPods" },
  { path: "/tv-home", label: "TV & Home" },
  { path: "/entertainment", label: "Entertainment" },
  { path: "/accessories", label: "Accessories" },
  { path: "/support", label: "Support" },
];


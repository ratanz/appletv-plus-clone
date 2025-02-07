import { Link } from "react-router-dom"
import { Search, ShoppingBag } from "lucide-react"

export default function Navbar() {
  return (
    <div className="w-full">
      {/* Main Navigation */}
      <nav className=" h-[6vh] bg-[#000000f3] px-8">

        <div className="main-container flex justify-center items-center gap-12">

        <div className="flex justify-center items-center space-x-10">
           
            <div className="logo">
            <Link to="/" className="text-white">
            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="fill-current">
              <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
            </svg>
          </Link>
            </div>

          <Link to="/store" className="text-[12px] text-white/90 hover:text-white">
            Store
          </Link>
          <Link to="/mac" className="text-[12px] text-white/90 hover:text-white">
            Mac
          </Link>
          <Link to="/ipad" className="text-[12px] text-white/90 hover:text-white">
            iPad
          </Link>
          <Link to="/iphone" className="text-[12px] text-white/90 hover:text-white">
            iPhone
          </Link>
          <Link to="/watch" className="text-[12px] text-white/90 hover:text-white">
            Watch
          </Link>
          <Link to="/airpods" className="text-[12px] text-white/90 hover:text-white">
            AirPods
          </Link>
          <Link to="/tv-home" className="text-[12px] text-white/90 hover:text-white">
            TV & Home
          </Link>
          <Link to="/entertainment" className="text-[12px] text-white/90 hover:text-white">
            Entertainment
          </Link>
          <Link to="/accessories" className="text-[12px] text-white/90 hover:text-white">
            Accessories
          </Link>
          <Link to="/support" className="text-[12px] text-white/90 hover:text-white">
            Support
          </Link>
        </div>
        <div className="flex items-center space-x-10">
          <Search className="h-4 w-4 text-white/90 hover:text-white cursor-pointer" />
          <ShoppingBag className="h-4 w-4 text-white/90 hover:text-white cursor-pointer" />
        </div>

        </div>
      </nav>

      {/* Apple TV+ Navigation */}
      <div className="flex h-10 px-10 justify-around bg-[#000000f3]">
       
        <div className="flex items-center justify-between px-2 w-[70%]">
          <span className="text-xl font-semibold text-white">Apple TV+</span>
          <span className="text-[12px] text-black bg-white p-1 px-2 rounded-full">Stream now</span>
          </div>
      </div>
    </div>
  )
}


import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Logo from '../assets/logo.png'
import { Menu,Search, ShoppingCart, CircleUserRound} from 'lucide-react'
import { useAuthStore } from '../store/UseAuthStore'


const Navbar = () => {
  const [open, setOpen] = React.useState(false)
    const {authUser, isCheckingAuth, setAuthUser} = useAuthStore()
    const navigate = useNavigate();
    const logout = () => {
        setAuthUser(null)
        navigate('/')
    }
  
  return (
      <nav className="flex bg-secondary items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 relative transition-all z-10">

          <Link to={'/'}> <img className="w-30" src={Logo} alt="logo" /></Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8">
              <Link to={'/'} onClick={()=>setOpen(false)} className="text-fortext hover:text-primary transition">Home</Link>

              <Link to={'/products'}>All Product</Link>
              {authUser?(<Link to={'/myorder'}>My Orders</Link>):null}

              <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                  <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                     <Search className='size-6'/>
              </div>

              <div className="relative cursor-pointer">
                 <ShoppingCart onClick={()=>navigate('/cart')} className='size-8 text-fortext'/>
                  <button  className="absolute -top-2 -right-3 text-xs text-secondary bg-tertiary w-[20px] h-[20px] rounded-full">3</button>
              </div>

            {!authUser?( <button onClick={()=>navigate('/login')} className="cursor-pointer px-8 py-2 bg-primary hover:bg-tertiary transition text-secondary rounded-md">
                  Login
              </button>):
              (
                <div className="relative group">
                    <CircleUserRound className='w-10 size-10 text-fortext' />
                <ul className="absolute top-10 right-0 bg-white shadow-md border border-gray-200 rounded-md py-2.5 text-sm w-30 z-40 hidden group-hover:block">
                    <li
                        className="pl-3 py-1.5 hover:bg-gray-100 cursor-pointer"
                        onClick={() => navigate('/profile')}
                    >
                        Profile
                    </li>
                    <li
                        className="pl-3 py-1.5 hover:bg-gray-100 cursor-pointer"
                        onClick={logout}
                    >
                        Logout
                    </li>
                </ul>
            </div>
            
              )
               }
          </div>

          <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
           <Menu/>
          </button>

          {/* Mobile Menu */}
          <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-secondary shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
          <Link to={'/'} onClick={()=>setOpen(false)} className="text-fortext hover:text-primary transition">Home</Link>

            <Link to={'/products'}>All Product</Link>
            {authUser?(<Link to={'/myorder'}>My Orders</Link>):null}

            <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                <Search className='size-6'/>
            </div>

            <div className="relative cursor-pointer">
            <ShoppingCart onClick={()=>navigate('/cart')} className='size-8 text-fortext'/>
                <button  className="absolute -top-2 -right-3 text-xs text-secondary bg-tertiary w-[20px] h-[20px] rounded-full">3</button>
            </div>

            {!authUser?( <button onClick={()=>navigate('/login')} className="cursor-pointer px-8 py-2 bg-primary hover:bg-tertiary transition text-secondary rounded-md">
                Login
            </button>):
            (
            <div className="relative group">
                <CircleUserRound className='w-10 size-10 text-fortext' />
            <ul className="absolute top-10 right-0 bg-white shadow-md border border-gray-200 rounded-md py-2.5 text-sm w-30 z-40 hidden group-hover:block">
                <li
                    className="pl-3 py-1.5 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate('/profile')}
                >
                    Profile
                </li>
                <li
                    className="pl-3 py-1.5 hover:bg-gray-100 cursor-pointer"
                    onClick={logout}
                >
                    Logout
                </li>
            </ul>
            </div>

            )
            }
          </div>

      </nav>
  )
}

export default Navbar;

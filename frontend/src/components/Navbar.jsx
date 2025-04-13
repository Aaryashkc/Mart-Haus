import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Logo from '../assets/logo.png'
import { Menu,Search, ShoppingCart, User} from 'lucide-react'
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
      <nav className="flex bg-secondary items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 relative transition-all">

          <Link to={'/'}> <img className="w-30" src={Logo} alt="logo" /></Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8">
              <Link to={'/'}>Home</Link>
              <Link to={'/products'}>All Product</Link>
              {authUser?(<Link to={'/myorder'}>My Orders</Link>):null}
              <Link to={'/contact'}>Contact</Link>
              <Link to={'/profile'}>Profile</Link>

              <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                  <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                     <Search className='size-6'/>
              </div>

              <div className="relative cursor-pointer">
                 <ShoppingCart/>
                  <button className="absolute -top-2 -right-3 text-xs text-secondary bg-primary w-[18px] h-[18px] rounded-full">3</button>
              </div>

            {!authUser?( <button onClick={()=>navigate('/login')} className="cursor-pointer px-8 py-2 bg-primary hover:bg-tertiary transition text-secondary rounded-md">
                  Login
              </button>):
              (
                <div className="relative cursor-pointer">
                    <User/>
                    <ul>
                        <li>profile</li>
                        <li onClick={logout}>logout</li>
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
              <Link className='block' onClick={()=> setOpen(false)} to={'/'}>Home</Link>
              <Link className='block'  onClick={()=> setOpen(false)} to={'/products'}>All Product</Link>
              {authUser?( <Link className='block'  onClick={()=> setOpen(false)} to={'/myorder'}>My Orders</Link>):null}
              <Link className='block'  onClick={()=> setOpen(false)} to={'/contact'}>Contact</Link>
              <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-tertiary transition text-secondary rounded-md text-sm">
                  Login
              </button>
          </div>

      </nav>
  )
}

export default Navbar;

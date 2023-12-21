
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/excelRemainning.png'
import { CiCircleChevDown } from "react-icons/ci";
import './NavBar.css'
import { useContext, useState } from 'react';
import { AuthContexts } from '../../Contexts/Contexts';
import { toast } from 'react-toastify';
// import useAdmin from '../../Hooks/useAdmin';
// import useCheck from '../../Hooks/useCheck';

const NavBar = () => {
    const [open, setOpen] = useState(true)
    const { user, LogOut } = useContext(AuthContexts)
    // const [Admin] = useAdmin(user?.email)
    // const [check] = useCheck(user?.email)

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast.success('LogOut SuccessFull !!!')
                console.log('logged out')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='print:hidden' style={{ position: "sticky", top: 0, zIndex: 100 }}>
            <div className="navbar bg-white lg:ps-24 md:ps-16 ps-6 py-4">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="md:h-12 h-8 md:w-12 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" onClick={() => setOpen(prev => !prev)} /></svg>
                        </label>
                        {open &&
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <ul className="menu menu-vertical px-1">
                                    <div className='px-3 rounded-0 mt-2'><NavLink to='/' className='border-separate hover:border-b-2 hover:border-orange-500  font-semibold' onClick={() => setOpen(prev => !prev)}>HOME</NavLink>
                                    </div>

                                    <div className="dropdown dropdown-hover mt-1 ">
                                        <label tabIndex={0} className=" m-1 bg-white flex border-separate hover:border-b-2 border-orange-500 font-semibold px-2">PRODUCTS <span ><CiCircleChevDown className=' w-6 h-5 text-3xl'></CiCircleChevDown></span></label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-64 ms-24">
                                            <li className='hover:bg-orange-500 hover:text-white ' onClick={() => setOpen(prev => !prev)}><Link to='/image' >Photo Room</Link ></li>
                                            <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/excel' >Excel Tools</Link ></li>
                                            <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/bar&qr' >Bar & Qr Code Generator</Link ></li>
                                            <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/speechtotext' >Speech to Text convertor</Link ></li>
                                            <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/cardmaker' >Card Maker</Link ></li>
                                            <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/typespeed' >Type Speed Tet</Link ></li>
                                            <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/invoice' >Invoice Generate</Link ></li>
                                            <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/database' >Database Service</Link ></li>
                                            <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/database2' >Database Upgrade</Link ></li>
                                        </ul>
                                    </div>
                                    <div className='px-3 rounded-0 mt-2'><NavLink to='/blog' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold' onClick={() => setOpen(prev => !prev)}>BLOG</NavLink></div>
                                    <div className='px-3 rounded-0 mt-2'><NavLink to='/contact' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold' onClick={() => setOpen(prev => !prev)}>CONTACT</NavLink></div>
                                    <div className='px-3 rounded-0 mt-2'><NavLink to='/about' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold' onClick={() => setOpen(prev => !prev)}>ABOUT</NavLink></div>

                                    {user ? <>
                                        <div className='px-3 rounded-0 mt-2'><NavLink className='border-separate  hover:border-b-2 hover:border-orange-500 font-semibold ' to='/dashboard'>DASHBOARD</NavLink></div>
                                        <li className=' px-3 text-2xl lg:visible invisible lg:h-1 h-0'> | </li>
                                        <div className='px-3 rounded-0 mt-2'><Link className='border-separate  hover:border-b-2 hover:border-orange-500 font-semibold ' onClick={handleLogOut}>LOGOUT</Link></div>
                                    </> : <>
                                        <li className=' px-3 text-2xl lg:visible invisible lg:h-[1px] h-0'> | </li>
                                        <div className='px-3 rounded-0 mt-2'><NavLink to='/login' className='border-separate  hover:border-b-2 hover:border-orange-500 font-semibold '>LOGIN</NavLink></div>
                                        <div className='px-3 rounded-0 mt-2'><NavLink to='/register' className='border-separate  hover:border-b-2 hover:border-orange-500 font-semibold '>REGISTER</NavLink></div>
                                    </>}
                                </ul>
                            </ul>
                        }
                    </div>

                    <div className='flex justify-center items-center gap-2 px-4'>
                        <img src={logo} alt="" className='h-16 w-16 rounded-full ps-2' />
                        <div>
                            <h3 className='text-4xl  font-bold '> SmartWork</h3>
                            <p className='text-xs'>Do Work With Easiest Way</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center lg:pe-4 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='px-3 rounded-0 mt-2'><NavLink to='/' className='border-separate hover:border-b-2 hover:border-orange-500  font-semibold'>HOME</NavLink></div>
                        <div className="dropdown dropdown-hover mt-1 px-3">
                            <label tabIndex={0} className=" m-1 bg-white flex border-separate hover:border-b-2 border-orange-500 font-semibold " onClick={() => setOpen(prev => !prev)}>PRODUCTS <span ><CiCircleChevDown className=' w-6 h-5 text-3xl'></CiCircleChevDown></span></label>
                            {open &&
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-64 font-semibold">
                                    <li className='hover:bg-orange-500 hover:text-white ' onClick={() => setOpen(prev => !prev)}><Link to='/image' className='hover:text-white'>Photo Room</Link ></li>
                                    <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/excel' className='hover:text-white'>Excel Tools</Link ></li>
                                    <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/bar&qr' className='hover:text-white'>Bar & Qr Code Generator</Link ></li>
                                    <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/speechtotext' className='hover:text-white'>Speech to Text convertor</Link ></li>
                                    <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/cardmaker' className='hover:text-white'>Card Maker</Link ></li>
                                    <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/typespeed' className='hover:text-white'>Type Speed Tet</Link ></li>
                                    <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/invoice' className='hover:text-white'>Invoice Generate</Link ></li>
                                    <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/database' className='hover:text-white'>Database Service</Link ></li>
                                    <li className='hover:bg-orange-500 hover:text-white' onClick={() => setOpen(prev => !prev)}><Link to='/database2' className='hover:text-white'>Database Upgrade</Link ></li>
                                </ul>
                            }
                        </div>
                        <div className='px-3 rounded-0 mt-2'><NavLink to='/blog' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold'>BLOG</NavLink></div>
                        <div className='px-3 rounded-0 mt-2'><NavLink to='/contact' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold'>CONTACT</NavLink></div>
                        <div className='px-3 rounded-0 mt-2'><NavLink to='/about' className='border-separate   hover:border-b-2 hover:border-orange-500  font-semibold'>ABOUT</NavLink></div>

                        {user ? <>
                            <div className='px-3 rounded-0 mt-2'><NavLink className='border-separate  hover:border-b-2 hover:border-orange-500 font-semibold ' to='/dashboard'>DASHBOARD</NavLink></div>
                            <li className=' px-3 text-2xl'> | </li>
                            <div className='px-3 rounded-0 mt-2'><Link className='border-separate  hover:border-b-2 hover:border-orange-500 font-semibold ' onClick={handleLogOut}>LOGOUT</Link></div>
                        </> : <>
                            <li className=' px-3 text-2xl'> | </li>
                            <div className='px-3 rounded-0 mt-2'><NavLink to='/login' className='border-separate  hover:border-b-2 hover:border-orange-500 font-semibold '>LOGIN</NavLink></div>
                            <div className='px-3 rounded-0 mt-2'><NavLink to='/register' className='border-separate  hover:border-b-2 hover:border-orange-500 font-semibold '>REGISTER</NavLink></div>
                        </>}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;
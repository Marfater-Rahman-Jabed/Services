import { Link, Outlet } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import person from '../../assets/database.jpg'
import { useContext } from "react";
import { AuthContexts } from "../../Contexts/Contexts";
// import { useQuery } from "@tanstack/react-query";
// import Footer from "../../Components/Footer/Footer";

const DashboardLayout = () => {
    const { userData } = useContext(AuthContexts)


    // useEffect(() => {
    //     fetch(`https://pdf-to-excel-server.vercel.app/user/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserData((data))
    //         })
    // }, [user?.email])
    // // refetch(`https://pdf-to-excel-server.vercel.app/user/${user?.email}`)
    // console.log(userData)

    return (
        <div className="">

            <NavBar></NavBar>
            <div className="drawer drawer-mobile lg:drawer-open">
                <input id="Dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">


                    <Outlet></Outlet>

                </div>
                {/* className='hover:bg-Blue-700' */}
                <div className="drawer-side ">
                    <label htmlFor="Dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-60 w-56   bg-slate-500  lg:mt-0 md:mt-20 mt-24 text-white ">

                        <div>
                            <div className="avatar flex justify-center pt-2 pb-1">
                                <div className="  w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={userData ? userData?.photo : person} />

                                </div>
                            </div>
                            <h3 className="text-white text-sm text-center">{userData?.userName}</h3>
                            <h3 className="text-white text-sm text-center">ID: {userData?._id}</h3>
                        </div>
                        {/* <div className=" avatar">
                            <img src={person} alt="" className="w-36 h-36 rounded-full mt-4 mb-2  ring ring-primary" />
                        </div> */}

                        <Link to='/database/createtemplate' className="  font-serif text-xl px-3 py-1  hover:text-white hover:bg-primary rounded-lg mt-8 lg:text-justify">Create Template</Link>
                        <Link to='/database/uploadData' className="  font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">Manual Upload</Link>
                        <Link to='/database' className="  font-serif text-xl px-3 py-1 mt-1   hover:text-white hover:bg-primary rounded-lg lg:text-justify">All Manual Data</Link>
                        <Link to='/database/todaysData' className="  font-serif text-xl px-3 py-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">Today&apos;s Data</Link>
                        <Link to='/database/thismonthData' className="  font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">This Month Data</Link>

                        <Link to='/database/thisYearData' className="  font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">This Year&apos;s Data</Link>
                        <Link to='/database/previosYear' className=" font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">Previous Year Data</Link>
                        <Link to='/database/uploadFromExcel' className=" font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">Excel Upload  </Link>
                        <Link to='/database/allExcelData' className=" font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">All Excel Data</Link>
                        <Link to='/excel' className=" font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">Calculate With Excel</Link>




                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
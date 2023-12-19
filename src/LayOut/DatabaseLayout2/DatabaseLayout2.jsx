import { Link, Outlet } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import person from '../../assets/database.jpg'
import { useContext, useEffect } from "react";
import { AuthContexts } from "../../Contexts/Contexts";
// import { useQuery } from "@tanstack/react-query";
// import Footer from "../../Components/Footer/Footer";
import { GiArmorUpgrade } from "react-icons/gi";
const DatabaseLayout2 = () => {
    const { user, userData, userFetchData } = useContext(AuthContexts)


    useEffect(() => {
        userFetchData()
    }, [user?.email])
    // refetch(`http://localhost:5000/user/${user?.email}`)
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
                            <div className="avatar  flex justify-center pt-2 pb-1">
                                <div className="  w-32 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                    <img src={userData ? userData?.photo : person} />

                                </div>
                            </div>
                            <h3 className="text-white text-sm text-center">{userData?.userName}</h3>
                            <h3 className="text-white text-sm text-center">ID: {userData?._id}</h3>
                            <p className="text-white text-sm flex justify-center ">Available Storage: <span className="flex justify-center gap-1"><span className="font-bold "> <strong>{userData?.storage?.toFixed(2)}</strong> KB</span>  <span className="tooltip tooltip-left tooltip-secondary" data-tip="Upgrade Storage" ><Link to='/database/upgrade'><GiArmorUpgrade className="text-2xl animate-pulse "></GiArmorUpgrade></Link></span></span></p>
                        </div>
                        {/* <div className=" avatar">
                            <img src={person} alt="" className="w-36 h-36 rounded-full mt-4 mb-2  ring ring-primary" />
                        </div> */}

                        <Link to='/database2/createtemplate' className="  font-serif text-xl px-3 py-1  hover:text-white hover:bg-primary rounded-lg mt-8 lg:text-justify">Create Template</Link>
                        <Link to='/database2/uploadData' className="  font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">Manual Upload</Link>
                        <Link to='/database2' className="  font-serif text-xl px-3 py-1 mt-1   hover:text-white hover:bg-primary rounded-lg lg:text-justify">All Manual Data</Link>
                        {/* <Link to='/database/todaysData' className="  font-serif text-xl px-3 py-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">Today&apos;s Data</Link>
                        <Link to='/database/thismonthData' className="  font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">This Month Data</Link>

                        <Link to='/database/thisYearData' className="  font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">This Year&apos;s Data</Link>
                        <Link to='/database/previosYear' className=" font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">Previous Year Data</Link>
                        <Link to='/database/uploadFromExcel' className=" font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">Excel Upload  </Link>
                        <Link to='/database/allExcelData' className=" font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">All Excel Data</Link>
                        <Link to='/excel' className=" font-serif text-xl px-3 py-1 mt-1  hover:text-white hover:bg-primary rounded-lg lg:text-justify">Calculate With Excel</Link> */}




                    </ul>

                </div>
            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DatabaseLayout2;
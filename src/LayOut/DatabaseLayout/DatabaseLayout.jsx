import { Link, Outlet } from "react-router-dom";
import NavBar from "../../Component/Card/NavBar/NavBar";
import person from '../../assets/database.jpg'
// import Footer from "../../Components/Footer/Footer";

const DashboardLayout = () => {

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
                    <ul className="menu p-4 lg:w-60 w-48  h-full bg-slate-500  lg:mt-0 md:mt-20 mt-20 text-white ">

                        <div className="avatar flex justify-center pt-4 pb-1">
                            <div className="  w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={person} />
                            </div>
                        </div>
                        {/* <div className=" avatar">
                            <img src={person} alt="" className="w-36 h-36 rounded-full mt-4 mb-2  ring ring-primary" />
                        </div> */}

                        <Link to='/dashboard/allOrders ' className="  font-serif text-xl px-3 py-2 mt-6  hover:text-white hover:bg-primary rounded-lg">All  Data</Link>
                        <Link to='/dashboard/allOrders ' className="  font-serif text-xl px-3 py-2  hover:text-white hover:bg-primary rounded-lg">Today&apos;s Data</Link>
                        <Link to='/dashboard' className="  font-serif text-xl px-3 py-2 mt-2  hover:text-white hover:bg-primary rounded-lg">This Month Data</Link>

                        <Link to='/dashboard/allReview' className="  font-serif text-xl px-3 py-2 mt-2  hover:text-white hover:bg-primary rounded-lg">This Year&apos;s Data</Link>
                        <Link to='/dashboard/allReview' className=" font-serif text-xl px-3 py-2 mt-2  hover:text-white hover:bg-primary rounded-lg">Previous Year Data</Link>
                        <Link to='/dashboard/allReview' className="  font-serif text-xl px-3 py-2 mt-2  hover:text-white hover:bg-primary rounded-lg">Upload Data</Link>
                        <Link to='/database/createtemplate' className="  font-serif text-xl px-3 py-2 mt-2  hover:text-white hover:bg-primary rounded-lg">Create Template</Link>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
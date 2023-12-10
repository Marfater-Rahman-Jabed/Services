import { Link, Outlet } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import person from '../../assets/database.jpg'
import { useContext } from "react";
import { AuthContexts } from "../../Contexts/Contexts";
import { useQuery } from "@tanstack/react-query";
// import Footer from "../../Components/Footer/Footer";

const DashboardLayout = () => {
    const { user } = useContext(AuthContexts)
    // const [loading, setLoading] = useState(false)
    const { data: userData = [], } = useQuery({
        queryKey: ['userDatas'],
        queryFn: async () => {
            // setLoading(true)
            const res = await fetch(`http://localhost:5000/user/${user?.email}`)
            const data = res.json()
            // setLoading(false)
            return data;
        }
    })
    // refetch(`http://localhost:5000/user/${user?.email}`)
    console.log(userData)

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

                        <Link to='/database/createtemplate' className="  font-serif text-xl px-3 py-2  hover:text-white hover:bg-primary rounded-lg mt-6 text-justify">Create Template</Link>
                        <Link to='/database/uploadData' className="  font-serif text-xl px-3 py-2 mt-2  hover:text-white hover:bg-primary rounded-lg text-justify">Upload Data</Link>
                        <Link to='/database' className="  font-serif text-xl px-3 py-2 mt-2   hover:text-white hover:bg-primary rounded-lg text-justify">All  Data</Link>
                        <Link to='/dashboard/allOrders ' className="  font-serif text-xl px-3 py-2  hover:text-white hover:bg-primary rounded-lg text-justify">Today&apos;s Data</Link>
                        <Link to='/dashboard' className="  font-serif text-xl px-3 py-2 mt-2  hover:text-white hover:bg-primary rounded-lg text-justify">This Month Data</Link>

                        <Link to='/dashboard/allReview' className="  font-serif text-xl px-3 py-2 mt-2  hover:text-white hover:bg-primary rounded-lg text-justify">This Year&apos;s Data</Link>
                        <Link to='/dashboard/allReview' className=" font-serif text-xl px-3 py-2 mt-2  hover:text-white hover:bg-primary rounded-lg text-justify">Previous Year Data</Link>




                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
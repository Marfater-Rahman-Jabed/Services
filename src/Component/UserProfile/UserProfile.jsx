import { useContext } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { AuthContexts } from "../../Contexts/Contexts";
import { FaRegIdCard } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";


import person from '../../assets/mask.png'
import { Link } from "react-router-dom";
import { GiArmorUpgrade } from "react-icons/gi";
const UserProfile = () => {
    const { userData } = useContext(AuthContexts)
    // console.log(userData)
    return (
        <div className="py-6 bg-slate-900 mx-2 px-10 border-2 border-yellow-300 rounded-lg flex justify-center items-center gap-28">
            <div className="flex justify-center items-center gap-6">
                <div className=''>
                    <div className="avatar  flex justify-center pt-2 pb-1">
                        <div className="  w-44 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                            <img src={userData ? userData?.photo : person} />

                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center gap-3">

                        <span className="flex flex-col gap-1">
                            <FaUserCircle className="text-white text-2xl"></FaUserCircle>
                            <IoIosMail className="text-white text-2xl"></IoIosMail>
                            <FaPhoneSquareAlt className="text-white text-2xl"></FaPhoneSquareAlt>
                            <MdAddLocationAlt className="text-white text-2xl "></MdAddLocationAlt>
                            <FaRegIdCard className="text-white text-2xl "></FaRegIdCard>

                        </span>
                        <span >

                            <h3 className="text-xl text-white ">Name </h3>
                            <h3 className="text-xl text-white ">Email </h3>
                            <h3 className="text-xl text-white ">Phone </h3>
                            <h3 className="text-xl text-white ">Address </h3>
                            <h3 className="text-xl text-white ">Account No. </h3>
                        </span>

                    </div>
                    <div>
                        <p className="text-xl text-white ">: {userData?.userName}</p>
                        <p className="text-xl text-white ">: {userData?.email}</p>
                        <p className="text-xl text-white ">: {userData?.phone}</p>
                        <p className="text-xl text-white ">: {userData?.address}</p>
                        <p className="text-xl text-white ">: {userData?._id}</p>
                    </div>

                </div>
            </div>
            <div className='w-40 h-40'>
                <CircularProgressbarWithChildren value={(userData?.storage * 100) / 1024} >
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    {/* <img style={{ width: 60, marginTop: -5 }} src={userData?.photo} alt="doge" className='rounded-full' /> */}
                    {/* <h3>Number Of Column Contain</h3> */}
                    <div>
                        <h3 className="text-sm text-white">Available</h3>
                    </div>
                    <div style={{ fontSize: 12, }} className='text-white '>
                        <strong className="font-bold">{userData?.storage?.toFixed(2)} KB</strong>
                    </div>
                    <div>
                        <h3 className="text-sm text-white">Storage</h3>
                    </div>
                    <span className="tooltip tooltip-left tooltip-secondary" data-tip="Upgrade Storage" ><Link to='/database2/upgrade'><GiArmorUpgrade className="text-2xl animate-pulse text-white"></GiArmorUpgrade></Link></span>

                </CircularProgressbarWithChildren>
            </div>

        </div>
    );
};

export default UserProfile;
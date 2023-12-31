import { useContext, useEffect, useRef } from "react";
import { AuthContexts } from "../../../Contexts/Contexts";
import { DownloadTableExcel } from "react-export-table-to-excel";

const ThisYear = () => {
    const { findData, userData } = useContext(AuthContexts)

    const todayDate = new Date().toString().slice(11, 15)
    console.log(todayDate)
    const tableRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <label htmlFor="Dashbord-drawer" className="drawer-button btn  lg:hidden  flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="flex justify-between px-3  py-2">

                {/* <div className="flex justify-center">
                    <CiSearch className="text-5xl -ps-4 text-secondary"></CiSearch>
                    <input type="text" placeholder="Search " className="input input-bordered input-secondary w-80 rounded-3xl " onChange={(e) => setSearchData(e.target.value)} />

                </div> */}
                <p className="text-3xl font-bold text-center">Year&apos;s ({todayDate}) Uploaded Data List</p>
                <DownloadTableExcel
                    filename="This Year Data table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                    <button className="btn btn-primary"> Export To Excel </button>

                </DownloadTableExcel>



            </div>
            <div className="text-center">
                <div className="overflow-x-auto py-2">
                    <table className="table table-zebra" ref={tableRef}>
                        {/* head */}
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th>Sl No.</th>
                                {
                                    userData?.colName?.map((col, i) => <th key={i}>{col}</th>)
                                }


                            </tr>
                        </thead>
                        <tbody>
                            {
                                findData.filter(data => data.date.slice(11, 15) === todayDate).map((data, i) => <tr key={i} className="hover">
                                    <td>{i + 1}</td>
                                    {
                                        Object.values(data?.data).map((dat, i) => <td key={i}> {dat}</td>)
                                    }



                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ThisYear;
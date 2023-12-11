import { useContext, useEffect, useRef } from "react";
import { AuthContexts } from "../../../Contexts/Contexts";
import { DownloadTableExcel } from "react-export-table-to-excel";

const PreviousYear = () => {
    const { findData, userData } = useContext(AuthContexts)

    const todayDate = new Date().toString().slice(11, 15)
    console.log(todayDate)
    const tableRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className="flex justify-between px-3  py-2">

                {/* <div className="flex justify-center">
                    <CiSearch className="text-5xl -ps-4 text-secondary"></CiSearch>
                    <input type="text" placeholder="Search " className="input input-bordered input-secondary w-80 rounded-3xl " onChange={(e) => setSearchData(e.target.value)} />

                </div> */}
                <p className="text-3xl font-bold text-center">Year&apos;s ({parseInt(todayDate) - 1}) Uploaded Data List</p>
                <DownloadTableExcel
                    filename="Previous Year Data table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                    <button className="btn btn-primary"> Export To Excel </button>

                </DownloadTableExcel>



            </div>
            <div className="text-center">
                <div className=" py-2">
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
                                findData.filter(data => data.date.slice(11, 15) < todayDate).map((data, i) => <tr key={i} className="hover">
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

export default PreviousYear;
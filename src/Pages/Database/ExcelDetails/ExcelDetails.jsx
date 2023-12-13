import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useLoaderData } from "react-router-dom";

const ExcelDetails = () => {
    // const location = useLocation()
    // const { from } = location.state
    const ExcelDetails = useLoaderData()
    console.log(ExcelDetails[0])
    // const alphabet = [
    //     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    // ]
    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: `${ExcelDetails[0].SheetName}`,
        sheet: 'Users'
    })
    return (
        <div className="px-1 min-h-screen">
            <label htmlFor="Dashbord-drawer" className="drawer-button btn  lg:hidden  flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="flex justify-between">
                <h3 className="text-3xl font-bold text-center py-3">Sheet Name: {ExcelDetails[0]?.SheetName}</h3>


                <button className="btn btn-primary" onClick={onDownload}> Export To Excel </button>


            </div>
            <table className="table table-zebra" ref={tableRef}>
                <thead className="bg-slate-400 text-white font-bold">

                    <tr>
                        {ExcelDetails[0]?.colName.map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {
                        ExcelDetails[0]?.newData.map((row, index) => (
                            <tr key={index} className="hover">

                                {
                                    Object.values(row).map((value, index) => (

                                        <td key={index}>
                                            {value}

                                        </td>
                                    ))
                                }

                            </tr>
                        ))
                    }

                </tbody>
            </table>



            <footer className="bg-slate-500 text-white text-center sticky top-[100vh] py-5 mb-0 mt-6">Developed By Marfater Rahman Jabed</footer>

        </div>
    );
};

export default ExcelDetails;
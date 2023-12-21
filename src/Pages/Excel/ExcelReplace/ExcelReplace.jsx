// import { useContext, useState } from "react";
// // import { Link } from "react-router-dom";
// import * as XLSX from "xlsx"

import { useEffect } from "react";

// import { AuthContexts } from "../../../Contexts/Contexts";
const ExcelReplace = () => {
    // const alphabet = [
    //     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    // ]
    // const { user } = useContext(AuthContexts)
    // const [data, setData] = useState([]);

    // const newData = data?.slice(1);

    // // console.log()

    // const handleUpload = (e) => {
    //     const reader = new FileReader();
    //     reader.readAsBinaryString(e.target.files[0]);
    //     reader.onload = (e) => {
    //         const data = e.target.result;
    //         // const readOpts = { // <--- need these settings in readFile options
    //         //     cellText: false,
    //         //     cellDates: true
    //         // };

    //         const jsonOpts = {
    //             header: 1,
    //             defval: '',
    //             blankrows: true,
    //             raw: false,
    //             dateNF: 'd"/"m"/"yyyy' // <--- need dateNF in sheet_to_json options (note the escape chars)
    //         }
    //         const workbook = XLSX.read(data, { type: "binary" });
    //         const sheetName = workbook.SheetNames[0];
    //         const sheet = workbook.Sheets[sheetName];
    //         const parseData = XLSX.utils.sheet_to_json(sheet, jsonOpts);
    //         setData(parseData);
    //     }
    // }

    // const handleExcelUplaod = () => {
    //     const colName = data[0];
    //     const uploadedData = {
    //         clientEmail: user?.email,
    //         colName,
    //         newData

    //     }
    //     console.log(uploadedData)
    // }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="px-1 min-h-screen">

            <div className='flex justify-center items-center h-full py-36 '>
                <div className='flex justify-center items-center h-full'>
                    <p className='text-7xl font-bold dark:text-white'>C</p>
                    <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-purple-700 dark:border-yellow-400'> </p>
                    <p className='text-7xl font-bold dark:text-white'>mingS</p>
                    <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-purple-700 dark:border-yellow-400  mx-1'> </p>
                    <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-purple-700 dark:border-yellow-400'> </p>
                    <p className='text-7xl font-bold dark:text-white'>n</p>
                    <p className='border-4 mt-10 border-purple-700 dark:border-yellow-400 border-dotted  animate-pulse mx-1'></p>
                    <p className='border-4 mt-10 border-purple-700 dark:border-yellow-400 border-dotted  animate-pulse mx-1'></p>
                    <p className='border-4 mt-10 border-purple-700 dark:border-yellow-400  border-dotted  animate-pulse mx-1'></p>
                    <p className='border-4 mt-10 border-purple-700 dark:border-yellow-400 border-dotted  animate-pulse mx-1'></p>

                </div>

            </div>


            {/* <div className="px-2 py-6 flex justify-between gap-4">

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Select your File</span>

                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" accept=".xlsx, .xls" onChange={handleUpload} />
                </div>

            </div>
            <div className="py-2 flex justify-end ">

                <button className="btn btn-primary w-full max-w-xs" onClick={handleExcelUplaod}>Upload Data</button>
            </div>
            <input type="file" accept=".xlsx, .xls" onChange={handleUpload} /> */}




            <footer className="bg-slate-500 text-white text-center sticky top-[100vh] py-5 mb-0 mt-6">Developed By Marfater Rahman Jabed</footer>

        </div>
    );
};

export default ExcelReplace;
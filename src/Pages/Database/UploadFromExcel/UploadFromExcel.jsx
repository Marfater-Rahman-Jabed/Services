import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import * as XLSX from "xlsx"
import { AuthContexts } from "../../../Contexts/Contexts";
import { toast } from "react-toastify";
import Spinner from "../../../Component/Spinner/Spinner";
const UploadFromExcel = () => {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    const { user, } = useContext(AuthContexts)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [stayData, setStayData] = useState(false);
    // const [loading, setStayData] = useState(false);
    const [excelSheetNames, setExcelSheetNames] = useState('');

    const newData = data?.slice(1);

    // console.log(excelSheetNames)

    const handleUpload = (e) => {
        setStayData(true)
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target.result;
            // const readOpts = { // <--- need these settings in readFile options
            //     cellText: false,
            //     cellDates: true
            // };

            const jsonOpts = {
                header: 1,
                defval: '',
                blankrows: true,
                raw: false,
                dateNF: 'd"/"m"/"yyyy' // <--- need dateNF in sheet_to_json options (note the escape chars)
            }
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parseData = XLSX.utils.sheet_to_json(sheet, jsonOpts);
            setData(parseData);
        }
    }

    const handleExcelUplaod = () => {
        setLoading(true)
        const colName = data[0];
        // const list = excelSheetNames
        const uploadedData = {
            clientEmail: user?.email,
            SheetName: excelSheetNames,
            date: new Date().toString(),
            colName,
            newData

        }
        console.log(uploadedData)

        fetch('http://localhost:5000/uploadExcel', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(uploadedData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                toast.success(`Uploaded Excel Data Successfully`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                setLoading(false)
            })
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="px-1 min-h-screen">
            <label htmlFor="Dashbord-drawer" className="drawer-button btn  lg:hidden  flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <h3 className="text-3xl font-bold text-center pt-6">Upload Your Excel Data Here</h3>

            <div className="py-4 flex justify-center gap-10">
                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Select Excel File</span>

                    </div>
                    <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" accept=".xlsx, .xls" onChange={handleUpload} />
                </div>

                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter your Shit name</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setExcelSheetNames(e.target.value)} required />

                </div>
                <div className="pt-9">
                    <button className="btn btn-primary w-full max-w-xs "
                        disabled={!excelSheetNames || !stayData} onClick={handleExcelUplaod} >{loading ? <Spinner></Spinner> : 'Uploaded Data'}</button>
                </div>

            </div>
            {/* <div className="pb-2 flex justify-end ">

                <button className="btn btn-primary w-full max-w-xs" onClick={handleExcelUplaod}>Upload Data</button>
            </div> */}
            {/* <input type="file" accept=".xlsx, .xls" onChange={handleUpload} /> */}


            {
                data.length > 0 && (
                    <div className="overflow-x-auto py-2">
                        <table className="table table-zebra">
                            <thead className="bg-slate-400 text-white font-bold">
                                <tr className="bg-blue-400 text-white font-bold">
                                    {
                                        (data[0]).map((key, i) => (
                                            <th key={i}>{alphabet[i]}</th>
                                        ))
                                    }
                                </tr>
                                <tr>
                                    {(data[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* {console.log(data)} */}
                                {
                                    newData.map((row, index) => (
                                        <tr key={index} className="hover">
                                            {/* {console.log(row[column].slice(7, 9))} */}
                                            {/* {console.log((parseInt(row[column].slice(0, 2))) < todayDate && (row[column].slice(3, 6)) === month) && (row[column].slice(row[column].slice(7, 9)) === year.slice(0, 2))} */}
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
                    </div>
                )
            }

            <footer className="bg-slate-500 text-white text-center sticky top-[100vh] py-5 mb-0 mt-6">Developed By Marfater Rahman Jabed</footer>

        </div>
    );
};

export default UploadFromExcel;
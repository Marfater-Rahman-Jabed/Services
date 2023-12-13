import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import * as XLSX from "xlsx"
import { AuthContexts } from "../../../Contexts/Contexts";
const ExcelReplace = () => {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    const { user } = useContext(AuthContexts)
    const [data, setData] = useState([]);

    const newData = data?.slice(1);

    // console.log()

    const handleUpload = (e) => {
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
        const colName = data[0];
        const uploadedData = {
            clientEmail: user?.email,
            colName,
            newData

        }
        console.log(uploadedData)
    }
    return (
        <div className="px-1 min-h-screen">

            <h3 className="text-3xl font-bold text-center pt-6">Find Your Remaning Date Data using Excel Sheet</h3>


            <div className="px-2 py-6 flex justify-between gap-4">

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
            {/* <input type="file" accept=".xlsx, .xls" onChange={handleUpload} /> */}


            {
                data.length > 0 && (
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
                )
            }

            <footer className="bg-slate-500 text-white text-center sticky top-[100vh] py-5 mb-0 mt-6">Developed By Marfater Rahman Jabed</footer>

        </div>
    );
};

export default ExcelReplace;
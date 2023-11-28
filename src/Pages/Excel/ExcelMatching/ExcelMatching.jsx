import { useState } from "react";
import * as XLSX from "xlsx"
const ExcelMatching = () => {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState('');

    const [column, setColumn] = useState(0)
    const [n, setN] = useState(10)

    const newData = data?.slice(1);
    console.log('number n=', n, typeof (n))

    if (n == parseInt('NAN')) {
        setN(10)
        console('not NAN', n)
    }


    const handleUpload = (e) => {
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target.result;


            const jsonOpts = {
                header: 1,
                defval: '',
                blankrows: true,
                raw: false,
                dateNF: 'd"/"m"/"yyyy'
            }
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parseData = XLSX.utils.sheet_to_json(sheet, jsonOpts);
            setData(parseData);
        }
    }




    return (
        <div className="px-1 min-h-screen">
            <h3 className="text-3xl font-bold text-center pt-6">Get your Data by Searching</h3>


            <div className="px-16 py-6 flex justify-center gap-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Select Column Where Data stay *</span>

                    </label>
                    <select className="select select-secondary w-full " onChange={(e) => setColumn(parseInt(e.target.value))}>
                        <option defaultValue={''} disabled>Select Column</option>
                        <option value={0} >Column A</option>
                        <option value={1} >Column B</option>
                        <option value={2} >Column C</option>
                        <option value={3} >Column D</option>
                        <option value={4} >Column E</option>
                        <option value={5} >Column F</option>
                        <option value={6} >Column G</option>
                        <option value={7} >Column H</option>
                        <option value={8} >Column I</option>
                        <option value={9} >Column J</option>
                        <option value={10} >Column K</option>
                        <option value={11} >Column L</option>
                        <option value={12} >Column M</option>
                        <option value={13} >Column N</option>
                        <option value={14} >Column O</option>
                        <option value={15} >Column P</option>
                        <option value={16} >Column Q</option>
                        <option value={17} >Column R</option>
                        <option value={18} >Column S</option>
                        <option value={19} >Column T</option>
                        <option value={20} >Column U</option>
                        <option value={21} >Column V</option>
                        <option value={22} >Column W</option>
                        <option value={23} >Column X</option>
                        <option value={24} >Column Y</option>
                        <option value={25} >Column Z</option>


                    </select>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Search your text</span>

                    </label>
                    <input type="text" className="input input-bordered input-secondary  text-center" placeholder="Search Here" onChange={(e) => setFilterData(e.target.value)} />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Select your File</span>

                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" accept=".xlsx, .xls" onChange={handleUpload} />
                </div>
            </div>

            {
                data.length > 0 && (
                    <table className="table table-zebra">
                        <thead>
                            <tr className="bg-blue-400 text-white font-bold">
                                {
                                    (data[0]).map((key, i) => (
                                        <th key={i}>{alphabet[i]}</th>
                                    ))
                                }
                            </tr>
                            <tr className="bg-purple-400 text-white font-bold">
                                {(data[0]).map((key) => (
                                    <th key={key}>{key}</th>

                                ))}
                            </tr>
                        </thead>
                        <tbody>

                            {filterData == '' &&
                                newData.map((row, index) => (
                                    <tr key={index} className="hover">
                                        {console.log(row[column].slice(7, 9))}
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
                            {filterData &&
                                newData.filter(row => ((row[column]).toUpperCase().slice(0, filterData.length)) === filterData.toUpperCase()).map((row, index) => (
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
                    </table>)

            }

            <footer className="bg-slate-500 text-white text-center sticky top-[100vh] py-5 mb-0 mt-6">Developed By Marfater Rahman Jabed</footer>
        </div>
    );
};

export default ExcelMatching;
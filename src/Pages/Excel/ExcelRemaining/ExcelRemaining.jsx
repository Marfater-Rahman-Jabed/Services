import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx"
const ExcelRemaining = () => {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]

    const [data, setData] = useState([]);
    const [filterDate, setFilterDate] = useState('all');
    const [column, setColumn] = useState(0)
    const [n, setN] = useState(10)
    const newData = data?.slice(1);
    console.log(data)
    console.log('number n=', n, typeof (n))

    if (n == parseInt('NAN')) {
        setN(10)
        console('not NAN', n)
    }

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const todayDate = new Date();
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    const Nextten = new Date(new Date().getTime() + (n * 24 * 60 * 60 * 1000))

    const NextTenday = Nextten.toString().slice(8, 10);
    const NextTenMonth = Nextten.toString().slice(4, 7);
    const NextTenYear = Nextten.toString().slice(11, 15);
    // const [nexttenday,nexttenmonth,nexttenyear]=Nextten.spl
    // setToday(todayDate)
    console.log('NextTenDate', NextTenday, NextTenMonth, NextTenYear)
    // console.log('tomorrow', tomorrow)
    const dateToday = todayDate.toString().slice(8, 10)
    const month = todayDate.toString().slice(4, 7)
    const year = todayDate.toString().slice(13, 15)

    const StringToday = `${dateToday}-${month}-${year}`

    const dateTomorrow = tomorrow.toString().slice(8, 10)
    const monthTomorrow = tomorrow.toString().slice(4, 7)
    const yearTomorrow = tomorrow.toString().slice(13, 15)
    const StringTomorrow = `${dateTomorrow}-${monthTomorrow}-${year}`


    // console.log('today', dateToday, month, year)
    console.log('tomorrow', dateTomorrow, monthTomorrow, yearTomorrow)
    console.log('filter', filterDate)
    console.log(StringToday, StringTomorrow);

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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="px-1 min-h-screen">

            <h3 className="text-3xl font-bold text-center pt-6">Find Your Remaning Date Data using Excel Sheet</h3>
            <p className="text-xl font-bold text-center text-red-500 mt-2">( Your date format must be following format &apos;dd-mm-yy&apos; example: &apos;12-Nov-23&apos; . <br /> if your data do not in this format , make it this format to perform following
                <Link to='/excelStep' className="ml-2 underline text-primary">step</Link>  )</p>

            <div className="px-2 py-6 flex justify-between gap-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Select Column Where Date stay *</span>

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
                        <span className="label-text">Select Your Filtering (Remaining Date) Option</span>

                    </label>
                    <select className="select select-secondary w-full  " onChange={(e) => setFilterDate(e.target.value)}>
                        <option defaultValue={''} disabled>Select Option</option>
                        <option value={'all'} >All Data </option>
                        <option value={StringToday}>Today Remaining Data</option>
                        <option value={StringTomorrow}>Tomorrow Remaining Data</option>
                        <option value={'thisMonth'}>This Month Remaining Data</option>
                        <option value={'thisYear'}>This year Remaining Data</option>
                        <option value={'NextTen'}>{isNaN(n) ? 'Please Select Your Custom Value' : `Next ${n} Days Remaining Data`}</option>

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Custom Filter (if you need*)</span>

                    </label>
                    <input type="number" className="input input-bordered input-secondary  text-center" min={1} placeholder="N days remaining date Data" onChange={(e) => (setN(parseInt(e.target.value)))} />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Select your File</span>

                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" accept=".xlsx, .xls" onChange={handleUpload} />
                </div>
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
                            {console.log(data)}
                            {filterDate &&
                                newData.filter(row => (row[column]) == filterDate).map((row, index) => (
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
                            {filterDate == 'all' &&
                                newData.map((row, index) => (
                                    <tr key={index} className="hover">
                                        {/* {console.log(year.slice(0, 2))}
                                        {console.log((parseInt(row[column].slice(0, 2))) < todayDate && (row[column].slice(3, 6)) === month) && (row[column].slice(row[column].slice(7, 9)) === year.slice(0, 2))} */}
                                        {
                                            Object.values(row).map((value, index) => (

                                                <td key={index}>
                                                    {value}

                                                </td>
                                            ))
                                        }

                                    </tr>
                                ))}
                            {filterDate == 'thisMonth' &&
                                newData.filter(row => ((row[column].slice(3, 6)) == month) && (row[column].slice(7, 9) == year)).map((row, index) => (
                                    <tr key={index} className="hover">
                                        {/* {console.log('row date', row[column])} */}
                                        {/* {console.log((parseInt(row[column].slice(0, 2))) < todayDate && (row[column].slice(3, 6)) === month) && (row[column].slice(row[column].slice(7, 9)) === year.slice(0, 2))} */}
                                        {
                                            Object.values(row).map((value, index) => (

                                                <td key={index}>
                                                    {value}

                                                </td>
                                            ))
                                        }

                                    </tr>
                                ))}
                            {filterDate == 'thisYear' &&
                                newData.filter(row => (row[column].slice(7, 9) == year)).map((row, index) => (
                                    <tr key={index} className="hover">
                                        {/* {console.log('row date', row[column])} */}
                                        {/* {console.log((parseInt(row[column].slice(0, 2))) < todayDate && (row[column].slice(3, 6)) === month) && (row[column].slice(row[column].slice(7, 9)) === year.slice(0, 2))} */}
                                        {
                                            Object.values(row).map((value, index) => (

                                                <td key={index}>
                                                    {value}

                                                </td>
                                            ))
                                        }

                                    </tr>
                                ))}
                            {filterDate == 'NextTen' &&
                                newData.filter(row => (((new Date(`20${row[column].slice(7, 9)}`, monthNames.indexOf(row[column].slice(3, 6)), row[column].slice(0, 2))) >= (new Date(`20${year}`, monthNames.indexOf(month), dateToday))) && (new Date(`20${row[column].slice(7, 9)}`, monthNames.indexOf(row[column].slice(3, 6)), row[column].slice(0, 2))) <= (new Date(NextTenYear, monthNames.indexOf(NextTenMonth), NextTenday)))).map((row, index) => (
                                    <tr key={index} className="hover">
                                        {/* {console.log(((new Date(`20${year}`, monthNames.indexOf(month), todayDate)) <= (new Date(`20${row[column].slice(7, 9)}`, monthNames.indexOf(row[column].slice(3, 6)), row[column].slice(0, 2)))) && (new Date(`20${row[column].slice(7, 9)}`, monthNames.indexOf(row[column].slice(3, 6)), row[column].slice(0, 2))) <= (new Date(NextTenYear, monthNames.indexOf(NextTenMonth), NextTenday)))} */}
                                        {/* {console.log((parseInt(row[column].slice(0, 2))) < todayDate && (row[column].slice(3, 6)) === month) && (row[column].slice(row[column].slice(7, 9)) === year.slice(0, 2))} */}
                                        {
                                            Object.values(row).map((value, index) => (

                                                <td key={index}>
                                                    {value}

                                                </td>
                                            ))
                                        }

                                    </tr>
                                ))}


                        </tbody>
                    </table>
                )
            }

            <footer className="bg-slate-500 text-white text-center sticky top-[100vh] py-5 mb-0 mt-6">Developed By Marfater Rahman Jabed</footer>

        </div>
    );
};

export default ExcelRemaining;
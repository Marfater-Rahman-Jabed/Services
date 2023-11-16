import { useState } from "react";
import * as XLSX from "xlsx"
const Excel = () => {
    const [data, setData] = useState([]);
    const [filterDate, setFilterDate] = useState('all')
    const newData = data?.slice(1);

    const todayDate = new Date();
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    // setToday(todayDate)
    // console.log('today', todayDate)
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
    return (
        <div>
            <input type="file" accept=".xlsx, .xls" onChange={handleUpload} />

            <select className="select select-secondary w-full max-w-xs" onChange={(e) => setFilterDate(e.target.value)}>
                <option defaultValuevalue={''} disabled>Select Option</option>
                <option value={'all'} >All Data</option>
                <option value={StringToday}>Today</option>
                <option value={StringTomorrow}>Tomorrow</option>
                {/* <option>This Month</option>
  <option>This year</option> */}

            </select>

            {
                data.length > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                {(data[0]).map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(data)}
                            {filterDate &&
                                newData.filter(row => (row[3]) == filterDate).map((row, index) => (
                                    <tr key={index}>
                                        {/* {console.log(year.slice(0, 2))}
                                        {console.log((parseInt(row[3].slice(0, 2))) < todayDate && (row[3].slice(3, 6)) === month) && (row[3].slice(row[3].slice(7, 9)) === year.slice(0, 2))} */}
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
                                    <tr key={index}>
                                        {/* {console.log(year.slice(0, 2))}
                                        {console.log((parseInt(row[3].slice(0, 2))) < todayDate && (row[3].slice(3, 6)) === month) && (row[3].slice(row[3].slice(7, 9)) === year.slice(0, 2))} */}
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
        </div>
    );
};

export default Excel;
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import * as XLSX from "xlsx"
const CompareExcelValue = () => {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState('all');
    // const [openModal, setOpenModal] = useState('close');
    const [column, setColumn] = useState(0)
    const [n, setN] = useState(10)
    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(0)
    // const [count, setCount] = useState(0)
    const newData = data?.slice(1);
    console.log('number n=', n, typeof (n))

    if (n == parseInt('NAN')) {
        setN(10)
        console('not NAN', n)
    }


    const openModal = () => {
        document?.getElementById('my_modal_3')?.showModal()
    }



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

    const handleData = () => {
        console.log('pleae do not delete this function mr. jabed')

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <div className="px-1 min-h-screen">
            <h3 className="text-3xl font-bold text-center pt-6">Get your Data Equal or Non Equal value</h3>
            {/* <p className="text-xl font-bold text-center text-red-500 mt-2">( Your date format must be following format &apos;dd-mm-yy&apos; example: &apos;12-Nov-23&apos; . <br /> if your data do not in this format , make it this format to perform following
                <Link to='/excelStep' className="ml-2 underline text-primary">step</Link>  )</p> */}

            <div className="px-2 py-6 flex justify-between gap-4">
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
                        <span className="label-text">Select Your Operation  </span>

                    </label>
                    <select className="select select-secondary w-full  " onChange={(e) => setFilterData(e.target.value)}>
                        <option defaultValue={''} disabled>Select Option</option>
                        <option value={'all'} >All Data </option>
                        <option value={'less'} >Less Operation </option>
                        <option value={'lessEqual'} >Less than or Equal Operation </option>
                        <option value={'great'} >Greater Operation </option>
                        <option value={'greatEqual'} >Greater than or Equal Operation </option>
                        <option value={'newrange'}>{filterData === 'newrange' ? `${from}-${to}` : 'Custom Range'}</option>





                    </select>
                </div>
                {filterData === 'newrange' ? <div><label className="label">
                    <span className="label-text">Choose Range</span>

                </label><button onClick={openModal} className="btn btn-secondary px-16">Choose Range</button></div> : <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Your Compareing Value</span>

                    </label>
                    <input type="number" className="input input-bordered input-secondary  text-center" min={1} placeholder="Comparing Value" disabled={filterData == 'all'} onChange={(e) => (setN(parseInt(e.target.value)))} />
                </div>}
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
                        <thead >
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
                            {console.log(data)}
                            {filterData == 'all' &&
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
                            {filterData == 'less' &&
                                newData.filter(row => (parseFloat(row[column])) < n).map((row, index) => (
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
                            {filterData == 'lessEqual' &&
                                newData.filter(row => (parseFloat(row[column])) <= n).map((row, index) => (
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
                            {filterData == 'great' &&
                                newData.filter(row => (parseFloat(row[column])) > n).map((row, index) => (
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
                            {filterData == 'greatEqual' &&
                                newData.filter(row => (parseFloat(row[column])) >= n).map((row, index) => (
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
                            {filterData == 'newrange' &&
                                newData.filter(row => ((parseFloat(row[column])) >= from) && ((parseFloat(row[column])) <= to)).map((row, index) => (
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

                        </tbody>
                    </table>)

            }

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog" className='py-4'>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <h3 className='text-center font-bold'>Enter Your Range</h3>

                        <div className='flex justify-center gap-2'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">From</span>

                                </label>
                                <input type="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setFrom(e.target.value)} />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">To</span>

                                </label>
                                <input type="tel" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setTo(e.target.value)} />

                            </div>
                        </div>

                        <div className="form-control w-full mt-3">

                            <input type="submit" value='Submit' className="btn btn-secondary w-full " onClick={handleData} />

                        </div>
                    </form>
                </div>
            </dialog>

            <footer className="bg-slate-500 text-white text-center sticky top-[100vh] py-5 mb-0 mt-6">Developed By Marfater Rahman Jabed</footer>
        </div>
    );
};

export default CompareExcelValue;
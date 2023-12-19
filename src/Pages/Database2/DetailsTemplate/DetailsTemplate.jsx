import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as XLSX from "xlsx"
import { AuthContexts } from "../../../Contexts/Contexts";
const DetailsTemplate = () => {
    const { user } = useContext(AuthContexts)
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const { register, handleSubmit } = useForm();
    const location = useLocation()
    const { from } = location.state
    const filterId = location.pathname.split('/')[3]
    const detailsItem = from.templateList?.filter(template => template?._id === filterId)
    // console.log(detailsItem[0].colName.length, data[0]?.length)
    const newData = data?.slice(1);


    const convertedData = newData.map(data => {
        return { clientEmail: user?.email, templateId: filterId, date: new Date().toString(), data: { ...data } }
    })
    const onsubmit = (data) => {
        // console.log(data.toArray())
        const uploadedData = {
            clientEmail: user?.email,
            templateId: filterId,
            date: new Date().toString(),
            data
        }
        // setOpen(false)
        console.log(uploadedData)
        fetch('http://localhost:5000/uploadSecondDatabase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(uploadedData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // userFetchData()
                toast.success(`Uploaded Data successfully`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })

            })
    }

    const handleUpload = (e) => {
        // console.log(e.target.files[0].size / 1024)
        // setSize(e.target.files[0].size / 1024)
        // setStayData(true)
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target.result;

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

    const handleUploadExcelData = () => {
        // console.log('uploaded Data', convertedData)

        if (detailsItem[0].colName.length === data[0]?.length) {
            fetch('http://localhost:5000/uploadSecondDatabasefromExcel', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(convertedData)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // userFetchData()
                    toast.success(`Uploaded Data successfully`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })

                })
        }

        else {
            toast.error(`Doesnt match Template. Current template have ${detailsItem[0].colName.length} field but your file have ${data[0]?.length} field`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }


    }

    useEffect(() => {
        fetch(`http://localhost:5000/allSecondDatabaseData/${filterId}`)
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, [filterId])

    // console.log(allData[0].data)

    return (
        <div>
            <div className="">
                <div className="px-2 flex justify-end pb-4">
                    <h3 className="text-3xl font-bold px-2 pt-8">Data Collection</h3>
                    <div className="w-full max-w-xs pt-8">
                        <button className='btn btn-secondary px-6 font-bold hover:text-white rounded-lg' onClick={() => { document.getElementById('my_modal_DetailsTemplate')?.showModal(); }}>{' Click to Upload Data'}</button>
                    </div>
                    <div className="divider pt-10">OR</div>
                    <div className=" w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Choose Excel File</span>

                        </div>
                        <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" accept=".xlsx, .xls" onChange={handleUpload} />
                    </div>
                    <div className="px-2 pt-9">
                        <button className='btn btn-secondary px-6 font-bold hover:text-white rounded-lg' onClick={handleUploadExcelData} disabled={data.length === 0}>{' Upload'}</button>
                    </div>
                </div>
            </div>

            <table className="table table-zebra" >
                <thead className="bg-slate-400 text-white font-bold">

                    <tr>
                        {detailsItem[0]?.colName.map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {
                        allData.map((row, index) => (
                            <tr key={index} className="hover">

                                {
                                    Object.values(row.data).map((value, index) => (

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

            {open && <dialog id="my_modal_DetailsTemplate" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form action="" method="dialog" className='py-4' onSubmit={handleSubmit(onsubmit)}>
                        {/* if there is a button in form, it will close the modal */}


                        <h3 className='text-center font-bold'>Enter Item Details</h3>
                        {
                            detailsItem[0]?.colName.map((col, i) => <div key={i} className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Enter {col}</span>

                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " {...register(`${col}`)} required />

                            </div>)
                        }



                        <div className="flex justify-center gap-4">
                            <div className="form-control w-full mt-5">

                                <input type="submit" value='Submit' className="btn btn-secondary w-full " />


                            </div>
                            <div className="form-control w-full mt-5">

                                <input type="reset" value='Reset' className="btn btn-secondary w-full " />


                            </div>
                        </div>
                    </form>
                </div>
            </dialog>}
        </div>
    );
};

export default DetailsTemplate;
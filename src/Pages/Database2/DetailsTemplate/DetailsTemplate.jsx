import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as XLSX from "xlsx"
import { AuthContexts } from "../../../Contexts/Contexts";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TbExclamationMark } from "react-icons/tb";
import { useDownloadExcel } from "react-export-table-to-excel";
const DetailsTemplate = () => {
    const { user, userFetchData, userData } = useContext(AuthContexts)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [open, setOpen] = useState(true)
    const [deleteOpen, setDeleteOpen] = useState(true)
    const [permision, setPermision] = useState(true)
    const [deleteId, setDeleteId] = useState('')
    const [size, setSize] = useState(0);
    const { register, handleSubmit } = useForm();

    const location = useLocation()
    const { from } = location.state
    const filterId = location.pathname.split('/')[3]
    const detailsItem = from.templateList?.filter(template => template?._id === filterId)
    // console.log(detailsItem[0].tempName)
    const newData = data?.slice(1);


    const convertedData = newData.map(data => {
        return { clientEmail: user?.email, templateId: filterId, date: new Date().toString(), data: { ...data } }
    })

    const { data: allData = [], refetch } = useQuery({
        queryKey: ['allSecondDatabaseData'],
        queryFn: async () => {
            setIsLoading(true)
            const res = await fetch(`http://localhost:5000/allSecondDatabaseData/${filterId}`)
            const data = res.json()
            setIsLoading(false)
            return data;
        }
    })


    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: `${detailsItem[0].tempName}`,
        sheet: 'Users'
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
        if (userData.storage > 1) {
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
                    userFetchData()
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
                    refetch(`http://localhost:5000/allSecondDatabaseData/${filterId}`)
                    setOpen(false)
                })
        }
        else {
            toast.error(`You have not sufficient Storage. Please Upgrade your Storage`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setOpen(false)
        }

    }

    const handleUpload = (e) => {
        // console.log(e.target.files[0].size / 1024)
        setSize(e.target.files[0].size / 1024)
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


    const arraysAreEqual = (arr1, arr2) => {
        return arr1.length === arr2.length && arr1.every(element => arr2.includes(element));
    }

    const handleUploadExcelData = () => {
        // console.log('uploaded Data', convertedData)

        if (arraysAreEqual(detailsItem[0].colName, data[0]) === true && size <= userData.storage) {
            fetch('http://localhost:5000/uploadSecondDatabasefromExcel', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify({ clientEmail: user?.email, size, convertedData })

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    userFetchData()
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
                    refetch(`http://localhost:5000/allSecondDatabaseData/${filterId}`)
                })
        }

        else if (size > userData.storage) {
            toast.error(`You have not sufficient Storage. This file need ${size.toString().slice(0, 4)} KB but your storage is ${userData?.storage.toString().slice(0, 4)} KB`, {
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

        else {
            toast.error(`Doesnt match with Template. Your Data heading must be same with the template. You can create a new template or change Your file heading`, {
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

    const handleDelete = (id) => {

        setDeleteId(id)
        document.getElementById('deleteData')?.showModal()
        console.log(id)
    }

    const deleteData = () => {
        const id = deleteId
        console.log(id, permision)
        if (permision) {

            fetch(`http://localhost:5000/deleteSecondDatabase/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    userFetchData()
                    toast.success(`Deleted Data successfully`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                    setDeleteOpen(false)
                    refetch(`http://localhost:5000/allSecondDatabaseData/${filterId}`)
                })
        }

    }


    // console.log(allData[0].data)

    return (
        <div>
            <label htmlFor="Dashbord-drawer2" className="drawer-button btn  lg:hidden  flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="">
                <div className="px-1 flex justify-center pb-4">

                    <h3 className="text-2xl font-bold pt-8">{detailsItem[0]?.tempName}</h3>
                    <div className="w-full max-w-xs pt-8">
                        <button className='btn btn-secondary px-6 font-bold hover:text-white rounded-lg' onClick={() => { document.getElementById('my_modal_DetailsTemplate')?.showModal(); setOpen(true); }}>{' Click to Upload Data'}</button>
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
                    <div className="pt-9">
                        <button className="btn btn-primary" onClick={onDownload}> Export To Excel </button>
                    </div>
                </div>
            </div>
            {(isLoading) ? <div className="flex justify-center items-center"><h3 className="py-10 text-3xl font-bold">Loading...</h3></div> :
                <div className="overflow-x-auto ">
                    {(!isLoading && allData.length > 0) ? <table className="table table-zebra  " ref={tableRef}>
                        <thead className="bg-slate-400 text-white font-bold">

                            <tr>
                                <th>Sl No.</th>
                                {detailsItem[0]?.colName.map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                                <th></th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allData.map((row, index) => (
                                    <tr key={index} className="hover">
                                        <td>{index + 1}</td>
                                        {
                                            Object.values(row.data).map((value, index) => (

                                                <td key={index}>
                                                    {value}

                                                </td>
                                            ))
                                        }
                                        <td className="tooltip  tooltip-secondary" data-tip="Edit Data"><Link to={`/database2/updateDetails/${row?._id}`} state={{ from: row }}><FaEdit className="cursor-pointer"></FaEdit></Link></td>
                                        <td onClick={() => { handleDelete(row?._id); setDeleteOpen(true); }} className="tooltip  tooltip-secondary" data-tip="Delete Data">
                                            <MdDeleteForever className="cursor-pointer " ></MdDeleteForever>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table> : <div className="flex justify-center items-center"><h3 className="py-10 text-3xl font-bold">No Data Exits</h3></div>
                    }
                </div>}
            {open && <dialog id="my_modal_DetailsTemplate" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form action="" method="dialog" className='py-4' key={1} onSubmit={handleSubmit(onsubmit)}>
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

            {deleteOpen && <dialog id="deleteData" className="modal">
                <div className="modal-box">
                    <div className="flex justify-center py-4">
                        <TbExclamationMark className="text-7xl text-white bg-red-500 rounded-full p-2"></TbExclamationMark>
                    </div>
                    <h3 className="text-center py-2 font-semibold">Are you sure ?. You want to delete  this item.</h3>
                    <h3 className="text-center font-semibold">It will be permanently Removed  from  Database </h3>
                    <form action="" method="dialog" className='' onSubmit={deleteData}>
                        {/* if there is a button in form, it will close the modal */}

                        <div className="flex justify-between px-12 gap-4">
                            <div className="form-control  mt-5">

                                <input type="submit" value='Cancel' className="btn bg-red-500 hover:bg-red-500 text-white w-36 " onClick={() => setPermision(false)} />
                            </div>
                            <div className="form-control  mt-5">
                                <input type="submit" value='Delete' className="btn btn-primary w-36" onClick={() => setPermision(true)} />
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>}


        </div>
    );
};

export default DetailsTemplate;
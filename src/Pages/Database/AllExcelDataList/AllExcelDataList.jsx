// import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../../Contexts/Contexts";
import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { TbExclamationMark } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

const AllExcelDataList = () => {

    const { user, userFetchData } = useContext(AuthContexts)
    const [open, setOpen] = useState(true)
    const [editId, setEditId] = useState('')
    const [deleteId, setDeleteId] = useState('')
    // const [deletedData, setDeletedData] = useState('')
    const [deleteOpen, setDeleteOpen] = useState(true)
    const [permision, setPermision] = useState(true)
    // const [excelFindData, setExcelFindData] = useState([])
    const { register, handleSubmit } = useForm();

    const { data: excelFindData = [], refetch } = useQuery({
        queryKey: ['excelRefetchs'],
        queryFn: async () => {
            // setIsLoading(true)
            const res = await fetch(`http://localhost:5000/excelfind/${user?.email}`)
            const data = res.json()
            // setIsLoading(false)
            return data;
        }
    })
    // useEffect(() => {
    //     fetch(`http://localhost:5000/excelfind/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setExcelFindData((data))
    //         })
    // }, [user?.email])


    const handleEdit = (id) => {
        setOpen(true)
        console.log(id)
        setEditId(id)
        document.getElementById('editExcelSheetData')?.showModal();
    }
    const handleDelete = (id) => {
        setDeleteOpen(true)
        setDeleteId(id)
        // setDeletedData(data)
        document.getElementById('deleteExcelData')?.showModal()
        console.log(id)



    }
    const deleteData = () => {
        // console.log(id)
        const id = deleteId
        console.log(id, permision)
        if (permision) {
            setDeleteOpen(false)
            fetch(`http://localhost:5000/deleteExcelSheet/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    userFetchData()
                    toast.success(`Deleted Excel Sheet successfully`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                    refetch(`http://localhost:5000/excelfind/${user?.email}`)
                })
        }
    }
    const onsubmit = (data) => {
        console.log(data)
        const id = editId
        const uploadedData = {
            data
        }

        // console.log(uploadedData, id)
        setOpen(false)
        fetch(`http://localhost:5000/updateExcelSheetName/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(uploadedData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                toast.success(`Updated Sheet Name successfully`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                refetch(`http://localhost:5000/excelfind/${user?.email}`)
            })
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <label htmlFor="Dashbord-drawer" className="drawer-button btn  lg:hidden  flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="py-6">
                <h3 className="text-center text-2xl font-bold">All Collection&apos;s Of Excel Sheet</h3>
            </div>
            <div className="overflow-x-auto lg:px-12 md:px-8 px-4">
                <table className="table table-zebra">

                    <thead>
                        <tr className="bg-slate-500 text-white">
                            <th>Sl No.</th>
                            <th>Sheet Name</th>
                            <th>Uploaded Time</th>
                            <th>Upload Day & Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        excelFindData?.map((data, i) =>
                            <tbody key={i} className="bg-slate-300">

                                <tr className="hover:bg-blue-700 hover:text-white ">
                                    <th>{i + 1}</th>
                                    <td className="underline cursor-pointer font-semibold"><Link to={`/database/excelDetails/${data?._id}`} state={{ from: data }}>{data?.SheetName}</Link></td>
                                    <td className="font-semibold">{data?.date?.slice(16, 25)}</td>
                                    <td className="font-semibold">{data?.date?.slice(0, 15)}</td>
                                    <td onClick={() => handleEdit(data?._id)} className="tooltip  tooltip-secondary" data-tip="Edit Sheet Name"><FaEdit className="cursor-pointer"></FaEdit></td>
                                    <td onClick={() => handleDelete(data?._id)} className="tooltip  tooltip-secondary" data-tip={`Delete  Sheet`}>
                                        <MdDeleteForever className="cursor-pointer " ></MdDeleteForever>
                                    </td>
                                </tr>

                            </tbody>
                        )
                    }
                </table>
            </div>


            {open && <dialog id="editExcelSheetData" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form action="" method="dialog" className='py-4' onSubmit={handleSubmit(onsubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <h3 className='text-center font-bold'>Update Your Item</h3>



                        <input type="text" placeholder='Edit Excel Sheet Name' className="input input-bordered input-secondary w-full mt-2" {...register(`SheetName`)} required />


                        <div className="flex justify-center gap-4">
                            <div className="form-control w-full mt-5">

                                <input type="submit" value='Update' className="btn btn-secondary w-full " />
                            </div>
                            <div className="form-control w-full mt-5">
                                <input type="reset" value='Reset' className="btn btn-secondary w-full " />
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>}

            {deleteOpen && <dialog id="deleteExcelData" className="modal">
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

export default AllExcelDataList;
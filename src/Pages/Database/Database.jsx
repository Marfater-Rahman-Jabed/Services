
import { useContext, useEffect, useRef, useState, } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { AuthContexts } from "../../Contexts/Contexts";
// import { RxCross1 } from "react-icons/rx";
import { TbExclamationMark } from "react-icons/tb";


import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
const Database = () => {
    const { register, handleSubmit } = useForm();
    const { user, findData, userData } = useContext(AuthContexts)
    const [editId, setEditId] = useState('')
    const [deleteId, setDeleteId] = useState('')
    const [open, setOpen] = useState(true)
    const [deleteOpen, setDeleteOpen] = useState(true)
    const [permision, setPermision] = useState(true)
    const tableRef = useRef(null);
    const { refetch } = useQuery({
        queryKey: ['refetchs']
    })
    const handleEdit = (id) => {
        setOpen(true)
        console.log(id)
        setEditId(id)
        document.getElementById('editAllData')?.showModal();
    }
    const handleDelete = (id) => {
        setDeleteOpen(true)
        setDeleteId(id)
        document.getElementById('deleteData')?.showModal()
        console.log(id)



    }

    const deleteData = () => {
        const id = deleteId
        console.log(id, permision)
        if (permision) {
            setDeleteOpen(false)
            fetch(`https://pdf-to-excel-server.vercel.app/deleteDatabase/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

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
                    refetch(`https://pdf-to-excel-server.vercel.app/datafind/${user?.email}`)
                })
        }

    }

    const onsubmit = (data) => {
        console.log(data)
        const id = editId
        const uploadedData = {
            data
        }

        console.log(uploadedData)
        setOpen(false)
        fetch(`https://pdf-to-excel-server.vercel.app/updateDatabase/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(uploadedData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                toast.success(`Updated Data successfully`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                refetch(`https://pdf-to-excel-server.vercel.app/datafind/${user?.email}`)
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
            <div className="flex justify-between px-3  py-2">


                <p className="text-3xl font-bold text-center">All Data List</p>

                <DownloadTableExcel
                    filename="All data table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                    <button className="btn btn-primary"> Export To Excel </button>

                </DownloadTableExcel>


            </div>

            <div className="text-center">
                <div className="overflow-x-auto py-2">
                    <table className="table table-zebra" ref={tableRef}>
                        {/* head */}
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th>Sl No.</th>
                                {
                                    userData?.colName?.map((col, i) => <th key={i}>{col}</th>)
                                }
                                <th></th>
                                {/* <th></th> */}

                            </tr>
                        </thead>
                        <tbody>
                            {
                                findData.map((data, i) => <tr key={i} className="hover">
                                    <td>{i + 1}</td>
                                    {
                                        Object.values(data?.data).map((dat, i) => <td key={i}> {dat}</td>)
                                    }

                                    <td onClick={() => handleEdit(data?._id)} className="tooltip  tooltip-secondary" data-tip="Edit Data"><FaEdit className="cursor-pointer"></FaEdit></td>
                                    <td onClick={() => handleDelete(data?._id)} className="tooltip  tooltip-secondary" data-tip="Delete Data">
                                        <MdDeleteForever className="cursor-pointer " ></MdDeleteForever>
                                    </td>


                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

            {open && <dialog id="editAllData" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form action="" method="dialog" className='py-4' onSubmit={handleSubmit(onsubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <h3 className='text-center font-bold'>Update Your Item</h3>
                        {
                            findData.filter(data => data._id === editId).map((data, i) => <div key={i} className="form-control w-full ">

                                {
                                    userData?.colName?.map((col, i) => <input key={i} type="text" placeholder={col} className="input input-bordered input-secondary w-full mt-2" {...register(`${col}`)} required />)
                                }
                            </div>)
                        }
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

export default Database;
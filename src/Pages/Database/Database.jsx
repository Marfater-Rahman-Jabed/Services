
import { useContext, useEffect, useRef, useState, } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { AuthContexts } from "../../Contexts/Contexts";

import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
const Database = () => {
    const { register, handleSubmit } = useForm();
    const { user, findData, userData } = useContext(AuthContexts)
    const [editId, setEditId] = useState('')
    const [open, setOpen] = useState(true)
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

        console.log(id)
        fetch(`http://localhost:5000/deleteDatabase/${id}`, {
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
                refetch(`http://localhost:5000/datafind/${user?.email}`)
            })

    }

    const onsubmit = (data) => {
        console.log(data)
        const id = editId
        const uploadedData = {
            data
        }

        console.log(uploadedData)
        setOpen(false)
        fetch(`http://localhost:5000/updateDatabase/${id}`, {
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
                refetch(`http://localhost:5000/datafind/${user?.email}`)
            })
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <div className="flex justify-between px-3  py-2">

                {/* <div className="flex justify-center">
                    <CiSearch className="text-5xl -ps-4 text-secondary"></CiSearch>
                    <input type="text" placeholder="Search " className="input input-bordered input-secondary w-80 rounded-3xl " onChange={(e) => setSearchData(e.target.value)} />

                </div> */}
                <p className="text-3xl font-bold text-center">All Data List</p>
                {/* <button className="btn btn-secondary">Export to Excel</button> */}
                <DownloadTableExcel
                    filename="All data table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                    <button className="btn btn-primary"> Export To Excel </button>

                </DownloadTableExcel>


            </div>

            <div className="text-center">
                <div className=" py-2">
                    <table className="table table-zebra" ref={tableRef}>
                        {/* head */}
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th>Sl No.</th>
                                {
                                    userData?.colName?.map((col, i) => <th key={i}>{col}</th>)
                                }
                                <th></th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                findData.map((data, i) => <tr key={i} className="hover">
                                    <td>{i + 1}</td>
                                    {
                                        Object.values(data?.data).map((dat, i) => <td key={i}> {dat}</td>)
                                    }

                                    <td onClick={() => handleEdit(data?._id)}><FaEdit className="cursor-pointer"></FaEdit></td>
                                    <td onClick={() => handleDelete(data?._id)}><MdDeleteForever className="cursor-pointer"></MdDeleteForever></td>

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


                            </div>



                            )
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
        </div>
    );
};

export default Database;
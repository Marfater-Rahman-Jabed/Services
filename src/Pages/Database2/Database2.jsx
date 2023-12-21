import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../../Contexts/Contexts";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { TbExclamationMark } from "react-icons/tb";
import { toast } from "react-toastify";


const Database2 = () => {
    const { userData, userFetchData } = useContext(AuthContexts)
    // console.log(userData.templateList)
    const [deleteOpen, setDeleteOpen] = useState(true)
    const [permision, setPermision] = useState(true)
    const [deleteId, setDeleteId] = useState('')
    const [deleteText, setDeleteText] = useState('')
    const [deleteTextShow, setDeleteTextShow] = useState('')

    // console.log(deleteText)
    const handleDelete = (id, template) => {
        setDeleteOpen(true)
        setDeleteId(id)
        setDeleteTextShow(template?.tempName)
        document.getElementById('deleteTemplateData')?.showModal()
        // console.log(id, template.tempName)
    }
    const deleteData = () => {
        const id = deleteId
        console.log(id, permision)
        if (permision) {
            setDeleteOpen(false)
            fetch(`http://localhost:5000/deleteTemplateDatabase/${id}`, {
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
                    // refetch(`http://localhost:5000/datafind/${user?.email}`)
                })
        }

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <label htmlFor="Dashbord-drawer2" className="drawer-button btn  lg:hidden  flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div>
                <h3 className="font-bold text-center text-3xl py-10">All Template Collection</h3>
                <div className="overflow-x-auto px-10 " >
                    <table className="table ">
                        {/* head */}
                        <thead >
                            <tr className="bg-slate-500 text-white">
                                <th >SL. No</th>
                                <th >Template Name</th>
                                <th >Template Preview</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData?.templateList?.map((template, i) => <tr key={template?._id} className="bg-slate-300 hover:bg-blue-900 hover:text-white">
                                <th>{i + 1}</th>
                                <th><Link to={`/database2/detailsTemplate/${template?._id}`} state={{ from: userData }} className="underline">{template?.tempName ? template?.tempName : `Template ==>`}</Link></th>
                                <th>
                                    {template?.colName?.map(key => <th key={key}>

                                        {key}

                                    </th>)}
                                </th>
                                <td onClick={() => { handleDelete(template?._id, template); }} className="tooltip  tooltip-secondary py-6" data-tip="Delete Template">
                                    <MdDeleteForever className="cursor-pointer text-2xl" ></MdDeleteForever>
                                </td>
                            </tr>)


                            }
                        </tbody>
                    </table>
                </div>

                {deleteOpen && <dialog id="deleteTemplateData" className="modal">
                    <div className="modal-box">
                        <div className="flex justify-center py-4">
                            <TbExclamationMark className="text-7xl text-white bg-red-500 rounded-full p-2"></TbExclamationMark>
                        </div>
                        <h3 className="text-center py-2 font-semibold">Are you sure ?. You want to delete  this Template.</h3>
                        <h3 className="text-center font-semibold">It will be permanently Removed  from  Database & All data will be deleted which were uploaded under this template. </h3>
                        <p className="text-center font-semibold">For more Security Concern Type <strong>&quot;Delete {deleteTextShow}&quot;</strong></p>
                        <div className="flex justify-center py-2">
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setDeleteText(e.target.value)} value={deleteText} />
                            {/* <input type="text" placeholder="Type DELETE"  /> */}
                        </div>
                        <form action="" method="dialog" className='' onSubmit={deleteData}>
                            {/* if there is a button in form, it will close the modal */}

                            <div className="flex justify-between px-12 gap-4">
                                <div className="form-control  mt-5">

                                    <input type="submit" value='Cancel' className="btn bg-red-500 hover:bg-red-500 text-white w-36 " onClick={() => { setPermision(false); setDeleteText(''); }} />
                                </div>
                                <div className="form-control  mt-5">
                                    <input type="submit" value='Delete' className="btn btn-primary w-36" disabled={deleteText !== `Delete ${deleteTextShow}`} onClick={() => setPermision(true)} />
                                </div>
                            </div>
                        </form>
                    </div>
                </dialog>}
            </div>

        </div>
    );
};

export default Database2;
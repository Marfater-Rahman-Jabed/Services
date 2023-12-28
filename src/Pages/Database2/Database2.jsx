import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../../Contexts/Contexts";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { TbExclamationMark } from "react-icons/tb";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FaCirclePlus } from "react-icons/fa6";
// import { FaCopy } from "react-icons/fa";

const Database2 = () => {
    const { user, userData, userFetchData } = useContext(AuthContexts)
    const { register, handleSubmit } = useForm();
    // console.log(userData.templateList)
    const [deleteOpen, setDeleteOpen] = useState(true)
    const [showModalOpen, setShowModalOpen] = useState(true)
    const [permision, setPermision] = useState(true)
    const [permisionShow, setPermisionShow] = useState(true)
    const [deleteId, setDeleteId] = useState('')
    const [deleteText, setDeleteText] = useState('')
    const [showData, setShowData] = useState('')
    const [addExtra, setAddExtra] = useState(false)
    const [deleteTextShow, setDeleteTextShow] = useState('')

    // console.log(deleteText)
    const mapReverse = userData?.templateList
        ?.slice(0)
        .reverse()
        .map(element => {
            return element;
        });

    const handleDelete = (id, template) => {
        setDeleteOpen(true)
        setDeleteId(id)
        setDeleteTextShow(template?.tempName)
        document.getElementById('deleteTemplateData')?.showModal()
        // console.log(id, template.tempName)
    }
    const handleShow = (id, template) => {
        setShowModalOpen(true)
        // setDeleteId(id)
        setShowData(template)
        console.log(showData)
        document.getElementById('ShowTemplateData')?.showModal()
        // console.log(id, template.tempName)
    }
    const showDataUpload = (data) => {
        // const showDatas = data.split(',')
        const makeArray = Object.values(data)
        const filteredArray = makeArray.filter(element => element);
        // console.log(filteredArray, showData)
        const sendDoc = {
            clientEmail: user?.email,
            updatedId: showData?._id,
            colName: filteredArray

        }

        if (permisionShow) {
            fetch(`http://localhost:5000/UpdateColumnField`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(sendDoc)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    userFetchData()
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

                })
        }
        // console.log(sendDoc)
        setShowModalOpen(false)
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
                            {mapReverse?.map((template, i) => <tr key={template?._id} className="bg-slate-300 hover:bg-blue-900 hover:text-white">
                                <th>{i + 1}</th>
                                <th><Link to={`/database2/detailsTemplate/${template?._id}`} state={{ from: userData }} className="underline">{template?.tempName ? template?.tempName : `Template ==>`}</Link></th>
                                <th className="hover:underline cursor-pointer" onClick={() => { handleShow(template?._id, template); setShowModalOpen(true) }}>
                                    See Template Column Name
                                </th>
                                {/* {template?.colName?.map(key => <td key={key}>

                                    {key}

                                </td>)} */}
                                <td onClick={() => { handleDelete(template?._id, template); }} className="tooltip  tooltip-secondary py-6" data-tip="Delete Template">
                                    <MdDeleteForever className="cursor-pointer text-2xl" ></MdDeleteForever>
                                </td>
                            </tr>)


                            }
                        </tbody>
                    </table>
                </div>

                {showModalOpen && <dialog id="ShowTemplateData" className="modal">
                    <div className="modal-box">
                        <div className=" grid lg:grid-cols-2 px-2 gap-2">
                            {showData?.colName?.map(key => <div key={key} >

                                <input
                                    contentEditable={true}
                                    suppressContentEditableWarning={true}
                                    style={{
                                        border: '1px solid #ccc',
                                        padding: '2px',
                                        margin: '3px',
                                    }}
                                    defaultValue={key}
                                    {...register(key)}
                                />

                            </div>)}
                            {addExtra && <div>
                                <input type="text" style={{
                                    border: '1px solid #ccc',
                                    padding: '2px',
                                    margin: '3px',
                                }}
                                    {...register('extra')}
                                    required
                                />
                            </div>}
                        </div>

                        <form action="" method="dialog" onSubmit={handleSubmit(showDataUpload)} >


                            < div className="flex justify-between px-12 gap-4">
                                <div className="form-control  mt-5">

                                    <input type="submit" value='Cancel' className="btn bg-red-500 hover:bg-red-500 text-white w-36 " onClick={() => { setPermisionShow(false) }} />
                                </div>
                                {!addExtra && <div className="mt-7 tooltip tooltip-secondary" data-tip="Add New Column">
                                    <FaCirclePlus onClick={() => setAddExtra(true)} className=" text-3xl cursor-pointer"  ></FaCirclePlus>
                                    {/* <button >Insert New</button> */}
                                </div>}
                                {/* <div className="mt-7">
                                    <FaCopy className="text-3xl cursor-pointer"></FaCopy>
                                </div> */}
                                <div className="form-control  mt-5">

                                    <input type="submit" value='Update' className="btn bg-red-500 hover:bg-red-500 text-white w-36 " onClick={() => { setPermisionShow(true) }} />
                                </div>

                            </div>
                        </form>
                    </div>
                </dialog>}

                {
                    deleteOpen && <dialog id="deleteTemplateData" className="modal">
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
                    </dialog>
                }


            </div >

        </div >
    );
};

export default Database2;
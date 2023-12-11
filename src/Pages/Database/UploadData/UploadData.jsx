import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../../../Contexts/Contexts";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AllData = () => {
    const { user, findData, userData } = useContext(AuthContexts)
    // const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(true)

    const { register, handleSubmit } = useForm();

    const onsubmit = (data) => {
        // console.log(data)
        const uploadedData = {
            clientEmail: user?.email,
            date: new Date().toString(),
            data
        }
        setOpen(false)
        console.log(uploadedData)
        fetch('http://localhost:5000/uploadDatabase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(uploadedData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

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
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <div className="px-2">
                <button className='btn btn-secondary px-6 font-bold hover:text-white rounded-lg' onClick={() => { setOpen(true); document.getElementById('my_modal_Fish')?.showModal(); }}>{'Double Click to Upload Data'}</button>
            </div>
            <h3 className="text-3xl font-bold px-2 py-2">Recent Data</h3>




            <div className="text-center">
                <div className=" py-6">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th>Sl No.</th>
                                {
                                    userData?.colName?.map((col, i) => <th key={i}>{col}</th>)
                                }


                            </tr>
                        </thead>
                        <tbody>
                            {
                                findData.slice(0, 5).map((data, i) => <tr key={i} className="hover">
                                    <td>{i + 1}</td>
                                    {
                                        Object.values(data?.data).map((dat, i) => <td key={i}> {dat}</td>)
                                    }



                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

            {open && <dialog id="my_modal_Fish" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form action="" method="dialog" className='py-4' onSubmit={handleSubmit(onsubmit)}>
                        {/* if there is a button in form, it will close the modal */}


                        <h3 className='text-center font-bold'>Enter Item Details</h3>
                        {
                            userData?.colName?.map((col, i) => <div key={i} className="form-control w-full ">
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

export default AllData;
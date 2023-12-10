import { useContext, useState } from "react";
import { AuthContexts } from "../../../Contexts/Contexts";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AllData = () => {
    const { user } = useContext(AuthContexts)
    // const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(true)
    const { register, handleSubmit } = useForm();
    const { data: userData = [], } = useQuery({
        queryKey: ['userDatas'],
        queryFn: async () => {
            // setLoading(true)
            const res = await fetch(`http://localhost:5000/user/${user?.email}`)
            const data = res.json()
            // setLoading(false)
            return data;
        }
    })
    const { data: findData = [], refetch } = useQuery({
        queryKey: ['findDatas'],
        queryFn: async () => {
            // setLoading(true)
            const res = await fetch(`http://localhost:5000/datafind/${user?.email}`)
            const data = res.json()
            // setLoading(false)
            return data;
        }
    })
    console.log((findData))
    const onsubmit = (data) => {
        console.log(data)
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
                refetch(`http://localhost:5000/datafind/${user?.email}`)
            })
    }

    // const myArray = Object.values(person);
    // const handleData = () => {
    //     console.log('uploaded')
    // }

    return (
        <div>
            <div className="px-10">
                <button className='btn btn-secondary px-12 font-bold hover:text-white rounded-lg' onClick={() => { setOpen(true); document.getElementById('my_modal_Fish')?.showModal(); }}>{'Double Click to Upload Data'}</button>
            </div>
            <h3 className="text-center font-bold text-3xl">Recent Data</h3>

            {/* <h3>{findData.length}</h3> */}



            <div className="text-center">
                <div className=" py-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Sl No.</th>
                                {
                                    userData?.colName?.map((col, i) => <th key={i}>{col}</th>)
                                }


                            </tr>
                        </thead>
                        <tbody>
                            {
                                findData.map((data, i) => <tr key={i} className="hover">
                                    <td>{i + 1}</td>{
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
                                    <span className="label-text">set {col}</span>

                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " {...register(`${col}`)} />

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
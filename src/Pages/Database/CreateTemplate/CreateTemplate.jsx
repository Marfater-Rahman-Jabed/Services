import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContexts } from "../../../Contexts/Contexts";
// import { useQuery } from "@tanstack/react-query";

const CreateTemplate = () => {
    const [colNo, setColNo] = useState('')
    const [colName, setColName] = useState('')
    // console.log(colNo, colName)
    const navigate = useNavigate()
    const { userData } = useContext(AuthContexts)

    // const { data: userData = [], } = useQuery({
    //     queryKey: ['userDatas'],
    //     queryFn: async () => {
    //         // setLoading(true)
    //         const res = await fetch(`https://pdf-to-excel-server.vercel.app/user/${user?.email}`)
    //         const data = res.json()
    //         // setLoading(false)
    //         return data;
    //     }
    // })


    const handleSubmit = () => {
        const data = colName.toString().split(',')
        const filteredArray = data.filter(element => element);
        console.log(colNo, filteredArray)
        if (colNo == filteredArray.length) {
            const datas = {
                colNo, filteredArray
            }
            // console.log(data)
            toast.success('Your template created Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            fetch(`https://pdf-to-excel-server.vercel.app/templateUpdate/${userData?._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(datas)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    navigate('/database/uploadData');
                    window.location.reload()
                })

        }

        else {
            // console.log('does not equal')
            toast.error(`Opps, Sorry! You write ${filteredArray.length} item but you want to enter ${colNo} item`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div >
            <label htmlFor="Dashbord-drawer" className="drawer-button btn  lg:hidden  flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <h3 className="text-center text-xl pt-3">Create Your template by given Following Information</h3>
            <div className="flex  justify-around pt-6 px-10">
                <div>

                    {
                        userData?.colName && <div>

                            <h3 className="pt-4 text-3xl text-center font-bold">Current Template</h3>
                            <div className="mt-10 py-4 bg-slate-300 px-4">
                                <button className="btn btn-sm btn-circle btn-ghost right-2 top-2 ">✕</button>
                                <h3 className="text-semibold text-center pt-2">Enter your item details</h3>
                                {
                                    userData?.colName?.map((col, i) => <div key={i} className=" w-full">
                                        <label className="label">
                                            <span className="label-text">Enter {col}</span>

                                        </label>
                                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-80 " />

                                    </div>)
                                }
                                <div className="flex justify-center gap-4 py-2">
                                    <div>
                                        <button className="btn btn-secondary w-36">Submit</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-secondary w-36">Reset</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div>
                    <h3 className="pt-4 text-3xl text-center font-bold">{userData?.colNo ? `Update` : `Create`} Template</h3>
                    {userData?.colNo && <p className="text-red-500 py-2">Becareful! Current Template will be replaced <br /> by Updated Template</p>}
                    <div className="py-5">

                        <div>
                            <div className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-bold">Enter Your data field Number</span>

                                </div>
                                <input type="number" placeholder="Search " className="input input-bordered input-secondary w-80 rounded-xl  text-center" min={1} onChange={(e) => setColNo(e.target.value)} />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-bold">Enter Your Column&apos;s Name Sequencially & separated by comma(,) </span>

                                </div>
                                <textarea className="textarea textarea-bordered textarea-lg w-full  textarea-secondary" placeholder="Example: name,email,phone" onChange={(e) => setColName(e.target.value)}></textarea>

                            </div>
                        </div>
                        <div className="flex justify-center pt-3">
                            <button className="btn btn-secondary w-full max-w-xs" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default CreateTemplate;
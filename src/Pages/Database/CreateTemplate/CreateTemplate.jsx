import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContexts } from "../../../Contexts/Contexts";
import { useQuery } from "@tanstack/react-query";

const CreateTemplate = () => {
    const [colNo, setColNo] = useState('')
    const [colName, setColName] = useState('')
    // console.log(colNo, colName)
    const navigate = useNavigate()
    const { user } = useContext(AuthContexts)

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


    const handleSubmit = () => {
        const data = colName.toString().split(',')
        console.log(colNo, data)
        if (colNo == data.length) {
            const datas = {
                colNo, data
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
            fetch(`http://localhost:5000/templateUpdate/${userData?._id}`, {
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
                })

        }

        else {
            // console.log('does not equal')
            toast.error(`Opps, Sorry! You write ${data.length} item but you want to enter ${colNo} item`, {
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
            <h3 className="text-center text-xl pt-10">Create Your template by given Following Information</h3>
            <div className="flex  justify-center pt-8">

                <div>
                    <div className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Your Column Number</span>

                        </div>
                        <input type="number" placeholder="Search " className="input input-bordered input-secondary w-80 rounded-xl  text-center" onChange={(e) => setColNo(e.target.value)} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold">Enter Your Column&apos;s Name Sequencially & separated by comma(,) </span>

                        </div>
                        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs textarea-secondary" placeholder="Example: (name,email,phone)" onChange={(e) => setColName(e.target.value)}></textarea>

                    </div>
                </div>
            </div>

            {/* {
                    colNo && <div className="mt-2">
                        {
                            Array.from(Array(parseInt(colNo))).map((col, i) => <div key={i} className="py-2">
                                <label className=" w-full ">

                                    <input type="text" placeholder="Set Column Name" className="input input-bordered input-secondary w-full max-w-xs" />

                                </label>
                            </div>)
                        }
                    </div>
                } */}

            <div className="flex justify-center pt-3">
                <button className="btn btn-secondary w-full max-w-xs" onClick={handleSubmit}>Submit</button>
            </div>

        </div>
    );
};

export default CreateTemplate;
import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContexts } from "../../../Contexts/Contexts";
import { toast } from "react-toastify";

const TemplateCreated = () => {
    const [colNo, setColNo] = useState('')
    const [colName, setColName] = useState('')
    const [tempName, setTempName] = useState('')
    // console.log(colNo, colName)
    // const navigate = useNavigate()
    const { userData } = useContext(AuthContexts)

    const handleSubmit = () => {
        const data = colName.toString().split(',')
        const filteredArray = data.filter(element => element);
        console.log(colNo, filteredArray)
        if (colNo == filteredArray.length) {
            const datas = {
                colNo, tempName, filteredArray
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
            fetch(`http://localhost:5000/templateCreated/${userData?._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(datas)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // navigate('/database/uploadData');
                    // window.location.reload()
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
    return (
        <div>
            <div>
                <div>
                    <h3 className="pt-4 text-3xl text-center font-bold">{userData?.colNo ? `Update` : `Create`} Template</h3>
                    <h3 className="text-center">
                        {userData?.colNo && <p className="text-red-500 py-2">Becareful! Current Template will be replaced <br /> by Updated Template</p>}
                    </h3>
                    <div className="py-5 flex justify-center">

                        <div>
                            <div className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-bold">Enter Your data field Number</span>

                                </div>
                                <input type="number" placeholder="Enter here " className="input input-bordered input-secondary w-80 rounded-xl  text-center" min={1} onChange={(e) => setColNo(e.target.value)} />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-bold">Enter Your Template Name</span>

                                </div>
                                <input type="text" placeholder="Set Template Name " className="input input-bordered input-secondary w-80 rounded-xl  text-center" onChange={(e) => setTempName(e.target.value)} />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text font-bold">Enter Your Column&apos;s Name Sequencially & separated by comma(,) </span>

                                </div>
                                <textarea className="textarea textarea-bordered textarea-lg w-full  textarea-secondary" placeholder="Example: name,email,phone" onChange={(e) => setColName(e.target.value)}></textarea>

                            </div>
                            <div className="flex justify-center pt-3">
                                <button className="btn btn-secondary w-full max-w-xs" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default TemplateCreated;
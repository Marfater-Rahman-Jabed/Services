import { useEffect, useState } from "react";

const CreateTemplate = () => {
    const [colNo, setColNo] = useState('')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="text-center">
            <h3 className="text-center text-xl">Create Your template by given Following Information</h3>

            <div className="py-2">
                <input type="number" placeholder="Search " className="input input-bordered input-secondary w-80 rounded-3xl " onChange={(e) => setColNo(e.target.value)} />
                {
                    colNo && <div className="">
                        {
                            Array.from(Array(parseInt(colNo))).map((col, i) => <div key={i} className="py-2">
                                <label className=" w-full ">

                                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                                </label>
                            </div>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default CreateTemplate;
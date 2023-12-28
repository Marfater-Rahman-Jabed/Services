import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, } from "react-router-dom";
import { AuthContexts } from "../../../Contexts/Contexts";
import { toast } from "react-toastify";

const UpdateDetails = () => {
    const { userData } = useContext(AuthContexts)
    const location = useLocation()
    // console.log(location.pathname.split('/')[3].split(',))
    const { from } = location.state
    const { register, handleSubmit } = useForm();
    console.log(from)

    const templateData = userData?.templateList?.filter(data => data?._id === from?.templateId)
    // const tepmlateIds = templateData[0]._id;
    // console.log(templateData[0]._id)
    // const navigate = useNavigate()


    const handleUpdate = (data) => {
        console.log(data)

        fetch(`http://localhost:5000/updateSecondDatabaseData/${from?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)

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
                { history.back() }
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <label htmlFor="Dashbord-drawer2" className="drawer-button btn  lg:hidden  flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="flex justify-between">

                <div className="w-1/2">
                    <h3 className="text-center font-bold text-xl">Current Data</h3>

                    {templateData ? <div className="px-10 bg-purple-300 py-2">
                        {
                            Object.values(from?.data).map((col, i) => <div key={i}>
                                <h3 className="font-semibold">{templateData[0].colName[i]}</h3>
                                <input type="text" placeholder={col} value={col} className="input input-bordered input-secondary w-full mt-2" disabled />
                            </div>)
                        }

                    </div> : ''}
                    <div className="py-2">
                        <button onClick={() => history.back()} className="btn btn-primary">Back Previous</button>
                    </div>
                </div>
                <div className="w-1/2">
                    <h3 className="text-center font-bold text-xl">Update your Data</h3>
                    {templateData ? <form action="" onSubmit={handleSubmit(handleUpdate)}>

                        <div className="px-10">
                            {
                                templateData[0].colName.map((names, i) => <div key={i}>

                                    {templateData[0].colName[i]}

                                    <input key={i} type="text" placeholder="Type Here" defaultValue={Object.values(from?.data)[i]} className="input input-bordered input-secondary w-full mt-2"  {...register(`${templateData[0].colName[i]}`)} required />

                                </div>)}
                            {/* {
                                .map((col, i) => 

                                )
                            } */}




                        </div>

                        <div className="flex justify-end py-4 px-10 gap-3">

                            <input type="submit" value="Update" className="btn btn-secondary" />

                        </div>
                    </form> : ''}

                </div>
            </div>
        </div>

    );
};

export default UpdateDetails;
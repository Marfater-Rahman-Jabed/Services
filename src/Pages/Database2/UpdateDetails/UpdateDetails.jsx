import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, } from "react-router-dom";
import { AuthContexts } from "../../../Contexts/Contexts";
import { toast } from "react-toastify";

const UpdateDetails = () => {
    const { userData } = useContext(AuthContexts)
    const location = useLocation()
    const { from } = location.state
    const { register, handleSubmit } = useForm();
    // console.log(from._id)

    const templateData = userData?.templateList.filter(data => data?._id === from?.templateId)
    const tepmlateIds = templateData[0]._id;
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
                // navigate(`/database2/detailsTemplate/${tepmlateIds}`)
                // refetch(`http://localhost:5000/datafind/${user?.email}`)
            })
    }
    return (
        <div className="flex justify-between">
            <div className="w-1/2">
                <h3 className="text-center font-bold text-xl">Current Data</h3>

                <div className="px-10 bg-purple-300 py-2">
                    {
                        Object.values(from?.data).map((col, i) => <div key={i}>
                            <h3 className="font-semibold">{templateData[0].colName[i]}</h3>
                            <input type="text" placeholder={col} value={col} className="input input-bordered input-secondary w-full mt-2" disabled />
                        </div>)
                    }

                </div>
            </div>
            <div className="w-1/2">
                <h3 className="text-center">Update your Data</h3>
                <form action="" onSubmit={handleSubmit(handleUpdate)}>

                    <div className="px-10">
                        {/* {
                            templateData[0].colName.map((names) => <div key={names}>
                            </div>)} */}
                        {
                            Object.values(from?.data).map((col, i) => <div key={i}>
                                {templateData[0].colName[i]}
                                <input key={i} type="text" placeholder={col} defaultValue={col} className="input input-bordered input-secondary w-full mt-2"  {...register(`${templateData[0].colName[i]}`)} required />
                            </div>

                            )
                        }




                    </div>
                    <div className="flex justify-end py-4 px-10">
                        <input type="submit" value="Update" className="btn btn-secondary" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDetails;
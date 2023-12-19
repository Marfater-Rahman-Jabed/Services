import { useContext } from "react";
import { AuthContexts } from "../../Contexts/Contexts";
import { Link } from "react-router-dom";


const Database2 = () => {
    const { userData } = useContext(AuthContexts)
    console.log(userData.templateList)
    return (
        <div>

            <div className="overflow-x-auto px-10 py-10" >
                <table className="table ">
                    {/* head */}
                    <thead >
                        <tr className="bg-slate-500 text-white">
                            <th >SL. No</th>
                            <th >Template Name</th>
                            <th >Template Preview</th>
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

                        </tr>)

                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Database2;
// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
// import { AuthContexts } from "../../Contexts/Contexts";

const Database = () => {
    const [searchData, setSearchData] = useState('')
    console.log(searchData)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <div className="flex justify-between px-3  py-2">

                <div className="flex justify-center">
                    <CiSearch className="text-5xl -ps-4 text-secondary"></CiSearch>
                    <input type="text" placeholder="Search " className="input input-bordered input-secondary w-80 rounded-3xl " onChange={(e) => setSearchData(e.target.value)} />

                </div>
                <p className="text-3xl font-bold text-center">All Data List</p>
                <button className="btn btn-secondary">Export to Excel</button>
            </div>
        </div>
    );
};

export default Database;
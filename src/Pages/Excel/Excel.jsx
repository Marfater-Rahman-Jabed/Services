import { Link } from "react-router-dom";
import Card from "../../Component/Card/Card";
import excelRemain from '../../assets/excelRemainning.png'
import comparValue from '../../assets/compareExcel.png'
import matching from '../../assets/matchingimage2.jpg'
import { useEffect } from "react";
const Excel = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="flex justify-center   items-center gap-4 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full">
            <div>
                <div>
                    <h3 className="text-center text-5xl font-bold text-white py-10">Calculate Excel Easily </h3>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <Link to='/excelRemainingDate'>
                        <Card title={"Remaining Date"} image={excelRemain}></Card>
                    </Link>
                    <Link to='/excelCompare'>
                        <Card title={"Compare value "} image={comparValue}></Card>
                    </Link>
                    <Link to='/excelMatching'>
                        <Card title={"Matching Item"} image={matching}></Card>
                    </Link>
                    <Link to='/excelReplace'>
                        <Card title={"Excel Comming Soon"} image={comparValue}></Card>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Excel;
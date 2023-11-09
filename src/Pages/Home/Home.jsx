import { Link } from "react-router-dom";
import Card from "../../Component/Card/Card";
import excelImage from '../../assets/excel2.jpeg'
import PhotoRoom from '../../assets/photoRoom.jpg'
import BarQR from '../../assets/BarQR.png'
import SpeechToText from '../../assets/SpeachToText.png'
import CardMaker from '../../assets/Cardmaker.jpeg'
import TypeSpeed from '../../assets/typepeed.png'
import Invoice from '../../assets/invoice.jpeg'

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className=" text-center py-10 font-bold">
                <h2 className="text-5xl text-white">Our Services</h2>
            </div>
            <div>
                <div className="py-4 px-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

                    <Link to='/image'>
                        <Card image={PhotoRoom} title={"PhotoRoom"}></Card>
                    </Link>
                    <Link to='/excel'>
                        <Card image={excelImage} title={"Excel Remaining Day"}></Card>
                    </Link>
                    <Link to='/bar&qr'>
                        <Card image={BarQR} title={"Bar & QR code Generator"}></Card>
                    </Link>
                    <Link to='/speechtotext'>
                        <Card image={SpeechToText} title={"Speech To Text Converter "}></Card>
                    </Link>
                    <Link to='/cardmaker'>
                        <Card image={CardMaker} title={"Card Maker"}></Card>
                    </Link>
                    <Link to='/typespeed'>
                        <Card image={TypeSpeed} title={"Type Speed Test"}></Card>
                    </Link>
                    <Link to='/invoice'>
                        <Card image={Invoice} title={"Invoice Generator"}></Card>
                    </Link>
                    <Link to='/excel'>
                        <Card image={excelImage} title={"Excel Remaining Day"}></Card>
                    </Link>
                    <Link to='/excel'>
                        <Card image={excelImage} title={"Excel Remaining Day"}></Card>
                    </Link>
                    <Link to='/excel'>
                        <Card image={excelImage} title={"Excel Remaining Day"}></Card>
                    </Link>
                    <Link to='/excel'>
                        <Card image={excelImage} title={"Excel Remaining Day"}></Card>
                    </Link>
                    <Link to='/excel'>
                        <Card image={excelImage} title={"Excel Remaining Day"}></Card>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
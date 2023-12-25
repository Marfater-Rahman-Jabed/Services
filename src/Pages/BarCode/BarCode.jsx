import { Link } from "react-router-dom";
import Card from "../../Component/Card/Card";
import QRCodeWithLogo from '../../assets/WithLogo.png'
import QRCodeWithOutLogo from '../../assets/withoutLogo.png'
import BarQ from '../../assets/BarCodeed.png'
import { useEffect } from "react";
const BarCode = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] ">
            <div className='text-center text-5xl font-bold text-white py-16'>
                <h3>Choose your Option</h3>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-6  pt-6">

                <div>
                    <Link to='/bar&qr/qrLogo'>
                        <Card image={QRCodeWithLogo} title={"QR Code With Logo"}></Card>
                    </Link>
                </div>
                <div>
                    <Link to='/bar&qr/qroutLogo'>
                        <Card image={QRCodeWithOutLogo} title={"QR Code Without Logo"}></Card>
                    </Link>
                </div>
                <div>
                    <Link to='/bar&qr/barcode'>
                        <Card image={BarQ} title={"BarCode Generate"}></Card>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default BarCode;
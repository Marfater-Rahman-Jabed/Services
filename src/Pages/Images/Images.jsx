import Card from "../../Component/Card/Card";
import { Link } from "react-router-dom";
import cropImage from '../../assets/cropImage.jpg'
import ImageGenerate from '../../assets/generateImage.jpg'
import ImageResize from '../../assets/ImageResize2.png'
import imageToText from '../../assets/imageToText.jpg'
import { useEffect } from "react";

const Images = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex justify-center  items-center gap-4 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full">
            <div>
                <div>
                    <h3 className="text-center text-5xl font-bold text-white py-16">Explore My Photo Room </h3>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <Link to='/cropImage'>
                        <Card image={cropImage} title='Crop Image'> </Card>
                    </Link>
                    <Link to='/resizeImage'>
                        <Card image={ImageResize} title='Resize Image'></Card>
                    </Link>
                    <Link to='/generateImage'>
                        <Card image={ImageGenerate} title='Generate Image'></Card>
                    </Link>
                    <Link to='/imageToText'>
                        <Card image={imageToText} title='Image To Text Converter'></Card>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Images;
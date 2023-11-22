import Card from "../../Component/Card/Card";
import { Link } from "react-router-dom";
import cropImage from '../../assets/cropImage.jpg'
import ImageGenerate from '../../assets/generateImage.jpg'

const Images = () => {
    return (
        <div className="flex justify-center  items-center gap-4">
            <div>
                <div>
                    <h3 className="text-center text-5xl font-bold py-16">Explore My Photo Room </h3>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <Link to='/cropImage'>
                        <Card image={cropImage} title='Crop Image'> </Card>
                    </Link>
                    <Link to='/generateImage'>
                        <Card image={ImageGenerate} title='Generate Image'></Card>
                    </Link>
                    <Link to='/generateImage'>
                        <Card image={ImageGenerate} title='Generate Image'></Card>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Images;
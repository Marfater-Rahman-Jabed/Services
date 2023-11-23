import { useState } from "react";
import defaultImage from '../../../assets/mask.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ImageGenerate = () => {
    const [term, setTerm] = useState('')
    const [datas, setDatas] = useState([])
    // const [loading, setLoading] = useState(false)
    const [arrayIndex, setArrayIndex] = useState(0)
    console.log(datas)
    // 
    // console.log(photoUrl)


    const handleGenerate = () => {
        setDatas([])
        setArrayIndex(0)
        fetch(`https://pixabay.com/api/?key=40815432-67b7acf6545f4ed2ec202ef86&q=${term}&image_type=all&safesearch=true&per_page=50
        `)
            .then(res => res.json())
            .then(data => {

                setDatas(data.hits)
                // setLoading(false)
                // setPhotoUrl(data.hits[0]?.webformatURL)

            })
    }

    const handleRegenerate = () => {

        if (arrayIndex == datas.length) {
            setArrayIndex(0)
        }
        else {

            setArrayIndex(arrayIndex + 1)
        }

    }
    const imageUrl = `${datas[arrayIndex]?.webformatURL}`;
    const filename = 'image.jpg';

    const downloadImage = () => {
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                link.click();

                window.URL.revokeObjectURL(url);
            });
    };


    return (
        <div className="pt-1 h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex justify-center">
                {datas[arrayIndex]?.webformatURL ?
                    <div >
                        <PhotoProvider>
                            <PhotoView src={datas[arrayIndex]?.webformatURL ? datas[arrayIndex]?.webformatURL : defaultImage}>
                                <img src={datas[arrayIndex]?.webformatURL ? datas[arrayIndex]?.webformatURL : defaultImage} alt="" className="w-96 h-96 bg-white" />
                            </PhotoView>
                        </PhotoProvider>
                        <p className="text-center text-xs text-white font-semibold">Click on photo to see full view</p>
                        <div className="   flex justify-between gap-1 mt-2">

                            <div>
                                <button className="btn btn-secondary" onClick={handleRegenerate}>Re-Generate Image</button>
                            </div>
                            <div>
                                <button className="btn btn-warning" onClick={downloadImage}>Download Image</button>
                            </div>
                        </div>
                    </div>
                    :
                    <img src={defaultImage} alt="" className="w-96 h-96" />
                }
            </div>
            {/* {datas.length > arrayIndex &&} */}
            <div className="flex justify-center ">
                <div className="w-96">

                    <div className="form-control w-full  mb-2">
                        <label className="label">
                            <span className="label-text text-white">Search Here</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full" onChange={(e) => setTerm(e.target.value)} />
                    </div>
                    <div className="flex justify-center gap-3">
                        <div className="form-control w-full mb-3">

                            <button className="btn btn-primary" onClick={handleGenerate}>Generate</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default ImageGenerate;
import { useState } from "react";
import Resizer from "react-image-file-resizer";
import defaultPhoto from '../../../assets/mask.png'
const ResizeImage = () => {
    const [selectedImage, setSelectedImage] = useState('')
    const [selectedImageUrl, setSelectedImageUrl] = useState('')
    const [previewImage, setPreviewImage] = useState('')
    const [previewSize, setPreviewSize] = useState(10)
    const [previewHight, setPreviewHight] = useState(10)
    const [format, setFormat] = useState("JPEG")
    const [isLoading, setIsloading] = useState(false)
    // const [hight, setHight] = useState(10)



    console.log(selectedImageUrl)
    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                previewSize,
                previewHight,
                format,
                100,
                0,
                (uri) => {

                    resolve(uri);
                    setPreviewImage(uri)
                    setIsloading(false)
                },
                "file",
                previewSize,
                previewHight
            );
        });

    const handleUpload = async () => {
        try {
            setIsloading(true)

            const file = selectedImage;
            const image = await resizeFile(file);
            console.log(image);
        } catch (err) {
            console.log(err);
        }
    };



    const downloadImage = () => {
        const imageUrl = URL?.createObjectURL(previewImage);
        const filename = `image.png`;
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
        <div className="flex justify-center  py-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div>
                <div className="form-control w-full pt-2">

                    <input type="file" className="file-input file-input-bordered file-input-secondary w-full " onChange={(e) => { setSelectedImage(e.target.files[0]); setSelectedImageUrl(URL.createObjectURL(e.target.files[0])) }} />
                </div>
                <div className=" w-full flex justify-between gap-2 py-2">
                    <div className=" w-full ">
                        <label className="label">
                            <span className="label-text  text-white">Enter Height</span>

                        </label>
                        <input type="number" className="input input-bordered input-secondary w-full " onChange={(e) => setPreviewHight(e.target.value)} placeholder="Photo Height" />


                    </div>
                    <div className=" w-full ">
                        <label className="label">
                            <span className="label-text  text-white">Enter Width</span>

                        </label>
                        <input type="number" className="input input-bordered input-secondary w-full " onChange={(e) => setPreviewSize(e.target.value)} placeholder="Photo Width" />
                    </div>


                </div>
                <div className="flex justify-between gap-2">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text  text-white">Choose Format</span>

                        </label>
                        <select className="select select-secondary mb-1 w-full " onChange={(e) => setFormat(e.target.value)} placeholder="Pick Image Format">

                            <option value={'JPEG'}>JPEG</option>
                            <option value={'PNG'}>PNG</option>

                        </select>

                    </div>
                    <div className=" w-full pt-5">
                        <label className="label">
                            <span className="label-text"></span>

                        </label>
                        <button className="btn btn-secondary w-full" onClick={handleUpload}>Generate</button>
                    </div>
                </div>
                <div className="flex justify-center px-10 gap-6 border-4 border-solid border-purple-500 py-2 bg-white">
                    <div className="w-1/2">
                        {selectedImage ? <h3 className="font-bold  text-black">Original Photo</h3> :
                            <h3 className="font-bold  text-black">Default photo</h3>}
                        {selectedImage ? <div className="flex  justify-center py-4 ">

                            <img src={selectedImageUrl} alt="" />
                        </div>
                            :
                            <div className="flex flex-col justify-center py-4 ">

                                <img src={defaultPhoto} alt="" className="w-64 h-64" />
                            </div>
                        }
                    </div>
                    <div >
                        {!isLoading && previewImage ? <h3 className="font-bold  text-black">Resized Photo</h3> :
                            <h3 className="font-bold  text-black">Default photo</h3>}
                        {!isLoading && previewImage ?
                            <div className="py-4 w-1/2">

                                <div className="flex justify-center ">

                                    <img src={URL.createObjectURL(previewImage)} alt="" />

                                </div>
                                <button className="btn btn-xs btn-warning mt-1" onClick={downloadImage}>Download</button>
                            </div> :
                            <div className="flex flex-col justify-center py-4 ">

                                <img src={defaultPhoto} alt="" className="w-64 h-64" />
                            </div>
                        }
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ResizeImage;
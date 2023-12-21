import { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import useClipboard from "react-use-clipboard";
const ImageToText = () => {
    const [ocr, setOcr] = useState("");
    const [imageData, setImageData] = useState(null);
    const [isCopied, setCopied] = useClipboard(ocr);
    const [isLoading, setIsloading] = useState(false)


    console.log(ocr)
    // const worker = createWorker({
    //     logger: (m) => {
    //         console.log(m);
    //     },
    // });
    const convertImageToText = async () => {

        const worker = await createWorker('eng');
        const ret = await worker.recognize(imageData);
        console.log(ret.data.text);
        setOcr(ret.data.text)
        setIsloading(false)
        await worker.terminate();

    };

    useEffect(() => {
        convertImageToText();
    }, [imageData]);

    const handleImageChange = (e) => {
        setOcr('')
        setIsloading(true)
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageDataUri = reader.result;
            console.log({ imageDataUri });
            setImageData(imageDataUri);
        };
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full">
            <div className="mb-3">
                <div className="py-10">
                    <h3 className="text-5xl text-white text-center font-bold">Image To Text Converter</h3>

                </div>
                <div className="text-center">
                    <p className="text-white text-center font-bold">N-B:(Choose Clear Image to get better performance)</p>
                    <input

                        type="file"
                        className="file-input file-input-bordered file-input-secondary w-96 "
                        name=""
                        id=""
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </div>
            </div>
            <div className="flex px-4 gap-4">
                <div className="w-1/2 bg-white ">
                    {imageData && <p className="text-center font-bold">Image</p>}
                    <img src={imageData} alt="" />
                </div>
                <div className="w-1/2 bg-white px-2">
                    {ocr && <p className="text-center font-bold">Text Data</p>}
                    <div>
                        {!isLoading || ocr ? <p className="text-justify ">{ocr}</p> : <div className="flex justify-center py-10">
                            <progress className="progress progress-secondary w-56"></progress>
                        </div>

                        }
                    </div>
                    <div className="flex justify-center py-10">
                        {ocr ?
                            <div>
                                <button className="btn btn-success px-10" onClick={setCopied} >
                                    {isCopied ? 'Copied' : 'Copy Text'}
                                </button>

                            </div> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageToText;
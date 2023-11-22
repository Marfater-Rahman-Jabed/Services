import { useState, useRef } from 'react';
import './Images.css';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import { AiOutlineRotateRight } from 'react-icons/ai';
import { canvasPreview } from './CropImage'
import defaultImage from '../../../assets/mask.png'
const CropedImages = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const imgRef = useRef(null);
    const [crop, setCrop] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [scale, setScale] = useState(1);
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [completedCrop, setCompletedCrop] = useState();
    const imageUrl = selectedImage;

    console.log(crop)

    const onZoom = (e) => {
        setScale(parseFloat(e));
    };

    const rotateRight = () => {
        let newRotation = rotation + 90;
        if (newRotation >= 360) {
            newRotation = -360;
        }
        setRotation(newRotation);
    };

    const download = async () => {
        await canvasPreview(imgRef.current, completedCrop, scale, rotation);
    };
    const onImageLoad = (e) => {
        setHeight(e?.currentTarget?.height);
        setWidth(e?.currentTarget?.width);
        setCompletedCrop({
            x: 0,
            y: 0,
            height: e?.currentTarget?.height,
            width: e?.currentTarget?.width,
            unit: 'px'
        });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file)
        setSelectedImage(URL.createObjectURL(file));

    };

    return (
        <div className=' flex justify-center pt-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen'>
            <div className=''>
                <div className='flex justify-center'>
                    <input type="file" className='file-input file-input-bordered file-input-secondary w-full max-w-xs' accept="image/*" onChange={handleImageUpload} />
                </div>
                <div
                    className={'outerDiv '}
                    onWheel={(e) => {
                        if (e.deltaY > 0) {
                            setScale(scale + 0.1);
                        } else if (e.deltaY < 0 && scale > 0.1) {
                            setScale(scale - 0.1);
                        }
                    }}
                >
                    <div className='flex justify-center w-[400px] h-full'>
                        <ReactCrop

                            src={imageUrl}
                            crop={crop}
                            onChange={(_, percentCrop) => {
                                setCrop(percentCrop);
                            }}
                            onComplete={(e) => {
                                if (e?.height == 0 || e?.width == 0) {
                                    setCompletedCrop({
                                        x: 0,
                                        y: 0,
                                        height: height,
                                        width: width,
                                        unit: 'px'
                                    });
                                } else {
                                    setCompletedCrop(e);
                                }
                            }}
                        >
                            <img
                                className=''

                                ref={imgRef}
                                crossOrigin='anonymous'
                                alt='Error'
                                src={imageUrl ? imageUrl : defaultImage}
                                style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
                                onLoad={onImageLoad}
                            />
                        </ReactCrop>

                    </div>
                    <div className='flex justify-center pt-2'>
                        <span className='text-center text-white'>{crop ? parseInt(crop.width) : 'M'} X {crop ? parseInt(crop.height) : 'N'}</span>
                    </div>
                    <div className={'controls flex justify-center'}>
                        <input
                            type='range'
                            min={0.1}
                            max={3}
                            step={0.05}
                            value={scale}
                            onInput={(e) => {
                                onZoom(e.target.value);
                            }}
                            className={'slider'}
                        ></input>
                        <span className={'rangeText font-bold text-white'}>Zoom In/Out</span>
                    </div>
                    <div className={'controlsIcon flex justify-center gap-4 pt-6 '}>
                        <button className='btn btn-outline text-white' onClick={download}>Download
                            <BsFillCloudDownloadFill className={'text-3xl'} />
                        </button>
                        <button className='btn btn-outline text-white' onClick={rotateRight}>
                            Rotate Image
                            <AiOutlineRotateRight className={'text-3xl'} />
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default CropedImages;
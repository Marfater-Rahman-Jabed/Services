import { QRCode } from 'antd';
import { useEffect, useState } from 'react';
import DefaultLogo from '../../assets/WithLogo.png';

const QRCodesLogo = () => {
    // const divRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [url, setUrl] = useState('Jabed khan')
    // const [isLoadingShow, setIsloadingShow] = useState('active')
    const [color, setColor] = useState('black')
    // const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // setIsloadingShow('loading')
        // setLoading(true)
        // const colors = e.target.selectColor.value;
        // setColor(colors)
        const image = e.target.image.files[0]
        setSelectedImage(URL.createObjectURL(image))
        // const formData = new FormData();
        // formData.append('image', image)

        // const imageKey = '9d81b35f7ad993b4805512a3b950e2b7'
        // fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(image => {
        //         console.log(image)
        //         if (image.success) {
        //             setSelectedImage(image.data.url)
        //             setIsloadingShow('active')
        //             setLoading(false)
        //         }
        //     })
        // console.log(image)
        // console.log(title, description, value)
        // 
    }
    const printf = () => {
        window.print()
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 print:bg-none h-full pt-16'>
            <form onSubmit={handleSubmit} className='flex justify-center gap-3 mb-6 print:hidden'>
                <textarea className="textarea textarea-secondary w-96 " placeholder="Write Something..." onChange={(e) => setUrl(e.target.value)} required></textarea><br />
                <div>
                    <input type="file" name='image' accept="image/*" className='file-input file-input-bordered file-input-secondary w-full max-w-xs ' required /><br />
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white font-bold">Select QR Color</span>

                        </label>
                        <select className="select select-bordered" onChange={(e) => setColor(e.target.value)} >
                            <option selected defaultValue={'red'}>Red</option>
                            <option value={'blue'}>Blue</option>

                            <option value={'black'}>Black</option>
                            <option value={'green'}>green</option>
                            <option value={'yellow'}>yellow</option>
                            <option value={'purple'}>purple</option>

                        </select>

                    </div>
                    <div className='flex justify-center '>
                        <input type="submit" value={'generate'} className='btn btn-accent mt-3 w-full' />
                    </div>
                </div>
            </form>

            <div className='flex justify-center h-80'>
                {
                    selectedImage ?
                        <div className='bg-white w-80  text-center flex justify-center border-2' >
                            <QRCode
                                value={url}
                                size={300}
                                icon={selectedImage}
                                iconSize={40}
                                color={color}
                                // status={isLoadingShow}
                                bordered={true}
                            />
                        </div> : <img src={DefaultLogo} alt="" />
                }
            </div>
            <div className='flex justify-center py-4'>
                <button onClick={printf} className='btn btn-primary w-80  print:hidden'>Print Now</button>
            </div>

        </div>
    );
};

export default QRCodesLogo;
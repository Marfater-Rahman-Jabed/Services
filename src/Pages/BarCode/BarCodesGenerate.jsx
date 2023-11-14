import { useState } from 'react';
import Barcode from 'react-barcode';
const BarCodesGenerate = () => {
    const [url, setUrl] = useState('Develpoed By Jabed')
    const [color, setColor] = useState('#000000')
    const [bgColor, setBgColor] = useState('#FFFFFF')

    const printf = () => {
        window.print()
    }
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] pt-20'>
            <div>
                <div className='flex justify-center gap-3 mb-6 print:hidden'>
                    <textarea className="textarea textarea-secondary w-96 " placeholder="Write Something..." onChange={(e) => setUrl(e.target.value)} required></textarea><br />
                    <div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl text-white font-bold">Select Barcode Color</span>

                            </label>
                            <select className="select select-bordered w-56" onChange={(e) => setColor(e.target.value)} >
                                <option selected defaultValue={'#000000'}>Black</option>
                                <option value={'#FFFFFF'}>White</option>
                                <option value={'#0000FF'}>Blue</option>

                                <option value={'#FF0000'}>Red</option>
                                <option value={'#008000'}>green</option>
                                <option value={'#FFFF00'}>yellow</option>
                                <option value={'purple'}>purple</option>

                            </select>
                            <label className="label">
                                <span className="label-text text-xl text-white font-bold">Select Background Color</span>

                            </label>
                            <select className="select select-bordered w-56" onChange={(e) => setBgColor(e.target.value)} >
                                <option selected defaultValue={'#FFFFFF'}>White</option>
                                <option value={'#000000'}>Black</option>
                                <option value={'#0000FF'}>Blue</option>

                                <option value={'#FF0000'}>Red</option>
                                <option value={'#008000'}>green</option>
                                <option value={'#FFFF00'}>yellow</option>
                                <option value={'purple'}>purple</option>

                            </select>

                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div>
                    <h3 className='text-white text-center font-bold text-xl mb-3 print:hidden'>Generated Barcode</h3>
                    <Barcode
                        value={url}
                        width={1}
                        height={40}
                        lineColor={color}
                        background={bgColor}

                    />
                </div>
            </div>
            <div className='flex justify-center py-4'>
                <button onClick={printf} className='btn btn-primary w-40  print:hidden'>Print Now</button>
            </div>
        </div>
    );
};

export default BarCodesGenerate;
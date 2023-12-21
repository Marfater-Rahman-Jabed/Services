import Barcode from 'react-barcode';
import Logo from '../../assets/mask.png'
import CardLogo from '../../assets/CardoneLogo.jpeg'
import cardBg from '../../assets/cardBg2.jpeg'
import { useEffect, useState } from 'react';
const CardTemp1 = () => {
    const [companyName, setCompanyName] = useState('Jabed IT Solution')
    const [companyLogo, setCompanyLogo] = useState(null)
    const [address, setAddress] = useState('Highlabel road,Khulsi')
    const [district, setDistrict] = useState('Chittgong')
    const [employeName, setEmployeName] = useState('Marfater Rahman')
    const [employeTitle, setEmployeTitle] = useState('Software Engineer')
    const [code, setCode] = useState('123456789')
    const [birth, setBirth] = useState('12-12-2012')
    const [exp, setExp] = useState('12-12-2012')
    const [employePhoto, setEmployePhoto] = useState(null)
    const [barcodeText, setBarcodeText] = useState(code)


    const handleEmployePhoto = (e) => {
        e.preventDefault()

        const image = e.target.files[0];
        setEmployePhoto(URL.createObjectURL(image))

    }
    const handleCompanyLogo = (e) => {
        e.preventDefault()
        const image = e.target.files[0];
        setCompanyLogo(URL.createObjectURL(image))
    }

    const printCard = () => {
        window.print();
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='flex justify-between'>
            <div className='w-1/2 print:w-0 pt-10 bg-purple-400 px-4 pb-16 print:hidden'>
                <p className='text-xl font-bold text-center '>Company Information</p>
                <div>

                    <div className='flex gap-3'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Company Name</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setCompanyName(e.target.value)} />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Company Logo</span>

                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs mb-1" name='image' onChange={handleCompanyLogo} />


                        </div>

                    </div>
                    <div className='flex gap-3'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setAddress(e.target.value)} />


                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">District</span>

                            </label>
                            <select className="select select-secondary w-full max-w-xs" onChange={(e) => setDistrict(e.target.value)}>
                                <option selected defaultValue={'Dhaka, Bangladesh'}>Dhaka</option>
                                <option value={'Chittagong, Bangladesh'}>Chittagong</option>
                                <option value={'Rajshahi, Bangladesh'}>Rajshahi</option>
                                <option value={'Khulna, Bangladesh'}>Khulna</option>
                                <option value={'Barisal, Bangladesh'}>Barisal</option>
                                <option value={'Dinajpur, Bangladesh'}>Dinajpur</option>
                                <option value={'Sylhet, Bangladesh'}>Sylhet</option>
                                <option value={'Mymenshingh, Bangladesh'}>Mymenshingh</option>

                            </select>


                        </div>
                    </div>

                </div>
                <div className="divider "></div>
                <div>
                    <p className='text-xl font-bold text-center py-2'>Employee Information</p>
                    <div className='flex gap-3'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Employe Name</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setEmployeName(e.target.value)} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Employe Title</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setEmployeTitle(e.target.value)} />

                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Code</span>

                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setCode(e.target.value)} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Date Of Birth</span>

                            </label>
                            <input type="date" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setBirth(e.target.value)} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Exp. Date</span>

                            </label>
                            <input type="date" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setExp(e.target.value)} />

                        </div>
                    </div>
                    <div className='flex gap-2'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Employe Photo</span>

                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs mb-1" name='images' onChange={handleEmployePhoto} />


                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Barcode Information</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setBarcodeText(e.target.value)} />

                        </div>

                    </div>

                </div>
            </div>
            <div className="w-1/2 print:w-full border-2 border-double rounded-lg mt-16 mx-4">
                <div className="bg-blue-900 flex justify-end gap-2 px-6 py-8 " style={{
                    backgroundImage: `url(${cardBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }}>
                    <span>
                        <img src={companyLogo ? companyLogo : CardLogo} alt="" className='w-16 h-16 rounded-full' />
                    </span>
                    <span className=" text-white">
                        <h3 className='text-2xl mb-3 font-bold uppercase text-right'>{companyName}</h3>
                        <p className='text-right font-semibold'>{address}</p>
                        <p className='text-right font-semibold'>{district}</p>

                    </span>
                </div>
                <div className='flex gap-3'>
                    <div>
                        <img src={employePhoto ? employePhoto : Logo} alt="" className='w-48 h-48 px-6 -mt-10 mb-3 ' />
                        <Barcode
                            value={barcodeText}
                            width={1}
                            height={40}
                            lineColor={'#000000'}
                            background={'#FFFFFF'}
                            displayValue={false}

                        />
                    </div>
                    <div>
                        <h3 className='mt-6 font-bold text-2xl mb-3 uppercase'>{employeName}</h3>
                        <p className='text-slate-500 font-semibold text-sm'>TITLE:</p>
                        <p className='mb-3 font-semibold'>{employeTitle}</p>
                        <h3 className='text-slate-500 font-semibold text-sm'>CODE:</h3>
                        <p className='mb-3 font-semibold'>{code}</p>
                        <span className='flex justify-between gap-36'>
                            <span>
                                <h3 className='text-slate-500 font-semibold text-sm'>DATE OF BIRTH</h3>
                                <p className=' font-semibold'>{birth}</p>
                            </span>
                            <span>
                                <h3 className='text-slate-500 font-semibold text-sm'>EXP DATE</h3>
                                <p className='mb-3 font-semibold'>{exp}</p>
                            </span>
                        </span>
                    </div>

                </div>
                <div className='bg-blue-900 py-6'>

                </div>
                <div className='flex justify-center mt-12 print:hidden'>
                    <button className='btn btn-accent px-12' onClick={printCard}>Print Now</button>
                </div>
            </div>

        </div>

    );
};

export default CardTemp1;
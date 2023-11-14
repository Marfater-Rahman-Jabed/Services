import Barcode from 'react-barcode';
import Logo from '../../assets/mask.png'
import CardLogo from '../../assets/CardoneLogo.jpeg'
import { useState } from 'react';
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
        const image = e.target.images.files[0];
        const formData = new FormData();
        formData.append('image', image)

        const imageKey = '9d81b35f7ad993b4805512a3b950e2b7'
        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                console.log(image)
                if (image.success) {
                    setEmployePhoto(image.data.url)
                }
            })

    }
    const handleCompanyLogo = (e) => {
        e.preventDefault()
        const image = e.target.image.files[0];
        const formData = new FormData();
        formData.append('image', image)

        const imageKey = '9d81b35f7ad993b4805512a3b950e2b7'
        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                console.log(image)
                if (image.success) {
                    setCompanyLogo(image.data.url)
                }
            })


    }

    const printCard = () => {
        window.print();
    }
    return (
        <div className='flex justify-between'>
            <div className='w-1/2 pt-10 bg-purple-400 px-4 pb-16 print:hidden'>
                <p className='text-xl font-bold text-center '>Company Information</p>
                <div>

                    <div className='flex gap-3'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Company Name</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setCompanyName(e.target.value)} />

                        </div>
                        <form action="" onSubmit={handleCompanyLogo} className='w-full max-w-xs'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Company Logo</span>

                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs mb-1" name='image' />
                                <input type="submit" value="Upload" className='btn btn-xs' />

                            </div>
                        </form>
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
                                <option selected defaultValue={'Dhaka'}>Dhaka</option>
                                <option value={'Chittagong'}>Chittagong</option>
                                <option value={'Rajshahi'}>Rajshahi</option>
                                <option value={'Khulna'}>Khulna</option>
                                <option value={'Barisal'}>Barisal</option>
                                <option value={'Dinajpur'}>Dinajpur</option>
                                <option value={'Sylhet'}>Sylhet</option>
                                <option value={'Mymenshingh'}>Mymenshingh</option>

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
                        <form action="" onSubmit={handleEmployePhoto}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Employe Photo</span>

                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs mb-1" name='images' />
                                <input type="submit" value="Upload" className='btn btn-xs' />

                            </div>
                        </form>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Barcode Information</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setBarcodeText(e.target.value)} />

                        </div>

                    </div>

                </div>
            </div>
            <div className="w-1/2 border-2 border-double rounded-lg mt-16 mx-4">
                <div className="bg-blue-900 flex justify-end gap-2 px-6 py-8">
                    <span>
                        <img src={companyLogo ? companyLogo : CardLogo} alt="" className='w-16 h-16 rounded-full' />
                    </span>
                    <span className=" text-white">
                        <h3 className='text-2xl mb-3 uppercase text-right'>{companyName}</h3>
                        <p className='text-right'>{address}</p>
                        <p className='text-right'>{district}</p>

                    </span>
                </div>
                <div className='flex gap-3'>
                    <div>
                        <img src={employePhoto ? employePhoto : Logo} alt="" className='w-48 h-48 px-6 -mt-10 mb-3' />
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
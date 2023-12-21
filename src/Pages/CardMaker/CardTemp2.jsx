import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt, FaDesktop, FaHome } from "react-icons/fa";
import Tick from '../../assets/Tick.png'
import { useEffect, useState } from "react";

const CardTemp2 = () => {
    const [name, setName] = useState('Devid Warner')
    const [title, setTitle] = useState('Manager')
    const [phone, setPhone] = useState('01827717200')
    const [phoneAlt, setPhoneAlt] = useState('01690093963')
    const [email, setEmail] = useState('devidwarner@gmail.com')
    const [emailAlt, setEmailAlt] = useState('infodevid@gmail.com')
    const [address, setAddress] = useState('Highlabel Road,Khulsi')
    const [district, setDistrict] = useState('Chittagong, Bangladesh')
    const [companyName, setCompanyName] = useState('DesignTick')
    const [companyDes, setCompanyDes] = useState('Creative Company')
    const [logo, setLogo] = useState('')

    const uploadFile = (e) => {
        e.preventDefault()
        const image = e.target.files[0];
        setLogo(URL.createObjectURL(image))

    }

    const printCard = () => {
        window.print();
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex justify-between gap-4 ">
            <div className="w-3/5 bg-green-200 py-10 print:hidden">
                <h3 className="text-center font-bold text-2xl">Fill Up the form</h3>
                <form className="px-10">
                    <div className="flex gap-4">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name*</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setName(e.target.value)} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Title</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setTitle(e.target.value)} />

                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Phone Number</span>
                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setPhone(e.target.value)} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Phone Number (Alternative)</span>
                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setPhoneAlt(e.target.value)} />

                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email/Website</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your email/Website (Alternative)</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setEmailAlt(e.target.value)} />

                        </div>

                    </div>
                    <div className="flex gap-4">
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
                    <div className="flex gap-4">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setCompanyName(e.target.value)} />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Company Description</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setCompanyDes(e.target.value)} />

                        </div>

                    </div>
                    <div className="flex gap-5">
                        <div>
                            <label className="label">
                                <span className="label-text">Choose your logo</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" onChange={uploadFile} />
                        </div>

                        <input type="reset" value={'Form Reset'} className="btn btn-secondary w-full px-16 max-w-xs mt-9" />

                    </div>

                </form>
            </div>
            <div className="w-2/5 print:w-2/3 justify-center mt-10">
                <div>
                    <div className="flex  justify-between gap-4 border-2 border-solid mb-4">
                        <div className="bg-black px-4">

                        </div>
                        <div className="w-12  -mx-10 border-black">
                            <IoIosContact className="text-5xl mb-7 mt-5 text-blue-500"></IoIosContact>
                            <FaPhoneAlt className="text-4xl mb-4 text-blue-500"></FaPhoneAlt>
                            <FaDesktop className="text-4xl mb-3 text-blue-500"></FaDesktop>
                            <FaHome className="text-4xl mb-4 text-blue-500"></FaHome>

                        </div>
                        <div className="py-2 w-3/5 px-8 mt-2">
                            <h3 className="font-bold font-serif text-2xl mt-2 uppercase">{name}</h3>
                            <p className="text-xs font-bold font-serif uppercase">{title}</p>
                            <div className="divider m-0 mt-3"></div>
                            <p className="text-xs font-bold ">{phone}</p>
                            <p className="text-xs font-bold ">{phoneAlt}</p>
                            <div className="divider m-0"></div>
                            <p className="text-xs font-bold ">{email}</p>
                            <p className="text-xs font-bold ">{emailAlt}</p>
                            <div className="divider m-0"></div>
                            <p className="text-xs font-bold ">{address}</p>
                            <p className="text-xs font-bold ">{district}</p>
                        </div>
                        <div className="w-1/5 flex justify-end items-end ps-2">
                            <div>
                                <span className="flex justify-center">

                                    <img src={logo ? logo : Tick} alt="" className="w-20 h-20 rounded-full " />
                                </span>
                                <p className="text-center font-bold uppercase text-2xl">{companyName}</p>
                                <p className="text-center font-bold uppercase text-sm pb-2">{companyDes}</p>
                            </div>
                        </div>
                        <div className="px-2 bg-blue-500">
                            {/* use for right side color */}
                        </div>
                    </div>
                    <div className="flex justify-between border-2 border-solid ">
                        <div className="bg-black px-4">

                        </div>
                        <div className="py-12">
                            <div>
                                <span className="flex justify-center">

                                    <img src={logo ? logo : Tick} alt="" className="w-20 h-20 rounded-full " />
                                </span>
                                <p className="text-center font-bold uppercase text-2xl">{companyName}</p>
                                <p className="text-center font-bold uppercase text-sm pb-2">{companyDes}</p>
                            </div>
                        </div>
                        <div className="bg-blue-500 px-2">

                        </div>


                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-secondary px-10 mt-2 print:hidden" onClick={printCard}>Print Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardTemp2;
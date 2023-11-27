import { useState } from 'react';
import photos from '../../assets/mask.png'
const CardTemp4 = () => {

    const [color, setColor] = useState('blue')
    // const [borderColor, setBorderColor] = useState('border-blue-600')
    const [name, setName] = useState('Marfater Rahman Jabed')
    const [birth, setBirth] = useState('')
    const [className, setClassName] = useState('Eight')
    const [roll, setRoll] = useState('12009045')
    const [section, setSection] = useState('Boys (s1)')
    const [exp, setExp] = useState('')
    const [photo, setPhoto] = useState('')
    const [school, setSchool] = useState('Kazem Ali School & College')

    const Birthdate = `${birth.split('-')[2]}-${birth.split('-')[1]}-${birth.split('-')[0]}`

    const expdate = `${exp.split('-')[2]}-${exp.split('-')[1]}-${exp.split('-')[0]}`

    console.log('bithday', Birthdate)

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className='flex justify-between gap-10 px-10 py-2  min-h-screen'>
            <div className='w-1/2 print:w-0 print:hidden bg-fuchsia-300 px-4'>
                <h3 className='text-center text-3xl font-bold pt-3 '>Fill Up form</h3>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">School Name?</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setSchool(e.target.value)} />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">What is your name?</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setName(e.target.value)} />

                </div>
                <div className='flex justify-between gap-3'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Date Of Birth</span>

                        </label>
                        <input type="date" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setBirth(e.target.value)} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setClassName(e.target.value)} />

                    </div>
                </div>
                <div className='flex justify-between gap-3'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Roll/ID</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setRoll(e.target.value)} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Section</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setSection(e.target.value)} />

                    </div>
                </div>
                <div className='flex justify-between gap-3'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Choose Photo</span>

                        </label>
                        <input type="file" placeholder="Type here" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Exp. Date</span>

                        </label>
                        <input type="date" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setExp(e.target.value)} />

                    </div>

                </div>
                <div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Choose Color</span>

                        </label>
                        <select className="select select-bordered select-secondary" onChange={(e) => setColor(e.target.value)}>
                            <option value={'blue'}>blue</option>
                            <option value={'red'}>Red</option>
                            <option value={'purple'}>Pruple</option>
                            {/* <option value={'bg-green-600'}>Green</option>
                            <option value={'bg-sky-600'}>Sky</option> */}

                        </select>

                    </div>


                </div>

            </div>
            {
                color == 'red' && <div className={`w-1/2 print:w-full  border-8 border-solid border-red-600 rounded-xl bg-white h-80 mt-24`}>
                    <div className='flex justify-center gap-5'>
                        <div className='w-2/5'>
                            <div className='pb-5'>
                                <h3 className={`bg-red-600 rounded-xl text-center py-2 text-xl font-bold text-white rounded-t-none`}>ID Card</h3>
                            </div>
                            <img src={photo ? photo : photos} alt="" className={`h-60 w-60 rounded-xl border-4 rounded-b-none rounded-tl-none solid border-red-600`} />
                        </div>

                        <div className='w-3/5'>
                            <h3 className='text-center font-serif  pt-1'>{school}</h3>
                            <div className='pt-10 flex justify-start gap-2'>

                                <div>
                                    <p className='font-bold mb-3'>Name</p>
                                    <p className='font-bold mb-3'>Date of Birth</p>
                                    <p className='font-bold mb-3'>Class </p>
                                    <p className='font-bold mb-3'>Roll/ID</p>
                                    <p className='font-bold mb-3'>Section</p>
                                    <p className='font-bold mb-3'>Exp. date</p>
                                </div>
                                <div>
                                    <p className='font-serif mb-3 '>:{name}</p>
                                    <p className='font-serif mb-3'>: {birth ? Birthdate : '12-12-2020'}</p>
                                    <p className='font-serif mb-3'>: {className}</p>
                                    <p className='font-serif mb-3'>: {roll}</p>
                                    <p className='font-serif mb-3'>: {section}</p>
                                    <p className='font-serif mb-3'>: {exp ? expdate : '31-12-2020'}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center py-6 print:hidden'>
                        <button className='btn btn-secondary' onClick={handlePrint}>Print Now</button>
                    </div>
                </div>
            }
            {
                color == 'blue' && <div className={`w-1/2 print:w-full border-8 border-solid border-blue-600 rounded-xl bg-white h-80 mt-24`}>
                    <div className='flex justify-center gap-5'>
                        <div className='w-2/5'>
                            <div className='pb-5'>
                                <h3 className={`bg-blue-600 rounded-xl text-center py-2 text-xl font-bold text-white rounded-t-none`}>ID Card</h3>
                            </div>
                            <img src={photo ? photo : photos} alt="" className={`h-60 w-60 rounded-xl border-4 rounded-b-none rounded-tl-none solid border-blue-600`} />
                        </div>

                        <div className='w-3/5'>
                            <h3 className='text-center font-serif text-xl pt-1'>{school}</h3>
                            <div className='pt-10 pb-2  flex justify-start gap-2'>

                                <div>
                                    <p className='font-bold mb-3'>Name</p>
                                    <p className='font-bold mb-3'>Date of Birth</p>
                                    <p className='font-bold mb-3'>Class </p>
                                    <p className='font-bold mb-3'>Roll/ID</p>
                                    <p className='font-bold mb-3'>Section</p>
                                    <p className='font-bold mb-3'>Exp. date</p>
                                </div>
                                <div>
                                    <p className='font-serif mb-3 '>:{name}</p>
                                    <p className='font-serif mb-3'>: {birth ? Birthdate : '12-12-2020'}</p>
                                    <p className='font-serif mb-3'>: {className}</p>
                                    <p className='font-serif mb-3'>: {roll}</p>
                                    <p className='font-serif mb-3'>: {section}</p>
                                    <p className='font-serif mb-3'>: {exp ? expdate : '31-12-2020'}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center py-6 print:hidden'>
                        <button className='btn btn-secondary' onClick={handlePrint}>Print Now</button>
                    </div>
                </div>
            }
            {
                color == 'purple' && <div className={`w-1/2 print:w-full border-8 border-solid border-purple-600 rounded-xl bg-white h-80 mt-24`}>
                    <div className='flex justify-center gap-5'>
                        <div className='w-2/5'>
                            <div className='pb-5'>
                                <h3 className={`bg-purple-600 rounded-xl text-center py-2 text-xl font-bold text-white rounded-t-none`}>ID Card</h3>
                            </div>
                            <img src={photo ? photo : photos} alt="" className={`h-60 w-60 rounded-xl border-4 rounded-b-none rounded-tl-none solid border-purple-600`} />
                        </div>

                        <div className='w-3/5'>
                            <h3 className='text-center font-serif text-xl pt-1'>{school}</h3>
                            <div className='pt-10 pb-2  flex justify-start gap-2'>

                                <div>
                                    <p className='font-bold mb-3'>Name</p>
                                    <p className='font-bold mb-3'>Date of Birth</p>
                                    <p className='font-bold mb-3'>Class </p>
                                    <p className='font-bold mb-3'>Roll/ID</p>
                                    <p className='font-bold mb-3'>Section</p>
                                    <p className='font-bold mb-3'>Exp. date</p>
                                </div>
                                <div>
                                    <p className='font-serif mb-3 '>:{name}</p>
                                    <p className='font-serif mb-3'>: {birth ? Birthdate : '12-12-2020'}</p>
                                    <p className='font-serif mb-3'>: {className}</p>
                                    <p className='font-serif mb-3'>: {roll}</p>
                                    <p className='font-serif mb-3'>: {section}</p>
                                    <p className='font-serif mb-3'>: {exp ? expdate : '31-12-2020'}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center py-6 print:hidden'>
                        <button className='btn btn-secondary' onClick={handlePrint}>Print Now</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default CardTemp4;
import { useState } from 'react';
import cardBg from '../../assets/IDCard4.jpg'
const CardTemp3 = () => {
    const [text, setText] = useState('')
    return (
        <div className='flex justify-center gap-4'>
            <div className='w-1/2'>
                <p className='font-bold text-center text-3xl py-6'>Write Here your Think...</p>
                <div className="form-control px-4 ">

                    <textarea className="textarea textarea-bordered textarea-secondary h-96" placeholder="Bio" onChange={(e) => setText(e.target.value)}></textarea>

                </div>
            </div>
            <div style={{
                backgroundImage: `url(${cardBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }} className='h-[140vh] w-1/2'
            >

                <p className='text-center justify-center align-middle mt-36 '>{text}</p>

            </div>
        </div>
    );
};

export default CardTemp3;
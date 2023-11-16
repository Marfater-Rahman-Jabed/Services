// import { Link } from 'react-router-dom';
import ReactTypingSpeedTest from '@skpts/react-typing-speed-test'
import { useState } from 'react';
const TypeSpeed = () => {
    const [startTest, setstartTest] = useState(false)
    const [time, setTime] = useState(60)
    const [content, setContent] = useState('')
    const [count, setCount] = useState(1)

    const initFunction = () => {
        window.location.reload()
        setCount(1)
    }
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh]'>
            <div className='flex justify-center gap-4 items-center py-36'>
                <div>
                    <form action="" className='mb-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white font-bold">Pick Your Time</span>

                            </label>
                            <select className="select select-bordered" onChange={(e) => setTime(e.target.value)}>
                                <option defaultValue={60}>1 minute</option>
                                <option value={120}>2 minute</option>
                                <option value={180}>3 minute</option>
                                <option value={300}>5 minute</option>
                                <option value={600}>10 minute</option>
                                <option value={900}>15 minute</option>
                            </select>

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white font-bold">Pick Your Content</span>

                            </label>
                            <select className="select select-bordered" onChange={(e) => setContent(e.target.value)}>
                                <option defaultValue={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo. Nemo ullam rem a eius dolores fuga voluptatum eos error.'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita .</option>
                                <option value={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo. Nemo ullam rem a eius dolores fuga voluptatum eos error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo. Nemo ullam rem a eius dolores fuga voluptatum eos error.'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita .....(50+)</option>
                                <option value={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo. Nemo ullam rem a eius dolores fuga voluptatum eos error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo. Nemo ullam rem a eius dolores fuga voluptatum eos error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo. Nemo ullam rem a eius dolores fuga voluptatum eos error.'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita r....(75+)</option>
                                <option value={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo. Nemo ullam rem a eius dolores fuga voluptatum eos error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo. Nemo ullam rem a eius dolores fuga voluptatum eos error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo. Nemo ullam rem a eius dolores fuga voluptatum eos error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo. Nemo ullam rem a eius dolores fuga voluptatum eos error.'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita...(100+)</option>

                            </select>

                        </div>
                    </form>
                    <div className='flex justify-between gap-4'>
                        {count == 1 ? <button className='btn btn-secondary ' onClick={() => { setstartTest(true); setCount(0); }}>Start Test</button> :
                            <button className='btn btn-secondary px-8 mb-2' onClick={initFunction}>Initialise</button>}
                    </div>
                    {/* <p className='text-black font-bold'>(if any problem occure click reload button)</p> */}
                </div>
            </div>
            <ReactTypingSpeedTest
                color="dark"
                testContent={content ? content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos sequi beatae iste voluptates magni nulla assumenda accusamus distinctio illo.'}
                onFinish={(e) => {
                    console.log(e)
                }}
                duration={time}
                showResult={true}
                startTest={startTest}

            >
            </ReactTypingSpeedTest>


        </div>
    );
};

export default TypeSpeed;
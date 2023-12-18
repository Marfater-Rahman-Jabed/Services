import { useContext, useState } from 'react';
import Starter from '../../../assets/generateImage.jpg'
import { AuthContexts } from '../../../Contexts/Contexts';
import { toast } from 'react-toastify';
const UpgradedPage = () => {
    const [storage, setStorage] = useState(0)
    const [price, setPrice] = useState(0)
    const [name, setName] = useState(0)
    const [open, setOpen] = useState(true)
    // console.log(storage)
    const { user, userFetchData } = useContext(AuthContexts)
    const handleModalUpgrade = () => {
        console.log('confirmed')
        console.log(storage, price, name)
        const uploadedData = {
            clientEmail: user?.email,
            storage: storage
        }
        fetch(`http://localhost:5000/UpgradeStorage`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(uploadedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                userFetchData()
                toast.success(`Storage Upgrated successfully`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            })
    }
    return (
        <div>
            <h3 className="text-center text-3xl font-bold">Upgrade Your Storage</h3>
            <div className="grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 lg:mx-10  mx-4 py-10">

                <div className='border-4 border-slate-100 rounded-lg p-12 shadow-lg'>
                    <img src={Starter} alt="" className='w-full items-center' />
                    <h1 className='text-center text-2xl font-bold my-4'>Free Trail</h1>
                    <h1 className='text-center text-2xl mb-8'><b className='text-5xl font-bold'>$0.00</b></h1>
                    <h1 className='text-center text-xl mb-4'><b>30 KB</b> of Storage</h1><hr />
                    <h1 className='text-center text-xl mb-4'><b>10</b> User Tasks</h1><hr />
                    <h1 className='text-center text-xl mb-4 '><b>10 MongoDB</b> Database</h1><hr />
                    <h1 className='text-center text-xl mb-12 '> <b>Email</b> Support</h1>


                    <div className='text-center'>
                        <button className='btn btn-outline px-16  rounded-full dark:text-white' disabled>Upgrade to pro</button>
                    </div>

                </div>
                <div className='border-4 border-slate-100 rounded-lg p-12 shadow-lg'>
                    <img src={Starter} alt="" className='w-full items-center' />
                    <h1 className='text-center text-2xl font-bold my-4'>Alpha Trail</h1>
                    <h1 className='text-center text-2xl mb-8'><b className='text-5xl font-bold'>$5.00</b></h1>
                    <h1 className='text-center text-xl mb-4'><b>100 KB</b> of Storage</h1><hr />
                    <h1 className='text-center text-xl mb-4'><b>10</b> User Tasks</h1><hr />
                    <h1 className='text-center text-xl mb-4 '><b>10 MongoDB</b> Database</h1><hr />
                    <h1 className='text-center text-xl mb-12 '> <b>Email</b> Support</h1>


                    <div className='text-center'>
                        <button className='btn btn-outline px-16  rounded-full dark:text-white' onClick={() => { setStorage(100); setOpen(true); document.getElementById('my_modal_Upgrade')?.showModal(); setName('Aplha Trail'); setPrice(5); }}>Upgrade to Alpha</button>
                    </div>

                </div>
                <div className='border-4 border-slate-100 rounded-lg p-12 shadow-lg'>
                    <img src={Starter} alt="" className='w-full items-center' />
                    <h1 className='text-center text-2xl font-bold my-4'>Beta Trail</h1>
                    <h1 className='text-center text-2xl mb-8'><b className='text-5xl font-bold'>$10.00</b></h1>
                    <h1 className='text-center text-xl mb-4'><b>210 KB</b> of Storage</h1><hr />
                    <h1 className='text-center text-xl mb-4'><b>10</b> User Tasks</h1><hr />
                    <h1 className='text-center text-xl mb-4 '><b>10 MongoDB</b> Database</h1><hr />
                    <h1 className='text-center text-xl mb-12 '> <b>Email</b> Support</h1>


                    <div className='text-center'>
                        <button className='btn btn-outline px-16  rounded-full dark:text-white hover:bg-green-600' onClick={() => { setStorage(210); setOpen(true); document.getElementById('my_modal_Upgrade')?.showModal(); setName('Beta Trail'); setPrice(10); }}>Upgrade to Beta</button>
                    </div>

                </div>


            </div>

            {open && <dialog id="my_modal_Upgrade" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form action="" method="dialog" className='py-4' onSubmit={handleModalUpgrade}>
                        {/* if there is a button in form, it will close the modal */}

                        <div className='flex justify-center items-center '>
                            <div className='border-4 border-slate-100 rounded-lg p-4 shadow-lg'>
                                <span className='flex items-center justify-center'>
                                    <img src={Starter} alt="" className='w-32 ' />
                                </span>
                                <h1 className='text-center text-2xl font-bold my-2'>{name}</h1>
                                <h1 className='text-center text-2xl mb-4'><b className='text-2xl font-bold'>${price}.00</b></h1>
                                <h1 className='text-center mb-2'><b>{storage} KB</b> of Storage</h1><hr />
                                <h1 className='text-center  mb-2'><b>10</b> User Tasks</h1><hr />
                                <h1 className='text-center  mb-2 '><b>10 MongoDB</b> Database</h1><hr />
                                <h1 className='text-center  mb-6 '> <b>Email</b> Support</h1>
                            </div>
                        </div>


                        <div className="flex justify-center gap-4">
                            <div className="form-control w-full mt-5">

                                <input type="submit" value='Confirm' className="btn btn-secondary w-full " />


                            </div>

                        </div>
                    </form>
                </div>
            </dialog>}
        </div>
    );
};

export default UpgradedPage;
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/generateImage.jpg'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContexts } from '../../Contexts/Contexts';
// import Loading from '../../Component/Loading/Loading';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../Component/Spinner/Spinner';
// import Spinner from '../../Component/Spinner/Spinner';
// import LogRegSpinner from '../../Component/LogRegSpinner/LogRegSpinner';
// import "firebase/auth";
// import firebase from "firebase/app";
// // import "firebase/auth";
// import { getAuth } from 'firebase/auth';
// import app from '../../Firebase/Firebase.config';
const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const imageKey = import.meta.env.VITE_imagekey;
    const { createUser, loading, setLoading, updateUser, googleLogIn, verificationEmail } = useContext(AuthContexts)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('')
    const [photo, setPhoto] = useState('')
    // const [email, setEmail] = useState(null)
    const onsubmit = data => {
        console.log(data);

        // const auth = getAuth(app)
        // const isValidEmail = firebase.auth.validateEmail(data.email);
        // console.log(isValidEmail)
        setLoading(true)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                verificationEmail()
                    .then(() => {
                        // console.log(result)
                        toast.success(`Congratulations!!! You got 30 KB free Storage. Check Your inbox to verify email`, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        })
                        const profile = {
                            displayName: data.name
                        }
                        updateUser(profile)
                            .then(result => {
                                console.log(result)
                                saveUser(data)
                            })
                            .catch(error => console.log(error))

                        // toast.success('Register successfully');
                        navigate('/login');
                        setLoading(false)
                    })
                    .catch(error => {
                        console.log(error)
                    })


            })
            .catch(error => console.log(error))
    }

    const saveUser = (data) => {
        const formData = new FormData();
        formData.append('image', photo);
        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                console.log(image)
                if (image.success) {
                    const details = {
                        userName: data.name,
                        photo: image.data.url,
                        email: data.email,
                        phone: data.Phone,
                        address: data.Address,
                        stay: 'yes',
                        storage: 30

                    }

                    fetch(`http://localhost:5000/addUser`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(details)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                        })
                }
            })




    }

    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="hero min-h-screen  bg-gradient-to-r from-sky-300 via-slate-200 to-sky-300 lg:py-4">

                <div className="card flex-shrink-0 lg:w-[40vw] md:w-[70vw]  w-[95vw] shadow-2xl bg-white">
                    <img src={Logo} alt="" className="rounded-full h-32 w-32 mx-auto mt-5" />
                    <h1 className="text-center text-xl font-serif font-bold"> <span className='text-fuchsia-700'>Register</span> <span className='text-pink-700'>Here</span></h1>
                    <div className="card-body pt-0">
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-fuchsia-700 font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register('name')} className="input input-bordered" required />
                            </div>
                            <div className='lg:flex md:flex gap-2 justify-between'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-fuchsia-700 font-bold">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" {...register('email')} className="input input-bordered " onChange={() => setError('')} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-fuchsia-700 font-bold">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" {...register('password')} className="input input-bordered" required />

                                </div>
                            </div>

                            <div className='lg:flex md:flex gap-2 justify-between'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-fuchsia-700 font-bold">Phone</span>
                                    </label>
                                    <input type="number" placeholder="Phone" {...register('Phone')} className="input input-bordered" required />


                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-fuchsia-700 font-bold">Address</span>
                                    </label>
                                    <input type="text" placeholder="Address" {...register('Address')} className="input input-bordered" required />

                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-fuchsia-700 font-bold">Photo</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-secondary w-full " required onChange={(e) => setPhoto(e.target.files[0])} />
                                <label className="label">
                                    <span className='label-text-alt'>Already have an account ? <Link
                                        to='/login' className="label-text-alt link link-hover">Login</Link></span>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <h1 className='text-red-700 text-center font-bold text-xl mb-2'>{error}</h1>
                                <button className="btn  bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-700  text-white">{loading ? <Spinner></Spinner> : "Register"}</button>
                                <div className="divider ">OR</div>
                            </div>
                        </form>
                        <button className="btn  btn-outline hover:bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-700 " onClick={handleGoogle}>{<><FcGoogle className='text-3xl '></FcGoogle> <h1>Contnue With Google</h1></>}</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;
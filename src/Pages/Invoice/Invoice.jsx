import { Link } from 'react-router-dom';
import InvoiceTemp1 from '../../assets/invoiceTemp1.png'
const Invoice = () => {
    return (
        <div className='gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-10 px-4'>
            <p className='text-3xl font-bold text-center text-white'>Choose Your Tamplate</p>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-2 py-10'>
                <Link to='/invoiceTemp1'>
                    <img src={InvoiceTemp1} alt="" className='w-full h-full' />
                </Link>
                <Link to='/invoiceTemp1'>
                    <img src={InvoiceTemp1} alt="" className='w-full h-full' />
                </Link>
                <Link to='/invoiceTemp1'>
                    <img src={InvoiceTemp1} alt="" className='w-full h-full' />
                </Link>
                <Link to='/invoiceTemp1'>
                    <img src={InvoiceTemp1} alt="" className='w-full h-full' />
                </Link>
            </div>
        </div>
    );
};

export default Invoice;
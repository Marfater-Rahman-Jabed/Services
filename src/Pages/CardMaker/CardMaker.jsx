import { Link } from 'react-router-dom';
import temp1 from '../../assets/IDCard2.jpg'
import temp2 from '../../assets/IDCard3.jpg'
import temp3 from '../../assets/IDCard4.jpg'
import temp4 from '../../assets/IDCard5.jpg'
import { useEffect } from 'react';
// import temp5 from '../../assets/IDCard5.jpg'
const CardMaker = () => {
    const templates = [temp1, temp2, temp3, temp4]
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className='text-center text-5xl font-bold text-white py-6'>
                <h3>Choose your Tamplate</h3>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4 py-6'>
                {
                    templates.map((template, i) => <Link key={i} to={`/cardTemp${i + 1}`}>
                        <img src={template} alt="" className='w-96 h-80' />
                    </Link>)
                }
            </div>
        </div>
    );
};

export default CardMaker;
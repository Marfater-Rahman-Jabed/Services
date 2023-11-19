import Excel1 from '../../assets/Excel1.png'
import Excel2 from '../../assets/Excel2.png'
import Excel3 from '../../assets/Excel3.png'
const ExcelStep = () => {
    return (
        <div className='flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>
            <div>
                <p className='py-4 font-bold text-xl'>(1) Go to to your Excel file</p>
                <p className='py-4 font-bold text-xl'>(2) Select Full Date Column   </p>
                <img src={Excel1} alt="" />
                <p className='py-4 font-bold text-xl'>(3) Right Click On Selected Column</p>
                <img src={Excel2} alt="" className='' />
                <p className='py-4 font-bold text-xl'>(4) Click in the <strong>Format Cells...</strong></p>
                <img src={Excel3} alt="" className='' />

                <p className='py-4 font-bold text-xl'>(5) Select <strong>Date</strong> option</p>
                <p className='py-4 font-bold text-xl'>(6) Then Select <strong>Formate following figure</strong></p>
                <p className='py-4 font-bold text-xl'>(7) Then Click <strong>OK</strong></p>
            </div>
        </div>
    );
};

export default ExcelStep;
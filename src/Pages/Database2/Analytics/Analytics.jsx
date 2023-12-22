import { useContext, useEffect, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AuthContexts } from '../../../Contexts/Contexts';
import Chart from '../../../Component/Chart/Chart';
const Analytics = () => {
    const { user, userData } = useContext(AuthContexts)
    // console.log(userData)
    const [seeAllTemp, setSeeAllTemp] = useState(false)
    const [upgradedHistory, setUpgradedHistory] = useState([])
    // console.log(userData)
    // const reversedList = (userData.templateList).reverse()

    const mapReverse = userData?.templateList
        ?.slice(0)
        .reverse()
        .map(element => {
            return element;
        });

    useEffect(() => {
        fetch(`http://localhost:5000/historyFind/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUpgradedHistory(data)
            })
    }, [user?.email])
    return (
        <div className="bg-purple-900 pb-10">

            {userData?.templateList?.length > 3 && <div className='pb-3 px-20 pt-2 flex justify-end'>
                <button onClick={() => setSeeAllTemp(!seeAllTemp)} className=' text-white btn btn-sm btn-primary'>{seeAllTemp ? 'See less' : 'see more'}</button>
            </div>}
            <div>
                {seeAllTemp ? <div className='px-10 py-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2' >
                    {mapReverse.map(list => <div key={list?._id} className='flex justify-center items-center gap-2 border-2 border-yellow-300 w-72 p-2 bg-slate-700 rounded-lg'>

                        <div className='w-20 h-20'>
                            <CircularProgressbarWithChildren value={100} >
                                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                {/* <img style={{ width: 36, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" className='' /> */}
                                <div style={{ fontSize: 12, marginTop: -5 }} className='text-white '>
                                    <strong>{list?.colNo}</strong>
                                </div>
                                <div>
                                    <h3 className='text-sm text-white'>Column</h3>
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className='text-white'>
                            <h3 className='font-semibold'>Template : {list?.tempName}</h3>
                            <h3 className='font-semibold' title={list?._id}>Temp Id : {list?._id.slice(0, 10)}...</h3>
                        </div>
                    </div>)}

                </div>
                    :
                    <div className='px-10 py-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2' >
                        {mapReverse?.slice(0, 3).map(list => <div key={list?._id} className='flex justify-center items-center gap-2 border-2 border-yellow-300 w-72 p-2 bg-slate-700 rounded-lg'>

                            <div className='w-20 h-20'>
                                <CircularProgressbarWithChildren value={100} >
                                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                    {/* <img style={{ width: 36, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" className='' /> */}
                                    {/* <h3>Number Of Column Contain</h3> */}
                                    <div style={{ fontSize: 12, marginTop: -5 }} className='text-white '>
                                        <strong>{list?.colNo}</strong>
                                    </div>
                                    <div>
                                        <h3 className='text-sm text-white'>Column</h3>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div className='text-white'>
                                <h3 className='font-semibold'>Template : {list?.tempName}</h3>
                                <h3 className='font-semibold' title={list?._id}>Temp Id : {list?._id.slice(0, 10)}...</h3>
                            </div>
                        </div>)}

                    </div>}
            </div>

            <div className='flex justify-between gap-2'>
                <div className='w-2/5 ms-3 mt-10 '>
                    <h3 className='py-2 text-white font-semibold'>Upgraded Storage History ( Last Five )</h3>
                    <div className=" overflow-x-auto bg-fuchsia-600  h-72">
                        <table className="table table-xs table-pin-rows ">
                            <thead>
                                <tr className='text-black font-bold'>
                                    <th className='py-2 text-center'>Sl No.</th>
                                    <td className='py-2 text-center'>Storage</td>
                                    <td className='py-2 text-center'>Upgraded Date</td>
                                    <td className='py-2 text-center'>Upgraded Time</td>


                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    upgradedHistory?.slice(0, 5).map((history, i) => <tr key={history?._id} className='text-white font-semibold text-xl hover:bg-blue-900 bg-slate-900'>
                                        <th className='py-4 text-center'>{i + 1}</th>
                                        <td className='py-4 text-center'>{history?.storage} KB</td>
                                        <td className='py-4 text-center'>{history?.date.slice(8, 11)} {history?.date.slice(4, 7)} {history?.date.slice(11, 15)}</td>
                                        <td className='py-4 text-center'>{history?.date.slice(15, 24)} </td>


                                    </tr>)
                                }


                            </tbody>

                        </table>
                    </div>
                </div>

                <div className='w-3/5 mx-2 mt-10 bg-slate-900'>

                    <Chart></Chart>
                </div>
            </div>

        </div>
    );
};

export default Analytics;
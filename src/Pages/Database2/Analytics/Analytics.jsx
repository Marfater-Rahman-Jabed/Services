import { useContext, useEffect, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AuthContexts } from '../../../Contexts/Contexts';
import Chart from '../../../Component/Chart/Chart';
import UserProfile from '../../../Component/UserProfile/UserProfile';
import ChartLine from '../../../Component/ChartLine/ChartLine';
import AreaCharts from '../../../Component/AreaCharts/AreaCharts';
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


    // const [allDatas, setAllDatas] = useState([])


    // useEffect(() => {
    //     fetch(`http://localhost:5000/allSecondDatabaseDataForChart/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllDatas(data)
    //         })
    // }, [user?.email])



    // const storage = [];
    // // console.log(mapReverse)
    // allDatas.map((Data, i) => {
    //     if (Data.templateId === mapReverse[i]?._id) {
    //         storage.push(Data)
    //     }
    // })
    // // // // 
    // // console.log(storage)




    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div >
            <label htmlFor="Dashbord-drawer2" className="drawer-button btn  lg:hidden  flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="bg-purple-900 pb-10 border-2 border-yellow-300 ">
                {userData?.templateList?.length <= 3 && <h3 className='px-4 text-white font-bold pt-4'>Template Details</h3>}
                {userData?.templateList?.length > 3 && <div className='flex justify-between'>
                    <h3 className='px-4 text-white font-bold pt-4'>Template Details</h3>
                    <div className='pb-3 px-12 pt-2 flex justify-end'>
                        <button onClick={() => setSeeAllTemp(!seeAllTemp)} className=' text-white btn btn-sm btn-primary'>{seeAllTemp ? 'See less' : 'see more'}</button>
                    </div></div>}
                <div>
                    {seeAllTemp ? <div className='lg:px-4 md:px-4 px-10 py-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2' >
                        {mapReverse.map(list => <div key={list?._id} className='flex justify-center items-center gap-2 border-2 border-yellow-300 w-80   p-2 bg-slate-700 rounded-lg'>

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
                        <div className='lg:px-4 md:px-4 px-10 py-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2' >
                            {mapReverse?.slice(0, 3).map(list => <div key={list?._id} className='flex justify-center items-center gap-2 border-2 border-yellow-300 w-80  p-2 bg-slate-700 rounded-lg'>

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
                <div>
                    <h3 className='py-2 px-3 text-white font-semibold'>User Profile Details</h3>
                    <UserProfile></UserProfile>
                </div>
                <h3 className='pt-10 px-4 pb-4 text-white font-semibold'>Upgraded Storage History </h3>
                <div className='lg:flex justify-between gap-2'>
                    <div className='lg:w-2/5  mx-2  mb-2'>

                        <div className=" overflow-x-auto bg-fuchsia-600 border-2 border-yellow-300 rounded-lg h-80">
                            <table className="table table-xs ">
                                <thead>
                                    <tr className=' font-bold text-white'>
                                        <th className='py-2 text-center'>Sl No.</th>
                                        <td className='py-2 text-center'>Storage</td>
                                        <td className='py-2 text-center'>Upgraded Date</td>
                                        <td className='py-2 text-center'>Upgraded Time</td>


                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {upgradedHistory.length > 0 ?
                                        upgradedHistory?.slice(0, 6).map((history, i) => <tr key={history?._id} className='text-white font-semibold text-xl hover:bg-blue-900 bg-slate-900'>
                                            <th className='py-4 text-center'>{i + 1}</th>
                                            <td className='py-4 text-center'>{history?.storage} KB</td>
                                            <td className='py-4 text-center'>{history?.date.slice(8, 11)} {history?.date.slice(4, 7)} {history?.date.slice(11, 15)}</td>
                                            <td className='py-4 text-center'>{history?.date.slice(15, 24)} </td>


                                        </tr>)
                                        : <div className='flex justify-center items-center'>
                                            <p className='text-center  text-white font-bold'>No History Exists</p>
                                        </div>
                                    }


                                </tbody>

                            </table>
                        </div>
                    </div>

                    <div className='lg:w-3/5  mx-2  bg-slate-900 border-2 border-yellow-300 rounded-lg'>

                        <Chart></Chart>
                    </div>
                </div>
                <h3 className='pt-10 text-white font-bold px-4 py-5'>Last 7 days Data Representation ( Line & Area Chart )</h3>
                <div className='lg:flex justify-between px-2 gap-2'>
                    <div className='lg:w-1/2    mb-2'>
                        <ChartLine></ChartLine>
                    </div>
                    <div className='lg:w-1/2'>
                        <AreaCharts></AreaCharts>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Analytics;
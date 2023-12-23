import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../../Contexts/Contexts";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const AreaCharts = () => {
    const [allData, setAllData] = useState([])

    const { user } = useContext(AuthContexts)
    console.log(allData)
    useEffect(() => {
        fetch(`http://localhost:5000/allSecondDatabaseDataForChart/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, [user?.email])

    var currentDate = new Date();
    var oneDaysAgo = new Date();
    var twoDaysAgo = new Date();
    var threeDaysAgo = new Date();
    var fourDaysAgo = new Date();
    var fiveDaysAgo = new Date();
    var sixDaysAgo = new Date();
    oneDaysAgo.setDate(currentDate.getDate() - 1);
    twoDaysAgo.setDate(currentDate.getDate() - 2);
    threeDaysAgo.setDate(currentDate.getDate() - 3);
    fourDaysAgo.setDate(currentDate.getDate() - 4);
    fiveDaysAgo.setDate(currentDate.getDate() - 5);
    sixDaysAgo.setDate(currentDate.getDate() - 6);


    const todaydate = new Date().toString().slice(4, 15)


    const todayData = allData.filter(data => data?.date.slice(4, 15) === todaydate)
    const yeasterdayData = allData.filter(data => data?.date.slice(4, 15) === oneDaysAgo.toString().slice(4, 15))
    const previous2Data = allData.filter(data => data?.date.slice(4, 15) === twoDaysAgo.toString().slice(4, 15))
    const previous3Data = allData.filter(data => data?.date.slice(4, 15) === threeDaysAgo.toString().slice(4, 15))
    const previous4Data = allData.filter(data => data?.date.slice(4, 15) === fourDaysAgo.toString().slice(4, 15))
    const previous5Data = allData.filter(data => data?.date.slice(4, 15) === fiveDaysAgo.toString().slice(4, 15))
    const previous6Data = allData.filter(data => data?.date.slice(4, 15) === sixDaysAgo.toString().slice(4, 15))


    // console.log(todayData, yeasterdayData, previous2Data, previous3Data, previous4Data)
    const data = [
        {
            name: `${sixDaysAgo.toString().slice(8, 10)} ${sixDaysAgo.toString().slice(4, 7)}`,
            TotalData: previous6Data?.length,
            target: 170,

        },
        {
            name: `${fiveDaysAgo.toString().slice(8, 10)} ${fiveDaysAgo.toString().slice(4, 7)}`,
            TotalData: previous5Data?.length,
            target: 190,
        },
        {
            name: `${fourDaysAgo.toString().slice(8, 10)} ${fourDaysAgo.toString().slice(4, 7)}`,
            TotalData: previous4Data?.length,
            target: 140,
        },
        {
            name: `${threeDaysAgo.toString().slice(8, 10)} ${threeDaysAgo.toString().slice(4, 7)}`,
            TotalData: previous3Data?.length,
            target: 60,
        },
        {
            name: `${twoDaysAgo.toString().slice(8, 10)} ${twoDaysAgo.toString().slice(4, 7)}`,
            TotalData: previous2Data?.length,
            target: 180,
        },
        {
            name: `${oneDaysAgo.toString().slice(8, 10)} ${oneDaysAgo.toString().slice(4, 7)}`,
            TotalData: yeasterdayData?.length,
            target: 70,
        },
        {
            name: `${todaydate.slice(4, 7)} ${todaydate.slice(0, 3)}`,
            TotalData: todayData?.length,
            target: 100,
        },

    ];
    return (
        <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            className='  bg-slate-900 border-2 border-yellow-300 rounded-lg p-5'
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="TotalData" stroke="#0000FF" fill="#A020F0" />
        </AreaChart>
    );
};

export default AreaCharts;
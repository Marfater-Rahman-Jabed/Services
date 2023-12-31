import { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AuthContexts } from '../../Contexts/Contexts';
const Chart = () => {
    const [allData, setAllData] = useState([])
    // const [todayData, setTodayData] = useState([])
    // const [previous1Data, setPrevious1Data] = useState([])
    // const [previous2Data, setPrevious2Data] = useState([])
    // const [previous3Data, setprevious3Data] = useState([])
    // const [previous4Data, setPrevious4Data] = useState([])
    const { user } = useContext(AuthContexts)

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
            target: 100,

        },
        {
            name: `${fiveDaysAgo.toString().slice(8, 10)} ${fiveDaysAgo.toString().slice(4, 7)}`,
            TotalData: previous5Data?.length,
            target: 100,
        },
        {
            name: `${fourDaysAgo.toString().slice(8, 10)} ${fourDaysAgo.toString().slice(4, 7)}`,
            TotalData: previous4Data?.length,
            target: 100,
        },
        {
            name: `${threeDaysAgo.toString().slice(8, 10)} ${threeDaysAgo.toString().slice(4, 7)}`,
            TotalData: previous3Data?.length,
            target: 100,
        },
        {
            name: `${twoDaysAgo.toString().slice(8, 10)} ${twoDaysAgo.toString().slice(4, 7)}`,
            TotalData: previous2Data?.length,
            target: 100,
        },
        {
            name: `${oneDaysAgo.toString().slice(8, 10)} ${oneDaysAgo.toString().slice(4, 7)}`,
            TotalData: yeasterdayData?.length,
            target: 100,
        },
        {
            name: `${todaydate.slice(4, 7)} ${todaydate.slice(0, 3)}`,
            TotalData: todayData?.length,
            target: 100,
        },

    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={400}

                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="target" stackId="b" fill="#A020F0" label={{ fill: 'white', fontSize: 15 }} />
                <Bar dataKey="TotalData" stackId="a" fill="#0000FF" activeBar={{ stroke: 'black', strokeWidth: 2 }} label={{ fill: 'white', fontSize: 15 }} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;
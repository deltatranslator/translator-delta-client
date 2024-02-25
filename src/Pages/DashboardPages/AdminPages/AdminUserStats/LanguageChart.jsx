import { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import axiosSecure from '../../../../api';

const salesData = [
    {
        name: 'Jan',
        target: 4000,
        source: 2400,
    },
    {
        name: 'Feb',
        target: 3000,
        source: 1398,
    },
    {
        name: 'Mar',
        target: 9800,
        source: 2000,
    },
    {
        name: 'Apr',
        target: 3908,
        source: 2780,
    },
    {
        name: 'May',
        target: 4800,
        source: 1890,
    },
];

const LanguageChart = () => {

    const [topLang, setTopLang] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/top-five-lang`)
            .then((res) => {
                setTopLang(res.data);
            });
    }, []);

    return (
        // <ResponsiveContainer width="100%" height="100%">
        //     <BarChart
        //         width={500}
        //         height={300}
        //         data={salesData}
        //         margin={{
        //             right: 30,
        //         }}
        //     >
        //         <CartesianGrid strokeDasharray="3 3" />
        //         <XAxis dataKey="name" />
        //         <YAxis />
        //         <Tooltip
        //         // content={<CustomTooltip />}
        //         />
        //         <Legend />
        //         <Bar dataKey="target" fill="#303179" />
        //         <Bar dataKey="source" fill="#ed7966" />
        //     </BarChart>
        // </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={topLang}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="langPair" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="languages" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default LanguageChart;

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Revenue:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    Profit:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }
};
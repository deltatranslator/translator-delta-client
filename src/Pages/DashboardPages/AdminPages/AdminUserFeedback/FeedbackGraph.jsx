import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const productSales = [
    {
        name: 'Oct',
        users: 40,
        product2: 2400,
    },
    {
        name: 'Nov',
        users: 140,
        product2: 2210,
    },
    {
        name: 'Dec',
        users: 60,
        product2: 2290,
    },
    {
        name: 'Jan',
        users: 200,
        product2: 2000,
    },
    {
        name: 'Feb',
        users: 60,
        product2: 2181,
    },
    {
        name: 'Mar',
        users: 20,
        product2: 2500,
    },
];

const FeedbackGraph = ({ data }) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{ right: 30 }}
            >
                <YAxis />
                <XAxis dataKey="month" />
                <CartesianGrid strokeDasharray="5 5" />

                <Tooltip
                // content={<CustomTooltip />}
                />
                <Legend />

                <Area
                    type="monotone"
                    dataKey="dataY"
                    stroke="#2563eb"
                    fill="#3b82f6"
                    stackId="1"
                />
                {/* 
                <Area
                    type="monotone"
                    dataKey="product2"
                    stroke="#7c3aed"
                    fill="#8b5cf6"
                    stackId="1"
                /> */}
            </AreaChart>
        </ResponsiveContainer>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Product 1:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    Product 2:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }
};

export default FeedbackGraph;
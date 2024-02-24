
const lang = [
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

const TopLanguages = () => {
    return (
        <div>
            <div className="font-bold mb-4">TopLanguages</div>
            <div className="flex flex-col ml-4 font-medium text-gray-600 tracking-wider">
                <p>1. English - bengali</p>
                <p>2. English - spanish</p>
                <p>3. german - bengali</p>
            </div>
        </div>
    )
}

export default TopLanguages
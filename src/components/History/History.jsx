import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const History = () => {

    const history = useSelector(state => {
        return state.translationHistory.translationHistory;
    })
    console.log(history);
    return (
        <div className="border rounded-xl w-full h-full shadow-md flex flex-col">
            {
                history.map((entry, idx) => {
                    return (
                        <div key={idx} className='text-gray-500 text-sm font-bold bg-orange-50 border-b-2 p-4 m-2 rounded-lg hover:bg-gray-100 cursor-pointer'>
                            <p>{entry.sourceText}</p>
                            <p>{entry.translatedText}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

History.propTypes = {
    history: PropTypes.array
}

export default History;
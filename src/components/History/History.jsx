import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectReloadState, setTranslationHistory } from '../../redux/slices/translationHistory/translationHistorySlice';
import { useEffect, useState } from 'react';
import axiosSecure from '../../api';
import useAuth from '../../hooks/useAuth';

const History = () => {

    const { user } = useAuth();
    const [history, setHistory] = useState();
    const reloadState = useSelector(selectReloadState);
    const dispatch = useDispatch();

    useEffect(() => {
        axiosSecure.get(`/translation-history/${user?.email}`).then((res) => {
            const history = res.data.translationHistory;
            setHistory(history);
        });
        if (history) {
            dispatch(setTranslationHistory(history));
        }
    }, [user?.email, reloadState, dispatch, history]);


    return (
        <div className="border rounded-xl w-full h-full shadow-md flex flex-col overflow-scroll">
            {
                history?.map((entry, idx) => {
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
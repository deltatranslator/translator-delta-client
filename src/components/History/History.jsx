import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  selectReloadState,
  setTranslationHistory,
} from "../../redux/slices/translationHistory/translationHistorySlice";
import { useEffect, useState } from "react";
import axiosSecure from "../../api";
import useAuth from "../../hooks/useAuth";
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";


const History = ({ setOpenHistory, openHistory }) => {
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

  // alert toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    iconColor: "blue",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const handleAddFavoriteHistory = (entry, status) => {
    // console.log(entry);
    const favHistory = {
      userEmail: user?.email,
      FavHistory: [entry],
    };

    // console.log(favHistory);
    axiosSecure
      .put(`/favoriteHistory/${status}`, favHistory)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId > 0 || res.data.modifiedCount > 0) {
          Toast.fire({
            icon: "success",
            title: "History Saved Successfully.",
          });
        }
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: err.message,
        });
      });
  };

  const handleDeleteHistory = () => {
    axiosSecure.delete(`/translation-history/${user?.email}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  const handleOpenHistory = () => {
    setOpenHistory(true)

  }
  return (
    <div className="border rounded-xl w-full h-[700px] shadow-md flex flex-col overflow-scroll">
      <div className="flex items-end justify-end">
        <p onClick={handleOpenHistory} className="text-end cursor-pointer pb-2 hover:text-red-600 px-4 text-2xl">✕</p>
      </div>
      <div className="text-white text-sm font-bold bg-[#303179] border-b-2 p-4 rounded-md cursor-pointer flex items-center justify-between gap-1">
        <p>All History</p>
        <button onClick={handleDeleteHistory} className="btn btn-ghost font-bold btn-sm hover:text-red-600">Clear All</button>
      </div>
      {history?.map((entry, idx) => {
        return (
          <div
            key={idx}
            className="text-gray-500 text-sm font-bold bg-orange-50 border-b-2 p-4 m-2 rounded-lg hover:bg-gray-100 cursor-pointer flex justify-between gap-1"
          >
            <div className="">
              <p>{entry.sourceText}</p>
              <p>{entry.translatedText}</p>
            </div>

            <div className="flex">
              <div className="">
                <label className="swap swap-rotate">
                  <input type="checkbox" />

                  <IoMdStar
                    className="swap-on fill-current size-6"
                    onClick={() => handleAddFavoriteHistory(entry, "add")}
                  ></IoMdStar>

                  <IoMdStarOutline
                    onClick={() => handleAddFavoriteHistory(entry, "del")}
                    className="swap-off fill-current size-6"
                  ></IoMdStarOutline>
                </label>
              </div>
              <div>
                <TiDelete className="size-6"></TiDelete>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

History.propTypes = {
  history: PropTypes.array,
};

export default History;

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import axiosSecure from "../../api";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";


const History = () => {
    const {user} = useAuth()
  const history = useSelector((state) => {
    return state.translationHistory.translationHistory;
  });
  console.log(history);

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
        FavHistory: [entry] 
    }

    // console.log(favHistory);
    axiosSecure.put(`/favoriteHistory/${status}`, favHistory)
    .then((res) => {
      console.log(res.data);
        if(res.data.insertedId > 0 || res.data.modifiedCount > 0){
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
    })

  }

  // const handleDeleteFavHistory = (id) => {
  //   console.log(id);
  // }

  // const handleDeleteHistory = (id) => {
  //  console.log(id);
  //  axiosSecure.delete(`/translation-history/${id}`)
  //  .then((res) => {
  //   console.log(res.data);
  //  })
  // }
  return (
    <div className="border rounded-xl w-full h-full shadow-md flex flex-col">
      {history.map((entry, idx) => {
        return (
          <div
            key={idx}
            className="text-gray-500 text-sm font-bold bg-orange-50 border-b-2 p-4 m-2 rounded-lg hover:bg-gray-100 cursor-pointer flex justify-between gap-1"
          >
            <div>
              <p>{entry.sourceText}</p>
              <p>{entry.translatedText}</p>
            </div>

           <div className="flex">
           <div className="">
            {/* {
              btn ? <IoMdStar className="size-6"></IoMdStar> : <IoMdStarOutline className="size-6"></IoMdStarOutline>
            } */}
              <label className="swap swap-rotate" >
                
                <input type="checkbox" />
               
                <IoMdStar className="swap-on fill-current size-6" onClick={() => handleAddFavoriteHistory(entry, "add")}></IoMdStar>
                
                <IoMdStarOutline onClick={() => handleAddFavoriteHistory(entry, "del")} className="swap-off fill-current size-6"></IoMdStarOutline>
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

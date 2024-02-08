import { useEffect, useState } from "react";
import axiosSecure from "../../api";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { TiDelete } from "react-icons/ti";

const SavedComponent = () => {
  const { user } = useAuth();
  const [FavHistory, setFavHistory] = useState([]);
  // const reloadState = useSelector(selectReloadState);
  // const dispatch = useDispatch();

  useEffect(() => {
    axiosSecure.get(`/favoriteHistory?userEmail=${user?.email}`).then((res) => {
      setFavHistory(res.data.FavHistory);
    });
  });

  // sweetAlert toast
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
            title: "History Delete Successfully.",
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


  return (
    <div className="border rounded-xl w-full h-[700px] shadow-md flex flex-col overflow-scroll">
      <div className="text-white text-sm font-bold bg-[#303179] border-b-2 p-4 m-2 rounded-lg  cursor-pointer flex justify-between gap-1">
        All Saved History
      </div>
      {FavHistory?.map((entry, idx) => {
        return (
          <div
            key={idx}
            className="text-gray-500 text-sm font-bold bg-orange-50 border-b-2 p-4 m-2 rounded-lg hover:bg-gray-100 cursor-pointer flex justify-between gap-1"
          >
            <div>
              <p>{entry.sourceText}</p>
              <p>{entry.translatedText}</p>
            </div>
            <div>
              <TiDelete
                onClick={() => handleAddFavoriteHistory(entry, "del")}
                className="swap-off fill-current size-6"
              ></TiDelete>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SavedComponent;

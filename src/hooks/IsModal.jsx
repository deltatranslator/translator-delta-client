const IsModal = ({
  onSubmit,
  type,
  name,
  defaultValue,
  id,
  title,
  modalId,
}) => {
  return (
    <div>
      <dialog id={modalId} className="modal">
        <div className="modal-box bg-none bg-transparent rounded-3xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn shadow-2xl bg-[#213E5E] hover:bg-red-500 hover:text-black btn-sm btn-circle btn-ghost text-red-500 text-xl font-bold absolute right-2 top-2">
              ✕
            </button>
          </form>
          <section className=" bg-[#E9F1FA]">
            <div className="bg-[#1F9DE1] p-2">
              <h2 className="text-center text-[#E9F1FA] text-xl font-medium py-2">
                {title}
              </h2>
            </div>
            <div className="">
              {/* Handel user name update */}
              <form onSubmit={onSubmit} className=" items-center gap-3">
                <div className="relative w-full py-10 px-5">
                  <input
                    className="px-3 py-5 border-b-2 rounded-md focus:outline-none focus:border-blue-500 hover:bg-gray-200 w-full"
                    type={type}
                    name={name}
                    defaultValue={defaultValue}
                    id={id}
                  />
                </div>
                <div className="flex items-center text-center">
                  <div className="py-5 w-full border-none bg-red-600 text-white hover:shadow-2xl hover:shadow-red-500">
                    <form method="dialog">
                      <button>Cancel</button>
                    </form>
                  </div>
                  <div className="py-5 w-full bg-[#213E5E] hover:shadow-2xl hover:shadow-green-700 text-white border-none hover:bg-green-600">
                    <button type="submit">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </dialog>
    </div>
  );
};

export default IsModal;

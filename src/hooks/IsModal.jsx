const IsModal = ({
  onSubmit,
  type,
  name,
  defaultValue,
  id,
  title,
  modalId,
  label,
  placeholder,
}) => {
  return (
    <div>
      <dialog id={modalId} className="modal">
        <div className="modal-box bg-none bg-transparent rounded-3xl">
          <form method="dialog">
            <button className="btn shadow-2xl bg-[#213E5E] hover:bg-red-500 hover:text-black btn-sm btn-circle btn-ghost text-red-500 text-xl font-bold absolute right-2 top-2">
              ✕
            </button>
          </form>
          <section className="bg-[#E9F1FA] dark:bg-[#213E5E] rounded-md">
            <div className="bg-[#1F9DE1] p-2">
              <h2 className="text-start text-[#E9F1FA] text-xl font-medium py-2">
                {title}
              </h2>
            </div>
            <div className="">
              <form onSubmit={onSubmit} className="items-center gap-3">
                <div className="relative w-full py-6 px-5">
                  <label className="label text-xl font-medium">{label}</label>
                  <input
                    className="px-3 py-5 border-b-2 dark:text-[#213E5E] rounded-md focus:outline-none focus:border-blue-500 hover:bg-gray-200 w-full"
                    type={type}
                    name={name}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    id={id}
                  />
                </div>
                <div className="flex items-center justify-end gap-3 text-center py-5 px-5">
                  <div className="">
                    <form method="dialog">
                      <button className="w-full border-none text-xl text-[#213E5E] hover:shadow-2xl hover:shadow-red-500 bg-red-200 hover:bg-red-700 hover:text-white rounded-full px-8 py-2">
                        Cancel
                      </button>
                    </form>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className=" bg-[#1F9DE1] text-xl hover:shadow-2xl  w-full hover:shadow-[#1F9DE1] text-white border-none hover:bg-green-600 rounded-full px-8 py-2"
                    >
                      Save
                    </button>
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

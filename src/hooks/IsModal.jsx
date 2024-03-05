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
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn shadow-2xl btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <section className="rounded-md">
            <h2 className="text-center font-medium  text-slate-800 py-2">
              {title}
            </h2>
            <div className=" py-5 px-3">
              {/* Handel user name update */}
              <form onSubmit={onSubmit} className="flex items-center gap-3">
                <div className="relative w-full">
                  <input
                    className="p-2 border-b-2 rounded-md focus:outline-none focus:border-blue-500 hover:bg-gray-200 w-full"
                    type={type}
                    name={name}
                    defaultValue={defaultValue}
                    id={id}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn rounded-full font-bold hover:bg-[#213E5E] hover:shadow-2xl hover:shadow-blue-700 hover:text-white border-none"
                  >
                    Save
                  </button>
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

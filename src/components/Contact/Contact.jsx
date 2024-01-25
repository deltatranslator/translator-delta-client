/* eslint-disable react/no-unescaped-entities */
// import emailjs from "@emailjs/browser";
import { useRef } from "react";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { addDes } from "../../Api/Api";
const Contact = () => {
  const form = useRef();
  // const navigate = useNavigate();

  const sendEmail = (e, data) => {
    e.preventDefault();
    console.log(data);
    // emailjs
    //   .sendForm(
    //     "service_0xydd34",
    //     "template_6z86ap6",
    //     form.current,
    //     "-HF9Akk-CcVhep_e3"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       Swal.fire({
    //         position: "top-center",
    //         icon: "success",
    //         title: `Your Email has been send successfully`,
    //         showConfirmButton: false,
    //         timer: 2000,
    //       });
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  // ____________________________________________________________________

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const description = form.description.value;

  //   const desData = {
  //     description,
  //   };

  //   const data = await addDes(desData);
  //   console.log(data);
  //   toast.success("Your Room Has Been Added");
  // };

  return (
    <section id="contact">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="w-full md:w-[800px] lg:w-[1280px] px-0 md:px-10 lg:px-20 py-10 mx-auto"
      >
        <div className="flex px-5 h-full items-center justify-start bg-white dark:bg-transparent">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="text-4xl font-medium text-center my-8">
              Contact us
            </h1>
            <p className="my-5 text-center">
              Feel free to reach out to us! Whether you have a question,
              feedback, or a collaboration proposal, we'd love to hear from you
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              // action="https://api.web3forms.com/submit"
              className="mt-10 py-5"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative z-0">
                  <input
                    type="text"
                    name="from_name"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Your name
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="text"
                    name="email"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Your email
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows="3"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Your message
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 rounded-md bg-[#ed7966] px-10 py-3 text-white hover:bg-[#303179]"
              >
                Send Message
              </button>
            </form>

            {/* ---------------------------------------------------------------------- */}

            {/* <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="description" className="block text-gray-600">
                    Description
                  </label>

                  <textarea
                    id="description"
                    className="block rounded-md focus:blue-300 w-full h-32 px-4 py-3 text-gray-800  border border-blue-300 focus:outline-blue-500 "
                    name="description"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
            >
              Add
            </button>
          </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

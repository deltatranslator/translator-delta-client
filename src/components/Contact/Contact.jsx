// import emailjs from "@emailjs/browser";
import { useRef } from "react";
// import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "service_0xydd34",
  //         "template_6z86ap6",
  //         form.current,
  //         "-HF9Akk-CcVhep_e3"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           Swal.fire({
  //             position: "top-center",
  //             icon: "success",
  //             title: `Your Email has been send successfully`,
  //             showConfirmButton: false,
  //             timer: 2000,
  //           });
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      id="contact"
      className="w-full md:w-[800px] lg:w-[1280px] px-0 md:px-10 lg:px-20 py-10 mx-auto"
    >
      <div className="flex px-5 h-full items-center justify-start bg-white dark:bg-transparent">
        <div className="mx-auto w-full max-w-lg">
          <h1 className="text-4xl font-medium">Contact us</h1>
          <p className="mt-3">Message us here:</p>

          <form
            ref={form}
            // onSubmit={sendEmail}
            action="https://api.web3forms.com/submit"
            className="mt-10"
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
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
                  rows="5"
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
        </div>
      </div>
    </div>
  );
};

export default Contact;

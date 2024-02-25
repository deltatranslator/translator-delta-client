//  This component is made for development purpose 



// import { useState } from "react";
// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

// const FileUpload = () => {

//   // Get references to various elements

//   let pdfInput = document.querySelector(".selectPdf"); // Reference to the PDF file input field
//   let afterUpload = document.querySelector(".afterUpload"); // Reference to the result section
//   let select = document.querySelector("select"); // Reference to the page selection dropdown

//   let pdfText = document.querySelector(".pdfText"); // Reference to the text area for displaying extracted text

//   const [text, setText] = useState("")
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const password = event.target.password.value;
//     let file = pdfInput.files[0];
//     // let file = event?.target?.pdf?.files[0]; // Get the selected PDF file
//     console.log(file);
//     if (file != undefined && file.type == "application/pdf") {
//       let fr = new FileReader() // Create a new FileReader object
//       fr.readAsDataURL(file); // Read the file as data URL
//       console.log(fr);
//       fr.onload = () => {
//         let res = fr.result; // Get the result of file reading
//         if (password == "") {
//           extractText(res, false); // Extract text without password
//         } else {
//           extractText(res, true); // Extract text with password
//         }

//       }
//     } else {
//       // alert("Select a valid PDF file");
//     }
//   }
//   const allText = []

//   const extractText = async (url, pass) => {
//     try {
//       console.log(url);
//       let pdf;
//       if (pass) {
//         pdf = await pdfjs.getDocument({ url: url, password: pass }).promise; // Get the PDF document with password
//       } else {
//         pdf = await pdfjs.getDocument(url).promise; // Get the PDF document without password
//         console.log(pdf);
//       }


//       let pages = pdf.numPages; // Get the total number of pages in the PDF
//       for (let i = 1; i <= pages; i++) {
//         let page = await pdf.getPage(i); // Get the page object for each page
//         let txt = await page.getTextContent(); // Get the text content of the page
//         let text = txt.items.map((s) => s.str).join(""); // Concatenate the text items into a single string
//         allText.push(text); // Add the extracted text to the array
//       }
//       allText.map((e, i) => {
//         select.innerHTML += `<option value="${i + 1}">${i + 1}</option>`; // Add options for each page in the page selection dropdown
//       });
//       console.log(select);
//       afterProcess(); // Display the result section
//     } catch (err) {
//       // alert(err.message);
//       console.log(err.message);
//     }
//   }

//   const afterProcess = () => {
//     pdfText.value = allText[select.value - 1]; // Display the extracted text for the selected page
//     // download.href = "data:text/plain;charset=utf-8," + encodeURIComponent(alltext[select.value - 1]); // Set the download link URL for the extracted text
//     // afterUpload.style.display = "flex"; // Display the result section
//     // document.querySelector(".another").style.display = "unset"; // Display the "Extract Another PDF" button
//     console.log(pdfText?.value);
//     const content = pdfText?.value ;
//     pdfText.value(content)
//   }


//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="flex justify-center flex-col" action="
//                             ">
//         <label
//           htmlFor="image"
//           className="  mb-2 text-sm text-[#ed7966] rounded-xl "
//         >
//           <div className="flex justify-center items-center mx-auto outline px-3 py-2 rounded-xl">

//             {
//               text ?

//                 <p>{text.slice(0, 20)}</p>
//                 :
//                 <p>Browse your file</p>
//             }
//           </div>
//         </label>
//         <input
//           className="selectPdf"
//           type="file"
//           id="image"
//           name="pdf"
//           accept="application/pdf"
//           onChange={(e) => setText(e?.target?.files[0]?.name)}

//         />

//         <input type="password" name="password" id="" />


//         <button type="submit" className="my-2 text-sm bg-[#ed7966] hover:bg-[#303179] text-white rounded-lg px-2 py-1"> Submit</button>

//       </form>

//       <div className="afterUpload">
//         <span>Select Page</span>
//         <select className="selectPage" onChange={afterProcess}></select>
//         <a href="" className="download" download>Download Pdf Text</a>
//         <textarea className="pdfText w-96 h-52"></textarea>
//       </div>

//     </div>
//   );
// };

// export default FileUpload;
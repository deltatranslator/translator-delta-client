import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

// Get references to various elements
let pdfinput = document.querySelector(".selectpdf"); // Reference to the PDF file input field
let pwd = document.querySelector(".pwd"); // Reference to the password input field
let upload = document.querySelector(".upload"); // Reference to the upload button
let afterupload = document.querySelector(".afterupload"); // Reference to the result section
let select = document.querySelector("select"); // Reference to the page selection dropdown
let download = document.querySelector(".download"); // Reference to the download link
let pdftext = document.querySelector(".pdftext"); // Reference to the text area for displaying extracted text

// Event listener for the upload button click
const handleUpload = () => {
  let file = pdfinput.files[0]; // Get the selected PDF file
  if (file != undefined && file.type == "application/pdf") {
    let fr = new FileReader(); // Create a new FileReader object
    fr.readAsDataURL(file); // Read the file as data URL
    fr.onload = () => {
      let res = fr.result; // Get the result of file reading
      if (pwd.value == "") {
        extractText(res, false); // Extract text without password
      } else {
        extractText(res, true); // Extract text with password
      }

    }
  } else {
    alert("Select a valid PDF file");
  }
};

let alltext = []; // Array to store all extracted text

// Asynchronous function to extract text from the PDF
async function extractText(url, pass) {
  try {
    let pdf;
    if (pass) {
      pdf = await pdfjs.getDocument({ url: url, password: pwd.value }).promise; // Get the PDF document with password
    } else {
      pdf = await pdfjs.getDocument(url).promise; // Get the PDF document without password
    }
    let pages = pdf.numPages; // Get the total number of pages in the PDF
    for (let i = 1; i <= pages; i++) {
      let page = await pdf.getPage(i); // Get the page object for each page
      let txt = await page.getTextContent(); // Get the text content of the page
      let text = txt.items.map((s) => s.str).join(""); // Concatenate the text items into a single string
      alltext.push(text); // Add the extracted text to the array
    }
    alltext.map((e, i) => {
      select.innerHTML += `<option value="${i + 1}">${i + 1}</option>`; // Add options for each page in the page selection dropdown
    });
    afterProcess(); // Display the result section
  } catch (err) {
    alert(err.message);
  }
}

// Function to handle the post-processing after text extraction
function afterProcess() {
  pdftext.value = alltext[select.value - 1]; // Display the extracted text for the selected page
  download.href = "data:text/plain;charset=utf-8," + encodeURIComponent(alltext[select.value - 1]); // Set the download link URL for the extracted text
  afterupload.style.display = "flex"; // Display the result section
  document.querySelector(".another").style.display = "unset"; // Display the "Extract Another PDF" button
  console.log(pdftext.value);
}
import { useState } from "react";


const FileUpload = () => {
  const [file, setFile] = useState("")
  console.log(file)
  
  return (
    <div className="w-full h-full flex justify-center items-center">
    <div className="mt-7 ">
        <h2 className="my-5 text-neutral-400">Upload your pdf file</h2>
        <form  className="flex justify-center flex-col" action="
        ">
            <label
                htmlFor="image"
                className="  mb-2 text-sm text-[#ed7966] rounded-xl "
            >
                {/* <div className="flex justify-center items-center mx-auto outline px-3 py-2 rounded-xl">

                    {
                        file ?

                            <p>{file.slice(0, 20)}</p>
                            :
                            <p>Browse your file</p>
                    }
                </div> */}
            </label>
            <input
                className=""
                type="file"
                id="image"
                name="pdf"
                accept="application/pdf"
                onChange={(e) => setFile(e?.target?.files[0]?.name)}

            />

            <button type="submit" className="my-2 text-sm bg-[#ed7966] hover:bg-[#303179] text-white rounded-lg px-2 py-1"> Submit</button>
        </form>
        {/* {message} */}
    </div>

</div>
  );
};

export default FileUpload;
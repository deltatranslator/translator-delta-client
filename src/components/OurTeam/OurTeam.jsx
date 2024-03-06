import { NavLink } from "react-router-dom";
import TeamMembers from "./TeamMembers";

const OurTeam = () => {
    return (
        <div>
            <div className="md:flex justify-around lg:ml-4">
               <div className="bg-[#303179] h-80 lg:w-1/3 rounded-tr-3xl rounded-br-full border-e-4">
                <p className="text-[#00ABE4] text-2xl font-bold border-blue-400 border-b-2 mx-3 my-3 text-center ">Delta Translate</p>
                <p className="text-white my-8 text-center font-bold text-3xl">Our Team Section <br />for informing the <br />clients at all .</p>

               </div>
               <div className="my-5 ">
                <div className="flex gap-8 md:gap-16 ml-5">
                <img className="rounded-full w-24 mx-auto ml-6" src="https://i.ibb.co/Q6dKK4N/1709542185354.jpg" />
               <img className="rounded-full mx-auto w-24 " src="https://i.ibb.co/0n4j7Vz/1698063591767.jpg" />
                </div>

               <div className="flex gap-4 md:gap-10">
               <img className="rounded-full mx-auto w-24" src="https://i.ibb.co/k9v24yg/26358891.jpg" />
               <img className="rounded-full md:ml-1  mx-auto w-24" src="https://i.ibb.co/3df7X8b/download-29.jpg" />
               <img className="rounded-full md:ml-3 mx-auto w-24" src="https://i.ibb.co/CvRJHBg/138320069.jpg" />

               </div>
               <div className="flex gap-8 md:gap-16 ml-5">
               <img className="rounded-full mx-auto ml-6 w-24" src="https://i.ibb.co/PMQzgQt/138389296.png" />
               <img className="rounded-full mx-auto  w-24" src="https://i.ibb.co/MsgP3nY/Whats-App-Image-2024-02-10-at-17-40-10.jpg" />
               </div>


                   
               </div>
            </div>
          <TeamMembers></TeamMembers>
          <NavLink to="/" className="flex justify-center">          
            <p className="btn btn-ghost text-[#00ABE4]">Back To Home</p>
          </NavLink>
        </div>
    );
};

export default OurTeam;
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const TeamMembers = () => {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center text-[#00ABE4] font-extralight text-4xl">Our Team</h1>
                <p className="text-center font-medium my-2"> Our team thrives on tackling challenges head-on and finding innovative solutions.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  mt-20 mb-8">
               <div className="card w-80 mx-auto md:w-96 md:h-80 py-8 bg-base-100 shadow-md shadow-blue-400">
                  <figure className="">
                    <img src="https://i.ibb.co/Q6dKK4N/1709542185354.jpg" alt="Shoes" className="rounded-full w-28 h-28" />
                  </figure>
                  <div className=" items-center text-center">
                    <h2 className="font-semibold text-xl my-1">Fazle Rabby</h2>
                    <h2 className="text-[#00ABE4] my-1">FrontEnd Developer</h2>
                    <h2> I'm a passionate frontend developer proficient in React.js, JavaScript, MongoDB, and Node.js.</h2>
                   <div className="flex justify-center gap-3 mt-3">
                   <NavLink to="https://github.com/deltatranslator">
                      <BsGithub className="w-6 h-6 " />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/md-fajle-rabby/">
                      <FaLinkedin className="w-6 h-6"/>
                    </NavLink>
                   </div>

                  </div>
                </div>
                <div className="card w-80 mx-auto md:w-96 py-8 md:h-80 bg-base-100 shadow-md shadow-blue-400">
                  <figure className="">
                    <img src="https://i.ibb.co/0n4j7Vz/1698063591767.jpg" alt="Shoes" className="rounded-full w-28 h-28" />
                  </figure>
                  <div className=" items-center text-center">
                    <h2 className="font-semibold text-xl my-1">Naym Hossen</h2>
                    <h2 className="text-[#00ABE4] my-1">FrontEnd Developer</h2>
                    <h2>Full Stack Developer with a Focus on MERN || Expert in Front-end Technologies</h2>
                   <div className="flex justify-center gap-3 mt-3">
                   <NavLink to="https://github.com/naymhossen1b">
                      <BsGithub className="w-6 h-6 " />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/naymhossen1b/">
                      <FaLinkedin className="w-6 h-6"/>
                    </NavLink>
                   </div>

                  </div>
                </div>
                <div className="card w-80 mx-auto md:w-96 md:h-80 py-8 bg-base-100 shadow-md shadow-blue-400">
                  <figure className="">
                    <img src="https://i.ibb.co/k9v24yg/26358891.jpg" alt="Shoes" className="rounded-full w-28 h-28" />
                  </figure>
                  <div className=" items-center text-center">
                    <h2 className="font-semibold text-xl my-1">Golam Kibria</h2>
                    <h2 className="text-[#00ABE4] my-1">FrontEnd Developer </h2>
                        <h2>Passionate MERN Stack Developer eager to contribute and showcase dedication.</h2>
                   <div className="flex justify-center gap-3 mt-3">
                   <NavLink to="https://github.com/emiya-77">
                      <BsGithub className="w-6 h-6 " />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/kibria7/?fbclid=IwAR14tXJaB5ndE6qxvhgu3aqXwAZDjB2hdHgvJzd3GNeQMIMoI4eDvbHzN6M">
                      <FaLinkedin className="w-6 h-6"/>
                    </NavLink>
                   </div>

                  </div>
                </div>
                <div className="card w-80 mx-auto md:w-96 py-8 md:h-80 bg-base-100 shadow-md shadow-blue-400">
                  <figure className="">
                    <img src="https://i.ibb.co/CvRJHBg/138320069.jpg" alt="Shoes" className="rounded-full w-28 h-28" />
                  </figure>
                  <div className=" items-center text-center">
                    <h2 className="font-semibold text-xl my-1">Mahedi Hasan</h2>
                    <h2 className="text-[#00ABE4] my-1">FrontEnd Developer</h2>
                    <h2> Showcase the ability to adjust to changes and challenges during the development process.</h2>
                   <div className="flex justify-center gap-3 mt-3">
                   <NavLink to="https://github.com/Mahedi205339">
                      <BsGithub className="w-6 h-6 " />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/mahedi205339/?fbclid=IwAR1FC2MrFHiV9wEoJcLopsWXwgmsd3FMiFagn1N_KIostrkG78sobeAtxO8">
                      <FaLinkedin className="w-6 h-6"/>
                    </NavLink>
                   </div>

                  </div>
                </div>
                <div className="card w-80 mx-auto md:w-96 md:h-80 py-8 bg-base-100 shadow-md shadow-blue-400">
                  <figure className="">
                    <img src="https://i.ibb.co/PMQzgQt/138389296.png" alt="Shoes" className="rounded-full w-28 h-28" />
                  </figure>
                  <div className=" items-center text-center">
                    <h2 className="font-semibold text-xl my-1">Md Morshed Alam</h2>
                    <h2 className="text-[#00ABE4] my-1">FrontEnd Developer</h2>
                    <h2> Passionate about creating seamless web experiences with React.js, Node.js, Express.js and MongoDB.</h2>
                   <div className="flex justify-center gap-3 mt-3">
                   <NavLink to="https://github.com/morz-mamun">
                      <BsGithub className="w-6 h-6 " />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/md-morshed-alam-2324022a4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR0q5_xH7j6WGtCTFZ34jhfaxnF6-Ll6VV25xumpmWx1PvOijVyoYaHfadw">
                      <FaLinkedin className="w-6 h-6"/>
                    </NavLink>
                   </div>

                  </div>
                </div>
                <div className="card w-80 mx-auto md:w-96 py-8 md:h-80 bg-base-100 shadow-md shadow-blue-400">
                  <figure className="">
                    <img src="https://i.ibb.co/MsgP3nY/Whats-App-Image-2024-02-10-at-17-40-10.jpg" alt="Shoes" className="rounded-full w-28 h-28" />
                  </figure>
                  <div className=" items-center text-center">
                    <h2 className="font-semibold text-xl my-1">Md. Nafis Ikbal Bhuiyan</h2>
                    <h2 className="text-[#00ABE4] my-1">FrontEnd Developer</h2>
                    <h2> Showcase the ability to adjust to changes and challenges during the development process.</h2>
                   <div className="flex justify-center gap-3 mt-3">
                   <NavLink to="https://github.com/Nafis2222">
                      <BsGithub className="w-6 h-6 " />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/md-nafis-ikbal-bhuiyan-2984322b4/">
                      <FaLinkedin className="w-6 h-6"/>
                    </NavLink>
                   </div>

                  </div>
                </div>

   

            </div>
        </div>
    );
};

export default TeamMembers;
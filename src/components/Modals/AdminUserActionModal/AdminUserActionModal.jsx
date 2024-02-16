import { useState } from 'react';
import { createPortal } from "react-dom";

import { FaRegFaceAngry, FaRegFaceFrown, FaRegFaceMeh, FaRegFaceSmileBeam, FaRegFaceLaughBeam } from "react-icons/fa6";
import { GoUpload } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import useAuth from '../../../hooks/useAuth';
import axiosSecure from '../../../api';
import toast from 'react-hot-toast';
import axios from 'axios';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY2;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AdminUserActionModal = ({ user, open, close }) => {
    const [image, setImage] = useState(null);

    const iconStyles = 'text-3xl text-slate-700 w-12 h-12 flex justify-center items-center rounded-full hover:bg-yellow-300 cursor-pointer transition ease-in-out';


    // Function to handle file input change
    const handleImageChange = async (event) => {
        const selectedFile = event.target.files[0];
        try {
            const formData = new FormData();
            formData.append('image', selectedFile);

            const response = await axios.post(image_hosting_api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const imageUrl = response.data.data.url;
            setImage(imageUrl);
        } catch (error) {
            toast.error('Failed to upload image');
        }
    };

    const handleUpdateUserInfo = async () => {



        const feedback = {
            userEmail: user?.email
        }
        console.log(feedback);

        // axiosSecure.put(`/user-feedback/${user?.email}`, feedback)
        //     .then(res => {
        //         console.log(res);
        //     })

        // Close the modal
        close();
    };

    if (!open) return null;

    return createPortal(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-700 bg-opacity-70 backdrop-filter backdrop-blur-sm z-50"></div>
            <div className="fixed w-[1000px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white p-10 z-50 rounded-md">
                <div className='flex'>
                    <div className='w-full flex justify-center mb-8'>
                        <h1 className='font-bold text-4xl tracking-wider'>User Settings</h1>
                    </div>
                    <div className="flex items-center justify-end relative">
                        <div className="absolute cursor-pointer w-12 h-12 hover:bg-orange-300 hover:bg-opacity-80 flex items-center justify-center rounded-full transition ease-in-out duration-500 -mt-10">
                            <RxCross1 onClick={close} className="text-2xl" />
                        </div>
                    </div>
                </div>
                <div className="p-2 flex flex-col justify-center items-start">
                    <div className='w-full flex'>
                        <div className='w-1/2 p-2 flex flex-col gap-4'>
                            <div className='flex items-end gap-4'>
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4">
                                    <img src={image || user?.photo} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="mt-2">
                                    <label
                                        htmlFor="image"
                                        className="file-label mb-2 text-sm text-white rounded-xl "
                                    >
                                        <div className="flex justify-center items-center gap-2">
                                            <GoUpload className="text-xl font-bold" />
                                            <p>{image ? 'Image selected' : 'Change Profile'}</p>
                                        </div>
                                    </label>
                                    <input
                                        onChange={handleImageChange}
                                        type="file"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                    />
                                </div>
                            </div>
                            <div className='flex items-center gap-4 mx-2'>
                                <h1 className='w-20 font-medium'>Full Name</h1>
                                <input className='w-56 border rounded-md px-2 py-1 focus:outline-none' type="text" />
                            </div>
                            <div className='flex items-center gap-4 mx-2'>
                                <h1 className='w-20 font-medium'>Email</h1>
                                <input className='w-56 border rounded-md px-2 py-1 focus:outline-none' type="text" />
                            </div>
                        </div>
                        <div className='border-l-2 pl-12 border-orange-300 w-1/2 p-2'>
                            <div className='flex gap-4 mx-8 my-4'>
                                <h1 className='font-medium'>
                                    Current Role
                                </h1>
                                <p className='font-medium text-orange-600'>{user?.role || 'user'}</p>
                            </div>
                            <div className='flex items-center px-8 py-2 mr-12 bg-gray-50 gap-4'>
                                <h1 className='font-medium'>Change Roles</h1>
                                <select className='p-2 rounded-md focus:outline-none cursor-pointer' name="role" id="">
                                    <option value="default">Select</option>
                                    <option value="admin">Admin</option>
                                    <option value="contributor">Contributor</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                            <div className='my-6'>
                                <h1 className='font-bold text-xl text-red-600'>Ban</h1>
                                <div className="footer pl-8 pr-4 flex justify-around -mb-2 mt-4">
                                    <button className="btn btn-ghost w-1/2 flex justify-center items-center bg-orange-400 text-white text-[17px] font-medium hover:bg-orange-500 tracking-wider">temporary</button>
                                    <button onClick={close} className="btn btn-ghost w-1/2 flex justify-center items-center bg-red-500 text-white font-medium hover:bg-red-600 text-[17px] tracking-wider">Permanent</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex items-center p-2 mr-12 bg-gray-50 gap-2'>
                            <h1 className='font-medium'>Roles</h1>
                            <select className='p-2 rounded-md focus:outline-none cursor-pointer' name="role" id="">
                                <option value="default">Select</option>
                                <option value="admin">Admin</option>
                                <option value="contributor">Contributor</option>
                                <option value="user">User</option>
                            </select>
                        </div> */}
                    </div>
                    <div className="w-full pl-8 pr-4 flex justify-around -mb-2 mt-12 gap-8">
                        <div className='w-1/2 flex justify-end items-center pr-4'>
                            <button onSubmit={handleUpdateUserInfo} className="btn btn-ghost flex justify-center items-center hover:bg-orange-300 w-32">Save</button>
                        </div>
                        <div className='w-1/2 flex justify-start items-center'>
                            <button onClick={close} className="btn btn-ghost flex justify-center items-center w-32">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default AdminUserActionModal;

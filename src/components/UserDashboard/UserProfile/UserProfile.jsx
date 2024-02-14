import Lottie from "lottie-react";
import userAnimation from "../../../assets/userProfile.json";
const UserProfile = () => {
  return (
    <>
      <section className=" text-center mt-5 space-y-2">
        <h3 className=" text-4xl font-medium text-slate-50">Personal info</h3>
        <p className=" font-medium text-slate-300">
          Info about you and your preferences across Delta services
        </p>
      </section>
      <section className="md:flex flex-grow-0 items-center justify-evenly px-5">
        <div className="space-y-2 flex-1">
          <h2 className="text-2xl font-medium text-slate-50">
            Your profile info in Google services
          </h2>
          <p className=" text-slate-200">
            Personal info and options to manage it. You can make some of this
            info, like your contact details, visible to others so they can reach
            you easily. You can also see a summary of your profiles.
          </p>
        </div>
        <div className="overflow-hidden">
          <Lottie className="md:w-96 w-full" animationData={userAnimation} />
        </div>
      </section>
    </>
  );
};

export default UserProfile;

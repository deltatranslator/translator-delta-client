import { useState } from "react";
import { Radio } from "antd";
import ReactiveButton from "reactive-button";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import axiosSecure from "../../../api";

const Occupation = () => {
  const [occupation, setOccupation] = useState("");
  const [state, setState] = useState("idle");
  const [interestState, setInterestState] = useState("idle");
  const [selectedInterests, setSelectedInterests] = useState([]);

  const { user } = useAuth();

  // Array of occupations with value and text
  const occupations = [
    { id: 1, value: "student", text: "Student" },
    { id: 2, value: "teacher", text: "Teacher" },
    { id: 3, value: "business", text: "Business" },
    { id: 4, value: "other", text: "Other" },
  ];

  const areasOfInterest = [
    { id: 1, value: "academic_english", text: "Academic English" },
    { id: 2, value: "business_english", text: "Business English" },
    { id: 3, value: "exam_preparation", text: "Exam Preparation" },
    { id: 4, value: "grammar", text: "Grammar" },
    { id: 5, value: "idioms", text: "Idioms" },
    { id: 6, value: "listening_skills", text: "Listening Skills" },
    { id: 7, value: "phrasal_verbs", text: "Phrasal Verbs" },
    { id: 8, value: "pronunciation", text: "Pronunciation" },
    { id: 9, value: "reading_skills", text: "Reading Skills" },
    { id: 10, value: "speaking_skills", text: "Speaking Skills" },
    { id: 11, value: "vocabulary", text: "Vocabulary" },
    { id: 12, value: "writing_skills", text: "Writing Skills" },
  ];

  // Handler function for occupation radio button change
  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  // Handler function for occupation radio button
  const handleOccupationSubmit = async (event) => {
    event.preventDefault();
    try {
      const email = user.email;
      const isOccupation = { occupation, email };
      await axiosSecure.post("/profile", isOccupation).then((res) => {
        if (res.data.acknowledged == true) {
          toast.success("Data Saved");
        } else {
          toast.error("Failed!");
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handler function for occupation button
  const onClickOccupationHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  // Handler function for Interest radio button change
  const handleInterestChange = (event) => {
    setSelectedInterests(event.target.value);
  };

  // Handler function for interest radio button
  const handleInterestSubmit = async (event) => {
    event.preventDefault();
    try {
      const email = user.email;
      const isInterest = { selectedInterests, email };
      await axiosSecure.post("/profile", isInterest).then((res) => {
        console.log(res?.data);
        if (res.data.acknowledged == true) {
          toast.success("Data Saved");
        } else {
          toast.error("Failed!");
        }
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    }
  };

  // Handler function for interest button
  const onClickInterestHandler = () => {
    setInterestState("loading");
    setTimeout(() => {
      setInterestState("success");
    }, 2000);
  };

  return (
    <>
      {/* Your occupation */}
      <section className="font-delta-v2">
        <div>
          <h2 className="text-start px-2 text-3xl font-medium text-slate-900 dark:text-slate-50">
            Your occupation
          </h2>
        </div>
        <form
          onSubmit={handleOccupationSubmit}
          className="items-center mt-5 p-2"
        >
          <Radio.Group
            size="large"
            className="grid md:grid-cols-4 grid-cols-2 gap-5 text-center z-100 font-delta-v2"
          >
            {occupations.map((item) => (
              <Radio.Button
                key={item?.id}
                onChange={handleOccupationChange}
                value={item?.value}
                className="font-delta-v2 dark:bg-slate-950 dark:text-white border-none dark:hover:bg-[#2293D6] rounded-md"
              >
                {item?.text}
              </Radio.Button>
            ))}
          </Radio.Group>
          <ReactiveButton
          className=" dark:text-white"
            style={{
              borderRadius: "5px",
              marginTop: "15px",
              fontFamily: "font-delta-v2",
            }}
            size={"normal"}
            buttonState={state}
            idleText="Save"
            type="submit"
            loadingText="Loading"
            successText="Done"
            onClick={onClickOccupationHandler}
            shadow={true}
            outline={true}
            animation={true}
          />
        </form>
      </section>
      {/* Areas of interest */}
      <section className=" mt-10 pb-3 font-delta-v2">
        <div>
          <h2 className="text-3xl text-start px-2 font-medium text-slate-900 dark:text-slate-50">
            Areas of interest
          </h2>
        </div>
        <form onSubmit={handleInterestSubmit} className="mt-5 p-2">
          <Radio.Group
            size="large"
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 text-center"
          >
            {areasOfInterest.map((item) => (
              <Radio.Button
                key={item?.id}
                onChange={handleInterestChange}
                value={item?.value}
                className="font-delta-v2 dark:bg-slate-950 dark:text-white border-none dark:hover:bg-[#2293D6] rounded-md"
              >
                {item?.text}
              </Radio.Button>
            ))}
          </Radio.Group>
          <ReactiveButton
          className=" dark:text-white"
            style={{
              borderRadius: "5px",
              marginTop: "15px",
              fontFamily: "font-delta-v2",
            }}
            size={"normal"}
            buttonState={interestState}
            idleText="Save"
            type="submit"
            loadingText="Loading"
            successText="Done"
            onClick={onClickInterestHandler}
            shadow={true}
            outline={true}
            animation={true}
          />
        </form>
      </section>
    </>
  );
};

export default Occupation;

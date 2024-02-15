import { useState } from "react";
import { Radio } from "antd";
import ReactiveButton from "reactive-button";
const Occupation = () => {
  const [occupation, setOccupation] = useState("");
  const [interest, setInterest] = useState("");
  const [state, setState] = useState("idle");

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

  // Handler function for radio button change
  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  const handleInterestChange = (event) => {
    setInterest(event.target.value);
  };

  const handleOccupationSubmit = (event) => {
    event.preventDefault();
    console.log("Selected occupation:", occupation);
  };

  const handleInterestSubmit = (event) => {
    event.preventDefault();
    console.log("Selected interest:", interest);
  };

  const onClickOccupationHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  const onClickInterestHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <>
      {/* Your occupation */}
      <section>
        <div>
          <h2 className=" text-3xl font-medium text-slate-50">
            Your occupation
          </h2>
        </div>
        <form
          onSubmit={handleOccupationSubmit}
          className="flex items-center mt-5"
        >
          <Radio.Group
            size="large"
            className="gap-5 md:flex flex-grow-0 items-center"
          >
            {occupations.map((item) => (
              <Radio.Button
                key={item?.id}
                onChange={handleOccupationChange}
                value={item?.value}
              >
                {item?.text}
              </Radio.Button>
            ))}
          </Radio.Group>
          <ReactiveButton
            style={{
              borderRadius: "5px",
              marginLeft: "20px",
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
      <section className=" mt-10 pb-3">
        <div>
          <h2 className=" text-3xl font-medium text-slate-50">
            Areas of interest
          </h2>
        </div>
        <form onSubmit={handleInterestSubmit} className=" mt-5">
          <Radio.Group
            size="large"
            className="grid md:grid-cols-4 grid-cols-3 gap-5 text-center"
          >
            {areasOfInterest.map((item) => (
              <Radio.Button
                key={item?.id}
                onChange={handleInterestChange}
                value={item?.value}
                className=""
              >
                {item?.text}
              </Radio.Button>
            ))}
          </Radio.Group>
          <ReactiveButton
            style={{
              borderRadius: "5px",
              marginTop: "15px",
            }}
            size={"normal"}
            buttonState={state}
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

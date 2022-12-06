import React, { useState } from "react";
import { Button, Input, message, Statistic } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import Timer from "../../components/Timer";
const { Countdown } = Statistic;

const Question = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const onChangeFile = (e) => {
    message.success("Success !!!");
    setDisabled(false);
    const form = new FormData();
    form.append("file", e.target.files[0]);
    // axios.post("betka url yozladi", form).then((res) => {
    //   console.log(res);
    // });
  };
  const onSubmit = () => {
    navigate(-1);
  };
  return (
    <section className="question-container">
      <div className="GlobaWrapper question-wrapper">
        <h3>Question end time !</h3>
        <Timer />
        <div className="question-title">
          <h3>QUESTION</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            voluptatum minus ut consequatur ullam quidem. Atque accusantium quas
            quisquam, quae accusamus, molestiae facilis officiis, maiores saepe
            sunt praesentium iure consequuntur labore autem ad ducimus est ullam
            minima in possimus. Mollitia eveniet corrupti quibusdam in incidunt
            odio deleniti asperiores numquam necessitatibus, eos qui unde
            dolorem, quidem natus quia omnis tempora pariatur non hic cupiditate
            nobis. Aperiam, nulla! Ullam quam sit delectus laborum reprehenderit
            exercitationem maxime ipsa assumenda autem, in odit pariatur
            molestias ex minus quae placeat accusamus dolorem impedit dolores
            cupiditate et ea. Iusto recusandae explicabo ipsam eaque. Excepturi
            eveniet quam quo repellendus, rem ipsa deserunt impedit illum sint.
            Corporis voluptatem dicta autem incidunt. Excepturi
            eveniet quam quo repellendus, rem ipsa deserunt impedit illum sint.
            Corporis voluptatem dicta autem incidunt. Excepturi
            eveniet quam quo repellendus, rem ipsa deserunt impedit illum sint.
            Corporis voluptatem dicta autem incidunt. Excepturi
            eveniet quam quo repellendus, rem ipsa deserunt impedit illum sint.
            Corporis voluptatem dicta autem incidunt ?
          </p>
        </div>
        <div className="question-btns">
          <div className="question-btn-file">
            <Input type={"file"} onChange={(e) => onChangeFile(e)} />
            <p>File upload</p>
          </div>
          <Button type="primary" disabled={disabled} onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Question;

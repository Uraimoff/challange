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
    message.success("Muvofiqiyatli yuklandi!");
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
    <section className="GlobaWrapper question-container">
      <h3>Birinchi kun savolining tugash vaqti!</h3>
      <Timer />
      <div className="question-title">
        <h3>1-SAVOL</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          voluptatum minus ut consequatur ullam quidem. Atque accusantium quas
          quisquam, quae accusamus, molestiae facilis officiis, maiores saepe
          sunt praesentium iure consequuntur labore autem ad ducimus est ullam
          minima in possimus. Mollitia eveniet corrupti quibusdam in incidunt
          odio deleniti asperiores numquam necessitatibus, eos qui unde dolorem,
          quidem natus quia omnis tempora pariatur non hic cupiditate nobis.
          Aperiam, nulla! Ullam quam sit delectus laborum reprehenderit
          exercitationem maxime ipsa assumenda autem, in odit pariatur molestias
          ex minus quae placeat accusamus dolorem impedit dolores cupiditate et
          ea. Iusto recusandae explicabo ipsam eaque. Excepturi eveniet quam quo
          repellendus, rem ipsa deserunt impedit illum sint. Corporis voluptatem
          dicta autem incidunt. Blanditiis molestias quos autem maiores
          repellendus obcaecati harum deserunt voluptas, sunt laborum sequi ipsa
          adipisci, tempore quasi impedit, officia ad voluptatem distinctio?
          Saepe voluptas, quaerat repellat voluptatem ex numquam aliquid aut
          consequuntur cumque fugiat animi sapiente nemo id quasi suscipit
          officia minima perspiciatis pariatur. Soluta quo nulla temporibus
          repellat alias reprehenderit labore quasi dolores consectetur
          doloremque? Suscipit quidem odit magnam vero maxime cumque fuga?
          Explicabo ratione officiis ducimus nisi in! Dolore id ipsam
          consequuntur sapiente assumenda numquam non eius suscipit eligendi,
          maiores, architecto dolorum ea, dicta animi.
        </p>
      </div>
      <div className="question-btns">
        <div className="question-btn-file">
          <Input type={"file"} onChange={(e) => onChangeFile(e)} />
          <p>Yuklash</p>
        </div>
        <Button type="primary" disabled={disabled} onClick={onSubmit}>
          Saqlash
        </Button>
      </div>
    </section>
  );
};

export default Question;

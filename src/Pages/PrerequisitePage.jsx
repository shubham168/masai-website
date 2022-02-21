import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../context/RegisterContext";

export const PrerequisitePage = () => {
  const { setUserprerequisite } = useContext(RegisterContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  let count = 0;
  const changeIsDisabled = (e) => {
    e.target.checked ? count++ : count--;
    console.log(count);
    if (count == 2) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const sendData = (e) => {
    setUserprerequisite(e);
    navigate("/info");
  };
  return (
    <div>
      <form onSubmit={(e) => sendData(e)}>
        <input
          type="checkbox"
          name="attend"
          onClick={(e) => changeIsDisabled(e)}
        />
        <label htmlFor="attend">Can you attend 90% of the classes</label>
        <br />
        <input
          type="checkbox"
          name="laptop"
          onClick={(e) => changeIsDisabled(e)}
        />
        <label htmlFor="attend">Do you have a laptop?</label>
        <br />
        {!isDisabled ? (
          <input type="submit" value="CONTINUE" disabled />
        ) : (
          <input type="submit" value="CONTINUE" />
        )}
      </form>
    </div>
  );
};

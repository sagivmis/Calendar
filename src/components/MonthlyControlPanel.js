import React from "react";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const MonthlyControlPanel = () => {
  let history = useHistory();

  const goBack = () => {
    history.push("/");
  };
  return (
    <div>
      <div className="monthly-back">
        <Button onClick={goBack} icon="arrow left" inverted />
      </div>
    </div>
  );
};

export default MonthlyControlPanel;

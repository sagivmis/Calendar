import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
const WelcomePanel = () => {
  let history = useHistory();

  const goWeek = () => {
    history.push("/weekCalendar");
  };
  const goDay = () => {
    history.push("/dayCalendar");
  };
  const goMonth = () => {
    history.push("/monthCalendar");
  };
  return (
    <div className="calendar-choose">
      <Button size="huge" animated onClick={goDay}>
        <Button.Content visible>Daily</Button.Content>
        <Button.Content hidden>
          <Icon name="calendar outline" />
        </Button.Content>
      </Button>{" "}
      <Button size="huge" animated="vertical" onClick={goWeek}>
        <Button.Content visible>Weekly</Button.Content>
        <Button.Content hidden>
          <Icon name="calendar outline" />
        </Button.Content>
      </Button>{" "}
      <Button size="huge" animated="fade" onClick={goMonth}>
        <Button.Content visible>Monthly</Button.Content>
        <Button.Content hidden>
          <Icon name="calendar outline" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default WelcomePanel;

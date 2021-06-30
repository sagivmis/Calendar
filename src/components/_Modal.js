import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import _Form from "./_Form";
import Tasks from "./Tasks";
import { useLocation } from "react-router-dom";

const _Modal = ({
  text,
  onC,
  form = false,
  day,
  question = false,
  dayDescription = false,
  setDays,
  days,
  setDoneState = () => {},
  setNotDoneState = () => {},
  calculateDonePercentage = () => {},
  calculateNotDonePercentage = () => {},
  buttonColor = "orange",
  buttonColorBool = true,
}) => {
  const location = useLocation();
  const setBarsStates = () => {
    setDoneState({ percent: calculateDonePercentage() });
    console.log(calculateDonePercentage());
    console.log(calculateNotDonePercentage());
    setNotDoneState({ percent: calculateNotDonePercentage() });
  };
  // console.log(done, notdone);
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        centered={true}
        trigger={
          // <Button inverted>
          (location.pathname === "/weekCalendar" && (
            <Button
              inverted
              color={`${buttonColor}`}
              content={text}
              // icon="pencil alternate"
            />
          )) ||
          (location.pathname === "/dayCalendar" && (
            <Button inverted content={text} />
          ))
        }
        dimmer={"blurring"}
        size="tiny"
        className="modall"
        closeIcon
      >
        <Modal.Content>
          <Modal.Description>
            <Header style={{ textAlign: `${form ? "center" : "left"}` }}>{`${
              form ? "Add a task" : ""
            } 
            ${dayDescription ? `${day.date}` : ""} 
            ${question ? "question-modal" : ""}
            `}</Header>
            <p style={{ textAlign: "center" }}></p>
            {/* Form within modal*/}
            {form && <_Form />}
            {/* Form end */}
            {/* day tasks modal */}
            {dayDescription && (
              <Tasks
                day={day}
                setDays={setDays}
                days={days}
                setDoneState={setDoneState}
                setNotDoneState={setNotDoneState}
                calculateNotDonePercentage={calculateNotDonePercentage}
                calculateDonePercentage={calculateDonePercentage}
              />
            )}
            {/* end day tasks modal */}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Close
          </Button>
          {form && (
            <Button
              content="Save"
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                setBarsStates();
                setOpen(false);
                onC();
              }}
              color="orange"
              inverted
            />
          )}
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default _Modal;

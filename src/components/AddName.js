import React from "react";
import { Button, Header, Modal, Input } from "semantic-ui-react";
import { useState } from "react";
import Margin from "./Margin";

const AddName = ({ setName, name }) => {
  const [open, setOpen] = useState(true);
  const onClickAddName = () => {
    const name = document.getElementById("form-first-name");
    setName(name.value);
  };
  return (
    <div>
      <Modal
        onClose={() => {
          setOpen(false);

          if (!name) setOpen(true);
        }}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={""}
        size="mini"
      >
        <Modal.Content>
          <Modal.Description>
            <Header>Welcome to CalendarV1.0</Header>
            <p>
              Manage and maintain your schedule with us, while we grow bigger
              and add more and more features.
              <br /> Feel free to mail us any suggestions over at:
              admin@sagivm.com <br />
              Thanks and have fun
            </p>
            <p>&nbsp;&nbsp;&nbsp;What is your preffered name?</p>
            <Margin margin="1px" />
          </Modal.Description>
          <Input
            placeholder="e.g. Sagiv Mishaan, S.M"
            fluid
            id="form-first-name"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => {
              const name = document.getElementById("form-first-name");
              if (name.value !== "") {
                setOpen(false);
                onClickAddName();
              }
            }}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default AddName;

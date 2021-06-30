import React from "react";
import { Accordion, Input, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { Header, Icon, Modal } from "semantic-ui-react";

const UserMenu = ({ name, setName, active, setIndex, setLogin, loggedIn }) => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };
  const logOut = () => {
    goBack();
    setName();
    setLogin(false);
  };
  const changeName = () => {
    let newName = document.getElementById("change-name-input").value;
    let acc = document.getElementById("accordion-2");
    setIndex(-1);
    // console.log(acc);

    setName(newName);
    setLogin(false);
  };
  const panels = [
    {
      key: "change-name",
      title: {
        content: "Change Name",
      },
      content: {
        content: (
          <div>
            <Input
              action={{
                inverted: true,
                labelPosition: "left",
                icon: "edit outline",
                content: "Change Name",
                className: "change-name-btn",
                size: "medium",
                onClick: changeName,
              }}
              actionPosition="left"
              placeholder="New Name"
              size="mini"
              className=""
              id="change-name-input"
            />
          </div>
        ),
      },
    },
    {
      key: "log-out",
      title: {
        content: "Log Out",
        icon: "external",
      },
      content: {
        content: (
          <div className="menu-logout-btn">
            <Modal
              basic
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              size="small"
              trigger={
                <Button content="OK" inverted size="mini" compact color="red">
                  OK
                </Button>
              }
            >
              <Header icon>
                <Icon name="archive" />
                LOG OUT
              </Header>
              <Modal.Content>
                <p>Are you sure you want to log out?</p>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  basic
                  color="red"
                  inverted
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Icon name="remove" /> No
                </Button>
                <Button
                  color="green"
                  inverted
                  onClick={() => {
                    setOpen(false);
                    setName();
                    logOut();
                  }}
                >
                  <Icon name="checkmark" /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
          </div>
        ),
      },
    },
  ];
  const panels2 = [
    {
      key: "change-name-acc",
      title: {
        content: "Menu",
      },
      content: {
        content: (
          <div className="change-name">
            <Accordion
              defaultActiveIndex={active}
              panels={panels}
              id="accordion-2"
            />
          </div>
        ),
      },
    },
  ];

  return (
    <div className="menu-container">
      <div className="user-menu">
        <Accordion defaultActiveIndex={-1} panels={panels2} id="accordion-3" />
      </div>
    </div>
  );
};

export default UserMenu;

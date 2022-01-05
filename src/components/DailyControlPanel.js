import React from "react";
import { Button } from "semantic-ui-react";
import _Modal from "../components/_Modal";
import { useHistory } from "react-router-dom";

const DailyControlPanel = ({ onClickAddTask, setDays, days }) => {
    const history = useHistory();
    const goBack = () => {
        history.push("/");
    };
    return (
        <div>
            <div className='back-button-day'>
                <Button onClick={goBack} icon='arrow left' inverted />
            </div>
            <div className='daily-control-panel'>
                <Button.Group vertical inverted>
                    <_Modal
                        text='Add Task'
                        onC={onClickAddTask}
                        form={true}
                        setDays={setDays}
                        days={days}
                        buttonColor='white'
                        blankColor=''
                    />
                    <Button inverted>Edit Day</Button>
                    <Button inverted>Edit a Task</Button>
                </Button.Group>
            </div>
        </div>
    );
};

export default DailyControlPanel;

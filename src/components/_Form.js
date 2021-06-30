import React from "react";
import { Checkbox, Form } from "semantic-ui-react";

const _Form = () => {
  //   const addCustomer = (customer) => {
  //     axios
  //       .post("https://fastserver-sm.herokuapp.com/users", {
  //         email: customer.email,
  //         password: customer.password,
  //         first_name: customer.first_name,
  //         last_name: customer.last_name,
  //       })
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   };

  return (
    <div>
      <Form>
        <Form.Field>
          <Form.Input
            label="Task Name"
            placeholder="Name"
            width={16}
            id="form-name"
          />
        </Form.Field>
        <Form.Group>
          <Form.Input
            label="Time"
            placeholder="e.g. 15:00"
            width={5}
            id="form-time"
          />
          <Form.Input label="Note" placeholder="" width={11} id="form-note" />
        </Form.Group>
        <Form.Field>
          <Checkbox
            label="Have you done the task yet?"
            className="form-checkbox"
            id="checkbox"
          />
          <p className="small-note">
            *Adding finished events is a great way for well-maintaning your
            CalendarV1.0
          </p>
        </Form.Field>
      </Form>
    </div>
  );
};

export default _Form;

import React from "react";
import Form from '../components/form/Form';
import Input from '../components/form/Input';

export default function App() {
  const onSubmit = (data: Record<string, string>) => console.log(data);

  return (
    <Form onSubmit={onSubmit}>
      <Input label="test" />
      <span>
        <button type="submit" >
          Submit
        </button>
      </span>
    </Form>
  );
}
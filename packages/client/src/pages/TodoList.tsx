import React from "react";
import Form from '../componsents/forms/Form';
import Input from '../componsents/forms/Input';

export default function App() {
  const onSubmit = (data: Record<string, string>) => console.log(data);

  return (
    <Form onSubmit={onSubmit}>
      <Input label="test" />
      <input type="submit" />
    </Form>
  );
}
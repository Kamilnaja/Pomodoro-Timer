import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export const SettingsComponent = () => {
  return (
    <Container>
      <h2>Settings</h2>
      <Form>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Enable sounds" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './settingsComponent.scss';

export const SettingsComponent = () => {
  return (
    <Container className="settings">
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

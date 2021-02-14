import React from 'react';
import { Card, Form, Button, FormGroup } from 'react-bootstrap';
import { CurrentFocusContainerProps } from '../container/CurrentFocusContainerProps';

export const CurrentFocusComponent = (props: CurrentFocusContainerProps) => {
  return (
    <Card>
      <Card.Header>I'm focusing at ...</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Working</option>
              <option>Learning</option>
              <option>Training</option>
            </select>
          </Form.Group>
          <FormGroup>
            <Button>Save</Button>
          </FormGroup>
        </Form>
      </Card.Body>
    </Card>
  );
};

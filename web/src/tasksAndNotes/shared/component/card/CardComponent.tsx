import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Todo } from '../../../../../../types/tasksAndNotesInterfaces';

export const CardComponent = (props: { todo?: Todo }) => (
  <Card>
    <Form>
      <Card.Header>
        <Form.Check inline type="checkbox"></Form.Check>
        <span>{props?.todo?.title}</span>
        <span>{props?.todo?.id}</span>
      </Card.Header>
      <Card.Body>
        <div>{props?.todo?.note}</div>
        <div>{props?.todo?.dateCreated}</div>
        <div>{props?.todo?.isDone}</div>
        <Button variant="success">+</Button>
      </Card.Body>
      <Card.Footer>
        <Button variant="success">Save</Button>
      </Card.Footer>
    </Form>
  </Card>
);

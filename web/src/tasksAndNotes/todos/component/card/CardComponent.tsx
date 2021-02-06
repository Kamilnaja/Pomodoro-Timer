import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Todo } from '../../../../../../types/tasksAndNotesInterfaces';

type CardProps = {
  id: string;
  title: string;
  note: string;
  dateCreated: string;
  isDone: boolean;
};

export const CardComponent = (props: { todo: Todo }) => (
  <Card>
    <Card.Header>
      <input type="checkbox" checked={props.todo.isDone} />
      <span>{props.todo.id}</span>
      <span>{props.todo.title}</span>
    </Card.Header>
    <Card.Body>
      <div>{props.todo.note}</div>
      <div>{props.todo.dateCreated}</div>
      <div>{props.todo.isDone}</div>
      <Button variant="success">+</Button>
    </Card.Body>
  </Card>
);

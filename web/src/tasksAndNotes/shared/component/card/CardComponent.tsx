import React from 'react';
import { Button, Card, Form, Col, Row } from 'react-bootstrap';
import { Task } from '../../../../../../types/tasksAndNotesInterfaces';

export const CardComponent = (props: { todo?: Task }, state: { isExpanded: boolean }) => (
  <>
    <Card className="mb-4">
      {props.todo ? (
        <Form>
          <Card.Header>
            <Form.Check inline type="checkbox"></Form.Check>
            <span>{props.todo.title}</span>
            <span>{props.todo?.id}</span>
            <div>{props.todo.dateCreated}</div>
          </Card.Header>
          <Card.Body>
            <div>{props.todo.note}</div>
            <div>{props.todo.isDone}</div>
            <Button variant="success">+</Button>
          </Card.Body>
          <Card.Footer>
            <Button variant="success">Save</Button>
          </Card.Footer>
        </Form>
      ) : (
        <Form>
          <Card.Header>
            <Form.Group as={Row}>
              <Col lg={1}>
                <Form.Check inline type="checkbox"></Form.Check>
              </Col>
              <Col lg={11}>
                <Form.Control></Form.Control>
              </Col>
            </Form.Group>
          </Card.Header>
          <Card.Body>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Task type</Form.Label>
              <Form.Control as="select">
                <option>Todo</option>
                <option>Note</option>
                <option>Calendar</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control size="lg"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Add subtasks</Form.Label>
              <Button variant="success">+</Button>
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Form.Group>
              <Button variant="success">Save</Button>
            </Form.Group>
          </Card.Footer>
        </Form>
      )}
    </Card>
  </>
);

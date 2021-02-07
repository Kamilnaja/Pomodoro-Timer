import React from 'react';
import { Button, Card, Form, Col, Row } from 'react-bootstrap';
import { Task } from '../../../../../../types/tasksAndNotesInterfaces';

export const CardComponent = (props: { task?: Task; toggleExpand: () => void; isExpanded?: boolean }) => (
  <>
    <Card className="mb-1">
      {props.task ? (
        <Form>
          <Card.Header onClick={() => props.toggleExpand()}>
            <Form.Check inline type="checkbox"></Form.Check>
            <span>{props.task.title}</span>
            <span>{props.task?.id}</span>
            <div>{props.task.dateCreated}</div>
          </Card.Header>
          {props.isExpanded && (
            <>
              <Card.Body>
                <div>{props.task.note}</div>
                <div>{props.task.isDone}</div>
                <Button variant="success">+</Button>
              </Card.Body>
              <Card.Footer>
                <Button variant="danger" className="mr-2" onClick={() => props.toggleExpand()}>
                  Cancel
                </Button>
                <Button variant="success">Save</Button>
              </Card.Footer>
            </>
          )}
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
              <Button variant="danger" className="mr-2" onClick={() => props.toggleExpand()}>
                Cancel
              </Button>
              <Button variant="success">Save</Button>
            </Form.Group>
          </Card.Footer>
        </Form>
      )}
    </Card>
  </>
);

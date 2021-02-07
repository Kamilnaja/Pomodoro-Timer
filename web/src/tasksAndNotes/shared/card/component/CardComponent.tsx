import React, { FormEvent, useEffect } from 'react';
import { Accordion, Button, Card, Form, Col, Row, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { CardComponentProps } from './cardComponentProps';
import './cardComponent.scss';
import { Task } from '../../../../../../types/tasksAndNotesInterfaces';

export const CardComponent = (props: CardComponentProps) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: Task) => {
    if (props.task?.id) {
      setValue('id', props.task.id);
    }
    props.handleSave(data);
  };
  useEffect(() => {
    register({ name: 'note' });
    register({ name: 'title' });
    register({ name: 'isDone' });
    register({ name: 'id' });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Accordion>
        <Card className="mb-1">
          <Card.Header>
            <Container>
              <Row className="align-items-center">
                <Col md={1}>
                  <Form.Check name="isDone" inline type="checkbox" ref={register()}></Form.Check>
                </Col>
                <Col md={6}>
                  <span
                    className="card__editable"
                    suppressContentEditableWarning={true}
                    contentEditable
                    onInput={(e: FormEvent<HTMLDivElement>) => {
                      setValue('title', e.currentTarget.textContent);
                    }}
                  >
                    {props.task?.title}
                  </span>
                </Col>
                <Col md={3}>
                  <span className="mr-1">{props.task?.id}</span>
                  <span>{props.task?.dateCreated.toString().substr(0, 10) || new Date().toDateString()}</span>
                </Col>
                <Col md={1}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    toggle
                  </Accordion.Toggle>
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div
                contentEditable
                onInput={(e: FormEvent<HTMLDivElement>) => {
                  setValue('note', e.currentTarget.textContent);
                }}
                suppressContentEditableWarning={true}
              >
                {props.task?.note}
              </div>
              <div>{props.task?.isDone}</div>
              <hr />
              <Button variant="success" onClick={() => props.addSubtask()}>
                +
              </Button>
              {props.task?.subtasks?.map(item => (
                <div>item</div>
              ))}
              <hr />
              <Button variant="danger" className="mr-2">
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Save
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </form>
  );
};

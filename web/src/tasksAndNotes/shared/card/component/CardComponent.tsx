import React, { FormEvent, useEffect } from 'react';
import { Accordion, Button, Card, Form, Col, Row, Container, Badge } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { CardComponentProps } from './cardComponentProps';
import './cardComponent.scss';
import { Task } from '../../../../../../types/tasksAndNotesInterfaces';

export const CardComponent = (props: CardComponentProps) => {
  const { task } = props;

  const defaultValues = {
    id: task?.id,
    note: task?.note,
    title: task?.title,
    isDone: task?.isDone,
  };
  const { register, handleSubmit, setValue } = useForm({ defaultValues });
  const onSubmit = (data: Task) => {
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
        <Card>
          <Card.Header>
            <Container>
              <Row className="align-items-center">
                <Col md={1}>
                  <Form.Check name="isDone" inline type="checkbox" ref={register()}></Form.Check>
                </Col>
                <Col md={7}>
                  <span
                    className={`card__editable ${task?.isDone ? 'text-muted' : ''}`}
                    suppressContentEditableWarning={true}
                    contentEditable
                    onInput={(e: FormEvent<HTMLDivElement>) => {
                      setValue('title', e.currentTarget.textContent);
                    }}
                  >
                    {task?.title}
                  </span>
                </Col>
                <Col md={2}>
                  <Badge pill variant="primary">
                    {task?.dateCreated.toString().substr(0, 10) || new Date().toDateString()}
                  </Badge>
                </Col>
                <Col md={1}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    exp
                  </Accordion.Toggle>
                </Col>
                <Col md={1}>
                  <Button variant="success" type="submit">
                    Save
                  </Button>
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
                className="content__editable"
              >
                {task?.note}
              </div>
              <div>{task?.isDone}</div>
              <hr />
              <h4>Subtasks</h4>
              <Button variant="success" onClick={() => props.addSubtask()}>
                +
              </Button>
              {task?.subtasks?.map(item => (
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

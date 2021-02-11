import React, { FormEvent, useEffect } from 'react';
import { Accordion, Badge, Button, Card, Col, Container, Form, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Subtask, Task } from '../../../../../../types/tasksAndNotesInterfaces';
import './cardComponent.scss';
import { CardComponentProps, FormData } from './cardComponentProps';

export const CardComponent = (props: CardComponentProps) => {
  const {
    task: { dateCreated, id, isDone, note, subtasks, title },
  } = props;

  const defaultValues: FormData = {
    id: id,
    note: note,
    title: title,
    isDone: isDone,
    subtasks: subtasks,
  };

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit, setValue } = useForm<FormData>({ defaultValues });

  const onSubmit = (data: Task) => {
    if (!data.title) {
      return;
    }

    const payload: Task = mapPayloadBeforeSend(data, id);

    props.handleSave(payload);
  };

  useEffect(() => {
    register({ name: 'note' });
    register({ name: 'title', required: true, minLength: 2 });
    register({ name: 'isDone' });
    register({ name: 'id' });
    register({ name: 'subtasks' });
  });

  const addSubtask = () => {
    setIndexes(prevIndex => [...prevIndex, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeSubtask = (index: number) => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  // const clearSubtasks = () => {
  //   setIndexes([]);
  // };

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
                    className={`card__editable ${isDone ? 'text-muted' : ''}`}
                    suppressContentEditableWarning={true}
                    contentEditable
                    onInput={(e: FormEvent<HTMLDivElement>) => {
                      setValue('title', e.currentTarget.textContent);
                    }}
                  >
                    {title}
                  </span>
                </Col>
                <Col md={2}>
                  <Badge pill variant="primary">
                    {dateCreated.toString().substr(0, 10) || new Date().toDateString()}
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
                {note}
              </div>
              <div>{isDone}</div>
              <hr />
              {indexes.map(index => {
                const fieldName = `subtasks[${index}]`;
                return (
                  <div key={index}>
                    <Form.Group>
                      <Form.Check
                        inline
                        name={`${fieldName}.isDone`}
                        ref={register}
                        id={`isDone_${index}`}
                      ></Form.Check>
                      <Form.Label htmlFor={`isDone_${index}`}>Is done?</Form.Label>
                    </Form.Group>
                    <FormGroup>
                      <FormLabel htmlFor="title">Title</FormLabel>
                      <Form.Control type="text" name={`${fieldName}.title`} ref={register} />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel htmlFor="title">Note</FormLabel>
                      <Form.Control type="text" name={`${fieldName}.note`} ref={register} />
                    </FormGroup>
                    <FormGroup>
                      <Button variant="danger" onClick={removeSubtask(index)}>
                        ×
                      </Button>
                    </FormGroup>
                  </div>
                );
              })}
              <Button onClick={addSubtask}>Add subtask</Button>
              {/* <SubtasksWrapperContainer subtasks={props.task?.subtasks} /> */}
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
function mapPayloadBeforeSend(data: Task, id: string): Task {
  return {
    ...data,
    subtasks: data.subtasks.map((subtask: Subtask) => {
      const obj = subtask;
      obj.parentId = id;
      obj.isDone = typeof subtask.isDone === 'object' || false;
      return obj;
    }),
  };
}

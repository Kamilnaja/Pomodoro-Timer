import React from 'react';
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { SubtaskComponent } from '../subtaskComponent/SubtaskComponent';
import { SubtaskComponentProps } from './subtaskWrapperComponentProps';

export const SubtaskWrapperComponent = (props: SubtaskComponentProps) => {
  return (
    <>
      <Row>
        <Col>
          <h4>Subtasks</h4>
        </Col>
      </Row>
      <FormGroup>
        <Form.Text>Enter your subtask</Form.Text>
        <Form.Control></Form.Control>
      </FormGroup>
      <Row>
        <Col>
          <Button
            onClick={() =>
              props.addSubtask({
                parentId: '10',
                id: '1',
                isDone: true,
                note: 'subtask important',
                title: 'catch that frog',
              })
            }
          >
            Zapisz subtask
          </Button>
        </Col>
        {props.subtasks?.map(item => (
          <SubtaskComponent subtask={item}></SubtaskComponent>
        ))}
      </Row>
    </>
  );
};

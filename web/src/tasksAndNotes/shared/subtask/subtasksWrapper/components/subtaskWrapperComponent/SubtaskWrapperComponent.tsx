import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { SubtaskComponentProps } from './subtaskWrapperComponentProps';

export const SubtaskWrapperComponent = (props: SubtaskComponentProps) => (
  <>
    <Row>
      <Col>
        <h4>Subtasks</h4>
      </Col>
    </Row>
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
        <div>item</div>
      ))}
    </Row>
  </>
);

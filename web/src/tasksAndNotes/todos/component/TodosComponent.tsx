import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { Task } from '../../../../../types/tasksAndNotesInterfaces';
import CardContainer from '../../shared/card/container/CardContainer';
import { TodosComponentProps } from './todosComponentProps';

export const TodosComponent = (props: TodosComponentProps) => (
  <div>
    <h2>Your things to do</h2>
    {props.isAddingTaskActive && <CardContainer></CardContainer>}

    {!props.todos.length && <div>You have 0 todos, please add something</div>}

    <ul className="list-unstyled">
      {props.todos
        .filter((item: Task) => !item.isDone)
        .map((item: Task, idx: number) => (
          <li key={idx} className="mb-1" tabIndex={0}>
            <CardContainer task={item}></CardContainer>
          </li>
        ))}
    </ul>
    <hr />
    <Accordion>
      <h2>
        Done tasks
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          exp
        </Accordion.Toggle>
      </h2>
      <Accordion.Collapse eventKey="0">
        <ul className="list-unstyled">
          {props.todos
            .filter((item: Task) => item.isDone)
            .map((item: Task, idx: number) => (
              <li key={idx} className="mb-1">
                <CardContainer task={item}></CardContainer>
              </li>
            ))}
          <li></li>
        </ul>
      </Accordion.Collapse>
    </Accordion>
  </div>
);

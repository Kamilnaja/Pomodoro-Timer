import React from 'react';
import { Todo } from '../../../../../types/tasksAndNotesInterfaces';
import { CardComponent } from '../../shared/component/card/CardComponent';

export const TodosComponent = (props: { todos: Todo[]; isAddingTaskActive: boolean }) => (
  <div>
    <h2>Your things to do</h2>
    {!props.todos.length && <div>You have 0 todos, please add something</div>}
    <ul className="list-unstyled">
      {props.todos?.map((item: Todo, idx: number) => (
        <li key={idx} className="mb-4" tabIndex={0}>
          <CardComponent todo={item}></CardComponent>
        </li>
      ))}
    </ul>

    <hr />
    <h2>Done tasks</h2>
    <ul className="list-unstyled">
      {props.todos
        .filter(item => item.isDone === true)
        .map((item: Todo, idx: number) => (
          <li key={idx} className="mb-4">
            <CardComponent todo={item}></CardComponent>
          </li>
        ))}
      <li></li>
    </ul>
  </div>
);

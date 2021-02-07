import React from 'react';
import { Button } from 'react-bootstrap';

export const SidebarComponent = (props: { handleOpenNewTask: () => void }) => (
  <ul className="list-unstyled">
    <li>
      <Button onClick={() => props.handleOpenNewTask()}>Show add new task</Button>
      <hr />
    </li>
    <li tabIndex={0}>Todos</li>
    <li tabIndex={0}>Notes</li>
    <li tabIndex={0}>Calendar</li>
    <li tabIndex={0}>All</li>
  </ul>
);

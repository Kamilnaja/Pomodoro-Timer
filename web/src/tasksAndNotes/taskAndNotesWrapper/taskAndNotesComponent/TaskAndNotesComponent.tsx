import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CalendarContainer from '../../calendar/container/CalendarContainer';
import NotesContainer from '../../notes/container/NotesContainer';
import SidebarContainer from '../../sidebar/container/SidebarContainer';
import TodosContainer from '../../todos/container/TodosContainer';

export const TaskAndNotesComponent = () => {
  return (
    <Container>
      <Row>
        <Col lg={2}>
          <SidebarContainer />
        </Col>
        <Col lg={10}>
          <TodosContainer />
          <NotesContainer />
          <CalendarContainer />
        </Col>
      </Row>
    </Container>
  );
};

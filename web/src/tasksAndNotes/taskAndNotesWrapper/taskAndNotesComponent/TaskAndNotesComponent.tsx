import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CalendarContainer } from '../../calendar/container/CalendarContainer';
import NotesContainer from '../../notes/container/NotesContainer';
import { SidebarContainer } from '../../sidebar/container/SidebarContainer';
import TodosContainer from '../../todos/container/TodosContainer';

export const TaskAndNotesComponent = () => {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <SidebarContainer />
        </Col>
        <Col lg={8}>
          <TodosContainer />
          <NotesContainer />
          <CalendarContainer />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>Task Preview</Col>
      </Row>
    </Container>
  );
};

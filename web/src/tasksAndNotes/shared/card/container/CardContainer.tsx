import React, { Component } from 'react';
import { Task } from '../../../../../../types/tasksAndNotesInterfaces';
import { CardComponent } from '../component/CardComponent';

export class CardContainer extends Component<{ task?: Task }, { isExpanded: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  addSubtask = () => {
    console.log('adding subtask');
  };

  render() {
    return <CardComponent addSubtask={this.addSubtask} task={this.props.task}></CardComponent>;
  }
}

export default CardContainer;

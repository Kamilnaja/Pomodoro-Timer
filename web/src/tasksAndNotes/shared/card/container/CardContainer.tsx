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

  toggleExpand = () =>
    this.setState({
      isExpanded: !this.state.isExpanded,
    });

  render() {
    return (
      <CardComponent
        toggleExpand={this.toggleExpand}
        isExpanded={this.state.isExpanded}
        task={this.props.task}
      ></CardComponent>
    );
  }
}

export default CardContainer;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TagComponent } from '../component/TagComponent';
import { TagContainerProps } from './TagContainer.props';
import { handleGetTags, setCurrentTag } from '../store/actions/tagsActions';
import { TagsState } from '../store/models/TagsStateInterface';
import { Loader } from '../../shared/loader/Loader';
import { ErrorComponent } from '../../shared/error/errorComponent/ErrorComponent';

class TagContainer extends Component<TagContainerProps> {
  componentDidMount() {
    this.props.handleGetTags();
  }

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tagId = e.currentTarget.value;
    this.props.setCurrentTag(tagId);
  };

  render() {
    if (this.props.tagsState.isLoading) return <Loader />;
    else if (this.props.tagsState.error) return <ErrorComponent />;
    else {
      return <TagComponent tags={this.props.tagsState.tags} handleChange={this.handleChange} />;
    }
  }
}

const mapStateToProps = (state: { tags: TagsState }) => {
  const tagsState = state.tags;
  return { tagsState };
};

const mapDispatchToProps = {
  handleGetTags,
  setCurrentTag,
};

export default connect(mapStateToProps, mapDispatchToProps)(TagContainer);

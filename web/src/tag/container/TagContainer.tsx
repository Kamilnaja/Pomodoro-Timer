import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TagComponent } from '../component/TagComponent';
import { TagContainerProps } from './TagContainer.props';
import { handleGetTags, setCurrentTag } from '../store/actions/tagsActions';
import { TagsState } from '../store/models/TagsStateInterface';
import { Loader } from '../../shared/loader/Loader';
import { ErrorComponent } from '../../shared/error/errorComponent/ErrorComponent';
import { AuthState } from '../../auth/store/interfaces/authState';

class TagContainer extends Component<TagContainerProps> {
  componentDidMount() {
    this.props.handleGetTags();
  }

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tagId = e.currentTarget.value;
    this.props.setCurrentTag(tagId);
  };

  render() {
    if (this.props.authState.isLoggedIn) {
      if (this.props.tagsState.isLoading) return <Loader />;
      else if (!this.props.tagsState.tags.length)
        return <p className="text-white">Please add some items to db to see tags</p>;
      else if (this.props.tagsState.error) return <ErrorComponent />;
      else {
        return <TagComponent tags={this.props.tagsState.tags} handleChange={this.handleChange} />;
      }
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state: { tags: TagsState; auth: AuthState }) => {
  const tagsState = state.tags;
  const authState = state.auth;
  return { tagsState, authState };
};

const mapDispatchToProps = {
  handleGetTags,
  setCurrentTag,
};

export default connect(mapStateToProps, mapDispatchToProps)(TagContainer);

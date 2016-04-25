'use strict';

import React, { Component, PropTypes } from 'react';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ShowStory from 'views/stories/show';

export default class StoryList extends Component {

	static propTypes = {
		stories: PropTypes.array.isRequired,
		fetchStories: PropTypes.func.isRequired
	}

	componentWillMount() {
		this.props.fetchStories()
	}

  render() {
    return (
      <Col sm={9} smOffset={3} md={10} mdOffset={2} className='main'>
        <ListGroup>
          { this.props.stories.map(story => 
            <ShowStory story={ story } key={ story.id } />
          )}
        </ListGroup>
      </Col>
    );
  }
}
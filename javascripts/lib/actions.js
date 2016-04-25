import fetch from 'isomorphic-fetch';

export const REQUEST_ALL_STORIES = 'REQUEST_ALL_STORIES';
export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES';
export const SET_STORIES_SORT_ORDER = 'SET_STORIES_SORT_ORDER';
export const SET_STORIES_SELECTED_TAGS = 'SET_STORIES_SELECTED_TAGS';

function requestAllStories() {
  return {
    type: REQUEST_ALL_STORIES
  }
}

function receiveAllStories(stories) {
  return {
    type: RECEIVE_ALL_STORIES,
    stories
  }
}

export function setStoriesSortOrder(sortOrder) {
  return {
    type: SET_STORIES_SORT_ORDER,
    sortOrder,
  }
}

export function setStoriesSelectedTags(tags) {
  return {
    type: SET_STORIES_SELECTED_TAGS,
    tags
  }
}

export function fetchStories() {
  return dispatch => {
    dispatch(requestAllStories())
    return fetch('/api/data.json')
      .then(response => response.json())
      .then(json => dispatch(receiveAllStories(json)))
  }
}

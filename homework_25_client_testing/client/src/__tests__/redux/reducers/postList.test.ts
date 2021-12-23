import postsListReducer from '../../../redux/reducers/postsList';
import {
  HIDE_POSTS_LIST_ERROR,
  HIDE_POSTS_LIST_LOADING,
  SHOW_POSTS_LIST_ERROR,
  SHOW_POSTS_LIST_LOADING,
  UPDATE_POSTS_LIST, UPDATE_POSTS_LIST_PAGE
} from '../../../redux/constants/postsList';

const testNumberValue = 1;
const testNumberNewValue = 5;
const initialState = {
  data: {
    posts: [],
    total: testNumberValue,
    isLoading: false,
    error: '',
    page: testNumberValue,
    perPage: testNumberValue
  }
};

describe('postsListReducer test', () => {
  test('UPDATE_POSTS_LIST', () => {
    expect(postsListReducer(initialState, {
      type: UPDATE_POSTS_LIST,
      payload: {
        data: [],
        limit: testNumberValue,
        page: testNumberValue,
        total: testNumberValue
      }
    }))
      .toEqual({
        data: {
          ...initialState.data,
          posts: [],
          total: testNumberValue,
          isLoading: false,
          error: ''
        }
      });
  });

  test('SHOW_POSTS_LIST_LOADING', () => {
    expect(postsListReducer(initialState, { type: SHOW_POSTS_LIST_LOADING }))
      .toEqual({
        data: {
          ...initialState.data,
          isLoading: true
        }
      });
  });

  test('HIDE_POSTS_LIST_LOADING', () => {
    expect(postsListReducer(initialState, { type: HIDE_POSTS_LIST_LOADING }))
      .toEqual({
        data: {
          ...initialState.data,
          isLoading: false
        }
      });
  });

  test('SHOW_POSTS_LIST_ERROR', () => {
    expect(postsListReducer(initialState, { type: SHOW_POSTS_LIST_ERROR }))
      .toEqual({
        data: {
          ...initialState.data,
          error: true
        }
      });
  });

  test('HIDE_POSTS_LIST_ERROR', () => {
    expect(postsListReducer(initialState, { type: HIDE_POSTS_LIST_ERROR }))
      .toEqual({
        data: {
          ...initialState.data,
          error: false
        }
      });
  });

  test('UPDATE_POSTS_LIST_PAGE', () => {
    // @ts-ignore
    expect(postsListReducer(initialState, { type: UPDATE_POSTS_LIST_PAGE, payload: testNumberNewValue }))
      .toEqual({
        data: {
          ...initialState.data,
          page: testNumberNewValue
        }
      });
  });

  test('UNKNOWN ACTION', () => {
    expect(postsListReducer(initialState, { type: 'UNKNOWN' })).toEqual(initialState);
  });
});

import postModalCommentsReducer from '../../../redux/reducers/postModalComments';
import {
  HIDE_POST_MODAL_COMMENTS_ERROR,
  HIDE_POST_MODAL_COMMENTS_LOADING, SHOW_POST_MODAL_COMMENTS_ERROR,
  SHOW_POST_MODAL_COMMENTS_LOADING,
  UPDATE_POST_MODAL_COMMENTS, UPDATE_POST_MODAL_COMMENTS_PAGE, UPDATE_POST_MODAL_TOTAL_COMMENTS
} from '../../../redux/constants/postModalComments';

const initialState = {
  error: false,
  isLoading: false,
  comments: [],
  owners: [],
  page: 1,
  limit: 6,
  totalComments: 0
};
const testNumberValue = 1;

describe('postModalCommentsReducer test', () => {
  test('UPDATE_POST_MODAL_COMMENTS', () => {
    expect(postModalCommentsReducer(initialState, {
      type: UPDATE_POST_MODAL_COMMENTS,
      payload: [],
      page: testNumberValue,
      total: testNumberValue
    }))
      .toEqual(initialState);
  });

  test('SHOW_POST_MODAL_COMMENTS_LOADING', () => {
    expect(postModalCommentsReducer(initialState, {
      type: SHOW_POST_MODAL_COMMENTS_LOADING,
      payload: [],
      page: testNumberValue,
      total: testNumberValue
    }))
      .toEqual({
        ...initialState,
        isLoading: true
      });
  });

  test('HIDE_POST_MODAL_COMMENTS_LOADING', () => {
    expect(postModalCommentsReducer(initialState, {
      type: HIDE_POST_MODAL_COMMENTS_LOADING,
      payload: [],
      page: testNumberValue,
      total: testNumberValue
    }))
      .toEqual({
        ...initialState,
        isLoading: false
      });
  });

  test('SHOW_POST_MODAL_COMMENTS_ERROR', () => {
    expect(postModalCommentsReducer(initialState, {
      type: SHOW_POST_MODAL_COMMENTS_ERROR,
      payload: [],
      page: testNumberValue,
      total: testNumberValue
    }))
      .toEqual({
        ...initialState,
        error: true
      });
  });

  test('HIDE_POST_MODAL_COMMENTS_ERROR', () => {
    expect(postModalCommentsReducer(initialState, {
      type: HIDE_POST_MODAL_COMMENTS_ERROR,
      payload: [],
      page: testNumberValue,
      total: testNumberValue
    }))
      .toEqual({
        ...initialState,
        error: false
      });
  });

  test('UPDATE_POST_MODAL_COMMENTS_PAGE', () => {
    expect(postModalCommentsReducer(initialState, {
      type: UPDATE_POST_MODAL_COMMENTS_PAGE,
      payload: [],
      page: testNumberValue,
      total: testNumberValue
    }))
      .toEqual({
        ...initialState,
        page: testNumberValue
      });
  });

  test('UPDATE_POST_MODAL_TOTAL_COMMENTS', () => {
    expect(postModalCommentsReducer(initialState, {
      type: UPDATE_POST_MODAL_TOTAL_COMMENTS,
      payload: [],
      page: testNumberValue,
      total: testNumberValue
    }))
      .toEqual({
        ...initialState,
        totalComments: testNumberValue
      });
  });

  test('UNKNOWN ACTION', () => {
    expect(postModalCommentsReducer(initialState, {
      type: 'UNKNOWN ACTION',
      payload: [],
      page: testNumberValue,
      total: testNumberValue
    })).toEqual(initialState);
  });
});

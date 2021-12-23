import postModalReducer from '../../../redux/reducers/postModal';
import { CLOSE_POST_MODAL, OPEN_POST_MODAL, SET_POST_MODAL_CURRENT_ID } from '../../../redux/constants/postModal';

const initialState = {
  isOpened: false,
  currentPostId: ''
};

const testValue = 'value';

describe('postModalReducer test', () => {
  test('OPEN_POST_MODAL', () => {
    expect(postModalReducer(initialState, { type: OPEN_POST_MODAL }))
      .toEqual({
        ...initialState,
        isOpened: true
      });
  });

  test('CLOSE_POST_MODAL', () => {
    expect(postModalReducer(initialState, { type: CLOSE_POST_MODAL }))
      .toEqual({
        ...initialState,
        isOpened: false
      });
  });

  test('SET_POST_MODAL_CURRENT_ID', () => {
    expect(postModalReducer(initialState, { type: SET_POST_MODAL_CURRENT_ID, payload: testValue }))
      .toEqual({
        ...initialState,
        currentPostId: testValue
      });
  });

  test('UNKNOWN ACTION', () => {
    expect(postModalReducer(initialState, { type: 'UNKNOWN' })).toEqual(initialState);
  });
});

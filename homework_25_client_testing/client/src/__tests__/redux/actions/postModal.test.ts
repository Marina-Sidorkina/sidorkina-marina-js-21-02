import * as actions from '../../../redux/actions/postModal';
import { CLOSE_POST_MODAL, OPEN_POST_MODAL, SET_POST_MODAL_CURRENT_ID } from '../../../redux/constants/postModal';

const testValue = 'value';

describe('postModal actions', () => {
  test('openPostModalAction should return action object', () => {
    expect(actions.openPostModalAction()).toEqual({
      type: OPEN_POST_MODAL
    });
  });

  test('closePostModalAction should return action object', () => {
    expect(actions.closePostModalAction()).toEqual({
      type: CLOSE_POST_MODAL
    });
  });

  test('setPostModalCurrenIdAction should return action object', () => {
    expect(actions.setPostModalCurrenIdAction(testValue)).toEqual({
      type: SET_POST_MODAL_CURRENT_ID,
      payload: testValue
    });
  });
});

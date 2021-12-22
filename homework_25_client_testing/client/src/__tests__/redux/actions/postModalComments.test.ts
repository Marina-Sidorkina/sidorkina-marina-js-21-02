import * as actions from '../../../redux/actions/postModalComments';
import {
  HIDE_POST_MODAL_COMMENTS_ERROR,
  HIDE_POST_MODAL_COMMENTS_LOADING,
  SHOW_POST_MODAL_COMMENTS_ERROR,
  SHOW_POST_MODAL_COMMENTS_LOADING,
  UPDATE_POST_MODAL_COMMENTS,
  UPDATE_POST_MODAL_COMMENTS_PAGE,
  UPDATE_POST_MODAL_TOTAL_COMMENTS
} from '../../../redux/constants/postModalComments';
import * as proxy from '../../../api/proxy/index';

jest.mock('../../../api/proxy/index');

const testValue = 'value';
const testNumber = 1;
const emptyFunction = () => {};
const comment = {
  id: testValue,
  message: testValue,
  owner: {
    id: testValue,
    title: testValue,
    firstName: testValue,
    lastName: testValue,
    picture: testValue,
  },
  post: testValue,
  publishDate: {
    enDate: testValue,
    ruDate: testValue,
    enDateAndTime: testValue,
    ruDateAndTime: testValue,
  }
};

describe('postModalComments actions', () => {
  test('showPostModalCommentsLoadingAction should return action object', () => {
    expect(actions.showPostModalCommentsLoadingAction()).toEqual({
      type: SHOW_POST_MODAL_COMMENTS_LOADING
    });
  });

  test('hidePostModalCommentsLoadingAction should return action object', () => {
    expect(actions.hidePostModalCommentsLoadingAction()).toEqual({
      type: HIDE_POST_MODAL_COMMENTS_LOADING
    });
  });

  test('showPostModalCommentsErrorAction should return action object', () => {
    expect(actions.showPostModalCommentsErrorAction()).toEqual({
      type: SHOW_POST_MODAL_COMMENTS_ERROR
    });
  });

  test('hidePostModalCommentsErrorAction should return action object', () => {
    expect(actions.hidePostModalCommentsErrorAction()).toEqual({
      type: HIDE_POST_MODAL_COMMENTS_ERROR
    });
  });

  test('updatePostModalCommentsAction should return action object', () => {
    expect(actions.updatePostModalCommentsAction([comment])).toEqual({
      type: UPDATE_POST_MODAL_COMMENTS,
      payload: [comment]
    });
  });

  test('updatePostModalCommentsPageAction should return action object', () => {
    expect(actions.updatePostModalCommentsPageAction(testNumber)).toEqual({
      type: UPDATE_POST_MODAL_COMMENTS_PAGE,
      page: testNumber
    });
  });

  test('updatePostModalCommentsTotalAction should return action object', () => {
    expect(actions.updatePostModalCommentsTotalAction(testNumber)).toEqual({
      type: UPDATE_POST_MODAL_TOTAL_COMMENTS,
      total: testNumber
    });
  });

  test('getPostModalCommentsListAction should call hidePostModalCommentsLoadingAction', (done) => {
    // @ts-ignore
    proxy.getCommentsList.mockResolvedValue(testValue);
    const getPostModalCommentsAction = actions.getPostModalCommentsListAction(testNumber, testNumber, testValue);

    const dispatch = jest
      .fn()
      .mockImplementationOnce(emptyFunction)
      .mockImplementationOnce(emptyFunction)
      .mockImplementationOnce((action) => {
        expect(action).toEqual({
          type: HIDE_POST_MODAL_COMMENTS_LOADING
        });
        done();
      });

    getPostModalCommentsAction(dispatch);
  });

  test('getPostModalCommentsListAction should call hidePostModalCommentsLoadingAction', (done) => {
    // @ts-ignore
    proxy.getCommentsList.mockRejectedValue(testValue);
    const getPostModalCommentsAction = actions.getPostModalCommentsListAction(testNumber, testNumber, testValue);

    const dispatch = jest
      .fn()
      .mockImplementationOnce(emptyFunction)
      .mockImplementationOnce(emptyFunction)
      .mockImplementationOnce((action) => {
        expect(action).toEqual({
          type: SHOW_POST_MODAL_COMMENTS_ERROR
        });
        done();
      });

    getPostModalCommentsAction(dispatch);
  });
});

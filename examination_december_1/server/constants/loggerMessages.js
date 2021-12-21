module.exports = {
  userRepository: {
    GET_USERS_LIST_INVOKE: '[UserRepository.getUsersList] invoke page={} limit={}',
    GET_USER_LIST_SUCCESS: '[UserRepository.getUsersList] success data={}',
    GET_USER_LIST_ERROR: '[UserRepository.getUsersList] error error={}',

    GET_USER_BY_ID_INVOKE: '[UserRepository.getUserById] invoke id={}',
    GET_USER_BY_ID_SUCCESS: '[UserRepository.getUserById] success data={}',
    GET_USER_BY_ID_ERROR: '[UserRepository.getUserById] error error={}',

    GET_USER_POSTS_LIST_INVOKE: '[UserRepository.getUserPostsList] invoke page={} limit={} userId={}',
    GET_USER_POSTS_LIST_SUCCESS: '[UserRepository.getUserPostsList] success data={}',
    GET_USER_POSTS_LIST_ERROR: '[UserRepository.getUserPostsList] error error={}',
  },
  postRepository: {
    GET_POSTS_LIST_INVOKE: '[PostRepository.getPostsList] invoke page={} limit={}',
    GET_POSTS_LIST_SUCCESS: '[PostRepository.getPostsList] success data={}',
    GET_POSTS_LIST_ERROR: '[PostRepository.getPostsList] error error={}',

    GET_POST_BY_ID_INVOKE: '[PostRepository.getPostById] invoke id={}',
    GET_POST_BY_ID_SUCCESS: '[PostRepository.getPostById] success data={}',
    GET_POST_BY_ID_ERROR: '[PostRepository.getPostById] error error={}',

    GET_POST_COMMENTS_LIST_INVOKE: '[PostRepository.getPostCommentsList] invoke page={} limit={} postId={}',
    GET_POST_COMMENTS_LIST_SUCCESS: '[PostRepository.getPostCommentsList] success data={}',
    GET_POST_COMMENTS_LIST_ERROR: '[PostRepository.getPostCommentsList] error error={}',
  },
  userService: {
    GET_USERS_LIST_INVOKE: '[UserService.getUsersList] invoke page={} limit={}',
    GET_USER_LIST_SUCCESS: '[UserService.getUsersList] success status={} data={}',
    GET_USER_LIST_ERROR: '[UserService.getUsersList] error status={} error={}',

    GET_USER_BY_ID_INVOKE: '[UserService.getUserById] invoke id={}',
    GET_USER_BY_ID_SUCCESS: '[UserService.getUserById] success status={} data={}',
    GET_USER_BY_ID_ERROR: '[UserService.getUserById] error status={} error={}',

    GET_USER_POSTS_LIST_INVOKE: '[UserService.getUserPostsList] invoke page={} limit={} userId={}',
    GET_USER_POSTS_LIST_SUCCESS: '[UserService.getUserPostsList] success status={} data={}',
    GET_USER_POSTS_LIST_ERROR: '[UserService.getUserPostsList] error status={} error={}',

    UPDATE_USER_BY_ID_INVOKE: '[UserService.updateUserById] invoke id={} body={}',
    UPDATE_USER_BY_ID_SUCCESS: '[UserService.updateUserById] success status={} data={}',
    UPDATE_USER_BY_ID_ERROR: '[UserService.updateUserById] error status={} error={}',

    CREATE_USER_INVOKE: '[UserService.createUser] invoke body={}',
    CREATE_USER_SUCCESS: '[UserService.createUser] success status={} data={}',
    CREATE_USER_ERROR: '[UserService.createUser] error status={} error={}',
  },
  postService: {
    GET_POSTS_LIST_INVOKE: '[PostService.getPostsList] invoke page={} limit={}',
    GET_POSTS_LIST_SUCCESS: '[PostService.getPostsList] success status={} data={}',
    GET_POSTS_LIST_ERROR: '[PostService.getPostsList] error status={} error={}',

    GET_POST_BY_ID_INVOKE: '[PostService.getPostById] invoke id={}',
    GET_POST_BY_ID_SUCCESS: '[PostService.getPostById] success status={} data={}',
    GET_POST_BY_ID_ERROR: '[PostService.getPostById] error status={} error={}',

    GET_POST_COMMENTS_LIST_INVOKE: '[PostService.getPostCommentsList] invoke page={} limit={} postId={}',
    GET_POST_COMMENTS_LIST_SUCCESS: '[PostService.getPostCommentsList] success status={} data={}',
    GET_POST_COMMENTS_LIST_ERROR: '[PostService.getPostCommentsList] error status={} error={}',
  },
  userAction: {
    UPDATE_USER_BY_ID_INVOKE: '[UserAction.updateUserById] invoke id={} data={}',
    UPDATE_USER_BY_ID_SUCCESS: '[UserAction.updateUserById] success data={}',
    UPDATE_USER_BY_ID_ERROR: '[UserAction.updateUserById] error error={}',

    CREATE_USER_INVOKE: '[UserAction.createUser] invoke data={}',
    CREATE_USER_SUCCESS: '[UserAction.createUser] success data={}',
    CREATE_USER_ERROR: '[UserAction.createUser] error error={}',
  }
}

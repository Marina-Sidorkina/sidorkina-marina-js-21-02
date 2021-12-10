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
  }
}

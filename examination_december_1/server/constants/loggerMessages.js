module.exports = {
  userRepository: {
    GET_USERS_LIST_INVOKE: '[UserRepository.getUsersList] invoke page={} limit={}',
    GET_USER_LIST_SUCCESS: '[UserRepository.getUsersList] success data={}',
    GET_USER_LIST_ERROR: '[UserRepository.getUsersList] error message={}',

    GET_USER_BY_ID_INVOKE: '[UserRepository.getUserById] invoke id={}',
    GET_USER_BY_ID_SUCCESS: '[UserRepository.getUserById] success data={}',
    GET_USER_BY_ID_ERROR: '[UserRepository.getUserById] error message={}',
  },
  userService: {
    GET_USERS_LIST_INVOKE: '[UserService.getUsersList] invoke page={} limit={}',
    GET_USER_LIST_SUCCESS: '[UserService.getUsersList] success status={} data={}',
    GET_USER_LIST_ERROR: '[UserService.getUsersList] error status={} error={}',

    GET_USER_BY_ID_INVOKE: '[UserService.getUserById] invoke id={}',
    GET_USER_BY_ID_SUCCESS: '[UserService.getUserById] success status={} data={}',
    GET_USER_BY_ID_ERROR: '[UserService.getUserById] error status={} error={}',
  }
}

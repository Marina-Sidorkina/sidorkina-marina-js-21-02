module.exports = {
  userRepository: {
    GET_USERS_LIST_INVOKE: '[UserRepository.getUsersList] invoke page={} limit={}',
    GET_USER_LIST_SUCCESS: '[UserRepository.getUsersList] success data={}',
    GET_USER_LIST_ERROR: '[UserRepository.getUsersList] error message={}',
    GET_USERS_LIST_SERVICE_INVOKE: '[UserService.getUsersList] invoke page={} limit={}',
  },
  userService: {
    GET_USERS_LIST_INVOKE: '[UserService.getUsersList] invoke page={} limit={}',
    GET_USER_LIST_SUCCESS: '[UserService.getUsersList] success status={} data={}',
    GET_USER_LIST_ERROR: '[UserService.getUsersList] error status={} error={}',
  }
}

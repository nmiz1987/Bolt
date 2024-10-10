const en = {
  error_boundary: {
    title: 'Something went wrong...',
    message: 'Message:',
    stack: 'stack:',
    button: 'try again',
  },
  app: {
    web_title: 'My Website',
    keyboard: 'Done',
    network_error: 'No internet connection',
  },
  error: {
    id_is_required: 'ID is required',
    id_is_not_valid: 'ID is not valid',
    phone_is_required: 'Phone is required',
    phone_is_not_valid: 'Phone is not valid',
    password_is_required: 'Password is required',
  },
  home: {
    title: 'Welcome',
  },
};

export default en;
export type Translations = typeof en;

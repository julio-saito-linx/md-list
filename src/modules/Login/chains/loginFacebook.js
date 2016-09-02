import {set, copy} from 'cerebral/operators';
import {PAGE_CHAT_LIST} from '~/constants';
import facebookLogin from '../actions/facebookLogin.js';

export default [
  set('state:login.is_loading', true),
  facebookLogin, {
    success: [
      set('state:login.is_logged', true),
      copy('input:user', 'state:login.user'),
    ],
    error: [
      set('state:login.is_logged', false),
      copy('input:code', 'state:login.error_code'),
      copy('input:message', 'state:login.error_message'),
    ]
  },
  set('state:main.current_page', PAGE_CHAT_LIST),
  set('state:login.is_loading', false),
];

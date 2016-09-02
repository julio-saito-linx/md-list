import loginFacebook from './chains/loginFacebook';
import signOut from './chains/signOut';

export default module => {
  module.addState({
    is_logged: false,
    is_loading: false,
    error_code: null,
    error_message: null,
    user: {},
  });

  module.addSignals({
    facebookLoginClicked: loginFacebook,
    signOutClicked: signOut,
  });
};

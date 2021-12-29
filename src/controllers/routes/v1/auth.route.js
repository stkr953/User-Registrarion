const {
    login,
    register,
    oAuth,
    refresh,
    sendPasswordReset,
    passwordReset,
  } = require('../../validations/auth.validation');
  
  const router = express.Router();
  router.route('/register')
  .post(validate(register), controller.register);
  //business logic
  router.route('/login')
  .post(validate(login), controller.login);
   //business logic
   router.route('/refresh-token')
  .post(validate(refresh), controller.refresh);

router.route('/send-password-reset')
  .post(validate(sendPasswordReset), controller.sendPasswordReset);

router.route('/reset-password')
  .post(validate(passwordReset), controller.resetPassword);

import MailService from './src/services/mail';

MailService
  .getInstance()
  .sendMail('byungjin.dev@gmail.com', 'test', '<div>test mail</div>')

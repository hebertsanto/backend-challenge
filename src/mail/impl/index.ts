import { logger } from '../../helpers/logger';
import { MailOptions } from '../options';
import { transporter } from '../transporter';

export const sendEmailToConfirmateAccount = async (email: string) => {
  const mailOptions: MailOptions = {
    from: 'user_email',
    to: email,
    subject: 'content',
    text: 'token',
    html: '<p>Plesase confirm your account</p>',
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info(`[Email confirmation was sent to user ${email}...]`);
  } catch (error) {
    throw new Error('Some error ocurred');
  }
};

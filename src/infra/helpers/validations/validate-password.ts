import { logger } from '../logger';

export const isValidPassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    logger.info(
      '[ Minimum eight characters, at least one letter, one number and one special character ]',
    );
    throw new Error('Invalid password');
  }

  return true;
};

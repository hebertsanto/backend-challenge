import { expect, describe, it } from 'vitest';
import { isValidEmail } from '../../../infra/helpers/validations/validate-email';

describe('Validate email', () => {
  it('Must return true if email is valid', () => {
    const email = 'hebertsantos0704@gmail.com';
    expect(isValidEmail(email)).toBe(true);
  });

  it('Must return error if email is not valid', () => {
    const notValidEmail = 'hebertzin.com';

    expect(() => isValidEmail(notValidEmail)).toThrow('Email invalid');
  });
});

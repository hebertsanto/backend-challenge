import { describe, it, expect } from 'vitest';
import { validatePassword } from '../../../infra/helpers/validations/validate-password';
describe('Validate password', () => {
  it('Should return error if password is valid', () => {
    const invalidPassword = '2030';

    expect(() => validatePassword(invalidPassword)).toThrow('Invalid password');
  });
  it('Should return true if password is valid', () => {
    const validPassword = '@hebert203040';

    expect(validatePassword(validPassword)).toBe(true);
  });
});

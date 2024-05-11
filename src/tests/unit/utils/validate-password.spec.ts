import { describe, it, expect } from 'vitest';
import { isValidPassword } from '../../../infra/helpers/validations/validate-password';
describe('Validate password', () => {
  it('Should return error if password is valid', () => {
    const invalidPassword = '2030';

    expect(() => isValidPassword(invalidPassword)).toThrow('Invalid password');
  });
  it('Should return true if password is valid', () => {
    const validPassword = '@hebert203040';

    expect(isValidPassword(validPassword)).toBe(true);
  });
});

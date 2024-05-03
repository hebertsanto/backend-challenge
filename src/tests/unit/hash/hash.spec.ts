import { expect, describe, it, beforeEach } from 'vitest';
import { BcryptAdapter } from '../../../adpaters/cryptography/bcrypt-adapter';
describe('Hash password', () => {
  let sut: BcryptAdapter;

  beforeEach(() => {
    sut = new BcryptAdapter(10);
  });

  it('Must return a password hash', async () => {
    const plaintext = 'password';
    const hash = await sut.hash(plaintext);

    expect(hash).not.toBeFalsy();
  });
});

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  if (!emailRegex.test(email)) {
    throw new Error('Email invalid');
  }
  return true;
};

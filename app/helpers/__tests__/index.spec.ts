import { isNonNullable } from 'helpers';

describe('isNonNullable', () => {
  it('should return true for empty string', () => {
    expect(isNonNullable('')).toBe(true);
  });

  it('should return true for false boolean', () => {
    expect(isNonNullable(false)).toBe(true);
  });
});

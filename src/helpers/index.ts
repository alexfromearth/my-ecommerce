type INullable = null | undefined;

export const isNonNullable = <T>(value: T): value is NonNullable<T> =>
  typeof value !== 'undefined' && value !== null;

export const isNullable = (value: unknown): value is INullable =>
  value === undefined || value === null;

export const isNonNullable = (val: any) =>
  typeof val !== 'undefined' && val !== null;

export const isNullable = (val: any) => val === undefined || val === null;

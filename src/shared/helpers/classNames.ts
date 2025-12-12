type ClassValue = string | number | boolean | undefined | null;
type ClassArray = readonly ClassValue[];
type ClassObject = Record<string, ClassValue>;

type ClassNames = ClassValue | ClassArray | ClassObject;

export const classNames = (...args: ClassNames[]): string => {
  const classes: string[] = [];

  for (const arg of args) {
    if (arg === null || arg === undefined || arg === false) continue;

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(arg.toString());
    } else if (Array.isArray(arg)) {
      classes.push(...classNames(...arg));
    } else if (typeof arg === 'object') {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          classes.push(key);
        }
      });
    }
  }

  return classes.filter(Boolean).join(' ');
};

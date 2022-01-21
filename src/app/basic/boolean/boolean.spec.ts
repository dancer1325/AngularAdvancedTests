import { returnABoolean } from './boolean';

describe('Pruebas de Booleanos', () => {
  it('It must return the boolean added in the input', () => {
    const input = true;

    const res = returnABoolean(input);

    expect(res).toBe(input);
    expect(res).toBeDefined();
  });

  it('It must return true, because it is the input', () => {
    const input = true;

    const res = returnABoolean(input);

    expect(res).toBeTruthy();
    expect(res).toBeTrue();
  });

  it('It must return false, because it is the input', () => {
    const input = false;

    const res = returnABoolean(input);

    expect(res).not.toBeTrue();
    expect(res).not.toBeTruthy();
    expect(res).toBeFalse();
    expect(res).toBeFalsy();
  });
});

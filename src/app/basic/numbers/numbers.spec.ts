import { incrementar } from './numbers';

describe('Pruebas de números', () => {
  it('Debe de retornar 100, si el número ingresado es mayor a 100', () => {
    const input = 300;

    const res = incrementar(input);

    expect(res).toBe(100);
    expect(res).toBeLessThan(input);
    expect(res).toBeCloseTo(100, 2);
    expect(res).not.toBe(input);
    expect(typeof res == 'number');
  });

  it('Debe de retornar el número ingresado + 1, si es menor a 100', () => {
    const res = incrementar(50);

    expect(res).toBe(51);
  });

  it('Debe de retornar el número ingresado + 1, si es igual a 100', () => {
    const res = incrementar(100);

    expect(res).toBe(101);
  });
});

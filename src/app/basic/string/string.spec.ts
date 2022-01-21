import { mensaje } from './string';

describe('Pruebas de strings', () => {
  // Name of the group
  it('Debe de regresar un string', () => {
    const resp = mensaje('Fernando');

    expect(typeof resp === 'string'); // Without using any method from expect
    expect(typeof resp).toBe('string');

    expect(resp).toBeInstanceOf(String);
    expect(resp).not.toBeInstanceOf(Number);
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Juan';
    const resp = mensaje(nombre);
    // Several expects can appear into each it
    expect(resp).toContain(nombre);
    expect(resp).toBe(`Saludos ${nombre}`); // Evaluating strings, normally it's not used strictly, just toBe
    expect(resp).toBeInstanceOf(String);
  });
});

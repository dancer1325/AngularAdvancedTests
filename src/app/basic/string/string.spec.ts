import { mensaje } from './string';

describe('Pruebas de strings', () => {
  // Name of the group
  it('Debe de regresar un string', () => {
    const resp = mensaje('Fernando');
    expect(typeof resp).toBe('string'); // Several expects can appear into each it
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Juan';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });
});

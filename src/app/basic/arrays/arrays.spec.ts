import { returnInputOfArrays, returnSpecificArray } from './arrays';

// Several describe can be added
describe('Check first array function', () => {
  it('It must return input added', () => {
    const inputToCheck = ['Carol'];
    const response = returnInputOfArrays(inputToCheck);

    expect(response).toBe(inputToCheck);
  });
});

describe('Check second array function', () => {
  it('It must return the specific array', () => {
    const response = returnSpecificArray();

    expect(response).toEqual(['Sara', 'Anna', 'Carol', 'Noelia']); // Deep quality comparision instead of toBe
    expect(response.length).toBe(4);
  });
});

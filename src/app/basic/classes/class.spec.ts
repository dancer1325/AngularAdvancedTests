import { Player } from './class';

describe('Check class', () => {
  let player: Player;

  // Launched before all the tests in this class
  // It's executed one time, when the ng test is launched --> In Hot Reload isn't relaunched
  beforeAll(() => {
    // player = new Player(); // In Hot Reload, it won't work since we are changing the value of player.hp and checking them in each test
  });

  // Launched before each test in this class
  beforeEach(() => {
    player = new Player();
  });

  it('Check initial value', () => {
    expect(player).toBeInstanceOf(Player);
    expect(player.hp).toEqual(100);
    expect(typeof player.receiveDamage).toBeDefined();
  });

  it('Check receiveDamage method -- Less than initial value', () => {
    const lessThanInitialValueInput = 80;

    const lessResponse = player.receiveDamage(lessThanInitialValueInput);

    expect(lessResponse).toEqual(20);
    expect(player.hp).toBe(20);
  });

  it('Check receiveDamage method -- Equal as initial value', () => {
    const equalAsInitialValueInput = 100;

    const equalResponse = player.receiveDamage(equalAsInitialValueInput);

    expect(equalResponse).toEqual(0);
    expect(player.hp).toBe(0);
  });

  it('Check receiveDamage method -- More than initial value', () => {
    const moreThanInitialValueInput = 110;

    const highResponse = player.receiveDamage(moreThanInitialValueInput);

    expect(highResponse).toEqual(0);
    expect(player.hp).toBe(0);
  });

  xit('Test to skip', () => {});

  // Launched after each test in this class
  afterEach(() => {});

  // Launched after all in this class
  // It's executed one time, when the ng test is launched --> In Hot Reload isn't relaunched
  afterAll(() => {
    console.log('All class tests done');
  });
});

xdescribe('Group of tests to skip', () => {});

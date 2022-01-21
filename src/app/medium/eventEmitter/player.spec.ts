import { SecondPlayer } from './player';

describe('Check EventEmitter tests', () => {
  let secondPlayer: SecondPlayer;
  beforeEach(() => {
    secondPlayer = new SecondPlayer();
  });

  it('Check initial value', () => {
    expect(secondPlayer.hp).toEqual(100);
  });

  it('Check an event is received with the corresponding value -- Less than initial value', () => {
    const lessThanInitialValueInput = 80;
    let hpSentInTheEvent = 0; // Initialize because if not, we get an error checking the value

    secondPlayer.hpEvent.subscribe((hpSent) => {
      // Suscribe to the event sent.
      hpSentInTheEvent = hpSent; //The first function's argument is the value sent in the event
    });

    secondPlayer.receiveDamage(lessThanInitialValueInput); // Invoking to the method --> It will launch the event

    expect(hpSentInTheEvent).toBe(20);
    expect(secondPlayer.hp).toBe(20);
  });

  it('Check an event is received with the corresponding value -- Equal as initial value', () => {
    const lessThanInitialValueInput = 100;
    let hpSentInTheEvent = 0; // Initialize because if not, we get an error checking the value

    secondPlayer.hpEvent.subscribe((hpSent) => {
      // Suscribe to the event sent.
      hpSentInTheEvent = hpSent; //The first function's argument is the value sent in the event
    });

    secondPlayer.receiveDamage(lessThanInitialValueInput); // Invoking to the method --> It will launch the event

    expect(hpSentInTheEvent).toBe(0);
    expect(secondPlayer.hp).toBe(0);
  });

  it('Check an event is received with the corresponding value -- Higher than initial value', () => {
    const lessThanInitialValueInput = 120;
    let hpSentInTheEvent = 0; // Initialize because if not, we get an error checking the value

    secondPlayer.hpEvent.subscribe((hpSent) => {
      // Suscribe to the event sent.
      hpSentInTheEvent = hpSent; //The first function's argument is the value sent in the event
    });

    secondPlayer.receiveDamage(lessThanInitialValueInput); // Invoking to the method --> It will launch the event

    expect(hpSentInTheEvent).toBe(0);
    expect(secondPlayer.hp).toBe(0);
  });
});

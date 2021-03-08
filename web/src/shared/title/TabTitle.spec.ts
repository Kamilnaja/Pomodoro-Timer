import { TabTitle } from './TabTitle';

describe('TabTitle', () => {
  let tab: TabTitle;
  beforeEach(() => {
    tab = new TabTitle();
  });

  it('should have blinking interval', () => {
    expect(tab.blinkingInterval).toEqual(0);
  });

  it('should return is blinking', () => {
    tab.setBlinking = true;

    expect(tab.isBlinking).toBe(true);
  });
});

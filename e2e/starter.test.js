describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the hello message', async () => {
    await expect(element(by.id('hello'))).toBeVisible();
  });

  it('should allow pressing a button', async () => {
    await element(by.id('mybutton')).tap();
    await expect(element(by.id('pressedMessage'))).toBeVisible();
  });

  it('should allow typing into a TextInput', async () => {
    await element(by.id('mytextinput')).typeText('I typed this');
  });
});

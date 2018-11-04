import { ThemePageModule } from './theme-page.module';

describe('ThemePageModule', () => {
  let themePageModule: ThemePageModule;

  beforeEach(() => {
    themePageModule = new ThemePageModule();
  });

  it('should create an instance', () => {
    expect(themePageModule).toBeTruthy();
  });
});

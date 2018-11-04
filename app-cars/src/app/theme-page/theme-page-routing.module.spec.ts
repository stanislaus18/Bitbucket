import { ThemePageRoutingModule } from './theme-page-routing.module';

describe('ThemePageRoutingModule', () => {
  let themePageRoutingModule: ThemePageRoutingModule;

  beforeEach(() => {
    themePageRoutingModule = new ThemePageRoutingModule();
  });

  it('should create an instance', () => {
    expect(themePageRoutingModule).toBeTruthy();
  });
});

import { AppCabsRoutingModule } from './app-cabs-routing.module';

describe('AppCabsRoutingModule', () => {
  let appCabsRoutingModule: AppCabsRoutingModule;

  beforeEach(() => {
    appCabsRoutingModule = new AppCabsRoutingModule();
  });

  it('should create an instance', () => {
    expect(appCabsRoutingModule).toBeTruthy();
  });
});

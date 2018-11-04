import { CabsModule } from './cabs.module';

describe('CabsModule', () => {
  let cabsModule: CabsModule;

  beforeEach(() => {
    cabsModule = new CabsModule();
  });

  it('should create an instance', () => {
    expect(cabsModule).toBeTruthy();
  });
});

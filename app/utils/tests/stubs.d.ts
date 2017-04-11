import Sinon from 'sinon';

export interface IStubedWindow {
  fetch: Sinon.SinonStub & typeof window.fetch;
}

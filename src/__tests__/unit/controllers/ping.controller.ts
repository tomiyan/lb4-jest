import {PingController} from '../../../controllers';

interface Greeting {
  greeting: string;
}

describe('ping controller', () => {
  describe('ping', () => {
    it('result object', () => {
      const controller = new PingController();
      const result = controller.ping();
      expect(result).toBeInstanceOf(Object);
      const data = result as Greeting;
      expect(data.greeting).toBe('Hello from LoopBack');
    });
  });
});

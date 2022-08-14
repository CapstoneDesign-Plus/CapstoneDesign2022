import Tcrypto from '@/../src/services/tcrypto';

test('test', () => {
  expect(Tcrypto.decipher('U2FsdGVkX197TqFsMYXjQNv6+chKSMDd6wjcjn3S6bE='))
  .toBe(8);
})
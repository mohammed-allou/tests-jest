import { sayHellow } from './main'
describe('main', function () {

    test('say hallow to all',  function () {
        expect(sayHellow()).toBe('salut')
       
    })
})
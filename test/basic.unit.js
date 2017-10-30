'use strict'

const sayHello = require('../src')

describe('sayHello', () => {
    it('returns hello', () => {
        expect(sayHello()).toBe('Hello, World!')
        expect(sayHello('foo')).toBe('Hello, foo!')
    })
})

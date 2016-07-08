import test = require('blue-tape')
import { has } from './index'

test('hasvalue', t => {
  t.equal(has({ a: { b: { c: 10 } } }, ['a', 'b', 'c']), true)
  t.equal(has({ nothere: true }, ['here']), false)
  t.equal(has('test', [3]), true)
  t.equal(has('test', [5]), false)
  t.equal(has([1, 2, 3], [1]), true)
  t.end()
})

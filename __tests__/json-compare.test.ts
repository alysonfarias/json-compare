import { compareJson } from '@/app/use-json-compare'

describe('JSON Compare Tests', () => {
  test('Object compare tests', () => {
    const obj1 = { a: 1, b: 2, c: 3 }
    const obj2 = { a: 1, b: 3, d: 4 }
    const result = compareJson(obj1, obj2)
    expect(result.changed).toContain('b')
    expect(result.removed).toContain('c')
    expect(result.added).toContain('d')
  })

  test('Array to object compare tests', () => {
    const arr = [1, 2, 3]
    const obj = { 0: 1, 1: 2, 2: 3 }
    const result = compareJson(arr, obj)
    expect(result.changed).toHaveLength(0)
    expect(result.removed).toHaveLength(0)
    expect(result.added).toHaveLength(0)
  })

  test('Array compare tests', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [1, 3, 4, 5]
    const result = compareJson(arr1, arr2)
    expect(result.changed).toContain('1')
    expect(result.removed).toContain('2')
    expect(result.added).toContain('3')
  })

  test('Object to array compare tests', () => {
    const obj = { 0: 1, 1: 2, 2: 3 }
    const arr = [1, 2, 3]
    const result = compareJson(obj, arr)
    expect(result.changed).toHaveLength(0)
    expect(result.removed).toHaveLength(0)
    expect(result.added).toHaveLength(0)
  })

  test('Whitespace formatting tests', () => {
    const obj1 = { a: 1, b: { c: 2 } }
    const obj2 = { a: 1, b: { c: 2, d: 3 } }
    const result = compareJson(obj1, obj2)
    expect(result.added).toContain('b.d')
  })

  test('Null array length tests', () => {
    const arr = [1, 2, 3]
    const nullObj = null
    const result1 = compareJson(arr, nullObj)
    const result2 = compareJson(nullObj, arr)
    expect(result1.removed).toEqual(['0', '1', '2'])
    expect(result2.added).toEqual(['0', '1', '2'])
  })

  test('Null object length tests', () => {
    const obj = { a: 1, b: 2 }
    const nullObj = null
    const result1 = compareJson(obj, nullObj)
    const result2 = compareJson(nullObj, obj)
    expect(result1.removed).toEqual(['a', 'b'])
    expect(result2.added).toEqual(['a', 'b'])
  })

  test('Escaped quotes test', () => {
    const obj1 = { a: 'Hello "world"' }
    const obj2 = { a: 'Hello "universe"' }
    const result = compareJson(obj1, obj2)
    expect(result.changed).toContain('a')
  })

  test('Slashes in keys test', () => {
    const obj1 = { 'a/b': 1 }
    const obj2 = { 'a/b': 2 }
    const result = compareJson(obj1, obj2)
    expect(result.changed).toContain('a/b')
  })

  test('Slashes in values test', () => {
    const obj1 = { a: 'http://example.com' }
    const obj2 = { a: 'https://example.com' }
    const result = compareJson(obj1, obj2)
    expect(result.changed).toContain('a')
  })

  test('Base64 test', () => {
    const obj1 = { a: btoa('Hello') }
    const obj2 = { a: btoa('World') }
    const result = compareJson(obj1, obj2)
    expect(result.changed).toContain('a')
  })
})

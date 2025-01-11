import { useState, useEffect } from 'react'

type ComparisonResult = {
  added: string[]
  removed: string[]
  changed: string[]
}

export function useJsonCompare(json1: any, json2: any) {
  const [comparisonResult, setComparisonResult] = useState<ComparisonResult>({
    added: [],
    removed: [],
    changed: [],
  })

  useEffect(() => {
    if (json1 && json2) {
      const result = compareJson(json1, json2)
      setComparisonResult(result)
    }
  }, [json1, json2])

  return comparisonResult
}

export function compareJson(obj1: any, obj2: any, path: string = ''): ComparisonResult {
  const result: ComparisonResult = {
    added: [],
    removed: [],
    changed: [],
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  for (const key of keys1) {
    const currentPath = path ? `${path}.${key}` : key

    if (!(key in obj2)) {
      result.removed.push(currentPath)
    } else if (typeof obj1[key] !== typeof obj2[key]) {
      result.changed.push(currentPath)
    } else if (typeof obj1[key] === 'object' && obj1[key] !== null) {
      const nestedResult = compareJson(obj1[key], obj2[key], currentPath)
      result.added.push(...nestedResult.added)
      result.removed.push(...nestedResult.removed)
      result.changed.push(...nestedResult.changed)
    } else if (obj1[key] !== obj2[key]) {
      result.changed.push(currentPath)
    }
  }

  for (const key of keys2) {
    const currentPath = path ? `${path}.${key}` : key

    if (!(key in obj1)) {
      result.added.push(currentPath)
    }
  }

  return result
}


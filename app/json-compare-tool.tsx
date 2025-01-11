'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useJsonCompare } from './use-json-compare'
import { AdSense } from '../components/adsense' // Added import

const ReactJson = dynamic(() => import('react-json-view'), { ssr: false })

export function JsonCompareTool() {
  const [json1, setJson1] = useState('')
  const [json2, setJson2] = useState('')
  const [parsedJson1, setParsedJson1] = useState<any>(null)
  const [parsedJson2, setParsedJson2] = useState<any>(null)
  const [error, setError] = useState('')

  const comparisonResult = useJsonCompare(parsedJson1, parsedJson2)

  const parseAndCompare = () => {
    try {
      const parsed1 = JSON.parse(json1)
      const parsed2 = JSON.parse(json2)
      setParsedJson1(parsed1)
      setParsedJson2(parsed2)
      setError('')
    } catch (e) {
      setError('Invalid JSON input. Please check your JSON and try again.')
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">JSON 1</h2>
          <Textarea
            value={json1}
            onChange={(e) => setJson1(e.target.value)}
            placeholder="Paste your first JSON here"
            className="h-64"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">JSON 2</h2>
          <Textarea
            value={json2}
            onChange={(e) => setJson2(e.target.value)}
            placeholder="Paste your second JSON here"
            className="h-64"
          />
        </div>
      </div>
      <div className="mt-4">
        <Button onClick={parseAndCompare}>Compare JSON</Button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {parsedJson1 && parsedJson2 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Parsed JSON 1</h2>
            <ReactJson src={parsedJson1} theme="monokai" />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Parsed JSON 2</h2>
            <ReactJson src={parsedJson2} theme="monokai" />
          </div>
        </div>
      )}
      {comparisonResult && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Comparison Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-green-500">Added</h3>
              <ul className="list-disc list-inside">
                {comparisonResult.added.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-500">Removed</h3>
              <ul className="list-disc list-inside">
                {comparisonResult.removed.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-500">Changed</h3>
              <ul className="list-disc list-inside">
                {comparisonResult.changed.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {parsedJson1 && parsedJson2 && ( // Added AdSense placement
        <div className="mt-8">
          <AdSense adClient="ca-pub-1137048753085508" adSlot="2468013579" />
        </div>
      )}
    </div>
  )
}


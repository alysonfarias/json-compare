import { JsonCompareTool } from './json-compare-tool'
import { StructuredData } from './structured-data'
import { AdSense } from '../components/adsense'

export default function JsonComparePage() {
  const adClient = 'ca-pub-XXXXXXXXXXXXXXXX' // Replace with your AdSense publisher ID

  return (
    <>
      <StructuredData />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">JSON Compare Tool</h1>
        <p className="text-lg mb-8">
          Welcome to our free online JSON comparison tool. Easily compare two JSON objects side by side, 
          identify differences, additions, and removals in your JSON data. Perfect for developers, 
          data analysts, and anyone working with JSON files.
        </p>
        
        {/* Ad placement before the tool */}
        <div className="my-8">
          <AdSense adClient={adClient} adSlot="1234567890" />
        </div>

        <JsonCompareTool />

        {/* Ad placement after the tool */}
        <div className="my-8">
          <AdSense adClient={adClient} adSlot="0987654321" />
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">How to Use Our JSON Compare Tool</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Paste your first JSON object into the "JSON 1" text area.</li>
            <li>Paste your second JSON object into the "JSON 2" text area.</li>
            <li>Click the "Compare JSON" button to see the results.</li>
            <li>Review the parsed JSON objects and the comparison results below.</li>
          </ol>
        </section>

        {/* Ad placement between sections */}
        <div className="my-8">
          <AdSense adClient={adClient} adSlot="1357924680" />
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Why Use Our JSON Compare Tool?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Easy to use: No installation required, just paste and compare.</li>
            <li>Visual comparison: See differences highlighted in an easy-to-read format.</li>
            <li>Detailed results: Identify added, removed, and changed properties.</li>
            <li>Free and accessible: Use our tool anytime, anywhere, at no cost.</li>
          </ul>
        </section>
      </div>
    </>
  )
}


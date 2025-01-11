export function StructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "JSON Compare Tool",
      "description": "Compare JSON objects side by side with our free online JSON comparison tool. Easily spot differences, additions, and removals in your JSON data.",
      "url": "https://yourwebsite.com/json-compare",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Compare two JSON objects",
        "Highlight differences",
        "Show added, removed, and changed properties",
        "Free to use"
      ]
    }
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    )
  }
  
  
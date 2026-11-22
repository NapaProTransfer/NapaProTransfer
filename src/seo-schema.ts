export const SEO_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TaxiService",
      "@id": "https://napaprotransfer.com/#business",
      name: "NapaProTransfer",
      url: "https://napaprotransfer.com",
      telephone: "+35799963259",
      email: "costastaxiservice@gmail.com",
      priceRange: "€63 - €130",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card",
      image: "https://napaprotransfer.com/fleet/seaside.jpg",
      description:
        "Private taxi and pre-booked 24/7 airport transfer service in Ayia Napa and Protaras, Cyprus. Transfers to and from Larnaca Airport (LCA) and Paphos Airport (PFO) with Standard, Big taxi, and Mercedes V-Class options.",
      areaServed: [
        { "@type": "City", name: "Ayia Napa" },
        { "@type": "City", name: "Protaras" },
        { "@type": "Airport", name: "Larnaca International Airport", iataCode: "LCA" },
        { "@type": "Airport", name: "Paphos International Airport", iataCode: "PFO" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ayia Napa",
        addressRegion: "Famagusta District",
        addressCountry: "CY",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
          description: "24/7 operation for pre-booked transfers",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "09:00",
          closes: "11:30",
          description: "Direct phone booking hours (WhatsApp available 24/7)",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Private Transfer Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Standard Private Taxi Transfer",
              description: "Reliable private transfer to/from Larnaca Airport, Ayia Napa, and Protaras.",
            },
            priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", minPrice: "63", maxPrice: "75" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Big Taxi Transfer",
              description: "Larger private taxi for more passengers and luggage.",
            },
            priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", minPrice: "80", maxPrice: "100" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mercedes V-Class Minivan Transfer",
              description: "Spacious luxury minivan transfer for families and groups.",
            },
            priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR", minPrice: "90", maxPrice: "130" },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://napaprotransfer.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a private taxi from Larnaca Airport to Ayia Napa or Protaras cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With NapaProTransfer, pre-booked private transfers are €63–€75 for a Standard taxi, €80–€100 for a Big taxi, and €90–€130 for a Mercedes V-Class.",
          },
        },
        {
          "@type": "Question",
          name: "How can I book a transfer with NapaProTransfer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can book directly via WhatsApp or phone at +357 99963259, or via email at costastaxiservice@gmail.com. Pre-booked transfers operate 24/7.",
          },
        },
        {
          "@type": "Question",
          name: "What payment methods are accepted?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NapaProTransfer accepts both cash and card payments.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer transfers to Paphos Airport and long-distance destinations in Cyprus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, NapaProTransfer specializes in pre-booked private transfers between Ayia Napa, Protaras, Larnaca Airport (LCA), Paphos Airport (PFO), and long-distance intercity routes across Cyprus.",
          },
        },
      ],
    },
  ],
}).replace(/</g, "\\u003c");

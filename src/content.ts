export type Lang = "en" | "el";

export const PHONE_TEL = "+35799963259";
export const PHONE_DISPLAY = "+357 99 963259";
export const WA_BASE = "https://wa.me/35799963259";
export const GOOGLE_REVIEW = "https://g.page/r/CSYUf1-xEIGiEBE/review";

export type Copy = {
  metaTitle: string;
  metaDesc: string;
  navFleet: string;
  navServices: string;
  navWhy: string;
  navRoutes: string;
  navBook: string;
  navCall: string;
  skip: string;
  menu: string;
  close: string;
  kicker: string;
  heroTitle: string;
  heroLead: string;
  ctaQuote: string;
  ctaWa: string;
  heroNote: string;
  servicesKicker: string;
  servicesTitle: string;
  servicesLead: string;
  services: { title: string; body: string }[];
  whyKicker: string;
  whyTitle: string;
  whyPoints: string[];
  whyClose: string;
  fleetKicker: string;
  fleetTitle: string;
  fleetLead: string;
  enlarge: string;
  carsTitle: string;
  cars: { model: string; body: string }[];
  childTitle: string;
  childBody: string;
  bagTitle: string;
  bagBody: string;
  routesKicker: string;
  routesTitle: string;
  routesLead: string;
  priceNotes: string[];
  useRoute: string;
  bookKicker: string;
  bookTitle: string;
  bookLead: string;
  bookPay: string;
  bookArea: string;
  name: string;
  phone: string;
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: string;
  vehicle: string;
  vehicles: string[];
  luggage: string;
  childSeat: string;
  flight: string;
  notes: string;
  send: string;
  sending: string;
  fine: string;
  waFallback: string;
  errName: string;
  errPhone: string;
  errFrom: string;
  errTo: string;
  errDate: string;
  officialKicker: string;
  officialTitle: string;
  officialLead: string;
  checks: { title: string; body: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  footer: string;
  platesNote: string;
  reviewsTitle: string;
  reviewsLead: string;
  reviewsCta: string;
  waYes: string;
  waNo: string;
  quoteHead: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    metaTitle: "Taxi Ayia Napa & Protaras Transfers | Larnaca Airport",
    metaDesc:
      "Private airport transfers in Cyprus. Taxi Ayia Napa and Protaras transfers, including Larnaca Airport to Ayia Napa. Mercedes fleet. Book on WhatsApp.",
    navFleet: "Fleet",
    navServices: "Services",
    navWhy: "Why us",
    navRoutes: "Routes",
    navBook: "Book",
    navCall: "Call",
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    kicker: "Ayia Napa • Protaras • Cyprus",
    heroTitle: "Private transfers with new vehicles & professional drivers",
    heroLead:
      "Reliable airport and intercity transfers. Clean, late-model vehicles. Experienced professional drivers. Fixed prices – no surprises, no haggling.",
    ctaQuote: "Check availability & price",
    ctaWa: "WhatsApp Booking",
    heroNote: "",
    servicesKicker: "What we do",
    servicesTitle: "Professional transfers for every journey",
    servicesLead:
      "From airport pickups to private trips across Cyprus, we provide a reliable and comfortable service with new vehicles and professional drivers.",
    services: [
      {
        title: "Airport Transfers",
        body: "Direct private transfers from Larnaca & Paphos airports to Ayia Napa, Protaras and beyond.",
      },
      {
        title: "Long Distance",
        body: "Comfortable private transfers between cities and destinations anywhere in Cyprus from Ayia Napa and Protaras.",
      },
      {
        title: "Marina & Coastal",
        body: "Transfers to marinas, resorts, beaches and coastal destinations.",
      },
    ],
    whyKicker: "Why choose us",
    whyTitle: "Why choose NapaPro Transfers",
    whyPoints: [
      "Late-model clean vehicles (including Mercedes)",
      "Professional and experienced drivers",
      "Fixed prices – no haggling",
      "Flight monitoring included",
      "Meet & greet service",
      "Child seats available on request",
    ],
    whyClose: "We are not the cheapest option. We are the reliable one.",
    fleetKicker: "The cars",
    fleetTitle: "The fleet you actually get.",
    fleetLead:
      "Our own Mercedes, photographed on the job in Ayia Napa and Protaras. Two E-Class sedans and two V-Class vans.",
    enlarge: "Enlarge photo",
    carsTitle: "Who sits where",
    cars: [
      {
        model: "Mercedes-Benz E-Class",
        body: "Private sedan. Up to 3 guests, leather, quiet for airport and hotel runs.",
      },
      {
        model: "Mercedes-Benz E-Class",
        body: "Second sedan when you want the same comfort for another pickup.",
      },
      {
        model: "Mercedes-Benz V-Class",
        body: "White van. Families, extra luggage, group transfers.",
      },
      {
        model: "Mercedes-Benz V-Class",
        body: "Black van. Same space, for evenings and hotel arrivals.",
      },
    ],
    childTitle: "Child seats on request.",
    childBody:
      "Tell us the ages when you book. We fit a proper seat before we collect you.",
    bagTitle: "The van takes the whole set.",
    bagBody:
      "Resort weeks mean more than two cabin bags. The V-Class boot is why groups stop squeezing into a sedan.",
    routesKicker: "Popular routes",
    routesTitle: "Popular routes – fixed prices",
    routesLead: "Need another destination? Send the pickup and drop-off. We cover Cyprus both ways.",
    priceNotes: [
      "Final price is confirmed based on exact pickup location, number of passengers and luggage.",
      "All prices are fixed and non-negotiable.",
      "The price is based on official taxi rates and is fixed once confirmed.",
    ],
    useRoute: "Use this route",
    bookKicker: "Booking",
    bookTitle: "Check availability & price",
    bookLead:
      "Send us your trip details on WhatsApp. We will confirm availability and the exact fixed price.",
    bookPay: "Payment: Card & Cash",
    bookArea: "Service area: Ayia Napa & Protaras to anywhere in Cyprus",
    name: "Name",
    phone: "Your phone",
    from: "Pickup",
    to: "Drop-off",
    date: "Date",
    time: "Time",
    passengers: "Passengers",
    vehicle: "Vehicle",
    vehicles: ["Sedan", "Van"],
    luggage: "Luggage",
    childSeat: "Child seat",
    flight: "Flight number",
    notes: "Notes",
    send: "Send Booking via WhatsApp",
    sending: "Opening WhatsApp…",
    fine: "No online payment is taken on this website. Your booking is confirmed directly with us after price confirmation.",
    waFallback: "If WhatsApp did not open, tap here.",
    errName: "Add your name.",
    errPhone: "Add a phone number.",
    errFrom: "Where from?",
    errTo: "Where to?",
    errDate: "Pick a date.",
    officialKicker: "Licensed",
    officialTitle: "A real taxi. Not a private car.",
    officialLead:
      "In Cyprus an official taxi has a TAXI sign on the roof and yellow plates. Private cars are not allowed to work as taxis.",
    checks: [
      {
        title: "Roof sign",
        body: "Look for TAXI on the roof before you get in.",
      },
      {
        title: "Yellow plates",
        body: "Official taxis use yellow license plates and a roof sign.",
      },
      {
        title: "Licensed ride",
        body: "Ask the hotel desk for a taxi, not a private car. You are insured as a passenger.",
      },
    ],
    faqTitle: "Before you write",
    faqs: [
      {
        q: "How do I book?",
        a: "Send the quote form, or WhatsApp +357 99 963259 with pickup, drop-off, date and how many of you. We confirm the fare in the chat.",
      },
      {
        q: "Do you cover night flights?",
        a: "Yes. Flight monitoring is included. Put the flight number in the form and we adjust the pickup if the plane is early or late.",
      },
      {
        q: "Can I pay by card?",
        a: "Yes. Pay the driver in cash or by card. Nothing is charged on this website.",
      },
      {
        q: "Ayia Napa or Protaras only?",
        a: "We are based here, and we also collect from Larnaca, Paphos and the rest of Cyprus back to the resort.",
      },
    ],
    footer: "Premium taxi & transfers · Ayia Napa & Protaras, Cyprus",
    platesNote: "Cars shown are our fleet.",
    reviewsTitle: "Google reviews",
    reviewsLead: "See what passengers wrote, or leave your own after the ride.",
    reviewsCta: "Read & review on Google",
    waYes: "Yes",
    waNo: "No",
    quoteHead: "NapaProTransfer quote",
  },
  el: {
    metaTitle: "NapaProTransfer — Επίσημο ταξί, Αγία Νάπα & Πρωταράς",
    metaDesc:
      "Επίσημα ταξί Mercedes σε Αγία Νάπα και Πρωταρά. Αεροδρόμιο, ομάδες και μεγάλες διαδρομές σε όλη την Κύπρο. Κάλεσε ή WhatsApp +357 99963259.",
    navFleet: "Στόλος",
    navServices: "Υπηρεσίες",
    navWhy: "Γιατί εμάς",
    navRoutes: "Διαδρομές",
    navBook: "Κράτηση",
    navCall: "Κλήση",
    skip: "Μετάβαση στο περιεχόμενο",
    menu: "Μενού",
    close: "Κλείσιμο",
    kicker: "Αγία Νάπα • Πρωταράς • Κύπρος",
    heroTitle: "Ιδιωτικές μεταφορές με καινούργια αυτοκίνητα και επαγγελματίες οδηγούς",
    heroLead:
      "Αξιόπιστες μεταφορές αεροδρομίου και μεταξύ πόλεων. Καθαρά, καινούργια αυτοκίνητα. Έμπειροι επαγγελματίες οδηγοί. Σταθερές τιμές — χωρίς εκπλήξεις, χωρίς παζάρι.",
    ctaQuote: "Διαθεσιμότητα & τιμή",
    ctaWa: "Κράτηση στο WhatsApp",
    heroNote: "",
    servicesKicker: "Τι κάνουμε",
    servicesTitle: "Επαγγελματικές μεταφορές για κάθε διαδρομή",
    servicesLead:
      "Από το αεροδρόμιο μέχρι ιδιωτικά ταξίδια σε όλη την Κύπρο, με αξιόπιστη και άνετη εξυπηρέτηση, καινούργια αυτοκίνητα και επαγγελματίες οδηγούς.",
    services: [
      {
        title: "Αεροδρόμιο",
        body: "Απευθείας ιδιωτικές μεταφορές από Λάρνακα και Πάφο προς Αγία Νάπα, Πρωταρά και παραπέρα.",
      },
      {
        title: "Μεγάλες αποστάσεις",
        body: "Άνετες ιδιωτικές μεταφορές ανάμεσα σε πόλεις και προορισμούς σε όλη την Κύπρο, από Αγία Νάπα και Πρωταρά.",
      },
      {
        title: "Μαρίνα & παραλία",
        body: "Μεταφορές σε μαρίνες, θέρετρα, παραλίες και παράκτιους προορισμούς.",
      },
    ],
    whyKicker: "Γιατί εμάς",
    whyTitle: "Γιατί NapaPro Transfers",
    whyPoints: [
      "Καθαρά, καινούργια αυτοκίνητα (και Mercedes)",
      "Επαγγελματίες και έμπειροι οδηγοί",
      "Σταθερές τιμές — χωρίς παζάρι",
      "Παρακολούθηση πτήσης",
      "Meet & greet",
      "Παιδικό κάθισμα κατόπιν αιτήματος",
    ],
    whyClose: "Δεν είμαστε η φθηνότερη επιλογή. Είμαστε η αξιόπιστη.",
    fleetKicker: "Τα αυτοκίνητα",
    fleetTitle: "Ο στόλος που θα δεις.",
    fleetLead:
      "Οι δικές μας Mercedes, φωτογραφημένες στη δουλειά σε Αγία Νάπα και Πρωταρά. Δύο E-Class και δύο V-Class.",
    enlarge: "Μεγέθυνση",
    carsTitle: "Ποιος χωράει πού",
    cars: [
      {
        model: "Mercedes-Benz E-Class",
        body: "Sedan. Έως 3 επιβάτες, για αεροδρόμιο και ξενοδοχείο.",
      },
      {
        model: "Mercedes-Benz E-Class",
        body: "Δεύτερο sedan, ίδια άνεση για δεύτερη παραλαβή.",
      },
      {
        model: "Mercedes-Benz V-Class",
        body: "Λευκό van. Οικογένειες, πολλές αποσκευές, ομάδες.",
      },
      {
        model: "Mercedes-Benz V-Class",
        body: "Μαύρο van. Ο ίδιος χώρος, για βράδυ και αφίξεις σε ξενοδοχείο.",
      },
    ],
    childTitle: "Παιδικό κάθισμα, αν το ζητήσεις.",
    childBody:
      "Γράψε τις ηλικίες στην κράτηση. Το κάθισμα μπαίνει πριν την παραλαβή.",
    bagTitle: "Το van χωράει όλο το σετ.",
    bagBody:
      "Η βδομάδα στο θέρετρο δεν είναι δύο χειραποσκευές. Γι’ αυτό οι παρέες σταματούν να στριμώχνονται σε sedan.",
    routesKicker: "Συχνές διαδρομές",
    routesTitle: "Συχνές διαδρομές — σταθερές τιμές",
    routesLead: "Άλλος προορισμός; Στείλε παραλαβή και προορισμό. Καλύπτουμε την Κύπρο και προς τις δύο κατευθύνσεις.",
    priceNotes: [
      "Η τελική τιμή επιβεβαιώνεται ανάλογα με το ακριβές σημείο παραλαβής, τους επιβάτες και τις αποσκευές.",
      "Όλες οι τιμές είναι σταθερές και δεν παζαρεύονται.",
      "Η τιμή βασίζεται στις επίσημες τιμές ταξί και κλειδώνει μόλις επιβεβαιωθεί.",
    ],
    useRoute: "Αυτή η διαδρομή",
    bookKicker: "Κράτηση",
    bookTitle: "Διαθεσιμότητα & τιμή",
    bookLead:
      "Στείλε τα στοιχεία της διαδρομής στο WhatsApp. Επιβεβαιώνουμε διαθεσιμότητα και την ακριβή σταθερή τιμή.",
    bookPay: "Πληρωμή: κάρτα & μετρητά",
    bookArea: "Περιοχή: από Αγία Νάπα & Πρωταρά οπουδήποτε στην Κύπρο",
    name: "Όνομα",
    phone: "Τηλέφωνό σου",
    from: "Παραλαβή",
    to: "Προορισμός",
    date: "Ημερομηνία",
    time: "Ώρα",
    passengers: "Επιβάτες",
    vehicle: "Όχημα",
    vehicles: ["Sedan", "Van"],
    luggage: "Αποσκευές",
    childSeat: "Παιδικό κάθισμα",
    flight: "Αριθμός πτήσης",
    notes: "Σημειώσεις",
    send: "Αποστολή κράτησης στο WhatsApp",
    sending: "Άνοιγμα WhatsApp…",
    fine: "Δεν γίνεται online πληρωμή σε αυτή τη σελίδα. Η κράτηση επιβεβαιώνεται απευθείας μαζί μας, αφού κλείσει η τιμή.",
    waFallback: "Αν δεν άνοιξε το WhatsApp, πάτα εδώ.",
    errName: "Γράψε το όνομά σου.",
    errPhone: "Γράψε τηλέφωνο.",
    errFrom: "Από πού;",
    errTo: "Προς τα πού;",
    errDate: "Διάλεξε ημερομηνία.",
    officialKicker: "Άδεια",
    officialTitle: "Πραγματικό ταξί. Όχι ιδιωτικό αυτοκίνητο.",
    officialLead:
      "Στην Κύπρο το επίσημο ταξί έχει ταμπέλα TAXI στην οροφή και κίτρινες πινακίδες. Τα ιδιωτικά αυτοκίνητα δεν επιτρέπεται να κάνουν ταξί.",
    checks: [
      {
        title: "Ταμπέλα οροφής",
        body: "Ψάξε το TAXI στην οροφή πριν μπεις.",
      },
      {
        title: "Κίτρινες πινακίδες",
        body: "Τα επίσημα ταξί έχουν κίτρινες πινακίδες και ταμπέλα στην οροφή.",
      },
      {
        title: "Νόμιμη διαδρομή",
        body: "Ζήτα από τη ρεσεψιόν ταξί, όχι ιδιωτικό. Είσαι ασφαλισμένος ως επιβάτης.",
      },
    ],
    faqTitle: "Πριν γράψεις",
    faqs: [
      {
        q: "Πώς κλείνω;",
        a: "Στείλε τη φόρμα ή μήνυμα στο +357 99 963259 με παραλαβή, προορισμό, ημερομηνία και άτομα. Επιβεβαιώνουμε την τιμή στη συνομιλία.",
      },
      {
        q: "Κάνετε νυχτερινές πτήσεις;",
        a: "Ναι. Η παρακολούθηση πτήσης περιλαμβάνεται. Βάλε τον αριθμό πτήσης και προσαρμόζουμε την παραλαβή αν το αεροπλάνο έρθει νωρίτερα ή αργότερα.",
      },
      {
        q: "Πληρώνω με κάρτα;",
        a: "Ναι. Πληρώνεις τον οδηγό με μετρητά ή κάρτα. Η ιστοσελίδα δεν χρεώνει.",
      },
      {
        q: "Μόνο Αγία Νάπα και Πρωταράς;",
        a: "Εδώ είμαστε βάση, και μαζεύουμε και από Λάρνακα, Πάφο και την υπόλοιπη Κύπρο πίσω στο θέρετρο.",
      },
    ],
    footer: "Premium ταξί & μεταφορές · Αγία Νάπα & Πρωταράς, Κύπρος",
    platesNote: "Τα αυτοκίνητα στις φωτογραφίες είναι ο στόλος μας.",
    reviewsTitle: "Κριτικές Google",
    reviewsLead: "Δες τι έγραψαν οι επιβάτες, ή άφησε τη δική σου μετά τη διαδρομή.",
    reviewsCta: "Διάβασε & γράψε στο Google",
    waYes: "Ναι",
    waNo: "Όχι",
    quoteHead: "Προσφορά NapaProTransfer",
  },
};

export const shots: {
  src: string;
  alt: Record<Lang, string>;
  caption: Record<Lang, string>;
  span: string;
  frame: string;
}[] = [
  {
    src: "/fleet/lineup.jpg",
    alt: {
      en: "Three white Mercedes taxis lined up at a hotel entrance in Ayia Napa",
      el: "Τρία λευκά Mercedes ταξί στην είσοδο ξενοδοχείου",
    },
    caption: {
      en: "Hotel entrance — sedan, van, sedan",
      el: "Είσοδος ξενοδοχείου — sedan, van, sedan",
    },
    span: "md:col-span-8",
    frame: "aspect-video",
  },
  {
    src: "/fleet/black-van.jpg",
    alt: {
      en: "Black Mercedes V-Class taxi under a hotel canopy",
      el: "Μαύρο Mercedes V-Class ταξί κάτω από στέγαστρο",
    },
    caption: { en: "Black V-Class", el: "Μαύρο V-Class" },
    span: "md:col-span-4",
    frame: "frame-portrait",
  },
  {
    src: "/fleet/hero-sedan.jpg",
    alt: {
      en: "White Mercedes E-Class taxi parked by the sea",
      el: "Λευκό Mercedes E-Class ταξί δίπλα στη θάλασσα",
    },
    caption: { en: "E-Class by the sea", el: "E-Class στη θάλασσα" },
    span: "md:col-span-4",
    frame: "frame-portrait",
  },
  {
    src: "/fleet/hotel-sedan.jpg",
    alt: {
      en: "White Mercedes E-Class taxi waiting at a hotel porte-cochère at dusk",
      el: "Λευκό Mercedes E-Class στο πόρτε κοσέρ ξενοδοχείου το σούρουπο",
    },
    caption: { en: "Dusk pickup", el: "Παραλαβή το σούρουπο" },
    span: "md:col-span-8",
    frame: "aspect-video",
  },
  {
    src: "/fleet/seaside.jpg",
    alt: {
      en: "Two white Mercedes taxis parked above the sea",
      el: "Δύο λευκά Mercedes ταξί πάνω από τη θάλασσα",
    },
    caption: { en: "Two E-Class sedans", el: "Δύο E-Class" },
    span: "md:col-span-7",
    frame: "aspect-video",
  },
  {
    src: "/fleet/havana.jpg",
    alt: {
      en: "White Mercedes E-Class taxi on a stone promenade",
      el: "Λευκό Mercedes E-Class σε πλακόστρωτο",
    },
    caption: { en: "Ayia Napa promenade", el: "Παραλία Αγίας Νάπας" },
    span: "md:col-span-5",
    frame: "frame-portrait",
  },
  {
    src: "/fleet/vans-night.jpg",
    alt: {
      en: "White and black Mercedes V-Class taxis at night",
      el: "Λευκό και μαύρο Mercedes V-Class τη νύχτα",
    },
    caption: { en: "The two vans", el: "Τα δύο van" },
    span: "md:col-span-6",
    frame: "frame-portrait",
  },
  {
    src: "/fleet/canopy.jpg",
    alt: {
      en: "White Mercedes sedans and a V-Class van parked under the trees",
      el: "Λευκά Mercedes sedan και V-Class κάτω από τα δέντρα",
    },
    caption: { en: "Ready at the canopy", el: "Έτοιμα στο στέγαστρο" },
    span: "md:col-span-6",
    frame: "aspect-video",
  },
];

export const routes: { from: Record<Lang, string>; to: Record<Lang, string> }[] = [
  {
    from: { en: "Larnaca Airport", el: "Αεροδρόμιο Λάρνακας" },
    to: { en: "Ayia Napa", el: "Αγία Νάπα" },
  },
  {
    from: { en: "Larnaca Airport", el: "Αεροδρόμιο Λάρνακας" },
    to: { en: "Protaras", el: "Πρωταράς" },
  },
  {
    from: { en: "Paphos Airport", el: "Αεροδρόμιο Πάφου" },
    to: { en: "Ayia Napa", el: "Αγία Νάπα" },
  },
  {
    from: { en: "Ayia Napa", el: "Αγία Νάπα" },
    to: { en: "Larnaca Airport", el: "Αεροδρόμιο Λάρνακας" },
  },
  {
    from: { en: "Protaras", el: "Πρωταράς" },
    to: { en: "Larnaca Airport", el: "Αεροδρόμιο Λάρνακας" },
  },
  {
    from: { en: "Ayia Napa", el: "Αγία Νάπα" },
    to: { en: "Protaras", el: "Πρωταράς" },
  },
  {
    from: { en: "Ayia Napa", el: "Αγία Νάπα" },
    to: { en: "Nicosia", el: "Λευκωσία" },
  },
  {
    from: { en: "Ayia Napa", el: "Αγία Νάπα" },
    to: { en: "Limassol", el: "Λεμεσός" },
  },
  {
    from: { en: "Ayia Napa", el: "Αγία Νάπα" },
    to: { en: "Paphos", el: "Πάφος" },
  },
  {
    from: { en: "Paralimni", el: "Παραλίμνι" },
    to: { en: "Larnaca Airport", el: "Αεροδρόμιο Λάρνακας" },
  },
];

import { useEffect, useState } from "react";
import {
  ArrowLeftRight,
  Baby,
  Calendar,
  Car,
  CreditCard,
  Gem,
  MapPin,
  MessageCircle,
  Minus,
  Plane,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { GOOGLE_REVIEW, PHONE_DISPLAY, PHONE_TEL, WA_BASE } from "@/content";
import { getGoogleRating, type GoogleRating } from "@/lib/google-rating";

const LANG_KEY = "npt-lang";

type Lang = "en" | "el" | "pl" | "fr" | "he" | "de";

const LANGS: { id: Lang; label: string }[] = [
  { id: "en", label: "English" },
  { id: "el", label: "Ελληνικά" },
  { id: "pl", label: "Polski" },
  { id: "fr", label: "Français" },
  { id: "he", label: "עברית" },
  { id: "de", label: "Deutsch" },
];

const photos = [
  "/fleet/hero-sedan.jpg",
  "/fleet/hotel-sedan.jpg",
  "/fleet/lineup.jpg",
  "/fleet/vans-night.jpg",
  "/fleet/seaside.jpg",
  "/fleet/black-van.jpg",
  "/fleet/luggage.jpg",
  "/fleet/child-seat.jpg",
];

const whyIcons = [ShieldCheck, Sparkles, Car, Gem, Plane] as const;

const spots: Record<Lang, string[]> = {
  en: ["Larnaca Airport", "Paphos Airport", "Ayia Napa", "Protaras", "Nicosia"],
  el: ["Αεροδρόμιο Λάρνακας", "Αεροδρόμιο Πάφου", "Αγία Νάπα", "Πρωταράς", "Λευκωσία"],
  pl: ["Lotnisko Larnaka", "Lotnisko Pafos", "Ayia Napa", "Protaras", "Nikozja"],
  fr: ["Aéroport de Larnaca", "Aéroport de Paphos", "Ayia Napa", "Protaras", "Nicosie"],
  he: ["נמל התעופה לרנקה", "נמל התעופה פאפוס", "איה נאפה", "פרוטארס", "ניקוסיה"],
  de: ["Flughafen Larnaca", "Flughafen Paphos", "Ayia Napa", "Protaras", "Nikosia"],
};

const ui = {
  en: {
    skip: "Skip to content",
    region: "Famagusta Region & Cyprus 24/7",
    pill: "Famagusta Region  |  24/7 Service",
    titleA: "Premium Transfers in",
    titleB: "Ayia Napa, Protaras & Airports",
    lead: "Taxi Ayia Napa and Protaras transfers with a luxury Mercedes fleet. Private airport transfers in Cyprus, including Larnaca Airport to Ayia Napa.",
    routes: "Taxi Ayia Napa · Protaras transfers · Larnaca Airport to Ayia Napa · Private airport transfers Cyprus",
    chipSeat: "Free child seats",
    chipFlight: "Flight monitoring",
    chipPay: "Card or cash",
    book: "Book via WhatsApp",
    review: "Review us",
    calcKicker: "Check availability & price",
    pickup: "Pickup location",
    drop: "Destination",
    pickupPh: "Hotel, airport or address",
    dropPh: "Where you want to go",
    vehicle: "Vehicle",
    pax: "Passengers",
    bags: "Luggage",
    flight: "Check flight",
    flightPh: "Flight number, if you have one",
    seats: "Baby seats",
    priceAsk: "The fixed price is confirmed on WhatsApp.",
    popular: "Popular places",
    trip: "Your trip",
    when: "Date",
    timeLabel: "Time",
    pay: "Payment",
    cash: "Cash",
    card: "Card",
    swap: "Swap pickup and destination",
    name: "Name",
    namePh: "Your name",
    schedule: "Check availability & price",
    bookBig: "Book on WhatsApp",
    fleetKicker: "Our fleet",
    fleetTitle: "Mercedes fleet",
    vehicles: { standard: "Standard taxi", comfort: "Comfort", big: "Big taxi", minivan: "Minivan" },
    whyTitle: "Why us",
    why: ["Reliable company", "New vehicles", "Mercedes fleet", "Premium transfer", "Flight monitoring"],
    galleryKicker: "Gallery",
    galleryTitle: "Photos",
    photo: "Fleet photo",
    videoTitle: "See the fleet",
    videoLead: "Mercedes taxis, luggage space and child seats.",
    legalKicker: "Official taxi",
    legalTitle: "Travel safe, travel legal",
    legalBody: "We are a licensed taxi. Look for the taxi sign on the roof and the yellow plates.",
    rateTitle: "Rate NapaPro Transfers on Google",
    rateBody: "Your feedback helps other travellers find a reliable transfer in Cyprus.",
    rateCta: "Leave a 5-star review",
    footName: "NapaPro Transfers",
    footBase: "Base: Famagusta Region (Ayia Napa, Protaras, Liopetri, Paralimni). Larnaca & Paphos Airport transfers 24/7.",
    footPhone: "Phone & WhatsApp:",
    rights: "© 2026 NapaPro Transfers. All rights reserved.",
    quoteHead: "NapaPro Transfers booking",
    enlarge: "Enlarge photo",
    close: "Close",
    metaTitle: "Taxi Ayia Napa & Protaras Transfers | Larnaca Airport",
    metaDesc:
      "Private airport transfers in Cyprus. Taxi Ayia Napa and Protaras transfers, including Larnaca Airport to Ayia Napa. Mercedes fleet. Book on WhatsApp.",
  },
  el: {
    skip: "Μετάβαση στο περιεχόμενο",
    region: "Επαρχία Αμμοχώστου & Κύπρος 24/7",
    pill: "Επαρχία Αμμοχώστου  |  24/7",
    titleA: "Premium μεταφορές σε",
    titleB: "Αγία Νάπα, Πρωταρά & αεροδρόμια",
    lead: "Ταξί Αγία Νάπα και μεταφορές Πρωταρά με στόλο Mercedes. Ιδιωτικές μεταφορές αεροδρομίου στην Κύπρο, και από Λάρνακα προς Αγία Νάπα.",
    routes: "Ταξί Αγία Νάπα · Μεταφορές Πρωταρά · Αεροδρόμιο Λάρνακας προς Αγία Νάπα",
    chipSeat: "Δωρεάν παιδικά καθίσματα",
    chipFlight: "Παρακολούθηση πτήσης",
    chipPay: "Κάρτα ή μετρητά",
    book: "Κράτηση στο WhatsApp",
    review: "Κριτική",
    calcKicker: "Έλεγξε διαθεσιμότητα & τιμή",
    pickup: "Παραλαβή",
    drop: "Προορισμός",
    pickupPh: "Ξενοδοχείο, αεροδρόμιο ή διεύθυνση",
    dropPh: "Πού θέλεις να πας",
    vehicle: "Όχημα",
    pax: "Άτομα",
    bags: "Αποσκευές",
    flight: "Έλεγχος πτήσης",
    flightPh: "Αριθμός πτήσης, αν έχεις",
    seats: "Παιδικά καθίσματα",
    priceAsk: "Η σταθερή τιμή επιβεβαιώνεται στο WhatsApp.",
    popular: "Δημοφιλείς προορισμοί",
    trip: "Το ταξίδι σας",
    when: "Ημερομηνία",
    timeLabel: "Ώρα",
    pay: "Πληρωμή",
    cash: "Μετρητά",
    card: "Κάρτα",
    swap: "Αντιστροφή διαδρομής",
    name: "Όνομα",
    namePh: "Το όνομά σου",
    schedule: "Έλεγξε διαθεσιμότητα & τιμή",
    bookBig: "Κράτηση στο WhatsApp",
    fleetKicker: "Ο στόλος μας",
    fleetTitle: "Στόλος Mercedes",
    vehicles: { standard: "Standard taxi", comfort: "Comfort", big: "Big taxi", minivan: "Minivan" },
    whyTitle: "Γιατί εμείς",
    why: ["Αξιόπιστη εταιρεία", "Καινούργια οχήματα", "Στόλος Mercedes", "Premium μεταφορά", "Παρακολούθηση πτήσης"],
    galleryKicker: "Γκαλερί",
    galleryTitle: "Φωτογραφίες",
    photo: "Φωτογραφία στόλου",
    videoTitle: "Δείτε τον στόλο",
    videoLead: "Mercedes, χώρος αποσκευών και παιδικά καθίσματα.",
    legalKicker: "Επίσημο ταξί",
    legalTitle: "Ταξιδέψτε με ασφάλεια, νόμιμα",
    legalBody: "Είμαστε αδειοδοτημένο ταξί. Ψάξτε το σήμα TAXI στην οροφή και τις κίτρινες πινακίδες.",
    rateTitle: "Βαθμολόγησε το NapaPro στο Google",
    rateBody: "Η γνώμη σου βοηθάει άλλους να βρουν αξιόπιστη μεταφορά στην Κύπρο.",
    rateCta: "Κριτική 5 αστέρων",
    footName: "NapaPro Transfers",
    footBase: "Βάση: Επαρχία Αμμοχώστου (Αγία Νάπα, Πρωταράς, Λιοπέτρι, Παραλίμνι). Αεροδρόμια Λάρνακας & Πάφου, 24/7.",
    footPhone: "Τηλέφωνο & WhatsApp:",
    rights: "© 2026 NapaPro Transfers. Με επιφύλαξη κάθε δικαιώματος.",
    quoteHead: "Κράτηση NapaPro Transfers",
    enlarge: "Μεγέθυνση",
    close: "Κλείσιμο",
    metaTitle: "NapaPro Transfers — Αγία Νάπα, Πρωταράς & αεροδρόμια",
    metaDesc: "Ταξί Αγία Νάπα και μεταφορές Πρωταρά. Ιδιωτική μεταφορά από το αεροδρόμιο Λάρνακας προς Αγία Νάπα. Στόλος Mercedes. Κράτηση στο WhatsApp.",
  },
  pl: {
    skip: "Przejdź do treści",
    region: "Region Famagusta i Cypr 24/7",
    pill: "Region Famagusta  |  Serwis 24/7",
    titleA: "Prywatne transfery w",
    titleB: "Ayia Napa, Protaras i na lotniska",
    lead: "Profesjonalne transfery flotą Mercedes. Odbiór z lotnisk Larnaka i Pafos, stała cena, bez ukrytych opłat.",
    routes: "Taxi Ayia Napa · Transfery Protaras · Lotnisko Larnaka do Ayia Napa",
    chipSeat: "Foteliki dla dzieci",
    chipFlight: "Monitoring lotu",
    chipPay: "Karta lub gotówka",
    book: "Rezerwacja przez WhatsApp",
    review: "Opinie",
    calcKicker: "Sprawdź dostępność i cenę",
    pickup: "Miejsce odbioru",
    drop: "Cel podróży",
    pickupPh: "Hotel, lotnisko lub adres",
    dropPh: "Dokąd chcesz jechać",
    vehicle: "Pojazd",
    pax: "Pasażerowie",
    bags: "Bagaż",
    flight: "Sprawdź lot",
    flightPh: "Numer lotu, jeśli go masz",
    seats: "Foteliki",
    priceAsk: "Stałą cenę potwierdzamy na WhatsApp.",
    popular: "Popularne miejsca",
    trip: "Twoja trasa",
    when: "Data",
    timeLabel: "Godzina",
    pay: "Płatność",
    cash: "Gotówka",
    card: "Karta",
    swap: "Zamień odbiór i cel",
    name: "Imię",
    namePh: "Twoje imię",
    schedule: "Sprawdź dostępność i cenę",
    bookBig: "Rezerwuj przez WhatsApp",
    fleetKicker: "Nasza flota",
    fleetTitle: "Flota Mercedes",
    vehicles: { standard: "Taksówka standard", comfort: "Comfort", big: "Duża taksówka", minivan: "Minivan" },
    whyTitle: "Dlaczego my",
    why: ["Niezawodna firma", "Nowe pojazdy", "Flota Mercedes", "Transfer premium", "Monitoring lotu"],
    galleryKicker: "Galeria",
    galleryTitle: "Zdjęcia",
    photo: "Zdjęcie floty",
    videoTitle: "Zobacz flotę",
    videoLead: "Mercedesy, miejsce na bagaż i foteliki.",
    legalKicker: "Oficjalna taksówka",
    legalTitle: "Podróżuj bezpiecznie i legalnie",
    legalBody: "Jesteśmy licencjonowaną taksówką. Szukaj znaku TAXI na dachu i żółtych tablic.",
    rateTitle: "Oceń NapaPro Transfers w Google",
    rateBody: "Twoja opinia pomaga innym znaleźć pewny transfer na Cyprze.",
    rateCta: "Zostaw opinię 5 gwiazdek",
    footName: "NapaPro Transfers",
    footBase: "Baza: region Famagusta (Ayia Napa, Protaras, Liopetri, Paralimni). Transfery z lotnisk Larnaka i Pafos, 24/7.",
    footPhone: "Telefon i WhatsApp:",
    rights: "© 2026 NapaPro Transfers. Wszelkie prawa zastrzeżone.",
    quoteHead: "Rezerwacja NapaPro Transfers",
    enlarge: "Powiększ",
    close: "Zamknij",
    metaTitle: "NapaPro Transfers — Ayia Napa, Protaras i lotniska",
    metaDesc: "Taxi Ayia Napa i transfery Protaras. Prywatny transfer z lotniska Larnaka do Ayia Napa. Flota Mercedes. Rezerwacja WhatsApp.",
  },
  fr: {
    skip: "Aller au contenu",
    region: "Région de Famagouste et Chypre 24/7",
    pill: "Région de Famagouste  |  Service 24/7",
    titleA: "Transferts privés à",
    titleB: "Ayia Napa, Protaras et aéroports",
    lead: "Transferts professionnels avec une flotte Mercedes. Prise en charge depuis Larnaca et Paphos, prix fixe, sans frais cachés.",
    routes: "Taxi Ayia Napa · Transferts Protaras · Aéroport de Larnaca vers Ayia Napa",
    chipSeat: "Sièges enfants",
    chipFlight: "Suivi de vol",
    chipPay: "Carte ou espèces",
    book: "Réserver sur WhatsApp",
    review: "Avis",
    calcKicker: "Vérifier disponibilité et prix",
    pickup: "Prise en charge",
    drop: "Destination",
    pickupPh: "Hôtel, aéroport ou adresse",
    dropPh: "Où voulez-vous aller",
    vehicle: "Véhicule",
    pax: "Passagers",
    bags: "Bagages",
    flight: "Suivi de vol",
    flightPh: "Numéro de vol, si vous l'avez",
    seats: "Sièges bébé",
    priceAsk: "Le prix fixe est confirmé sur WhatsApp.",
    popular: "Destinations populaires",
    trip: "Votre trajet",
    when: "Date",
    timeLabel: "Heure",
    pay: "Paiement",
    cash: "Espèces",
    card: "Carte",
    swap: "Inverser le trajet",
    name: "Nom",
    namePh: "Votre nom",
    schedule: "Vérifier disponibilité et prix",
    bookBig: "Réserver sur WhatsApp",
    fleetKicker: "Notre flotte",
    fleetTitle: "Flotte Mercedes",
    vehicles: { standard: "Taxi standard", comfort: "Comfort", big: "Grand taxi", minivan: "Minivan" },
    whyTitle: "Pourquoi nous",
    why: ["Entreprise fiable", "Véhicules récents", "Flotte Mercedes", "Transfert premium", "Suivi de vol"],
    galleryKicker: "Galerie",
    galleryTitle: "Photos",
    photo: "Photo de la flotte",
    videoTitle: "Voir la flotte",
    videoLead: "Mercedes, espace bagages et sièges enfants.",
    legalKicker: "Taxi officiel",
    legalTitle: "Voyagez en sécurité, voyagez légal",
    legalBody: "Nous sommes un taxi agréé. Cherchez le signe TAXI sur le toit et les plaques jaunes.",
    rateTitle: "Notez NapaPro Transfers sur Google",
    rateBody: "Votre avis aide d'autres voyageurs à trouver un transfert fiable à Chypre.",
    rateCta: "Laisser un avis 5 étoiles",
    footName: "NapaPro Transfers",
    footBase: "Base : région de Famagouste (Ayia Napa, Protaras, Liopetri, Paralimni). Aéroports Larnaca et Paphos, 24/7.",
    footPhone: "Téléphone et WhatsApp :",
    rights: "© 2026 NapaPro Transfers. Tous droits réservés.",
    quoteHead: "Réservation NapaPro Transfers",
    enlarge: "Agrandir",
    close: "Fermer",
    metaTitle: "NapaPro Transfers — Ayia Napa, Protaras et aéroports",
    metaDesc: "Taxi Ayia Napa et transferts Protaras. Transfert privé de l'aéroport de Larnaca vers Ayia Napa. Flotte Mercedes. Réservation WhatsApp.",
  },
  he: {
    skip: "דלג לתוכן",
    region: "מחוז פמגוסטה וקפריסין 24/7",
    pill: "מחוז פמגוסטה  |  שירות 24/7",
    titleA: "הסעות פרטיות ב",
    titleB: "איה נאפה, פרוטארס ושדות תעופה",
    lead: "הסעות מקצועיות עם צי מרצדס. איסוף מלרנקה ומפאפוס, מחיר קבוע, בלי עמלות נסתרות.",
    routes: "מונית איה נאפה · הסעות פרוטארס · משדה התעופה לרנקה לאיה נאפה",
    chipSeat: "מושבי תינוק",
    chipFlight: "מעקב טיסה",
    chipPay: "כרטיס או מזומן",
    book: "הזמנה ב-WhatsApp",
    review: "ביקורת",
    calcKicker: "בדקו זמינות ומחיר",
    pickup: "נקודת איסוף",
    drop: "יעד",
    pickupPh: "מלון, שדה תעופה או כתובת",
    dropPh: "לאן תרצו לנסוע",
    vehicle: "רכב",
    pax: "נוסעים",
    bags: "מזוודות",
    flight: "בדיקת טיסה",
    flightPh: "מספר טיסה, אם יש",
    seats: "מושבי תינוק",
    priceAsk: "המחיר הקבוע מאושר ב-WhatsApp.",
    popular: "יעדים פופולריים",
    trip: "הנסיעה שלכם",
    when: "תאריך",
    timeLabel: "שעה",
    pay: "תשלום",
    cash: "מזומן",
    card: "כרטיס",
    swap: "החלף איסוף ויעד",
    name: "שם",
    namePh: "השם שלך",
    schedule: "בדקו זמינות ומחיר",
    bookBig: "הזמנה ב-WhatsApp",
    fleetKicker: "הצי שלנו",
    fleetTitle: "צי מרצדס",
    vehicles: { standard: "מונית סטנדרט", comfort: "Comfort", big: "מונית גדולה", minivan: "מיניוואן" },
    whyTitle: "למה אנחנו",
    why: ["חברה אמינה", "רכבים חדשים", "צי מרצדס", "הסעה פרימיום", "מעקב טיסה"],
    galleryKicker: "גלריה",
    galleryTitle: "תמונות",
    photo: "תמונת צי",
    videoTitle: "ראו את הצי",
    videoLead: "מרצדס, מקום למזוודות וכיסאות בטיחות.",
    legalKicker: "מונית רשמית",
    legalTitle: "סעו בטוח, סעו חוקי",
    legalBody: "אנחנו מונית מורשית. חפשו שלט TAXI על הגג ולוחיות צהובות.",
    rateTitle: "דרגו את NapaPro Transfers בגוגל",
    rateBody: "המשוב שלכם עוזר לנוסעים אחרים למצוא הסעה אמינה בקפריסין.",
    rateCta: "ביקורת 5 כוכבים",
    footName: "NapaPro Transfers",
    footBase: "בסיס: מחוז פמגוסטה (איה נאפה, פרוטארס, ליופטרי, פרלימני). הסעות מלרנקה ומפאפוס, 24/7.",
    footPhone: "טלפון ו-WhatsApp:",
    rights: "© 2026 NapaPro Transfers. כל הזכויות שמורות.",
    quoteHead: "הזמנת NapaPro Transfers",
    enlarge: "הגדלה",
    close: "סגירה",
    metaTitle: "NapaPro Transfers — איה נאפה, פרוטארס ושדות תעופה",
    metaDesc: "מונית באיה נאפה והסעות לפרוטארס. הסעה פרטית משדה התעופה לרנקה לאיה נאפה. צי מרצדס. הזמנה ב-WhatsApp.",
  },
  de: {
    skip: "Zum Inhalt",
    region: "Region Famagusta & Zypern 24/7",
    pill: "Region Famagusta  |  Service 24/7",
    titleA: "Private Transfers in",
    titleB: "Ayia Napa, Protaras & Flughäfen",
    lead: "Professionelle Transfers mit Mercedes-Flotte. Abholung von Larnaca und Paphos, Festpreis, keine versteckten Kosten.",
    routes: "Taxi Ayia Napa · Protaras Transfers · Flughafen Larnaca nach Ayia Napa",
    chipSeat: "Kindersitze",
    chipFlight: "Flugüberwachung",
    chipPay: "Karte oder bar",
    book: "Per WhatsApp buchen",
    review: "Bewertung",
    calcKicker: "Verfügbarkeit & Preis prüfen",
    pickup: "Abholung",
    drop: "Ziel",
    pickupPh: "Hotel, Flughafen oder Adresse",
    dropPh: "Wohin möchten Sie",
    vehicle: "Fahrzeug",
    pax: "Personen",
    bags: "Gepäck",
    flight: "Flug prüfen",
    flightPh: "Flugnummer, falls vorhanden",
    seats: "Kindersitze",
    priceAsk: "Der Festpreis wird per WhatsApp bestätigt.",
    popular: "Beliebte Ziele",
    trip: "Ihre Fahrt",
    when: "Datum",
    timeLabel: "Uhrzeit",
    pay: "Zahlung",
    cash: "Bar",
    card: "Karte",
    swap: "Abholung und Ziel tauschen",
    name: "Name",
    namePh: "Ihr Name",
    schedule: "Verfügbarkeit & Preis prüfen",
    bookBig: "Per WhatsApp buchen",
    fleetKicker: "Unsere Flotte",
    fleetTitle: "Mercedes-Flotte",
    vehicles: { standard: "Standard-Taxi", comfort: "Comfort", big: "Großes Taxi", minivan: "Minivan" },
    whyTitle: "Warum wir",
    why: ["Zuverlässiges Unternehmen", "Neue Fahrzeuge", "Mercedes-Flotte", "Premium-Transfer", "Flugüberwachung"],
    galleryKicker: "Galerie",
    galleryTitle: "Fotos",
    photo: "Flottenfoto",
    videoTitle: "Die Flotte ansehen",
    videoLead: "Mercedes, Gepäckraum und Kindersitze.",
    legalKicker: "Offizielles Taxi",
    legalTitle: "Sicher und legal unterwegs",
    legalBody: "Wir sind ein lizenziertes Taxi. Achten Sie auf das TAXI-Schild und die gelben Kennzeichen.",
    rateTitle: "NapaPro Transfers bei Google bewerten",
    rateBody: "Ihre Bewertung hilft anderen, einen zuverlässigen Transfer auf Zypern zu finden.",
    rateCta: "5-Sterne-Bewertung",
    footName: "NapaPro Transfers",
    footBase: "Basis: Region Famagusta (Ayia Napa, Protaras, Liopetri, Paralimni). Flughäfen Larnaca & Paphos, 24/7.",
    footPhone: "Telefon & WhatsApp:",
    rights: "© 2026 NapaPro Transfers. Alle Rechte vorbehalten.",
    quoteHead: "Buchung NapaPro Transfers",
    enlarge: "Vergrößern",
    close: "Schließen",
    metaTitle: "NapaPro Transfers — Ayia Napa, Protaras & Flughäfen",
    metaDesc: "Taxi Ayia Napa und Protaras Transfers. Privater Transfer vom Flughafen Larnaca nach Ayia Napa. Mercedes-Flotte. Buchung per WhatsApp.",
  },
} as const;

const reviewLine: Record<Lang, (n: number) => string> = {
  en: (n) => (n === 1 ? "1 Google review" : `${n} Google reviews`),
  el: (n) => (n === 1 ? "1 κριτική στο Google" : `${n} κριτικές στο Google`),
  pl: (n) => (n === 1 ? "1 opinia w Google" : `${n} opinii w Google`),
  fr: (n) => (n === 1 ? "1 avis Google" : `${n} avis Google`),
  he: (n) => (n === 1 ? "ביקורת אחת בגוגל" : `${n} ביקורות בגוגל`),
  de: (n) => (n === 1 ? "1 Google-Bewertung" : `${n} Google-Bewertungen`),
};

function waLink(text: string) {
  return `${WA_BASE}?text=${encodeURIComponent(text)}`;
}

function openWhatsApp(text: string) {
  const url = waLink(text);
  const mobile = window.matchMedia("(pointer: coarse)").matches;
  if (mobile) {
    window.location.assign(url);
    return;
  }
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) window.location.assign(url);
}

function isLang(value: string | null): value is Lang {
  return LANGS.some((item) => item.id === value);
}

export function Site() {
  const [lang, setLang] = useState<Lang>("en");
  const [pickup, setPickup] = useState("");
  const [dest, setDest] = useState("");
  const [name, setName] = useState("");
  const [whenDate, setWhenDate] = useState("");
  const [whenTime, setWhenTime] = useState("");
  const [pay, setPay] = useState<"cash" | "card">("cash");
  const [pax, setPax] = useState(1);
  const [bags, setBags] = useState(0);
  const [flight, setFlight] = useState("");
  const [seats, setSeats] = useState(0);
  const [shot, setShot] = useState<number | "legal" | null>(null);
  const [google, setGoogle] = useState<GoogleRating | null>(null);
  const [mapSrc, setMapSrc] = useState("");
  const t = ui[lang];

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY);
    if (isLang(saved)) setLang(saved);
  }, []);

  useEffect(() => {
    let active = true;
    getGoogleRating()
      .then((data) => {
        if (active) setGoogle(data);
      })
      .catch(() => {
        if (active) setGoogle(null);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "he" ? "he" : lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    document.title = t.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.metaDesc);
  }, [lang, t.metaTitle, t.metaDesc]);

  useEffect(() => {
    const from = pickup.trim();
    const to = dest.trim();
    if (from.length < 3 || to.length < 3) {
      setMapSrc("");
      return;
    }
    const timer = window.setTimeout(() => {
      const hl = lang === "el" ? "el" : lang === "he" ? "iw" : lang;
      setMapSrc(
        `https://maps.google.com/maps?saddr=${encodeURIComponent(from)}&daddr=${encodeURIComponent(to)}&output=embed&hl=${hl}`,
      );
    }, 700);
    return () => window.clearTimeout(timer);
  }, [pickup, dest, lang]);

  function chooseLang(next: Lang) {
    setLang(next);
    localStorage.setItem(LANG_KEY, next);
  }

  function bump(kind: "pax" | "bags" | "seats", dir: -1 | 1) {
    if (kind === "pax") setPax((n) => Math.min(8, Math.max(1, n + dir)));
    else if (kind === "bags") setBags((n) => Math.min(12, Math.max(0, n + dir)));
    else setSeats((n) => Math.min(3, Math.max(0, n + dir)));
  }

  function swapEnds() {
    setPickup(dest);
    setDest(pickup);
  }

  const message = [
    "NapaPro Transfers booking",
    `Name: ${name.trim()}`,
    `Pickup: ${pickup.trim()}`,
    `Destination: ${dest.trim()}`,
    `Date: ${whenDate}`,
    `Time: ${whenTime}`,
    `Passengers: ${pax}`,
    `Luggage: ${bags}`,
    `Baby seats: ${seats}`,
    `Flight: ${flight.trim() || "-"}`,
    `Payment: ${pay === "card" ? "Card" : "Cash"}`,
  ].join("\n");

  const field =
    "mt-1 w-full min-w-0 rounded-xl border border-line bg-ink px-3 py-3 text-base font-normal normal-case tracking-normal text-cream outline-none [color-scheme:dark] placeholder:text-inksoft";

  return (
    <div className="min-h-svh bg-ink text-cream" dir={lang === "he" ? "rtl" : "ltr"}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        {t.skip}
      </a>

      <header className="sticky top-0 z-30 border-b border-line bg-ink/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold text-ink">
              <Car className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-wide">
                NapaPro<span className="text-gold">Transfers</span>
              </span>
              <span className="block truncate text-[10px] uppercase tracking-widest text-mist">{t.region}</span>
            </span>
          </a>
          <label className="sr-only" htmlFor="lang">
            Language
          </label>
          <select
            id="lang"
            value={lang}
            onChange={(e) => chooseLang(e.target.value as Lang)}
            className="h-10 shrink-0 rounded-lg bg-gold px-2 text-sm font-semibold text-ink"
          >
            {LANGS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main id="main">
        <section id="top" className="mx-auto max-w-5xl px-4 py-6 md:py-10">
          <figure className="overflow-hidden rounded-3xl border border-line">
            <img
              src="/fleet/seaside.jpg"
              alt="Mercedes taxi Ayia Napa and Protaras, private airport transfers in Cyprus"
              width="1600"
              height="1067"
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover object-[32%_center] md:aspect-[21/9]"
            />
          </figure>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 text-xs text-mist">
              <MapPin className="size-3.5 text-gold" aria-hidden="true" />
              {t.pill}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {t.titleA} <span className="text-gold">{t.titleB}</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist md:text-base">{t.lead}</p>
            <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-cream">{t.routes}</p>
            <ul className="mt-5 flex flex-wrap gap-2 text-sm">
              <li className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2">
                <Baby className="size-4 text-gold" aria-hidden="true" />
                {t.chipSeat}
              </li>
              <li className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2">
                <Plane className="size-4 text-gold" aria-hidden="true" />
                {t.chipFlight}
              </li>
              <li className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2">
                <CreditCard className="size-4 text-gold" aria-hidden="true" />
                {t.chipPay}
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#fare"
                className="inline-flex h-12 items-center justify-center gap-2 bg-gold px-5 text-sm font-semibold text-ink"
              >
                <Calendar className="size-4" aria-hidden="true" />
                {t.schedule}
              </a>
              <a
                href={GOOGLE_REVIEW}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 border border-line bg-panel px-5 text-sm"
              >
                <Star className="size-4 text-gold" aria-hidden="true" />
                {t.review}
              </a>
            </div>
          </div>

          <form
            id="fare"
            className="min-w-0 scroll-mt-24 rounded-3xl border border-line bg-panel p-4 sm:p-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              if (!form.checkValidity()) {
                form.reportValidity();
                const bad = form.querySelector(":invalid");
                if (bad instanceof HTMLElement) bad.scrollIntoView({ block: "center", behavior: "smooth" });
                return;
              }
              openWhatsApp(message);
            }}
          >
            <h2 className="text-lg font-semibold">{t.calcKicker}</h2>
            {mapSrc ? (
              <div className="mt-4 overflow-hidden rounded-2xl border border-line">
                <iframe title={t.trip} src={mapSrc} className="h-44 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            ) : null}
            <div className="mt-4 rounded-2xl border border-line p-3">
              <p className="text-[11px] font-medium uppercase tracking-widest text-gold">{t.trip}</p>
              <label className="mt-3 block text-[11px] font-medium uppercase tracking-widest text-mist">
                {t.pickup}
                <input
                  className={field}
                  required
                  autoComplete="off"
                  enterKeyHint="next"
                  value={pickup}
                  placeholder={t.pickupPh}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </label>
              <button
                type="button"
                className="mx-auto mt-3 flex size-11 items-center justify-center rounded-full border border-gold text-gold"
                aria-label={t.swap}
                onClick={swapEnds}
              >
                <ArrowLeftRight className="size-4" aria-hidden="true" />
              </button>
              <label className="mt-3 block text-[11px] font-medium uppercase tracking-widest text-mist">
                {t.drop}
                <input
                  className={field}
                  required
                  autoComplete="off"
                  enterKeyHint="next"
                  value={dest}
                  placeholder={t.dropPh}
                  onChange={(e) => setDest(e.target.value)}
                />
              </label>
              <div className="mt-3 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                <label className="block text-[11px] font-medium uppercase tracking-widest text-mist">
                  {t.when}
                  <input className={field} required type="date" value={whenDate} onChange={(e) => setWhenDate(e.target.value)} />
                </label>
                <label className="block text-[11px] font-medium uppercase tracking-widest text-mist">
                  {t.timeLabel}
                  <input className={field} required type="time" value={whenTime} onChange={(e) => setWhenTime(e.target.value)} />
                </label>
              </div>
            </div>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-widest text-mist">{t.popular}</p>
            <div className="mt-2 flex min-w-0 gap-2 overflow-x-auto pb-1">
              {spots[lang].map((place) => (
                <button
                  key={place}
                  type="button"
                  className={
                    dest === place
                      ? "h-10 shrink-0 rounded-full bg-gold px-3 text-sm font-semibold text-ink"
                      : "h-10 shrink-0 rounded-full border border-line px-3 text-sm"
                  }
                  onClick={() => setDest(place)}
                >
                  {place}
                </button>
              ))}
            </div>
            <label className="mt-4 block text-[11px] font-medium uppercase tracking-widest text-mist">
              {t.name}
              <input className={field} required autoComplete="name" enterKeyHint="next" value={name} placeholder={t.namePh} onChange={(e) => setName(e.target.value)} />
            </label>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Counter label={t.pax} value={pax} onChange={(dir) => bump("pax", dir)} />
              <Counter label={t.bags} value={bags} onChange={(dir) => bump("bags", dir)} />
            </div>
            <label className="mt-4 block border-t border-line pt-4 text-[11px] font-medium uppercase tracking-widest text-mist">
              {t.flight}
              <input className={field} value={flight} placeholder={t.flightPh} onChange={(e) => setFlight(e.target.value)} />
            </label>
            <div className="mt-3">
              <Counter label={t.seats} value={seats} onChange={(dir) => bump("seats", dir)} />
            </div>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-widest text-mist">{t.pay}</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(["cash", "card"] as const).map((id) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={pay === id}
                  className={pay === id ? "h-11 rounded-xl bg-gold text-sm font-semibold text-ink" : "h-11 rounded-xl border border-line text-sm"}
                  onClick={() => setPay(id)}
                >
                  {id === "cash" ? t.cash : t.card}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-inksoft">{t.priceAsk}</p>
            <button type="submit" className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 bg-gold text-base font-semibold text-ink">
              <MessageCircle className="size-4" aria-hidden="true" />
              {t.bookBig}
            </button>
          </form>
          </div>
        </section>

        <section id="why" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-center text-3xl font-semibold">{t.whyTitle}</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {t.why.map((label, i) => {
                const Icon = whyIcons[i] ?? ShieldCheck;
                return (
                  <li key={label} className="rounded-3xl border border-line bg-panel p-4">
                    <Icon className="size-5 text-gold" aria-hidden="true" />
                    <h3 className="mt-3 text-base font-semibold leading-snug">{label}</h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="fleet" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t.fleetKicker}</p>
            <h2 className="mt-2 text-center text-3xl font-semibold md:text-4xl">{t.videoTitle}</h2>
            <p className="mx-auto mt-3 max-w-md text-center text-sm text-mist">{t.videoLead}</p>
            <video
              className="mx-auto mt-8 aspect-[9/16] w-full max-w-sm rounded-3xl bg-black object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/fleet/havana.jpg"
            >
              <source src="/fleet/promo.mp4" type="video/mp4" />
            </video>
            <h2 className="mt-14 text-center text-3xl font-semibold md:text-4xl">{t.fleetTitle}</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {photos.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className="overflow-hidden rounded-2xl"
                  onClick={() => setShot(i)}
                  aria-label={t.enlarge}
                >
                  <img src={src} alt={t.photo} className="aspect-[4/3] w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="official" className="border-t border-line">
          <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-14 md:grid-cols-[1fr_280px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t.legalKicker}</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.legalTitle}</h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-mist">{t.legalBody}</p>
            </div>
            <button type="button" className="overflow-hidden rounded-2xl" onClick={() => setShot("legal")} aria-label={t.enlarge}>
              <img src="/fleet/official-taxi.jpg" alt={t.legalTitle} className="w-full object-cover" />
            </button>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-xl px-4 py-14 text-center">
            <div className="rounded-3xl border border-line bg-panel px-6 py-10">
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gold text-2xl font-semibold text-ink">G</span>
              {google ? (
                <>
                  <p className="mt-4 text-4xl font-semibold">{google.rating.toFixed(1)}</p>
                  <p className="mt-2 flex justify-center gap-1 text-gold" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-5" fill={star <= Math.round(google.rating) ? "currentColor" : "none"} />
                    ))}
                  </p>
                  <p className="mt-2 text-sm text-mist">{reviewLine[lang](google.count)}</p>
                </>
              ) : (
                <p className="mt-4 text-sm text-mist">Google</p>
              )}
              <h2 className="mt-2 text-2xl font-semibold">{t.rateTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mist">{t.rateBody}</p>
              <a
                href={GOOGLE_REVIEW}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 bg-gold px-5 text-sm font-semibold text-ink"
              >
                <Star className="size-4" aria-hidden="true" />
                {t.rateCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-4 py-10 text-center">
        <p className="text-sm font-semibold tracking-[0.18em]">{t.footName}</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist">{t.footBase}</p>
        <p className="mt-4 text-sm">
          <span className="text-mist">{t.footPhone} </span>
          <a href={`tel:${PHONE_TEL}`} className="font-medium text-gold">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="mt-6 text-xs text-inksoft">{t.rights}</p>
      </footer>

      {shot !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShot(null)}
          role="dialog"
          aria-modal="true"
          aria-label={t.photo}
        >
          <button type="button" className="absolute right-4 top-4 h-11 rounded-lg border border-line px-4 text-sm" onClick={() => setShot(null)}>
            {t.close}
          </button>
          <img
            src={shot === "legal" ? "/fleet/official-taxi.jpg" : photos[shot]}
            alt={shot === "legal" ? t.legalTitle : t.photo}
            className="max-h-[85svh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "NapaPro Transfers",
            url: "https://napaprotransfer.com/",
            image: "https://napaprotransfer.com/fleet/seaside.jpg",
            telephone: "+35799963259",
            areaServed: ["Ayia Napa", "Protaras", "Larnaca Airport", "Paphos Airport", "Cyprus"],
            description:
              "Taxi Ayia Napa and Protaras transfers. Private airport transfers in Cyprus, including Larnaca Airport to Ayia Napa.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ayia Napa",
              addressRegion: "Famagusta",
              addressCountry: "CY",
            },
          }),
        }}
      />
    </div>
  );
}

function Counter({ label, value, onChange }: { label: string; value: number; onChange: (dir: -1 | 1) => void }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-widest text-mist">{label}</p>
      <div className="mt-1 flex h-12 items-center justify-between rounded-xl border border-line bg-ink px-2">
        <button type="button" className="flex size-11 items-center justify-center" aria-label="-1" onClick={() => onChange(-1)}>
          <Minus className="size-4" />
        </button>
        <span className="text-base font-semibold">{value}</span>
        <button type="button" className="flex size-11 items-center justify-center" aria-label="+1" onClick={() => onChange(1)}>
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
}

// Complete structured data from https://scruffytofluffy.in/

export const BRAND = {
  name: "Scruffy to Fluffy",
  tagline: "Your pet, our priority",
  subtagline: "Happy pets, happy humans",
  bannerText: "Pet Grooming Services on Wheels Throughout Mumbai & Navi Mumbai",
  logo: "https://scruffytofluffy.in/wp-content/uploads/2022/06/t_logo-2-500X500.png",
  phone1: "9004116634",
  phone2: "9004117750",
  phoneFormatted1: "+91 9004116634",
  phoneFormatted2: "+91 9004117750",
  email: "info@scruffytofluffy.in",
  googleRating: "4.6",
  googleRatingUrl: "https://maps.google.com/?cid=scruffytofluffy",
  whatsappLink: "https://wa.me/919004116634?text=Hi%20Scruffy%20to%20Fluffy!%20I%20would%20like%20to%20book%20a%20pet%20grooming%20session.",
  whatsformUrl: "https://whatsform.com/C6t2-p",
  instagram: "https://instagram.com/scruffytofluffy5",
  youtube: "https://youtube.com/@scruffytofluffy-em9lc",
  address: "Dahisar East, Mumbai, Maharashtra 400068",
  walkingAreas: "Dahisar Check Naka, Siddhi Vinayak Nagar, Mahajan Wadi, Mira Road East, Mumbai",
  vanServiceAreas: "Throughout Mumbai & Navi Mumbai (Doorstep mobile van arrival)",
  stats: [
    { value: "8+", label: "Years of Expertise" },
    { value: "5,000+", label: "Dog Grooming Sessions" },
    { value: "1,000+", label: "Cat Grooming Sessions" },
    { value: "1,200+", label: "Trained Pets" },
  ]
};

export const SERVICES_ICONS = [
  {
    id: "daycare",
    title: "Hygiene",
    desc: "Complete paw, ear, sanitary & dental hygiene care",
    link: "/product/daycare"
  },
  {
    id: "walking",
    title: "Full Hair Cut",
    desc: "Breed-specific & customized pet hair styling",
    link: "/product/walking"
  },
  {
    id: "grooming",
    title: "Tick Flea",
    desc: "Medicated wash & intensive parasite eradication",
    link: "/product/grooming"
  },
  {
    id: "boarding",
    title: "Boarding",
    desc: "Comfortable, safe, and loving overnight pet stays",
    link: "/product/boarding"
  },
  {
    id: "comforting",
    title: "Comforting",
    desc: "Gentle stress-free de-shedding & relaxing baths",
    link: "/product/comforting"
  },
  {
    id: "medi-wash",
    title: "Medi Wash",
    desc: "Veterinary-recommended soothing medicated bath",
    link: "/product/medi-wash"
  }
];

export const SERVICE_PACKAGES = [
  {
    id: "basic",
    name: "Basic Grooming",
    price: "₹1,499",
    numericPrice: 1499,
    badge: "Popular",
    image: "https://scruffytofluffy.in/wp-content/uploads/2025/12/Basic_Grooming_with_Scruffy_to_Fluffy_Badge_-_Bath__Blow_Dry_Nail_Clipping_Ear__Eye_Cleaning_₹1499.webp",
    features: [
      "Bath & Blow Dry",
      "Nail Clipping",
      "Ear & Eye Cleaning",
      "Paw Trimming",
      "Sanitary Cleaning"
    ],
    duration: "45 - 60 mins",
    popular: false,
    description: "Our essential maintenance wash and touch-up package. Perfect for routine cleanliness and gentle coat hygiene right in your building compound."
  },
  {
    id: "deluxe",
    name: "Deluxe Grooming",
    price: "₹2,199",
    numericPrice: 2199,
    badge: "Most Recommended",
    image: "https://scruffytofluffy.in/wp-content/uploads/2025/12/Deluxe_Grooming_with_Scruffy_to_Fluffy_Badge_-_Bath__Conditioner_Blow_Dry_Haircut_Teeth_Brushing_₹2199.webp",
    features: [
      "Bath & Conditioner",
      "Blow Dry",
      "Nail & Paw Trimming",
      "Teeth Brushing",
      "Ear & Eye Cleaning",
      "Sanitary Area Cleaning",
      "Basic Haircut"
    ],
    duration: "60 - 90 mins",
    popular: true,
    description: "Our complete pet makeover. Includes nourishing conditioner, oral dental freshening, sanitary trimming, and precision coat scissor styling."
  },
  {
    id: "ticks",
    name: "Ticks Treatment",
    price: "₹2,499",
    numericPrice: 2499,
    badge: "Complete Treatment",
    image: "https://scruffytofluffy.in/wp-content/uploads/2025/12/Ticks_Treatment_with_Scruffy_to_Fluffy_Badge_-_Medicated_Wash_Full_Body_Haircut_Tick__Flea_Removal_₹2499.webp",
    features: [
      "Medicated Tick Wash",
      "Full Body Hair Cut",
      "Complete Tick & Flea Removal",
      "Nail Clipping",
      "Ear & Eye Cleaning",
      "Paw & Sanitary Cleaning",
      "Stylized Hair Cut"
    ],
    duration: "75 - 105 mins",
    popular: false,
    description: "Hospital-grade antiparasitic wash with manual tick removal, soothing coat relief, and complete hygienic styling to eradicate fleas and parasites."
  }
];

// All 6 Values matching original website
export const SIX_VALUES = [
  {
    title: "We love dogs",
    description: "We understand that your furry friend is a treasured member of your family and deserves the best care and attention possible.",
    icon: "heart"
  },
  {
    title: "Convenience",
    description: "In addition to our convenient appointment times, our mobile vans arrive right at your doorstep, saving you travel hassle and time.",
    icon: "truck"
  },
  {
    title: "Personalized care",
    description: "Our team of trained professionals is dedicated to providing 1-on-1 personalized, stress-free care for every pet that comes into our mobile van.",
    icon: "sparkles"
  },
  {
    title: "Peace of mind",
    description: "We know that leaving your furry friend can be stressful. We ensure transparent, humane handling with zero cages or separation anxiety.",
    icon: "shield"
  },
  {
    title: "Transparency",
    description: "We want you to feel confident in the care we provide and trust that we have your dog's best interests and health at heart.",
    icon: "check"
  },
  {
    title: "Teamwork",
    description: "Our team of groomers, technicians, and pet care professionals work together to ensure that your dog receives the highest standard of care.",
    icon: "users"
  }
];

export const VALUES = SIX_VALUES;

// Benefits from booking page
export const BOOKING_BENEFITS = [
  {
    title: "Total Wellness",
    description: "We focus on your dog’s total wellness and don’t merely limit ourselves to routine grooming. We coordinate with groomers, trainers, and walkers to ensure physical health, mental stimulation, and good manners."
  },
  {
    title: "Prevention",
    description: "Most veterinarians see their patients when they are sick. We work with you to craft a comprehensive wellness plan that improves your dog’s long-term health and quality of life."
  },
  {
    title: "Convenience",
    description: "We can care for your dog right outside your home while you go about your day. No more stressful car trips or waiting hours in noisy veterinary clinics!"
  },
  {
    title: "Experience",
    description: "Our team of pet care professionals and technicians has an average of 11 years of hands-on practice experience, capable of managing both routine care and nervous or special-needs pets."
  }
];

// State of the art center points
export const CENTER_FEATURES = [
  "Fully air-conditioned mobile grooming space for maximum pet comfort",
  "Modern grooming equipment and tools maintained to the highest hygiene standards",
  "Hygienic warm-water washing and gentle drying stations with premium equipment",
  "Safe, secure, cage-free holding areas for pets during sessions",
  "Advanced ventilation and hospital-grade sanitization systems between every pet",
  "Emergency first-aid equipment and certified trained pet handlers on standby"
];

// Product detail pages data
export const PRODUCTS_DATA = {
  daycare: {
    id: "daycare",
    title: "Pet Daycare & Hygiene",
    category: "Services",
    price: "₹800",
    numericPrice: 800,
    rating: 4.8,
    reviewsCount: 142,
    image: "https://scruffytofluffy.in/wp-content/uploads/2025/12/Basic_Grooming_with_Scruffy_to_Fluffy_Badge_-_Bath__Blow_Dry_Nail_Clipping_Ear__Eye_Cleaning_₹1499.webp",
    headline: "Stimulating, supervised pet daycare with free 1-day trial for new clients",
    features: [
      "1 Day FREE trial for new pet clients",
      "Supervised indoor play and socialization",
      "Sanitary cleaning & fresh water replenishment",
      "Regular scheduled walking and meal routines",
      "Daily video updates to pet parents"
    ],
    fullDescription: "Our daycare program provides a safe, active, and loving environment for dogs while you are at work or away for the day. Supervised by bonded pet professionals, pets enjoy group play, nap intervals, and hygienic care."
  },
  walking: {
    id: "walking",
    title: "Dog Walking & Hair Cut",
    category: "Services",
    price: "₹499",
    numericPrice: 499,
    rating: 4.9,
    reviewsCount: 310,
    image: "https://scruffytofluffy.in/wp-content/uploads/2025/12/Deluxe_Grooming_with_Scruffy_to_Fluffy_Badge_-_Bath__Conditioner_Blow_Dry_Haircut_Teeth_Brushing_₹2199.webp",
    headline: "Professional dog walking across Dahisar, Mira Road and Western Mumbai",
    features: [
      "Minimum 4 walks per week or 16 walks per month",
      "15 to 45-minute customized walk routes",
      "Energetic exercise, potty breaks & GPS confirmation",
      "Experienced, patient animal handlers",
      "Paws wiped clean after every outdoor walk"
    ],
    fullDescription: "Consistent exercise is vital for a dog's mental health, digestion, and behavior. Our dog walking team provides punctual, invigorating walks tailored to your dog's energy level and age."
  },
  grooming: {
    id: "grooming",
    title: "Van Grooming & Tick Care",
    category: "Services",
    price: "₹1,499",
    numericPrice: 1499,
    rating: 4.9,
    reviewsCount: 520,
    image: "https://scruffytofluffy.in/wp-content/uploads/2025/12/Ticks_Treatment_with_Scruffy_to_Fluffy_Badge_-_Medicated_Wash_Full_Body_Haircut_Tick__Flea_Removal_₹2499.webp",
    headline: "Our signature doorstep van grooming service across Mumbai and Navi Mumbai",
    features: [
      "Zero travel stress — mobile van arrives at your door",
      "Warm water bath & conditioning treatment",
      "Complete tick & flea eradication with medicated wash",
      "Nail clipping, ear/eye hygiene, and teeth brushing",
      "Custom breed scissor cut or stylish shave down"
    ],
    fullDescription: "Skip the stressful car rides and noisy grooming salons. Our custom mobile grooming vans bring professional grooming right to your society gate with gentle, cage-free 1-on-1 care."
  },
  boarding: {
    id: "boarding",
    title: "Overnight Pet Boarding",
    category: "Services",
    price: "₹1,200",
    numericPrice: 1200,
    rating: 4.7,
    reviewsCount: 89,
    image: "https://scruffytofluffy.in/wp-content/uploads/2022/07/iStock-1308557657-1024x765.jpg",
    headline: "Loving, cage-free overnight boarding with 24/7 care and webcam updates",
    features: [
      "Comfortable sleeping quarters with climate control",
      "24/7 human supervision and medical attention on standby",
      "Regular feeding as per owner's dietary guidelines",
      "Morning and evening walks included",
      "Photo and video check-ins sent daily via WhatsApp"
    ],
    fullDescription: "Heading out of town? Your pet will enjoy a home-away-from-home vacation with cozy bedding, loving cuddles, playtime with pals, and constant care."
  },
  training: {
    id: "training",
    title: "Pet Behavior & Obedience Training",
    category: "Services",
    price: "₹5,000",
    numericPrice: 5000,
    rating: 4.9,
    reviewsCount: 165,
    image: "https://scruffytofluffy.in/wp-content/uploads/2022/07/istockphoto-1134929522-2048x2048-1-1024x765.jpg",
    headline: "Certified positive reinforcement training with 1,200+ trained dogs",
    features: [
      "Basic obedience (Sit, Stay, Heel, Come, Drop)",
      "Leash pulling correction and sidewalk manners",
      "Potty training & housebreaking routines",
      "Separation anxiety and bark control",
      "In-home one-on-one sessions in Mumbai"
    ],
    fullDescription: "Transform unwanted behaviors into good manners through humane, reward-based training. Over 1,200 dogs in Mumbai have successfully completed our customized programs."
  },
  veterinary: {
    id: "veterinary",
    title: "Wellness & Telemedicine Consultation",
    category: "Services",
    price: "₹600",
    numericPrice: 600,
    rating: 4.8,
    reviewsCount: 94,
    image: "https://scruffytofluffy.in/wp-content/uploads/2022/07/iStock-1170668075-1024x766.jpg",
    headline: "Routine preventative health checks, diet guidance & telemedicine",
    features: [
      "Comprehensive skin, ear, coat, and eye wellness inspection",
      "Nutritional and anti-allergy dietary plans",
      "Telemedicine consultation via video call",
      "Vaccination reminders & medical history tracking",
      "Referral coordination with senior Mumbai specialists"
    ],
    fullDescription: "Preventative health is the key to longevity. Our veterinarians and senior technicians help craft personalized care plans for every stage of your pet's life."
  },
  comforting: {
    id: "comforting",
    title: "Comforting & De-Shedding Bath",
    category: "Services",
    price: "₹1,699",
    numericPrice: 1699,
    rating: 4.9,
    reviewsCount: 178,
    image: "https://scruffytofluffy.in/wp-content/uploads/2025/12/Basic_Grooming_with_Scruffy_to_Fluffy_Badge_-_Bath__Blow_Dry_Nail_Clipping_Ear__Eye_Cleaning_₹1499.webp",
    headline: "Therapeutic de-shedding bath and high-velocity blowout for heavy shedders",
    features: [
      "Deep undercoat raking and de-shedding treatment",
      "Warm hydro-massage bath with conditioning rinse",
      "Removes up to 90% of loose dead fur",
      "Ear sanitizing and paw pad conditioning balm",
      "Reduces fur on furniture, carpets, and clothes"
    ],
    fullDescription: "Ideal for Golden Retrievers, Labradors, German Shepherds, Huskies, and cats shedding excess dead undercoat. Keeps your home cleaner and your pet cooler."
  },
  "medi-wash": {
    id: "medi-wash",
    title: "Medicated Healing Wash",
    category: "Services",
    price: "₹1,899",
    numericPrice: 1899,
    rating: 4.9,
    reviewsCount: 204,
    image: "https://scruffytofluffy.in/wp-content/uploads/2025/12/Ticks_Treatment_with_Scruffy_to_Fluffy_Badge_-_Medicated_Wash_Full_Body_Haircut_Tick__Flea_Removal_₹2499.webp",
    headline: "Veterinary-recommended antifungal, antibacterial & anti-itch bath",
    features: [
      "Therapeutic 10-minute medicated shampoo soak",
      "Soothes severe itching, hotspots, and bacterial dermatitis",
      "Ketoconazole / Chlorhexidine clinical formulations",
      "Hydrating oatmeal or aloe vera rinse",
      "Sterilized grooming van environment"
    ],
    fullDescription: "Specialized clinical bathing for pets suffering from persistent fungal rashes, red hotspots, allergies, or sensitive dermatitis. Carried out under strict sanitary protocols."
  }
};

export const TESTIMONIALS = [
  {
    petName: "Browny",
    ownerName: "Susan's dog",
    quote: "Kind friendly and professional, and best of all Browny absolutely loved them. I would recommend Scruffy to Fluffy to anyone looking for pet care.",
    rating: 5,
    tag: "Mobile Van Grooming"
  },
  {
    petName: "Tommy",
    ownerName: "Vikki's dog",
    quote: "Thank you Scruffy to Fluffy for doing such a great job caring for our Tommy! Such good care, really put my mind at ease. Thanks!",
    rating: 5,
    tag: "Deluxe Grooming"
  },
  {
    petName: "Leo",
    ownerName: "Rahul's Golden Retriever",
    quote: "Best pet grooming in Mumbai! The mobile van setup is fantastic, clean, and temperature controlled. Leo was completely relaxed and looked gorgeous.",
    rating: 5,
    tag: "Full Haircut & Medi Wash"
  },
  {
    petName: "Milo & Bella",
    ownerName: "Pooja's Cats",
    quote: "Cat grooming can be very tricky, but the team handled Milo and Bella with exceptional gentleness and patience. Highly recommended!",
    rating: 5,
    tag: "Cat Grooming"
  }
];

export const FAQS = [
  {
    question: "What time can I drop off and pick up my dog?",
    answer: "To help establish group play and routine, we like all dog drop-offs by 9am for daycare. For our Grooming on Wheels van service, we arrive directly at your doorstep at your pre-booked appointment time slot."
  },
  {
    question: "What should my dog bring for daycare / boarding?",
    answer: "Please bring a comfort item with the owner's scent (like a small blanket or towel), along with their regular food, treats, and any required medication with dosage instructions."
  },
  {
    question: "What does my dog do all day?",
    answer: "Your pet enjoys structured exercise, interactive play sessions, social time with compatible buddies, healthy eating breaks, and relaxing quiet rest periods in a clean, temperature-controlled environment."
  },
  {
    question: "How old does my dog have to be?",
    answer: "For daycare and mobile grooming, puppies must be at least 12-17 weeks (approx. 4 months) old and up to date on their core vaccinations to ensure safety for everyone."
  },
  {
    question: "How does the Grooming on Wheels mobile van work?",
    answer: "Our customized luxury grooming van drives right to your home or building in Mumbai or Navi Mumbai. The van is fully equipped with warm water, specialized pet baths, air conditioning, gentle dryers, and sterile grooming equipment. Your pet gets personalized 1-on-1 attention without the stress of travel or waiting cages."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book easily online using our booking form, via WhatsApp by clicking any 'Book Now' button, or by calling our helpline at +91 9004116634 / +91 9004117750."
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://scruffytofluffy.in/wp-content/uploads/2026/03/1.jpg",
    alt: "Groomed happy dog at Scruffy to Fluffy"
  },
  {
    url: "https://scruffytofluffy.in/wp-content/uploads/2026/03/2.jpg",
    alt: "Professional pet styling results"
  },
  {
    url: "https://scruffytofluffy.in/wp-content/uploads/2026/03/3.jpg",
    alt: "Clean and fluffy dog after bath"
  },
  {
    url: "https://scruffytofluffy.in/wp-content/uploads/2026/03/4.jpg",
    alt: "Gentle coat brushing and hair trimming"
  },
  {
    url: "https://scruffytofluffy.in/wp-content/uploads/2026/03/5.jpg",
    alt: "Happy pet transformation in Mumbai"
  }
];

export const ABOUT_CAROUSEL_IMAGES = [
  "https://scruffytofluffy.in/wp-content/uploads/2026/01/1.jpg",
  "https://scruffytofluffy.in/wp-content/uploads/2026/01/4.jpg",
  "https://scruffytofluffy.in/wp-content/uploads/2026/01/2.jpg",
  "https://scruffytofluffy.in/wp-content/uploads/2026/01/3.jpg"
];

export const HERO_ASSETS = {
  illustration1: "https://scruffytofluffy.in/wp-content/uploads/2022/06/illustration-1.svg",
  dogPhoto: "https://scruffytofluffy.in/wp-content/uploads/2022/06/iStock-1143440918.png",
  illustration2: "https://scruffytofluffy.in/wp-content/uploads/2022/06/illustration-2.svg",
  ovalBg: "https://scruffytofluffy.in/wp-content/uploads/2022/06/bg-oval-shape.svg",
  aboutPet: "https://scruffytofluffy.in/wp-content/uploads/2025/12/2.png",
  vanPhoto: "https://scruffytofluffy.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-11-at-16.39.54_3caf3e2a.jpg",
  centerPhoto: "https://scruffytofluffy.in/wp-content/uploads/2022/07/iStock-1170668075-1024x766.jpg"
};

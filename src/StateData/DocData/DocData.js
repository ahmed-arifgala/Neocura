const docData = [
  {
    docId: 1,
    docImg: "doc111",
    name: "Dr. Samra Sadaf",
    gender: "Female",
    specialization: [
      "Dermatologist",
      "Cosmetologist",
      "Cardiologist",
      "Neurologist",
      "Urologist",
    ],
    education: [
      {
        degree: "M.B.B.S",
        uniName: "Sharif Medical & Dental College",
        countryName: "Pakistan",
        yearOfGrad: "2015",
      },
      {
        degree: "M.C.P.S (Dermatology)",
        uniName: " Gujranwala Medical College",
        countryName: "Pakistan",
        yearOfGrad: "2021",
      },
    ],
    services: [
      "Acne Treatment",
      "Alopecia",
      "Antihistamine Treatment",
      "Body Contouring",
      "Boil",
    ],
    conditionsTreated: ["Acne", "Acne Scars", "Eczema", "Herpes", "Moles"],
    surgeriesPerformed: [],
    professionalMemberships: ["Pakistan Medical Commission (PMC) "],
    languagesSpoken: ["Urdu", "English", "Pashto", "Chinese"],
    experience: "5 Years",
    satisfiedPatients: 0.98,
    noOfReviews: 54,
    waitTime: 15,
    isPlatinumDoctor: true,
  },

  {
    docId: 2,
    docImg: "doc44",
    name: "Dr. Muhammad Khalid",
    gender: "Male",
    specialization: ["Orthopedic Surgeon", "Sports Medicine Specialist"],
    education: [
      {
        degree: "M.B.B.S",
        uniName: "University of California, San Francisco",
        countryName: "United States",
        yearOfGrad: "2012",
      },
      {
        degree: "M.D (Orthopedic Surgery)",
        uniName: "Stanford University School of Medicine",
        countryName: "United States",
        yearOfGrad: "2018",
      },
    ],
    services: [
      "Fracture Treatment",
      "Joint Replacement Surgery",
      "Arthroscopy",
      "Sports Injury Management",
    ],
    conditionsTreated: [
      "Sprains",
      "Strains",
      "Arthritis",
      "Tendonitis",
      "Fractures",
    ],
    surgeriesPerformed: ["Knee Replacement Surgery", "Shoulder Arthroscopy"],
    professionalMemberships: [
      "American Academy of Orthopaedic Surgeons (AAOS)",
      "American Orthopaedic Society for Sports Medicine (AOSSM)",
    ],
    languagesSpoken: ["English", "Spanish"],
    experience: "9 Years",
    satisfiedPatients: 0.95,
    noOfReviews: 78,
    waitTime: 20,
    isPlatinumDoctor: true,
  },

  {
    docId: 3,
    docImg: "doc33",
    name: "Dr. Noren Umer",
    gender: "Female",
    specialization: ["Pediatrician", "Neonatologist"],
    education: [
      {
        degree: "M.B.B.S",
        uniName: "All India Institute of Medical Sciences",
        countryName: "India",
        yearOfGrad: "2009",
      },
      {
        degree: "M.D (Pediatrics)",
        uniName: "Johns Hopkins University School of Medicine",
        countryName: "United States",
        yearOfGrad: "2013",
      },
    ],
    services: [
      "Well-Child Checkups",
      "Vaccinations",
      "Newborn Care",
      "Childhood Illness Management",
    ],
    conditionsTreated: [
      "Common Cold",
      "Asthma",
      "Gastroenteritis",
      "Developmental Delays",
      "Allergies",
    ],
    surgeriesPerformed: [],
    professionalMemberships: ["American Academy of Pediatrics (AAP)"],
    languagesSpoken: ["English", "Hindi"],
    experience: "12 Years",
    satisfiedPatients: 0.93,
    noOfReviews: 62,
    waitTime: 10,
    isPlatinumDoctor: false,
  },
  {
    docId: 4,
    docImg: "doc44",
    name: "Dr. Fahad Saleem",
    gender: "Male",
    specialization: ["Ophthalmologist", "Retina Specialist"],
    education: [
      {
        degree: "M.B.B.S",
        uniName: "University of Melbourne",
        countryName: "Australia",
        yearOfGrad: "2007",
      },
      {
        degree: "F.R.A.N.Z.C.O (Ophthalmology)",
        uniName: "Royal Australian and New Zealand College of Ophthalmologists",
        countryName: "Australia",
        yearOfGrad: "2013",
      },
    ],
    services: [
      "Cataract Surgery",
      "Retinal Detachment Repair",
      "Macular Degeneration Treatment",
      "Diabetic Eye Care",
    ],
    conditionsTreated: [
      "Glaucoma",
      "Macular Edema",
      "Retinitis Pigmentosa",
      "Uveitis",
      "Dry Eyes",
    ],
    surgeriesPerformed: ["Vitrectomy", "Laser Eye Surgery"],
    professionalMemberships: [
      "Royal Australian and New Zealand College of Ophthalmologists (RANZCO)",
    ],
    languagesSpoken: ["English", "Korean"],
    experience: "14 Years",
    satisfiedPatients: 0.96,
    noOfReviews: 105,
    waitTime: 30,
    isPlatinumDoctor: true,
  },

  {
    docId: 5,
    docImg: "doc33",
    name: "Dr. Sofia Aslam",
    gender: "Female",
    specialization: ["Psychiatrist", "Psychotherapist"],
    education: [
      {
        degree: "M.D",
        uniName: "Universidad de Buenos Aires",
        countryName: "Argentina",
        yearOfGrad: "2010",
      },
      {
        degree: "M.Sc (Psychiatry)",
        uniName: "Kings College London",
        countryName: "United Kingdom",
        yearOfGrad: "2016",
      },
    ],
    services: [
      "Depression Therapy",
      "Anxiety Management",
      "Cognitive Behavioral Therapy",
      "Stress Management",
    ],
    conditionsTreated: [
      "Major Depressive Disorder",
      "Generalized Anxiety Disorder",
      "Bipolar Disorder",
      "Post-Traumatic Stress Disorder",
      "Obsessive-Compulsive Disorder",
    ],
    surgeriesPerformed: [],
    professionalMemberships: [
      "American Psychiatric Association (APA)",
      "Royal College of Psychiatrists (RCPsych)",
    ],
    languagesSpoken: ["Spanish", "English"],
    experience: "11 Years",
    satisfiedPatients: 0.92,
    noOfReviews: 79,
    waitTime: 25,
    isPlatinumDoctor: false,
  },

  {
    docId: 6,
    docImg: "doc44",
    name: "Dr. Dawood Khan",
    gender: "Male",
    specialization: ["Dentist", "Orthodontist"],
    education: [
      {
        degree: "D.D.S",
        uniName: "University of Toronto",
        countryName: "Canada",
        yearOfGrad: "2010",
      },
      {
        degree: "M.Sc (Orthodontics)",
        uniName: "Harvard University School of Dental Medicine",
        countryName: "United States",
        yearOfGrad: "2014",
      },
    ],
    services: ["Teeth Cleaning", "Braces", "Invisalign", "Dental Implants"],
    conditionsTreated: [
      "Malocclusion",
      "Crooked Teeth",
      "Overbite",
      "Underbite",
      "TMJ Disorders",
    ],
    surgeriesPerformed: [],
    professionalMemberships: [
      "American Association of Orthodontists (AAO)",
      "Canadian Association of Orthodontists (CAO)",
    ],
    languagesSpoken: ["English", "French"],
    experience: "13 Years",
    waitTime: 25,
    satisfiedPatients: 0.94,
    noOfReviews: 88,
    isPlatinumDoctor: true,
  },
];

const locData = [
  {
    docId: 1,

    onlineConsultation: [
      {
        name: "Online Video Consultation",
        fees: 1200,
        location: "Video Consultaion",
        timetable: {
          Monday: "06:00 pm - 10:00 pm",
          Tuesday: "06:00 pm - 10:00 pm",
          Wednesday: "06:00 pm - 10:00 pm",
          Thursday: "06:00 pm - 10:00 pm",
          Friday: "",
          Saturday: "05:00 pm - 11:00 pm",
          Sunday: "05:00 pm - 11:00 pm",
        },
      },
    ],

    hospital: [
      {
        name: "Ziauddin Hospital (ZMH)",
        location: "Abdul Rehman Road, Karachi",
        fees: 1500,
        timetable: {
          Monday: "08:00 am - 12:00 pm",
          Tuesday: "08:00 am - 12:00 pm",
          Wednesday: "",
          Thursday: "08:00 am - 12:00 pm",
          Friday: "08:00 am - 12:00 pm",
          Saturday: "09:00 am - 01:00 pm",
          Sunday: "09:00 am - 01:00 pm",
        },
      },

      {
        name: "Agha Khan Hospital (AHU)",
        location: "Stadium Road, Karachi",
        fees: 1900,
        timetable: {
          Monday: "01:00 am - 03:00 pm",
          Tuesday: "01:00 am - 03:00 pm",
          Wednesday: "01:00 am - 03:00 pm",
          Thursday: "01:00 am - 03:00 pm",
          Friday: "01:00 am - 03:00 pm",
          Saturday: "",
          Sunday: "03:00 am - 05:00 pm",
        },
      },
    ],

    clinic: [
      {
        name: "Dr Sadaf Clinic",
        location: "Bahadurabad Street 5, Karachi",
        fees: 900,
        timetable: {
          Monday: "04:00 am - 05:00 pm",
          Tuesday: "04:00 am - 05:00 pm",
          Wednesday: "04:00 am - 05:00 pm",
          Thursday: "04:00 am - 05:00 pm",
          Friday: "04:00 am - 05:00 pm",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
  },

  {
    docId: 2,

    onlineConsultation: [
      {
        name: "Online Video Consultation",
        fees: 1000,
        location: "Video Consultaion",

        timetable: {
          Monday: "09:00 am - 12:00 pm",
          Tuesday: "09:00 am - 12:00 pm",
          Wednesday: "09:00 am - 12:00 pm",
          Thursday: "09:00 am - 12:00 pm",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    hospital: [
      {
        name: "Agha Khan Hospital",
        location: "Main Street, Karachi",
        fees: 1800,
        timetable: {
          Monday: "08:00 am - 12:00 pm",
          Tuesday: "08:00 am - 12:00 pm",
          Wednesday: "08:00 am - 12:00 pm",
          Thursday: "08:00 am - 12:00 pm",
          Friday: "08:00 am - 12:00 pm",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    clinic: [
      {
        name: "Khalid Clinic",
        location: "ABC Road, City",
        fees: 950,
        timetable: {
          Monday: "03:00 pm - 06:00 pm",
          Tuesday: "03:00 pm - 06:00 pm",
          Wednesday: "03:00 pm - 06:00 pm",
          Thursday: "03:00 pm - 06:00 pm",
          Friday: "03:00 pm - 06:00 pm",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
  },

  {
    docId: 3,

    onlineConsultation: [],

    hospital: [
      {
        name: "Jamal Noor Hospital",
        location: "Bahadurabad, Karachi",
        fees: 1500,
        timetable: {
          Monday: "09:00 am - 01:00 pm",
          Tuesday: "09:00 am - 01:00 pm",
          Wednesday: "09:00 am - 01:00 pm",
          Thursday: "09:00 am - 01:00 pm",
          Friday: "09:00 am - 01:00 pm",
          Saturday: "",
          Sunday: "",
        },
      },

      {
        name: "Zubaida Medical Center",
        location: "Bahadurabad, Karachi",
        fees: 1200,
        timetable: {
          Monday: "05:00 pm - 09:00 pm",
          Tuesday: "05:00 pm - 09:00 pm",
          Wednesday: "05:00 pm - 09:00 pm",
          Thursday: "05:00 pm - 09:00 pm",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    clinic: [
      {
        name: "Noren Clinic",
        location: "Street 8, Lahore",
        fees: 900,
        timetable: {
          Monday: "02:00 pm - 05:00 pm",
          Tuesday: "02:00 pm - 05:00 pm",
          Wednesday: "02:00 pm - 05:00 pm",
          Thursday: "02:00 pm - 05:00 pm",
          Friday: "02:00 pm - 05:00 pm",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
  },

  {
    docId: 4,

    onlineConsultation: [
      {
        name: "Online Video Consultation",
        fees: 1100,
        location: "Video Consultaion",

        timetable: {
          Monday: "04:00 pm - 08:00 pm",
          Tuesday: "04:00 pm - 08:00 pm",
          Wednesday: "04:00 pm - 08:00 pm",
          Thursday: "04:00 pm - 08:00 pm",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    hospital: [],

    clinic: [
      {
        name: "Dr. Fahad Clinic",
        location: "Main Road, Lahore",
        fees: 850,
        timetable: {
          Monday: "10:00 am - 02:00 pm",
          Tuesday: "10:00 am - 02:00 pm",
          Wednesday: "10:00 am - 02:00 pm",
          Thursday: "10:00 am - 02:00 pm",
          Friday: "10:00 am - 02:00 pm",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
  },

  {
    docId: 5,

    onlineConsultation: [],

    hospital: [
      {
        name: "City General Hospital",
        location: "Main Avenue, Karachi",
        fees: 1600,
        timetable: {
          Monday: "09:00 am - 01:00 pm",
          Tuesday: "09:00 am - 01:00 pm",
          Wednesday: "09:00 am - 01:00 pm",
          Thursday: "09:00 am - 01:00 pm",
          Friday: "09:00 am - 01:00 pm",
          Saturday: "",
          Sunday: "",
        },
      },

      {
        name: "Park View Hospital",
        location: "Clifton, Karachi",
        fees: 1100,
        timetable: {
          Monday: "08:00 am - 12:00 pm",
          Tuesday: "08:00 am - 12:00 pm",
          Wednesday: "08:00 am - 12:00 pm",
          Thursday: "08:00 am - 12:00 pm",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    clinic: [],
  },

  {
    docId: 6,
    onlineConsultation: [
      {
        name: "Online Video Consultation",
        fees: 1200,
        location: "Video Consultaion",

        timetable: {
          Monday: "09:00 am - 12:00 pm",
          Tuesday: "09:00 am - 12:00 pm",
          Wednesday: "09:00 am - 12:00 pm",
          Thursday: "09:00 am - 12:00 pm",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    hospital: [
      {
        name: "ABC General Hospital",
        location: "Main Street, City",
        fees: 1550,
        timetable: {
          Monday: "08:00 am - 12:00 pm",
          Tuesday: "08:00 am - 12:00 pm",
          Wednesday: "08:00 am - 12:00 pm",
          Thursday: "08:00 am - 12:00 pm",
          Friday: "08:00 am - 12:00 pm",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    clinic: [
      {
        name: "Dawood Health Clinic",
        location: "ABC Road, City",
        fees: 900,
        timetable: {
          Monday: "03:00 pm - 06:00 pm",
          Tuesday: "03:00 pm - 06:00 pm",
          Wednesday: "03:00 pm - 06:00 pm",
          Thursday: "03:00 pm - 06:00 pm",
          Friday: "03:00 pm - 06:00 pm",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
  },
];

const docDetailInfoQ = [
  "Who is a Dermatologist?",
  "What is Dermatology?",
  "When should you see a Dermatologist?",
];

const docDetailInfoA = [
  "A dermatologist is a doctor who specializes in the treatment of conditions that affect the skin, hair, and nails. Dermatologists are trained to diagnose and treat over 3000 conditions like acne, eczema, psoriasis, etc., and can also perform certain cosmetic procedures.",
  "Dermatology is the field of medicine dealing with the diagnosis, research, study, management, and treatment of conditions of the skin, hair, and nails.",
  "If you have stubborn acne, scars, stretch marks, excess cellulite, dark discolorations, hyperpigmentation, itches, rashes, or abnormally blushing skin, booking an appointment with the best dermatologist in Islamabad is a good idea. Moreover, if you’re facing one of the following symptoms of the skin, nails, or hair you should visit a dermatologist. If you are experiencing one or more of these symptoms, you should consult an expert dermatologist rather than ignoring the problem or attempting to treat it yourself. Moreover, if you are looking for cosmetic treatments to improve the texture, look, and tone of your skin, hair, and nails the best skin doctor in Islamabad can help you. Dermatologists can perform cosmetic procedures for skin whitening, skin tightening, hair removal, etc. to enhance your look and personality. People who are conscious of their appearance often opt for such treatments.",
];

const FAQData = [
  {
    question: "What causes acne?",
    answer:
      "Acne is primarily caused by excess oil production, clogged pores, bacteria, and inflammation. Hormonal changes, certain medications, and genetic factors can also contribute to acne.",
  },
  {
    question: "How can I prevent sunburn?",
    answer:
      "To prevent sunburn, it is important to apply sunscreen with a high SPF, wear protective clothing, seek shade during peak sun hours, and avoid tanning beds. Reapply sunscreen every two hours and after swimming or sweating.",
  },
  {
    question: "What are the common signs of skin cancer?",
    answer:
      "Common signs of skin cancer include changes in the appearance of moles or growths, such as asymmetry, irregular borders, color variations, and changes in size or thickness. It is important to consult a dermatologist if you notice any suspicious changes on your skin.",
  },
  {
    question: "How often should I moisturize my skin?",
    answer:
      "The frequency of moisturizing depends on your skin type. Generally, it is recommended to moisturize your skin twice a day, in the morning and evening. However, if you have dry skin, you may need to moisturize more frequently to keep your skin hydrated.",
  },
];

export { docData, locData, docDetailInfoQ, docDetailInfoA, FAQData };

import client1 from "/images/client/client1.jpg";
import client2 from "/images/client/client2.jpg";
import client3 from "/images/client/client3.jpg";
import client4 from "/images/client/client4.jpg";
import client5 from "/images/client/client5.jpg";
import client6 from "/images/client/client6.jpg";
import reconstructions from "/images/Treatd6.jpg";
import implants from "/images/Treatd1.jpg";
import Crowns from "/images/Treatd3.jpg";
import orthodontics from "/images/Treatd5.jpg";
import RootCanal from "/images/treatd1.jpeg";
import TeethWhitening from "/images/Treatd4.jpg";


import AB1 from "/images/AB/AB1.jpg";
import AB2 from "/images/AB/AB2.jpg";
import AB3 from "/images/AB/AB3.jpg";
import AB4 from "/images/AB/AB4.jpg";

import A1 from "/images/AB/A1.jpg";
import A2 from "/images/AB/A2.jpg";
import A3 from "/images/AB/A3.jpg";
import A4 from "/images/AB/A4.jpg";

import B1 from "/images/AB/B1.jpg";
import B2 from "/images/AB/B2.jpg";
import B3 from "/images/AB/B3.jpg";
import B4 from "/images/AB/B4.jpg";


import GroupAbout from "/images/Group.png";
import GroupHome from "/images/DentistGroup.jpg";


import Book from "/images/Book.jpg";


const assets = {
   client1,
   client2,
   client3,
   client4,
   client5,
   client6,
   reconstructions,
   implants,
   Crowns,
   orthodontics,
   RootCanal,
   TeethWhitening,
   A1, A2, A3, A4, B1, B2, B3, B4, AB1, AB2, AB3, AB4,
   GroupAbout,
   Book
}




const navLinks = [
  {
    name: "About Us",
    link: "/about",
    alt: "Learn more about us"
  },
  {
    name: "Services",
    link: "/services",
    alt: "View All Our Services"
  },
  {
    name: "Patients Gallery",
    link: "/patients-gallery",
    alt: "View our previous patients results and reviews"
  },
  {
    name: "Contact Us",
    link: "/contact",
    alt: "Visit contact section"
  },
  {
    name: "Location",
    link: "/location",
    alt: "Location Of Dental Clinic"
  }

];









const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];











  const services = [
    {
      id: 1,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic treatments",
      features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers"],
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      image: "/images/Treatd2.jpg"
    },
    {
      id: 2,
      title: "Preventive Care",
      description: "Keep your teeth healthy with regular checkups and cleanings",
      features: ["Regular Cleanings", "Fluoride Treatments", "Oral Exams"],
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-green-50",
      image: "/images/Treatd7.jpg"
    },
    {
      id: 3,
      title: "Restorative Dentistry",
      description: "Repair and restore damaged teeth to full functionality",
      features: ["Dental Crowns", "Fillings", "Root Canal Therapy"],
      color: "from-purple-500 to-violet-400",
      bgColor: "from-purple-600 to-purple-400",
      image: "/images/Treatd3.jpg"
    },
    {
      id: 4,
      title: "Orthodontics",
      description: "Straighten your teeth with modern orthodontic solutions",
      features: ["Clear Aligners", "Traditional Braces", "Retainers"],
      color: "from-pink-500 to-rose-400",
      bgColor: "bg-pink-50",
      image: "/images/Treatd6.jpg"
    },
    {
      id: 5,
      title: "Oral Surgery",
      description: "Advanced surgical procedures for complex dental issues.",
      features: ["Tooth Extractions", "Dental Implants", "Wisdom Teeth Removal"],
      color: "from-orange-500 to-amber-400",
      bgColor: "bg-orange-50",
      image: "/images/Treatd1.jpg"
    },
    {
      id: 6,
      title: "Emergency Care",
      description: "24/7 emergency dental care when you need it most",
      features: ["Pain Relief", "Urgent Repairs", "Same-Day Appointments"],
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-red-50",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];




const gallery = [
  
  {
    imgPath: AB1,
    title: "Her Smile, Finally Free",
    desc: "This tailored approach addresses dental issues, such as missing teeth, damage and trauma, and aesthetic concerns, to create a seamless and functional result. ",
    link : "/reconstructions"
  },


  {
    imgPath: AB2,
    title: "From Pain to Peace",
    desc: "Comprehensive procedure involves the replacement of an entire upper or lower arch of teeth with a series of dental implants, providing unparalleled functionality. ",
    link : "/dental-implants"
  },
  {
    imgPath: AB4,
    title: "Gap No More",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    link : "crowns"
  },
  {
    imgPath: AB3,
    title: "Chipped Tooth",
    desc: "Orthodontic solutions, including traditional braces and Invisalign®, are dedicated to achieving a straighter, healthier smile by addressing misaligned teeth and bite issues. ",
    link : "/orthodontics"
  },

];









const Team2 = [
  { img : "/images/Team1.jpg",
    alt : "Emma Sullivan, Dental Hygienist",
    desc : [
              "Emma Sullivan",
               " (Dental Hygienist)"
           ]
  },
  { img : "/images/Team2.png",
    alt : "Liam Anderson, Dental Laboratory Technician",
    desc : [
              "Liam Anderson",
              " (Dental Laboratory Technician)"
           ]
  },
  { img : "/images/Team3.jpg",
    alt : "Ava Mitchell, Dental Assistant",
    desc : [
              "Ava Mitchell",
              " (Dental Assistant)"
           ]
  },
  { img : "/images/Team4.webp",
    alt : "Ethan Carter, Orthodontic Assistant",
    desc :  [
              "Ethan Carter",
              " (Orthodontic Assistant)"
            ]
  },
    { img : "/images/Team5.jpg",
    alt : "Sophia Reynolds, ",
    desc : [ "Sophia Reynolds, Receptionist",
              " (Receptionist)"
           ]

  }
]




const blogs = [
  { 
    alt : "Behind the scenes of making Mohammed Maaz Rayeen's portfolio and also making it accessible and seo rich ",
    title :  "Reconstructions",
    descs1 : [
        "Dental reconstruction refers to the process of restoring the function, integrity, and aesthetics of teeth that have been damaged or lost due to trauma, decay, disease, or congenital defects. It can range from minor repairs such as fillings to full-mouth rehabilitation involving advanced prosthetic and surgical procedures. Dental reconstruction is crucial for improving oral health, enhancing appearance, and restoring the ability to chew and speak properly.",
        "Full mouth reconstruction (FMR) is a comprehensive approach to restoring all or most of the teeth in the upper and lower jaws. This is often necessary for patients with widespread dental issues caused by prolonged neglect, systemic disease, or accidents. FMR may combine multiple procedures, such as crowns, bridges, implants, root canals, and periodontal treatments, into a carefully coordinated treatment plan. It typically requires input from various dental specialists, including prosthodontists, periodontists, and oral surgeons.",
        "Modern dental reconstruction utilizes a variety of advanced materials and technologies to achieve durable and natural-looking results. Ceramics, composite resins, and zirconia are commonly used for their strength and aesthetic qualities. Digital imaging, 3D printing, and CAD/CAM (computer-aided design and manufacturing) technologies have revolutionized treatment planning and the fabrication of dental prosthetics, allowing for more precise fits and faster turnaround times.",
    ],

    descs2 : [
        "Dental reconstruction refers to the process of restoring the function, integrity, and aesthetics of teeth that have been damaged or lost due to trauma, decay, disease, or congenital defects. It can range from minor repairs such as fillings to full-mouth rehabilitation involving advanced prosthetic and surgical procedures. Dental reconstruction is crucial for improving oral health, enhancing appearance, and restoring the ability to chew and speak properly.",
        "Full mouth reconstruction (FMR) is a comprehensive approach to restoring all or most of the teeth in the upper and lower jaws. This is often necessary for patients with widespread dental issues caused by prolonged neglect, systemic disease, or accidents. FMR may combine multiple procedures, such as crowns, bridges, implants, root canals, and periodontal treatments, into a carefully coordinated treatment plan. It typically requires input from various dental specialists, including prosthodontists, periodontists, and oral surgeons.",
        "Modern dental reconstruction utilizes a variety of advanced materials and technologies to achieve durable and natural-looking results. Ceramics, composite resins, and zirconia are commonly used for their strength and aesthetic qualities. Digital imaging, 3D printing, and CAD/CAM (computer-aided design and manufacturing) technologies have revolutionized treatment planning and the fabrication of dental prosthetics, allowing for more precise fits and faster turnaround times.",
    ],
    info : "Dental implants play a pivotal role in contemporary dental reconstruction. These titanium posts are surgically embedded into the jawbone to act as artificial roots, providing a stable foundation for crowns, bridges, or dentures. Implants not only restore functionality but also help prevent bone loss and maintain facial structure. They are often the preferred option for long-term tooth replacement due to their durability and natural appearance.",
    img: reconstructions
  }
]




const singleslider = [
  { 
    title :  "From Yellow Teeth to a Bright Smile",
    descs1 : [
        "Prior to visiting the dentist, the patient struggled with a variety of dental issues that affected both appearance and function. Yellowing and deep staining of the teeth were noticeable, caused by years of coffee consumption and inadequate oral hygiene. Several teeth were chipped or cracked from past injuries, and there were visible gaps due to minor misalignments. These issues not only impacted the aesthetics of the patient’s smile but also caused a significant drop in self-confidence, especially in social and professional settings.",
        "In addition to cosmetic concerns, the patient reported frequent oral discomfort, particularly when consuming hot or cold foods. Sensitivity in several areas made daily eating a painful experience, and signs of early gum disease—such as redness, swelling, and occasional bleeding—were present. Poor alignment contributed to uneven bite pressure, which caused jaw soreness and made chewing difficult. These cumulative problems led to growing anxiety about long-term oral health and a hesitancy to smile or speak freely around others.",
    ],

    descs2 : [
        "Following a comprehensive dental treatment plan, the patient experienced a dramatic improvement in both the look and health of their smile. Professional teeth whitening brightened the enamel by several shades, while custom veneers corrected the shape and color of chipped teeth. Orthodontic work helped close gaps and align the bite, creating a more symmetrical and natural smile. These changes had an immediate effect on the patient’s confidence, making them more comfortable during conversations and in front of a camera.",
        "Functionally, the benefits were just as significant. Sensitivity and pain were reduced through the treatment of cavities, replacement of old fillings, and the introduction of a better oral hygiene routine. The gums became healthier with deep cleanings and consistent dental check-ups, reducing inflammation and eliminating bleeding. Chewing became easier and more comfortable, and jaw tension decreased as bite alignment was corrected. Overall, the dental work greatly enhanced the patient’s quality of life, promoting both physical comfort and emotional well-being.",
    ],
    before: "/images/AB/B1.jpg",
    after : "/images/AB/A1.jpg" ,
    altbefore: "Before teeth whitening showing yellow and stained teeth",
    altafter: "After teeth whitening showing bright and whitened teeth",
    treatment : "Teeth Whitening",
    alt : "Before and after treatment comparison: left side shows before treatment, right side shows after treatment"
  }
]




const DentistBriefInfo = [
  {
    img : "/images/Dentist1.jpg",
    name : "Dr. James Bennett",
    orient : "1",
    details : ["Dr. James Bennett is a highly skilled and compassionate dentist who is deeply committed to delivering exceptional care with a personal touch. With a strong emphasis on preventive dentistry and patient education, he empowers individuals and families to make informed decisions about their oral health. Known for his gentle chairside manner and meticulous attention to detail, Dr. Bennett strives to create a welcoming, stress-free environment where patients of all ages feel comfortable and respected. Whether providing routine cleanings or advanced restorative treatments, he is dedicated to helping every patient achieve a healthy, confident smile that lasts a lifetime."
    ],
    shape : "rectangle",
    page : "about",
    alt : "Dr. James Bennett, lead dentist at Pure Harmony Dental in Austin, Texas"
    },
  {
    img : "/images/Dentist2.jpg",
    name : "Dr. Michael Lawson",
    orient : "0",
    details : [
      "Dr. Michael Lawson is a dedicated and detail-oriented dentist known for his compassionate care and commitment to excellence. With a strong foundation in preventive, restorative, and cosmetic dentistry, he helps patients achieve healthy, beautiful smiles in a welcoming and supportive environment. Dr. Lawson believes in building lasting relationships through trust, education, and personalized attention—ensuring that every patient feels heard, respected, and genuinely cared for. Whether treating a simple cavity or performing a full smile makeover, he brings precision, empathy, and a deep passion for oral health to every appointment.",
    ],
    shape : "rectangle",
    page : "about",
    alt : "Dr. Michael Lawson, lead dentist at Pure Harmony Dental in Austin, Texas"
  }
]



const DentistLongInfo = [
  {
    img : "/images/Dentist1.jpg",
    name : "Dr. James Bennett",
    orient : "0",
    details : ["Dr. James Bennett is a trusted dental professional whose approach to care is rooted in compassion, integrity, and excellence. A graduate with a Doctor of Dental Surgery (DDS) degree, Dr. Bennett has built his practice around the belief that oral health is deeply connected to overall wellness—and that truly effective care begins with listening. He takes the time to understand each patient’s concerns, lifestyle, and goals before crafting personalized treatment plans that align with their needs and values.",
                "With extensive experience in preventive, cosmetic, and restorative dentistry, Dr. Bennett combines evidence-based techniques with a gentle, reassuring touch. Patients appreciate his calm demeanor, thorough explanations, and genuine commitment to their comfort. Beyond clinical expertise, he is passionate about patient education, believing that informed patients are empowered patients. Whether he's treating a child during their first dental visit or guiding an adult through complex dental work, Dr. Bennett approaches every case with the same level of care, precision, and respect.",
                "Outside of the office, Dr. Bennett stays up to date with the latest advancements in dental science and technology through continuing education. He is also an active member of the community, often volunteering his time for outreach programs focused on dental health awareness. For Dr. Bennett, dentistry is more than a profession—it’s a way to make a meaningful difference in people’s lives, one smile at a time."
    ],
    shape : "rectangle",
    page : "aboutus",
    alt : "Dr. James Bennett, lead dentist at Pure Harmony Dental in Austin, Texas"
    },
  {
    img : "/images/Dentist2.jpg",
    name : "Dr. Michael Lawson",
    orient : "1",
    details : ["Dr. Michael Lawson is a respected dental professional who approaches patient care with a blend of clinical expertise, genuine empathy, and a strong commitment to whole-person wellness. Earning his Doctor of Dental Surgery (DDS) degree from a leading dental institution, Dr. Lawson has spent years honing his skills in all aspects of general, cosmetic, and restorative dentistry. He believes that a healthy smile is not just about aesthetics or oral function—it’s about confidence, comfort, and overall quality of life.",
               "Known for his calm demeanor and patient-first philosophy, Dr. Lawson takes time to understand each individual’s needs, values, and goals. He prioritizes patient education and communication, ensuring that every treatment plan is tailored and transparent. From routine checkups to complex dental procedures, Dr. Lawson is committed to using the latest techniques and technology to provide gentle, effective, and lasting results.",
               "Beyond the operatory, Dr. Lawson continues to expand his knowledge through ongoing professional education and training, staying current with advances in dental science and innovations in care. Outside of dentistry, he enjoys spending time with his family, exploring the outdoors, and volunteering in local community health programs. Dr. Lawson’s mission is to create a dental experience that is positive, empowering, and centered on trust—where patients not only achieve optimal oral health but feel truly valued every step of the way."   
              ],
    shape : "rectangle",
    page : "aboutus",
    alt : "Dr. Michael Lawson, lead dentist at Pure Harmony Dental in Austin, Texas"
  }
]








const ClinicInfo = [
  
  {
    img : "/images/Clinic.jpg",
    name : "A Holistic Approach to Dentistry",
    orient : "1",
    details : ["At Healthy Smile Dentistry, we believe that oral health is a vital part of your whole-body wellness. That’s why we approach dentistry with a thoughtful balance of science, care, and intention. Our clinic is a space where modern technology meets mindful practices—offering biocompatible treatments, minimally invasive techniques, and a calm, supportive environment. From the moment you walk in, our goal is to help you feel informed, empowered, and truly cared for. Whether you're seeking preventative care or complex restorative solutions, we’re here to support your journey toward a healthier smile—and a healthier you."
    ],
    shape : "rectangle"
    },
]


const TeamInfo = [
  
  {
    imglink : GroupHome,
    title : "Meet the team",
    orient : "0",
    details : ["Our dental team is a close-knit group of professionals united by a deep passion for patient-centered care. Led by Dr. James Bennett, we bring together diverse skills and a shared dedication to treating each person with compassion, respect, and a genuine desire to help. We take the time to truly listen—because your goals, values, and comfort matter to us. With a family-focused approach and a warm, welcoming atmosphere, we’re here not only to care for your teeth but to build lasting relationships based on trust and transparency. At Pure Harmony Dental, you’re more than just a patient—you’re part of our dental family."
    ],
    alt : "Team of expert dentists at Pure Harmony Dental in Austin, Texas"
    },
]


const TeamInfo2 = [
  
  {
    imglink : GroupAbout,
    title : "Your health, comfort, and well-being are our top priorities!",
    orient : "1",
    details : [""],
    alt : "Team of expert dentists at Pure Harmony Dental in Austin, Texas"
    },
]



const FrontPage = [
  
  {
      text1 : [
          "Putting Your Smile",
          "First, Always"
      ],

      text2 : [
          "Your Smile. Our Passion.",
          "Bye Bye"
      ]
    },
]




const faqData = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in their original condition. Items must be unused and in their original packaging. Refunds are processed within 5-7 business days after we receive your return."
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days. Express shipping is available and takes 1-2 business days. International shipping may take 7-14 business days depending on your location."
    },
    {
      id: 3,
      question: "Do you offer customer support?",
      answer: "Yes! Our customer support team is available 24/7 via chat, email, or phone. We're here to help with any questions or concerns you may have about your order or our products."
    },
    {
      id: 4,
      question: "Can I track my order?",
      answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through encrypted connections."
    },
    {
      id: 6,
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. You can see the exact shipping cost for your country during checkout."
    }
  ];






  const testimonials2 = [
  {
    name: "Gavin Rhodes",
    mentions: "@gavinrh",
    review: "I recently had a full dental cleaning and evaluation with Dr. Michael Lawson, and I couldn't be more impressed with the entire experience.",
    imgPath: client1,
    color: "#700a5d",
  },
  {
    name: "Ivy Delgado",
    mentions: "@Vylgado",
    review: "I went to see Dr. James Bennett after a friend recommended him for cosmetic dentistry, and I have to say the results were even better than I imagined.",
    imgPath: client6,
    color: "#0b1d63",
  },
  {
    name: "Leo Navarro",
    mentions: "@leonarro",
    review: "I brought my teenage son in for a routine exam with Dr. Michael Lawson, and I was blown away by how great he was with younger patients. ",
    imgPath: client3,
    color: "#86410a",
  },
  {
    name: "Elias Granger",
    mentions: "@elinger",
    review:"Dr. James Bennett is, hands down, one of the most thorough and attentive dentists I’ve ever visited. ",
    imgPath: client4,
    color: "#860f54",
  },
  {
    name: "Tessa Monroe",
    mentions: "@montess",
    review: "Dr. Michael Lawson didn't shame me for the gap in visits but instead focused on a positive plan to get my dental health back on track.",
    imgPath: client5,
    color: 	"#6AA6BB",
  },
  {
    name: "Miles Thatcher",
    mentions: "@mithat",
    review: "I had a complex dental issue involving a cracked molar and some sensitivity that had been bothering me for months.",
    imgPath: client2,
    color: "#9E65B1",
  },
];







const testimonials = [
  {
    name: "Gavin Rhodes",
    mentions: "@gavinrh",
    review: "I recently had a full dental cleaning and evaluation with Dr. Michael Lawson, and I couldn't be more impressed with the entire experience. From the moment I walked into the clinic, I was greeted by a warm and professional staff who made the check-in process easy. The office is spotless and feels calming, which really helped ease my nerves. Dr. Lawson took his time explaining my x-rays and answering all my questions without ever making me feel rushed. He was incredibly gentle during the cleaning, and I appreciated how he explained each step of what he was doing. It's clear he genuinely cares about his patients’ comfort and long-term oral health. I left feeling well-informed and confident about my dental care plan moving forward. Highly recommend!",
    imgPath: client1,
    color: "#700a5d",
  },
  {
    name: "Ivy Delgado",
    mentions: "@Vylgado",
    review: "I went to see Dr. James Bennett after a friend recommended him for cosmetic dentistry, and I have to say the results were even better than I imagined. I had been self-conscious about a chipped front tooth for years, and Dr. Bennett suggested bonding as a minimally invasive option. He walked me through the process and even showed before-and-after examples of similar cases, which made me feel much more confident in the decision. The procedure was quick, painless, and the outcome looks completely natural - no one would ever guess I had work done. Beyond that, his team was organized, friendly, and clearly experienced in handling both cosmetic and general dentistry. I’ll be going back for all my future dental needs.",
    imgPath: client6,
    color: "#0b1d63",
  },
  {
    name: "Leo Navarro",
    mentions: "@leonarro",
    review: "I brought my teenage son in for a routine exam with Dr. Michael Lawson, and I was blown away by how great he was with younger patients. My son usually gets anxious before any kind of medical appointment, but Dr. Lawson was incredibly patient and kind, explaining everything in terms my son could understand. The way he balances professionalism with a friendly, reassuring demeanor is honestly a gift. He didn’t push unnecessary treatments but did recommend a few orthodontic considerations, which he explained with evidence and clarity. I really appreciate a dentist who cares about educating families, not just treating them. This is now our go-to dental office.",
    imgPath: client3,
    color: "#86410a",
  },
  {
    name: "Elias Granger",
    mentions: "@elinger",
    review: "Dr. James Bennett is, hands down, one of the most thorough and attentive dentists I’ve ever visited. I went in for what I thought was a routine checkup, but he identified the early signs of a gum issue that previous dentists had overlooked. He took extra time to go over a tailored hygiene routine with me and recommended some simple changes that made a huge difference within just a few weeks. I also appreciated that he wasn’t overly aggressive with treatment options - he focused on prevention and education first, which I found really refreshing. The clinic runs like clockwork, and the staff are always upbeat and efficient. I’ve already recommended him to two coworkers.",
    imgPath: client4,
    color: "#860f54",
  },
  {
    name: "Tessa Monroe",
    mentions: "@montess",
    review: "After avoiding the dentist for a few years due to a bad experience elsewhere, I finally booked an appointment with Dr. Michael Lawson, and I’m so glad I did. He has a calm, compassionate approach that immediately put me at ease. He didn’t shame me for the gap in visits but instead focused on a positive plan to get my dental health back on track. During the deep cleaning, he paused several times to check in on my comfort level, and even the injections for the numbing agent were nearly painless. His team provided a full treatment plan with transparent pricing and answered all of my questions. I can’t overstate how relieved I am to have found a dentist I can trust again.",
    imgPath: client5,
    color: "#094b61",
  },
  {
    name: "Miles Thatcher",
    mentions: "@mithat",
    review: "I had a complex dental issue involving a cracked molar and some sensitivity that had been bothering me for months. Dr. James Bennett was able to see me quickly, and from the consultation alone, I could tell I was in good hands. He used high-tech imaging equipment to diagnose the problem, and then clearly laid out all my treatment options, including pros, cons, and costs. I opted for a crown, and the entire process - from the temporary to the final fitting - was smooth and painless. The crown fits perfectly and looks completely natural. What impressed me most was how Dr. Bennett followed up personally a few days later to make sure everything felt right. That kind of service is rare these days.",
    imgPath: client2,
    color: "#4e0a70",
  },
];







  // Sample images - replace with your actual images
  const slides = [
    {
      id: 1,
      image: 'images/Office2.jpg',
      title: 'Waiting Hall',
    },
    {
      id: 2,
      image: 'images/Entrance.jpg',
      title: 'Entrance of the Dentistry',
    },
    {
      id: 3,
      image: '/images/Desk.jpg',
      title: 'Reception Area',
    },
    {
      id: 4,
      image: '/images/Clinic.webp',
      title: 'Operation Theatre',
    },
    {
      id: 5,
      image: '/images/Room.jpg',
      title: 'City Lights',
    }
  ];





    // Sample videos - replace with your actual video sources
    const videos = [
      {
        id: 1,
        src: '/videos/Dentist.mp4',
        poster: '/images/Thumbnail.png',
        title: 'Putting Your Smile First, Always',
        description: 'Beneath the fading glow of a summer sunset, the breeze carried the scent of blooming jasmine across the quiet hillside. A lone cyclist pedaled slowly along the winding path, tires crunching against gravel as birds chirped softly in the distance. Nearby, a pair of deer emerged from the trees, pausing cautiously before continuing their gentle trek toward the stream. Time seemed to stretch in that golden hour, where everything was bathed in warmth and stillness, and for a moment, the world felt perfectly balanced.'
      },
    ];




    export const plans = [
    {
      id: "0",
      title: "Core",
      priceMonthly: 19,
      priceYearly: 12,
      caption: "Best for solo creators",
      features: [
        "100MB Cloud storage",
        "100+ prompt templates",
        "5 projects",
        "24/7 support",
      ],
      icon: "/images/circle.svg",
      logo: "/images/plan-1.png",
    },
    {
      id: "1",
      title: "Overdrive",
      priceMonthly: 79,
      priceYearly: 59,
      caption: "Most popular plan",
      features: [
        "All Starter features",
        "1TB additional storage",
        "Unlimited projects",
        "Analytics",
      ],
      icon: "/images/triangle.svg",
      logo: "/images/plan-2.png",
    },
    {
      id: "2",
      title: "Team",
      priceMonthly: 39,
      priceYearly: 29,
      caption: "Exclusively for teams",
      features: [
        "All Overdrive features",
        "10TB additional storage",
        "50% off per member",
        "Real-time collaboration",
      ],
      icon: "/images/hexagon.svg",
      logo: "/images/plan-3.png",
    },
  ];



export {
  words,
  TeamInfo,
  TeamInfo2,
  services,
  testimonials,
  testimonials2,
  navLinks,
  blogs,
  Team2,
  DentistBriefInfo,
  ClinicInfo,
  DentistLongInfo,
  FrontPage,
  assets,
  singleslider,
  gallery,
  faqData,
  slides,
  videos
};

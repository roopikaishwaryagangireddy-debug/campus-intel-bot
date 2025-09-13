// Mock campus database - in a real app, this would connect to your actual database
export const campusData = {
  schedules: {
    academicCalendar: {
      fallSemester: "August 28 - December 15, 2024",
      springSemester: "January 15 - May 10, 2024",
      summerSessions: "May 20 - August 10, 2024",
      finals: {
        fall: "December 11-15, 2024",
        spring: "May 6-10, 2024"
      }
    },
    classSchedules: [
      {
        course: "CS 101 - Intro to Computer Science",
        time: "MWF 9:00-9:50 AM",
        location: "Science Building Room 201",
        professor: "Dr. Smith"
      },
      {
        course: "MATH 201 - Calculus II", 
        time: "TTh 2:00-3:15 PM",
        location: "Mathematics Hall Room 105",
        professor: "Prof. Johnson"
      }
    ]
  },

  facilities: {
    buildings: [
      {
        name: "Student Center",
        hours: "Mon-Fri 6AM-11PM, Sat-Sun 8AM-10PM",
        amenities: ["Food court", "Study spaces", "Meeting rooms", "ATM"],
        location: "Central Campus"
      },
      {
        name: "Recreation Center",
        hours: "Mon-Fri 5AM-11PM, Sat-Sun 7AM-9PM", 
        amenities: ["Gym", "Pool", "Rock climbing wall", "Group fitness classes"],
        location: "East Campus"
      },
      {
        name: "Science Building",
        hours: "Mon-Fri 7AM-10PM, Sat 9AM-6PM",
        amenities: ["Labs", "Lecture halls", "Study areas"],
        location: "North Campus"
      }
    ],
    parking: {
      studentLots: ["Lot A (North)", "Lot B (South)", "Lot C (East)"],
      visitorParking: "Visitor Center - $5/day",
      permits: "Available at Campus Security office"
    }
  },

  dining: {
    locations: [
      {
        name: "Main Dining Hall",
        hours: "Mon-Fri 7AM-9PM, Sat-Sun 8AM-8PM",
        mealPlans: ["Unlimited", "14 meals/week", "10 meals/week"],
        features: ["All-you-can-eat", "Vegetarian options", "Gluten-free menu"]
      },
      {
        name: "Campus Coffee Shop",
        hours: "Mon-Fri 6:30AM-10PM, Sat-Sun 8AM-9PM",
        menu: ["Coffee", "Pastries", "Sandwiches", "Salads"],
        payment: ["Cash", "Card", "Campus ID"]
      },
      {
        name: "Food Court",
        hours: "Mon-Fri 11AM-8PM, Sat-Sun 12PM-7PM",
        restaurants: ["Pizza Corner", "Asian Express", "Burger Joint", "Healthy Bowls"]
      }
    ]
  },

  library: {
    mainLibrary: {
      hours: "Mon-Thu 7AM-12AM, Fri 7AM-9PM, Sat 9AM-9PM, Sun 10AM-12AM",
      floors: 4,
      services: ["Book checkout", "Research assistance", "Computer lab", "Study rooms"]
    },
    studySpaces: [
      {
        type: "Group Study Rooms",
        reservation: "Available online up to 7 days in advance",
        capacity: "4-8 people"
      },
      {
        type: "Silent Study Areas",
        location: "3rd and 4th floors",
        features: ["Individual desks", "Power outlets", "Good lighting"]
      }
    ],
    resources: {
      databases: ["JSTOR", "ProQuest", "IEEE Xplore"],
      printing: "$0.10/page black & white, $0.25/page color",
      equipment: ["Laptops (4-hour checkout)", "Chargers", "Calculators"]
    }
  },

  administration: {
    registrar: {
      office: "Administration Building, Room 102",
      hours: "Mon-Fri 8AM-5PM",
      services: ["Enrollment", "Transcripts", "Degree verification", "Course registration"]
    },
    financialAid: {
      office: "Student Services Building, Room 205",
      hours: "Mon-Fri 8:30AM-4:30PM", 
      services: ["FAFSA help", "Scholarship information", "Student loans", "Work-study programs"]
    },
    studentServices: {
      office: "Student Center, Room 301",
      hours: "Mon-Fri 9AM-5PM",
      services: ["ID cards", "Health services", "Counseling", "Career center"]
    },
    bursar: {
      office: "Administration Building, Room 150",
      hours: "Mon-Fri 8AM-4PM",
      services: ["Tuition payments", "Refunds", "Account information", "Payment plans"]
    }
  }
};

// Sample events and announcements
export const campusEvents = [
  {
    title: "Fall Career Fair",
    date: "October 15, 2024",
    location: "Student Center Ballroom",
    description: "Meet with 100+ employers and explore internship and job opportunities"
  },
  {
    title: "Homecoming Weekend",
    date: "October 21-22, 2024", 
    events: ["Football game", "Alumni mixer", "Campus tours", "Concert"]
  },
  {
    title: "Finals Study Sessions",
    date: "December 9-14, 2024",
    location: "Library and Student Center",
    description: "Free tutoring and extended study hours available"
  }
];
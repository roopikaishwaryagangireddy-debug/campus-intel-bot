import { campusData, campusEvents } from "./campusData";

// Simple keyword matching for demo purposes
// In a real app, you'd integrate with an actual AI service
export const getCampusResponse = (query: string, serviceType?: string | null): string => {
  const lowerQuery = query.toLowerCase();
  
  // Schedule-related queries
  if (lowerQuery.includes("schedule") || lowerQuery.includes("class") || lowerQuery.includes("semester") || serviceType === "schedules") {
    if (lowerQuery.includes("fall") || lowerQuery.includes("autumn")) {
      return `Fall semester runs from ${campusData.schedules.academicCalendar.fallSemester}. Finals are scheduled for ${campusData.schedules.academicCalendar.finals.fall}. \n\nSome example classes this fall:\n• CS 101: MWF 9:00-9:50 AM in Science Building Room 201\n• MATH 201: TTh 2:00-3:15 PM in Mathematics Hall Room 105\n\nWould you like information about a specific course or need help with registration?`;
    }
    if (lowerQuery.includes("spring")) {
      return `Spring semester runs from ${campusData.schedules.academicCalendar.springSemester}. Finals are ${campusData.schedules.academicCalendar.finals.spring}.\n\nRegistration for spring courses typically opens in November. Would you like help finding specific course times or locations?`;
    }
    if (lowerQuery.includes("summer")) {
      return `Summer sessions run from ${campusData.schedules.academicCalendar.summerSessions}. We offer accelerated courses and special programs during summer.\n\nWould you like information about summer course offerings or registration deadlines?`;
    }
    return `Here's our academic calendar:\n• Fall: ${campusData.schedules.academicCalendar.fallSemester}\n• Spring: ${campusData.schedules.academicCalendar.springSemester}\n• Summer: ${campusData.schedules.academicCalendar.summerSessions}\n\nWhat specific schedule information do you need?`;
  }

  // Facility-related queries  
  if (lowerQuery.includes("building") || lowerQuery.includes("location") || lowerQuery.includes("where") || lowerQuery.includes("parking") || serviceType === "facilities") {
    if (lowerQuery.includes("parking")) {
      return `Here's parking information:\n• Student lots: ${campusData.facilities.parking.studentLots.join(", ")}\n• Visitor parking: ${campusData.facilities.parking.visitorParking}\n• Permits: ${campusData.facilities.parking.permits}\n\nStudent parking permits are required Monday-Friday 7AM-5PM. Would you like directions to a specific lot?`;
    }
    if (lowerQuery.includes("student center")) {
      const center = campusData.facilities.buildings.find(b => b.name === "Student Center");
      return `The Student Center is open ${center?.hours} and includes:\n${center?.amenities.map(a => `• ${a}`).join('\n')}\n\nIt's located in ${center?.location}. Is there a specific service you're looking for?`;
    }
    if (lowerQuery.includes("gym") || lowerQuery.includes("recreation") || lowerQuery.includes("fitness")) {
      const rec = campusData.facilities.buildings.find(b => b.name === "Recreation Center");
      return `The Recreation Center (${rec?.location}) is open ${rec?.hours} and features:\n${rec?.amenities.map(a => `• ${a}`).join('\n')}\n\nDaily guest passes are available at the front desk. Need information about memberships or class schedules?`;
    }
    return `Our main campus buildings include:\n${campusData.facilities.buildings.map(b => `• ${b.name} (${b.location}): ${b.hours}`).join('\n')}\n\nWhich building or facility are you looking for?`;
  }

  // Dining-related queries
  if (lowerQuery.includes("food") || lowerQuery.includes("dining") || lowerQuery.includes("eat") || lowerQuery.includes("meal") || lowerQuery.includes("restaurant") || serviceType === "dining") {
    if (lowerQuery.includes("hours")) {
      return `Dining hours today:\n${campusData.dining.locations.map(d => `• ${d.name}: ${d.hours}`).join('\n')}\n\nAll locations accept cash, card, and campus dining plans. What would you like to know about our dining options?`;
    }
    if (lowerQuery.includes("meal plan")) {
      const mainDining = campusData.dining.locations[0];
      return `We offer these meal plans:\n${mainDining.mealPlans?.map(p => `• ${p}`).join('\n')}\n\nMeal plans work at the Main Dining Hall and can be used for dining dollars at other campus locations. Would you like help choosing a plan?`;
    }
    return `Our dining locations include:\n${campusData.dining.locations.map(d => `• ${d.name}: ${d.hours}`).join('\n')}\n\nThe Main Dining Hall offers unlimited meal plans, while other locations accept campus dining dollars. What dining information can I help you with?`;
  }

  // Library-related queries
  if (lowerQuery.includes("library") || lowerQuery.includes("book") || lowerQuery.includes("study") || lowerQuery.includes("research") || serviceType === "library") {
    if (lowerQuery.includes("hours")) {
      return `Library hours: ${campusData.library.mainLibrary.hours}\n\nWe have ${campusData.library.mainLibrary.floors} floors with various study spaces. During finals week, we extend our hours. What library service can I help you with?`;
    }
    if (lowerQuery.includes("study room")) {
      const groupStudy = campusData.library.studySpaces[0];
      return `Group study rooms:\n• Capacity: ${groupStudy.capacity}\n• Reservation: ${groupStudy.reservation}\n\nYou can book rooms online through the library portal. Silent study areas are also available on floors 3-4 with individual desks and power outlets.`;
    }
    if (lowerQuery.includes("print")) {
      return `Printing costs:\n• Black & white: ${campusData.library.resources.printing.split(',')[0]}\n• Color: ${campusData.library.resources.printing.split(',')[1]}\n\nPrinters are located on each floor, and you can pay with your campus ID card. Need help setting up printing from your device?`;
    }
    return `Library services include:\n${campusData.library.mainLibrary.services.map(s => `• ${s}`).join('\n')}\n\nWe also have research databases, printing services, and equipment checkout available. Hours: ${campusData.library.mainLibrary.hours}\n\nWhat can I help you find?`;
  }

  // Administrative queries
  if (lowerQuery.includes("registration") || lowerQuery.includes("transcript") || lowerQuery.includes("financial aid") || lowerQuery.includes("tuition") || lowerQuery.includes("admin") || serviceType === "admin") {
    if (lowerQuery.includes("financial aid") || lowerQuery.includes("fafsa")) {
      const finAid = campusData.administration.financialAid;
      return `Financial Aid Office:\n• Location: ${finAid.office}\n• Hours: ${finAid.hours}\n• Services: ${finAid.services.join(", ")}\n\nThe FAFSA deadline for next year is March 1st. Walk-ins welcome, or schedule an appointment online. Do you need help with a specific aid application?`;
    }
    if (lowerQuery.includes("registration") || lowerQuery.includes("enroll")) {
      const registrar = campusData.administration.registrar;
      return `Registrar's Office:\n• Location: ${registrar.office}\n• Hours: ${registrar.hours}\n• Services: ${registrar.services.join(", ")}\n\nCourse registration for spring semester opens November 15th for seniors, with staggered dates by class year. Need help with course selection or requirements?`;
    }
    if (lowerQuery.includes("payment") || lowerQuery.includes("tuition") || lowerQuery.includes("bill")) {
      const bursar = campusData.administration.bursar;
      return `Bursar's Office handles all payments:\n• Location: ${bursar.office}\n• Hours: ${bursar.hours}\n• Services: ${bursar.services.join(", ")}\n\nPayment plans are available to spread tuition costs. Online payments can be made 24/7 through the student portal.`;
    }
    return `Key administrative offices:\n• Registrar: ${campusData.administration.registrar.office}\n• Financial Aid: ${campusData.administration.financialAid.office}\n• Student Services: ${campusData.administration.studentServices.office}\n• Bursar: ${campusData.administration.bursar.office}\n\nWhich office can I direct you to?`;
  }

  // Events and general campus info
  if (lowerQuery.includes("event") || lowerQuery.includes("happening") || lowerQuery.includes("activities")) {
    return `Upcoming campus events:\n${campusEvents.map(e => `• ${e.title} - ${e.date}${e.location ? ` at ${e.location}` : ''}`).join('\n')}\n\nCheck the campus events calendar online for the full schedule of activities, or visit the Student Activities office for more information!`;
  }

  // Default response for unmatched queries
  return `I'd be happy to help you with that! I can provide information about:

• **Class Schedules** - Academic calendar, course times, and locations
• **Campus Facilities** - Buildings, parking, recreation center, and amenities  
• **Dining Services** - Meal plans, restaurant hours, and food options
• **Library Services** - Hours, study rooms, printing, and research help
• **Administration** - Registration, financial aid, payments, and student services

Could you please be more specific about what you're looking for? For example, you could ask "What are the library hours?" or "Where can I find parking on campus?"`;
};
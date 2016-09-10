var bio = {
  "name": "Angelo Candari",
  "role": "Digital Marketing Professional",
  "contacts": {
    "email": "angelocandari@gmail.com",
    "github": "angelocandari",
    "twitter": "angelocandari"
  },
  "message": "Welcome to my site.",
  "skills": [
    "SEO", "PPC", "Email Marketing", "Adobe Photoshop", "HTML"
  ]
};

var work = {
  "jobs": [{
    "employer": "The Address Dubai Mall",
    "title": "Ecommerce Executive",
    "location": "Dubai, United Arab Emirates",
    "dates": "May 2014 to September 2016",
    "description": "Developed critical digital marketing strategies and \
    implemented tactics including display advertising, native ads, \
    SEM (SEO&PPC), email marketing, link -building, mobile and social \
    media marketing generating brand awareness and increasing user \
    engagement as well as driving online sales."
  }, {
    "employer": "Etisalat - Emirates Data Clearing House",
    "title": "Product Manager",
    "location": "Dubai, United Arab Emirates",
    "dates": "December 2011 to May 2014",
    "description": "Managed the development of Revenue Assurance Roaming services."
  }, {
    "employer": "Smart Communications Technology",
    "title": "Technical Trainer",
    "location": "Manila, Philippines",
    "dates": "January 2011 to December 2011",
    "description": "Act as the main go-to person for all product trainings and \
    managing all technical enquiries from customers or sales teams"
  }, {
    "employer": "Smart Communications Technology",
    "title": "Web Developer",
    "location": "Manila, Philippines",
    "dates": "October 2009 to January 2011",
    "description": "Designed and developed interactive training website."
  }, {
    "employer": "Rockwell Land Corporation",
    "title": "Marketing Associate",
    "location": "Manila, Philippines",
    "dates": "July 2008 to October 2009",
    "description": "Created product portfolios, sales presentations and \
    marketing materials in support of sales team"
  }]
};

var projects = {

};

var education = {
  "school": {
    "degree": "BS Communication Technology",
    "school": "Ateneo de Manila University",
    "graduate": "2008"
  },
  "online-courses": {
    "degree": "Front End Web Development",
    "school": "Udacity",
    "graduate": "September 2016"
  },
  "certifications": [{
    "certifications": "Google Analytics",
    "source": "Google",
    "valid": "July 2016 to January 2018"
  }, {
    "certifications": "Google Search Adwords",
    "source": "Google",
    "valid": "August 2016 to July 2017"
  }, {
    "certifications": "Project Management",
    "source": "Kepner-Tregoe",
    "valid": "November 2011 to present"
  }]
};

function interNames (myName) {
  var nameArray = myName.split(" ");
  var firstName = nameArray[0].slice(1).toLowerCase();
  var capFirst = nameArray[0].slice(0,1).toUpperCase();
  var secondName = nameArray[1].toUpperCase();
  var formattedName = capFirst + firstName + " " + secondName;
  return formattedName;
};

var formatName = HTMLheaderName.replace("%data%", interNames(bio.name));
var formatRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formatRole);
$("#header").prepend(formatName);

var formatEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formatGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").prepend(formatEmail);
$("#topContacts").prepend(formatGithub);
$("#topContacts").prepend(formatTwitter);

var formatWelcome = HTMLwelcomeMsg.replace("%data%", bio.message);
$("#header").append(formatWelcome);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formatSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formatSkill);
  }
};

if (work.jobs.length > 0) {
  $("#workExperience").append(HTMLworkStart);
  for (job in work.jobs) {

    var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formatEmployerTitle = formatEmployer + formatTitle;
    $(".work-entry").append(formatEmployerTitle);

    var formatDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry").append(formatDates);

    var formatDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry").append(formatDesc);

  }
};

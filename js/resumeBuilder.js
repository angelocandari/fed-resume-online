var bio = {
  "name": "Angelo Candari",
  "role": "Digital Marketing Professional",
  "contacts": {
    "email": "angelocandari@gmail.com",
    "github": "angelocandari",
    "twitter": "angelocandari",
    "linkedin": "angelocandari"
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
  "emaar": [{
    "title": "Festive and NYE at The Address Dubai Mall 2015 Campaign",
    "date": "2015",
    "description": "Developed Digital Marketing strategy for Christmas and New Year’s \
    Eve Celebration at The Address Dubai Mall. Utilizing Social Media Ads, \
    Display Ads, PPC Search Ads, Remarketing/Contextual Ads, Blogger \
    Collaboration, Email we were able to generate high visitor traffic at our \
    main website. With a combination of proper targeting, optimized bidding and \
    clear call-to-action landing pages, we were able to generated leads and a \
    healthy conversation rate that has generated 33% over our investment"
  }, {
    "title": "Churrasco Campaign",
    "date": "2016",
    "description": "Managed overall Marketing Campaign for Churrasco Night at Cabana. \
    I prepared the digital marketing strategy for this campaign that spanned the whole \
    year. And with my marketing manager resigning for the year of 2015, I was given the \
    opportunity to plan and implement the whole year strategy to promote Cabana \
    Churrasco Campaign from Creative Design Concept to Campaign implementation for \
    Print, Radio and Online. The campaign continued throughout the year with a kick-off \
    event and complimentary bursts of tactical campaigns that sustained awareness and \
    convert potential customers."
  }],
  "smart": [{
    "title": "Smart Bro Series",
    "date": "2011",
    "description": "Collection of training materials to update Field Sales Agents on new products \
    of Smart Bro. Includes training videos and interactive flash-based training materials. \
    Role: Interactive Developer"
  }]
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

function interNames(myName) {
  var nameArray = myName.split(" ");
  var firstName = nameArray[0].slice(1).toLowerCase();
  var capFirst = nameArray[0].slice(0, 1).toUpperCase();
  var secondName = nameArray[1].toUpperCase();
  var formattedName = capFirst + firstName + " " + secondName;
  return formattedName;
};


function addItems(location, helper, data) {
  var format = helper.replace("%data%", data);
  $(location).append(format);
}

addItems("#header", HTMLheaderName, interNames(bio.name));
addItems("#header", HTMLheaderRole, interNames(bio.role));
addItems("#header", HTMLwelcomeMsg, bio.message);

addItems("#header", HTMLcontactsStart);
addItems("#topContacts", HTMLemail, bio.contacts.email);
addItems("#topContacts", HTMLgithub, bio.contacts.github);
addItems("#topContacts", HTMLtwitter, bio.contacts.twitter);
addItems("#topContacts", HTMLlinkedin, bio.contacts.linkedin);

function addRepeat(location, helper, data){
  for (var i=0; i < data.length; i++) {
    addItems(location, helper, data[i]);
  }
}

addItems("#header", HTMLskillsStart);
addRepeat("#skills", HTMLskills, bio.skills);

// var formatName = HTMLheaderName.replace("%data%", interNames(bio.name));
// var formatRole = HTMLheaderRole.replace("%data%", bio.role);
// $("#header").prepend(formatRole);
// $("#header").prepend(formatName);
// var formatEmail = HTMLemail.replace("%data%", bio.contacts.email);
// var formatGithub = HTMLgithub.replace("%data%", bio.contacts.github);
// var formatTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
// var formatLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
// $("#topContacts").prepend(formatEmail);
// $("#topContacts").prepend(formatGithub);
// $("#topContacts").prepend(formatTwitter);
// $("#topContacts").prepend(formatLinkedin);

// var formatWelcome = HTMLwelcomeMsg.replace("%data%", bio.message);
// $("#header").append(formatWelcome);
//
// if (bio.skills.length > 0) {
//   $("#header").append(HTMLskillsStart);
//   for (skill in bio.skills) {
//     var formatSkill = HTMLskills.replace("%data%", bio.skills[skill]);
//     $("#skills").append(formatSkill);
//   }
// };

function addWork() {
  if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    for (var i=0; i<work.jobs.length; i++) {
      var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formatEmployerTitle = formatEmployer + formatTitle;
      $(".work-entry").append(formatEmployerTitle);
      var formatDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      $(".work-entry").append(formatDates);
      var formatDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      $(".work-entry").append(formatDesc);
    }
  }
};

addWork();

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  for (company in projects) {
    for (project in projects[company]) {
      var title = HTMLprojectTitle.replace("%data%", projects[company][project].title);
      $(".project-entry").append(title);
      var date = HTMLprojectDates.replace("%data%", projects[company][project].date);
      $(".project-entry").append(date);
      var description = HTMLprojectDescription.replace("%data%", projects[company][project].description);
      $(".project-entry").append(description);
    }
  }
};

projects.display();

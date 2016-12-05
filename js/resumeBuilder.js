var model = {
  bio: {
    name: "Angelo Candari",
    role: "Digitial Marketing Professional",
    desc: "Specializing in Digital Marketing with a background of Web Development and Data Analytics. I am a Google Analytics and Google Search Adwords Certified professional with a Bachelor's Degree in Communications Technology Management.",
    imgSrc: "img/pic.jpg",
    location: "Busan",
    skills: [
      "Digital Marketing", "Web Development", "Data Analytics"
    ],
    contact: {
      mobile: "123456789",
      email: "angelocandari@gmail.com",
      github: "angelocandari",
      twitter: "angelocandari",
    }
  },

  education: [{
    school: "Ateneo De Manila University",
    type: "College",
    location: "Manila, Philippines",
    course: "BS Communications Technology Management",
    dates: "2004 to 2008",
    link: "http://www.ateneo.edu/ls/jgsom/bachelor-science-management-major-communications-technology-management",
    desc: "This program was created to develop Managers for the communications industry (namely: Marketing, Advertising, Media) as well as the Information Technology Industry. It focuses on the management expertise of the BS Management Program while injecting subjects in communications and information technology to develop a more holistic manager for the industry. In the end, the students who graduate with a BS Comtech degree is a manager that understands both the management and the creative processes of the industry."
  },{
    school: "Udacity",
    type: "Nanodegree Degree",
    location: "Online",
    course: "Front End Developer",
    dates: "2016",
    link: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    desc: "Master the skills required to become a Front-End Web Developer, and start building beautiful, responsive websites optimized for mobile and desktop performance. Learn the fundamentals of how the web works and gain a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript."
  },{
    school: "Google",
    type: "Certifications",
    location: "Online",
    course: "Google Analytics",
    dates: "2016 to 2017",
    link: "https://www.google.com/partners/#i_profile;idtf=104236552077432898723;",
    desc: "The Google Analytics Individual Qualification (IQ) is a demonstration of proficiency in Google Analytics that is available to any individual who has passed the Google Analytics IQ exam."
  },{
    school: "Google",
    type: "Certifications",
    location: "Online",
    course: "Google Adwords Search",
    dates: "2016 to 2017",
    link: "https://www.google.com/partners/#i_profile;idtf=104236552077432898723;",
    desc: "The Search Advertising exam covers basic and advanced concepts, including best practices for creating, managing, measuring, and optimizing search ad campaigns across the Search Network."
  }]
};

var command = {
  init: function() {

  }
};

var headerView = {
  init: function() {
    
  }
}

// var bio = {
//   "name": "Angelo Candari",
//   "role": "Digital Marketing Professional",
//   "contacts": {
//     "mobile": "123456789",
//     "email": "angelocandari@gmail.com",
//     "github": "angelocandari",
//     "twitter": "angelocandari1",
//     "location": "Busan"
//   },
//   "welcomeMessage": "Specializing in Digital Marketing with a background of Web Development and Data Analytics. I am a Google Analytics and Google Search Adwords Certified professional with a Bachelor's Degree in Communications Technology Management.",
//   "skills": ["Digital Marketing", "Web Development", "Data Analytics"],
//   "biopic": "images/pic.jpg"
// };

// var education = {
//   "schools": [{
//     "name": "Ateneo De Manila University",
//     "location": "Manila, Philippines",
//     "degree": "Bachelor of Sciences",
//     "majors": ["Communications Technology Management"],
//     "dates": "2004 - 2008",
//     "url": "http://www.admu.edu.ph/"
//   }],
//   "onlineCourses": [{
//     "title": "Front End Web Development",
//     "school": "Udacity",
//     "dates": "September 2016",
//     "url": "https://profiles.udacity.com/u/angeloc",
//   }],
//   "certifications": [{
//     "title": "Google Analytics",
//     "source": "Google",
//     "dates": "July 2016",
//     "url": "https://www.google.com/partners/#i_profile;idtf=104236552077432898723;"
//   }, {
//     "title": "Google Search Adwords",
//     "location": "Dubai, United Arab Emirates",
//     "source": "Google",
//     "dates": "August 2016",
//     "url": "https://www.google.com/partners/#i_profile;idtf=104236552077432898723;"
//   }]
// };
//
// var work = {
//   "jobs": [{
//     "employer": "The Address Dubai Mall",
//     "title": "Ecommerce Executive",
//     "location": "Dubai, United Arab Emirates",
//     "dates": "May 2014 to September 2016",
//     "description": "Developed critical digital marketing strategies and implemented tactics including display advertising, native ads, SEM (SEO&PPC), email marketing, link -building, mobile and social media marketing generating brand awareness and increasing user engagement as well as driving online sales. Prepares concrete and actionable Ecommerce Reports that determines performance of online campaigns and website landing pages integrity. Manages Digital Brand of The Address Dubai Mall based on the overarching brand voice of The Address Resorts + Hotels. Improves conversions of campaigns and share of voice of our brand across the digital space. Liaise with third-party agencies/vendors and manages budgets for a  cost-effective digital campaign. Maintains relationships with online content providers, creative agencies, online PR and PPC experts. Transformed a relatively non-existent social media profile into an online presence across Twitter, Facebook, Google+ and Instagram, TripAdvisor and other Online Travel Agents. Monitors performance for digital campaigns with Google Analytics, Sprinklr, Social Bakers, Radian6, Revinate, Hootsuite and Tweetdeck."
//   }, {
//     "employer": "Etisalat - Emirates Data Clearing House",
//     "title": "Product Manager",
//     "location": "Dubai, United Arab Emirates",
//     "dates": "December 2011 to May 2014",
//     "description": " Managed the development of Revenue Assurance Roaming services. Organized creative campaign for new products and services. Conducts training for sales team on new services. Translates technical documents and writes commercial documents for new services. Conceptualize new services and initiate negotiations with partners on new services. Gathers technical data and industry compliance required for commercial implementation. Delegates tasks to IT team for development of services."
//   }, {
//     "employer": "Smart Communications Technology",
//     "title": "Technical Trainer",
//     "location": "Manila, Philippines",
//     "dates": "January 2011 to December 2011",
//     "description": "Act as the main go-to person for all product trainings and managing all technical enquiries from customers or sales teams Organized and implemented product trainings with nationwide sales team Streamlined training process that has cut execution period from 3 days to 1 day. Provided necessary documentation in support of sale teams. Improved web training (eLearning) compliance rate from 50% to 98% Supervised sales team in ensuring that presentation/marketing materials are updated and relevant to sales and marketing activities"
//   }, {
//     "employer": "Smart Communications Technology",
//     "title": "Web Developer",
//     "location": "Manila, Philippines",
//     "dates": "October 2009 to January 2011",
//     "description": "Promoted to Technical Trainer. Designed and developed interactive training website. Produced training videos and online courses for new products and technical knowledge. Created product portfolios, sales presentations and marketing materials in support of sales team."
//   }, {
//     "employer": "Rockwell Land Corporation",
//     "title": "Marketing Associate",
//     "location": "Manila, Philippines",
//     "dates": "July 2008 to October 2009",
//     "description": "Supervised marketing roadshow events. Coordinated with advertising agencies on marketing execution. Negotiated with external partners on budget and prices. Created product portfolios, sales presentations and marketing materials in support of sales team."
//   }]
// };
//
// var projects = {
//   "projects": [{
//     "title": "Festive and NYE at The Address Dubai Mall 2015 Campaign",
//     "dates": "2015",
//     "description": "Developed Digital Marketing strategy for Christmas and New Year’s Eve Celebration at The Address Dubai Mall. Utilizing Social Media Ads, Display Ads, PPC Search Ads, Remarketing/Contextual Ads, Blogger Collaboration, Email we were able to generate high visitor traffic at our main website. With a combination of proper targeting, optimized bidding and clear call-to-action landing pages, we were able to generated leads and a healthy conversation rate that has generated 33% over our investment.",
//     "images": ["images/emaarFestive.jpg", "images/emaarNye.jpg"]
//   }, {
//     "title": "Churrasco Campaign",
//     "dates": "2016",
//     "description": "Managed overall Marketing Campaign for Churrasco Night at Cabana. I prepared the digital marketing strategy for this campaign that spanned the whole year. And with my marketing manager resigning for the year of 2015, I was given the opportunity to plan and implement the whole year strategy to promote Cabana Churrasco Campaign from Creative Design Concept to Campaign implementation for Print, Radio and Online. The campaign continued throughout the year with a kick-off event and complimentary bursts of tactical campaigns that sustained awareness and convert potential customers.",
//     "images": ["images/emaarChurrasco.jpg", "images/emaarCabana.jpg"]
//   }, {
//     "title": "Smart Bro Series",
//     "dates": "2011",
//     "description": "Collection of training materials to update Field Sales Agents on new products of Smart Bro. Includes training videos and interactive flash-based training materials.",
//     "images": ["images/smartSmartbro.jpg", "images/smartTechskills.jpg"]
//   }]
// };

// //Formats name to transform all letters from the Second Name to uppercase.
// function interNames(myName) {
//   var nameArray = myName.split(" ");
//   var firstName = nameArray[0].slice(1).toLowerCase();
//   var capFirst = nameArray[0].slice(0, 1).toUpperCase();
//   var secondName = nameArray[1].toUpperCase();
//   var formattedName = capFirst + firstName + " " + secondName;
//   return formattedName;
// }
//
// //Function to append items in index.html
// function addItems(location, helper, data) {
//   var format = helper.replace("%data%", data);
//   $(location).append(format);
// }
//
// //Function to reiterate many append commands
// function addRepeat(location, helper, data) {
//   for (var i = 0; i < data.length; i++) {
//     addItems(location, helper, data[i]);
//   }
// }
//
// bio.display = function() {
//   //Appends items on Header Section
//   addItems("#header", HTMLheaderName, interNames(bio.name));
//   addItems("#header", HTMLheaderRole, bio.role);
//   addItems("#header", HTMLcontactsStart);
//   addItems("#topContacts, #footerContacts", HTMLmobile, bio.contacts.mobile);
//   addItems("#topContacts, #footerContacts", HTMLemail, bio.contacts.email);
//   addItems("#topContacts, #footerContacts", HTMLgithub, bio.contacts.github);
//   addItems("#topContacts, #footerContacts", HTMLtwitter, bio.contacts.twitter);
//
//   addItems("#header", HTMLbioPic, bio.biopic);
//   addItems("#header", HTMLwelcomeMsg, bio.welcomeMessage);
//   addItems("#header", HTMLskillsStart);
//   addRepeat("#skills", HTMLskills, bio.skills);
//
//   // Adds hyperlinks to Contacts
//   $(".email").attr("href", ("mailto:" + bio.contacts.email));
//   $(".email").attr("target", "_blank");
//   $(".github").attr("href", ("https://github.com/" + bio.contacts.github));
//   $(".github").attr("target", "_blank");
//   $(".twitter").attr("href", ("https://twitter.com/" + bio.contacts.twitter));
//   $(".twitter").attr("target", "_blank");
//
// };
//
// bio.display();
//
// //Function to display work sections
// work.display = function() {
//   if (work.jobs.length > 0) {
//     $("#workExperience").append(HTMLworkStart);
//     for (var i = 0; i < work.jobs.length; i++) {
//       var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
//       var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
//       var formatEmployerTitle = formatEmployer + formatTitle;
//       $(".work-entry").append(formatEmployerTitle);
//       addItems(".work-entry", HTMLworkLocation, work.jobs[i].location);
//       addItems(".work-entry", HTMLworkDates, work.jobs[i].dates);
//       addItems(".work-entry", HTMLworkDescription, work.jobs[i].description);
//     }
//   }
// };
//
// work.display();
//
// //Displays my Projects
// projects.display = function() {
//   $("#projects").append(HTMLprojectStart);
//
//   for (var i = 0; i < projects.projects.length; i++) {
//     var key = projects.projects[i];
//     addItems(".project-entry", HTMLprojectTitle, key.title);
//     addItems(".project-entry", HTMLprojectDates, key.dates);
//     addItems(".project-entry", HTMLprojectDescription, key.description);
//
//     if (key.images.length > 0) {
//       for (var y = 0; y < key.images.length; y++) {
//         addItems(".project-entry", HTMLprojectImage, key.images[y]);
//       }
//     } else {
//       console.log("No Images");
//     }
//   }
// };
//
// projects.display();
//
// //Displays my Education Background
// education.display = function() {
//
//   //My College
//   $("#education").append(HTMLschoolStart);
//   for (var i = 0; i < education.schools.length; i++) {
//     var keySchool = education.schools[i];
//     var formatSchoolName = (HTMLschoolName.replace("#", keySchool.url)).replace("%data%", keySchool.name);
//     var formatSchoolDegree = HTMLschoolDegree.replace("%data%", keySchool.degree);
//     var formateTitleDegree = formatSchoolName + formatSchoolDegree;
//     $(".education-entry:last").append(formateTitleDegree);
//     addItems(".education-entry:last", HTMLschoolLocation, keySchool.location);
//     addItems(".education-entry:last", HTMLschoolDates, keySchool.dates);
//     addItems(".education-entry:last", HTMLschoolMajor, keySchool.majors);
//   }
//
//   //Online Classes
//   $("#education").append(HTMLonlineClasses);
//   for (var x = 0; x < education.onlineCourses.length; x++) {
//     $("#education").append(HTMLonlineStart);
//     var keyOnline = education.onlineCourses[x];
//     var formatOnlineTitle = HTMLonlineTitle.replace("%data%", keyOnline.title);
//     var formatOnlineSchool = HTMLonlineSchool.replace("%data%", keyOnline.school);
//     var formatTitleSchool = formatOnlineTitle + formatOnlineSchool;
//     $(".online-entry:last").append(formatTitleSchool);
//     addItems(".online-entry:last", HTMLonlineDates, keyOnline.dates);
//     addItems(".online-entry:last", (HTMLonlineURL.replace("#", keyOnline.url)), keyOnline.url);
//   }
//
//   //My Certifications
//   $("#education").append(HTMLcert);
//   for (var y = 0; y < education.certifications.length; y++) {
//     $("#education").append(HTMLcertStart);
//     var keyCert = education.certifications[y];
//     var formatCertTitle = HTMLcertTitle.replace("%data%", keyCert.title);
//     var formatCertSource = HTMLcertSource.replace("%data%", keyCert.source);
//     var formatTitleSource = formatCertTitle + formatCertSource;
//     $(".certificate-entry:last").append(formatTitleSource);
//     addItems(".certificate-entry:last", HTMLcertDates, keyCert.dates);
//     addItems(".certificate-entry:last", (HTMLcertURL.replace("#", keyCert.url)), keyCert.url);
//   }
// };
//
// education.display();
//
// $("#mapDiv").append(googleMap);

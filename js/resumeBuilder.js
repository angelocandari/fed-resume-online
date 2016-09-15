var bio = {
  "name": "Angelo Candari",
  "role": "Digital Marketing Professional",
  "location": "Dubai",
  "contacts": {
    "email": "angelocandari@gmail.com",
    "github": "angelocandari",
    "twitter": "angelocandari",
    "linkedin": "angelocandari"
  },
  "message": "Welcome to my site.",
  "skills": ["Digital Marketing", "Web Development", "Data Analytics"],
  "pic": "images/pic.jpg"
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
    engagement as well as driving online sales. \
    Prepares concrete and actionable Ecommerce Reports that determines \
    performance of online campaigns and website landing pages integrity. \
    Manages Digital Brand of The Address Dubai Mall based on the overarching \
    brand voice of The Address Resorts + Hotels. Improves conversions of \
    campaigns and share of voice of our brand across the digital space. \
    Liaise with third-party agencies/vendors and manages budgets for a \
    cost-effective digital campaign. Maintains relationships with online \
    content providers, creative agencies, online PR and PPC experts. \
    Transformed a relatively non-existent social media profile into an online \
    presence across Twitter, Facebook, Google+ and Instagram, TripAdvisor and \
    other Online Travel Agents. Monitors performance for digital campaigns \
    with Google Analytics, Sprinklr, Social Bakers, Radian6, Revinate, \
    Hootsuite and Tweetdeck."
  }, {
    "employer": "Etisalat - Emirates Data Clearing House",
    "title": "Product Manager",
    "location": "Dubai, United Arab Emirates",
    "dates": "December 2011 to May 2014",
    "description": " Managed the development of Revenue Assurance Roaming \
    services. Organized creative campaign for new products and services. \
    Conducts training for sales team on new services. Translates technical \
    documents and writes commercial documents for new services. \
    Conceptualize new services and initiate negotiations with partners on new \
    services. Gathers technical data and industry compliance required for \
    commercial implementation. Delegates tasks to IT team for development of \
    services."
  }, {
    "employer": "Smart Communications Technology",
    "title": "Technical Trainer",
    "location": "Manila, Philippines",
    "dates": "January 2011 to December 2011",
    "description": "Act as the main go-to person for all product trainings \
    and managing all technical enquiries from customers or sales teams \
    Organized and implemented product trainings with nationwide sales team \
    Streamlined training process that has cut execution period  \
    from 3 days to 1 day. Provided necessary documentation in support of sale \
    teams. Improved web training (eLearning) compliance rate from 50% to 98% \
    Supervised sales team in ensuring that presentation/marketing materials \
    are updated and relevant to sales and marketing activities"
  }, {
    "employer": "Smart Communications Technology",
    "title": "Web Developer",
    "location": "Manila, Philippines",
    "dates": "October 2009 to January 2011",
    "description": "Promoted to Technical Trainer. Designed and developed \
    interactive training website. Produced training videos and online courses \
    for new products and technical knowledge. Created product portfolios, \
    sales presentations and marketing materials in support of sales team."
  }, {
    "employer": "Rockwell Land Corporation",
    "title": "Marketing Associate",
    "location": "Manila, Philippines",
    "dates": "July 2008 to October 2009",
    "description": "Supervised marketing roadshow events. Coordinated with \
    advertising agencies on marketing execution. Negotiated with external \
    partners on budget and prices. Created product portfolios, sales \
    presentations and marketing materials in support of sales team."
  }]
};

var projects = [
  [{
    "title": "Festive and NYE at The Address Dubai Mall 2015 Campaign",
    "date": "2015",
    "img": ["images/emaarFestive.jpg", "images/emaarNye.jpg"],
    "description": "Developed Digital Marketing strategy for Christmas and New Year’s \
    Eve Celebration at The Address Dubai Mall. Utilizing Social Media Ads, \
    Display Ads, PPC Search Ads, Remarketing/Contextual Ads, Blogger \
    Collaboration, Email we were able to generate high visitor traffic at our \
    main website. With a combination of proper targeting, optimized bidding and \
    clear call-to-action landing pages, we were able to generated leads and a \
    healthy conversation rate that has generated 33% over our investment."
  }, {
    "title": "Churrasco Campaign",
    "date": "2016",
    "img": ["images/emaarChurrasco.jpg", "images/emaarCabana.jpg"],
    "description": "Managed overall Marketing Campaign for Churrasco Night at Cabana. \
    I prepared the digital marketing strategy for this campaign that spanned the whole \
    year. And with my marketing manager resigning for the year of 2015, I was given the \
    opportunity to plan and implement the whole year strategy to promote Cabana \
    Churrasco Campaign from Creative Design Concept to Campaign implementation for \
    Print, Radio and Online. The campaign continued throughout the year with a kick-off \
    event and complimentary bursts of tactical campaigns that sustained awareness and \
    convert potential customers."
  }],
  [{
    "title": "Smart Bro Series",
    "date": "2011",
    "img": ["images/smartSmartbro.jpg", "images/smartTechskills.jpg"],
    "description": "Collection of training materials to update Field Sales \
    Agents on new products of Smart Bro. Includes training videos and \
    interactive flash-based training materials."
  }, {
    "title": "Version 2 Churrasco Campaign",
    "date": "2016",
    "img": [],
    "description": "Managed overall Marketing Campaign for Churrasco Night at Cabana. \
    I prepared the digital marketing strategy for this campaign that spanned the whole \
    year. And with my marketing manager resigning for the year of 2015, I was given the \
    opportunity to plan and implement the whole year strategy to promote Cabana \
    Churrasco Campaign from Creative Design Concept to Campaign implementation for \
    Print, Radio and Online. The campaign continued throughout the year with a kick-off \
    event and complimentary bursts of tactical campaigns that sustained awareness and \
    convert potential customers."
  }]
];

var education = [
  {
    "title": "BS Communication Technology",
    "location": "Manila, Philippines",
    "description": "Ateneo de Manila University",
    "date": "2008"
  },
  {
    "title": "Front End Web Development",
    "location": "Manila, Philippines",
    "description": "Udacity",
    "date": "September 2016"
  },
];

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
addItems("#header", HTMLbioPic, bio.pic);

addItems("#header", HTMLcontactsStart);
addItems("#topContacts", HTMLemail, bio.contacts.email);
addItems("#topContacts", HTMLgithub, bio.contacts.github);
addItems("#topContacts", HTMLtwitter, bio.contacts.twitter);
addItems("#topContacts", HTMLlinkedin, bio.contacts.linkedin);

function addRepeat(location, helper, data) {
  for (var i = 0; i < data.length; i++) {
    addItems(location, helper, data[i]);
  }
}

addItems("#header", HTMLskillsStart);
addRepeat("#skills", HTMLskills, bio.skills);

work.display = function() {
  if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
      var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formatEmployerTitle = formatEmployer + formatTitle;
      $(".work-entry").append(formatEmployerTitle);
      var formatLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      $(".work-entry").append(formatLocation);
      var formatDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      $(".work-entry").append(formatDates);
      var formatDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      $(".work-entry").append(formatDesc);
    }
  }
};

work.display();

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  for (var i = 0; i < projects.length; i++) {
    for (var x = 0; x < projects[i].length; x++) {
      var key = projects[i][x];
      var title = HTMLprojectTitle.replace("%data%", key.title);
      $(".project-entry").append(title);
      var date = HTMLprojectDates.replace("%data%", key.date);
      $(".project-entry").append(date);
      var description = HTMLprojectDescription.replace("%data%", key.description);
      $(".project-entry").append(description);
      if (key.img.length > 0) {
        for (var y = 0; y < key.img.length; y++){
          var images = HTMLprojectImage.replace("%data%", key.img[y]);
          $(".project-entry").append(images);
        }
      } else {
        // console.log("No Images");
      }
    }
  }
};

projects.display();

education.display = function() {
  $("#education").append(HTMLschoolStart);
  for (var i = 0; i < education.length; i++) {
    if (i === 0) {
      var key = education[i];
      var title = HTMLschoolTitle.replace("%data%", key.title);
      $(".education-entry").append(title);
      var location = HTMLschoolLocation.replace("%data%", key.location);
      $(".education-entry").append(location);
      var date = HTMLschoolDates.replace("%data%", key.date);
      $(".education-entry").append(date);
      var description = HTMLprojectDescription.replace("%data%", key.description);
      $(".education-entry").append(description);
    } else {
      for (var x = 0; x < education[i].length; x++) {
        var key = education[i][x];
        var title = HTMLschoolTitle.replace("%data%", key.title);
        $(".education-entry").append(title);
        var location = HTMLschoolLocation.replace("%data%", key.location);
        $(".education-entry").append(location);
        var date = HTMLschoolDates.replace("%data%", key.date);
        $(".education-entry").append(date);
        var description = HTMLprojectDescription.replace("%data%", key.description);
        $(".education-entry").append(description);
      }
    }
  }
};

education.display();

$("#mapDiv").append(googleMap);

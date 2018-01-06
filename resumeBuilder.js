
// My variables for the 'helper.js' files

// The .replace() / .append() variables

var bio = {
	"name" : "Matthew Williams",
	"role" : "Web Developer",
	"email" : "MatthewWilliams0320@gmail.com",
	"github" : "Matthew0320",
	"mobile" : "561-460-2919",
	"twitter" : "Matt4050",
	"location" : "West Palm Beach, FL",
	"biopic" : 'images/matthew.jpg',
	"welcomeMessage" : "Hi, I'm Matthew and I'm a amateur web developer dabbling in Java and Android development, too.",
	"skills" : ["JavaScript", "HTML & CSS", "Java and Android development", "Team Coordination", "Front-end sales"]
};
	

/*var projects = {
	"name" : "Quarterly",
	"date" : 2017,
	"description" : "Quarterly helps both amateur and intermediate investors track and measure their stocks from their portfolio and share their portfolio with others. Quarterly makes it easy to find what, and how, your peers trade and receive wisdom from likeminded traders so you don't have to go it alone.",
	"projectimage" : "startup-image.jpg"
};*/

var education = {
	"schools" : [
		{
			"name" : "Broward College",
			"location" : "Davie, FL",
			"degree" : "None Receieved. Tried, & failed, to get my BS",
			"majors" : ["Computer Science"],
			"dates" : 2014,
			"url" : "broward.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Development Nanodegree",
			"school" : "UDACITY",
			"date" : 2018,
			"url" : "www.udacity.com"
		}
	],
	"display" : function () {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		}
	}
};

var firstName = bio.name;
var formattedName = HTMLheaderName.replace("%data%", firstName);
$("#header").append(formattedName);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

var _email = bio.email;
var formattedEmail = HTMLemail.replace("%data%", _email);
$("#topContacts").append(formattedEmail);

var _github = bio.github;
var formattedGithub = HTMLgithub.replace("%data%", _github);
$("#topContacts").append(formattedGithub);

var _mobile = bio.mobile;
var formattedMobile = HTMLmobile.replace("%data%", _mobile);
$("#topContacts").append(formattedMobile);

var _twitter = bio.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", _twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var _biopic = bio.biopic;
var formattedBiopic = HTMLbioPic.replace("%data%", _biopic);
$("#header").append(formattedBiopic);

var _welcomeMsg = bio.welcomeMessage;
var formattedMessage = HTMLwelcomeMsg.replace("%data%", _welcomeMsg);
$("#header").append(formattedMessage);

if (bio.skills.length > 0) {
	
	$("#header").append(HTMLskillsStart);
	
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);
	
}

var projectStart = bio.projects.start;
var formattedStart = HTMLprojectStart.replace("%data%", start);
$("#project").append(projectStart);


/*var _projectName = projects.name;
var formattedProjectName = HTMLprojectTitle.replace("%data%", _projectName);
$("#projects").append(formattedProjectName);

var _projectDate = projects.date;
var formattedProjectDate = HTMLprojectTitle.replace("%data%", _projectDate);
$("#projects").append(formattedProjectDate);

var _projectDesc = projects.description;
var formattedProjectDesc = HTMLprojectTitle.replace("%data%", _projectDesc);
$("#projects").append(formattedProjectDesc);

var _projectImg = projects.projectimage;
var formattedProjectImg = HTMLprojectTitle.replace("%data%", _projectImg);
$("#projects").append(formattedProjectImg);*/


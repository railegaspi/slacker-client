var user = {
"user": {
"name": "ryanlegaspi",
"image": "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/10400453_243251640103_5734836_n.jpg?_nc_cat=104&_nc_ht=scontent-yyz1-1.xx&oh=2bdaffeaa4ab00a77876ea2f44bd235c&oe=5C7AEF5E",
"full-name" : "Harford Ryan Legaspi",
"phone" : "416-970-7245",
"city" : "Toronto, ON",
"email" : "harford_ryan@yahoo.com",
"street" : "North York, Toronto",
"description" : "Ryan is a student at York University School of Continuing Studies taking up Full Stack Web Development Course. In this course, students will be introduced to the Technology that makes the web run, the tools and terminologies involved and learn the fundamentals of each technology. The importance of design, type, security, privacy usability and accessibility will be examined through the components of visual and text communication. He see himself more as a full stack developer, to be more flexible  when it comes to the development of web applications, and also able to understand not only the front end side of the applications but also the back end. He do believe that we as a developer need to continue on learning not just concentrating on one side of the applications. As the technology advances, so are we. Being a full stack web developer, it will help us to learn more and understand how the different application works and every aspect of a websites."
}
};

$(document).ready(function() /* JQUERY sample */
{
document.getElementById( "profileImg" ).src = user['user']['image'];
document.getElementById( "profileName" ).innerHTML = user['user']['full-name'] + "<br> <span id=\"profileUser\" class=\"profileUsername\">@" + user['user']['name'] + "</span> <span id=\"profileAddress\" class=\"profileLocation\"><i class=\"fas fa-map-marker-alt\"></i>&nbsp;" + user['user']['city'] + "</span>";
document.getElementById( "profileDesc" ).innerHTML = user['user']['description'];
document.getElementById( "profilePhone" ).innerHTML = "<span class=\"goBold\">Phone</span>" + user['user']['phone'];
document.getElementById( "profileStreet" ).innerHTML = "<span class=\"goBold\">Phone</span>" + user['user']['street'];
document.getElementById( "profileEmail" ).innerHTML = "<span class=\"goBold\">Phone</span>" + user['user']['email'];
});
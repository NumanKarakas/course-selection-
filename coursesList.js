//This javascript file is where the hour values for each course are stored, which are used by schedule1.html to display the estimated amount of workload

let selection = document.querySelector("select");
let result = document.querySelector("h2");

selection.addEventListener("change", () => {
  result.innerText = selection.options[selection.selectedIndex].text;
});

var mathClasses = new Array();
mathClasses[0] = "Algebra 1";
mathClasses[1] = "Algebra 2";
mathClasses[2] = "Geometry";
mathClasses[3] = "Precalculus";
mathClasses[4] = "Precalculus Honors";
mathClasses[5] = "Algebra 2/Trig";
mathClasses[6] = "AP Calculus AB";
mathClasses[7] = "AP Calculus BC";
mathClasses[8] = "Applications of Adv. Math";
mathClasses[9] = "AP Stats";

var mathClassesHours = new Array();
mathClassesHours[0] = 1;
mathClassesHours[1] = 1;
mathClassesHours[2] = 1;
mathClassesHours[3] = 2.5;
mathClassesHours[4] = 3;
mathClassesHours[5] = 4;
mathClassesHours[6] = 4;
mathClassesHours[7] = 4.5;
mathClassesHours[8] = 1;
mathClassesHours[9] = 3;

var scienceClasses = new Array();
scienceClasses[0] = "Biology";
scienceClasses[1] = "Chemistry";
scienceClasses[2] = "Chemistry Honors";
scienceClasses[3] = "AP Physics 1";
scienceClasses[4] = "AP Environmental Science";
scienceClasses[5] = "AP Biology";
scienceClasses[6] = "AP Physics C";
scienceClasses[7] = "Physiology";
scienceClasses[8] = "AP Chemistry"

var scienceClassesHours = new Array();
scienceClassesHours[0] = 2;
scienceClassesHours[1] = 1;
scienceClassesHours[2] = 4;
scienceClassesHours[3] = 5;
scienceClassesHours[4] = 5;
scienceClassesHours[5] = 7;
scienceClassesHours[6] = 6;
scienceClassesHours[7] = 1;
scienceClassesHours[8] = 5;
var historyClasses = new Array();
historyClasses[0] = "World History";
historyClasses[1] = "World Studies";
historyClasses[2] = "US History";
historyClasses[3] = "AP US History";
historyClasses[4] = "American Studies";
historyClasses[5] = "US Government and Politics";
historyClasses[6] = "AP US Government and Politics";
historyClasses[7] = "Economics";
historyClasses[8] = "AP Macroeconomics";

var historyClassesHours = new Array();
historyClassesHours[0] = 1;
historyClassesHours[1] = 2;
historyClassesHours[2] = 1;
historyClassesHours[3] = 4;
historyClassesHours[4] = 1;
historyClassesHours[5] = 2.5;
historyClassesHours[6] = 3.5;
historyClassesHours[7] = 0;
historyClassesHours[8] = 1;

var litClasses = new Array();
litClasses[0] = "Lit/Writ 9";
litClasses[1] = "World Literature";
litClasses[2] = "American Literature";
litClasses[3] = "American Litrature Honors";
litClasses[4] = "British Literature";
litClasses[5] = "Contemporary Literature";
litClasses[6] = "Myth/Folklore Literature";
litClasses[7] = "AP Literature";

var litClassesHours = new Array();
litClassesHours[0] = 2;
litClassesHours[1] = 2;
litClassesHours[2] = 2;
litClassesHours[3] = 3;
litClassesHours[4] = 2;
litClassesHours[5] = 3;
litClassesHours[6] = 2;
litClassesHours[7] = 4;

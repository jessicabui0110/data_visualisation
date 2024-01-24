function openPage1(pageName1, elmnt, color) {
  
  document.getElementById("chartContainer").innerHTML = "";
  document.getElementById("bar-chart_2015").innerHTML = "";
  document.getElementById("bar-chart_2016").innerHTML = "";
  document.getElementById("bar-chart_2017").innerHTML = "";
  document.getElementById("bar-chart_2018").innerHTML = "";
  document.getElementById("bar-chart_2019").innerHTML = "";
  document.getElementById("bar-chart_2020").innerHTML = "";
  
  var i, tabcontent1, tablinks1;
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }


  tablinks1 = document.getElementsByClassName("tablink1");
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].style.backgroundColor = "";
  }


document.getElementById(pageName1).style.display = "block";


}

function openPage(year) {
  console.log("openPage run");
  document.getElementById("chartContainer").innerHTML = "";
  
  var yearButtons = document.getElementsByClassName("tablink");
  for (var i = 0; i < yearButtons.length; i++) {
    yearButtons[i].classList.remove("active");
  }

  var selectedYearButton = document.getElementById("year-" + year);
  selectedYearButton.classList.add("active");

  var tabContents = document.getElementsByClassName("tabcontent1");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  var selectedTabContent = document.getElementById(year);
  selectedTabContent.style.display = "block";

   var previousTabContent = document.getElementsByClassName("tabcontent");
   for (var i = 0; i < previousTabContent.length; i++) {
     if (previousTabContent[i].id !== year) {
       previousTabContent[i].style.display = "none";
     }
   }
}

// function openPage1(pageName) {
//   // Hide all tab contents
//   var tabContents = document.getElementsByClassName("tabcontent1");
//   for (var i = 0; i < tabContents.length; i++) {
//     tabContents[i].style.display = "none";
//   }

//   // Show the selected tab content
//   var selectedTabContent = document.getElementById(pageName);
//   selectedTabContent.style.display = "block";

//   // Remove the 'active' class from all buttons
//   var buttons = document.getElementsByClassName("tablink1");
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].classList.remove("active");
//   }

//   // Add the 'active' class to the clicked button
//   var selectedButton = document.getElementById(pageName.replace(/ /g, "_").replace(/_/g, "-"));
//   selectedButton.classList.add("active");
// }







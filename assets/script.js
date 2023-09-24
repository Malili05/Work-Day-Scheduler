// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  colorChange ();
  renderText ();
})


  //grabs hour from each time slot and compares to current time
  function colorChange () {
    var currentHour = document.querySelectorAll('.time-block')
    console.log(currentHour)
    for (i = 0; i<currentHour.length; i++) {
    var id = currentHour[i].id
    console.log(id)
    var blockHour = parseInt(id.split('-')[1])
    console.log(blockHour)
    var currentTime = dayjs().format('H')
    console.log(currentTime)
    if (currentTime == blockHour) {
      currentHour[i].classList.add('present')
      
    }
    if (currentTime > blockHour) {
      currentHour[i].classList.add('past')

    }
    if (currentTime < blockHour) {
      currentHour[i].classList.add('future')

    }
    }
}
  // retrieves items from local storage to correct text areas. 
  function renderText() {
  var currentHour = document.querySelectorAll('.time-block')
  console.log(currentHour)
  for (i = 0; i<currentHour.length; i++) {
  var id = currentHour[i].id
  console.log(id)
  var savedText = localStorage.getItem(id)
  currentHour[i].children[1].value = savedText

  }
  }

  // saves text area to local storage
  $("button").click(function(event) {
  console.log("click")
  console.log(event.currentTarget)
  var textArea = event.currentTarget.previousElementSibling
  console.log(textArea.value)
  var id = event.currentTarget.parentElement.id
  localStorage.setItem(id, textArea.value)
})




   // TODO: Add code to display the current date in the header of the page.  
  $('#currentDay').text(dayjs().format('hh:mm:s'))
    
    




  // TODO: Add a listecodner for click events on the save button. This e should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



// //$("button").click(function() {
//   console.log("click")
//   var saveItem = $('input[name='
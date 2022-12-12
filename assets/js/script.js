
var saveBtn = $ (".saveBtn");
var timeDisplayEl =$("#currentDay");
// var divTimeEl = $("#hour-9, #hour-10, #hour-11");
var bodyEl = ("body");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  changeColor();
  saveBtn.on("click", function(){
    var elem = $(this).parent().attr("id");
    var newElement = elem.split("-")[1]
    console.log(newElement)
    var input = $(this).parent().children("textarea").val();
    var note = {
      hour: elem,
      note: input
    }
    console.log(note);
    localStorage.setItem("note", JSON.stringify(note));
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function changeColor(){
  var divTime = [];
  var divTimeEl = $(bodyEl).children().eq(1).children();
  console.log(divTimeEl.length)
    for (var i=0; i < 3; i++) {
      divTime.push(divTimeEl[i])
    };
    $(divTime).attr("id")
    console.log(divTime)

  
  var currentTime = dayjs().format("HH");
  console.log(currentTime)
  if (newElement == currentTime){
    this.addClass("present")
  } else if (newElement > currentTime) {
    this.addClass("future")
  } else if( newElement < currentTime) {
    this.addClass("past")
  }
}

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
    var rightnow = dayjs().format("dddd[,] MMMM DD[th]")
    timeDisplayEl.text(rightnow);
});

/////////////////////////////////////
$(document).ready(function() {
// set date & time of landing
var currentdate = new Date();
var datetime = $.now();
// Timestamp_JS
  $("#Timestamp_JS").val("");
  $("#Timestamp_JS").val(datetime);
  // Timestamp_Readable
    $("#Timestamp_Readable").val("");
    $("#Timestamp_Readable").val(((moment(datetime).format('YYYY/MM/DD HH:mm', {trim: false}))));
// set page where landed
var page_name = $("title").text();
$("#Page_Visited").val("");
$("#Page_Visited").val(page_name);

/////////////////////////////////////
var databaseRef = firebase.database().ref('_pages_visited/');
//////////// BEGIN save
$("#page_visit_save").on('click', function(e) {
  var Timestamp_JS = document.getElementById('Timestamp_JS').value;
  var Timestamp_Readable = document.getElementById('Timestamp_Readable').value;
  var Page_Visited = document.getElementById('Page_Visited').value;
var Record_ID = firebase.database().ref().child('_pages_visited').push().key;
var data = {
Record_ID: Record_ID,
Timestamp_JS: Timestamp_JS,
Timestamp_Readable: Timestamp_Readable,
Page_Visited: Page_Visited
}
var updates = {};
updates['/_pages_visited/' + Record_ID] = data;
firebase.database().ref().update(updates);
console.log('The record is created successfully!');
});
//////////// BEGIN update
$("#page_visit_update").on('click', function(e) {
  var Timestamp_JS = document.getElementById('Timestamp_JS').value;
  var Timestamp_Readable = document.getElementById('Timestamp_Readable').value;
  var Page_Visited = document.getElementById('Page_Visited').value;
var Record_ID = document.getElementById('Record_ID').value;
var data = {
Record_ID: Record_ID,
Timestamp_JS: Timestamp_JS,
Timestamp_Readable: Timestamp_Readable,
Page_Visited: Page_Visited
}
var updates = {};
updates['/_pages_visited/' + Record_ID] = data;
firebase.database().ref().update(updates);
console.log('The record is updated successfully!');
});
//////////// BEGIN delete
$("#page_visit_delete").on('click', function(e) {
var Record_ID = document.getElementById('Record_ID').value;
firebase.database().ref().child('/_pages_visited/' + Record_ID).remove();
console.log('The record is deleted successfully!');
});

// trigger click on Save to store the landing in firebase
$("#page_visit_save").trigger({
			type: "click",
			which: 1
		});

/////////////////////////////////////
}); // end document ready
/////////////////////////////////////
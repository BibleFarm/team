/////////////////////////////////////
$(document).ready(function() {
// set date & time of landing
  var currentdate = new Date();
      var datetime =

//    currentdate.getFullYear() + "-"
//  + (currentdate.getMonth()+1)  + "-"
//  + currentdate.getDate() + " "
//  + currentdate.getHours() + ":"
//  + currentdate.getMinutes() + ":"
//  + currentdate.getSeconds();

 $.now();
  $("#user_visit_time").val("");
  $("#user_visit_time").val(((moment(datetime).format('YYYY/MM/DD HH:mm', {trim: false}))));
// set page where landed
var page_name = $("title").text();
$("#user_name").val("");
$("#user_name").val(page_name);

/////////////////////////////////////
var databaseRef = firebase.database().ref('_pages_visited/');
//////////// BEGIN save
$("#page_visit_save").on('click', function(e) {
  var user_visit_time = document.getElementById('user_visit_time').value;
  var user_name = document.getElementById('user_name').value;
var uid = firebase.database().ref().child('_pages_visited').push().key;
var data = {
user_id: uid,
user_visit_time: user_visit_time,
user_name: user_name
}
var updates = {};
updates['/_pages_visited/' + uid] = data;
firebase.database().ref().update(updates);
console.log('The user is created successfully!');
});
//////////// BEGIN update
$("#page_visit_update").on('click', function(e) {
  var user_visit_time = document.getElementById('user_visit_time').value;
  var user_name = document.getElementById('user_name').value;
var user_id = document.getElementById('user_id').value;
var data = {
user_id: user_id,
user_visit_time: user_visit_time,
user_name: user_name
}
var updates = {};
updates['/_pages_visited/' + user_id] = data;
firebase.database().ref().update(updates);
console.log('The user is updated successfully!');
});
//////////// BEGIN delete
$("#page_visit_delete").on('click', function(e) {
var user_id = document.getElementById('user_id').value;
firebase.database().ref().child('/_pages_visited/' + user_id).remove();
console.log('The user is deleted successfully!');
});

// trigger click on Save to store the landing in firebase
$("#page_visit_save").trigger({
			type: "click",
			which: 1
		});

/////////////////////////////////////
}); // end document ready
/////////////////////////////////////

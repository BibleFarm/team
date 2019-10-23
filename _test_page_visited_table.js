/////////////////////////////////////
$(document).ready(function() {
/////////////////////////////////////

$.fn.dataTable.moment = function ( format, locale ) {
    var types = $.fn.dataTable.ext.type;

    // Add type detection
    types.detect.unshift( function ( d ) {
        return moment( d, format, locale, true ).isValid() ?
            'moment-'+format :
            null;
    } );

    // Add sorting method - use an integer for the sorting
    types.order[ 'moment-'+format+'-pre' ] = function ( d ) {
        return moment( d, format, locale, true ).unix();
    };
};
$.fn.dataTable.moment("YYYY/MM/DD HH:mm");
var table = $('#_pages_visited').DataTable ( {
  "paging": false,
  fixedHeader: true,
  "order": [[ 2, "desc" ]],
  "columnDefs": [
{
  "targets": 4,
  "render": function ( data, type, row, meta ) {
    return moment(data, "YYYY/MM/DD HH:mm").fromNow();
}
},
{
// Sort column 1 (formatted date) by column 6 (hidden seconds)
"orderData":[ 2 ],
"targets": [ 4 ]
}
]
} );
firebase.database().ref('/_pages_visited/').on('child_added',function(snapshot) {
var dataSet = [
'<span class="Record_ID">' + snapshot.val().Record_ID + '</span>',
'<span class="Timestamp_JS">' + snapshot.val().Timestamp_JS + '</span>',
'<span class="Timestamp_Readable">' + snapshot.val().Timestamp_Readable + '</span>',
  '<span class="Page_Visited">' + snapshot.val().Page_Visited + '</span>',
  '<span class="Timestamp_Readable time_ago">' + snapshot.val().Timestamp_Readable + '</span>'
];
table.rows.add([dataSet]).draw();
});


//////////// BEGIN delete
$('#_pages_visited tbody').on( 'click', 'span.Record_ID', function () {
  $(this).css("color", "red");
  var Record_ID = $(this).text();
  firebase.database().ref().child('/_pages_visited/' + Record_ID).remove();
  console.log('The record is deleted successfully!');

    table.row( $(this).parents('tr') ).remove()
        .draw();

} );



/////////////////////////////////////
}); // end document ready
/////////////////////////////////////

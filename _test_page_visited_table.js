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
var table = $('#tbl_users_list').DataTable ( {
  "order": [[ 0, "desc" ]],
  "columnDefs": [
    {
  "targets": 2,
  "render": function ( data, type, row, meta ) {
    return moment(data, "YYYY/MM/DD HH:mm").fromNow();
  }
},
{
// Sort column 1 (formatted date) by column 6 (hidden seconds)
"orderData":[ 2 ],
"targets": [ 0 ]
}
]
} );
firebase.database().ref('/_pages_visited/').on('child_added',function(snapshot) {
var dataSet = [
//  '<span class="red timestamp_class">' + snapshot.val().user_id + '</span>',
  '<span class="red moment_format">' + snapshot.val().user_visit_time + '</span>',
  '<span class="red">' + snapshot.val().user_name + '</span>',
  '<span class="red moment_time_ago">' + snapshot.val().user_visit_time + '</span>'
];
table.rows.add([dataSet]).draw();
});

/////////////////////////////////////
}); // end document ready
/////////////////////////////////////

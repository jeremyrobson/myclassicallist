function load_posts(id, count) {
    for (var i=0; i<count; i++) {
        var post = document.createElement("li");
        var posttitle = "hipster stuff";
        var posttext = "3 wolf moon banh mi Bushwick mlkshk Wes Anderson. Cronut mumblecore flexitarian pug readymade banh mi. Wes Anderson Neutra Austin health goth twee four dollar toast normcore. Pour-over salvia seitan iPhone Schlitz, vegan before they sold out stumptown. Shabby chic direct trade Echo Park, Odd Future Helvetica Truffaut mlkshk mixtape listicle vegan meditation craft beer tattooed cardigan banh mi. Cred Neutra drinking vinegar, lomo trust fund locavore fap cardigan tattooed next level High Life freegan wolf direct trade. Banksy blog kitsch, mustache flannel American Apparel VHS put a bird on it Intelligentsia dreamcatcher cardigan.";
        var postdate = "January 1st, 2015, 12:00 AM";
        var postuser = "Username";
        var postcommentcount = 0;
        var html = "<h3>" + posttitle + "</h3>";
        html += "<p>" + posttext + "</p>";
        html += "<small>" + postdate + "</small>"; 
        html += " by " + "<a href='#'>" + postuser + "</a>";
        html += " | " + "<a href='#'>Comments (" + postcommentcount + ")</a>";
        $(post).addClass("list-group-item").html(html);
        $(post).insertBefore($(id + " .showmore"));
    }
}

function load_top_list(id, count) {
    for (var i=0; i<count; i++) {
        var entry = document.createElement('li');
        //var avatar = document.createElement('div');
        //$(avatar).addClass('col-xs-6 col-md-4').html('composer.jpg');
        var table = '<table class="ranking">';
        table += '<tr>';
        table += '<th rowspan="4">' + (i+1) + '</th>';
        table += '<td rowspan="4">';
        table += '<div class="col-xs-6 col-md-4">composer.jpg</div>';
        table += '</td>';
        table += '<tr><td>stuff 1</td></tr>';
        table += '<tr><td>stuff 2</td></tr>';
        table += '<tr><td>stuff 3</td></tr>';
        table += '</table>';
        $(entry).addClass("list-group-item").html(table);
        $(entry).insertBefore($(id + " .showmore"));
    }
}

function load_user_list(id, count) {
    for (var i=0; i<count; i++) {
        var entry = document.createElement('li');
        var table = '<table>';
        table += '<tr>';
        table += '<td>';
        table += '<div class="col-xs-6 col-md-4">avatar.jpg</div>';
        table += '</td>';
        table += '<td><a href="#">Username</a></td>';
        table += '</tr>';
        table += '</table>';
        $(entry).addClass("list-group-item").html(table);
        $(entry).insertBefore($(id + " .showmore"));
    }
}

function load_edit_list(id, count) {
    for (var i=0; i<count; i++) {
        var entry = document.createElement('li');
        var entrydate = "January 1st, 2015, 12:00 AM";
        var table = '<table>';
        table += '<tr>';
        table += '<td><a href="#">Title of article</a></td>';
        table += '</tr>';
        table += '<tr>';
        table += '<td>';
        table += '<div>' + entrydate + '</div>';
        table += '</td>';
        table += '</tr>';
        table += '</table>';
        $(entry).addClass("list-group-item").html(table);
        $(entry).insertBefore($(id + " .showmore"));
    }
}

$(document).ready(function() {
    $('a[href="#newpost"]').click(function() {
        $("#newpostform").removeClass("hidden");
    });
    load_posts("#myactivitylist", 3);
    load_posts("#newsfeed", 3);
    load_top_list("#toplist", 5);
    load_top_list("#mytoplist", 5);
    load_user_list("#myfriendslist", 5);
    load_edit_list("#myeditslist", 5);
});
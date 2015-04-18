function load_comment(data, index) {
    var comment = document.createElement("li");
    var commentusername = data.username;
    var commentdate = data.date;
    var commenttext = data.text;
    var html = "<h4><a href='#'>" + commentusername + "</a> says...</h4>";
    html += "<p>" + index + ". " + commenttext + "</p>";
    html += "<small>" + commentdate + "</small>";
    $(comment).addClass("list-group-item").html(html);
    return comment;
}

function load_post(data) {
    var post = document.createElement("li");
    var postid = data._id;
    var posttitle = data.title;
    var posttext = data.text;
    var postdate = data.date;
    var postusername = data.username;
    var postcommentcount = (data.comments) ? data.comments.length : 0;
    var html = "<h3>" + posttitle + "</h3>";
    html += "<p>" + posttext + "</p>";
    html += "<small>" + postdate + "</small>";
    html += " by " + "<a href='#'>" + postusername + "</a>";
    html += " | " + '<a data-toggle="collapse" href="#commentdiv' + postid + '">Comments (' + postcommentcount + ')</a>';
    $(post).addClass("list-group-item").html(html);
    
    var commentdiv = document.createElement("div");
    commentdiv.id = "commentdiv" + postid;
    var commentlist = document.createElement("ul");
    var newcomment = document.createElement("li")
    $(newcomment).addClass("list-group-item").html(
        '<div id="newcommentdiv" class="container-fluid">' +
        '<form id="newcommentform" action="newcomment.php" method="post">' +
        '<div class="form-group form-group-sm">' +
        '<textarea id="newcommenttext" class="form-control custom-control" style="resize:none" placeholder="New Comment" name="newcommenttext" rows="4" cols="50"></textarea>' +
        '</div>' +
        '<div class="btn-group btn-group-sm pull-right">' +
        '<button id="postsubmit" class="btn btn-default" type="submit">Post</button>' +
        '</div>' +
        '</fieldset>' +
        '</form>' +
        '</div>'
    );
    $(commentlist).append($(newcomment));
    
    for (var i=0;i<postcommentcount;i++)
        $(commentlist).append($(load_comment(data.comments[i], i+1)));
    
    var showmore = document.createElement("li");
    $(showmore).addClass("list-group-item").html( //showmore
        '<h4><a href="#">Show More...</a></h4>'
    );
    $(commentlist).append($(showmore));
    
    $(commentdiv).addClass("container-fluid collapse").append(commentlist);
    
    $(post).append($(commentdiv)); 

    return post;
}

function load_posts(id, data, count) {
    if (data.length < count) count = data.length;
    for (var i=0; i<count; i++) {
        var post = load_post(data[i]);
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

function load_default() {
    load_posts("#myactivitylist", postexample, 3);
    load_posts("#newsfeed", postexample, 3);
    load_top_list("#toplist", 5);
    load_top_list("#mytoplist", 5);
    load_user_list("#myfriendslist", 5);
    load_edit_list("#myeditslist", 5);
}

function load_index() {
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function(a, i) {
        var link = document.createElement("a");
        $(link).attr("href", "#" + a).html(a).css("padding", "8px");
        $("#letters").append(link);

        var div = document.createElement('div');
        html = '<h3 id="' + a + '">' + a + '</h3>';
        html += '<ul>';
        var rand = Math.floor(Math.random() * 10);
        for (var j=0; j<rand; j++)
            html += '<li><a href="#Z">Composer Name Goes Here</a></li>';
        html += '</ul>';
        $(div).addClass("section").html(html);
        $("#container" + Math.floor(i/9)).append($(div));
    });
    
}

function load_composer() {
    var profile = '<h3>Profile</h3>';
    profile += '<img src="composer.jpg" />';
    profile += '<table class="table">';
    profile += '<tr><th>Name</th><td align="right">' + composers[0].name + '</td></tr>';
    profile += '<tr><th>Birthdate</th><td align="right">' + composers[0].birthdate + '</td></tr>';
    profile += '<tr><th>Birthplace</th><td align="right">' + composers[0].birthplace + '</td></tr>';
    profile += '</table>';
    
    var works = '<h3>List of Works</h3>';
    works += '<table class="table">';
    works += '<tr><th>Year</th><th>Title</th></tr>'
    composers[0].works.forEach(function(w) {
       works += '<tr><td>' + w.year + '</td><td><a href="#">' + w.title + '</a></td></tr>';
    });
    works += '</table>';

    var tags = '<h3>Tags</h3>';
    composers[0].tags.forEach(function(t) {
       tags += '<a href="#">#' + t + '</a> '; 
    });
    
    var paragraphs = composers[0].biography.split("\n");
    var biography = "<h3>Biography of " + composers[0].name + "</h3>";
    paragraphs.forEach(function(p) {
        biography +=  '<p style="text-indent: 5em;">' + p + '</p>';
    });
    
    $("#profile").html(profile);
    $("#biography").html(biography);
    $("#works").html(works);
    $("#tags").html(tags);
}

$(document).ready(function() {
    //load_default();
    //load_index();
    load_composer();
});

<!doctype html>
<html lang="en">
<head>
  <title>My Classical List - v0.1a</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css" />
  <link rel="stylesheet" type="text/css" href="css/default.css" />
  <script src="js/jquery-2.1.3.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/default.js"></script>
  <script src="js/testdata.js"></script>
</head>
<body>

<?php include "navbar.php" ?>

<!-- header -->

<div id="header" class="section">
  <div class="container">
    <h1><a href="default.html">My Classical List</a> <small>v0.1a</small></h1>
  </div>
</div>

<!-- subheader -->

<div id="subheader" class="">
  <div class="container">

      <ul class="nav nav-pills">
        <li class="nav-right">
          <a href="#">
            <span class="glyphicon glyphicon-music" aria-hidden="true"></span>
              Welcome to MyCL
            <span class="glyphicon glyphicon-music" aria-hidden="true"></span>
          </a>
        </li>
        <li class="nav-right active"><a href="home.php">Home</a></li>
        <li class="nav-right"><a href="profile.php">Profile</a></li>
        <li class="nav-right"><a href="messages.php">Messages <span class="badge">0</span></a></li>
        <li class="nav-right"><a href="settings.php">Settings</a></li>
      </ul>

  </div>
</div>

<!-- main -->

<div id="main" class="container-fluid">

  <div class="row">
  
    <div id="container0" class="col-sm-3">
    
      <div id="mytoplist" class="section">
        <h3>My Top Composers</h3>
        <ul class="list-group">
          <li class="list-group-item showmore">
            <h4><a href="#">Show More...</a></h4>
          </li>
        </ul>
      </div>
      <div id="toplist" class="section">
        <h3>Top Rated Composers</h3>
        <ul class="list-group">
          <li class="list-group-item showmore">
            <h4><a href="#">Show More...</a></h4>
          </li>
        </ul>
      </div>
      
    </div>
    
    <div id="container1" class="col-sm-6">
    
      <div id="myactivitylist" class="section">
        <h3>My Most Recent Activity</h3>
        <ul class="list-group">
          <li class="list-group-item">
            <a class="btn btn-primary" data-toggle="collapse" href="#newpostdiv" aria-expanded="false" aria-controls="newpostdiv">
              New Post...
            </a>
            <div id="newpostdiv" class="container-fluid collapse">
              <form id="newpostform" action="newpost.php" method="post">
                <div class="form-group form-group-sm">
                  <label for="newposttitle">Title:</label>
                  <input id="newposttitle" class="form-control" type="text" placeholder="Title" name="newposttitle" />
                  <label for="newposttext">Text:</label>
                  <textarea id="newposttext" class="form-control custom-control" style="resize:none" placeholder="Text" name="newposttext" rows="8" cols="50"></textarea>
                </div>
                <div class="btn-group btn-group-sm pull-right">
                  <button id="postsubmit" class="btn btn-default" type="submit">Post</button>
                  <button id="postclear" class="btn btn-default" type="reset">Reset</button>
                </div>
              </form>
            </div>
          </li>
          <li class="list-group-item showmore">
            <h4><a href="#">Show More...</a></h4>
          </li>
        </ul>
      </div>
      
      <div id="newsfeed" class="col-sm-6 section">
        <h3>Latest News</h3>
        <ul class="list-group">
          <li class="list-group-item showmore">
            <h4><a href="#">Show More...</a></h4>
          </li>
        </ul>
      </div>
      
    </div>
    
    <div id="container2" class="col-sm-3">
    
      <div id="myfriendslist" class="section">
        <h3>My Friends</h3>
        <ul class="list-group">
          <li class="list-group-item showmore">
            <h4><a href="#">Show More...</a></h4>
          </li>
        </ul>
      </div>
      
      <div id="myeditslist" class="section">
        <h3>My Edits</h3>
        <ul class="list-group">
          <li class="list-group-item showmore">
            <h4><a href="#">Show More...</a></h4>
          </li>
        </ul>
      </div>
      
    </div>

  </div>
  
</div>

<!-- footer -->

<div id="footer" class="container section">
My Classical List is an experimental site and has no affiliation with any existing list site.
</div>

</body>
</html>

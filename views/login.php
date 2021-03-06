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

<!-- navbar -->

<nav id="topnav" class="navbar navbar-default" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">MyCL</a>
    </div>
    <div id="navbar1" class="collapse navbar-collapse main-nav">
      <ul class="nav navbar-nav navbar-left">
        
        <li class="dropdown" role="presentation">
          <a class="dropdown-toggle" data-target="#" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
            Composers
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><a href="search.php?type=composers">Composer Search</a></li>
            <li><a href="reviews.php?type=composers">Reviews</a></li>
            <li><a href="recommendations.php?type=composers">Reccomendations</a></li>
            <li><a href="toplist.php?type=composers">Top Composers</a></li>
          </ul>
        </li>
        
        <li class="dropdown" role="presentation">
          <a class="dropdown-toggle" data-target="#" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
            Works
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><a href="search.php?type=works">Work Search</a></li>
            <li><a href="reviews.php?type=works">Reviews</a></li>
            <li><a href="recommendations.php?type=works">Reccomendations</a></li>
            <li><a href="toplist.php?type=works">Top Works</a></li>
          </ul>
        </li>
        
        <li class="dropdown" role="presentation">
          <a class="dropdown-toggle" data-target="#" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
            Performances
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><a href="search.php?type=performances">Performance Search</a></li>
            <li><a href="reviews.php?type=performances">Reviews</a></li>
            <li><a href="recommendations.php?type=performances">Reccomendations</a></li>
            <li><a href="toplist.php?type=performances">Top Performances</a></li>
          </ul>
        </li>
        
        <li class="dropdown" role="presentation">
          <a class="dropdown-toggle" data-target="#" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
            Recordings
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><a href="search.php?type=recordings">Recording Search</a></li>
            <li><a href="reviews.php?type=recordings">Reviews</a></li>
            <li><a href="recommendations.php?type=recordings">Reccomendations</a></li>
            <li><a href="toplist.php?type=recordings">Top Recordings</a></li>
          </ul>
        </li>
        
        <li class="dropdown" role="presentation">
          <a class="dropdown-toggle" data-target="#" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
            Labels
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><a href="search.php?type=labels">Label Search</a></li>
            <li><a href="reviews.php?type=labels">Reviews</a></li>
            <li><a href="recommendations.php?type=labels">Reccomendations</a></li>
            <li><a href="toplist.php?type=labels">Top Labels</a></li>
          </ul>
        </li>
        
        <li role="presentation">
          <a href="signup.html">Sign Up</a>
        </li>
        
        <li role="presentation">
          <a href="login.html">Login</a>
        </li>
      </ul>
      
      <form id="searchform" class="navbar-form navbar-right" action="search.php" method="post" role="search">
        <div class="form-group form-group-sm">
          <input id="searchtextbox" class="form-control" type="text" placeholder="Search" name="searchtextbox" />
          <select id="searchcat" class="form-control">
            <option value="composers">Composers</option>
            <option value="works">Works</option>
            <option value="performances">Performances</option>
            <option value="recordings">Recordings</option>
            <option value="labels">Labels</option>
            <option value="labels">Users</option>
          </select>
        </div>
        <div class="btn-group btn-group-sm">
          <button id="searchsubmit" class="btn btn-default" type="submit">Search</button>
        </div>
      </form>
      
    </div>
  </div>
</nav>

<!-- header -->

<div id="header" class="section">
  <div class="container">
    <h1><a href="default.html">My Classical List</a> <small>v0.1a</small></h1>
  </div>
</div>

<!-- login -->

<div id="loginbody" class="container-fluid">
  <div class="row">
    <div id="empty" class="col-sm-4 section">
    </div>
    <div id="loginmain" class="col-sm-4 section">
      <div id="default_header"><h3>Login</h3>
      </div>
      <form id="loginform" action="login.php" method="post">
        <div class="form-group form-group-sm">
          <label for="username">Username:</label>
          <input id="username" class="form-control" type="text" placeholder="Username" name="username" maxlength="32" />
          <label for="password">Password:</label>
          <input id="password" class="form-control" type="text" placeholder="Password" name="password" maxlength="64" />
        </div>
        <div class="btn-group btn-group-sm pull-right">
          <button id="postlogin" class="btn btn-default" type="submit">Login</button>
          <button id="postclear" class="btn btn-default" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- footer -->

<div id="footer" class="container section">
My Classical List is an experimental site and has no affiliation with any existing list site.
</div>

</body>
</html>
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
            <li><a href="index.php?page=search&type=composers">Composer Search</a></li>
            <li><a href="views/reviews.php?type=composers">Reviews</a></li>
            <li><a href="views/recommendations.php?type=composers">Reccomendations</a></li>
            <li><a href="views/toplist.php?type=composers">Top Composers</a></li>
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
          <a href="signup.php">Sign Up</a>
        </li>
        
        <li role="presentation">
          <a href="login.php">Login</a>
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
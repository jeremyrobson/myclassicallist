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
<!doctype html>
<html lang="en">
<head>
  <title>My Classical List - v0.1a</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <link rel="stylesheet" type="text/css" href="views/css/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="views/css/bootstrap-theme.min.css" />
  <link rel="stylesheet" type="text/css" href="views/css/default.css" />
  <script src="views/js/jquery-2.1.3.min.js"></script>
  <script src="views/js/bootstrap.min.js"></script>
  <script src="views/js/default.js"></script>
  <script src="views/js/testdata.js"></script>
</head>
<body>

<?php include "views/navbar.php" ?>

<?php include "views/header.php" ?>

<?php include "views/subheader.php" ?>

<?php
  $page = "views/main.php";
  
  if ($_GET["page"] == "search")
    $page = "views/search.php";
  elseif ($_GET["page"] == "profile")
    $page = "views/profile.php";
  
  include $page;
 ?>

<?php include "views/footer.php" ?>

</body>
</html>

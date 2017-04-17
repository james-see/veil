<?php
$happymann = $_SERVER['HTTP_USER_AGENT'];
if(preg_match("/curl|libcurl/", $happymann)){
        header("location:disable.php");
die();
}
var_dump($_SERVER);
echo "<br />";
echo $_SERVER['HTTP_USER_AGENT'];
?>

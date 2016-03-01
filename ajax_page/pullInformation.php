<?php
include("../config/define.php");
$sqlDatabasePeople = mysql_query("select first_name,last_name from people where id='".$_REQUEST["userid"]."' ");
$FetchDatabasePeople= mysql_fetch_array($sqlDatabasePeople);
$arrayDatabase["first_name"]=$FetchDatabasePeople["first_name"];
$arrayDatabase["last_name"]=$FetchDatabasePeople["last_name"];
echo json_encode($arrayDatabase);

?>
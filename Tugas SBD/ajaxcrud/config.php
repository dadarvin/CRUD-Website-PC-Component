<?php

$host = "localhost";
$port = "5432";
$dbname = "sdb";
$user = "postgres";
$password = "123456";
$pg_options = "--client_encoding=UTF8";

$connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password} options='{$pg_options}'";
$dbconn = pg_connect($connection_string);

?>


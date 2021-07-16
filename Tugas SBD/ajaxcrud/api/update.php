<?php

require '../config.php';

$id  = $_POST["id"];
$post = $_POST;


  $sql = "UPDATE tbl_movie SET judul = '".$post['judul']."'
    ,sutradara = '".$post['sutradara']."' 
    ,aktor = '".$post['aktor']."' 
    ,tahun = '".$post['tahun']."' 
    WHERE id = '".$id."'";


  $result = pg_query($dbconn, $sql);


  $sql = "SELECT * FROM tbl_movie WHERE id = '".$id."'"; 


  $result = pg_query($dbconn, $sql);


  $data = pg_fetch_assoc($result);
  pg_close($dbconn);


  echo json_encode($data);


?>
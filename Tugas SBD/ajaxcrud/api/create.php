<?php
require '../config.php';


  $post = $_POST;


  $sql = "INSERT INTO tbl_movie (id, judul, sutradara, aktor, tahun) 


	VALUES ('".$post['id']."','".$post['judul']."', '".$post['sutradara']."', '".$post['aktor']."', '".$post['tahun']."')";


  $result = pg_query($dbconn, $sql);


  $sql = "SELECT * FROM tbl_movie Order by id desc LIMIT 1"; 


  $result = pg_query($dbconn, $sql);


  $data = pg_fetch_assoc($result);
  pg_close($dbconn);


echo json_encode($data);


?>
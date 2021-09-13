//fechou.php
<?php

$name = $_POST['name'];

file_put_contents("pessoas_que_fecharam.txt", $name);
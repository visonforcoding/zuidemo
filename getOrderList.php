<?php

/**
* Encoding     :   UTF-8
* Created on   :   2015-10-13 15:25:07 by caowenpeng ,  caowenpeng1990@126.com
* @link http://blog,rc5j.cn 博客地址
* 
*/

$conn = new mysqli('localhost','root','123456','test');
//$conn->query('SET NAMES UTF8');
$result = $conn->query('select * form employee');
var_dump($result);
if($result){
    $nums = $result->num_rows;
    $rows =$result->fetch_array();
    var_dump($rows);
}

/**
 * 
 * @param array $data
 */
function ajaxReturn(array $data) {
    exit(json_encode($data, JSON_UNESCAPED_UNICODE));
}
<?php

/**
 * Encoding     :   UTF-8
 * Created on   :   2015-10-13 15:25:07 by caowenpeng ,  caowenpeng1990@126.com
 * @link http://blog,rc5j.cn 博客地址
 * 
 */
$conn = new mysqli('localhost', 'root', '123456', 'test');
$conn->query('SET NAMES UTF8');
$page = $_POST['page'];
$pageSize = $_POST['rows'];
$sort = $_POST['sord'];
$order = $_POST['sidx'];
$offset = ($page - 1) * $pageSize; //分页起始条数
$sql = "select * from employee order by $order $sort limit $offset, $pageSize";
$result = $conn->query($sql);
$rows = [];
if ($result) {
    $nums = $result->num_rows;
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
}
if ($nums > 0) {
    $total_pages = ceil($nums / $pageSize);
} else {
    $total_pages = 0;
}
$arr_json = array('page' => $page, 'total' => $total_pages, 'records' => $nums, 'rows' => $rows);
ajaxReturn($arr_json);

/**
 * 
 * @param array $data
 */
function ajaxReturn(array $data) {
    header('content-type:application/json;charset=utf8');
    exit(json_encode($data, JSON_UNESCAPED_UNICODE));
}

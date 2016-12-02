-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.6.24 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 test.employee 结构
CREATE TABLE IF NOT EXISTS `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_no` varchar(50) NOT NULL DEFAULT '0' COMMENT '员工编号',
  `username` varchar(50) NOT NULL DEFAULT '0' COMMENT '用户名',
  `pwd` varchar(50) NOT NULL DEFAULT '0' COMMENT '密码',
  `truename` varchar(50) NOT NULL DEFAULT '0' COMMENT '真实姓名',
  `tel` varchar(20) NOT NULL DEFAULT '0' COMMENT '电话号码',
  `ctime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `utime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='门店职员';

-- 正在导出表  test.employee 的数据：~5 rows (大约)
DELETE FROM `employee`;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`id`, `employee_no`, `username`, `pwd`, `truename`, `tel`, `ctime`, `utime`) VALUES
	(3, 'AXDR7NP2B8C8', 'allen_3', '8fae0b73758389054c70d8eb7d17ed', '地卜师', '15297762907', '2015-10-08 19:28:24', '2015-10-08 19:48:29'),
	(4, 'AXDR7NP2B8C4', 'allen_4', '8fae0b73758389054c70d8eb7d17ed', '敌法师', '15297762907', '2015-10-08 19:28:24', '2015-10-08 19:48:29'),
	(5, 'AXDR7NP2B8C5', 'allen_5', '8fae0b73758389054c70d8eb7d17ed', '卡尔', '15297762907', '2015-10-08 19:28:24', '2015-10-08 19:48:29'),
	(6, 'AXDR7NP2B8C5', 'allen_5', '8fae0b73758389054c70d8eb7d17ed', '斧王', '15297762907', '2015-10-08 19:28:24', '2015-10-08 19:48:29'),
	(7, 'AXDR7NP2B8C5', 'allen_5', '8fae0b73758389054c70d8eb7d17ed', '痛苦女王', '15297762907', '2015-10-08 19:28:24', '2015-10-08 19:48:29');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

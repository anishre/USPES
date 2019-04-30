-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 08, 2019 at 06:57 AM
-- Server version: 8.0.15
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ionicdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `programme`
--

CREATE TABLE `programme` (
  `pid` char(100) DEFAULT NULL,
  `programme` varchar(255) NOT NULL,
  `course_code` varchar(255) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `sem_offered` char(10) NOT NULL,
  `prereq` varchar(255) NOT NULL,
  `status` enum('Available','Enrolled','Completed') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `programme`
--

INSERT INTO `programme` (`pid`, `programme`, `course_code`, `course_name`, `sem_offered`, `prereq`, `status`) VALUES
('0', 'BNS', 'CS111', 'Introduction to C++', 'One', 'None', 'Available'),
('1', 'BNS', 'MA111', 'Linear Algebra', 'One', 'None', 'Available'),
('2', 'BNS', 'ST131', 'Statistics', 'One', 'None', 'Available'),
('3', 'BNS', 'UU114', 'Academic English', 'One/Two', 'None', 'Available'),
('4', 'BNS', 'MA161', 'Discrete Mathematics', 'Two', 'None', 'Available'),
('5', 'BNS', 'MG101', 'Management for Developers', 'Two', 'None', 'Available'),
('6', 'BNS', 'CS150', 'Networks and Security Fundamentals', 'Two', 'None', 'Available'),
('7', 'BNS', 'UU100A', 'ICT Tools', 'One/Two', 'None', 'Available'),
('8', 'BNS', 'CS112', 'Data Structures', 'Two', 'CS111', 'Available'),
('9', 'BNS', 'CS211', 'Computer Organization', 'One', 'CS111', 'Available'),
('10', 'BNS', 'CS214', 'Algorithms', 'Two', 'CS112', 'Available'),
('11', 'BNS', 'CS218', 'Networks', 'One', 'None', 'Available'),
('12', 'BNS', 'CS215', 'Building Applications', 'Two', 'CS112', 'Available'),
('13', 'BNS', 'IS221', 'Web Development', 'One', 'None', 'Available'),
('14', 'BNS', 'IS222', 'Database Management', 'One', 'None', 'Available'),
('15', 'BNS', 'UU200', 'Ethics', 'One/Two', 'None', 'Available'),
('16', 'BNS', 'CS001', 'Foundations of Professionalism', 'One/Two', 'Year 2, Semester One', 'Available'),
('17', 'BNS', 'CS310', 'Routing Protcols', 'One', 'None', 'Available'),
('18', 'BNS', 'CS311', 'Distributed Computing', 'One', 'CS211', 'Available'),
('19', 'BNS', 'CS317', 'Security', 'One', 'None', 'Available'),
('20', 'BNS', 'CS324', 'Architectures and Computing', 'Two', 'CS214', 'Available'),
('21', 'BNS', 'IS333', 'Project Management', 'One', 'None', 'Available'),
('22', 'BNS', 'CS350', 'Distributed Computing', 'One', 'CS215', 'Available'),
('23', 'BNS', 'CS351', 'Testing and Maintenance', 'One', 'CS218', 'Available'),
('24', 'BNS', 'CS352', 'Project', 'Two', 'CS351', 'Available'),
('25', 'BNS', 'IS328', 'Data Mining', 'Two', 'None', 'Available'),
('26', 'BNS', 'CS415', 'Advanced Networks and Security', 'One', '300 Level Units', 'Available'),
('27', 'BNS', 'CS424', 'Big Data', 'One', 'IS328', 'Available'),
('28', 'BNS', 'CSS400', 'IEP', 'Two', 'All Previous Units', 'Available'),
('29', 'BSE', 'CS111', 'Introduction to C++', 'One', 'None', 'Available'),
('30', 'BSE', 'MA111', 'Linear Algebra', 'One', 'None', 'Available'),
('31', 'BSE', 'ST131', 'Statistics', 'One', 'None', 'Available'),
('32', 'BSE', 'UU114', 'Academic English', 'One/Two', 'None', 'Available'),
('33', 'BSE', 'MA161', 'Discrete Mathematics', 'Two', 'None', 'Available'),
('34', 'BSE', 'MG101', 'Management for Developers', 'Two', 'None', 'Available'),
('35', 'BSE', 'CS140', 'Software Engineering Fundamentals', 'Two', 'None', 'Available'),
('36', 'BSE', 'UU100A', 'ICT Tools', 'One/Two', 'None', 'Available'),
('37', 'BSE', 'CS112', 'Data Structures', 'Two', 'CS111', 'Available'),
('38', 'BSE', 'CS211', 'Computer Organization', 'One', 'CS111', 'Available'),
('39', 'BSE', 'CS214', 'Algorithms', 'Two', 'CS112', 'Available'),
('40', 'BSE', 'CS218', 'Networks', 'One', 'None', 'Available'),
('41', 'BSE', 'CS230', 'Software', 'Two', 'CS140', 'Available'),
('42', 'BSE', 'CS241', 'Building Applications', 'Two', 'CS112', 'Available'),
('43', 'BSE', 'IS221', 'Web Development', 'One', 'None', 'Available'),
('44', 'BSE', 'IS222', 'Database Management', 'One', 'None', 'Available'),
('45', 'BSE', 'UU200', 'Ethics', 'One/Two', 'None', 'Available'),
('46', 'BSE', 'CS001', 'Foundations of Professionalism', 'One/Two', 'Year 2, Semester One', 'Available'),
('47', 'BSE', 'CS310', 'Routing Protcols', 'One', 'None', 'Available'),
('48', 'BSE', 'CS311', 'Distributed Computing', 'One', 'CS211', 'Available'),
('49', 'BSE', 'CS324', 'Architectures and Computing', 'Two', 'CS214', 'Available'),
('50', 'BSE', 'IS333', 'Project Management', 'One', 'None', 'Available'),
('51', 'BSE', 'CS341', 'Testing and Maintenance', 'Two', 'CS241', 'Available'),
('52', 'BSE', 'IS314', 'Project', 'Two', '200 Level Units', 'Available'),
('53', 'BSE', 'IS328', 'Data Mining', 'Two', 'None', 'Available'),
('54', 'BSE', 'CS415', 'Advanced Software Engineering', 'One', '300 Level Units', 'Available'),
('55', 'BSE', 'CS424', 'Big Data', 'One', 'IS328', 'Available'),
('56', 'BSE', 'CS400', 'IEP', 'Two', 'All Previous Units', 'Available');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `programme`
--
ALTER TABLE `programme`
  ADD UNIQUE KEY `pid` (`pid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

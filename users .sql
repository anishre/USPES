-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2019 at 08:31 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.26

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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telephone` varchar(25) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `DOB` date DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `citizenship` varchar(255) DEFAULT NULL,
  `campus` varchar(255) DEFAULT NULL,
  `program_name` varchar(255) DEFAULT NULL,
  `year_joined` year(4) DEFAULT NULL,
  `major_type` varchar(255) DEFAULT NULL,
  `major_one` varchar(255) DEFAULT NULL,
  `major_two` varchar(255) DEFAULT NULL,
  `minor_one` varchar(255) DEFAULT NULL,
  `minor_two` varchar(255) DEFAULT NULL,
  `status` enum('Available','Hold') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `telephone`, `email`, `name`, `role`, `DOB`, `gender`, `citizenship`, `campus`, `program_name`, `year_joined`, `major_type`, `major_one`, `major_two`, `minor_one`, `minor_two`, `status`) VALUES
(0, 'S11132121', 'root', '80252107', 'S11132121@student.usp.ac.fj', 'Anish Reddy', 'student', '1997-08-25', 'Male', 'Fijian', 'Laucala', 'BSE', 2016, 'None', '', '', '', '', 'Available'),
(1, 'S11133633', 'root', '8060708', 'S11133633@student.usp.ac.fj', 'Farhan Firoz', 'student', '1997-08-05', 'Male', 'Fijian', 'Laucala', 'BSE', 2016, 'Double', 'Computer Science', 'Information System', '', '', 'Hold'),
(2, 'S11134070', 'root', '8613659', 'S111334070@student.usp.ac.fj', 'Akif Hussein', 'student', '0000-00-00', 'Male', 'Fijian', 'Laucala', 'BSE', 2016, 'None', '', '', '', '', 'Available'),
(3, 'S11132207', 'root', '9415969', 'S11132207@student.usp.ac.fj', 'Yogesh Reddy', 'student', '1997-03-30', 'Male', 'Fijian', 'Laucala', 'BSE', 2016, 'None', '', '', '', '', 'Available');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2015 at 03:23 PM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `continuous`
--

-- --------------------------------------------------------

--
-- Table structure for table `appuser`
--

CREATE TABLE IF NOT EXISTS `appuser` (
  `username` varchar(120) COLLATE latin1_general_ci NOT NULL,
  `user_password` varchar(120) COLLATE latin1_general_ci NOT NULL,
  `user_name` varchar(120) COLLATE latin1_general_ci NOT NULL,
  `user_phone` varchar(20) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `appuser`
--

INSERT INTO `appuser` (`username`, `user_password`, `user_name`, `user_phone`) VALUES
('benson', 'wachira', 'ben', '0542615890'),
('salifu123', 'mole123', 'Salifu Mutaru', '0543344100');

-- --------------------------------------------------------

--
-- Table structure for table `land`
--

CREATE TABLE IF NOT EXISTS `land` (
  `username` varchar(120) COLLATE latin1_general_ci NOT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `city_id` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `farm_name` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `farm_size` double DEFAULT NULL,
  `city` varchar(30) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `land`
--

INSERT INTO `land` (`username`, `latitude`, `longitude`, `city_id`, `farm_name`, `farm_size`, `city`) VALUES
('salifu123', NULL, NULL, NULL, 'Kumasi Cocoa Planet', NULL, 'Accra'),
('salifu123', 8275, 4856, '346', 'yam', 6, 'Accra'),
('salifu123', 234, 3465364, '428', 'maize farm', 10, 'Accra'),
('benson', 237, 47347, 'ef', 'ufhru', 27, 'Accra'),
('salifu123', NULL, NULL, NULL, 'Precious home', NULL, 'Accra'),
('salifu123', NULL, NULL, NULL, 'Joy home', NULL, 'Accra'),
('benson', 34347, 345738, '277', 'maize', 4, 'Kumasi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appuser`
--
ALTER TABLE `appuser`
  ADD PRIMARY KEY (`username`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

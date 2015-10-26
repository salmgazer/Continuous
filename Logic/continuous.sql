-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2015 at 10:14 AM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

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
  `user_phone` varchar(20) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `appuser`
--

INSERT INTO `appuser` (`username`, `user_password`, `user_name`, `user_phone`) VALUES
('salifu123', 'mole123##', 'Salifu Mutaru', '0543344100');

-- --------------------------------------------------------

--
-- Table structure for table `land`
--

CREATE TABLE IF NOT EXISTS `land` (
  `username` varchar(120) COLLATE latin1_general_ci NOT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `city` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `city_id` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `farm_name` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`city`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `land`
--

INSERT INTO `land` (`username`, `latitude`, `longitude`, `city`, `city_id`, `farm_name`) VALUES
('salifu123', NULL, NULL, 'Accra', NULL, 'Kumasi Cocoa Planet'),
('salifu123', NULL, NULL, 'Takoradi', NULL, 'Precious home'),
('salifu123', NULL, NULL, 'Tamale', NULL, 'Joy home');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

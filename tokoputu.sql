-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2023 at 10:02 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tokoputu`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `uuid`, `name`, `price`, `userId`, `createdAt`, `updatedAt`) VALUES
(8, '7687a138-743a-436e-b4df-adb63477fa2a', 'sate', 123, 5, '2023-04-12 01:47:52', '2023-04-12 01:47:52'),
(9, '9bea4743-b4cf-4542-98f0-d636fdf62d9d', 'baju', 342, 5, '2023-04-12 01:48:03', '2023-04-12 01:48:03'),
(10, '233363d4-b8f5-4c04-bf6a-96c087bc0fb6', 'pakaian', 675, 5, '2023-04-12 01:48:52', '2023-04-12 01:48:52'),
(11, '167e1626-7916-459f-b444-404c7c639a12', 'pakaian', 342, 12, '2023-04-12 05:46:57', '2023-04-12 05:49:50');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('cHSGjpiHaSzmpa6JyPIaZHN7uYLm11qD', '2023-04-19 07:47:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-04-18 07:47:33', '2023-04-18 07:47:33'),
('jHk-Zg9LOZ5YUbBBZKO8xdVQ3eR4Y2s-', '2023-04-19 07:46:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-04-18 07:46:55', '2023-04-18 07:46:55'),
('nsw3ikbR2F5HfR0yeOiFBzjFQBgem78R', '2023-04-19 07:47:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"f163d38c-dda3-46d3-91b2-d827d4019ca4\"}', '2023-04-18 07:47:56', '2023-04-18 07:47:56'),
('sLjFWy1et0M1uA3auE_OOQTcFtn7oNE6', '2023-04-19 07:47:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-04-18 07:47:56', '2023-04-18 07:47:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(5, 'f163d38c-dda3-46d3-91b2-d827d4019ca4', 'sena ani', 'ani@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$Zh+MV1K3NvTllk0kUhBoPQ$sOIxhFG00Wnx59cEBOlDm7XLVxd1/+lOo2JukMPUPyc', 'User', '2023-04-11 03:11:25', '2023-04-12 05:39:09'),
(6, '72b9e67a-75e9-4b93-b57e-ec682149fa71', 'nata', 'nata@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$eGvmE/GpoI5MesE0X2dBHg$AcC+PaNfaCnsnjTOqkRe/wD0lo6ACWdOujRDZBUAlVs', 'admin', '2023-04-11 06:09:40', '2023-04-11 06:09:40'),
(10, 'b3b71e75-2610-4a3b-a9bf-469aacc909b4', 'Sena_Pernata-UX-TUTOR', 'senasmk@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$rL7nJi2WQ5xy7AiJ0wTXqg$UxPSg9DHUYbIsuFdSyBkTrU+jL31UdxZHIUKwtwPRAY', 'admin', '2023-04-12 05:27:23', '2023-04-12 05:33:48'),
(11, '63aa97b2-b239-4b8b-b298-9da84f340bdf', 'sddd', 'asajgdh@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$52/bsFhRJKM0rpJOuH6HRQ$SPP1/DySmTi9o6XCfmkXxuSvJrA2HmLIFnArHFqSqHc', 'User', '2023-04-12 05:30:04', '2023-04-12 05:30:04'),
(12, 'e37676ea-eda1-40b6-8f3f-231cc4a9a723', 'admin', 'admin@jj.com', '$argon2id$v=19$m=65536,t=3,p=4$R5GcGmzSztGr6Dp4aN4o9w$NyPRF/MzJkNGCKD9v2pUVY2CohdOit1SCYoE0l7gTXs', 'user', '2023-04-12 05:38:59', '2023-04-12 05:38:59'),
(13, 'c0a67259-c7ea-4e49-908b-44bae1ec233d', 'thrtrht', 'haskdasjk@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$M84phhrPIDUQhCFpoPdx6Q$eNP6zCOwrrEO57b5t/lYDeGUsaol7Q7v8jyk0IKcMJM', 'Admin', '2023-04-12 05:42:04', '2023-04-12 05:42:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

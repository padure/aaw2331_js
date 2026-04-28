-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gazdă: 127.0.0.1
-- Timp de generare: apr. 28, 2026 la 10:04 AM
-- Versiune server: 10.4.32-MariaDB
-- Versiune PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `laborator27`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` enum('pending','in_progress','completed') DEFAULT 'pending',
  `priority` enum('low','medium','high') DEFAULT 'medium',
  `deadline` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Eliminarea datelor din tabel `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `status`, `priority`, `deadline`, `created_at`) VALUES
(2, 'Design Homepage New', 'Crearea layout-ului pentru pagina principală în Figma.', 'completed', 'medium', '2024-05-04', '2026-04-28 06:04:33'),
(3, 'Integrare API Stripe', 'Implementarea modulului de plăți online.', 'completed', 'high', '2024-05-13', '2026-04-28 06:04:33'),
(4, 'Refactorizare cod Auth', 'Curățarea codului pentru modulul de autentificare.', 'completed', 'low', '2024-05-19', '2026-04-28 06:04:33'),
(5, 'Testare QA - Mobile', 'Testarea aplicației pe dispozitive Android și iOS.', 'in_progress', 'high', '2024-05-12', '2026-04-28 06:04:33'),
(6, 'Update Politica Privacy', 'Actualizarea termenilor și condițiilor conform GDPR.', 'pending', 'low', '2024-06-01', '2026-04-28 06:04:33'),
(7, 'Optimizare Imagini', 'Comprimarea activelor grafice pentru viteza de încărcare.', 'completed', 'medium', '2024-04-28', '2026-04-28 06:04:33'),
(8, 'Fix Bug Login', 'Rezolvarea erorii la resetarea parolei prin email.', 'completed', 'high', '2024-05-09', '2026-04-28 06:04:33'),
(9, 'Documentație API', 'Scrierea documentației Swagger pentru endpoint-urile noi.', 'pending', 'medium', '2024-05-25', '2026-04-28 06:04:33'),
(10, 'Newsletter Iunie', 'Pregătirea designului pentru campania de email de vară.', 'completed', 'low', '2024-05-29', '2026-04-28 06:04:33');

--
-- Indexuri pentru tabele eliminate
--

--
-- Indexuri pentru tabele `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pentru tabele eliminate
--

--
-- AUTO_INCREMENT pentru tabele `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

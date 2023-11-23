-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 23, 2023 at 01:47 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dziennik`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klasy`
--

CREATE TABLE `klasy` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL,
  `szkola` int(11) DEFAULT NULL,
  `wychowawca` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `klasy`
--

INSERT INTO `klasy` (`id`, `nazwa`, `szkola`, `wychowawca`) VALUES
(1, '4A', 1, 1),
(2, '4B', 1, 2),
(3, '4C', 1, 3),
(4, '4D', 1, 4),
(5, '4E', 1, 5);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `nauczyciele`
--

CREATE TABLE `nauczyciele` (
  `id` int(11) NOT NULL,
  `imie` varchar(255) NOT NULL,
  `nazwisko` varchar(255) NOT NULL,
  `przedmiot` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nauczyciele`
--

INSERT INTO `nauczyciele` (`id`, `imie`, `nazwisko`, `przedmiot`) VALUES
(1, 'Karol', 'Marks', 'filozofia'),
(2, 'Bolesław', 'Bierut', 'WDŻ'),
(3, 'Józef', 'Stalin', 'WOS'),
(4, 'George', 'Orwell', 'angielski'),
(5, 'Stanisław', 'Lem', 'polski');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `szkoly`
--

CREATE TABLE `szkoly` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `szkoly`
--

INSERT INTO `szkoly` (`id`, `nazwa`) VALUES
(1, 'ZSŁ'),
(2, 'TEB');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uczniowie`
--

CREATE TABLE `uczniowie` (
  `id` int(11) NOT NULL,
  `imie` varchar(255) NOT NULL,
  `nazwisko` varchar(255) NOT NULL,
  `plec` int(11) DEFAULT NULL,
  `klasa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uczniowie`
--

INSERT INTO `uczniowie` (`id`, `imie`, `nazwisko`, `plec`, `klasa`) VALUES
(1, 'Anna', 'Kowalska', 0, 1),
(2, 'Jan', 'Nowak', 1, 2),
(3, 'Aleksandra', 'Wiśniewska', 0, 3),
(4, 'Piotr', 'Kaczmarek', 1, 1),
(5, 'Magdalena', 'Lewandowska', 0, 2),
(6, 'Kamil', 'Wójcik', 1, 3),
(7, 'Wiktoria', 'Kamińska', 0, 4),
(8, 'Bartosz', 'Zieliński', 1, 5),
(9, 'Natalia', 'Szymańska', 0, 1),
(10, 'Michał', 'Woźniak', 1, 2),
(11, 'Karolina', 'Dąbrowska', 0, 3),
(12, 'Kacper', 'Jankowski', 1, 4),
(13, 'Oliwia', 'Mazur', 0, 5),
(14, 'Mateusz', 'Kwiatkowski', 1, 1),
(15, 'Zuzanna', 'Krawczyk', 0, 2),
(16, 'Adam', 'Wojciechowski', 1, 3),
(17, 'Nikola', 'Kaczmarczyk', 0, 4),
(18, 'Dominik', 'Grabowski', 1, 5),
(19, 'Hanna', 'Piotrowska', 0, 1),
(20, 'Filip', 'Sikorski', 1, 2),
(21, 'Laura', 'Witkowska', 0, 3),
(22, 'Julia', 'Baran', 1, 4),
(23, 'Ignacy', 'Rutkowski', 1, 5),
(24, 'Gabriel', 'Kalinowski', 1, 1),
(25, 'Maja', 'Duda', 0, 2),
(26, 'Mikołaj', 'Zając', 1, 3),
(27, 'Oliwier', 'Walczak', 1, 4),
(28, 'Szymon', 'Wróbel', 1, 5),
(29, 'Patrycja', 'Pawlak', 0, 1),
(30, 'Aleksander', 'Michalak', 1, 2),
(31, 'Roksana', 'Lis', 0, 3),
(32, 'Tymon', 'Mazurek', 1, 4),
(33, 'Weronika', 'Górski', 0, 5),
(34, 'Stanisław', 'Szewczyk', 1, 1),
(35, 'Milena', 'Włodarczyk', 0, 2),
(36, 'Oskar', 'Jakubowski', 1, 3),
(37, 'Julian', 'Kaczor', 1, 4),
(38, 'Adrianna', 'Łukasik', 0, 5),
(39, 'Konrad', 'Głowacki', 1, 1),
(40, 'Olivia', 'Jabłoński', 0, 2),
(41, 'Nadia', 'Olszewski', 0, 3),
(42, 'Sebastian', 'Kołodziej', 1, 4),
(43, 'Nikodem', 'Jaworski', 1, 5),
(44, 'Nina', 'Kaczmarczyk', 0, 1),
(45, 'Bianka', 'Zalewski', 0, 2),
(46, 'Natasza', 'Witkowska', 0, 3),
(47, 'Bartłomiej', 'Pawłowski', 1, 4),
(48, 'Maksymilian', 'Marek', 1, 5),
(49, 'Nikola', 'Gajewski', 1, 1),
(50, 'Marcelina', 'Majewski', 0, 2);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `klasy`
--
ALTER TABLE `klasy`
  ADD PRIMARY KEY (`id`),
  ADD KEY `szkola` (`szkola`),
  ADD KEY `wychowawca` (`wychowawca`);

--
-- Indeksy dla tabeli `nauczyciele`
--
ALTER TABLE `nauczyciele`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `szkoly`
--
ALTER TABLE `szkoly`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `uczniowie`
--
ALTER TABLE `uczniowie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `klasa` (`klasa`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `klasy`
--
ALTER TABLE `klasy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `nauczyciele`
--
ALTER TABLE `nauczyciele`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `szkoly`
--
ALTER TABLE `szkoly`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `uczniowie`
--
ALTER TABLE `uczniowie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `klasy`
--
ALTER TABLE `klasy`
  ADD CONSTRAINT `klasy_ibfk_1` FOREIGN KEY (`szkola`) REFERENCES `szkoly` (`id`),
  ADD CONSTRAINT `klasy_ibfk_2` FOREIGN KEY (`wychowawca`) REFERENCES `nauczyciele` (`id`);

--
-- Constraints for table `uczniowie`
--
ALTER TABLE `uczniowie`
  ADD CONSTRAINT `uczniowie_ibfk_1` FOREIGN KEY (`klasa`) REFERENCES `klasy` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

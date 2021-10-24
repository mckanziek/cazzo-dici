-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql24j07.db.hostpoint.internal
-- Creato il: Set 19, 2021 alle 22:22
-- Versione del server: 10.3.29-MariaDB-log
-- Versione PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE cazzodici;

USE cazzodici;

--
-- Database: `awelixar_cazzoDici`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `COMMENT`
--

CREATE TABLE `COMMENT` (
  `COMMENT_ID` int(11) NOT NULL,
  `USERNAME` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `VALUE` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PUBLISH_DATE` datetime NOT NULL,
  `PHRASE_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `PHRASE`
--

CREATE TABLE `PHRASE` (
  `PHRASE_ID` int(11) NOT NULL,
  `VALUE` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CONTEXT` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DATE` datetime NOT NULL,
  `OWNER` int(11) NOT NULL,
  `CREATE_BY` int(11) NOT NULL,
  `VOLUME_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `USER`
--

CREATE TABLE `USER` (
  `USER_ID` int(11) NOT NULL,
  `NAME` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PASSWORD` char(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `COLOR` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `VOLUME`
--

CREATE TABLE `VOLUME` (
  `VOLUME_ID` int(11) NOT NULL,
  `YEAR` year(4) NOT NULL,
  `NUMBER` int(11) NOT NULL,
  `START_DATE` datetime NOT NULL,
  `END_DATE` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `COMMENT`
--
ALTER TABLE `COMMENT`
  ADD PRIMARY KEY (`COMMENT_ID`),
  ADD KEY `PHRASE_ID` (`PHRASE_ID`);

--
-- Indici per le tabelle `PHRASE`
--
ALTER TABLE `PHRASE`
  ADD PRIMARY KEY (`PHRASE_ID`),
  ADD KEY `OWNER` (`OWNER`),
  ADD KEY `CREATE_BY` (`CREATE_BY`),
  ADD KEY `VOLUME` (`VOLUME_ID`);

--
-- Indici per le tabelle `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`USER_ID`);

--
-- Indici per le tabelle `VOLUME`
--
ALTER TABLE `VOLUME`
  ADD PRIMARY KEY (`VOLUME_ID`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `COMMENT`
--
ALTER TABLE `COMMENT`
  MODIFY `COMMENT_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `PHRASE`
--
ALTER TABLE `PHRASE`
  MODIFY `PHRASE_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `USER`
--
ALTER TABLE `USER`
  MODIFY `USER_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `VOLUME`
--
ALTER TABLE `VOLUME`
  MODIFY `VOLUME_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `COMMENT`
--
ALTER TABLE `COMMENT`
  ADD CONSTRAINT `PHRASE_ID` FOREIGN KEY (`PHRASE_ID`) REFERENCES `PHRASE` (`PHRASE_ID`);

--
-- Limiti per la tabella `PHRASE`
--
ALTER TABLE `PHRASE`
  ADD CONSTRAINT `CREATE_BY` FOREIGN KEY (`CREATE_BY`) REFERENCES `USER` (`USER_ID`),
  ADD CONSTRAINT `OWNER` FOREIGN KEY (`OWNER`) REFERENCES `USER` (`USER_ID`),
  ADD CONSTRAINT `VOLUME` FOREIGN KEY (`VOLUME_ID`) REFERENCES `VOLUME` (`VOLUME_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

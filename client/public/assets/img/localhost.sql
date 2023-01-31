-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : Dim 08 jan. 2023 à 09:21
-- Version du serveur :  10.3.37-MariaDB-log-cll-lve
-- Version de PHP : 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `foorquex_forsa`
--
CREATE DATABASE IF NOT EXISTS `foorquex_forsa` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `foorquex_forsa`;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Spain', NULL, NULL),
(2, 'China', NULL, NULL),
(3, 'Cyprus', NULL, NULL),
(4, 'Turkey', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `consultant`
--

CREATE TABLE `consultant` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `consultant`
--

INSERT INTO `consultant` (`id`, `name`, `created_at`, `updated_at`) VALUES
(31, 'Issam Assouih', '2022-12-24 20:59:54', '2022-12-24 20:59:54'),
(18, 'Aymane El Hiyani', '2022-12-24 18:58:05', '2022-12-24 18:58:05'),
(13, 'Ikram El Oulliche', '2022-12-24 18:56:33', '2022-12-24 18:56:33'),
(17, 'Chaimae Sadoune', '2022-12-24 18:57:53', '2022-12-24 18:57:53'),
(16, 'Chaimae Maghfoul', '2022-12-24 18:57:43', '2022-12-24 18:57:43'),
(15, 'Fatima ezzahra El Ghazi', '2022-12-24 18:57:21', '2022-12-24 18:57:21'),
(20, 'Soukaina Machichi', '2022-12-24 18:58:26', '2022-12-24 18:58:26'),
(23, 'Amal El Finari', '2022-12-24 20:53:31', '2022-12-24 20:53:31');

-- --------------------------------------------------------

--
-- Structure de la table `customer`
--

CREATE TABLE `customer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_number` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `consultant` varchar(255) NOT NULL,
  `file_link` varchar(255) NOT NULL,
  `manager_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Pre-applicant',
  `destination_id` bigint(20) NOT NULL,
  `saison` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `last_degree` varchar(255) DEFAULT NULL,
  `future_degree` varchar(255) DEFAULT NULL,
  `future_major` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `expenses`
--

CREATE TABLE `expenses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `amount` decimal(8,2) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Unpaid',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `note` text DEFAULT NULL,
  `benefeciant_id` bigint(20) UNSIGNED DEFAULT NULL,
  `recurring` tinyint(1) NOT NULL DEFAULT 0,
  `recurring_date` date DEFAULT NULL,
  `recurring_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `expenses`
--

INSERT INTO `expenses` (`id`, `category_id`, `date`, `amount`, `payment_method`, `status`, `created_at`, `updated_at`, `note`, `benefeciant_id`, `recurring`, `recurring_date`, `recurring_type`) VALUES
(15, 18, '2023-01-01 00:00:00', '2000.00', 'Bank', 'Paid', '2023-01-02 22:48:40', '2023-01-08 20:15:09', 'Testing Quarterly Recurring Expenses', 10, 1, '2023-07-02', 'Quarterly');

-- --------------------------------------------------------

--
-- Structure de la table `expenses_benefeciant`
--

CREATE TABLE `expenses_benefeciant` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `id_number` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `scanned_contract_link` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `expenses_benefeciant`
--

INSERT INTO `expenses_benefeciant` (`id`, `name`, `id_number`, `phone`, `address`, `scanned_contract_link`, `created_at`, `updated_at`, `category_id`) VALUES
(10, 'Yassine Chettouch', 'AS19302', '+212 070 88 78 40', 'Street Moulay Rachid, Suite Sidi Benacher', 'https://www.github.com/yassine-ct/', '2023-01-02 22:32:44', '2023-01-02 22:32:44', 18);

-- --------------------------------------------------------

--
-- Structure de la table `expenses_categories`
--

CREATE TABLE `expenses_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `expenses_categories`
--

INSERT INTO `expenses_categories` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Rent', 'Rent expenses', NULL, NULL),
(2, 'Salaries', 'Salaries expenses', NULL, NULL),
(3, 'Mobile subscription', 'Mobile subscription expenses', NULL, NULL),
(4, 'Wifi', 'Wifi expenses', NULL, NULL),
(5, 'Electricity Bill', 'Electricity Bill expenses', NULL, NULL),
(6, 'Facebook Advertising', 'Facebook Advertising expenses', NULL, NULL),
(7, 'Tiktok Advertising', 'Tiktok Advertising expenses', NULL, NULL),
(8, 'Google Advertising', 'Google Advertising expenses', NULL, NULL),
(9, 'Influencers marketing', 'Influencers marketing expenses', NULL, NULL),
(10, 'Events', 'Events expenses', NULL, NULL),
(11, 'Printables', 'Printables expenses', NULL, NULL),
(12, 'Fixables', 'Fixables expenses', NULL, NULL),
(13, 'Offline Advertising', 'Offline Advertising expenses', NULL, NULL),
(14, 'CNSS', 'CNSS expenses', NULL, NULL),
(15, 'Impot sur Revenue', 'Impot sur Revenue expenses', NULL, NULL),
(16, 'Impôt sur société', 'Impôt sur société expenses', NULL, NULL),
(17, 'Accountant Fee', 'Accountant Fee expenses', NULL, NULL),
(18, 'Bonus', 'Bonus expenses', NULL, NULL),
(19, 'HR Activities and Gifts', 'HR Activities and Gifts expenses', NULL, NULL),
(20, 'HR Investment', 'HR Investment expenses', NULL, NULL),
(21, 'Marketing Investment', 'Marketing Investment expenses', NULL, NULL),
(22, 'Sales Investment', 'Sales Investment expenses', NULL, NULL),
(23, 'International Relations Investment', 'International Relations Investment expenses', NULL, NULL),
(24, 'Other investements', 'Other investements expenses', NULL, NULL),
(25, 'Food', 'Food expenses', NULL, NULL),
(26, 'Loan', 'Loan expenses', NULL, NULL),
(27, 'Transportation', 'Transportation expenses', NULL, NULL),
(28, 'Refund', 'Refund expenses', NULL, NULL),
(29, 'China fees', 'China fees expenses', NULL, NULL),
(33, 'Reparation Agence', NULL, '2022-12-25 21:19:36', '2022-12-25 21:19:36');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `group`
--

CREATE TABLE `group` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `group`
--

INSERT INTO `group` (`id`, `name`, `address`, `created_at`, `updated_at`) VALUES
(1, 'Foorsa Consulting Group', 'Fal ould oumeir immeuble 55 appartement 4, Rabat, Maroc', NULL, NULL),
(2, 'Foorsa Consulting Group II', 'Rue Mohamed Diouri Bureau Numero 5, Kenitra 14050', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `invoice`
--

CREATE TABLE `invoice` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `raised_date` date NOT NULL DEFAULT '2022-12-07',
  `due_date` date NOT NULL DEFAULT current_timestamp(),
  `summary` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Unpaid',
  `raised_by` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `group_id` bigint(20) NOT NULL,
  `prefixed_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `invoice_items`
--

CREATE TABLE `invoice_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `invoice_items`
--

INSERT INTO `invoice_items` (`id`, `invoice_id`, `item_id`, `discount`, `created_at`, `updated_at`) VALUES
(20, 14, 2, 20, '2022-12-14 10:50:16', '2022-12-14 10:50:16'),
(23, 13, 9, 270, '2022-12-14 12:27:43', '2022-12-14 12:27:43'),
(82, 76, 18, 0, '2022-12-25 05:01:11', '2022-12-25 05:01:11');

-- --------------------------------------------------------

--
-- Structure de la table `items`
--

CREATE TABLE `items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `items`
--

INSERT INTO `items` (`id`, `name`, `price`, `created_at`, `updated_at`, `category_id`) VALUES
(1, 'Pre-application', 500, NULL, NULL, 1),
(2, 'Service fee', 5900, NULL, NULL, 1),
(3, 'Admission cost', 1500, NULL, NULL, 1),
(4, 'Rental service', 2000, NULL, NULL, 1),
(6, 'Insurance service', 550, NULL, NULL, 1),
(7, 'Visa assistance service', 4000, NULL, NULL, 1),
(8, 'Pre-application', 500, NULL, NULL, 2),
(9, 'Settlement 1 of service\r\nfee\r\n', 2700, NULL, NULL, 2),
(10, 'Settlement 2 of service\r\nfee (chinese language)', 6500, NULL, NULL, 2),
(11, 'Settlement 2 of service\r\nfee (free tuition fee)\r\n', 12000, NULL, NULL, 2),
(12, 'Settlement 2 of service\r\nfee (tuition,\r\naccommodation waiver)', 14000, NULL, NULL, 2),
(13, 'Settlement 2 of service\r\nfee (tuition waiver,stipend)', 14000, NULL, NULL, 2),
(14, 'Settlement 2 of service\r\nfee (Full scholarship)', 20000, NULL, NULL, 2),
(15, 'Settlement 2 of service\r\nfee (CSC)\r\n', 30000, NULL, NULL, 2),
(16, 'Application fee', 1000, NULL, NULL, 4),
(17, 'Service fee', 6900, NULL, NULL, 4),
(19, 'Application fee', 1000, NULL, NULL, 3),
(22, 'Service Fee', 6900, '2022-12-25 05:02:26', '2022-12-25 05:02:26', 3);

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_12_04_182607_add_new_fields_to_users_table', 2),
(6, '2022_12_07_180835_add_new_fields_to_users_table', 3),
(7, '2022_12_07_202606_create_table_name', 4),
(8, '2022_12_08_104752_create_customers_table', 5),
(9, '2022_12_08_125647_add_idnumber_to_customer_table', 6),
(10, '2022_12_08_140026_change_column_type', 7),
(11, '2022_12_08_141101_ass_payment_column', 8),
(12, '2022_12_08_150224_add-status', 9),
(13, '2022_12_08_234340_create_items_table', 10),
(14, '2022_12_09_004319_add-id', 11),
(15, '2022_12_09_012012_add-destination', 12),
(17, '2022_12_10_123336_add-group', 13),
(18, '2022_12_10_141347_add-discount', 14),
(19, '2022_12_10_202653_add-status', 15),
(20, '2022_12_11_162143_add-number', 15),
(21, '2022_12_11_234810_add-number', 16),
(22, '2022_12_12_221944_create_expenses_categories_table', 17),
(23, '2022_12_13_160714_create_expenses_table', 18),
(24, '2022_12_13_181059_add-_note', 19),
(25, '2022_12_15_002538_create_roles_table', 20),
(26, '2022_12_15_002644_create_role_user_table', 20),
(28, '2022_12_19_175303_create_users_table', 21),
(29, '2022_12_20_205032_create-new-tables', 22),
(31, '2022_12_21_143413_modify-tables', 23),
(33, '2022_12_21_152441_create-saison-column', 24),
(34, '2022_12_23_155331_create-prefix-column', 25),
(35, '2022_12_24_160930_alter-table-beneficiary', 26),
(36, '2023_01_02_152049_create_saisons_table', 27),
(37, '2023_01_04_193753_add-customer-fields', 28);

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `payment`
--

CREATE TABLE `payment` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `number` varchar(255) DEFAULT NULL,
  `customer_id` varchar(255) NOT NULL COMMENT 'Customer ID',
  `invoice_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `amount` varchar(255) NOT NULL,
  `method` varchar(255) NOT NULL,
  `method_details` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'Administrator', '2022-12-15 00:29:29', '2022-12-15 00:29:29'),
(2, 'Accountant', 'Accountant', '2022-12-15 00:29:29', '2022-12-15 00:29:29'),
(3, 'Manager', 'Manager', '2022-12-15 00:29:29', '2022-12-15 00:29:29');

-- --------------------------------------------------------

--
-- Structure de la table `role_user`
--

CREATE TABLE `role_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role_user`
--

INSERT INTO `role_user` (`id`, `role_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2022-12-15 00:29:29', '2022-12-15 00:29:29'),
(2, 2, 2, '2022-12-15 00:29:29', '2022-12-15 00:29:29'),
(3, 3, 3, '2022-12-15 00:29:29', '2022-12-15 00:29:29');

-- --------------------------------------------------------

--
-- Structure de la table `saisons`
--

CREATE TABLE `saisons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `saisons`
--

INSERT INTO `saisons` (`id`, `name`, `created_at`, `updated_at`) VALUES
(7, 'Winter 2023', '2023-01-05 02:27:54', '2023-01-05 02:27:54'),
(6, 'January 2023', '2023-01-05 02:27:47', '2023-01-05 02:27:47'),
(8, 'The Elevator Season', '2023-01-05 18:35:43', '2023-01-05 18:35:43');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@foorsa.co', NULL, '$2y$10$wXEVfsyjsW8.6ud9PlG2yu6aOmtdO2.73vDeNtNHaEweaIjyfh2O2', NULL, NULL, NULL),
(2, 'Accountant', 'accountant@foorsa.co', NULL, '$2y$10$Z.a6f2eGMoKj3bZGh3VIEeYS22erA0XpYEnqUq7Vrj3mYyowdR5Ue', NULL, NULL, NULL),
(3, 'Manager', 'manager@foorsa.co', NULL, '$2y$10$ead/mUOwlx94lF79HzlzhubXvC0LsecVCvnPaDbXzTTK67zQsg8XG', NULL, NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `consultant`
--
ALTER TABLE `consultant`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expenses_category_id_foreign` (`category_id`);

--
-- Index pour la table `expenses_benefeciant`
--
ALTER TABLE `expenses_benefeciant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expenses_benefeciant_category_id_foreign` (`category_id`);

--
-- Index pour la table `expenses_categories`
--
ALTER TABLE `expenses_categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoice_prefixed_id_index` (`prefixed_id`);

--
-- Index pour la table `invoice_items`
--
ALTER TABLE `invoice_items`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Index pour la table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `saisons`
--
ALTER TABLE `saisons`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `consultant`
--
ALTER TABLE `consultant`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT pour la table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `expenses_benefeciant`
--
ALTER TABLE `expenses_benefeciant`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `expenses_categories`
--
ALTER TABLE `expenses_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `group`
--
ALTER TABLE `group`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;

--
-- AUTO_INCREMENT pour la table `invoice_items`
--
ALTER TABLE `invoice_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT pour la table `items`
--
ALTER TABLE `items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `role_user`
--
ALTER TABLE `role_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `saisons`
--
ALTER TABLE `saisons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `expenses`
--
ALTER TABLE `expenses`
  ADD CONSTRAINT `expenses_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `expenses_categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

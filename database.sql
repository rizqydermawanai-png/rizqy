-- KAZUMI E-Commerce Database Dump
--
-- Host: localhost
-- Generation Time: Aug 27, 2025 at 08:00 PM
-- Server version: 10.4.28-MariaDB (XAMPP)
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `kazumi_db`
--
CREATE DATABASE IF NOT EXISTS `kazumi_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `kazumi_db`;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(255) NOT NULL,
  `category` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `imageUrl` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category`, `name`, `price`, `imageUrl`, `description`) VALUES
('jacket-01', 'jackets', 'Denim Jacket', 750000, 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=500&q=60', 'Jaket denim klasik yang tak lekang oleh waktu, cocok untuk gaya kasual.'),
('jacket-02', 'jackets', 'Leather Biker Jacket', 1250000, 'https://images.unsplash.com/photo-1591942523329-87e433a1796b?auto=format&fit=crop&w=500&q=60', 'Jaket biker kulit yang stylish dan tangguh, memberikan kesan edgy.'),
('pants-01', 'pants', 'Slim-Fit Chinos', 450000, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60', 'Celana chinos slim-fit yang nyaman dan stylish, cocok untuk berbagai kesempatan.'),
('pants-02', 'pants', 'Classic Denim Jeans', 550000, 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?auto=format&fit=crop&w=500&q=60', 'Celana jeans denim klasik yang tahan lama dan serbaguna.'),
('shirt-01', 'shirts', 'White Formal Shirt', 350000, 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=500&q=60', 'Kemeja formal putih klasik yang terbuat dari bahan katun premium. Sempurna untuk acara bisnis dan formal.'),
('shirt-02', 'shirts', 'Blue Oxford Shirt', 375000, 'https://images.unsplash.com/photo-1601422407622-2cc4e5b2b3cb?auto=format&fit=crop&w=500&q=60', 'Kemeja Oxford biru yang nyaman dan serbaguna, cocok untuk gaya kasual maupun semi-formal.'),
('tshirt-01', 't-shirts', 'Classic Black T-Shirt', 150000, 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=60', 'Kaos hitam klasik yang terbuat dari katun berkualitas tinggi, nyaman dipakai sehari-hari.'),
('tshirt-02', 't-shirts', 'Plain White T-Shirt', 150000, 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=60', 'Kaos putih polos yang esensial untuk setiap lemari pakaian, terbuat dari bahan yang lembut dan adem.'),
('tshirt-03', 't-shirts', 'Olive Green T-Shirt', 175000, 'https://images.unsplash.com/photo-1622470953794-34505b3db690?auto=format&fit=crop&w=500&q=60', 'Kaos berwarna hijau olive yang stylish, cocok untuk tampilan kasual.'),
('tshirt-04', 't-shirts', 'Graphic Print T-Shirt', 200000, 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=60', 'Kaos dengan desain grafis unik, menambah sentuhan modern pada gaya Anda.');

-- --------------------------------------------------------

--
-- Table structure for table `site_content`
--

CREATE TABLE `site_content` (
  `content_key` varchar(255) NOT NULL,
  `content_value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `site_content`
--

INSERT INTO `site_content` (`content_key`, `content_value`) VALUES
('hero', '{\"heading\":\"ELEVATE YOUR STYLE\",\"paragraph\":\"Discover the perfect blend of sophistication and modern fashion for the contemporary man\",\"image\":\"https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80\"}'),
('promo', '{\"title\":\"Penawaran Spesial Minggu Ini!\",\"description\":\"Dalam rangka kolaborasi eksklusif kami dengan BUSINESSWEEK, nikmati promo terbatas untuk gaya Anda!\",\"image\":\"https://images.unsplash.com/photo-1523878288860-fd508837778e?auto=format&fit=crop&w=200&q=80\",\"item1\":{\"title\":\"Monday Special\",\"desc\":\"Diskon 30% untuk pembelian 2 item\"},\"item2\":{\"title\":\"Cashback\",\"desc\":\"IDR 8.000 dengan min. pembelian IDR 300.000\"}}'),
('specialCollections', '[{\"img\":\"https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80\",\"tag\":\"New\",\"title\":\"Executive Collection\",\"link\":\"shirts\"},{\"img\":\"https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80\",\"tag\":\"Limited\",\"title\":\"Limited Edition\",\"link\":\"jackets\"},{\"img\":\"https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80\",\"tag\":\"Casual\",\"title\":\"Weekend Wear\",\"link\":\"t-shirts\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `menu_order`
--

CREATE TABLE `menu_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_items` text NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu_order`
--

INSERT INTO `menu_order` (`menu_items`) VALUES
('[\"home\",\"shop\",\"special-collection\",\"custom-order-section\",\"bulk-purchase-section\",\"fitting\"]');

-- --------------------------------------------------------

--
-- Table structure for tables `discounts`, `custom_orders`, `bulk_orders`
--

CREATE TABLE `discounts` (
  `category` varchar(255) NOT NULL,
  `percentage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `custom_orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_data` text NOT NULL,
  `submitted_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `bulk_orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_data` text NOT NULL,
  `submitted_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Indexes for dumped tables
--

ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `site_content`
  ADD PRIMARY KEY (`content_key`);

ALTER TABLE `discounts`
  ADD PRIMARY KEY (`category`);

COMMIT;

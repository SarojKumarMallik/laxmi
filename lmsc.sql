-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2023 at 12:41 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lmsc`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `heading` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `videoLink` text DEFAULT NULL,
  `videoIframe` text DEFAULT NULL,
  `number1img` text DEFAULT NULL,
  `number2img` text DEFAULT NULL,
  `number3img` text DEFAULT NULL,
  `number4img` text DEFAULT NULL,
  `number5img` text DEFAULT NULL,
  `number6img` text DEFAULT NULL,
  `more` text DEFAULT NULL,
  `moreHeading` text DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `heading`, `description`, `videoLink`, `videoIframe`, `number1img`, `number2img`, `number3img`, `number4img`, `number5img`, `number6img`, `more`, `moreHeading`, `isActive`, `created`, `updated`, `orgCode`) VALUES
(1, 'About Lakshmi Maternity & Surgical Centre', 'Lakshmi Maternity & Surgical Centre is a leading maternity hospital located in Malleshwaram, Bangalore. With a strong focus on providing exceptional healthcare services, we have established ourselves as one of the best facilities in the region. Our core services encompass maternity care, child care, women\'s health, and general medical services. Since our inception in 2011, we have successfully delivered over lakhs of babies, with an impressive track record of over 90% normal deliveries.', 'https://www.youtube.com/watch?v=shxqFEtApuY', 'https://www.youtube.com/embed/shxqFEtApuY', 'download1.jpeg', 'images3.jpeg', '1.png', 'download2.jpeg', 'number5img.png', 'number6img.png', 'The journey of Lakshmi Maternity & Surgical Centre began in 2011, founded by the esteemed Dr. Mahesh and Dr. Nishita Rao. Their vision was to create a healthcare institution that would offer affordable and accessible maternity services without compromising on quality. With their expertise and passion for providing excellent care, they embarked on a journey that would transform the lives of countless families.At Lakshmi Maternity & Surgical Centre, we are committed to upholding the highest standards of medical ethics and professionalism. We constantly strive to stay at the forefront of medical advancements, embracing innovation and excellence in our services. Our aim is to forge lasting relationships with our patients, built on trust, empathy, and exceptional care.Thank you for considering Lakshmi Maternity & Surgical Centre for your healthcare needs. We look forward to serving you and being a part of your remarkable journey towards motherhood and overall well-being.', 'More About Lakshmi Maternity & Surgical Centre', 1, '2023-07-19 16:02:11', '2023-08-01 11:42:33', 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `about_keys`
--

CREATE TABLE `about_keys` (
  `id` int(11) NOT NULL,
  `icon` text DEFAULT NULL,
  `title` text DEFAULT NULL,
  `content` text DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_keys`
--

INSERT INTO `about_keys` (`id`, `icon`, `title`, `content`, `isActive`, `created`, `orgCode`) VALUES
(1, 'bx bx-heart', 'Mission:', 'Our mission is to provide comprehensive and compassionate healthcare services to women and children, focusing on maternity care, child care, and general medical services. We strive to ensure a safe and nurturing environment for expectant mothers, offering personalized care and support throughout their pregnancy journey. Our mission extends to promoting the overall well-being of women, infants, and children, empowering them with the knowledge and resources necessary to lead healthy lives.', 1, '2023-07-19 16:05:57', 'lax123'),
(2, 'bx bx-health', 'Vision:', 'At Lakshmi Maternity & Surgical Centre, our vision is to be the leading maternity hospital in the region, recognized for our exceptional healthcare services and commitment to patient satisfaction. We aim to continually enhance our medical expertise, infrastructure, and technological advancements to provide the highest quality of care. We aspire to create a supportive and compassionate environment where every patient feels valued, heard, and respected.', 1, '2023-07-19 16:05:57', 'lax123'),
(3, 'bx bx-help-circle', 'Philosophy:', 'Our philosophy is rooted in the belief that every woman deserves access to safe, reliable, and affordable maternity care. We understand that pregnancy and childbirth are significant milestones in a woman\'s life, and we strive to make this journey as comfortable and memorable as possible. We emphasize a holistic approach to healthcare, considering the physical, emotional, and psychological well-being of our patients. With a team of experienced healthcare professionals, we ensure that each patient receives individualized attention, evidence-based medical care, and continuous support throughout their experience with us.', 1, '2023-07-19 16:05:57', 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `achievements`
--

CREATE TABLE `achievements` (
  `id` int(11) NOT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `numbers` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `moreLink` varchar(50) DEFAULT NULL,
  `more` text DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `achievements`
--

INSERT INTO `achievements` (`id`, `icon`, `numbers`, `title`, `description`, `moreLink`, `more`, `isActive`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 'fas fa-user-md', 95, 'Doctors', 'consequuntur quae qui deca rode', '/', 'Find out more >>', 1, '2023-07-19 12:48:05', NULL, NULL, 'lax123'),
(2, 'far fa-hospital', 36, 'Departments', 'adipisci atque cum aut numquam delectus', '/', 'Find out more &raquo;', 1, '2023-07-19 12:48:05', NULL, NULL, 'lax123'),
(3, 'fas fa-flask', 23, 'Research Lab', 'aut commodi quaerat. Aliquam ratione', '/', 'Find out more &raquo;', 1, '2023-07-19 12:48:05', NULL, NULL, 'lax123'),
(4, 'fas fa-award', 250, 'Awards', 'rerum asperiores dolor molestiae doloribu', '/', 'Find out more &raquo;', 1, '2023-07-19 12:48:05', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `patientName` varchar(50) DEFAULT NULL,
  `patientEmail` varchar(50) DEFAULT NULL,
  `patientPhone` varchar(15) DEFAULT NULL,
  `patientAge` text DEFAULT NULL,
  `patientAddress` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `drName` text DEFAULT NULL,
  `apptDate` text DEFAULT NULL,
  `apptTime` text DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` date DEFAULT NULL,
  `deleted` date DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `patientName`, `patientEmail`, `patientPhone`, `patientAge`, `patientAddress`, `message`, `drName`, `apptDate`, `apptTime`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, '', '', '', '', '', '', '', '', '', '2023-09-27 07:55:01', NULL, NULL, 'lax123'),
(2, 'Soumya Prakash Nayak', 'nsoumyaprakash@gmail.com', '8908930619', '18-40', 'Ama gaan re', 'mu janini', 'DOC1141', 'Fri Jul 07 2023 13:48:03 GMT+0530 (India Standard Time)', '235361138', '2023-09-27 08:22:01', NULL, NULL, 'lax123'),
(3, 'nvbhlb,k', 'nvjm@gmail.com', ' vh,bm', '18-40', 'mbvb,m', 'hgj,', 'Dr. Sanjit', 'Fri Jul 07 2023 13:48:03 GMT+0530 (India Standard Time)', '07:00:00 - 07:15:00', '2023-09-27 08:34:24', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `imgSrc` varchar(100) DEFAULT NULL,
  `tag` text DEFAULT NULL,
  `title` text DEFAULT NULL,
  `content` text DEFAULT NULL,
  `authorImg` varchar(100) DEFAULT NULL,
  `author` text DEFAULT NULL,
  `publishedAt` timestamp NULL DEFAULT NULL,
  `isActive` int(11) DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `imgSrc`, `tag`, `title`, `content`, `authorImg`, `author`, `publishedAt`, `isActive`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 'Child care.jpg', 'Child Care', 'Nurturing the Future: The Essence of Child Care', 'Child care is an essential aspect of our society, for it lays the foundation for a child\'s physical, emotional, and intellectual growth. Every child is unique, and providing them with the right care and support is crucial for their development. In this blog, we will explore the significance of child care and offer some valuable insights for parents, caregivers, and educators to create a nurturing environment for the young minds that shape our future.\r\n\r\nThe Role of Child Care in Early Development:\r\n\r\nChildhood is a period of rapid growth and development, and high-quality child care plays a vital role in shaping a child\'s personality and abilities. Early experiences have a profound impact on brain development, affecting a child\'s cognitive, social, and emotional skills later in life. Engaging children in stimulating activities, encouraging curiosity, and providing a secure and loving environment are the building blocks of their future success.\r\n\r\nChoosing the Right Child Care Setting:\r\n\r\nSelecting the appropriate child care setting is one of the most critical decisions for parents. Each child has unique needs, and considering factors such as location, safety, curriculum, teacher-to-child ratio, and learning approach is essential. Whether it\'s a daycare center, family daycare, or a nanny at home, understanding what aligns best with the child\'s temperament and the family\'s values can lead to a positive child care experience.\r\n\r\nThe Impact of Responsive Caregiving:\r\n\r\nResponsive caregiving involves understanding and responding promptly to a child\'s needs, fostering a secure attachment between the child and caregiver. When children feel emotionally supported and valued, they develop trust and confidence, which forms the basis of healthy relationships throughout their lives. Listening actively to their thoughts and feelings, providing comfort, and offering praise for their achievements create a nurturing environment that enhances their overall well-being.\r\n\r\nThe Power of Play in Learning:\r\n\r\nPlay is an integral part of childhood, and it\'s through play that children explore the world, learn new skills, and develop their imagination. Child care providers should incorporate play-based learning into their curriculum, allowing children to engage in both structured and unstructured play. Play promotes creativity, problem-solving abilities, and social skills, paving the way for a well-rounded development.\r\n\r\nEncouraging Inclusivity and Diversity:\r\n\r\nChild care settings are often the first places where children encounter diversity. Embracing and celebrating differences in cultures, backgrounds, abilities, and beliefs fosters a sense of empathy and understanding in young minds. By teaching children about diversity, child care providers lay the groundwork for a more compassionate and accepting society.\r\n\r\nEffective Communication with Parents:\r\n\r\nOpen and transparent communication between child care providers and parents is essential for the child\'s holistic growth. Regular updates on a child\'s progress, sharing developmental milestones, and discussing any concerns help parents stay actively involved in their child\'s development. This partnership ensures consistency in care and learning between the child\'s home and child care setting.\r\n\r\nConclusion:\r\n\r\nChild care is a journey of love, patience, and nurturing, where every step taken has a profound impact on a child\'s future. By recognizing the significance of high-quality child care and implementing best practices, we can collectively create an environment where children thrive and reach their fullest potential. As parents, caregivers, and educators, let us embrace this responsibility with joy and dedication, knowing that we are shaping the future generation - the architects of a better tomorrow.\r\n', '1.png', 'Anonymous', '2023-07-26 10:17:14', 1, '2023-07-26 10:17:14', NULL, NULL, 'lax123'),
(2, 'Child care.jpg', 'Child Care', 'Nurturing the Future: The Essence of Child Care', 'Child care is an essential aspect of our society, for it lays the foundation for a child\'s physical, emotional, and intellectual growth. Every child is unique, and providing them with the right care and support is crucial for their development. In this blog, we will explore the significance of child care and offer some valuable insights for parents, caregivers, and educators to create a nurturing environment for the young minds that shape our future.\r\n\r\nThe Role of Child Care in Early Development:\r\n\r\nChildhood is a period of rapid growth and development, and high-quality child care plays a vital role in shaping a child\'s personality and abilities. Early experiences have a profound impact on brain development, affecting a child\'s cognitive, social, and emotional skills later in life. Engaging children in stimulating activities, encouraging curiosity, and providing a secure and loving environment are the building blocks of their future success.\r\n\r\nChoosing the Right Child Care Setting:\r\n\r\nSelecting the appropriate child care setting is one of the most critical decisions for parents. Each child has unique needs, and considering factors such as location, safety, curriculum, teacher-to-child ratio, and learning approach is essential. Whether it\'s a daycare center, family daycare, or a nanny at home, understanding what aligns best with the child\'s temperament and the family\'s values can lead to a positive child care experience.\r\n\r\nThe Impact of Responsive Caregiving:\r\n\r\nResponsive caregiving involves understanding and responding promptly to a child\'s needs, fostering a secure attachment between the child and caregiver. When children feel emotionally supported and valued, they develop trust and confidence, which forms the basis of healthy relationships throughout their lives. Listening actively to their thoughts and feelings, providing comfort, and offering praise for their achievements create a nurturing environment that enhances their overall well-being.\r\n\r\nThe Power of Play in Learning:\r\n\r\nPlay is an integral part of childhood, and it\'s through play that children explore the world, learn new skills, and develop their imagination. Child care providers should incorporate play-based learning into their curriculum, allowing children to engage in both structured and unstructured play. Play promotes creativity, problem-solving abilities, and social skills, paving the way for a well-rounded development.\r\n\r\nEncouraging Inclusivity and Diversity:\r\n\r\nChild care settings are often the first places where children encounter diversity. Embracing and celebrating differences in cultures, backgrounds, abilities, and beliefs fosters a sense of empathy and understanding in young minds. By teaching children about diversity, child care providers lay the groundwork for a more compassionate and accepting society.\r\n\r\nEffective Communication with Parents:\r\n\r\nOpen and transparent communication between child care providers and parents is essential for the child\'s holistic growth. Regular updates on a child\'s progress, sharing developmental milestones, and discussing any concerns help parents stay actively involved in their child\'s development. This partnership ensures consistency in care and learning between the child\'s home and child care setting.\r\n\r\nConclusion:\r\n\r\nChild care is a journey of love, patience, and nurturing, where every step taken has a profound impact on a child\'s future. By recognizing the significance of high-quality child care and implementing best practices, we can collectively create an environment where children thrive and reach their fullest potential. As parents, caregivers, and educators, let us embrace this responsibility with joy and dedication, knowing that we are shaping the future generation - the architects of a better tomorrow.\r\n', '1.png', 'Anonymous', '2023-07-26 10:17:30', 1, '2023-07-26 10:17:30', NULL, NULL, 'lax123'),
(3, 'Child care.jpg', 'Child Care', 'Nurturing the Future: The Essence of Child Care', 'Child care is an essential aspect of our society, for it lays the foundation for a child\'s physical, emotional, and intellectual growth. Every child is unique, and providing them with the right care and support is crucial for their development. In this blog, we will explore the significance of child care and offer some valuable insights for parents, caregivers, and educators to create a nurturing environment for the young minds that shape our future.\r\n\r\nThe Role of Child Care in Early Development:\r\n\r\nChildhood is a period of rapid growth and development, and high-quality child care plays a vital role in shaping a child\'s personality and abilities. Early experiences have a profound impact on brain development, affecting a child\'s cognitive, social, and emotional skills later in life. Engaging children in stimulating activities, encouraging curiosity, and providing a secure and loving environment are the building blocks of their future success.\r\n\r\nChoosing the Right Child Care Setting:\r\n\r\nSelecting the appropriate child care setting is one of the most critical decisions for parents. Each child has unique needs, and considering factors such as location, safety, curriculum, teacher-to-child ratio, and learning approach is essential. Whether it\'s a daycare center, family daycare, or a nanny at home, understanding what aligns best with the child\'s temperament and the family\'s values can lead to a positive child care experience.\r\n\r\nThe Impact of Responsive Caregiving:\r\n\r\nResponsive caregiving involves understanding and responding promptly to a child\'s needs, fostering a secure attachment between the child and caregiver. When children feel emotionally supported and valued, they develop trust and confidence, which forms the basis of healthy relationships throughout their lives. Listening actively to their thoughts and feelings, providing comfort, and offering praise for their achievements create a nurturing environment that enhances their overall well-being.\r\n\r\nThe Power of Play in Learning:\r\n\r\nPlay is an integral part of childhood, and it\'s through play that children explore the world, learn new skills, and develop their imagination. Child care providers should incorporate play-based learning into their curriculum, allowing children to engage in both structured and unstructured play. Play promotes creativity, problem-solving abilities, and social skills, paving the way for a well-rounded development.\r\n\r\nEncouraging Inclusivity and Diversity:\r\n\r\nChild care settings are often the first places where children encounter diversity. Embracing and celebrating differences in cultures, backgrounds, abilities, and beliefs fosters a sense of empathy and understanding in young minds. By teaching children about diversity, child care providers lay the groundwork for a more compassionate and accepting society.\r\n\r\nEffective Communication with Parents:\r\n\r\nOpen and transparent communication between child care providers and parents is essential for the child\'s holistic growth. Regular updates on a child\'s progress, sharing developmental milestones, and discussing any concerns help parents stay actively involved in their child\'s development. This partnership ensures consistency in care and learning between the child\'s home and child care setting.\r\n\r\nConclusion:\r\n\r\nChild care is a journey of love, patience, and nurturing, where every step taken has a profound impact on a child\'s future. By recognizing the significance of high-quality child care and implementing best practices, we can collectively create an environment where children thrive and reach their fullest potential. As parents, caregivers, and educators, let us embrace this responsibility with joy and dedication, knowing that we are shaping the future generation - the architects of a better tomorrow.\r\n', '1.png', 'Anonymous', '2023-07-26 10:17:38', 1, '2023-07-26 10:17:38', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `contactinfo`
--

CREATE TABLE `contactinfo` (
  `id` int(11) NOT NULL,
  `shortText` text DEFAULT NULL,
  `mapIframe` text DEFAULT NULL,
  `other` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `social_links` text DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactinfo`
--

INSERT INTO `contactinfo` (`id`, `shortText`, `mapIframe`, `other`, `address`, `email`, `phone`, `social_links`, `isActive`, `created`, `updated`, `orgCode`) VALUES
(1, 'Find us in google map.', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.469053972029!2d77.5667632748201!3d13.005774914128567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16258bb48a67%3A0x77ee2da385012c36!2sLakshmi%20Maternity%20%26%20Surgical%20Center!5e0!3m2!1sen!2sin!4v1688990463257!5m2!1sen!2sin', 'https://www.fnfgo.com/', '{\"icon\":\"bi bi-geo-alt\",\"heading\":\"Address:\",\"address\":\"95 & 96, Margosa Road, Opposite Malleswaram Exchange, Malleswaram, Bangalore\"}', '{\"icon\":\"bi bi-envelope\",\"heading\":\"Email:\",\"email\":\"laxmimaternity@gmail.com\"}', '{\"icon\":\"bi bi-telephone\",\"heading\":\"Call:\",\"phone\":\"+91 9999999999\"}', '{\"facebook\":\"\",\"instagram\":\"https://www.instagram.com\",\"twitter\":\"https://www.twitter.com/your_twitter_handle\",\"linkedin\":\"https://www.linkedin.com/in/your_linkedin_profile\"}', 1, '2023-07-19 13:08:09', '2023-07-28 12:15:03', 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `disclaimer`
--

CREATE TABLE `disclaimer` (
  `id` int(11) NOT NULL,
  `privacy_policy` text DEFAULT NULL,
  `terms_n_conditions` text DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `disclaimer`
--

INSERT INTO `disclaimer` (`id`, `privacy_policy`, `terms_n_conditions`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex provident quibusdam nostrum optio rerum quo, est sunt architecto, ipsa praesentium ad fugiat quaerat voluptates numquam exercitationem sint quasi delectus voluptatibus non dignissimos. Illum necessitatibus dignissimos, saepe ipsum optio, sint nobis asperiores dolorum provident accusamus repellat eveniet explicabo! Repellendus, iure! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate nisi quia, nesciunt quasi pariatur. Numquam dignissimos ipsum esse. Odit nemo molestiae in consequuntur harum voluptates deleniti numquam sint impedit quibusdam esse sequi praesentium, dolorum deserunt voluptatibus maiores eius quod modi nihil nulla error quia dolor! Asperiores, necessitatibus dolorem. Eos nesciunt hic fuga. Aspernatur tempore vero voluptates, nobis fugit vel autem quidem quibusdam ducimus dolorum officia quod, laboriosam distinctio illum quos corrupti eveniet sed magnam repellendus voluptate soluta sit. Quas, ipsum ex enim vitae repellat recusandae in natus soluta accusamus impedit suscipit tempora reprehenderit laborum, repudiandae, amet consequuntur illum quibusdam.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex provident quibusdam nostrum optio rerum quo, est sunt architecto, ipsa praesentium ad fugiat quaerat voluptates numquam exercitationem sint quasi delectus voluptatibus non dignissimos. Illum necessitatibus dignissimos, saepe ipsum optio, sint nobis asperiores dolorum provident accusamus repellat eveniet explicabo! Repellendus, iure! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate nisi quia, nesciunt quasi pariatur. Numquam dignissimos ipsum esse. Odit nemo molestiae in consequuntur harum voluptates deleniti numquam sint impedit quibusdam esse sequi praesentium, dolorum deserunt voluptatibus maiores eius quod modi nihil nulla error quia dolor! Asperiores, necessitatibus dolorem. Eos nesciunt hic fuga. Aspernatur tempore vero voluptates, nobis fugit vel autem quidem quibusdam ducimus dolorum officia quod, laboriosam distinctio illum quos corrupti eveniet sed magnam repellendus voluptate soluta sit. Quas, ipsum ex enim vitae repellat recusandae in natus soluta accusamus impedit suscipit tempora reprehenderit laborum, repudiandae, amet consequuntur illum quibusdam.Soumya', '2023-07-28 04:28:42', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `doctorsinfo`
--

CREATE TABLE `doctorsinfo` (
  `id` int(11) NOT NULL,
  `imgSrc` varchar(100) DEFAULT NULL,
  `name` text DEFAULT NULL,
  `speciality` text DEFAULT NULL,
  `about` text DEFAULT NULL,
  `socialLinks` text DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctorsinfo`
--

INSERT INTO `doctorsinfo` (`id`, `imgSrc`, `name`, `speciality`, `about`, `socialLinks`, `isActive`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 'dr-nishita-rao-lakshmi-maternity.webp', 'Dr. Nishita Rao', 'Gynecologist', 'MBBS, MS - Obstetrics & Gynaecology 15 Years Experience Overall (14 years as specialist)', '[\"/\", \"/\", \"/\", \"/\"]', 1, '2023-07-19 12:58:20', NULL, NULL, 'lax123'),
(2, 'dr-mahesh-rao.png', 'Dr. Mahesh', 'Paediatrician', 'Child Specialist & Expertise in Paediatric Medicines 15 Years Experience Overall (14 years as specialist)', '[\"facebook.com\",\"\",\"\",\"linkedin.com\"]', 1, '2023-07-19 12:58:20', '2023-07-21 04:42:11', NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_page_description`
--

CREATE TABLE `doctor_page_description` (
  `id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor_page_description`
--

INSERT INTO `doctor_page_description` (`id`, `content`, `isActive`, `created`, `updated`, `orgCode`) VALUES
(1, 'Dr. Nishita Rao and Dr. Mahesh, the co-founders of our institution, bring their expertise and passion to provide exceptional healthcare to our patients.', 1, '2023-07-19 12:50:50', '2023-07-21 11:12:49', 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `featuredservices`
--

CREATE TABLE `featuredservices` (
  `id` int(11) NOT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `featuredservices`
--

INSERT INTO `featuredservices` (`id`, `icon`, `title`, `description`, `isActive`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 'fas fa-child', 'Child care', 'Creating a Safe Haven for Little Explorers Exceptional Child Care Services', 1, '2023-07-19 10:50:11', NULL, NULL, 'lax123'),
(2, 'fas fa-female', 'Women health', 'Empowering Women\'s Health Expert Care for Every Stage of Life', 1, '2023-07-19 10:53:10', NULL, NULL, 'lax123'),
(3, 'fas fa-hospital-user', 'General services', 'Quality, Efficiency, and Expertise Unleash the Potential of Our General Services', 1, '2023-07-19 10:53:10', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `footer_menus`
--

CREATE TABLE `footer_menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `sl_no` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `footer_menus`
--

INSERT INTO `footer_menus` (`id`, `title`, `sl_no`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 'Useful Links', 1, '2023-07-27 15:29:20', NULL, NULL, 'lax123'),
(2, 'Our Services', 2, '2023-07-27 15:29:38', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `footer_sub_menus`
--

CREATE TABLE `footer_sub_menus` (
  `id` int(11) NOT NULL,
  `footermenu_id` int(10) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `sl_no` int(11) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `footer_sub_menus`
--

INSERT INTO `footer_sub_menus` (`id`, `footermenu_id`, `title`, `slug`, `sl_no`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 1, 'Home', '/', 1, '2023-07-27 15:32:52', NULL, NULL, 'lax123'),
(2, 1, 'Packages', '/packages', 2, '2023-07-27 15:32:52', NULL, NULL, 'lax123'),
(3, 1, 'Doctors', '/doctors', 3, '2023-07-27 15:32:52', NULL, NULL, 'lax123'),
(4, 1, 'Blogs', '/blogs', 4, '2023-07-27 15:32:52', NULL, NULL, 'lax123'),
(5, 1, 'Contact', '/contact', 5, '2023-07-27 15:32:52', NULL, NULL, 'lax123'),
(6, 1, 'About Us', '/about', 6, '2023-07-27 15:32:52', NULL, NULL, 'lax123'),
(7, 2, 'Child care', '/child-care', 1, '2023-07-27 15:37:29', NULL, NULL, 'lax123'),
(8, 2, 'Women health', '/women-health', 2, '2023-07-27 15:37:29', NULL, NULL, 'lax123'),
(9, 2, 'General services', '/general-services', 3, '2023-07-27 15:37:29', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `icons`
--

CREATE TABLE `icons` (
  `id` int(11) NOT NULL,
  `icon_class` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `icons`
--

INSERT INTO `icons` (`id`, `icon_class`) VALUES
(1, 'uil uil-phone'),
(2, 'uil uil-phone'),
(3, 'fa fa-external-link'),
(4, 'uil uil-cloud-upload'),
(5, 'uil uil-comment-alt-lines'),
(6, 'uil uil-megaphone'),
(7, 'uil uil-megaphone'),
(8, 'uil uil-layer-group'),
(9, 'uil uil-layer-group'),
(10, 'bi bi-telephone'),
(11, 'uil uil-outgoing-call'),
(12, 'fa fa-cloud-download'),
(13, 'fa fa-cloud'),
(14, 'uil uil-phone'),
(15, 'uil uil-phone'),
(16, 'uil uil-phone'),
(17, 'uil uil-headphones'),
(18, 'uil uil-envelopes'),
(19, 'uil uil-layer-group'),
(20, 'uil uil-layer-group'),
(21, 'uil uil-layer-group'),
(22, 'uil uil-phone'),
(23, 'uil uil-layer-group'),
(24, 'uil uil-headphones'),
(25, 'uil uil-layer-group'),
(26, 'uil uil-layer-group'),
(27, 'uil uil-layer-group'),
(28, 'uil uil-layer-group'),
(29, 'uil uil-layer-group'),
(30, 'uil uil-layer-group'),
(31, 'uil uil-layer-group'),
(32, 'uil uil-layer-group'),
(33, 'uil uil-layer-group'),
(34, 'uil uil-layer-group'),
(35, 'uil uil-layer-group'),
(36, 'uil uil-layer-group'),
(37, 'uil uil-layer-group'),
(38, 'uil uil-layer-group'),
(39, 'uil uil-layer-group'),
(40, 'uil uil-layer-group'),
(41, 'uil uil-layer-group'),
(42, 'uil uil-layer-group'),
(43, 'uil uil-layer-group'),
(44, 'uil uil-layer-group'),
(45, 'uil uil-layer-group'),
(46, 'uil uil-layer-group'),
(47, 'uil uil-layer-group'),
(48, 'uil uil-layer-group'),
(49, 'uil uil-layer-group'),
(50, 'uil uil-layer-group'),
(51, 'uil uil-layer-group'),
(52, 'uil uil-layer-group'),
(53, 'uil uil-layer-group'),
(54, 'uil uil-layer-group'),
(55, 'uil uil-layer-group'),
(56, 'uil uil-layer-group'),
(57, 'uil uil-layer-group'),
(58, 'uil uil-layer-group'),
(59, 'uil uil-layer-group'),
(60, 'uil uil-layer-group'),
(61, 'uil uil-layer-group'),
(62, 'uil uil-layer-group'),
(63, 'uil uil-layer-group'),
(64, 'uil uil-layer-group'),
(65, 'uil uil-layer-group'),
(66, 'uil uil-layer-group'),
(67, 'uil uil-layer-group'),
(68, 'uil uil-cloud-upload'),
(69, 'uil uil-cloud-upload'),
(70, 'uil uil-cloud-upload'),
(71, 'uil uil-cloud-upload'),
(72, 'uil uil-cloud-upload'),
(73, 'uil uil-cloud-upload'),
(74, 'uil uil-cloud-upload'),
(75, 'uil uil-layer-group'),
(76, 'uil uil-layer-group'),
(77, 'uil uil-layer-group'),
(78, 'uil uil-layer-group'),
(79, 'uil uil-layer-group'),
(80, 'uil uil-layer-group'),
(81, 'uil uil-layer-group'),
(82, 'uil uil-layer-group'),
(83, 'uil uil-layer-group'),
(84, 'uil uil-layer-group'),
(85, 'uil uil-layer-group'),
(86, 'uil uil-layer-group'),
(87, 'uil uil-layer-group'),
(88, 'uil uil-layer-group'),
(89, 'uil uil-layer-group'),
(90, 'uil uil-layer-group'),
(91, 'uil uil-layer-group'),
(92, 'uil uil-layer-group'),
(93, 'uil uil-layer-group');

-- --------------------------------------------------------

--
-- Table structure for table `inquiryinfo`
--

CREATE TABLE `inquiryinfo` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `subject` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inquiryinfo`
--

INSERT INTO `inquiryinfo` (`id`, `name`, `email`, `subject`, `message`, `created`, `orgCode`) VALUES
(1, 'Soumya Prakash Nayak', 'soumya.nayak@ikontel.com', 'Testing', 'Hiii', '2023-07-26 11:14:45', 'lax123'),
(2, 'Test', 'test@gmail.com', 'Testing', 'Hello', '2023-08-03 09:24:14', 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `landing`
--

CREATE TABLE `landing` (
  `id` int(11) NOT NULL,
  `organization_name` varchar(200) DEFAULT NULL,
  `bg_img` text DEFAULT NULL,
  `title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `link` varchar(50) DEFAULT NULL,
  `linkText` text DEFAULT NULL,
  `logo` text DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `landing`
--

INSERT INTO `landing` (`id`, `organization_name`, `bg_img`, `title`, `description`, `link`, `linkText`, `logo`, `isActive`, `created`, `updated`, `orgCode`) VALUES
(1, 'Lakshmi Maternity & Surgical Centre', 'home.jpg', 'Welcome to Lakshmi Maternity \r\n& \r\nSurgical Centre!', 'Experience exceptional care at our world-class facility,\r\n\"where your well-being is our top priority.\"\r\nExperience exceptional care at our world-class facility,\r\n\"where your well-being is our top priority.\"\r\n', '/about', 'Learn More', 'logo.jpg', 1, '2023-07-19 10:46:34', '2023-07-21 09:42:52', 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(191) DEFAULT NULL,
  `title` varchar(191) DEFAULT NULL,
  `sl_no` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `slug`, `title`, `sl_no`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, '/', 'Home', 1, '2023-07-27 13:23:56', NULL, NULL, 'lax123'),
(2, '/packages', 'Packages', 4, '2023-07-27 13:26:28', '2023-07-28 12:24:25', NULL, 'lax123'),
(3, '/doctors', 'Doctors', 3, '2023-07-27 13:26:28', NULL, NULL, 'lax123'),
(4, '/blogs', 'Blogs', 5, '2023-07-27 13:26:28', NULL, NULL, 'lax123'),
(5, '/contact', 'Contact', 6, '2023-07-27 13:26:28', NULL, NULL, 'lax123'),
(6, '/about', 'About', 7, '2023-07-27 13:26:28', NULL, NULL, 'lax123'),
(7, '', 'Services', 2, '2023-07-27 13:31:26', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `price` text DEFAULT NULL,
  `benifits` text DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `title`, `price`, `benifits`, `isActive`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 'Child Care', '250/Month', 'Infertility Evaluation / Treatment,General Medicine,menopause advice,Pap Smear,Menstrual Disorders in Adolescent Girls', 1, '2023-07-24 11:02:26', '2023-07-24 11:22:23', NULL, 'lax123'),
(2, 'Women Health', '350/Month', 'Infertility Evaluation / Treatment,General Medicine,menopause advice,Pap Smear,Menstrual Disorders in Adolescent Girls', 1, '2023-08-01 09:54:35', NULL, NULL, 'lax123'),
(3, 'General', '150/Month', 'Infertility Evaluation / Treatment,General Medicine,menopause advice,Pap Smear,Menstrual Disorders in Adolescent Girls', 1, '2023-08-01 09:55:55', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `url` text DEFAULT NULL,
  `html` text DEFAULT NULL,
  `css` text DEFAULT NULL,
  `javascript` text DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `title`, `url`, `html`, `css`, `javascript`, `isActive`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 'Hospital', '/test', '<div>\n    <h2>Testing Form</h2>\n    <form id=\"demoForm\" class=\"test-form\">\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" id=\"name\" name=\"name\" required>\n\n      <label for=\"email\">Email:</label>\n      <input type=\"email\" id=\"email\" name=\"email\" required>\n\n      <label for=\"message\">Message:</label>\n      <textarea id=\"message\" name=\"message\" rows=\"4\" required></textarea>\n\n      <label for=\"gender\">Gender:</label>\n      <select id=\"gender\" name=\"gender\">\n        <option value=\"male\">Male</option>\n        <option value=\"female\">Female</option>\n        <option value=\"other\">Other</option>\n      </select>\n\n      <button type=\"submit\">Submit</button>\n      <button type=\"reset\">Reset</button>\n    </form>\n  </div>', '    .test-form {\n      display: flex;\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n    }\n\n    .test-form label {\n      margin-bottom: 0.5rem;\n    }\n\n    .test-form input,\n    .test-form select,\n    .test-form textarea {\n      margin-bottom: 1rem;\n      padding: 0.5rem;\n    }\n\n    .test-form button {\n      padding: 0.5rem 1rem;\n    }', 'console.log(\"Loaded\");\ndocument.getElementById(\"demoForm\").addEventListener(\"submit\",(e)=>{\n  e.preventDefault()\nconsole.log(\"Form submited\")\n})', 1, '2023-08-01 09:45:53', '2023-08-02 09:12:48', '2023-08-03 05:50:53', 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `banner` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `slug` varchar(100) DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `isShort` int(11) NOT NULL DEFAULT 1,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `icon`, `title`, `description`, `banner`, `image`, `slug`, `isActive`, `isShort`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 'fas fa-baby-carriage', 'Child care', 'We understand the importance of specialized care for children to ensure their healthy growth and development. Our child care services encompass a comprehensive approach to paediatric care, addressing both preventive and curative aspects.', '', NULL, NULL, 1, 1, '2023-07-19 11:00:35', NULL, NULL, 'lax123'),
(2, 'fas fa-female', 'Women health', 'As supporters for women\'s health, we offer a wide range of services tailored to meet the unique needs of women at every stage of life.', '', NULL, NULL, 1, 1, '2023-07-19 11:03:28', NULL, NULL, 'lax123'),
(3, 'fas fa-hospital-user', 'General services', 'In addition to our specialized services in maternity care and women\'s health, we also provide general medical services to address a variety of healthcare needs.', '', NULL, NULL, 1, 1, '2023-07-19 11:03:28', NULL, NULL, 'lax123'),
(4, 'fas fa-baby-carriage', 'Child care', 'We understand the importance of specialized care for children to ensure their healthy growth and development. Our child care services encompass a comprehensive approach to paediatric care, addressing both preventive and curative aspects. Our experienced paediatricians and dedicated staff are committed to providing personalized care for infants, toddlers, and older children. We offer routine check-ups, vaccinations, nutritional guidance, developmental assessments, and management of common childhood illnesses. With a child-friendly environment and a compassionate approach, we aim to create a nurturing space where children feel safe and parents feel confident about their child\'s well-being.', 'Child care banner.png', 'Child care.jpg', 'child-care', 1, 0, '2023-07-19 11:06:55', NULL, NULL, 'lax123'),
(5, 'fas fa-female', 'Women health', 'As supporters for women\'s health, we offer a wide range of services tailored to meet the unique needs of women at every stage of life. Our team of skilled gynaecologists and obstetricians provides comprehensive care for women, including preventive screenings, diagnostic evaluations, family planning, prenatal care, and menopausal health management. We emphasize open communication, respect for privacy, and sensitivity to individual needs. Our goal is to empower women to make informed decisions about their health and well-being by providing them with the necessary information, support, and compassionate care.', 'Women health banner.png', 'Women health.jpg', 'women-health', 1, 0, '2023-07-19 11:06:55', NULL, NULL, 'lax123'),
(6, 'fas fa-hospital-user', 'General services', 'In addition to our specialized services in maternity care and women\'s health, we also provide general medical services to address a variety of healthcare needs. Our general services encompass primary healthcare, internal medicine, minor surgical procedures, health screenings, and management of acute and chronic illnesses. Our team of experienced physicians and healthcare professionals collaborate to offer comprehensive and personalized care to patients of all ages. Whether it\'s a routine check-up, diagnostic evaluation, or ongoing medical management, we strive to provide high-quality and compassionate care to promote overall wellness and address specific health concerns. <br/><br/> At Lakshmi Maternity & Surgical Centre, we are dedicated to ensuring the well-being of women, children, and families. Through our child care services, women\'s health programs, and general medical services, we aim to provide holistic and patient-centered care, backed by medical expertise and a compassionate approach. Our commitment to excellence and a nurturing environment sets us apart as a trusted healthcare provider in the region.', 'General services banner.png', 'General services.jpg', 'general-services', 1, 0, '2023-07-19 11:06:55', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `sub_menus`
--

CREATE TABLE `sub_menus` (
  `id` int(11) NOT NULL,
  `mainmenu_id` int(10) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `orgCode` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_menus`
--

INSERT INTO `sub_menus` (`id`, `mainmenu_id`, `title`, `slug`, `created`, `updated`, `deleted`, `orgCode`) VALUES
(1, 7, 'Women Health', '/women-health', '2023-07-27 13:31:26', NULL, NULL, 'lax123'),
(2, 7, 'Child Care', '/child-care', '2023-07-27 13:31:26', NULL, NULL, 'lax123'),
(3, 7, 'General Services', '/general-services', '2023-07-27 13:31:26', NULL, NULL, 'lax123');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(200) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  `orgCode` varchar(50) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `image` varchar(200) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NULL DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `browser` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `phone`, `role`, `orgCode`, `status`, `image`, `created_on`, `updated_on`, `last_login`, `browser`) VALUES
(1, 'f1583e3c-31cc-11ee-96e6-d2d5b50d1d6b', 'Sudeshna Priyadarshini', 'sudeshna@ikontel.com', '$2y$10$oaBN7OMloUz6jOCL.VEP3eygRwa3BURME30MSS4BHAX0dq6vjoMRa', 9999999999, 'SuperAdmin', NULL, 1, NULL, '2023-08-03 07:11:18', NULL, '2023-08-09 10:06:09', 'Google Chrome'),
(3, '77ee4db1-369c-11ee-add4-a6ad6e21595c', 'Soumya Prakash Nayak', 'soumya.nayak@ikontel.com', '$2y$10$pIiSKn6xchzkedpS3NVB.uIzvFsIdccMuSzsIlDpJMRk7KtD7nZx6', 8908930619, 'Admin', 'lax123', 1, NULL, '2023-08-09 10:06:54', NULL, '2023-09-27 10:30:01', 'Mozilla Firefox');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `about_keys`
--
ALTER TABLE `about_keys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `achievements`
--
ALTER TABLE `achievements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactinfo`
--
ALTER TABLE `contactinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `disclaimer`
--
ALTER TABLE `disclaimer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctorsinfo`
--
ALTER TABLE `doctorsinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_page_description`
--
ALTER TABLE `doctor_page_description`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `featuredservices`
--
ALTER TABLE `featuredservices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_menus`
--
ALTER TABLE `footer_menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_sub_menus`
--
ALTER TABLE `footer_sub_menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `icons`
--
ALTER TABLE `icons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inquiryinfo`
--
ALTER TABLE `inquiryinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `landing`
--
ALTER TABLE `landing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_menus`
--
ALTER TABLE `sub_menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `about_keys`
--
ALTER TABLE `about_keys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `achievements`
--
ALTER TABLE `achievements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contactinfo`
--
ALTER TABLE `contactinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `disclaimer`
--
ALTER TABLE `disclaimer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `doctorsinfo`
--
ALTER TABLE `doctorsinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `doctor_page_description`
--
ALTER TABLE `doctor_page_description`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `featuredservices`
--
ALTER TABLE `featuredservices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `footer_menus`
--
ALTER TABLE `footer_menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `footer_sub_menus`
--
ALTER TABLE `footer_sub_menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `icons`
--
ALTER TABLE `icons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `inquiryinfo`
--
ALTER TABLE `inquiryinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `landing`
--
ALTER TABLE `landing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sub_menus`
--
ALTER TABLE `sub_menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

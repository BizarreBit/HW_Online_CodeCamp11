-- #1
-- CREATE DATABASE IF NOT EXISTS test_db;
-- USE test_db;
-- DROP DATABASE IF EXISTS test_db;

-- #2
-- CREATE DATABASE IF NOT EXISTS thailand;
-- USE thailand;

-- CREATE TABLE IF NOT EXISTS regions(
-- 	id TINYINT AUTO_INCREMENT,
--     name VARCHAR(20) NOT NULL UNIQUE,
--     eng_name VARCHAR(30),
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE IF NOT EXISTS provinces(
-- 	id TINYINT AUTO_INCREMENT,
--     name VARCHAR(20) NOT NULL UNIQUE,
--     eng_name VARCHAR(30),
--     region_id TINYINT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (region_id) REFERENCES regions (id)
-- );

-- CREATE TABLE IF NOT EXISTS districts(
-- 	id SMALLINT AUTO_INCREMENT,
--     name VARCHAR(20) NOT NULL UNIQUE,
--     eng_name VARCHAR(30),
--     province_id TINYINT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (province_id) REFERENCES provinces (id)
-- );

-- CREATE TABLE IF NOT EXISTS postal_codes(
-- 	id SMALLINT AUTO_INCREMENT,
--     code INT(5) UNSIGNED NOT NULL UNIQUE,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE IF NOT EXISTS subdistricts(
-- 	id SMALLINT AUTO_INCREMENT,
--     name VARCHAR(20) NOT NULL UNIQUE,
--     eng_name VARCHAR(30),
--     district_id SMALLINT NOT NULL,
--     postal_code_id SMALLINT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (district_id) REFERENCES districts (id),
--     FOREIGN KEY (postal_code_id) REFERENCES postal_codes (id)
-- );

-- CREATE TABLE `regions` (
-- 	`id` TINYINT AUTO_INCREMENT,
--     `name` VARCHAR(20) NOT NULL UNIQUE,
--     `eng_name` VARCHAR(30),
--     PRIMARY KEY (`id`)
-- );

-- ALTER TABLE `provinces` ADD COLUMN `region_id` TINYINT NOT NULL;
-- ALTER TABLE `provinces` ADD FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`);

-- #6
-- INSERT INTO `regions` (`name`) VALUE ("เหนือ"), ("กลาง"), ("ตะวันออกเฉียงเหนือ"), ("ตะวันออก"), ("ตะวันตก"), ("ใต้")
-- INSERT INTO `provinces` (`name`, `region_id`) VALUE ("กรุงเทพมหานคร", 2), ("สมุทรปราการ", 2), ("ชลบุรี", 4)
-- INSERT INTO `districts` (`name`, `province_id`) VALUE ("พระนคร", 1), ("ดุสิต", 1), ("หนองจอก", 1), ("บางพลี", 2), ("พระประแดง", 2), ("ศรีราชา", 3), ("บางละมุง", 3)
-- INSERT INTO `postal_codes` (`code`) VALUE (10200), (10300), (10530), (10540), (10130), (20110), (20150)
-- INSERT INTO `subdistrict` (`name`, `district_id`, `postal_code_id`) VALUE ("บางพลีใหญ่", 4, 4), ("บางแก้ว", 4, 4), 
-- ("บางจาก", 5, 5), ("พระบรมมหาราชวัง", 1, 1), ("วัดราชบพิธ", 1, 1), ("ถนนนครไชยศรี", 2, 2), ("หนองจอก", 3, 3), ("วชิรพยาบาล", 2, 2)

-- #7
-- INSERT INTO `postal_codes` (`code`) VALUE (10400);					-- id: 8

-- UPDATE `subdistricts` SET `name` = "ถนนเพชรบุรี" WHERE `id` = 4;
-- UPDATE `subdistricts` SET `province_id` = "1", `postal_code_id` = "8"  WHERE `id` = 4;

-- -- #8
-- DELETE FROM `subdistricts` WHERE `id` = 8;
-- DELETE FROM `provinces` WHERE `name` = "กรุงเทพมหานคร"; -- Foreign Key Option On Delete RESTRICT, CASCADE, SET NULL, NONE

-- #9
CREATE DATABASE world;
USE world;

SELECT * FROM `city`;
SELECT * FROM `country`;

SELECT * FROM `city` WHERE `District` = "Dhaka";

SELECT `Name` FROM `city` WHERE `CountryCode` = "ARG" OR `CountryCode` = "IDN";

SELECT `Name` FROM `city` WHERE `CountryCode` = "ARG" OR `CountryCode` = "IDN" OR `CountryCode` = "THA" OR `CountryCode` = "ESP";
SELECT `Name` FROM `city` WHERE `CountryCode` IN ('IDN', 'ARG', 'THA', 'ESP');

SELECT `CountryCode` FROM `countrylanguage` WHERE `Language` = "English" AND `IsOfficial` = "T";

SELECT `Name` FROM `country` ORDER BY `Name` DESC;

SELECT `Language`, `Percentage` FROM `countrylanguage` ORDER BY `Percentage` DESC;
-- SELECT `Language`, `Percentage` FROM `countrylanguage` WHERE `Percentage` = (SELECT MAX(`Percentage`) FROM `countrylanguage`);
-- sub-query is not recommended due to performance issue.
-- SELECT COUNT(`Language`) FROM `countrylanguage` WHERE `Language` = "English";

SELECT DISTINCT `Language` FROM `countrylanguage`;

SELECT DISTINCT `District` FROM `city` WHERE `CountryCode` = "NLD";

SELECT * FROM `city` ORDER BY `name` DESC LIMIT 50;

SELECT * FROM `country` WHERE `Capital` IS NULL;

SELECT * FROM `country` LIMIT 149, 51;
SELECT * FROM `country` LIMIT 51 OFFSET 149;

SELECT * FROM `country` WHERE `Name` LIKE "%land%";

SELECT `Name` FROM `country` WHERE `Name` LIKE "T%";

SELECT `Name` FROM `city` WHERE `Name` LIKE "%a";

SELECT `Name` FROM `country` WHERE `Name` LIKE "G%a";

SELECT `Name` FROM `country` WHERE `Name` LIKE "______";

SELECT `Name` FROM `city` WHERE `CountryCode` = "BRA" AND `District` LIKE "%c%";

SELECT `Name` FROM `city` WHERE `CountryCode` = "GBR" AND `District` = "England" ORDER BY `Name` DESC LIMIT 10, 10;

SELECT DISTINCT `District` FROM `city` WHERE `CountryCode` LIKE "G%" ORDER BY `District` LIMIT 20, 5;


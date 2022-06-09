-- #1
USE world;
SELECT `CountryCode` AS code FROM `city`;
-- SELECT CountryCode AS code FROM world.city;

-- #2
SELECT COUNT(*) AS total_country FROM `country`;
SELECT COUNT(DISTINCT `Language`) AS total_language FROM `countrylanguage`;
SELECT COUNT(DISTINCT `District`) AS total_district FROM `city`;

-- #3
SELECT SUM(`Percentage`) AS Dutch_sum_of_percentage FROM `countrylanguage` WHERE `Language` = "Dutch";
SELECT SUM(`Percentage`) AS English_sum_of_percentage_above_50 FROM `countrylanguage` WHERE `Language` = "English" AND `Percentage` > 50;

-- #4
SELECT AVG(`Percentage`) AS Greek_avg_percentage FROM `countrylanguage` WHERE `Language` = "Greek";
SELECT AVG(`Percentage`) AS Spanish_avg_percentage FROM `countrylanguage` WHERE `Language` = "Spanish" AND IsOfficial = "T";

-- #5
SELECT MAX(`Percentage`) AS max, MIN(`Percentage`) AS min FROM `countrylanguage`;
SELECT MAX(`Percentage`) AS german_max, MIN(`Percentage`) AS german_max FROM `countrylanguage` WHERE `Language` = "German";

-- #6
SELECT `IsOfficial`, SUM(`Percentage`) AS sum_of_percentage FROM `countrylanguage` GROUP BY `IsOfficial`;
SELECT `CountryCode`, SUM(`Percentage`) AS sum_of_percentage FROM `countrylanguage` GROUP BY `CountryCode` ORDER BY sum_of_percentage DESC;

-- SELECT `Language`, SUM(`Percentage`) AS sum_of_percentage FROM `countrylanguage` GROUP BY `Language` HAVING sum_of_percentage > 50 ORDER BY sum_of_percentage LIMIT 20, 10;
SELECT `Language`, SUM(`Percentage`) AS sum_of_percentage FROM `countrylanguage` WHERE `Percentage` > 50 GROUP BY `Language` ORDER BY sum_of_percentage LIMIT 20, 10;

SELECT `Language`, AVG(`Percentage`) AS avg_of_percentage FROM `countrylanguage` GROUP BY `Language` HAVING avg_of_percentage > 40 AND avg_of_percentage < 60 ORDER BY avg_of_percentage DESC;
SELECT `Language`, AVG(`Percentage`) AS avg_of_percentage FROM `countrylanguage` GROUP BY `Language` HAVING avg_of_percentage BETWEEN 40 AND 60 ORDER BY avg_of_percentage DESC;
-- #Curious
-- SELECT `Language`, COUNT(`Percentage`) FROM `countrylanguage` GROUP BY `Language`;
-- SELECT MAX(count) FROM (SELECT `Language` AS language, COUNT(`Percentage`) AS count FROM `countrylanguage` GROUP BY `Language`);


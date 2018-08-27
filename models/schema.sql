DROP DATABASE IF EXISTS FavBrewDB;
CREATE DATABASE FavBrewDB;

Use FavBrewDB;
Select * from FavLists;



Use FavBrewDB;
INSERT INTO FavLists ( UserID, favorites, createdAt, updatedAt)
Values ('101', '1, 2, 3, 4', NOW(), NOW()),
('102', '6, 22, 7, 9', NOW(), NOW()),
('103', '3, 4, 1, 6', NOW(), NOW()),
('104', '8, 9, 44, 1', NOW(), NOW())
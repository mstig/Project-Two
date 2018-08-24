DROP DATABASE IF EXISTS FavBrewDB;
CREATE DATABASE FavBrewDB;

Use FavBrewDB;
Select * from FavLists;



Use FavBrewDB;
INSERT INTO FavLists ( UserID, favorites, createdAt, updatedAt)
Values ('101', '1111, 2222, 3333, 4444', NOW(), NOW()),
('102', '1111, 2222, 3333, 4444', NOW(), NOW()),
('103', '1111, 2222, 3333, 4444', NOW(), NOW()),
('104', '1111, 2222, 3333, 4444', NOW(), NOW())
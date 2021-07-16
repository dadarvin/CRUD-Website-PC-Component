CREATE DATABASE sbd_webapp;
\c sbd_webapp

CREATE TABLE casing 
(id_case serial PRIMARY KEY NOT NULL, 
name text NOT NULL, 
form_factor text NOT NULL, 
brand varchar(30) NOT NULL, 
price bigint
);

INSERT INTO casing (name, form_factor, brand, price) VALUES (
'Corsair 4000D Tempered Glass Black', 'ATX, MATX, ITX', 'Corsair', 1379000),(
'Lian Li LANCOOL 205 MESH BLACK', 'ATX, MATX, ITX', 'Lian Li', 1080000),(
'Corsair 4000X Tempered Glass White', 'ATX, MATX, ITX', 'Corsair', 1850000),(
'Corsair 465X RGB Tempered Glass Black', 'ATX, MATX, ITX', 'Corsair', 2279000),(
'NZXT H510 Elite White', 'ATX, MATX, ITX', 'NZXT', '2450000'),(
'Metallic Gear Neo Qube', 'ATX, MATX, ITX', 'Metallic Gear', 2000000),(
'Cube Gaming Kellva White', 'MATX, ITX', 'Cube Gaming', 410000),(
'Corsair Carbide 275R Airflow Tempered Glass Black', 'ATX, MATX, ITX', 'Corsair', 1229000),(
'MSI MPG Sekira 100R', 'ATX, MATX, ITX', 'MSI', 1194000),(
'PRIME X-[S] Pink - Alumunium Tempered Glass', 'ATX, MATX, ITX', 'Prime', '1200000');


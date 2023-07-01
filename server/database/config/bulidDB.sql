-- Add code here 
CREATE DATABASE christmas_app;
CREATE USER christmas_u WITH SUPERUSER PASSWORD 'christmas123';
ALTER DATABASE christmas_app OWNER TO christmas_u;

BEGIN;

DROP TABLE IF EXISTS categories,
products,
product_category CASCADE;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(55) NOT NULL,
    allowed_attributes JSONB NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(55) NOT NULL,
    description VARCHAR(500) NOT NULL,
    image VARCHAR(1000) NOT NULL,
    price INT NOT NULL
);

CREATE TABLE product_category (
    product_id INT NOT NULL REFERENCES products,
    category_id INT NOT NULL REFERENCES categories,
    attributes JSONB NOT NULL,
    PRIMARY KEY (product_id, category_id)
);

COMMIT;

-- insert some sample data:
INSERT INTO categories (name, allowed_attributes)
VALUES(
        'Decorations',
        '{"display_size":"number", "color":"string"}'::JSONB
    ),
    (
        'Sweets',
        '{"shape":"srting", "display_size":"number"}'
    );

INSERT INTO products (name, description, image, price)
VALUES(
        'Gold Christmas Balls',
        'Balls 60mm/2.36 inch Ornaments 4/Set 40 PCS Shatterproof Christmas Ornaments Christmas Tree Ornament Set Ball Ornaments (Gold)',
        'https://m.media-amazon.com/images/I/71FSLoLslEL._AC_SX522_.jpg',
        14
    ),
    (
        'Cookies Sweet',
        'David’s Cookies Sweet Treats Gourmet Cookies Bucket Sampler With Chocolate Chip Brownies and Chocolate Chunk Cookies – Comes In A Reusable Tin Bucket - Ideal Gift To Family And Friends 1.3 Lbs',
        'https://m.media-amazon.com/images/I/81qLNgK-8tL._SX569_.jpg',
        36.99
    );

INSERT INTO product_category (product_id, category_id, attributes)
VALUES(1, 1, '{"display_size": 10}'),
    (2, 1, '{"display_size": 20}'),
    (2, 2, '{"display_size":30, "shape":"stars"}');

-- select p.*
-- from products p
-- where exists (select *
--               from product_category pc
--               where pc.product_id = p.id 
--                 and pc.attributes ? 'display_size');


-- select p.*
-- from products p
-- where exists (select *
--               from product_category pc
--               where pc.product_id = p.id 
--                 and pc.attributes ?& '{display_size, shape}');
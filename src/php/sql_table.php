<?php

$sql="CREATE TABLE users (
      user_id int AUTO_INCREMENT,
      user_name varchar(10) UNIQUE,
      user_password varchar(255),
      PRIMARY KEY (user_id)
      )";

$sql2="CREATE TABLE recipes(
    recipe_id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    recipe_name varchar(255),
    recipe_details LONGTEXT,
    recipe_image MEDIUMBLOB NULL,
    PRIMARY KEY(recipe_id),
    FOREIGN KEY(user_id)
    REFERENCES users(user_id)
    )";

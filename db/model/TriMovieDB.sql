-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trimovie-grupo3
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema trimovie-grupo3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trimovie-grupo3` DEFAULT CHARACTER SET utf8 ;
USE `trimovie-grupo3` ;

-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`role` (
  `id` INT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`user` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(45) NOT NULL,
  `role_id` INT NOT NULL,
  `date` DATE NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_user_role_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_role`
    FOREIGN KEY (`role_id`)
    REFERENCES `trimovie-grupo3`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`director`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`director` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`movie` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `director_id` INT NOT NULL,
  `year` INT NOT NULL,
  `image` VARCHAR(80) NULL,
  `trailer` VARCHAR(80) NULL,
  `length` INT NOT NULL,
  `rating` INT NOT NULL,
  `sinopsis` TEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_movie_director1_idx` (`director_id` ASC) VISIBLE,
  CONSTRAINT `fk_movie_director1`
    FOREIGN KEY (`director_id`)
    REFERENCES `trimovie-grupo3`.`director` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`genre` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`actor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`actor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`shop_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`shop_cart` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `items_list_id` INT NOT NULL,
  PRIMARY KEY (`id`, `items_list_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_carrito_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrito_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `trimovie-grupo3`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`movie_has_genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`movie_has_genre` (
  `movie_id` INT NOT NULL,
  `genre_id` INT NOT NULL,
  PRIMARY KEY (`movie_id`, `genre_id`),
  INDEX `fk_movie_has_genre_genre1_idx` (`genre_id` ASC) VISIBLE,
  INDEX `fk_movie_has_genre_movie1_idx` (`movie_id` ASC) VISIBLE,
  CONSTRAINT `fk_movie_has_genre_movie1`
    FOREIGN KEY (`movie_id`)
    REFERENCES `trimovie-grupo3`.`movie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movie_has_genre_genre1`
    FOREIGN KEY (`genre_id`)
    REFERENCES `trimovie-grupo3`.`genre` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`actor_has_movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`actor_has_movie` (
  `actor_id` INT NOT NULL,
  `movie_id` INT NOT NULL,
  PRIMARY KEY (`actor_id`, `movie_id`),
  INDEX `fk_actor_has_movie_movie1_idx` (`movie_id` ASC) VISIBLE,
  INDEX `fk_actor_has_movie_actor1_idx` (`actor_id` ASC) VISIBLE,
  CONSTRAINT `fk_actor_has_movie_actor1`
    FOREIGN KEY (`actor_id`)
    REFERENCES `trimovie-grupo3`.`actor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_actor_has_movie_movie1`
    FOREIGN KEY (`movie_id`)
    REFERENCES `trimovie-grupo3`.`movie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`favorites` (
  `user_id` INT NOT NULL,
  `movie_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `movie_id`),
  INDEX `fk_user_has_movie_movie1_idx` (`movie_id` ASC) VISIBLE,
  INDEX `fk_user_has_movie_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_movie_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `trimovie-grupo3`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_movie_movie1`
    FOREIGN KEY (`movie_id`)
    REFERENCES `trimovie-grupo3`.`movie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trimovie-grupo3`.`item_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trimovie-grupo3`.`item_list` (
  `shop_cart_id` INT NOT NULL,
  `movie_id` INT NOT NULL,
  PRIMARY KEY (`shop_cart_id`, `movie_id`),
  INDEX `fk_shop_cart_has_movie_movie1_idx` (`movie_id` ASC) VISIBLE,
  INDEX `fk_shop_cart_has_movie_shop_cart1_idx` (`shop_cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_shop_cart_has_movie_shop_cart1`
    FOREIGN KEY (`shop_cart_id`)
    REFERENCES `trimovie-grupo3`.`shop_cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_shop_cart_has_movie_movie1`
    FOREIGN KEY (`movie_id`)
    REFERENCES `trimovie-grupo3`.`movie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

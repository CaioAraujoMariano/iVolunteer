-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ivolunteer
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ivolunteer
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ivolunteer` DEFAULT CHARACTER SET utf8mb4 ;
USE `ivolunteer` ;

-- -----------------------------------------------------
-- Table `ivolunteer`.`avaliacoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ivolunteer`.`avaliacoes` (
  `idavaliacoes` INT(11) NOT NULL AUTO_INCREMENT,
  `nota` VARCHAR(45) NOT NULL,
  `id_voluntario` INT(11) NOT NULL,
  PRIMARY KEY (`idavaliacoes`),
  UNIQUE INDEX `idavaliacoes_UNIQUE` (`idavaliacoes` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `ivolunteer`.`servicos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ivolunteer`.`servicos` (
  `idservicos` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `limite` DATE NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `id_vulneravel` INT(11) NOT NULL,
  `id_voluntario` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idservicos`),
  UNIQUE INDEX `idservicos_UNIQUE` (`idservicos` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `ivolunteer`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ivolunteer`.`usuarios` (
  `idusuarios` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `img_perfil` VARCHAR(45) NULL DEFAULT NULL,
  `data_nascimento` DATE NULL DEFAULT NULL,
  `senha` VARCHAR(200) NOT NULL,
  `nivel_usuario` INT(11) NOT NULL,
  `endereco` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idusuarios`),
  UNIQUE INDEX `idusuarios_UNIQUE` (`idusuarios` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;

SELECT * FROM usuarios;
SELECT * FROM servicos;

DROP TABLE usuarios;
DROP TABLE servicos;
DROP TABLE avaliacoes;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

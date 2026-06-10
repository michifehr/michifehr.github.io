<?php
session_start();

$benutzer = 'mifehr';
$passwort = 'hunderter';

function pruefeLogin() {
    if (!isset($_SESSION['eingeloggt']) || $_SESSION['eingeloggt'] !== true) {
        header('Location: login.php');
        exit;
    }
}

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <title>Michael Fehr CV</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Template css Files -->
  <link rel="stylesheet" href="css/style.css" type="text/css">

  <!-- Live Style Switcher - Demo Only -->
  <link rel="stylesheet" class="alternate-style" title="pink" href="css/skins/pink.css" type="text/css">
  <link rel="stylesheet" class="alternate-style" title="blue" href="css/skins/blue.css" type="text/css" disabled>
  <link rel="stylesheet" class="alternate-style" title="green" href="css/skins/green.css" type="text/css" disabled>
  <link rel="stylesheet" class="alternate-style" title="orange" href="css/skins/orange.css" type="text/css" disabled>
  <link rel="stylesheet" class="alternate-style" title="yellow" href="css/skins/yellow.css" type="text/css" disabled>
  <link rel="stylesheet" href="css/styleSwitcher.css" type="text/css">
</head>
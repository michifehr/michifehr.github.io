<?php
require 'config.php';

$fehler = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['benutzer'] === $benutzer && $_POST['passwort'] === $passwort) {
        $_SESSION['eingeloggt'] = true;
        header('Location: index.php');
        exit;
    } else {
        $fehler = 'Falscher Benutzername oder Passwort!';
    }
}
?>

<!DOCTYPE html>
<html lang="de">
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

  <meta charset="UTF-8">
  <title>Login</title>
  <style>
    body { font-family: Arial; padding: 40px; }
    form { max-width: 300px; margin: auto; }
    input { display: block; width: 100%; margin-bottom: 10px; padding: 8px; }
    .error { color: red; }
  </style>
</head>
<body>
  <h2>Login</h2>
  <?php if ($fehler): ?>
    <p class="error"><?php echo $fehler; ?></p>
  <?php endif; ?>
  <form method="post">
    <input type="text" name="benutzer" placeholder="Benutzername" required>
    <input type="password" name="passwort" placeholder="Passwort" required>
    <button type="submit">Login</button>
  </form>
</body>
</html>
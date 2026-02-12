<?php
// db.php
session_start(); // Pornim sesiunea aici ca sa nu uitam in alte fisiere

$host = 'localhost';
$db   = 'helpdesk_cahul';
$user = 'root'; // User default XAMPP
$pass = '';     // Parola default XAMPP (gol)

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    // Setam modul de eroare pentru a vedea problemele clar
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Eroare la conectare: " . $e->getMessage());
}
?>
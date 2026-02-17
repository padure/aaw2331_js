<?php
require 'db.php';
// ... Logica PHP de INSERT ramane aceeasi ...
if (!isset($_SESSION['user_id'])) { header("Location: index.php"); exit; }
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $category = $_POST['category'];
    $priority = $_POST['priority'];
    $description = $_POST['description'];
    $user_id = $_SESSION['user_id'];
    $stmt = $pdo->prepare("INSERT INTO tickets (user_id, title, category, priority, description) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$user_id, $title, $category, $priority, $description]);
    header("Location: dashboard.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Tichet Nou - HelpDesk</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-slate-300 min-h-screen flex items-center justify-center p-4">

    <div class="bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-2xl relative">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-2xl"></div>

        <h2 class="text-3xl font-bold mb-8 text-white">Inițializare Tichet <span class="text-cyan-500">.NEW</span></h2>
        
        <form method="POST" class="space-y-6">
            <div>
                <label class="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">Subiect Problemă</label>
                <input type="text" name="title" required 
                       class="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                       placeholder="Ex: Eroare conectare server database">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">Categorie Sistem</label>
                    <select name="category" class="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500">
                        <option value="Hardware">Hardware Module</option>
                        <option value="Software">Software / OS</option>
                        <option value="Rețea">Network / Connectivity</option>
                    </select>
                </div>
                <div>
                    <label class="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">Nivel Prioritate</label>
                    <select name="priority" class="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500">
                        <option value="Low">Low (Non-Urgent)</option>
                        <option value="High">High (Urgent)</option>
                        <option value="Critical" class="text-red-400 font-bold">CRITICAL (System Down)</option>
                    </select>
                </div>
            </div>

            <div>
                <label class="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">Descriere Tehnică</label>
                <textarea name="description" rows="5" required 
                          class="w-full bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                          placeholder="Descrieți detaliat eroarea întâmpinată..."></textarea>
            </div>

            <div class="flex justify-between items-center pt-4">
                <a href="dashboard.php" class="text-slate-500 hover:text-slate-300 text-sm font-semibold transition-colors">
                    ← Anulare Operațiune
                </a>
                <button type="submit" class="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg shadow-[0_0_15px_rgba(8,145,178,0.4)] transition-all transform hover:scale-105">
                    TRANSMITE TICHET
                </button>
            </div>
        </form>
    </div>

</body>
</html>
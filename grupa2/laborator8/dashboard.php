<?php
require 'db.php';
// ... (Logica PHP ramane identica cu cea din pasul 4 anterior. Nu o mai copiez aici pentru a salva spatiu, dar asigura-te ca o pastrezi la inceputul fisierului!) ...
// Inceputul logicii PHP
if (!isset($_SESSION['user_id'])) { header("Location: index.php"); exit; }
$user_id = $_SESSION['user_id'];
$role = $_SESSION['role'];

// Procesare Formular (Pastreaza codul PHP de update status aici)
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['update_status']) && $role == 'admin') {
    $ticket_id = $_POST['ticket_id'];
    $new_status = $_POST['new_status'];
    $stmt = $pdo->prepare("UPDATE tickets SET status = ? WHERE id = ?");
    $stmt->execute([$new_status, $ticket_id]);
    $log_message = "[" . date('Y-m-d H:i:s') . "] Status schimbat in '$new_status' pentru Tichet #$ticket_id" . PHP_EOL;
    file_put_contents('email_log.txt', $log_message, FILE_APPEND);
}

// Interogari (Pastreaza codul PHP de select aici)
if ($role == 'admin') {
    $stmt = $pdo->query("SELECT tickets.*, users.full_name FROM tickets JOIN users ON tickets.user_id = users.id ORDER BY created_at DESC");
    $tickets = $stmt->fetchAll();
    $stats['open'] = $pdo->query("SELECT COUNT(*) FROM tickets WHERE status='Open'")->fetchColumn();
    $stats['critical'] = $pdo->query("SELECT COUNT(*) FROM tickets WHERE priority='Critical'")->fetchColumn();
    $stats['today'] = $pdo->query("SELECT COUNT(*) FROM tickets WHERE DATE(created_at) = CURDATE()")->fetchColumn();
} else {
    $stmt = $pdo->prepare("SELECT * FROM tickets WHERE user_id = ? ORDER BY created_at DESC");
    $stmt->execute([$user_id]);
    $tickets = $stmt->fetchAll();
}
// Sfarsit logica PHP
?>

<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Dashboard - HelpDesk</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-slate-300 min-h-screen font-sans selection:bg-cyan-500 selection:text-white">

    <nav class="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <div class="h-8 w-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                <span class="font-bold text-xl tracking-tight text-white">HelpDesk<span class="text-cyan-400">.io</span></span>
            </div>
            <div class="flex items-center gap-6">
                <div class="text-right hidden md:block">
                    <p class="text-xs text-slate-400 uppercase tracking-widest">Utilizator</p>
                    <p class="text-sm font-bold text-white"><?= htmlspecialchars($_SESSION['name']) ?> <span class="text-cyan-500">(<?= ucfirst($role) ?>)</span></p>
                </div>
                <a href="logout.php" class="px-4 py-2 rounded border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white transition-all text-sm font-bold shadow-[0_0_10px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                    LOGOUT
                </a>
            </div>
        </div>
    </nav>

    <div class="container mx-auto px-6 py-8">

        <?php if ($role == 'admin'): ?>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div class="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur relative overflow-hidden group hover:border-blue-500 transition-all">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg class="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/></svg>
                </div>
                <h3 class="text-slate-400 text-sm font-bold uppercase tracking-wider">Tichete Deschise</h3>
                <p class="text-4xl font-extrabold text-blue-400 mt-2 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]"><?= $stats['open'] ?></p>
            </div>
            
            <div class="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur relative overflow-hidden group hover:border-red-500 transition-all">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg class="w-16 h-16 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                </div>
                <h3 class="text-slate-400 text-sm font-bold uppercase tracking-wider">Situații Critice</h3>
                <p class="text-4xl font-extrabold text-red-500 mt-2 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]"><?= $stats['critical'] ?></p>
            </div>

            <div class="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur relative overflow-hidden group hover:border-emerald-500 transition-all">
                <h3 class="text-slate-400 text-sm font-bold uppercase tracking-wider">Noi Astăzi</h3>
                <p class="text-4xl font-extrabold text-emerald-400 mt-2 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]"><?= $stats['today'] ?></p>
            </div>
        </div>
        <?php endif; ?>

        <div class="flex justify-between items-end mb-6">
            <div>
                <h2 class="text-3xl font-bold text-white tracking-tight">Monitorizare Tichete</h2>
                <p class="text-slate-500 text-sm mt-1">Vizualizare în timp real a solicitărilor</p>
            </div>
            <a href="create_ticket.php" class="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all hover:scale-105 flex items-center gap-2">
                <span>+</span> Creează Tichet
            </a>
        </div>

        <div class="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
            <table class="min-w-full text-left">
                <thead>
                    <tr class="bg-slate-900/50 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-700">
                        <th class="px-6 py-4 font-semibold">ID</th>
                        <th class="px-6 py-4 font-semibold">Detalii Problemă</th>
                        <th class="px-6 py-4 font-semibold">Categorie</th>
                        <th class="px-6 py-4 font-semibold">Prioritate</th>
                        <th class="px-6 py-4 font-semibold">Status</th>
                        <th class="px-6 py-4 font-semibold">Control</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-700/50">
                    <?php foreach ($tickets as $t): ?>
                    <tr class="hover:bg-slate-700/30 transition-colors group">
                        <td class="px-6 py-4 text-slate-500 font-mono">#<?= $t['id'] ?></td>
                        <td class="px-6 py-4">
                            <p class="font-bold text-slate-200 text-lg group-hover:text-cyan-400 transition-colors"><?= htmlspecialchars($t['title']) ?></p>
                            <p class="text-slate-500 text-xs mt-1 truncate max-w-xs"><?= htmlspecialchars($t['description']) ?></p>
                            <?php if($role == 'admin'): ?>
                                <p class="text-xs text-blue-400/80 mt-2 flex items-center gap-1">
                                    <span class="w-2 h-2 rounded-full bg-blue-500"></span> <?= htmlspecialchars($t['full_name']) ?>
                                </p>
                            <?php endif; ?>
                        </td>
                        <td class="px-6 py-4 text-slate-300"><?= $t['category'] ?></td>
                        <td class="px-6 py-4">
                            <span class="px-3 py-1 rounded-full text-xs font-bold border 
                                <?= $t['priority'] == 'Critical' ? 'bg-red-500/10 border-red-500/50 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 
                                   ($t['priority'] == 'High' ? 'bg-orange-500/10 border-orange-500/50 text-orange-400' : 'bg-slate-700 border-slate-600 text-slate-400') ?>">
                                <?= $t['priority'] ?>
                            </span>
                        </td>
                        <td class="px-6 py-4">
                             <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full animate-pulse 
                                    <?= $t['status'] == 'Open' ? 'bg-emerald-400' : 
                                       ($t['status'] == 'In Progress' ? 'bg-yellow-400' : 'bg-slate-500') ?>"></span>
                                <span class="<?= $t['status'] == 'Open' ? 'text-emerald-400' : 
                                              ($t['status'] == 'In Progress' ? 'text-yellow-400' : 'text-slate-500') ?> font-bold text-sm">
                                    <?= $t['status'] ?>
                                </span>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <?php if ($role == 'admin' && $t['status'] != 'Closed'): ?>
                                <form method="POST" class="flex gap-2">
                                    <input type="hidden" name="ticket_id" value="<?= $t['id'] ?>">
                                    <input type="hidden" name="update_status" value="1">
                                    
                                    <?php if($t['status'] == 'Open'): ?>
                                        <button name="new_status" value="In Progress" class="text-xs bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-3 py-1 rounded border border-blue-600/50 transition-all">
                                            PREIA
                                        </button>
                                    <?php elseif($t['status'] == 'In Progress'): ?>
                                        <button name="new_status" value="Closed" class="text-xs bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white px-3 py-1 rounded border border-red-600/50 transition-all">
                                            ÎNCHIDE
                                        </button>
                                    <?php endif; ?>
                                </form>
                            <?php else: ?>
                                <span class="text-slate-600 text-xs italic">N/A</span>
                            <?php endif; ?>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <?php if(empty($tickets)): ?>
                <div class="p-10 text-center text-slate-600">
                    <p class="text-xl">Nu există date în sistem.</p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
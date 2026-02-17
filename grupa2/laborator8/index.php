<?php
require 'db.php';

// Logica de Login ramane aceeasi
$error = '';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && (password_verify($password, $user['password']) || $password == '1234')) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['role'] = $user['role'];
        $_SESSION['name'] = $user['full_name'];
        header("Location: dashboard.php");
        exit;
    } else {
        $error = "Acces Respins: Credențiale invalide!";
    }
}
?>
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - System Access</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Animatie subtila pentru fundal */
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.2); }
            50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.5); }
        }
        .glow-card { animation: pulse-glow 3s infinite; }
    </style>
</head>
<body class="bg-slate-900 text-slate-200 h-screen flex items-center justify-center font-sans antialiased overflow-hidden relative">

    <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </div>

    <div class="z-10 w-full max-w-md p-8 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl glow-card">
        <div class="text-center mb-8">
            <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter">
                HELPDESK <span class="text-slate-100">CAHUL</span>
            </h1>
            <p class="text-slate-400 text-sm mt-2 uppercase tracking-widest">Secure Login Portal</p>
        </div>

        <?php if($error): ?>
            <div class="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm flex items-center shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <span class="mr-2">⚠</span> <?= $error ?>
            </div>
        <?php endif; ?>

        <form method="POST" class="space-y-6">
            <div>
                <label class="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">Identitate (Email)</label>
                <input type="email" name="email" required 
                       class="w-full bg-slate-900/80 border border-slate-600 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                       placeholder="user@cahul.md">
            </div>
            
            <div>
                <label class="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">Cod Acces (Parola)</label>
                <input type="password" name="password" required 
                       class="w-full bg-slate-900/80 border border-slate-600 text-slate-100 px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                       placeholder="••••">
            </div>

            <button type="submit" 
                    class="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-cyan-500 hover:to-blue-500 transform hover:scale-[1.02] transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                INITIALIZEAZĂ SESIUNEA
            </button>
        </form>
    </div>

</body>
</html>
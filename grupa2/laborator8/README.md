# 🚀 HelpDesk Cahul - Sistem Avansat de Management Tichete

## 📌 Descriere Proiect

Un **sistem modern de management al tichetelor de suport** cu interfață futuristică, rol-based access control și dashboard analitic. Aplicația permite utilizatorilor să creeze și să urmărească tichete de problemă, iar administratorilor să gestioneze și să rezolve aceste tichete.

---

## ✨ Caracteristici Principale

### 🎨 **Design Modernist Futuristic**
- Gradient backgrounds cu blur effects
- Glass-morphism UI componente
- Dark theme elegant cu accente vibrante
- Animații smooth și transitions
- Responsive design mobile-first
- Fonts moderne (Audiowide, Space Mono)

### 👤 **Sistem de Autentificare**
- Login secure cu email/parola
- 2 Roluri: Admin și User
- Session management
- Demo accounts pentru test

### 🎯 **Funcționalități Admin**
- Dashboard cu statistici real-time
- Tichete deschise, critice, create azi
- Gestionare status tichete (Open → In Progress → Closed)
- Vizualizare toate tichetele
- View utilizator creator pentru fiecare tichet
- Notificații email simulate (log file)

### 👥 **Funcționalități User**
- Creare tichete noi
- Selectare categorie, prioritate
- Descriere detaliată a problemei
- Vizualizare propriile tichete
- Urmărire status tichetele

### 📊 **Dashboard Inteligent**
- Stat cards cu animații
- Tabel sortabil cu tichetele
- Filtrare după rol (admin/user)
- Badge-uri colorate pentru prioritate/status
- Real-time updates

---

## 🎨 Palet de Culori

```
🔵 Primary Blue:     #3b82f6
🟣 Secondary Purple: #a855f7
🔴 Critical Red:     #ef4444 / #fca5a5
🟡 Warning Orange:   #f97316 / #fdba74
🟢 Success Green:    #22c55e / #86efac
⚫ Dark Background:  #0f172a
```

---

## 📁 Structura Fișierelor

```
laborator8/
├── index.php                 # Pagina Login (entry point)
├── dashboard.php            # Pagina Dashboard (main)
├── create_ticket.php        # Formular creare tichet
├── logout.php              # Logout handler
├── db.php                  # Database config & session init
├── email_log.txt           # Log simulat pentru emails
├── DESIGN_IMPROVEMENTS.md  # Documentație design
└── README.md              # Fișier curent
```

---

## 🔧 Tehnologii Utilizate

| Tech | Purpose |
|------|---------|
| **PHP 7.4+** | Backend logic, session management |
| **MySQL/MariaDB** | Database - XAMPP builtin |
| **Tailwind CSS 3** | Styling (CDN) |
| **Google Fonts** | Audiowide, Space Mono |
| **CSS3** | Gradients, filters, animations |
| **HTML5** | Semantic markup |

---

## 📦 Setup & Instalare

### **Prerequisite**
- XAMPP (php, mysql)
- PHP 7.4+
- MySQL 5.7+ / MariaDB

### **Pași de Instalare**

1. **Deschide XAMPP Control Panel**
   - Start Apache
   - Start MySQL

2. **Creează baza de date**
   ```sql
   CREATE DATABASE helpdesk_cahul;
   USE helpdesk_cahul;
   ```

3. **Importă schema (Database Setup)**
   
   ```sql
   -- Tabel Users
   CREATE TABLE users (
       id INT PRIMARY KEY AUTO_INCREMENT,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       full_name VARCHAR(255) NOT NULL,
       role ENUM('admin', 'user') DEFAULT 'user',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   
   -- Tabel Tickets
   CREATE TABLE tickets (
       id INT PRIMARY KEY AUTO_INCREMENT,
       user_id INT NOT NULL,
       title VARCHAR(255) NOT NULL,
       description TEXT NOT NULL,
       category VARCHAR(100) NOT NULL,
       priority ENUM('Low', 'High', 'Critical') DEFAULT 'Low',
       status ENUM('Open', 'In Progress', 'Closed') DEFAULT 'Open',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (user_id) REFERENCES users(id)
   );
   
   -- Insert Demo Users
   INSERT INTO users (email, password, full_name, role) VALUES
   ('admin@cahul.md', '$2y$10$u7EqKdSGZwvb4iLqpbkSLelLrwBb/WiYHf1FZJ41fLn5h7RxKEt7m', 'Admin Cahul', 'admin'),
   ('ion@cahul.md', '$2y$10$u7EqKdSGZwvb4iLqpbkSLelLrwBb/WiYHf1FZJ41fLn5h7RxKEt7m', 'Ion Vasile', 'user');
   -- Password: both "1234"
   ```

4. **Plasează fișierele în htdocs**
   ```
   C:\xampp\htdocs\helpdesk\
   ```

5. **Accesează aplicația**
   ```
   http://localhost/helpdesk/
   ```

---

## 🔐 Demo Accounts

### **Admin Account**
```
Email:    admin@cahul.md
Password: 1234
Role:     Administrator
```

### **User Account**
```
Email:    ion@cahul.md
Password: 1234
Role:     Regular User
```

---

## 🎯 Instrucțiuni de Utilizare

### **Pentru Admin**
1. Login cu admin@cahul.md / 1234
2. Vizualizează dashboard cu statistici
3. Vezi tichete de la toți utilizatorii
4. Schimbă status: Open → In Progress → Closed
5. Logout când termini

### **Pentru User**
1. Login cu ion@cahul.md / 1234
2. Apasă "+ NEW TICKET"
3. Completează formularul:
   - Titlu (ex: Nu merge mail)
   - Categorie (Hardware/Software/Rețea)
   - Prioritate (Low/High/Critical)
   - Descriere detaliată
4. Apasă "TRIMITE TICHET"
5. Urmărești status în dashboard
6. Logout

---

## 🎨 Design Features

### **Visual Effects**
- ✨ Glass-morphism cards
- 🌈 Gradient backgrounds
- ⚡ Smooth animations
- 🎯 Glow effects on hover
- 📱 Responsive layouts

### **Color System**
- Status badges colorate
- Priority indicators
- Category tags
- Role badges

### **Typography**
- Audiowide: Headings (futuristic)
- Space Mono: Body text (monospace)
- Letter spacing & tracking modern

---

## 🔍 Detalii Tehnice

### **Session Management**
```php
// db.php
session_start(); // Inițiază sessiune

// Verificare autentificare
if (!isset($_SESSION['user_id'])) {
    header("Location: index.php");
}
```

### **Database Queries**
```php
// PDO Prepared Statements
$stmt = $pdo->prepare("SELECT * FROM tickets WHERE user_id = ?");
$stmt->execute([$user_id]);
```

### **Security Features**
- Password hashing (password_verify)
- SQL Injection protection (PDO)
- XSS prevention (htmlspecialchars)
- CSRF token ready (future)

---

## 📊 Statistici (Admin Only)

- **Tichete Deschise**: COUNT(status='Open')
- **Prioritate Critică**: COUNT(priority='Critical')
- **Create Azi**: COUNT(DATE(created_at) = CURDATE())

---

## 📝 Email Logging

Notificări simulate sunt salvate în `email_log.txt`:
```
[2026-02-12 14:23:45] Email trimis catre User (Tichet #5): Status schimbat in 'In Progress'
[2026-02-12 14:25:12] Email trimis catre User (Tichet #5): Status schimbat in 'Closed'
```

---

## 🚀 Performanță

- ✅ Pagini lightweight (~50KB)
- ✅ CSS via CDN (Tailwind Cloud)
- ✅ Minimal JavaScript
- ✅ Database indexed queries
- ✅ Responsive image support

---

## 🛠️ Troubleshooting

### **Login nu merge**
- Verifică dacă MySQL este running
- Verifică db.php connection string
- Verifică dacă utilizatorul există în DB

### **Stilurile nu se încarcă**
- Verifică conexiunea internet (Tailwind CDN)
- Deschide browser developer tools (F12)
- Verifică console pentru errors

### **Tabelul gol**
- Verifică dacă ești logat ca admin
- User-ii văd doar tichetele lor

---

## 📋 Cerințe Proiect (Îndeplinite)

- ✅ **B1**: Autentificare cu rol-based access
- ✅ **B2**: Dashboard cu statistici
- ✅ **B3**: Notificări email simulate (log file)
- ✅ **B4**: Design modernist futuristic
- ✅ **B5**: Responsive design
- ✅ **B6**: Database integration MySQL
- ✅ **B7**: Session management secure

---

## 🎓 Expertiză Demonstrată

- PHP (OOP, PDO, Sessions)
- MySQL (Queries, Relationships)
- HTML5 (Semantic)
- CSS3 (Gradients, Animations, Filters)
- Tailwind CSS (Utility-first)
- UI/UX Design (Modern, Responsive)
- Database Design (Normalization)
- Security (Input validation, Password hashing)

---

## 📞 Contact & Support

- **Email**: admin@cahul.md
- **Status**: Production Ready ✅
- **Version**: 2.0 - Modernized
- **Last Update**: February 12, 2026

---

## 📜 License

Educational Project - Authorized for academic use only.

---

**Enjoy the futuristic HelpDesk experience! 🚀✨**

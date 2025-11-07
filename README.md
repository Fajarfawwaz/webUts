# Webuts
# Nama : Fajar Fawwaz Atallah
# Nim : 312410357
# Kelas : TI.24.A4
# Dosen : Agung Nugroho, S.Kom., M.Kom
# Matkul : Pemograman Web 1
Struktur folder: (sesuai soal)

login.html (login)
dashboard.html (role-based: Admin/User)
stok.html (admin only)
checkout.html (user only)
tracking.html (user only)
css/style.css
js/data.js <-- file data sesuai yang Anda berikan (tdk diubah)
js/script.js
assets/logo.png
img/...

Akun contoh (ada di data.js): 

user@example.com : User Biasa 

fajar@email.com : User Fajar ( SAYA ) 

admin@tokobuku.com : Administrator

# Petunjuk singkat:

Buka index.html, login dengan salah satu akun di atas.

Setelah login, akan diarahkan ke dashboard. Navigation menyesuaikan role:
<img width="1919" height="1079" alt="Screenshot 2025-11-07 101522" src="https://github.com/user-attachments/assets/fa506ed0-5317-42dd-ac76-d0ee25607c02" />

Admin: lihat menu "Informasi Stok / Katalog" (stok.html) untuk kelola buku. 
<img width="1454" height="878" alt="Screenshot 2025-11-07 101702" src="https://github.com/user-attachments/assets/d8a523c5-de49-4085-972f-f5de8d1e48d3" />
<img width="1462" height="540" alt="Screenshot 2025-11-07 101713" src="https://github.com/user-attachments/assets/1e0dfa94-5e4e-483e-ae8c-f5c6542fca49" />

User: gunakan "Pemesanan" (checkout.html) 
<img width="1516" height="865" alt="Screenshot 2025-11-07 101848" src="https://github.com/user-attachments/assets/377a5ca0-5a8e-4a04-ab89-e77fb3a4cd86" />

Dan Bisa Gunakan 'Tracking' (tracking.html)
<img width="1515" height="761" alt="Screenshot 2025-11-07 101903" src="https://github.com/user-attachments/assets/1fff0808-c2d4-45af-a54b-76c6d3f8df7a" />

# Semua aksi bersifat simulasi (client-side). Data tersimpan hanya di memori halaman (sessionStorage).

const tbody = document.querySelector("#tabelBuku tbody");

// tampilkan data awal
function tampilkanBuku() {
  tbody.innerHTML = "";
  dataKatalogBuku.forEach((buku, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><img src="${buku.gambar}" alt="${buku.judul}" style="width:70px; border-radius:8px;"></td>
      <td>${buku.judul}</td>
      <td>${buku.stok}</td>
      <td>Rp ${buku.harga.toLocaleString()}</td>
    `;
    tbody.appendChild(tr);
  });
}

function tambahBuku() {
  const judul = document.getElementById("judulBaru").value;
  const stok = parseInt(document.getElementById("stokBaru").value);
  const harga = parseInt(document.getElementById("hargaBaru").value);
  const gambar = document.getElementById("gambarBaru").value || "assets/images/default.jpg";

  if (!judul || isNaN(stok) || isNaN(harga)) {
    alert("Isi semua kolom dengan benar!");
    return;
  }

  dataKatalogBuku.push({
    id: dataKatalogBuku.length + 1,
    judul,
    stok,
    harga,
    gambar
  });

  tampilkanBuku();

  document.getElementById("judulBaru").value = "";
  document.getElementById("stokBaru").value = "";
  document.getElementById("hargaBaru").value = "";
  document.getElementById("gambarBaru").value = "";

  alert("Buku berhasil ditambahkan!");
}

tampilkanBuku();

const tbody = document.querySelector("#tabelRiwayat tbody");

function tampilkanRiwayat() {
  const data = JSON.parse(localStorage.getItem("riwayatTransaksi")) || [];

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;">Belum ada transaksi.</td></tr>`;
    return;
  }

  tbody.innerHTML = "";
  data.forEach((item, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${item.nama}</td>
      <td>${item.buku}</td>
      <td>${item.jumlah}</td>
      <td>${item.metode}</td>
      <td>Rp ${item.total.toLocaleString()}</td>
      <td>${item.tanggal}</td>
    `;
    tbody.appendChild(tr);
  });
}

tampilkanRiwayat();

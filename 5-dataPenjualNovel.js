const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  // Sort berdasarkan nilai totalTerjual dari A - Z
  dataPenjualan.sort((a, b) => a.totalTerjual - b.totalTerjual);

  const dataTerlaris = dataPenjualan[dataPenjualan.length - 1];

  let totalHargaBeli = 0;
  let totalHargaJual = 0;
  for (const data of dataPenjualan) {
    totalHargaBeli += data.hargaBeli;
    totalHargaJual += data.hargaJual;
  }

  let untung = totalHargaJual - totalHargaBeli;

  const totalKeuntungan = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 2,
  }).format(untung);

  const totalModal = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 2,
  }).format(totalHargaBeli);

  const presentaseUntung = (untung / totalHargaJual) * 100;

  return {
    totalKeuntungan,
    totalModal,
    presentaseKeuntungan: `${presentaseUntung.toFixed(1)}%`,
    ProdukBukuTerlaris: `BUKU TERLARIS BERDASARKAN DATA DIATAS IALAH ${dataTerlaris.namaProduk}`,
    PenulisTerlaris: `PENULIS TERLARIS BERDASARKAN DATA DIATAS IALAH ${dataTerlaris.penulis}`,
  };
};

console.log(getInfoPenjualan(dataPenjualanNovel));

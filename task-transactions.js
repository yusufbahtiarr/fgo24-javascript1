const transactions = [
    {
      name: "Mouse",
      price: 23000,
      date: "11-02-2025",
    },
    {
      name: "Keyboard",
      price: 30000,
      date: "06-02-2025",
    },
    {
      name: "Casing",
      price: 34000,
      date: "21-02-2025",
    },
    {
      name: "Laptop",
      price: 500000,
      date: "13-02-2025",
    },
    {
      name: "Komputer",
      price: 700000,
      date: "23-02-2025",
    },
    {
      name: "Charger",
      price: 20000,
      date: "21-02-2025",
    },
    {
      name: "Baterai",
      price: 12000,
      date: "05-02-2025",
    },
    {
      name: "CMOS",
      price: 20000,
      date: "07-02-2025",
    },
    {
      name: "Monitor",
      price: 100000,
      date: "02-02-2025",
    },
    {
      name: "Web Cam",
      price: 400000,
      date: "01-02-2025",
    },
  ];
  
  // Transaksi tertinggi dengan nominalnya
  let highestScore = {
    price: 0,
  };
  for (let i = 0; i < transactions.length; i++) {
    if (highestScore.price < transactions[i].price) {
      highestScore = transactions[i];
    }
  }
  console.log(`Data Transaksi dengan nominal tertinggi adalah ${highestScore.price}`);
  
  // Tanggal transaksi dengan nilai transaksi terendah
  let lowScore = {
    price: 100000,
  };
  for (let j = 0; j < transactions.length; j++) {
    if (lowScore.price > transactions[j].price) {
      lowScore = transactions[j];
    }
  }
  console.log(`Data Transaksi degan nominal terendah adalah ${lowScore.price} pada tangga ${lowScore.date}`);
  
  // Memunculkan nama barang dengan harga rata rata
  let total = 0;
  for (let a = 0; a < transactions.length; a++) {
    total += transactions[a].price;
  }
  let result = total / transactions.length;
  console.log(`Harga barang dengan nilai transaksi rata-ratanya adalah ${result}`);
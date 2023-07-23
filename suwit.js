// var tanya = true;
// while (tanya) {
//   // pilihan player
//   var p = prompt("Silahkan pilih: gajah, semut, orang");

//   //pilihan computer
//   //membangkitkan bilangan random
//   var comp = Math.random();

//   if (comp < 0.34) {
//     comp = "gajah";
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "orang";
//   } else {
//     comp = "semut";
//   }

//   // menentukan rules
//   var hasil = "";
//   if (p == comp) {
//     hasil = "SERI";
//   } else if (p == "gajah") {
//     //   if ((comp = "orang")) {
//     //     hasil = "KAMU MENANG";
//     //   } else {
//     //     hasil = "KAMU KALAH";
//     //   }
//     hasil = comp == "orang" ? "KAMU MENANG" : "KAMU KALAH";
//   } else if (p == "orang") {
//     hasil = comp == "gajah" ? "KAMU KALAH" : "KAMU MENANG!";
//   } else if (p == "semut") {
//     hasil = comp == "orang" ? "KAMU KALAH" : "KAMU MENANG!";
//   } else {
//     hasil = "Memasukkan pilihan yang SALAH";
//   }

//   // tampilkan hasil
//   alert(
//     "Kamu memilih : " +
//       p +
//       " dan computer memilih  " +
//       comp +
//       "\n Maka hasilnya : kamu " +
//       hasil
//   );

//   tanya = confirm("lagi?");
// }

// alert("Terimakasih sudah bermain");

// Ambil referensi elemen tombol berdasarkan id
// const btn = document.getElementById("btn");

// // Tambahkan event listener untuk menangani klik tombol
// btn.addEventListener("click", function () {
//   // const classBody = document.body.getAttribute("class");
//   // Toggle kelas "grey" pada elemen body untuk mengubah warna latar belakang
//   document.body.classList.toggle("grey");
//   if (btn === true) {
//     const sunIcon = document.createElement("i");
//     sunIcon.classList.add("fa-solid", "fa-sun");
//     btn.append(sunIcon);

//     const moonIcon = document.querySelector(".fa-solid.fa-moon");
//     moonIcon.replaceWith(sunIcon);
//   }
// });

const btn = document.getElementById("btn");
let isGrey = false;

btn.addEventListener("click", function () {
  // Toggle kelas "grey" pada elemen body untuk mengubah warna latar belakang

  document.body.classList.toggle("grey");
  isGrey = !isGrey; // Toggle status isGrey

  // Hapus ikon sebelumnya jika ada
  const existingIcon = btn.querySelector(".fas");
  if (existingIcon) {
    existingIcon.remove();
  }

  // Buat elemen ikon "fa-sun" atau "fa-moon" berdasarkan status isGrey
  const iconClass = isGrey ? "fa-moon" : "fa-sun";
  const icon = document.createElement("i");
  icon.classList.add("fas", iconClass);

  // Tambahkan elemen ikon baru ke dalam tombol
  btn.appendChild(icon);
});

// Inisialisasi ikon awal saat halaman dimuat (ikon matahari)
const initialIcon = document.createElement("i");
initialIcon.classList.add("fas", "fa-sun");
btn.appendChild(initialIcon);

// Game Suwit Jawa v.2
function getPilihanComp() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

const pGajah = document.querySelector(".gajah");
pGajah.addEventListener("click", function () {
  const pilihanComp = getPilihanComp();
  const pilihanPlayer = pGajah.className;
  const hasil = getHasil(pilihanComp, pilihanPlayer);

  const imgComp = document.querySelector(".img-komputer");
  imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

const pOrang = document.querySelector(".orang");
pOrang.addEventListener("click", function () {
  const pilihanComp = getPilihanComp();
  const pilihanPlayer = pOrang.className;
  const hasil = getHasil(pilihanComp, pilihanPlayer);

  const imgComp = document.querySelector(".img-komputer");
  imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

const pSemut = document.querySelector(".semut");
pSemut.addEventListener("click", function () {
  const pilihanComp = getPilihanComp();
  const pilihanPlayer = pSemut.className;
  const hasil = getHasil(pilihanComp, pilihanPlayer);

  const imgComp = document.querySelector(".img-komputer");
  imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

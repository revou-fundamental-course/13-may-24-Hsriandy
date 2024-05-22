// formula Luas Segitiga //
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const hitungLuas = document.getElementById("hitungLuas");
const outputLuas = document.getElementById("outputLuas");
hitungLuas.addEventListener("click", function () {
  let a = alas.value;
  let t = tinggi.value;
  let L = 0.5 * a * t;
  outputLuas.innerHTML = `L = 1/2 x a x t <br> L = 1/2 x ${a} x ${t} <br> L = ${L}`;
});

// tombol reset luas segitiga //
resetLuas.addEventListener("click", function () {
  outputLuas.innerHTML = ``;
  const alas = document.getElementById("alas");
  const tinggi = document.getElementById("tinggi");
  alas.value = null;
  tinggi.value = null;
});

//Formula Keliling Segitiga//
const sisia = document.getElementById("sisia");
const sisib = document.getElementById("sisib");
const sisic = document.getElementById("sisic");
const hitungKeliling = document.getElementById("hitungKeliling");
const outputKeliling = document.getElementById("outputKeliling");
hitungKeliling.addEventListener("click", function () {
  let S1 = sisia.value;
  let S2 = sisib.value;
  let S3 = sisic.value;
  let K = parseInt(S1) + parseInt(S2) + parseInt(S3);
  outputKeliling.innerHTML = `K = S1 + S2 + S3 <br> K = ${S1} + ${S2} + ${S3} <br> K = ${K}`;
});

// tombol reset keliling segitiga //
resetKeliling.addEventListener("click", function () {
  outputKeliling.innerHTML = ``;
  const sisia = document.getElementById("sisia");
  const sisib = document.getElementById("sisib");
  const sisic = document.getElementById("sisic");
  sisia.value = null;
  sisib.value = null;
  sisic.value = null;
});

let isKelilingVisible = false;
function hideOrshow() {
  if (isKelilingVisible == false) {
    isKelilingVisible = true;
    document.getElementById("luasSection").style.display = "none";
    document.getElementById("kelilingSection").style.display = "block";
  } else {
    isKelilingVisible = false;
    document.getElementById("luasSection").style.display = "block";
    document.getElementById("kelilingSection").style.display = "hide";
  }
}

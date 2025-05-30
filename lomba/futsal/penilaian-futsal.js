// Ambil nama juri dari URL
const urlParams = new URLSearchParams(window.location.search);
const juri = urlParams.get("juri") || "Tanpa Nama";
document.getElementById("juri-info").innerText = `Juri: ${juri}`;

// Fungsi simpan skor
function simpanSkor() {
  const data = {
    juri: juri,
    match1: {
      vii1: parseInt(document.getElementById("skor-vii1-1").value) || 0,
      vii2: parseInt(document.getElementById("skor-vii2-1").value) || 0,
    },
    match2: {
      viii1: parseInt(document.getElementById("skor-viii1-1").value) || 0,
      viii2: parseInt(document.getElementById("skor-viii2-1").value) || 0,
    },
    timestamp: new Date().toISOString()
  };

  // Simpan ke Firebase
  firebase.database().ref("futsal").push(data)
    .then(() => alert("Data berhasil disimpan!"))
    .catch(err => alert("Gagal menyimpan: " + err));
}

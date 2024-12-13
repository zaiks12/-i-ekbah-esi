// Ekran genişliğine göre fotoğraf sayısını düzenle
function fotoSayisiAyarla() {
    const urunler = document.querySelectorAll(".urun");
    const ekranGenisligi = window.innerWidth;

    // Tüm ürünleri önce göster
    urunler.forEach(urun => (urun.style.display = "block"));

    if (ekranGenisligi < 768) {
        // Küçük ekranlarda 3 ürün göster
        urunler.forEach((urun, index) => {
            if (index >= 3) urun.style.display = "none";
        });
    } else if (ekranGenisligi < 1024) {
        // Orta ekranlarda 4 ürün göster
        urunler.forEach((urun, index) => {
            if (index >= 4) urun.style.display = "none";
        });
    }
}

// Hamburger menüyü açma ve kapama fonksiyonu
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('open'); // Toggle the open class to slide the menu in and out
}

// Sayfa yüklenince ve pencere boyutu değişince kontrol et
window.addEventListener("load", fotoSayisiAyarla);
window.addEventListener("resize", fotoSayisiAyarla);

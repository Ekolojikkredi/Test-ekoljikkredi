// Sayfa geçiş fonksiyonu
function showPage(page) {
    const pageContent = document.getElementById('page-content');
    switch(page) {
        case 'ekolojik-kredi':
            pageContent.innerHTML = `
                <h2>Ekolojik Kredi Nedir?</h2>
                <p>Ekolojik kredi, geri dönüşüm ve atık yönetimi gibi çevresel sorumlulukların ödüllendirilmesi amacıyla kullanılan bir sistemdir. 
                Her türlü geri dönüştürülebilir atık, doğru bir şekilde ayrıştırılıp toplanarak ekolojik krediye dönüştürülebilir. 
                Bu sistem, çevre bilincini arttırmak ve sürdürülebilir yaşamı desteklemek için önemli bir araçtır. Ekolojik kredi, toplumları çevre konusunda daha bilinçli hale getirmeyi hedefler.</p>
            `;
            break;
        case 'geri-donusum':
            pageContent.innerHTML = `
                <h2>Geri Dönüşüm Nedir?</h2>
                <p>Geri dönüşüm, atıkların yeniden işlenerek tekrar kullanılabilir hale getirilmesidir. 
                Geri dönüşüm, doğal kaynakların korunmasına yardımcı olur ve çevre kirliliğini azaltır. 
                Kağıt, plastik, cam ve metal gibi malzemeler geri dönüşüm ile tekrar kullanılabilir. 
                Bu süreç, doğanın daha az zarar görmesini ve enerji tasarrufu sağlanmasını sağlar. 
                Geri dönüşüm sayesinde, atıkların doğaya verdiği zararlar minimize edilir ve dünyamız daha temiz bir hale gelir.</p>
            `;
            break;
        case 'hazirlayanlar':
            pageContent.innerHTML = `
                <h2>Hazırlayanlar</h2>
                <p>Danışman Öğretmen: Osman Onuk</p>
                <p>Öğrenciler: Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
            `;
            break;
        case 'bize-ulasin':
            pageContent.innerHTML = `
                <h2>Bize Ulaşın</h2>
                <p>Email: <a href="mailto:ekolojikkreditubitak@gmail.com">ekolojikkreditubitak@gmail.com</a></p>
                <p>Okul Adresi: Torbalı Anadolu Lisesi, İzmir</p>
                <p>YouTube Kanalı: <a href="https://youtube.com/@ekolojikkredi?si=esEweBsfz6l6LGVU" target="_blank">Ekolojik Kredi YouTube Kanalı</a></p>
            `;
            break;
        case 'kayit':
            pageContent.innerHTML = `
                <h2>Kayıt Ol</h2>
                <button onclick="showPage('okul-kaydi')">Okul Kaydı</button><br><br>
                <button onclick="showPage('ogrenci-kaydi')">Öğrenci Kaydı</button>
            `;
            break;
        case 'okul-kaydi':
            pageContent.innerHTML = `
                <h2>Okul Kaydı</h2>
                <form id="okulKaydiForm">
                    <label for="okulAdi">Okul Adı:</label>
                    <input type="text" id="okulAdi" required><br><br>

                    <label for="il">İl:</label>
                    <input type="text" id="il" required><br><br>

                    <label for="ilce">İlçe:</label>
                    <input type="text" id="ilce" required><br><br>

                    <label for="okulSifresi">Okul Şifresi:</label>
                    <input type="password" id="okulSifresi" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case 'ogrenci-kaydi':
            pageContent.innerHTML = `
                <h2>Öğrenci Kaydı</h2>
                <form id="ogrenciKaydiForm">
                    <label for="ad">Ad:</label>
                    <input type="text" id="ad" required><br><br>

                    <label for="soyad">Soyad:</label>
                    <input type="text" id="soyad" required><br><br>

                    <label for="okulNumarasi">Okul Numarası:</label>
                    <input type="text" id="okulNumarasi" required><br><br>

                    <label for="email">E-posta:</label>
                    <input type="email" id="email" required><br><br>

                    <label for="telefon">Telefon Numarası:</label>
                    <input type="tel" id="telefon" required><br><br>

                    <label for="sinif">Sınıf:</label>
                    <input type="text" id="sinif" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case 'veri-giris':
            pageContent.innerHTML = `
                <h2>Veri Girişi</h2>
                <form id="veriGirisForm">
                    <label for="atikhazirlayan">Atığı Kaydeden Kişi:</label>
                    <input type="text" id="atikhazirlayan" required><br><br>

                    <label for="atikturu">Atık Türü:</label>
                    <input type="text" id="atikturu" required><br><br>

                    <label for="atikkilo">Atık Kilogramı:</label>
                    <input type="number" id="atikkilo" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case 'veri-goruntuleme':
            pageContent.innerHTML = `
                <h2>Verilerinizi Görüntüleyin</h2>
                <form id="veriGoruntulemeForm">
                    <label for="mail">E-posta:</label>
                    <input type="email" id="mail" required><br><br>

                    <label for="ogrenciOkulNumarasi">Okul Numarası:</label>
                    <input type="text" id="ogrenciOkulNumarasi" required><br><br>

                    <button type="submit">Veri Görüntüle</button>
                </form>
            `;
            break;
        default:
            pageContent.innerHTML = `<p>Geçersiz sayfa.</p>`;
    }
}

// Okul kaydını ve öğrenci kaydını işle
document.getElementById('okulKaydiForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const okulAdi = document.getElementById('okulAdi').value;
    const il = document.getElementById('il').value;
    const ilce = document.getElementById('ilce').value;
    const okulSifresi = document.getElementById('okulSifresi').value;

    // Bu verileri okul veritabanına kaydedin (sunucu ile bağlantı gerektirir, ancak burada yerel depolama veya diziler kullanılabilir)
    alert('Okul kaydınız başarıyla yapıldı!');

    // Geri ana sayfaya dön
    showPage('kayit');
});

document.getElementById('ogrenciKaydiForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const ad = document.getElementById('ad').value;
    const soyad = document.getElementById('soyad').value;
    const okulNumarasi = document.getElementById('okulNumarasi').value;
    const email = document.getElementById('email').value;
    const telefon = document.getElementById('telefon').value;
    const sinif = document.getElementById('sinif').value;

    // Öğrenci bilgilerini yerel depolama veya bir veri yapısına kaydedin
    alert('Öğrenci kaydınız başarıyla yapıldı!');

    // Geri ana sayfaya dön
    showPage('kayit');
});

document.getElementById('veriGirisForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const atikhazirlayan = document.getElementById('atikhazirlayan').value;
    const atikturu = document.getElementById('atikturu').value;
    const atikkilo = document.getElementById('atikkilo').value;

    // Bu verileri veritabanına kaydedin
    alert('Atık bilgisi başarıyla kaydedildi!');

    // Geri ana sayfaya dön
    showPage('kayit');
});

document.getElementById('veriGoruntulemeForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const mail = document.getElementById('mail').value;
    const okulNumarasi = document.getElementById('ogrenciOkulNumarasi').value;

    // Öğrencinin verilerini al ve göster
    alert('Verileriniz görüntüleniyor...');

    // Bu verileri sisteme kaydedilen verilere göre sorgulamak gerekir, bu kısmı simüle edebiliriz
    // Geri ana sayfaya dön
    showPage('kayit');
});

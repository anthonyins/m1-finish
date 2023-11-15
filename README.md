# Proje Ödevi: E-Ticaret Uygulaması Geliştirme - Kategori Filtreleme, Ürün Arama ve API Entegrasyonu

## Amaç
Bu ödevin amacı, Module 1 süresince öğrendiğiniz bilgileri uygulayıp Module 2: React için gerekli olan javascript bilgilerinizi pekiştirmek.

## Beklenenler

1. HTML Yapısını Anlama ve Elementleri Yakalama
- Verilen HTML yapısını özümseyin veya kendi yapınızı oluşturun.
İlgili DOM elementlerini JavaScript kullanarak yakalayın.
2. API Entegrasyonu ve Ürünleri Gösterme
- Ürünleri çekecek bir fonksiyon oluşturun ve sayfa yüklendiğinde bu fonksiyonu çalıştırın.

https://github.com/anthonyins/m1-finish/assets/132161891/2214f23c-3175-4c2b-871d-8899a0e6b779


- API adresinden gelen ürünleri dinamik bir şekilde ekrana yansıtın.
- Destructuring yöntemini kullanarak ürün bilgilerine erişin ve ilgili elementlere yazdırın.
3. Ürün Açıklama Bilgisini Kırpma
- Ürüne ait açıklama bilgisini kart üzerinde belirli bir noktada kesip, sonrasında "..." ekleyerek sergileyin.
4. Kategori Bilgilerini Toplama
- API adresinden gelen ürün bilgileri içerisindeki her ürüne ait kategori bilgisini, reduce() metodunu kullanarak dinamik ve unique bir şekilde toplayın.
- "all" değerini kategorilere ekleyin.
5. Kategori Butonlarını Oluşturma
- Elde ettiğiniz kategori bilgilerini dinamik bir şekilde ilgili elementin içerisine yazdırın.
6. Seçilen Kategori Bilgisini Gösterme
- Kullanıcının seçtiği kategori bilgisini ekrana yazdırın.
7. Ürün İsmine Göre Arama Yapma
- Kullanıcının ürün ismine göre arama yapabilmesi için input elementine bir event ekleyin.
- Kullanıcının inputda yaptığı her değişiklikte arama işlemini gerçekleştirin.
8. Filtreleme İşlemleri
- Seçilen kategori bilgisine göre ve inputa yazılan değere göre filtreleme-arama işlemini gerçekleştirin.
9. Sepet İşlemleri
- Sepete aktarılacak ürünleri saklamak için bir array oluşturun.
- Ürün kartlarına "Sepete Ekle" butonu ekleyin ve tıklandığında ilgili ürünü sepet arrayine ekleyin.
- Eğer aynı ürün daha önce eklenmişse, miktarını artırın.
- Sepetteki ürünleri dinamik olarak gösterin.
- Sepetteki ürünlerin toplam fiyatını hesaplayarak sepet kısmında gösterin.
10. Sepet Miktarını ve UI Güncelleme
- Sepet içerisindeki ürünlerin miktarını artırma ve eksiltme butonlarına tıklanıldığında, ilgili ürünün miktarını hem UI'da hem de sepet arrayinde güncelleyin.
- Sepetin toplam miktarını güncelleyin.
11. Ürün Detayları
- Ürün kartlarında yer alan "See Details" butonuna tıklandığında, ilgili ürünü detaylı olarak açılan modalda sergileyin.
- Modal içerisinde tıklanan ürünün id bilgisine göre veriyi API'den çekebilir veya elinizdeki bilgilerden kullanabilirsiniz.
12. Bonus: Sepeti Local Storage'da Saklama
- Sepet arrayini local storage'da saklayarak, sayfa yenilendiğinde sepetin içeriğini koruyun.

## API Adresi
- Tüm ürünler için: https://anthonyfs.pythonanywhere.com/api/products/
- Tek bir ürün için: https://anthonyfs.pythonanywhere.com/api/products/{productID}

<video src="a.mp4">
</video>

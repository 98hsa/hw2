alert("SAĞLIKLI GÜNLER İÇİN EVDE KAL!");



function yaziyiDegistir() {
    document.getElementById("demo").innerHTML = "................................................W3C Belge Nesne Modeli (DOM), programların ve komut dosyalarının bir belgenin içeriğine, yapısına ve stiline dinamik " +
                                                            "olarak erişmesine ve güncellemesine olanak tanıyan platform ve dilden bağımsız bir arabirimdir.";
}

function yaziyiDegistir2() {
    document.getElementById("demo2").innerHTML = "................................................5 adet veri tip, 3 adet Object tipi bulunan javaScript dilinde veri tiplerini Number, String, Boolean, Undefined, ve Null " +
        "(bu da bir object’dir). Object tipini ise fonksiyon, dizi, nesne (object)  gibi referanslar oluşturmaktadır.";
}


function yaziyiDegistir3() {
    document.getElementById("demo3").innerHTML = "<center>................................................Foksiyonlar, JavaScript'in en temel yapıtaşlarından biridir. Her bir fonksiyon, bir JavaScript işlemidir—herhangi bir görevi yerine getiren  veya değer hesaplayan bir ifade" +
        " kümesini içerirler. Bir fonksiyonu kullanmak için, fonksiyonu çağıracağınız kısmın faaliyet gösterdiği alanda fonksiyonu tanımlıyor olmanız gerekmektedir.</center>";
}

function changeText(id) {
    id.innerHTML = "O ZAMAN BAŞLAYALIM!";
}

function mOver(obj) {
    obj.innerHTML = "TEBRİKLER BİTTİ..."
}

function mOut(obj) {
    obj.innerHTML = "ŞİMDİ UYGULAMA ZAMANI"
}

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);

function renkDegistir(renk)
{
    document.body.style.background=renk;
}
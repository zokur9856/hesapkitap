document.getElementById("listeYillar").addEventListener("change",hesapla);

function hesapla(){

    let liste=document.getElementById("listeYillar");
    let secilenYilFiyat= liste.options[liste.selectedIndex].value;
    let sonuc =50/secilenYilFiyat;

    document.getElementById("sonuc").innerHTML="seçtiginiz yılda 50 TL ile"+sonuc.toFixed(1)+  "LT benzin alınabilir";

}
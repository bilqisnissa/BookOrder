function hitungHarga(){
    var jumlah1, jumlah2, jumlah3, totalharga, harga1, harga2, harga3

     jumlah1 = parseInt(document.getElementById("numjumlah1").value)
     jumlah2 = parseInt(document.getElementById("numjumlah2").value)
     jumlah3 = parseInt(document.getElementById("numjumlah3").value)

     harga1 = parseInt(document.getElementById("txtharga1").value)
     harga2 = parseInt(document.getElementById("txtharga2").value)
     harga3 = parseInt(document.getElementById("txtharga3").value)

     document.getElementById("txttotalharga").value = (harga1 * jumlah1) + (harga2 * jumlah2) + (harga3 * jumlah3) ;
     

     
     
}
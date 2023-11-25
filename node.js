  var date = new Date(); 

  var day = date.getDay(); 
  var tanggal = date.getDate();
  var bulan = date.getMonth();
  var tahun = date.getFullYear();
  
  function data_tanggal(day, tanggal, bulan, tahun) {
    var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    switch(day) {
      case 1 : {
         document.writeln("Date = " + hari[0] + "." + tanggal+ "-"+ bulan+"-"+tahun);
         break;
      }
      case 2 : {
      document.writeln("Date = " + hari[1] + "." + tanggal+ "-"+ bulan+"-"+tahun);
       break;
      }
      case 3 : {
      document.writeln("Date = " + hari[2] + "." + tanggal+ "-"+ bulan+"-"+tahun);
       break;
      }
      case 4 : {
      document.writeln("Date = " + hari[3] + "." + tanggal+ "-"+ bulan+"-"+tahun);
       break;
      }
      case 5 : {
      document.writeln("Date = " + hari[4] + "." + tanggal+ "-"+ bulan+"-"+tahun);
       break;
      }
      case 6 : {
      document.writeln("Date = " + hari[5] + "." + tanggal+ "-"+ bulan+"-"+tahun);
       break;
      }
      case 7 : {
      document.writeln("Date = " + hari[6] + "." + tanggal+ "-"+ bulan+"-"+tahun);
       break;
      }
    }
 }

data_tanggal(day, tanggal, bulan, tahun);


/*function date () {
  const nama = {
    nama : "Hello",
    na
  }
}*/

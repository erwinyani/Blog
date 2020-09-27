Hitung();
function Hitung() {

    tahun = 2020;
    bulan = 10;
    hari = 17;
    jam = 08;
    menit = 00;
    detik = 00;



    setTimeout(function () {
        tglTarget = new Date(tahun, (bulan - 1), hari, jam, menit, detik, 00);
        tglSkrg = new Date();
        tglSkrg = new Date(tglSkrg.getFullYear(), tglSkrg.getMonth(), tglSkrg.getDate(), tglSkrg.getHours(), tglSkrg.getMinutes(), tglSkrg.getSeconds(), 00, 00);
        var sisaHari = parseInt((tglTarget - tglSkrg) / 86400000);
        var sisaJam = parseInt((tglTarget - tglSkrg) / 3600000);
        var sisaMenit = parseInt((tglTarget - tglSkrg) / 60000);
        var sisaDetik = parseInt((tglTarget - tglSkrg) / 1000);
        detik = sisaMenit * 60;
        detik = sisaDetik - detik;
        menit = sisaJam * 60;
        menit = sisaMenit - menit;
        jam = sisaHari * 24;
        jam = (sisaJam - jam) < 0 ? 0 : sisaJam - jam;
        hari = sisaHari;
        mulaiHitung(hari, jam, menit, detik, tahun);
    }, 1000);
}

function mulaiHitung(hari, jam, menit, detik, tahun) {
    document.getElementById("hitungmundur1").innerHTML = "" + hari + "<span>DAYS</span>";
    document.getElementById("hitungmundur2").innerHTML = "" + jam + "<span>HOURS</span>";
    document.getElementById("hitungmundur3").innerHTML = "" + menit + "<span>MINUTES</span>";
    document.getElementById("hitungmundur4").innerHTML = "" + detik + "<span>SECONDS</span>";
    Hitung();
}

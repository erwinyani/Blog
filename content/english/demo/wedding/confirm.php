
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$namalengkap = $_POST[‘nama’];
$jeniskelamin = $_POST[‘attending’];
$alamat = $_POST[‘person’];
$pendidikan = $_POST[‘pendidikan’];
$tahunlulus = $_POST[‘tahun_lulus’];

if ($_POST[‘jeniskelamin’] == ‘Laki-laki’) {
$jeniskelamin = “Laki-laki”;
} else {
$jeniskelamin = “Perempuan”;
}

$gelombang = $_POST[‘Gelombang’];
if ($_POST[‘Gelombang’] == ‘Gelombang1’) {
$biaya = “Rp. 7.000.000”;
$gelombang = “Gelombang 1”;
} else if ($_POST[‘Gelombang’] == ‘Gelombang2’) {
$biaya = “Rp. 8.000.000”;
$gelombang = “Gelombang 2”;
} else if ($_POST[‘Gelombang’] == ‘Gelombang3’) {
$biaya = “Rp. 9.000.000”;
$gelombang = “Gelombang 3”;
}
?>

<tr>
<td width=”165">Nama Mahasiswa</td>
<td width=”250">:<strong><?php echo “ “. $nama?></strong></td>
</tr>
<br>
<tr>
<td>Jenis Kelamin</td>
<td>:<strong><?php echo “ “. $attending?></strong></td>
</tr>
<br>
<tr>
<td>Alamat Rumah</td>
<td>:<strong><?php echo “ “. $person?></strong></td>
</tr>
<br>
<tr>
<td>Pendidikan Terakhir</td>
<td>:<strong><?php echo “ “.$pendidikan?></strong></td>
</tr>
<br>
<tr>
<td>Tahun Lulus</td>
<td>:<strong><?php echo “ “.$tahunlulus?></strong></td>
</tr>
<br>
<tr>
<td>Gelombang Pendaftaran</td>
<td>:<strong><?php echo “ “.$gelombang?></strong></td>
</tr>
<br>
<tr>
<td>Biaya Pendidikan</td>
<td>:<strong><?php echo “ “.$biaya?></strong></td>
</tr>
    
</body>
</html>

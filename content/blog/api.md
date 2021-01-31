---
title: "Application Programming Interface(API) dan Web API?"
date: 2021-01-30T10:07:21+06:00
# post untuk og:image
images: ["/images/blog/api.png"]
# image harus ditulis 
image: "/images/blog/api.png"
# post type (regular/featured)
type: "featured"
# meta description
description: "Application Programming Interface adalah sekumpulan perintah, fungsi, protokol komunikasi atau kakas/_tools_/alat untuk membangun perangkat lunak."
# post draft
draft: false
author: Erwin Aris Prayogo
---

Berbicara mengenai _API_ dan _Web API / Web Service_ seperti yang sudah kita bahas sebelumnya, _scope_ nya sangat luas. Kita akan melihat perbedaan-perbedaan itu secara terminologi, mengapa? karena kita sering salah memahami arti dari masing-masing mereka.

##### Apa sih pengertian API?

_Application Programming Interface_(API) adalah sekumpulan perintah, fungsi, protokol komunikasi atau kakas/_tools_/alat untuk membangun perangkat lunak.

Sederhananya _API_ itu antarmuka yang digunakan untuk berkomunikasi dari satu atau lebih aplikasi pemrograman dengan aplikasi pemrograman lain.

Istilah “API” sebenarnya tidak ada hubungannya dengan hal-hal yang berkaitan dengan web, karena API tidak harus menggunakan _internet_, istilah tersebut sudah ada sebelum web. Hal Ini semacam dikooptasi yang berarti “pemanggilan web service / web api”

Jenis _API_ menurut penggunaanya sebagai beribut:

**1. _Open API_(sering disebut sebagai _Public API_).**

jenis api ini cukup mudah dalam penggunaannya dan bisa digunakan oleh siapa saja. Contoh [API Data Covid di Indonesia](https://data.kemkes.go.id/covid19/api.html)

**2. _Private API_.**

jenis api yang dimiliki oleh perusahaan atau pemerintahan atau komunitas tertentu untuk digunakan kedalam sistem internal. Sehingga mereka dapat meningkatkan produktivitas kepada tim pengembang.

**3. _Partner API_.**

api ini memiliki izin atau lisensi khusus untuk mengaksesnya, biasanya berbayar.

**4. _Composite API_.**

merupakan _API_ yang menyimpan data dari berbagai _server_ dalam satu tempat. _API_ ini adalah berupa urutan _task_ atau tugas yang berjalan secara sinkron (bersamaan) sebagai hasil dari sebuah eksekusi, di mana hasil pemicunya adalah hasil dari eksekusi (bukan permintaan yang berisi hasil eksekusi atas permintaan task). Penggunaan utamanya adalah untuk mempercepat _execution progress_ (proses eksekusi) dan meningkatkan kinerja pendengar di antarmuka web.


##### Cara kerja API?

Sederhananya cara kerja API mirip seperti pelayan _restaurant_ dimana si _customer_ di berikan pilihan menu makanan untuk di pesan kemudian pelayan mencatat pesanan lalu memberikan kepada koki untuk kemudian di antar kembali ke _customer_.


##### Gambaran umum pengertian antarmuka(interface)?

Antarmuka adalah bagian yang sama dimana dua atau lebih komponen terpisah dari sistem komputer untuk bertukar informasi. Pertukaran dapat terjadi antara perangkat lunak, perangkat keras komputer, perangkat periferal, manusia, dan kombinasi keduanya. Sederhananya antarmuka adalah sebuah cara penghubung antara dua atau lebih perangkat yang terpisah.

Sering kita mendengar istilah dibawah ini:

1. _User Interface_.
2. _Graphical User Interface_.
3. _Audio Interface_.
4. _Motherboard Interface_.
5. _Command Line interface_.
6. _Network Interface Card_.
7. Dan masih banyak lagi istilah - istilah lain.

##### Yang dimaksud web api?

Sedangkan _Web API_ sendiri adalah nama lain dari pengertian _web service_ seperti yang kita telah bahas sebelumnya.

Jenis-jenis arsitektur _Web API_ sebagai berikut:

**1. REST API.**

Dalam Disertasi bapak Roy Thomas Fielding dari _University of California_ yang juga seorang _computer scientist_ berkebangsaan amerika membuat suatu konsep yang disebut **REST**. **RE**presentational **S**tate **T**ransfer adalah suatu gaya arsitektur perangkat lunak untuk pendistribusian sistem hipermedia seperti www(w3).

**2. SOAP(Simple Object Access Protocol)**

suatu bahasa versi bebas dari protocol RPC (Remote Procedure Caoll) yang berguna untuk proses transaksi melalui HTTP standar.

**3. XML-RPC(eXtensible Markup Language - Remote Prosedure Call)**

Ini adalah panggilan prosedur jarak jauh menggunakan protokol HTTP dan XML sebagai _encoding_. XML-RPC dirancang sesederhana mungkin, sekaligus memungkinkan struktur data kompleks untuk dikirim, diproses, dan dikembalikan.

**4. JSON-RPC**

protokol panggilan prosedur jarak jauh yang dikodekan dalam JSON(Javascript Object Notation). Ini mirip dengan protokol XML-RPC, yang hanya mendefinisikan beberapa tipe data dan perintah.

##### Manfaat API dan Web API?

Adapun beberapa manfaatnya sebagai berikut:

**1. Membantu beban kerja sever.**

Saat kamu menggunakan API key, data yang dibutuhkan tersimpan di server penyedia API. Setiap kali ada action, aplikasi milik kamu akan mengakses data ke server asal penyedia API.

**2. Mengembangkan aplikasi lebih cepat, efektif dan fungsional.**

Dengan menggunakan API, akan lebih mudah untuk membuat aplikasi yang fungsional dan efektif. Tanpa perlu menambahkan data secara manual, aplikasi yang dikembangkan akan memiliki fitur dari aplikasi tujuan.

Sebagai contoh, pada aplikasi Gojek. Sebagai sebuah platform layanan transportasi, peran peta sangatlah penting. Namun, Gojek tidak perlu mengembangkan aplikasi peta sendiri. Dengan API, aplikasi tersebut cukup mengambil data dari Google Maps.

Penggunaan API ini cukup membantu membuat platform Gojek semakin besar. Alasannya, developer cukup mengembangkan layanan lain karena penggunaan peta sebagai elemen utama dipastikan berjalan dengan baik.


**3. Integrasi Data.**

Dengan adanya API, kamu tidak perlu melakukan komunikasi langsung dengan aplikasi lain yang ingin dihubungkan. Cukup dengan komunikasi melalui API. Hal ini sangat membantu, terutama jika kamu ingin membangun aplikasi lintas platform dengan berbagai layanan sekaligus. 

Sebagai contoh, kamu membangun website pemesanan tiket online untuk berbagai maskapai di dunia. Dengan bantuan API, kamu cukup melakukan integrasi untuk masing-masing layanan maskapai tersebut. Jadi, tidak perlu lagi melakukan komunikasi manual berupa _update_ harga atau tersedianya tempat duduk.


##### Kesimpulan

Nah, jadi istilah API sebenarnya sudah ada sejak lama dan API tidak sebatas cara berkomunikasi antara aplikasi dengan aplikasi lain yang berbeda bahasa pemrograman, namun API juga digunakan antar sistem operasi dan platform-platform berbeda agar dapat berkomunikasi. Sedangkan _Web API_ adalah istilah yang digunakan untuk menyebut _Web Service_.
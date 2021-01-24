---
title: "Pegertian dan cara kerja web service?"
date: 2021-01-20T10:07:21+06:00
# post untuk og:image
images: ["/images/blog/web-service.png"]
# image harus ditulis 
image: "/images/blog/web-service.png"
# post type (regular/featured)
type: "featured"
# meta description
description: "Web Service (Layanan Web) adalah sebuah teknologi aplikasi yang menjembatani antara dua atau lebih aplikasi web untuk berkomunikasi dan bertukar informasi melalui jaringan internet"
# post draft
draft: false
---

Pernah mendengar istilah web service? pasti kamu sedang mencari - cari apa sih web service?, apa ya fungsinya? dan bagaimana sih cara kerjanya?

**_Web Service_** (Layanan Web) adalah sebuah teknologi aplikasi _Multi-Platform_ yang menjembatani antara dua atau lebih aplikasi web untuk berkomunikasi dan bertukar informasi melalui jaringan internet.

>contoh: aplikasi yang dibuat menggunakan bahasa _Java_ bisa berkomunikasi dengan aplikasi yang dibuat menggunakan _Python_, begitu sebaliknya. Jadi web service tidak terikat dengan platform, arsitektur ataupun bahasa pemrograman.

###### Jadi bagaimana cara kerja web service?

>Contoh sederhananya seperti ini, ada dua orang yang tinggal satu kos; Bambang dan Mark. Bambang hanya bisa berbahasa Indonesia sedangkan Mark hanya bisa berbahasa inggris, nah agar mereka bisa berkomunikasi tentu harus ada orang yang bisa berbahasa keduanya (Indonesia dan inggris). Namun karena mereka sama - sama baru tinggal di kos tersebut, mereka bingung untuk mengerti bahasa masing - masing, sedangkan di kos itu tidak ada orang selain mereka berdua. Kemudian Bambang menghubungi/menelpon teman yang bisa berbahasa Indonesia dan Inggris, sebut saja namanya Wahyu.

Nah proses komunikasi yang dilakukan Bambang dengan Wahyu melalui sambungan telpon untuk membantu menterjemahkan pertanyaan dari Mark disebut **Web Service**, karena _web service_ memerlukan jaringan internet untuk pertukaran data/informasinya.

Pada umumnya, _request_ client ke server dalam format SOAP atau REST yang ditransfer didalam jaringan melalui protokol - protokol standard seperti HTTP / HTTPS.

sedangkan, _response_ dari server ke client direpresentasikan dalam bentuk teks berformat XML atau JSON.

##### Contoh penerapan web service?

Contoh implementasi _web service_ seperti sistem login pada beberapa _website_ yang dapat 
menggunakan akun _facebook twitter_ dan _yahoo_ untuk sinkronsasi.

Penjelasan : 
Ini dapat terjadi karena facebook,twitter, yahoo dan lain - lain memiliki suatu _web service_ 
yang memungkinkan sistem lain dapat menggunakan akun mereka untuk login. Ide dasaranya 
adalah ketika ada dua sistem yaitu A dan B secara masing-masing berdiri secara mandiri. Pada 
sistem example.com disana terdapat database _username_ dan _pasword_. Pada sistem book.com terdapat script form yang nantinya memanggil _username_ dan _password_ dari sistem example.com. Dalam proses login, script pada _login form_ tersebut mengirim parameter _username_ dan _password_ ke sistem example.com untuk dicek validitasnya melalui GET Request. Selanjutnya di dalam sistem example.com terdapat script untuk membaca _username_ dan _password_ yang berasal dari GET request dari sistem B untuk diproses validitasnya. Sebagai responnya, sistem  A  akan  mengenerate sebuah dokumen XML yang di dalamnya  terdapat sebuah  data  misalkan  berbentuk TRUE  atau  FALSE.  Bernilai TRUE  jika _username_ dan _password_ tersebut valid, dan FALSE jika tidak valid. Selanjutnya disistem B respon tersebut dibaca, jika data yang dibaca bernilai TRUE maka proses login berhasil dan jika FALSE 
maka login gagal.

Contoh lainnya:
1. konversi mata uang.
2. Integrasi bank virtual.
3. Aplikasi booking hotel (Traveloka).
4. Aplikasi Gojek, Grab, Uber dll.
5. Dan masih banyak lagi.

##### 3 entitas arsitektur web service?

1. Service Provider(peminta Layanan), merupakan pemilik Web Service yang berfungsi menyediakan kumpulan operasi dari Web Service.

2. Service Requester(Peminta Layanan), merupakan aplikasi yang bertindak sebagai klien dari Web Service yang mencari dan memulai interaksi terhadap layanan yang disediakan.

3. Service Registry(Daftart Layanan), merupakan tempat dimana Service provider mempublikasikan layanannya. Pada arsitektur Web Service, Service registry bersifat optional. Teknologi web service memungkinkan kita dapat menghubungkan berbagai jenis software yang memiliki platform dan sistem operasi yang berbeda.

##### Komponen pembentuk web service menurut W3C?

1. SOAP (Simple Object Access Protocol) 
Protokol ini mendukung proses pengkodean data (biasanya XML) dan transfernya melalui 
HTTP (Hyper Text Transfer Protocol). Dalam konteks Web Service, SOAP  adalah suatu 
bahasa versi bebas dari protocol RPC (Remote Procedure Caoll) yang berguna untuk proses 
transaksi melalui HTTP standar. SOAP membuat klien Web Service dapat memilih beberapa 
parameter mengenai permintaannya dan memberikannya kepada penyedia. Ketika penyedia 
menanggapi permintaan tersebut, maka terjadilah Web Service.

2. WSDL  (Web Services Description Language) 
Merupakan  bahasa  berbasis  XML  yang  menjelaskan  fungsi-fungsi  dalam  Web  Service. 
WSDL  menyediakan  cara  untuk  memanfaatkan  kapabilitas  Web  Service.  WSDL 
memberitahu mesin lain bagaimana memformat / menterjemahkan permintaan yang diterima 
berikut respon mereka agar proses Web Service bisa  berjalan.  Singkatnya WSDL adalah 
bahasa yang memungkinkan berbagai dokumen yang dibuat dalam aplikasi yang  berbeda 
dapat berkomunikasi. 

3. UDDI (Universal Description Discovery and Integration) 
Adalah  semacam  direktori  global  untuk  mengelola  Web  Service.  Fungsinya  mirip 
dengan Yellow Pages untuk versi Web Service. UDDI berisi informasi tentang penawaran 
atau layanan apa  yang ditawarkan perusahaan berikut dengan detil teknis bagaimana  cara 
mengaksesnya. Informasi tersebut ditulis dalam bentuk file-file WSDL.

Yang lebih baru saat ini adalah REST (REpresentational State Transfer. REST adalah gaya arsitektur perngkat lunak untuk membuat web service yang bersifat stateless, jadi setiap kali request harus menyertakan semua data dan parameter dengan lengkap. REST ini bersifat client dan server. Client REST akan meminta sesuatu ke REST server, REST server kemudian akan memberikan response, client REST ini kemudian akan menampilkan hasilnya atau melakukan pemrosesan yang lain.

##### Karakteristik web service?

1. Berbasi XML/JSON.
2. _Loosely Coupled_.
3. _Coarse-Grained_.
4. Mendukung prosedur panggilan jauh / _Support Remote Prosedure Calls_(RPCs).
5. _Platform Neutral_.


##### Kesimpulan

Itulah penjelasan sederhana mengenai _web service_, bila kamu tertarik dan ingin mengetahui lebih dalam silahkan cari referensinya di internet.

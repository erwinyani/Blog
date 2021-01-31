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

Pernah mendengar istilah web service? pasti kamu sedang mencari-cari apa sih web service?, apa ya keuntungan menggunakan web service? dan bagaimana sih cara kerjanya?

**_Web Service_** (Layanan Web) adalah sebuah teknologi aplikasi _Multi-Platform_ yang menjembatani antara dua atau lebih aplikasi web untuk berkomunikasi dan bertukar informasi melalui jaringan internet.

>contoh: aplikasi yang dibuat menggunakan bahasa _Java_ bisa berkomunikasi dengan aplikasi yang dibuat menggunakan _Python_, begitu sebaliknya. Jadi web service tidak terikat dengan platform, arsitektur ataupun bahasa pemrograman.

###### Jadi bagaimana cara kerja web service?

>Contoh sederhananya seperti ini, ada dua orang yang tinggal satu kos; Bambang dan Mark. Bambang hanya bisa berbahasa Indonesia sedangkan Mark hanya bisa berbahasa inggris, nah agar mereka bisa berkomunikasi tentu harus ada orang yang bisa berbahasa keduanya (Indonesia dan inggris). Namun karena mereka sama-sama baru tinggal di kos tersebut, mereka bingung untuk mengerti bahasa masing-masing, sedangkan di kos itu tidak ada orang selain mereka berdua. Kemudian Bambang menghubungi/menelpon teman yang bisa berbahasa Indonesia dan Inggris, sebut saja namanya Wahyu.

Nah proses komunikasi yang dilakukan Bambang dengan Wahyu melalui sambungan telpon untuk membantu menterjemahkan pertanyaan dari Mark disebut **Web Service**, karena _web service_ memerlukan jaringan internet untuk pertukaran data/informasinya.

Pada umumnya, _request_ client ke server dalam format SOAP atau REST yang ditransfer didalam jaringan melalui protokol-protokol standard seperti HTTP / HTTPS.

sedangkan, _response_ dari server ke client direpresentasikan dalam bentuk teks berformat XML atau JSON.

##### Contoh penerapan web service?

Contoh implementasi _web service_ seperti sistem login pada beberapa _website_ yang dapat 
menggunakan akun _facebook twitter_ dan _yahoo_ untuk sinkronsasi.

Penjelasan : 
Ini dapat terjadi karena facebook,twitter, yahoo dan lain-lain memiliki suatu _web service_ 
yang memungkinkan sistem lain dapat menggunakan akun mereka untuk login. Ide dasaranya 
adalah ketika ada dua sistem yaitu A dan B secara masing-masing berdiri secara mandiri. Pada 
sistem example.com disana terdapat database _username_ dan _pasword_. Pada sistem book.com terdapat script form yang nantinya memanggil _username_ dan _password_ dari sistem example.com. Dalam proses login, script pada _login form_ tersebut mengirim parameter _username_ dan _password_ ke sistem example.com untuk dicek validitasnya melalui GET Request. Selanjutnya di dalam sistem example.com terdapat script untuk membaca _username_ dan _password_ yang berasal dari GET request dari sistem B untuk diproses validitasnya. Sebagai responnya, sistem  A  akan  men-_generate_ sebuah dokumen XML yang di dalamnya  terdapat sebuah  data  misalkan  berbentuk TRUE  atau  FALSE.  Bernilai TRUE  jika _username_ dan _password_ tersebut valid, dan FALSE jika tidak valid. Selanjutnya disistem B respon tersebut dibaca, jika data yang dibaca bernilai TRUE maka proses login berhasil dan jika FALSE 
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

Yang lebih baru saat ini adalah REST (REpresentational State Transfer). REST adalah gaya arsitektur perngkat lunak untuk membuat web service yang bersifat stateless, jadi setiap kali request harus menyertakan semua data dan parameter dengan lengkap. REST ini bersifat client dan server. Client REST akan meminta sesuatu ke REST server, REST server kemudian akan memberikan response, client REST ini kemudian akan menampilkan hasilnya atau melakukan pemrosesan yang lain.

##### Karakteristik web service?

1. Berbasis XML/JSON.
2. _Loosely Coupled_.
3. _Coarse-Grained_.
4. Mendukung prosedur panggilan jauh / _Support Remote Prosedure Calls_(RPCs).
5. _Platform Neutral_.

##### Keuntungan web service?

Web service sebagai salah satu alternatif dalam pengembangan aplikasi  _N-tier_, ini adalah teknologi yang memisahkan antara server database, aplikasi dan client. Beberapa keuntungan lain yang didapat dari penerapan web service yaitu:

1. Dengan format XML yang telah menjadi salah satu standar pertukaran data, penggunaan web service akan banyak memudahkan untuk pertukaran data dalam berbagai sistem dengan berbeda platform. Apabila kita membuat web service dengan teknologi Python, maka fungsi-fungsi yang ada dalam web service tersebut dapat kita baca dengan menggunakan sistem lain yang berbeda sama sekali dari Python, misalkan menggunakan Dart, Javascript ataupun PHP.

2. Web service di support oleh pemain utama dalam dunia TI seperti Microsoft (NET), SUN (Open Net Environment  – ONE), IBM (Web Service Conceptual Architecture  – WSCA), W3C (Web Service Workshop), Oracle (Web Service Broker), Hewlett-Packard (Web Service Platform).

3. Dalam penerapan  N-tier, untuk layer bisnis atau  _apllication logic_  dapat diterapkan dengan web service, sehingga di sisi client kita tidak direpotkan dengan instalasi layer bisnis seperti  halnya  dll, corba, atau jenis  yang lain. Dengan web service,  method atau function yang telah kita buat dapat dipergunakan berulang kali bahkan untuk keperluan aplikasi yang  berbeda (reusable function). Penerapan lebih jauh dari web service adalah  Service Oriented Architecture (SOA) dengan web service sebagai dasarnya.

4. Web service dibangun berdasarkan  text base document dengan format XML, sehingga untuk komunikasi data relatif lebih ringan dibandingkan dengan aplikasi yang mengakses langsung database melalui suatu jaringan. Apabila kita menerapkan web service untuk aplikasi yang menggunakan  desktop application  based, kita tidak perlu melakukan instalasi konektor database seperti misalnya menggunakan ODBC, OLEDB, ataupun jenis  data provider lain. Dengan jumlah client yang cukup banyak, tentunya akan sangat merepotkan apabila kita harus melakukan instalasi satu persatu untuk konektor database. Dengan menggunakan web service kita cukup menambahkan  web service reference  di client, sedangkan untuk koneksi databasenya hanya perlu dilakukan di server web servicenya.

5. Komunikasi data melalui web service dilakukan melalui  http  atau  _Internet protocol_  terbuka lainnya. Hal ini sangat memudahkan karena  protocol tersebut adalah protocol yang umum dipakai.


##### Kesimpulan

Menurut W3C (World Wide Web Consortium) _Web Service_ adalah sistem perangkat lunak yang didesain untuk mendukung _interoperabilitas_ interkasi mesin ke mesin melalui jaringan internet. _Interoperabilitas_ merupakan suatu kemampuan dua atau lebih sistem untuk dapat melakukan pertukaran informasi. Mengembangkan perangkat lunak sistem informasi yang dapat mendukung interoperabilitas merupakan salah satu hal yang tidak mudah dilakukan. Interoperabilitas sistem melibatkan berbagai komponen yang heterogen. Arsitektur sistem yang dibangun dari komponen _heterogen_, seperti : platform, sistem operasi, bahasa pemgroman yang berbeda  dan basis data, harus dapat diintegrasikan guna menyediakan layanan yang optimal.

Itulah penjelasan sederhana mengenai _web service_, bila kamu tertarik dan ingin mengetahui lebih dalam silahkan cari referensinya di internet.


sumber: 
1. https://www.researchgate.net/publication/339688153_SEJARAH_WEB_SERVICE_BESERTA_ARSITEKTUR_DAN_PENGGUNAANNYA

2. https://bambangsuhartono.wordpress.com/2014/12/28/web-service-dan-manfaatnya-pada-perusahaan/

3. https://www.w3.org/TR/ws-arch/
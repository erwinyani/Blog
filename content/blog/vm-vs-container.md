---
title: "Virtual Machine vs Container?"
date: 2021-02-01T10:07:21+06:00
# post untuk og:image
images: ["/images/blog/docker.png"]
# image harus ditulis 
image: "/images/blog/docker.png"
# post type (regular/featured)
type: "featured"
# meta description
description: "Dalam ilmu komputer, virtualisasi berarti membuat dan menjalankan versi maya didalam sumber daya fisik. Hingga saat ini sumber daya yang dapat divirtualisasikan antara lain adalah perangkat keras komputer, media penyimpanan data, sistem operasi, jaringan, dan lain sebagainya."
# post draft
draft: false
author: Erwin Aris Prayogo
---

Teknologi virtualisasi atau _virtualization_ yang semakin berkembang pesat sejak tahun 1960-an, dan telah diaplikasikan ke beberapa aspek komputer dari keseluruhan sistem komputer sampai sebuah kemampuan atau komponen individu.

Asal kata _virtual_ yang berarti "sebenarnya, sebetulnya, yang sesungguhnya" sendiri berasal dari bahasa latin yaitu "_virtus, virtue_". Menurut sosiolog kanada **_Roberts MacArthur Shields_** dalam bukunya _The Virtual_ menyebutkan bahwa **_virtual_** adalah sesuatu yang _real_ (nyata) namun tidak _concrete / konkret_ (benar-benar ada, berwujud, dapat dilihat atau diraba). Ia hanya sebuah kualitas dan bukan sesuatu yang aktual. Bahkan ada juga yang menyebut _"real but not actual, ideal but not abstract"_.

Dalam ilmu komputer, _virtualisasi_ berarti membuat dan menjalankan versi maya didalam sumber daya fisik. Hingga saat ini sumber daya yang dapat _divirtualisasikan_ antara lain adalah perangkat keras komputer, media penyimpanan data, sistem operasi, jaringan, dan lain sebagainya. Sedangkan menurut _**Alan Murphy**_ dalam papernya _Virtualization Defined – Eight Different Ways_ setidaknya ada 8 istilah dalam penerapan virtualisasi:

1. _Operating System Virtualization_.
2. _Application Server Virtualization_.
3. _Application Virtualization_.
4. _Management Virtualization_.
5. _Network Virtualization_.
6. _Hardware Virtualization_.
7. _Storage Virtualization_.
8. _Service Virtualization_.

**Kelebihan teknologi virtualisasi:**

- Meminimalisir biaya investasi _hardware_. Tidak perlu menambah komputer, _server_ dan _pheriferal_ secara fisik, penambahan kapasitas memori dan _upgrade_ spesifikasi _cpu(central processing unit) / processor_ itupun jika diperlukan.
- Mudah untuk di _backup & recovery_. Mesin virtual dapat disimpan dalam 1 buah image yang berisi seluruh konfigurasi sistem, jika terjadi masalah atau _crash_ kita cukup _restore_ data dari hasil _backup-an_ terakhir.
- Standarisasi _hardware_. Virtualisasi melakukan emulasi dan enkapsulasi hardware sehingga proses pengenalan dan pemindahan suatu spesifikasi hardware tertentu tidak menjadi masalah
- Kemudahan _maintenance_ & pengelolaan. Jumlah server yang lebih sedikit otomatis akan mengurangi waktu dan biaya untuk mengelola.

**Kekurangan teknologi virtualisasi:**


- Satu pusat masalah. Virtualisasi bisa dianalogikan dengan menempatkan semua telur didalam 1 keranjang. Ini artinya jika server induk bermasalah, semua sistem virtual machine didalamnya tidak bisa digunakan. Hal ini bisa diantisipasi dengan menyediakan fasilitas backup secara otomatis dan periodik atau dengan menerapkan prinsip fail over/clustering.

- Spesifikasi _hardware_. Virtualisasi membutuhkan spesifikasi server yang lebih tinggi untuk menjalankan server induk dan mesin virtual didalamnya.

- Satu pusat serangan. Penempatan semua server dalam satu komputer akan menjadikannya sebagai target serangan. Jika hacker mampu menerobos masuk kedalam sistem induk, ada kemungkinan ia mampu menyusup kedalam server- server virtual dengan cara menggunakan informasi yang ada pada server induk.


#### Apa itu virtual machine?

_virtual machine_ atau mesin virtual adalah implementasi perangkat lunak dari sebuah mesin komputer yang dapat menjalankan program sama seperti layaknya sebuah komputer asli. Mesin virtual pada mulanya didefinisikan oleh **_Gerard J. Popek_** dan **_Robert P. Goldberg_** pada tahun 1974 sebagai sebuah duplikat yang efisien dan terisolasi dari suatu mesin asli. Pada masa sekarang ini, mesin-mesin virtual dapat men-simulasikan perangkat keras walaupun tidak ada perangkat keras aslinya sama sekali.

Dalam teknologi mesin virtual juga berkembang teknologi _Hypervisor_, **_Hypervisor_** adalah sebuah teknik virtualisasi yang memungkinkan beberapa sistem operasi untuk berjalan bersamaan pada sebuah _host_. Dikatakan teknik virtualisasi karena OS yang ada bukanlah sebuah OS yang sesungguhnya, hanya sebuah mesin virtual saja. Tugas dari _hypervisor_ adalah untuk mengatur setiap sistem operasi tersebut sesuai dengan gilirannya agar tidak mengganggu satu dengan yang lainnya. Terkadang, _hypervisor_ juga disebut sebagai _Virtual Machine Management (VMM) / Virtual Machine Monitor_, sesuai dengan tugasnya dalam mengatur beberapa mesin virtual.

Jenis-jenis _Hypervisor_ sebagai berikut:

**1. Hypervisor Type 1 (Native / Baremetal Architecture)** 

_Hypervisor_ tipe ini berjalan langsung diatas perangkat keras _server_, artinya tidak di perlukan sistem operasi lain untuk menjalankan _hypervisor_ tipe 1 ini . dengan begitu _hypervisor_ memiliki akses langsung ke hardware tanpa harus melewati OS. Contoh _hypervisor_ tipe 1 adalah _VMware ESXi_. Kalau dilihat dari teknik virtualisasi yang digunakan, jenis satu ini adalah jenis _hardware assisted_.

**2. Hypervisor Type 2 (Hosted Architecture)**

_Hypervisor_ tipe ini  berperan sebagai perangkat lunak untuk menjalankan dan mengatur mesin virtual. Akses _resource hardware_ yang dibutuhkan oleh meisn virtual harus melewati OS.Contoh _hypervisor_ tipe 2 adalah _VMware Server_. Berbeda dengan tipe 1, tipe 2 ini lebih cenderung ke OS _assisted hypervisor_ (_para virtualization_) dan juga _full virtualization_.

Macam-macam mesin virtual yang bisa digunakan di komputer pribadi:

1. _VirtualBox_.
2. _Windows Virtual PC_.
3. _QEMU_.
4. _V2 Cloud_.
5. _VMWare_.
6. _Hyper-V_.

mesin virtual untuk _server_:
1. _KVM (Kernel-Based Virtual Machine)_. Salah satu teknologi virtualisasi (_hypervisor_) yang dikembangkan oleh Linux.

2. _OpenVZ_. Virtualisasi pada tingkat OS (_Operating System_) yang berbasis pada kernel Linux yang telah dimodifikasi yang memungkinkan sebuah server fisik untuk menjalankan beberapa _instances_ yang disebut _containers_.

3. _XenServer(XEN)_. _Server virtualization_ platform dari _citrix_, untuk mengoptimalkan _Windows_ dan _linux virtual server_.

4. _OpenStack_. Perangkat lunak bebas dan sumber terbuka untuk _cloud computing_, sebagian besar digunakan sebagai _Infrastructure as a Service_ (IaaS), di mana server virtual dan sumber daya lain tersedia untuk pelanggan.

#### Apa pengertian container?

_Container_ disini berbeda dengan peti kemas ya, namun memiliki makna yang hampir serupa yaitu sebagai "wadah atau pengemas". **_container_** adalah unit standar perangkat lunak yang mengemas kode dan semua dependensinya sehingga aplikasi berjalan dengan cepat dan andal dari satu lingkungan komputasi ke lingkungan komputasi lainnya.

Sederhananya, _container_ adalah sebuah perangkat lunak terisolasi yang mengemas dan menjalankan paket aplikasi mencakup (_binaries_, _configuration file_, _dependencies_, _libraries_) secara langsung didalam sistem operasi.

**Kelebihan menggunakan container:**

- **Portabilitas:** Sebuah kontainer membuat paket perangkat lunak yang dapat dieksekusi yang dipisahkan dari (tidak terikat atau bergantung pada) sistem operasi host.

- **Kecepatan:** Kontainer sering kali disebut sebagai "_lightweight_", artinya kontainer berbagi kernel sistem operasi (OS) mesin dan tidak macet dengan _overhead_ tambahan ini.

- **Efisiensi:** Perangkat lunak yang berjalan didalam lingkungan kontainer membagikan kernel OS mesin, dan lapisan aplikasi di dalam container dapat dibagikan di seluruh kontainer.

- **Kemudahan pengelolaan:** Platform orkestrasi kontainer mengotomatiskan peng-instalan, pen-skalaan, dan pengelolaan beban kerja dan layanan dalam kontainer.

**Kekurangan menggunakan container:**

- **Fleksibilitas dalam sistem operasi:** Jika Anda ingin menjalankan kontainer dengan sistem operasi yang berbeda, Anda harus memulai server baru.



**Ada 2 jenis kontainer yang dapat diklasifikasikan menurut penggunaannya sebagai berikut:**

1. Kontainer berbasis sistem operasi (_OS Container_), yakni kontainer yang memberikan isolasi pada level sistem operasi dan memanfaatkan kernel yang sama dari suatu induk, contohnya adalah _LXC_, _OpenVZ_, _Linux VServer_, _BSD Jails (chroot jail)_ and _Solaris zones_.

2. Kontainer berbasis aplikasi (_Application Container_), yakni kontainer yang memberikan isolasi pada level aplikasi dengan memanfaatkan beberapa komponen yang ada pada sistem operasi induk, ditambah beberapa komponen pada kontainer-kontainer lain yang menjadi basis dari berjalannya sebuah aplikasi, contohnya adalah _Docker_ dan _Rocket (rkt)_.

#### jadi apa sih docker?

**Docker** adalah sebuah aplikasi sumber terbuka (_open source_) yang digunakan untuk menyatukan beberapa file dalam sebuah program perangkat lunak. File-file pendukung yang ada disebut juga _image_ dan dikumpulkan atau dikemas menjadi satu dalam sebuah wadah yang dinamakan _container_. Container ini menjadi sebuah alat untuk penyimpanan file dan docker merupakan platform yang dibangun dengan teknologi _container_ sebagai dasarnya.

Pada acara PyCon US tahun 2013 docker diperkenalkan dan pada tahun 2014 bulan juni docker dirilis. Docker dikembangkan oleh **Solomon Hykes** bersama rekannya **Andrea Luzzardi** dan **Francois-Xavier Bourlet**. Pada saat itu Docker merupakan proyek internal _dotCloud_. Alhasil, saat ini docker sudah menjadi platform populer di lingkungan para _developer_ di berbagai belahan dunia meskipun belum terlalu populer di Indonesia.

**Fitur-fitur docker sebagai berikut:**

- **Docker Engine**, digunakan untuk membangun _docker images_ dan membuat kontainer docker.
- **Docker Hub**, _registry_ yang digunakan untuk berbagai macam _docker images_.
- **Docker Compose**, digunakan untuk mendefinisikan aplikasi menggunakan banyak kontainer docker.
- **Docker untuk Mac**, memungkinkan menjalankan kontainer docker pada Mac.
- **Docker untuk Linux**, memungkinkan menjalankan kontainer docker pada Linux.
- **Docker untuk Windows**, memungkinkan menjalankan kontainer docker pada Windows.

Apakah dengan menjalankan docker saja sudah cukup? belum tentu, bagaimana dengan perusahaan _startup_ yang sudah besar tentu mereka mempunyai banyak _service_ bukan?

Untuk menjalankan _container_, tentunya membutuhkan sebuah aplikasi. Aplikasi yang paling umum digunakan adalah docker. Docker di instal di _server_, kemudian kita jalankan _docker image_ dan terbentuklah kontainer dan aplikasi kita sudah berjalan dan bisa digunakan.

Tetapi untuk kebutuhan **_production_?**, tidak cukup hanya sekedar aplikasi bisa berjalan, pasti membutuhkan sistem yang handal, yang mampu membuat aplikasi kita selalu _available_, tidak ada _downtime_, memiliki _security_ yang handal, bisa menerima banyak _traffic_, dan sebagainya. Maka diperlukan lah sebuah sistem yang bisa mengatur dan mengelola / mengelompokan aplikasi kontainer, sistem ini disebut _cluster management_. _cluster management and deployment_ yang paling umum digunakan adalah **Kubernetes**.

**Apa sih Kubernetes?**

**Kubernetes** adalah _platform_ sumber termuka yang digunakan untuk manajemen kontainer. _Kubernetes_ adalah singkatatan dari **K8s** dimana huruf "_K_" merupakan huruf depan, angka "_8_" merupakan jumlah huruf dari “_ubernete_” dan "_s_" adalah huruf terakhir. Sehingga _Kubernetes_ = _K8s_.

_Kubernetes_ merupakan sistem orkestrasi sumber terbuka untuk mengotomatiskan pengelolaan, penempatan, pen-skalaan, dan perutean kontainer yang telah menjadi populer di kalangan pengembang dan tim operasi TI (Teknologi Informasi) dalam beberapa tahun terakhir.

#### Kesimpulan

Kecanggihan teknologi _virtual machine_ dan _container_ merupakan bagian dari virtualisasi modern yang berkembang saat ini. Jika kamu berfikir aplikasi-aplikasi yang kamu pakai hanya sekedar untuk _browsing_, mengirim pesan, menambah teman, menambah _follower_, jualan, atau mencari ojol saja padahal ada sistem dan _service_ rumit yang berjalan dibelakang layar. 


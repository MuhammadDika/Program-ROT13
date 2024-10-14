function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(char) {
        return String.fromCharCode((char <= 'Z' ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26);
    });

    //Penjelesan tentang algoritma ROT13
    //source : searching google dan youtube

    // return str.replace(/[a-zA-Z]/g, function(char)
    //Ini mencari semua huruf dalam string.
    //Untuk setiap huruf yang ditemukan, fungsi di dalam kurung kurawal dijalankan.


    //char = char.charCodeAt(0)
    //Ini mengubah huruf menjadi kode angka.
    //Misalnya, 'A' menjadi 65, 'B' menjadi 66, dan seterusnya. dan + 13) Ini menambahkan 13 ke kode angka tersebut.

    //char <= 'Z' ? 90 : 122
    //90 untuk Z besar dan 122 untuk z kecil

    //>= (char = char.charCodeAt(0) + 13) ? char : char - 26
    //Jika hasil penambahan 13 masih dalam rentang alfabet, gunakan hasil tersebut.
    //Jika tidak, kurangi 26 untuk "memutar kembali" ke awal alfabet.

    //String.fromCharCode()
    //Ini mengubah kode angka kembali menjadi huruf.

    //Contoh sederhana
    //Jika input 'A' (kode 65), 65 + 13 = 78, yang adalah 'N'.
    //Jika input 'Z' (kode 90), 90 + 13 = 103, yang melebihi 'Z', jadi 103 - 26 = 77, yang adalah 'M'.

    //Intinya, fungsi ini menggeser setiap huruf 13 posisi ke depan dalam alfabet, dan jika mencapai akhir alfabet, ia kembali ke awal. Ini berlaku untuk huruf besar dan kecil, sementara karakter non-alfabet tidak berubah.
}

function encrypt() {
    const input = document.getElementById('encryptInput').value;
    const result = rot13(input);
    document.getElementById('encryptResult').innerText = result;
}

function decrypt() {
    const input = document.getElementById('decryptInput').value;
    const result = rot13(input);
    document.getElementById('decryptResult').innerText = result;
}
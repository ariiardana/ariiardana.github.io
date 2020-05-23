 function tampilJam() {
            var a_p = "";
            var hari = new Date();
            var jam_skr = hari.getHours();
            var menit_skr = hari.getMinutes();
            var detik_skr = hari.getSeconds();
            if (jam_skr < 12) {
                a_p = "AM";
            } else {
                a_p = "PM";
            }
            if (jam_skr == 0) {
                jam_skr = 12;
            }
            if (jam_skr > 12) {
                jam_skr = jam_skr - 12;
            }
            jam_skr = cekJam(jam_skr);
            menit_skr = cekJam(menit_skr);
            detik_skr = cekJam(detik_skr);
         document.getElementById('jam').innerHTML=jam_skr + ":" + menit_skr + ":" + detik_skr + " " + a_p;
            }
 
        function cekJam(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        setInterval(tampilJam, 100);
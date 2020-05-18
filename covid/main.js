let jumlah_terjangkit = document.getElementById("jumlah-terjangkit");
let jumlah_sembuh = document.getElementById("jumlah-sembuh");
let jumlah_meninggal = document.getElementById("jumlah-meninggal");

let jt_indo = document.getElementById("jt-indo");
let js_indo = document.getElementById("js-indo");
let jm_indo = document.getElementById("jm-indo");

fetch("https://covid19.mathdro.id/api")
  .then(function(response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function(data) {
    jumlah_terjangkit.innerHTML = data.confirmed.value;
    jumlah_sembuh.innerHTML = data.recovered.value;
    jumlah_meninggal.innerHTML = data.deaths.value;
    //console.log(data);
  })
  .catch(function(err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

fetch("https://covid19.mathdro.id/api/countries/ID")
  .then(function(response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function(data) {
    jt_indo.innerHTML = data.confirmed.value;
    js_indo.innerHTML = data.recovered.value;
    jm_indo.innerHTML = data.deaths.value;
  })
  .catch(function(err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

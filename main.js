// let cities = [
//     {
//         cityName:"Riyadh",
//         isocode: "Ar Riyāḑ"
//     },
//     {
//         cityName:"Al-Jouf",
//         isocode: "Al Jawf"
//     },
//     {
//         cityName:"Makkah",
//         isocode: "Makkah al Mukarramah"
//     },
//     {
//         cityName:"Al-Dmam",
//         isocode: "Ash Sharqīyah"
//     },
//     {
//         cityName:"Al-Qaseem",
//         isocode: "Al Qaşīm"
//     },
//     {
//         cityName:"Tabuk",
//         isocode: "Tabūk"
//     },
//     {
//         cityName:"Jazan",
//         isocode: "Jāzān"
//     },
//     {
//         cityName:"Hail",
//         isocode: "Ḩā'il"
//     }
// ];


// for (let city of cities){
//     document.getElementById("cities").innerHTML += `<option value="${city.cityName}">${city.cityName}</option>`
// };


// document.getElementById("cities").onchange = function(){
//     document.getElementById("city").innerHTML = this.value;
//     let cityName = "";
//     for(let city of cities){
//         if(city.cityName == this.value){
//             cityName = city.isocode;
//         }
//     }
//     getPrayerTimingsOfCity(cityName);
// };


// function getPrayerTimingsOfCity(cityName){
//     let params = {
//         country: "SA",
//         city: cityName 
//     };
    
//     axios.get('http://api.aladhan.com/v1/timingsByCity', {
//         params: params
//       })
//       .then(function (response) {
//         const timings = response.data.data.timings;
//         fillTimeForPrayer("fajr-time", timings.Fajr);
//         fillTimeForPrayer("duha-time", timings.Sunrise);
//         fillTimeForPrayer("duhr-time", timings.Dhuhr);
//         fillTimeForPrayer("asr-time", timings.Asr);
//         fillTimeForPrayer("magrip-time", timings.Maghrib);
//         fillTimeForPrayer("isha-time", timings.Isha);
//         const readableDate = response.data.data.date.readable;
//         const weekDay = response.data.data.date.gregorian.weekday.en;
//         const date = weekDay + "/" + readableDate ;
//         document.getElementById("date").innerHTML = date;
//         // document.getElementById("fajr-time").innerHTML = timings.Fajr;
//         console.log(readableDate + " " + weekDay);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// }

// getPrayerTimingsOfCity("Ar Riyāḑ")

// function fillTimeForPrayer(id, time){
//     document.getElementById(id).innerHTML = time;
// };


let cities = [
    {
        cityName: "Riyadh",
        isocode: "Ar Riyāḑ"
    },
    {
        cityName: "Al-Jouf",
        isocode: "Al Jawf"
    },
    {
        cityName: "Makkah",
        isocode: "Makkah al Mukarramah"
    },
    {
        cityName: "Al-Dmam",
        isocode: "Ash Sharqīyah"
    },
    {
        cityName: "Al-Qaseem",
        isocode: "Al Qaşīm"
    },
    {
        cityName: "Tabuk",
        isocode: "Tabūk"
    },
    {
        cityName: "Jazan",
        isocode: "Jāzān"
    },
    {
        cityName: "Hail",
        isocode: "Ḩā'il"
    }
];

// Populate the select dropdown with city names
for (let city of cities) {
    document.getElementById("cities").innerHTML += `<option value="${city.cityName}">${city.cityName}</option>`;
}

// Event listener for city selection change
document.getElementById("cities").onchange = function () {
    document.getElementById("city").innerHTML = this.value;
    let cityName = "";
    for (let city of cities) {
        if (city.cityName == this.value) {
            cityName = city.isocode;
        }
    }
    getPrayerTimingsOfCity(cityName);
};

// Function to fetch prayer timings for a given city
function getPrayerTimingsOfCity(cityName) {
    let params = {
        country: "SA",
        city: cityName
    };

    // Make API request using Axios with HTTPS endpoint
    axios.get('https://api.aladhan.com/v1/timingsByCity', {
        params: params
    })
    .then(function (response) {
        const timings = response.data.data.timings;
        fillTimeForPrayer("fajr-time", timings.Fajr);
        fillTimeForPrayer("duha-time", timings.Sunrise);
        fillTimeForPrayer("duhr-time", timings.Dhuhr);
        fillTimeForPrayer("asr-time", timings.Asr);
        fillTimeForPrayer("magrip-time", timings.Maghrib);
        fillTimeForPrayer("isha-time", timings.Isha);
        const readableDate = response.data.data.date.readable;
        const weekDay = response.data.data.date.gregorian.weekday.en;
        const date = weekDay + "/" + readableDate;
        document.getElementById("date").innerHTML = date;
    })
    .catch(function (error) {
        console.log(error);
    });
}

// Initial call to get prayer timings for Riyadh
getPrayerTimingsOfCity("Ar Riyāḑ");

// Function to fill prayer time for a given ID
function fillTimeForPrayer(id, time) {
    document.getElementById(id).innerHTML = time;
}

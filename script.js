// List of districts in Tamil Nadu
const districts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", 
    "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", 
    "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", 
    "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", 
    "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", 
    "Thanjavur", "Theni", "Thiruvallur", "Thiruvarur", "Thoothukudi", 
    "Tiruchirappalli", "Tirunelveli", "Tirupattur", "Tiruppur", "Tiruvannamalai", 
    "Vellore", "Viluppuram", "Virudhunagar"
];

// Generate mock travel data for all combinations
const mockData = {};

districts.forEach((fromDistrict) => {
    districts.forEach((toDistrict) => {
        if (fromDistrict !== toDistrict) {
            const key = `${fromDistrict}-${toDistrict}`;
            mockData[key] = [
                { mode: "Bus", company: "ABC Travels", fare: `₹${Math.floor(Math.random() * 500) + 200}`, duration: `${Math.floor(Math.random() * 6) + 2} hours` },
                { mode: "Train", company: "Indian Railways", fare: `₹${Math.floor(Math.random() * 300) + 100}`, duration: `${Math.floor(Math.random() * 5) + 2} hours` },
                { mode: "Flight", company: "IndiGo", fare: `₹${Math.floor(Math.random() * 2000) + 1000}`, duration: `${Math.floor(Math.random() * 2) + 1} hours` },
            ];
        }
    });
});

document.getElementById("searchBtn").addEventListener("click", function() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const resultContainer = document.getElementById("result");

    const key = `${from}-${to}`;
    if (mockData[key]) {
        let resultHtml = `<h2>Travel options from ${from} to ${to}:</h2><ul>`;
        mockData[key].forEach(option => {
            resultHtml += `<li>${option.mode} by ${option.company} - Fare: ${option.fare}, Duration: ${option.duration}</li>`;
        });
        resultHtml += `</ul>`;
        resultContainer.innerHTML = resultHtml;
    } else {
        resultContainer.innerHTML = `<h2>No travel options available for ${from} to ${to}.</h2>`;
    }
});

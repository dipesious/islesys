module.exports = {
    production: true,

    YOUR_DOMAIN: 'http://localhost:5001/islesys-79de1/us-central1/server_global',
    YOUR_CLIENT: 'http://localhost:4200',

    YOUR_DOMAIN_PROD: 'http://islesys.com',
    YOUR_CLIENT_PROD: 'http://islesys.com',

    firebaseConfig: {
        projectId: "islesys-79de1",
        appId: "1:433334040386:web:11d1885dae11772fe2badb",
        storageBucket: "islesys-79de1.appspot.com",
        locationId: 'asia-south1',
        apiKey: "AIzaSyCeQfd65tqgndPWGkanE5gvjC9W90qKBco",
        authDomain: "islesys-79de1.firebaseapp.com",
        messagingSenderId: "433334040386",
        measurementId: "G-698TG3HDX8",
        // databaseURL: "https://refr-india-default-rtdb.asia-southeast1.firebasedatabase.app",
        // vapidKey: "BHvWoEqN0KY2YDZdfwX3_y5tRoUuALe9a9gJ9dOBLd56Lk7wFmMcLVk9Tylj7IBBoIGf62o76W5DWqlQJqxKBp4"
        vapidKey: "BBHDvZU0XUTYbTOHXf9ZHGAccXxsfWVgfk0JLud_Dd7Gbiinz36bhejcBf_TgDqdSUoaR7FfXki4us8c9T2i4cY"
    },

    // STRIPE_Publishable_key :'pk_test_51IJSwWENE7uabJh2Eqdq6aDs4rYefwE7sIoHUigj99tOW3Jn0z55dqEkqU31h3aplAMmRorqPTAtmXFURgnF4aLR00X7QWeeCP',
    // STRIPE_Secret_key :'sk_test_51IJSwWENE7uabJh2qbxlfM2If5MLKbI9wwhKFPOCGsTrkekeQFiKoKoslcRBy0dAgbzXYnGcWYdxbtMHvQ08aob100vc2l4BSj',

    STRIPE_Publishable_key :'pk_live_51IJSwWENE7uabJh24AGD4BlHr02TToQJaQonZl894GzwO4w8ygjCGMVpSYMl0Fn8XG7xfqN6rVHurRKvCMom2XW100ngfYhCiC',
    STRIPE_Secret_key :'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',

    // RAZOR_PAY_KEY_ID: "rzp_test_IJu8k9IvBRMQkf",
    // RAZOR_PAY_KEY_SECRET: "mt1hrrolhSs42LpW7wI6OTVt",

    RAZOR_PAY_KEY_ID: "rzp_live_b1UdexxytuhZRY",
    RAZOR_PAY_KEY_SECRET: "shJkkWgb9RxZwMsvIUtQMuwv",
}
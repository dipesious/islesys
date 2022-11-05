import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import {Clipboard} from '@angular/cdk/clipboard';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  cartList = [
    {id:'price_1LuTMaENE7uabJh2F2h4YBiO', name:"Startup Community", way:"79 First Year then $99", price:99, cost:79,  
    priceINR:8204, costINR:6549,  
    priceEUR:102, costEUR:82, 
    priceUSD:99, costUSD:79,
    during:"1 Year" },
    {id:'price_1LuTPKENE7uabJh2rrXnRV5u', name:"Pledged Community", way:"33/year Prepaid", price:297, cost:99, 
    priceINR:24623, costINR:8204, 
    priceEUR:305, costEUR:102, 
    priceUSD:297, costUSD:99, 
    during:"3 Year" },
    {id:'price_1LuTQrENE7uabJh2aYyTOtfT', name:"Prepaid Enterprise", way:"499/month Prepaid", price:499, cost:499, 
    priceINR:413670, costINR:413670, 
    priceEUR:513, costEUR:513, 
    priceUSD:499, costUSD:499, 
    during:"Monthly" },
  ]
  
  videoEducation = "assets/videos/education.mp4";
  videoBusiness = "assets/videos/business.mp4";

  videoOpensourceIcons = "assets/videos/video_icons.mp4";
  videoOpensourceMaps = "assets/videos/video_maps.mp4";
  videoOpensourceDatasets = "assets/videos/recommend.mp4";
  videoOpensourcePalettes = "assets/videos/video_palettes.mp4";
  videoOpensourceGradients = "assets/videos/video_gradients.mp4";
  videoOpensourcePatterns = "assets/videos/video_patterns.mp4";
  videoOpensourceFonts = "assets/videos/recommend.mp4";
  videoOpensourceShades = "assets/videos/video_shades.mp4";

  nowLang = "English"
  bgInvert = false; // icon
  modeBgFc = true; // icon
  bgColor = ""; // icon
  fgColor = ""; // icon
  scaleMapX = 1; // map
  moveMapUD = 0; // map
  moveMapLR = 0; // map
  
  navOpensource = [
    {count:3000, about:"24:24 viewbox", icon:"shape_line", name:"Icons",path:"/icons"},
    {count:214, about:"svg & jpeg", icon:"map", name:"Maps",path:"/maps"},
    {count:9999, about:"json documents", icon:"data_object", name:"Datasets",path:"/datasets"},
    {count:2500, about:"hex library", icon:"palette", name:"Palettes",path:"/palettes"},
    {count:1500, about:"css backgrounds", icon:"gradient", name:"Gradients",path:"/gradients"},
    {count:22, about:"css collections", icon:"pattern", name:"Patterns",path:"/patterns"},
    {count:1442, about:"regional scripts", icon:"font_download", name:"Fonts",path:"/fonts"},
    {count:268, about:"hex code list", icon:"format_color_fill", name:"Shades",path:"/shades"},
  ]
  navCrowdfund = [
    {title:"Book",icon:"auto_stories", path:"/fundraisers/1" },
    {title:"Film",icon:"movie", path:"/fundraisers/2" },
    {title:"Tech",icon:"biotech", path:"/fundraisers/3" },
    {title:"Study",icon:"local_library", path:"/fundraisers/4" },
    {title:"Travel",icon:"sailing", path:"/fundraisers/5" },
    {title:"Faith",icon:"temple_hindu", path:"/fundraisers/6" },
    {title:"Event",icon:"celebration", path:"/fundraisers/7" },
    {title:"Medical",icon:"local_pharmacy", path:"/fundraisers/8" },
    {title:"Research",icon:"science", path:"/fundraisers/9" },
    {title:"Nature",icon:"compost", path:"/fundraisers/10" },
    // {title:"xxx",icon:"circle", path:"/pledge/9" },
    // {title:"xxx",icon:"circle", path:"/pledge/9" },
    // {title:"xxx",icon:"circle", path:"/pledge/9" },
    // {title:"xxx",icon:"circle", path:"/pledge/9" },
    // {title:"xxx",icon:"circle", path:"/pledge/9" },
  ]
  navTheCave = [
    {title:"Sama",icon:"military_tech", path:"/articles/sama", about:"A guide to deal in persuasion for complex challenges", 
    act:"Persuasion affairs", guide:"A summary to persuade readers"},
    {title:"Dama",icon:"sell", path:"/articles/dama", about:"A guide to deal in temptation for complex challenges", 
    act:"Temptation affairs", guide:"A paragraph to excite redears"},
    {title:"Danda",icon:"bug_report", path:"/articles/danda", about:"A guide to deal in punishment for complex challenges", 
    act:"Punishment affairs", guide:"A detailed procedure of subject"},
    {title:"Bheda",icon:"heart_broken", path:"/articles/bheda", about:"A guide to deal in division for complex challenges", 
    act:"Division affairs", guide:"Monitize expertise with affilation"},
  ]
  navTheCaveType = [
    {title:"Food",icon:"circle", path:"/articles/food" },
    {title:"Travel",icon:"circle", path:"/articles/travel" },
    {title:"Health and fitness",icon:"circle", path:"/articles/health_and_fitness" },
    {title:"Lifestyle",icon:"circle", path:"/articles/lifestyle" },
    {title:"Fashion and beauty",icon:"circle", path:"/articles/fashion_and_beauty" },
    {title:"Photography",icon:"circle", path:"/articles/photography" },
    {title:"Personal",icon:"circle", path:"/articles/personal" },
    {title:"DIY craft",icon:"circle", path:"/articles/diy_craft" },
    {title:"Parenting",icon:"circle", path:"/articles/parenting" },
    {title:"Music",icon:"circle", path:"/articles/music" },
    {title:"Business",icon:"circle", path:"/articles/business" },
    {title:"Art and design",icon:"circle", path:"/articles/art_and_design" },
    {title:"Book and writing",icon:"circle", path:"/articles/book_and_writing" },
    {title:"Personal finance",icon:"circle", path:"/articles/personal_finance" },
    {title:"Interior design",icon:"circle", path:"/articles/interior_design" },
    {title:"Sports",icon:"circle", path:"/articles/sports" },
    {title:"News",icon:"circle", path:"/articles/news" },
    {title:"Movie",icon:"circle", path:"/articles/Movie" },
    {title:"Religion",icon:"circle", path:"/articles/religion" },
    {title:"Political",icon:"circle", path:"/articles/political" },
  ]

  nations = [
    {coin: "CAD",cc: "+1",iso: "CA",name: "Canada" },
    {coin: "USD",cc: "+1",iso: "US",name: "United States" },
    {coin: "ZAR",cc: "+27",iso: "ZA",name: "South Africa" },
    {coin: "EUR",cc: "+30",iso: "GR",name: "Greece" },
    {coin: "EUR",cc: "+31",iso: "NL",name: "the Netherlands" },
    {coin: "EUR",cc: "+32",iso: "BE",name: "Belgium" },
    {coin: "EUR",cc: "+33",iso: "FR",name: "France" },
    {coin: "EUR",cc: "+34",iso: "ES",name: "Spain" },
    {coin: "HUF",cc: "+36",iso: "HU",name: "Hungary" },
    {coin: "EUR",cc: "+39",iso: "IT",name: "Italy" },
    {coin: "RON",cc: "+40",iso: "RO",name: "Romania" },
    {coin: "CHF",cc: "+41",iso: "CH",name: "Switzerland" },
    {coin: "EUR",cc: "+43",iso: "AT",name: "Austria" },
    {coin: "GBP",cc: "+44",iso: "UK",name: "United Kingdom" },
    {coin: "DKK",cc: "+45",iso: "DK",name: "Denmark" },
    {coin: "SEK",cc: "+46",iso: "SE",name: "Sweden" },
    {coin: "NOK",cc: "+47",iso: "NO",name: "Norway" },
    {coin: "PLN",cc: "+48",iso: "PL",name: "Poland" },
    {coin: "EUR",cc: "+49",iso: "DE",name: "Germany" },
    {coin: "BRL",cc: "+55",iso: "BR",name: "Brazil" },
    {coin: "SGD",cc: "+65",iso: "SG",name: "Singapore" },
    {coin: "JPY",cc: "+81",iso: "JP",name: "Japan" },
    {coin: "KRW",cc: "+82",iso: "KR",name: "South Korea" },
    {coin: "RUB",cc: "+86",iso: "RU",name: "Russia" },
    {coin: "CNY",cc: "+86",iso: "CH",name: "Mainland China" },
    {coin: "INR",cc: "+91",iso: "IN",name: "India" },
    {coin: "GIP",cc: "+350",iso: "GI",name: "Gibraltar" },
    {coin: "EUR",cc: "+351",iso: "PT",name: "Portugal" },
    {coin: "EUR",cc: "+352",iso: "LU",name: "Luxembourg" },
    {coin: "EUR",cc: "+353",iso: "IE",name: "Ireland" },
    {coin: "ISK",cc: "+354",iso: "IS",name: "Iceland" },
    {coin: "ALL",cc: "+355",iso: "AL",name: "Albania" },
    {coin: "EUR",cc: "+356",iso: "MT",name: "Malta" },
    {coin: "EUR",cc: "+357",iso: "CY",name: "Cyprus" },
    {coin: "EUR",cc: "+358",iso: "FI",name: "Finland" },
    {coin: "BGN",cc: "+359",iso: "BG",name: "Bulgaria" },
    {coin: "EUR",cc: "+370",iso: "LT",name: "Lithuania" },
    {coin: "EUR",cc: "+371",iso: "LV",name: "Latvia" },
    {coin: "EUR",cc: "+372",iso: "EE",name: "Estonia" },
    {coin: "MDL",cc: "+373",iso: "MD",name: "Moldova" },
    {coin: "AMD",cc: "+374",iso: "AM",name: "Armenia" },
    {coin: "BYN",cc: "+375",iso: "BY",name: "Belarus" },
    {coin: "AND",cc: "+376",iso: "AD",name: "Andorra" },
    {coin: "EUR",cc: "+377",iso: "MC",name: "Monaco" },
    {coin: "EUR",cc: "+378",iso: "SM",name: "San Marino" },
    {coin: "EUR",cc: "+379",iso: "VA",name: "Vatican" },
    {coin: "UAH",cc: "+380",iso: "UA",name: "Ukraine" },
    {coin: "RSD",cc: "+381",iso: "RS",name: "Serbia" },
    {coin: "EUR",cc: "+382",iso: "ME",name: "Montenegro" },
    {coin: "HRK",cc: "+385",iso: "HR\t",name: "Croatia" },
    {coin: "EUR",cc: "+386",iso: "SL",name: "Slovenia" },
    {coin: "BAM",cc: "+387",iso: "BA",name: "Bosnia & Herzegovina" },
    {coin: "MKD",cc: "+389",iso: "MK",name: "North Macedonia" },
    {coin: "CZK",cc: "+420",iso: "CZ",name: "Czech Republic" },
    {coin: "EUR",cc: "+421",iso: "SK",name: "Slovakia" },
    {coin: "CHF",cc: "+423",iso: "LI",name: "Liechtenstein"}
];
/*
  phoneCodes = [
    {
    "name": "Afghanistan",
    "dial_code": "+93",
    "code": "AF"
    },
    {
    "name": "Aland Islands",
    "dial_code": "+358",
    "code": "AX"
    },
    {
    "name": "Albania",
    "dial_code": "+355",
    "code": "AL"
    },
    {
    "name": "Algeria",
    "dial_code": "+213",
    "code": "DZ"
    },
    {
    "name": "AmericanSamoa",
    "dial_code": "+1684",
    "code": "AS"
    },
    {
    "name": "Andorra",
    "dial_code": "+376",
    "code": "AD"
    },
    {
    "name": "Angola",
    "dial_code": "+244",
    "code": "AO"
    },
    {
    "name": "Anguilla",
    "dial_code": "+1264",
    "code": "AI"
    },
    {
    "name": "Antarctica",
    "dial_code": "+672",
    "code": "AQ"
    },
    {
    "name": "Antigua and Barbuda",
    "dial_code": "+1268",
    "code": "AG"
    },
    {
    "name": "Argentina",
    "dial_code": "+54",
    "code": "AR"
    },
    {
    "name": "Armenia",
    "dial_code": "+374",
    "code": "AM"
    },
    {
    "name": "Aruba",
    "dial_code": "+297",
    "code": "AW"
    },
    {
    "name": "Australia",
    "dial_code": "+61",
    "code": "AU"
    },
    {
    "name": "Austria",
    "dial_code": "+43",
    "code": "AT"
    },
    {
    "name": "Azerbaijan",
    "dial_code": "+994",
    "code": "AZ"
    },
    {
    "name": "Bahamas",
    "dial_code": "+1242",
    "code": "BS"
    },
    {
    "name": "Bahrain",
    "dial_code": "+973",
    "code": "BH"
    },
    {
    "name": "Bangladesh",
    "dial_code": "+880",
    "code": "BD"
    },
    {
    "name": "Barbados",
    "dial_code": "+1246",
    "code": "BB"
    },
    {
    "name": "Belarus",
    "dial_code": "+375",
    "code": "BY"
    },
    {
    "name": "Belgium",
    "dial_code": "+32",
    "code": "BE"
    },
    {
    "name": "Belize",
    "dial_code": "+501",
    "code": "BZ"
    },
    {
    "name": "Benin",
    "dial_code": "+229",
    "code": "BJ"
    },
    {
    "name": "Bermuda",
    "dial_code": "+1441",
    "code": "BM"
    },
    {
    "name": "Bhutan",
    "dial_code": "+975",
    "code": "BT"
    },
    {
    "name": "Bolivia, Plurinational State of",
    "dial_code": "+591",
    "code": "BO"
    },
    {
    "name": "Bosnia and Herzegovina",
    "dial_code": "+387",
    "code": "BA"
    },
    {
    "name": "Botswana",
    "dial_code": "+267",
    "code": "BW"
    },
    {
    "name": "Brazil",
    "dial_code": "+55",
    "code": "BR"
    },
    {
    "name": "British Indian Ocean Territory",
    "dial_code": "+246",
    "code": "IO"
    },
    {
    "name": "Brunei Darussalam",
    "dial_code": "+673",
    "code": "BN"
    },
    {
    "name": "Bulgaria",
    "dial_code": "+359",
    "code": "BG"
    },
    {
    "name": "Burkina Faso",
    "dial_code": "+226",
    "code": "BF"
    },
    {
    "name": "Burundi",
    "dial_code": "+257",
    "code": "BI"
    },
    {
    "name": "Cambodia",
    "dial_code": "+855",
    "code": "KH"
    },
    {
    "name": "Cameroon",
    "dial_code": "+237",
    "code": "CM"
    },
    {
    "name": "Canada",
    "dial_code": "+1",
    "code": "CA"
    },
    {
    "name": "Cape Verde",
    "dial_code": "+238",
    "code": "CV"
    },
    {
    "name": "Cayman Islands",
    "dial_code": "+ 345",
    "code": "KY"
    },
    {
    "name": "Central African Republic",
    "dial_code": "+236",
    "code": "CF"
    },
    {
    "name": "Chad",
    "dial_code": "+235",
    "code": "TD"
    },
    {
    "name": "Chile",
    "dial_code": "+56",
    "code": "CL"
    },
    {
    "name": "China",
    "dial_code": "+86",
    "code": "CN"
    },
    {
    "name": "Christmas Island",
    "dial_code": "+61",
    "code": "CX"
    },
    {
    "name": "Cocos (Keeling) Islands",
    "dial_code": "+61",
    "code": "CC"
    },
    {
    "name": "Colombia",
    "dial_code": "+57",
    "code": "CO"
    },
    {
    "name": "Comoros",
    "dial_code": "+269",
    "code": "KM"
    },
    {
    "name": "Congo",
    "dial_code": "+242",
    "code": "CG"
    },
    {
    "name": "Congo, The Democratic Republic of the Congo",
    "dial_code": "+243",
    "code": "CD"
    },
    {
    "name": "Cook Islands",
    "dial_code": "+682",
    "code": "CK"
    },
    {
    "name": "Costa Rica",
    "dial_code": "+506",
    "code": "CR"
    },
    {
    "name": "Cote d'Ivoire",
    "dial_code": "+225",
    "code": "CI"
    },
    {
    "name": "Croatia",
    "dial_code": "+385",
    "code": "HR"
    },
    {
    "name": "Cuba",
    "dial_code": "+53",
    "code": "CU"
    },
    {
    "name": "Cyprus",
    "dial_code": "+357",
    "code": "CY"
    },
    {
    "name": "Czech Republic",
    "dial_code": "+420",
    "code": "CZ"
    },
    {
    "name": "Denmark",
    "dial_code": "+45",
    "code": "DK"
    },
    {
    "name": "Djibouti",
    "dial_code": "+253",
    "code": "DJ"
    },
    {
    "name": "Dominica",
    "dial_code": "+1767",
    "code": "DM"
    },
    {
    "name": "Dominican Republic",
    "dial_code": "+1849",
    "code": "DO"
    },
    {
    "name": "Ecuador",
    "dial_code": "+593",
    "code": "EC"
    },
    {
    "name": "Egypt",
    "dial_code": "+20",
    "code": "EG"
    },
    {
    "name": "El Salvador",
    "dial_code": "+503",
    "code": "SV"
    },
    {
    "name": "Equatorial Guinea",
    "dial_code": "+240",
    "code": "GQ"
    },
    {
    "name": "Eritrea",
    "dial_code": "+291",
    "code": "ER"
    },
    {
    "name": "Estonia",
    "dial_code": "+372",
    "code": "EE"
    },
    {
    "name": "Ethiopia",
    "dial_code": "+251",
    "code": "ET"
    },
    {
    "name": "Falkland Islands (Malvinas)",
    "dial_code": "+500",
    "code": "FK"
    },
    {
    "name": "Faroe Islands",
    "dial_code": "+298",
    "code": "FO"
    },
    {
    "name": "Fiji",
    "dial_code": "+679",
    "code": "FJ"
    },
    {
    "name": "Finland",
    "dial_code": "+358",
    "code": "FI"
    },
    {
    "name": "France",
    "dial_code": "+33",
    "code": "FR"
    },
    {
    "name": "French Guiana",
    "dial_code": "+594",
    "code": "GF"
    },
    {
    "name": "French Polynesia",
    "dial_code": "+689",
    "code": "PF"
    },
    {
    "name": "Gabon",
    "dial_code": "+241",
    "code": "GA"
    },
    {
    "name": "Gambia",
    "dial_code": "+220",
    "code": "GM"
    },
    {
    "name": "Georgia",
    "dial_code": "+995",
    "code": "GE"
    },
    {
    "name": "Germany",
    "dial_code": "+49",
    "code": "DE"
    },
    {
    "name": "Ghana",
    "dial_code": "+233",
    "code": "GH"
    },
    {
    "name": "Gibraltar",
    "dial_code": "+350",
    "code": "GI"
    },
    {
    "name": "Greece",
    "dial_code": "+30",
    "code": "GR"
    },
    {
    "name": "Greenland",
    "dial_code": "+299",
    "code": "GL"
    },
    {
    "name": "Grenada",
    "dial_code": "+1473",
    "code": "GD"
    },
    {
    "name": "Guadeloupe",
    "dial_code": "+590",
    "code": "GP"
    },
    {
    "name": "Guam",
    "dial_code": "+1671",
    "code": "GU"
    },
    {
    "name": "Guatemala",
    "dial_code": "+502",
    "code": "GT"
    },
    {
    "name": "Guernsey",
    "dial_code": "+44",
    "code": "GG"
    },
    {
    "name": "Guinea",
    "dial_code": "+224",
    "code": "GN"
    },
    {
    "name": "Guinea-Bissau",
    "dial_code": "+245",
    "code": "GW"
    },
    {
    "name": "Guyana",
    "dial_code": "+595",
    "code": "GY"
    },
    {
    "name": "Haiti",
    "dial_code": "+509",
    "code": "HT"
    },
    {
    "name": "Holy See (Vatican City State)",
    "dial_code": "+379",
    "code": "VA"
    },
    {
    "name": "Honduras",
    "dial_code": "+504",
    "code": "HN"
    },
    {
    "name": "Hong Kong",
    "dial_code": "+852",
    "code": "HK"
    },
    {
    "name": "Hungary",
    "dial_code": "+36",
    "code": "HU"
    },
    {
    "name": "Iceland",
    "dial_code": "+354",
    "code": "IS"
    },
    {
    "name": "India",
    "dial_code": "+91",
    "code": "IN"
    },
    {
    "name": "Indonesia",
    "dial_code": "+62",
    "code": "ID"
    },
    {
    "name": "Iran, Islamic Republic of Persian Gulf",
    "dial_code": "+98",
    "code": "IR"
    },
    {
    "name": "Iraq",
    "dial_code": "+964",
    "code": "IQ"
    },
    {
    "name": "Ireland",
    "dial_code": "+353",
    "code": "IE"
    },
    {
    "name": "Isle of Man",
    "dial_code": "+44",
    "code": "IM"
    },
    {
    "name": "Israel",
    "dial_code": "+972",
    "code": "IL"
    },
    {
    "name": "Italy",
    "dial_code": "+39",
    "code": "IT"
    },
    {
    "name": "Jamaica",
    "dial_code": "+1876",
    "code": "JM"
    },
    {
    "name": "Japan",
    "dial_code": "+81",
    "code": "JP"
    },
    {
    "name": "Jersey",
    "dial_code": "+44",
    "code": "JE"
    },
    {
    "name": "Jordan",
    "dial_code": "+962",
    "code": "JO"
    },
    {
    "name": "Kazakhstan",
    "dial_code": "+77",
    "code": "KZ"
    },
    {
    "name": "Kenya",
    "dial_code": "+254",
    "code": "KE"
    },
    {
    "name": "Kiribati",
    "dial_code": "+686",
    "code": "KI"
    },
    {
    "name": "Korea, Democratic People's Republic of Korea",
    "dial_code": "+850",
    "code": "KP"
    },
    {
    "name": "Korea, Republic of South Korea",
    "dial_code": "+82",
    "code": "KR"
    },
    {
    "name": "Kuwait",
    "dial_code": "+965",
    "code": "KW"
    },
    {
    "name": "Kyrgyzstan",
    "dial_code": "+996",
    "code": "KG"
    },
    {
    "name": "Laos",
    "dial_code": "+856",
    "code": "LA"
    },
    {
    "name": "Latvia",
    "dial_code": "+371",
    "code": "LV"
    },
    {
    "name": "Lebanon",
    "dial_code": "+961",
    "code": "LB"
    },
    {
    "name": "Lesotho",
    "dial_code": "+266",
    "code": "LS"
    },
    {
    "name": "Liberia",
    "dial_code": "+231",
    "code": "LR"
    },
    {
    "name": "Libyan Arab Jamahiriya",
    "dial_code": "+218",
    "code": "LY"
    },
    {
    "name": "Liechtenstein",
    "dial_code": "+423",
    "code": "LI"
    },
    {
    "name": "Lithuania",
    "dial_code": "+370",
    "code": "LT"
    },
    {
    "name": "Luxembourg",
    "dial_code": "+352",
    "code": "LU"
    },
    {
    "name": "Macao",
    "dial_code": "+853",
    "code": "MO"
    },
    {
    "name": "Macedonia",
    "dial_code": "+389",
    "code": "MK"
    },
    {
    "name": "Madagascar",
    "dial_code": "+261",
    "code": "MG"
    },
    {
    "name": "Malawi",
    "dial_code": "+265",
    "code": "MW"
    },
    {
    "name": "Malaysia",
    "dial_code": "+60",
    "code": "MY"
    },
    {
    "name": "Maldives",
    "dial_code": "+960",
    "code": "MV"
    },
    {
    "name": "Mali",
    "dial_code": "+223",
    "code": "ML"
    },
    {
    "name": "Malta",
    "dial_code": "+356",
    "code": "MT"
    },
    {
    "name": "Marshall Islands",
    "dial_code": "+692",
    "code": "MH"
    },
    {
    "name": "Martinique",
    "dial_code": "+596",
    "code": "MQ"
    },
    {
    "name": "Mauritania",
    "dial_code": "+222",
    "code": "MR"
    },
    {
    "name": "Mauritius",
    "dial_code": "+230",
    "code": "MU"
    },
    {
    "name": "Mayotte",
    "dial_code": "+262",
    "code": "YT"
    },
    {
    "name": "Mexico",
    "dial_code": "+52",
    "code": "MX"
    },
    {
    "name": "Micronesia, Federated States of Micronesia",
    "dial_code": "+691",
    "code": "FM"
    },
    {
    "name": "Moldova",
    "dial_code": "+373",
    "code": "MD"
    },
    {
    "name": "Monaco",
    "dial_code": "+377",
    "code": "MC"
    },
    {
    "name": "Mongolia",
    "dial_code": "+976",
    "code": "MN"
    },
    {
    "name": "Montenegro",
    "dial_code": "+382",
    "code": "ME"
    },
    {
    "name": "Montserrat",
    "dial_code": "+1664",
    "code": "MS"
    },
    {
    "name": "Morocco",
    "dial_code": "+212",
    "code": "MA"
    },
    {
    "name": "Mozambique",
    "dial_code": "+258",
    "code": "MZ"
    },
    {
    "name": "Myanmar",
    "dial_code": "+95",
    "code": "MM"
    },
    {
    "name": "Namibia",
    "dial_code": "+264",
    "code": "NA"
    },
    {
    "name": "Nauru",
    "dial_code": "+674",
    "code": "NR"
    },
    {
    "name": "Nepal",
    "dial_code": "+977",
    "code": "NP"
    },
    {
    "name": "Netherlands",
    "dial_code": "+31",
    "code": "NL"
    },
    {
    "name": "Netherlands Antilles",
    "dial_code": "+599",
    "code": "AN"
    },
    {
    "name": "New Caledonia",
    "dial_code": "+687",
    "code": "NC"
    },
    {
    "name": "New Zealand",
    "dial_code": "+64",
    "code": "NZ"
    },
    {
    "name": "Nicaragua",
    "dial_code": "+505",
    "code": "NI"
    },
    {
    "name": "Niger",
    "dial_code": "+227",
    "code": "NE"
    },
    {
    "name": "Nigeria",
    "dial_code": "+234",
    "code": "NG"
    },
    {
    "name": "Niue",
    "dial_code": "+683",
    "code": "NU"
    },
    {
    "name": "Norfolk Island",
    "dial_code": "+672",
    "code": "NF"
    },
    {
    "name": "Northern Mariana Islands",
    "dial_code": "+1670",
    "code": "MP"
    },
    {
    "name": "Norway",
    "dial_code": "+47",
    "code": "NO"
    },
    {
    "name": "Oman",
    "dial_code": "+968",
    "code": "OM"
    },
    {
    "name": "Pakistan",
    "dial_code": "+92",
    "code": "PK"
    },
    {
    "name": "Palau",
    "dial_code": "+680",
    "code": "PW"
    },
    {
    "name": "Palestinian Territory, Occupied",
    "dial_code": "+970",
    "code": "PS"
    },
    {
    "name": "Panama",
    "dial_code": "+507",
    "code": "PA"
    },
    {
    "name": "Papua New Guinea",
    "dial_code": "+675",
    "code": "PG"
    },
    {
    "name": "Paraguay",
    "dial_code": "+595",
    "code": "PY"
    },
    {
    "name": "Peru",
    "dial_code": "+51",
    "code": "PE"
    },
    {
    "name": "Philippines",
    "dial_code": "+63",
    "code": "PH"
    },
    {
    "name": "Pitcairn",
    "dial_code": "+872",
    "code": "PN"
    },
    {
    "name": "Poland",
    "dial_code": "+48",
    "code": "PL"
    },
    {
    "name": "Portugal",
    "dial_code": "+351",
    "code": "PT"
    },
    {
    "name": "Puerto Rico",
    "dial_code": "+1939",
    "code": "PR"
    },
    {
    "name": "Qatar",
    "dial_code": "+974",
    "code": "QA"
    },
    {
    "name": "Romania",
    "dial_code": "+40",
    "code": "RO"
    },
    {
    "name": "Russia",
    "dial_code": "+7",
    "code": "RU"
    },
    {
    "name": "Rwanda",
    "dial_code": "+250",
    "code": "RW"
    },
    {
    "name": "Reunion",
    "dial_code": "+262",
    "code": "RE"
    },
    {
    "name": "Saint Barthelemy",
    "dial_code": "+590",
    "code": "BL"
    },
    {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "dial_code": "+290",
    "code": "SH"
    },
    {
    "name": "Saint Kitts and Nevis",
    "dial_code": "+1869",
    "code": "KN"
    },
    {
    "name": "Saint Lucia",
    "dial_code": "+1758",
    "code": "LC"
    },
    {
    "name": "Saint Martin",
    "dial_code": "+590",
    "code": "MF"
    },
    {
    "name": "Saint Pierre and Miquelon",
    "dial_code": "+508",
    "code": "PM"
    },
    {
    "name": "Saint Vincent and the Grenadines",
    "dial_code": "+1784",
    "code": "VC"
    },
    {
    "name": "Samoa",
    "dial_code": "+685",
    "code": "WS"
    },
    {
    "name": "San Marino",
    "dial_code": "+378",
    "code": "SM"
    },
    {
    "name": "Sao Tome and Principe",
    "dial_code": "+239",
    "code": "ST"
    },
    {
    "name": "Saudi Arabia",
    "dial_code": "+966",
    "code": "SA"
    },
    {
    "name": "Senegal",
    "dial_code": "+221",
    "code": "SN"
    },
    {
    "name": "Serbia",
    "dial_code": "+381",
    "code": "RS"
    },
    {
    "name": "Seychelles",
    "dial_code": "+248",
    "code": "SC"
    },
    {
    "name": "Sierra Leone",
    "dial_code": "+232",
    "code": "SL"
    },
    {
    "name": "Singapore",
    "dial_code": "+65",
    "code": "SG"
    },
    {
    "name": "Slovakia",
    "dial_code": "+421",
    "code": "SK"
    },
    {
    "name": "Slovenia",
    "dial_code": "+386",
    "code": "SI"
    },
    {
    "name": "Solomon Islands",
    "dial_code": "+677",
    "code": "SB"
    },
    {
    "name": "Somalia",
    "dial_code": "+252",
    "code": "SO"
    },
    {
    "name": "South Africa",
    "dial_code": "+27",
    "code": "ZA"
    },
    {
    "name": "South Sudan",
    "dial_code": "+211",
    "code": "SS"
    },
    {
    "name": "South Georgia and the South Sandwich Islands",
    "dial_code": "+500",
    "code": "GS"
    },
    {
    "name": "Spain",
    "dial_code": "+34",
    "code": "ES"
    },
    {
    "name": "Sri Lanka",
    "dial_code": "+94",
    "code": "LK"
    },
    {
    "name": "Sudan",
    "dial_code": "+249",
    "code": "SD"
    },
    {
    "name": "Suriname",
    "dial_code": "+597",
    "code": "SR"
    },
    {
    "name": "Svalbard and Jan Mayen",
    "dial_code": "+47",
    "code": "SJ"
    },
    {
    "name": "Swaziland",
    "dial_code": "+268",
    "code": "SZ"
    },
    {
    "name": "Sweden",
    "dial_code": "+46",
    "code": "SE"
    },
    {
    "name": "Switzerland",
    "dial_code": "+41",
    "code": "CH"
    },
    {
    "name": "Syrian Arab Republic",
    "dial_code": "+963",
    "code": "SY"
    },
    {
    "name": "Taiwan",
    "dial_code": "+886",
    "code": "TW"
    },
    {
    "name": "Tajikistan",
    "dial_code": "+992",
    "code": "TJ"
    },
    {
    "name": "Tanzania, United Republic of Tanzania",
    "dial_code": "+255",
    "code": "TZ"
    },
    {
    "name": "Thailand",
    "dial_code": "+66",
    "code": "TH"
    },
    {
    "name": "Timor-Leste",
    "dial_code": "+670",
    "code": "TL"
    },
    {
    "name": "Togo",
    "dial_code": "+228",
    "code": "TG"
    },
    {
    "name": "Tokelau",
    "dial_code": "+690",
    "code": "TK"
    },
    {
    "name": "Tonga",
    "dial_code": "+676",
    "code": "TO"
    },
    {
    "name": "Trinidad and Tobago",
    "dial_code": "+1868",
    "code": "TT"
    },
    {
    "name": "Tunisia",
    "dial_code": "+216",
    "code": "TN"
    },
    {
    "name": "Turkey",
    "dial_code": "+90",
    "code": "TR"
    },
    {
    "name": "Turkmenistan",
    "dial_code": "+993",
    "code": "TM"
    },
    {
    "name": "Turks and Caicos Islands",
    "dial_code": "+1649",
    "code": "TC"
    },
    {
    "name": "Tuvalu",
    "dial_code": "+688",
    "code": "TV"
    },
    {
    "name": "Uganda",
    "dial_code": "+256",
    "code": "UG"
    },
    {
    "name": "Ukraine",
    "dial_code": "+380",
    "code": "UA"
    },
    {
    "name": "United Arab Emirates",
    "dial_code": "+971",
    "code": "AE"
    },
    {
    "name": "United Kingdom",
    "dial_code": "+44",
    "code": "GB"
    },
    {
    "name": "United States",
    "dial_code": "+1",
    "code": "US"
    },
    {
    "name": "Uruguay",
    "dial_code": "+598",
    "code": "UY"
    },
    {
    "name": "Uzbekistan",
    "dial_code": "+998",
    "code": "UZ"
    },
    {
    "name": "Vanuatu",
    "dial_code": "+678",
    "code": "VU"
    },
    {
    "name": "Venezuela, Bolivarian Republic of Venezuela",
    "dial_code": "+58",
    "code": "VE"
    },
    {
    "name": "Vietnam",
    "dial_code": "+84",
    "code": "VN"
    },
    {
    "name": "Virgin Islands, British",
    "dial_code": "+1284",
    "code": "VG"
    },
    {
    "name": "Virgin Islands, U.S.",
    "dial_code": "+1340",
    "code": "VI"
    },
    {
    "name": "Wallis and Futuna",
    "dial_code": "+681",
    "code": "WF"
    },
    {
    "name": "Yemen",
    "dial_code": "+967",
    "code": "YE"
    },
    {
    "name": "Zambia",
    "dial_code": "+260",
    "code": "ZM"
    },
    {
    "name": "Zimbabwe",
    "dial_code": "+263",
    "code": "ZW"
    }
    ];
*/

    

    palatteList = [ 
      "Pastel",
      "Neon",
      "Gold",
      "Vintage",
      "Retro",
      "Light",
      "Dark",
      "Warm",
      "Cold",
      "Summer",
      "Fall",
      "Winter",
      "Spring",
      "Rainbow",
      "Night",
      "Space",
      "Earth",
      "Nature",
      "Sunset",
      "Skin",
      "Food",
      "Cream",
      "Coffee",
      "Christmas",
      "Halloween",
      "Wedding",
      "Kids",
      "Happy",
    ]

    gradientList = [
      {name:"Linear Gradients", info:"linear", code:1},
      {name:"Radial Gradients", info:"radial", code:2},
      {name:"Conic Gradients", info:"conic", code:3},
    ]
    
    patternType = [
      {name:"XXX", color: "#f44336", code:1},
      {name:"XXX", color: "#e91e63", code:2},
      {name:"XXX", color: "#9c27b0", code:3},
      {name:"XXX", color: "#673ab7", code:4},
      {name:"Indigo", color: "#3f51b5", code:5},
      {name:"XXX", color: "#2196f3", code:6},
      {name:"XXX", color: "#03a9f4", code:7},
      {name:"XXX", color: "#00bcd4", code:8},
      {name:"XXX", color: "#009688", code:9},
      {name:"XXX", color: "#4caf50", code:10},
      {name:"XXX", color: "#8bc34a", code:11},
      {name:"XXX", color: "#cddc39", code:12},
      {name:"XXX", color: "#ffeb3b", code:13},
      {name:"XXX", color: "#ffc107", code:14},
      {name:"XXX", color: "#ff9800", code:15},
      {name:"XXX", color: "#ff5722", code:16},
      {name:"XXX", color: "#795548", code:17},
      {name:"XXX", color: "#9e9e9e", code:18},
      {name:"XXX", color: "#607d8b", code:19},
      {name:"XXX", color: "#ffffff", code:20},
      {name:"XXX", color: "#000000", code:21},
    ]

    mapList = [
    {name:"Mercator", info:"Mercator", code:1},
    {name:"Mercator Pacific", info:"MercatorPacific", code:2},
    {name:"Peirce Quincuncial", info:"PeirceQuincuncial", code:3},

    {name:"Continent", info:"Continent", code:4},
    {name:"Region", info:"Region", code:5},
    {name:"Nation", info:"Nation", code:6},
    {name:"State", info:"State", code:7},
    {name:"City", info:"City", code:8},

    {name:"History", info:"History", code:9},
    {name:"Geography", info:"Geography", code:10},
  ]

  tableType = [
    {name:"Chinese", info:"ZH", code:4},
    {name:"English", info:"EN", code:2},
    {name:"French", info:"FR", code:3},
    {name:"Hindi", info:"HI", code:5},
    {name:"Marathi", info:"MA", code:1},
    {name:"Spanish", info:"ES", code:6},
  ]
  fontType = [
    {name:"Arabic", code:1},
    {name:"Bengali", code:2},
    {name:"Chinese (Hong Kong)", code:3},
    {name:"Chinese (Simplified)", code:4},
    {name:"Chinese (Traditional)", code:5},
    {name:"Cyrillic", code:6},
    {name:"Cyrillic Extended", code:7},
    {name:"Devanagari", code:8},
    {name:"Greek", code:9},
    {name:"Greek Extended", code:10},
    {name:"Gujarati", code:11},
    {name:"Gurmukhi", code:12},
    {name:"Hebrew", code:13},
    {name:"Japanese", code:14},
    {name:"Kannada", code:15},
    {name:"Khmer", code:16},
    {name:"Korean", code:17},
    {name:"Latin", code:18},
    {name:"Latin Extended", code:19},
    {name:"Malayalam", code:20},
    {name:"Myanmar", code:21},
    {name:"Oriya", code:22},
    {name:"Sinhala", code:23},
    {name:"Tamil", code:24},
    {name:"Telugu", code:25},
    {name:"Thai", code:26},
    {name:"Tibetan", code:27},
    {name:"Vietnamese", code:28},
    {name:"Other", code:99},
  ]
  iconCat = [
    "Accessibility",
    "Adhesive Bandage",
    "Airport",
    "Football",
    "Anchor",
    "Antenna",
    "Archive",
    "Arrow",
    "Audio", 
    "Award",
    "Badge",
    "Badminton",
    "Banknote",
    "Barcode",
    "Baseball",
    "Basket",
    "Basketball",
    "Battery",
    "Bed",
    "Beer",
    "Bell",
    "Bicycle",
    "Binoculars",
    "Bitcoin",
    "Book",
    "Bookmark",
    "Bowling",
    "Boxing",
    "Brick",
    "Bus",
    "Brightness",
    "Briefcase",
    "Building",
    "Bug",
    "Cargo",
    "Calculator",
    "Car",
    "Candy",
    "Calendar",
    "Coffee",
    "Checkout",
    "Chrome",
    "Circle",
    "Clipboard",
    "Code",
    "Cloud",
    "Code Fork",
    "Christmas",
    "Clothing",
    "Brand"
  ];
  
  colorz = [
    {id:"red", name:"Red", p:[
      {n:"50", c:"#FFEBEE"},
      {n:"100", c:"#FFCDD2"},
      {n:"200", c:"#EF9A9A"},
      {n:"300", c:"#E57373"},
      {n:"400", c:"#EF5350"},
      {n:"500", c:"#F44336"},
      {n:"600", c:"#E53935"},
      {n:"700", c:"#D32F2F"},
      {n:"800", c:"#C62828"},
      {n:"900", c:"#B71C1C"},
      {n:"A100", c:"#FF8A80"},
      {n:"A200", c:"#FF5252"},
      {n:"A400", c:"#FF1744"},
      {n:"A700", c:"#D50000"},
    ]},
    {id:"pink", name:"Pink", p:[
      {n:"50", c:"#FCE4EC"},
      {n:"100", c:"#F8BBD0"},
      {n:"200", c:"#F48FB1"},
      {n:"300", c:"#F06292"},
      {n:"400", c:"#EC407A"},
      {n:"500", c:"#E91E63"},
      {n:"600", c:"#D81B60"},
      {n:"700", c:"#C2185B"},
      {n:"800", c:"#AD1457"},
      {n:"900", c:"#880E4F"},
      {n:"A100", c:"#FF80AB"},
      {n:"A200", c:"#FF4081"},
      {n:"A400", c:"#F50057"},
      {n:"A700", c:"#C51162"},
    ]},
    {id:"purple", name:"Purple", p:[
      {n:"50", c:"#F3E5F5"},
      {n:"100", c:"#E1BEE7"},
      {n:"200", c:"#CE93D8"},
      {n:"300", c:"#BA68C8"},
      {n:"400", c:"#AB47BC"},
      {n:"500", c:"#9C27B0"},
      {n:"600", c:"#8E24AA"},
      {n:"700", c:"#7B1FA2"},
      {n:"800", c:"#6A1B9A"},
      {n:"900", c:"#4A148C"},
      {n:"A100", c:"#EA80FC"},
      {n:"A200", c:"#E040FB"},
      {n:"A400", c:"#D500F9"},
      {n:"A700", c:"#AA00FF"},
    ]},
    {id:"deep_purple", name:"Deep Purple", p:[
      {n:"50", c:"#EDE7F6"},
      {n:"100", c:"#D1C4E9"},
      {n:"200", c:"#B39DDB"},
      {n:"300", c:"#9575CD"},
      {n:"400", c:"#7E57C2"},
      {n:"500", c:"#673AB7"},
      {n:"600", c:"#5E35B1"},
      {n:"700", c:"#512DA8"},
      {n:"800", c:"#4527A0"},
      {n:"900", c:"#311B92"},
      {n:"A100", c:"#B388FF"},
      {n:"A200", c:"#7C4DFF"},
      {n:"A400", c:"#651FFF"},
      {n:"A700", c:"#6200EA"},
    ]},
    {id:"indigo", name:"Indigo", p:[
      {n:"50", c:"#E8EAF6"},
      {n:"100", c:"#C5CAE9"},
      {n:"200", c:"#9FA8DA"},
      {n:"300", c:"#7986CB"},
      {n:"400", c:"#5C6BC0"},
      {n:"500", c:"#3F51B5"},
      {n:"600", c:"#3949AB"},
      {n:"700", c:"#303F9F"},
      {n:"800", c:"#283593"},
      {n:"900", c:"#1A237E"},
      {n:"A100", c:"#8C9EFF"},
      {n:"A200", c:"#536DFE"},
      {n:"A400", c:"#3D5AFE"},
      {n:"A700", c:"#304FFE"},
    ]},
    {id:"blue", name:"Blue", p:[
      {n:"50", c:"#E3F2FD"},
      {n:"100", c:"#BBDEFB"},
      {n:"200", c:"#90CAF9"},
      {n:"300", c:"#64B5F6"},
      {n:"400", c:"#42A5F5"},
      {n:"500", c:"#2196F3"},
      {n:"600", c:"#1E88E5"},
      {n:"700", c:"#1976D2"},
      {n:"800", c:"#1565C0"},
      {n:"900", c:"#0D47A1"},
      {n:"A100", c:"#82B1FF"},
      {n:"A200", c:"#448AFF"},
      {n:"A400", c:"#2979FF"},
      {n:"A700", c:"#2962FF"},
    ]},
    {id:"light_blue", name:"Light Blue", p:[
      {n:"50", c:"#E1F5FE"},
      {n:"100", c:"#B3E5FC"},
      {n:"200", c:"#81D4FA"},
      {n:"300", c:"#4FC3F7"},
      {n:"400", c:"#29B6F6"},
      {n:"500", c:"#03A9F4"},
      {n:"600", c:"#039BE5"},
      {n:"700", c:"#0288D1"},
      {n:"800", c:"#0277BD"},
      {n:"900", c:"#01579B"},
      {n:"A100", c:"#80D8FF"},
      {n:"A200", c:"#40C4FF"},
      {n:"A400", c:"#00B0FF"},
      {n:"A700", c:"#0091EA"},
    ]},
    {id:"cyan", name:"Cyan", p:[
      {n:"50", c:"#E0F7FA"},
      {n:"100", c:"#B2EBF2"},
      {n:"200", c:"#80DEEA"},
      {n:"300", c:"#4DD0E1"},
      {n:"400", c:"#26C6DA"},
      {n:"500", c:"#00BCD4"},
      {n:"600", c:"#00ACC1"},
      {n:"700", c:"#0097A7"},
      {n:"800", c:"#00838F"},
      {n:"900", c:"#006064"},
      {n:"A100", c:"#84FFFF"},
      {n:"A200", c:"#18FFFF"},
      {n:"A400", c:"#00E5FF"},
      {n:"A700", c:"#00B8D4"},
    ]},
    {id:"teal", name:"Teal", p:[
      {n:"50", c:"#E0F2F1"},
      {n:"100", c:"#B2DFDB"},
      {n:"200", c:"#80CBC4"},
      {n:"300", c:"#4DB6AC"},
      {n:"400", c:"#26A69A"},
      {n:"500", c:"#009688"},
      {n:"600", c:"#00897B"},
      {n:"700", c:"#00796B"},
      {n:"800", c:"#00695C"},
      {n:"900", c:"#004D40"},
      {n:"A100", c:"#A7FFEB"},
      {n:"A200", c:"#64FFDA"},
      {n:"A400", c:"#1DE9B6"},
      {n:"A700", c:"#00BFA5"},
    ]},
    {id:"green", name:"Green", p:[
      {n:"50", c:"#E8F5E9"},
      {n:"100", c:"#C8E6C9"},
      {n:"200", c:"#A5D6A7"},
      {n:"300", c:"#81C784"},
      {n:"400", c:"#66BB6A"},
      {n:"500", c:"#4CAF50"},
      {n:"600", c:"#43A047"},
      {n:"700", c:"#388E3C"},
      {n:"800", c:"#2E7D32"},
      {n:"900", c:"#1B5E20"},
      {n:"A100", c:"#B9F6CA"},
      {n:"A200", c:"#69F0AE"},
      {n:"A400", c:"#00E676"},
      {n:"A700", c:"#00C853"},
    ]},
    {id:"light_green", name:"Light Green", p:[
      {n:"50", c:"#F1F8E9"},
      {n:"100", c:"#DCEDC8"},
      {n:"200", c:"#C5E1A5"},
      {n:"300", c:"#AED581"},
      {n:"400", c:"#9CCC65"},
      {n:"500", c:"#8BC34A"},
      {n:"600", c:"#7CB342"},
      {n:"700", c:"#689F38"},
      {n:"800", c:"#558B2F"},
      {n:"900", c:"#33691E"},
      {n:"A100", c:"#CCFF90"},
      {n:"A200", c:"#B2FF59"},
      {n:"A400", c:"#76FF03"},
      {n:"A700", c:"#64DD17"},
    ]},
    {id:"lime", name:"Lime", p:[
      {n:"50", c:"#F9FBE7"},
      {n:"100", c:"#F0F4C3"},
      {n:"200", c:"#E6EE9C"},
      {n:"300", c:"#DCE775"},
      {n:"400", c:"#D4E157"},
      {n:"500", c:"#CDDC39"},
      {n:"600", c:"#C0CA33"},
      {n:"700", c:"#AFB42B"},
      {n:"800", c:"#9E9D24"},
      {n:"900", c:"#827717"},
      {n:"A100", c:"#F4FF81"},
      {n:"A200", c:"#EEFF41"},
      {n:"A400", c:"#C6FF00"},
      {n:"A700", c:"#AEEA00"},
    ]},
    {id:"yellow", name:"Yellow", p:[
      {n:"50", c:"#FFFDE7"},
      {n:"100", c:"#FFF9C4"},
      {n:"200", c:"#FFF59D"},
      {n:"300", c:"#FFF176"},
      {n:"400", c:"#FFEE58"},
      {n:"500", c:"#FFEB3B"},
      {n:"600", c:"#FDD835"},
      {n:"700", c:"#FBC02D"},
      {n:"800", c:"#F9A825"},
      {n:"900", c:"#F57F17"},
      {n:"A100", c:"#FFFF8D"},
      {n:"A200", c:"#FFFF00"},
      {n:"A400", c:"#FFEA00"},
      {n:"A700", c:"#FFD600"},
    ]},
    {id:"amber", name:"Amber", p:[
      {n:"50", c:"#FFF8E1"},
      {n:"100", c:"#FFECB3"},
      {n:"200", c:"#FFE082"},
      {n:"300", c:"#FFD54F"},
      {n:"400", c:"#FFCA28"},
      {n:"500", c:"#FFC107"},
      {n:"600", c:"#FFB300"},
      {n:"700", c:"#FFA000"},
      {n:"800", c:"#FF8F00"},
      {n:"900", c:"#FF6F00"},
      {n:"A100", c:"#FFE57F"},
      {n:"A200", c:"#FFD740"},
      {n:"A400", c:"#FFC400"},
      {n:"A700", c:"#FFAB00"},
    ]},
    {id:"orange", name:"Orange", p:[
      {n:"50", c:"#FFF3E0"},
      {n:"100", c:"#FFE0B2"},
      {n:"200", c:"#FFCC80"},
      {n:"300", c:"#FFB74D"},
      {n:"400", c:"#FFA726"},
      {n:"500", c:"#FF9800"},
      {n:"600", c:"#FB8C00"},
      {n:"700", c:"#F57C00"},
      {n:"800", c:"#EF6C00"},
      {n:"900", c:"#E65100"},
      {n:"A100", c:"#FFD180"},
      {n:"A200", c:"#FFAB40"},
      {n:"A400", c:"#FF9100"},
      {n:"A700", c:"#FF6D00"},
    ]},
    {id:"deep_orange", name:"Deep Orange", p:[
      {n:"50", c:"#FBE9E7"},
      {n:"100", c:"#FFCCBC"},
      {n:"200", c:"#FFAB91"},
      {n:"300", c:"#FF8A65"},
      {n:"400", c:"#FF7043"},
      {n:"500", c:"#FF5722"},
      {n:"600", c:"#F4511E"},
      {n:"700", c:"#E64A19"},
      {n:"800", c:"#D84315"},
      {n:"900", c:"#BF360C"},
      {n:"A100", c:"#FF9E80"},
      {n:"A200", c:"#FF6E40"},
      {n:"A400", c:"#FF3D00"},
      {n:"A700", c:"#DD2C00"},
    ]},
    {id:"brown", name:"Brown", p:[
      {n:"50", c:"#EFEBE9"},
      {n:"100", c:"#D7CCC8"},
      {n:"200", c:"#BCAAA4"},
      {n:"300", c:"#A1887F"},
      {n:"400", c:"#8D6E63"},
      {n:"500", c:"#795548"},
      {n:"600", c:"#6D4C41"},
      {n:"700", c:"#5D4037"},
      {n:"800", c:"#4E342E"},
      {n:"900", c:"#3E2723"},
    ]},
    {id:"grey", name:"Gray", p:[
      {n:"50", c:"#FAFAFA"},
      {n:"100", c:"#F5F5F5"},
      {n:"200", c:"#EEEEEE"},
      {n:"300", c:"#E0E0E0"},
      {n:"400", c:"#BDBDBD"},
      {n:"500", c:"#9E9E9E"},
      {n:"600", c:"#757575"},
      {n:"700", c:"#616161"},
      {n:"800", c:"#424242"},
      {n:"900", c:"#212121"},
    ]},
    {id:"blue_grey", name:"Blue Gray", p:[
      {n:"50", c:"#ECEFF1"},
      {n:"100", c:"#CFD8DC"},
      {n:"200", c:"#B0BEC5"},
      {n:"300", c:"#90A4AE"},
      {n:"400", c:"#78909C"},
      {n:"500", c:"#607D8B"},
      {n:"600", c:"#546E7A"},
      {n:"700", c:"#455A64"},
      {n:"800", c:"#37474F"},
      {n:"900", c:"#263238"},
    ]},
    {id:"black_and_white", name:"Black & White", p:[
      {n:"Black", c:"#000000"},
      {n:"White", c:"#FFFFFF"},
    ]},
  ]

  constructor(
    public router: Router,
    public clipboard: Clipboard
  ) { }

  get getHeight(){
    return window.innerHeight;
  }
  get getWidth(){
    return window.innerWidth;
  }
  
  testName(name:string){
    const newKey  = new FormControl(name, [
      Validators.pattern('^[0-9A-Za-z ]+$')
    ]);
    return newKey.invalid;
  }

  testPhone(phone:string){
    const newNum  = new FormControl(phone, [
      Validators.pattern('^[0-9]+$')
    ]);
    return newNum.invalid;
  }

  testEmail(email:string){
    const newMail  = new FormControl(email, [
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
    ]);
    return newMail.invalid;
  }

  testPass(pass:string){
    const newKey  = new FormControl(pass, [
      Validators.pattern('^[0-9A-Za-z@]+$')
    ]);
    return newKey.invalid;
  }

  copyCLIPBOARD(x:any){
    this.clipboard.copy(x);
  }


}

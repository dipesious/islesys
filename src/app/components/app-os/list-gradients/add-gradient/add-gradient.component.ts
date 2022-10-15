import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { gradientModel } from 'src/app/universal.model';



@Component({
  selector: 'app-add-gradient',
  templateUrl: './add-gradient.component.html',
  styleUrls: ['./add-gradient.component.scss']
})
export class AddGradientComponent implements OnInit {


  gradient:gradientModel = {
    id:"",
    type:undefined, 
    demoCSS:"", about:'', info:'',
    by:'', dial_code:'+91', contact:'',
    name:'', data:'', 
    active:false,
    sin:null
  }
  makingChanges = false;
  
  constructor(
    public resource: ResourceService,
    public auth: AuthService,
    private dialogRef: MatDialogRef<AddGradientComponent>
  ) { }

  ngOnInit(): void {
  }
/*
  doSome(){
    const x = [
      {
          "name": "Grade Grey",
          "color": "background: linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80));"
      },
      {
          "name": "Piggy Pink",
          "color": "background: linear-gradient(to right, rgb(238, 156, 167), rgb(255, 221, 225));"
      },
      {
          "name": "Cool Blues",
          "color": "background: linear-gradient(to right, rgb(33, 147, 176), rgb(109, 213, 237));"
      },
      {
          "name": "MegaTron",
          "color": "background: linear-gradient(to right, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125));"
      },
      {
          "name": "Moonlit Asteroid",
          "color": "background: linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100));"
      },
      {
          "name": "JShine",
          "color": "background: linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89));"
      },
      {
          "name": "Evening Sunshine",
          "color": "background: linear-gradient(to right, rgb(185, 43, 39), rgb(21, 101, 192));"
      },
      {
          "name": "Dark Ocean",
          "color": "background: linear-gradient(to right, rgb(55, 59, 68), rgb(66, 134, 244));"
      },
      {
          "name": "Cool Sky",
          "color": "background: linear-gradient(to right, rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255));"
      },
      {
          "name": "Yoda",
          "color": "background: linear-gradient(to right, rgb(255, 0, 153), rgb(73, 50, 64));"
      },
      {
          "name": "Memariani",
          "color": "background: linear-gradient(to right, rgb(170, 75, 107), rgb(107, 107, 131), rgb(59, 141, 153));"
      },
      {
          "name": "Amin",
          "color": "background: linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224));"
      },
      {
          "name": "Harvey",
          "color": "background: linear-gradient(to right, rgb(31, 64, 55), rgb(153, 242, 200));"
      },
      {
          "name": "Neuromancer",
          "color": "background: linear-gradient(to right, rgb(249, 83, 198), rgb(185, 29, 115));"
      },
      {
          "name": "Azur Lane",
          "color": "background: linear-gradient(to right, rgb(127, 127, 213), rgb(134, 168, 231), rgb(145, 234, 228));"
      },
      {
          "name": "Witching Hour",
          "color": "background: linear-gradient(to right, rgb(195, 20, 50), rgb(36, 11, 54));"
      },
      {
          "name": "Flare",
          "color": "background: linear-gradient(to right, rgb(241, 39, 17), rgb(245, 175, 25));"
      },
      {
          "name": "Metapolis",
          "color": "background: linear-gradient(to right, rgb(101, 153, 153), rgb(244, 121, 31));"
      },
      {
          "name": "Kyoo Pal",
          "color": "background: linear-gradient(to right, rgb(221, 62, 84), rgb(107, 229, 133));"
      },
      {
          "name": "Kye Meh",
          "color": "background: linear-gradient(to right, rgb(131, 96, 195), rgb(46, 191, 145));"
      },
      {
          "name": "Kyoo Tah",
          "color": "background: linear-gradient(to right, rgb(84, 74, 125), rgb(255, 212, 82));"
      },
      {
          "name": "By Design",
          "color": "background: linear-gradient(to right, rgb(0, 159, 255), rgb(236, 47, 75));"
      },
      {
          "name": "Ultra Voilet",
          "color": "background: linear-gradient(to right, rgb(101, 78, 163), rgb(234, 175, 200));"
      },
      {
          "name": "Burning Orange",
          "color": "background: linear-gradient(to right, rgb(255, 65, 108), rgb(255, 75, 43));"
      },
      {
          "name": "Wiretap",
          "color": "background: linear-gradient(to right, rgb(138, 35, 135), rgb(233, 64, 87), rgb(242, 113, 33));"
      },
      {
          "name": "Summer Dog",
          "color": "background: linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214));"
      },
      {
          "name": "Rastafari",
          "color": "background: linear-gradient(to right, rgb(30, 150, 0), rgb(255, 242, 0), rgb(255, 0, 0));"
      },
      {
          "name": "Sin City Red",
          "color": "background: linear-gradient(to right, rgb(237, 33, 58), rgb(147, 41, 30));"
      },
      {
          "name": "Citrus Peel",
          "color": "background: linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53));"
      },
      {
          "name": "Blue Raspberry",
          "color": "background: linear-gradient(to right, rgb(0, 180, 219), rgb(0, 131, 176));"
      },
      {
          "name": "Margo",
          "color": "background: linear-gradient(to right, rgb(255, 239, 186), rgb(255, 255, 255));"
      },
      {
          "name": "Magic",
          "color": "background: linear-gradient(to right, rgb(89, 193, 115), rgb(161, 127, 224), rgb(93, 38, 193));"
      },
      {
          "name": "Evening Night",
          "color": "background: linear-gradient(to right, rgb(0, 90, 167), rgb(255, 253, 228));"
      },
      {
          "name": "Vanusa",
          "color": "background: linear-gradient(to right, rgb(218, 68, 83), rgb(137, 33, 107));"
      },
      {
          "name": "Shifty",
          "color": "background: linear-gradient(to right, rgb(99, 99, 99), rgb(162, 171, 88));"
      },
      {
          "name": "eXpresso",
          "color": "background: linear-gradient(to right, rgb(173, 83, 137), rgb(60, 16, 83));"
      },
      {
          "name": "Slight Ocean View",
          "color": "background: linear-gradient(to right, rgb(168, 192, 255), rgb(63, 43, 150));"
      },
      {
          "name": "Pure Lust",
          "color": "background: linear-gradient(to right, rgb(51, 51, 51), rgb(221, 24, 24));"
      },
      {
          "name": "Moon Purple",
          "color": "background: linear-gradient(to right, rgb(78, 84, 200), rgb(143, 148, 251));"
      },
      {
          "name": "Red Sunset",
          "color": "background: linear-gradient(to right, rgb(53, 92, 125), rgb(108, 91, 123), rgb(192, 108, 132));"
      },
      {
          "name": "Shifter",
          "color": "background: linear-gradient(to right, rgb(188, 78, 156), rgb(248, 7, 89));"
      },
      {
          "name": "Wedding Day Blues",
          "color": "background: linear-gradient(to right, rgb(64, 224, 208), rgb(255, 140, 0), rgb(255, 0, 128));"
      },
      {
          "name": "Sand to Blue",
          "color": "background: linear-gradient(to right, rgb(62, 81, 81), rgb(222, 203, 164));"
      },
      {
          "name": "Quepal",
          "color": "background: linear-gradient(to right, rgb(17, 153, 142), rgb(56, 239, 125));"
      },
      {
          "name": "Pun Yeta",
          "color": "background: linear-gradient(to right, rgb(16, 141, 199), rgb(239, 142, 56));"
      },
      {
          "name": "Sublime Light",
          "color": "background: linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251));"
      },
      {
          "name": "Sublime Vivid",
          "color": "background: linear-gradient(to right, rgb(252, 70, 107), rgb(63, 94, 251));"
      },
      {
          "name": "Bighead",
          "color": "background: linear-gradient(to right, rgb(201, 75, 75), rgb(75, 19, 79));"
      },
      {
          "name": "Taran Tado",
          "color": "background: linear-gradient(to right, rgb(35, 7, 77), rgb(204, 83, 51));"
      },
      {
          "name": "Relaxing red",
          "color": "background: linear-gradient(to right, rgb(255, 251, 213), rgb(178, 10, 44));"
      },
      {
          "name": "Lawrencium",
          "color": "background: linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62));"
      },
      {
          "name": "Ohhappiness",
          "color": "background: linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61));"
      },
      {
          "name": "Delicate",
          "color": "background: linear-gradient(to right, rgb(211, 204, 227), rgb(233, 228, 240));"
      },
      {
          "name": "Selenium",
          "color": "background: linear-gradient(to right, rgb(60, 59, 63), rgb(96, 92, 60));"
      },
      {
          "name": "Sulphur",
          "color": "background: linear-gradient(to right, rgb(202, 197, 49), rgb(243, 249, 167));"
      },
      {
          "name": "Pink Flavour",
          "color": "background: linear-gradient(to right, rgb(128, 0, 128), rgb(255, 192, 203));"
      },
      {
          "name": "Rainbow Blue",
          "color": "background: linear-gradient(to right, rgb(0, 242, 96), rgb(5, 117, 230));"
      },
      {
          "name": "Orange Fun",
          "color": "background: linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51));"
      },
      {
          "name": "Digital Water",
          "color": "background: linear-gradient(to right, rgb(116, 235, 213), rgb(172, 182, 229));"
      },
      {
          "name": "Lithium",
          "color": "background: linear-gradient(to right, rgb(109, 96, 39), rgb(211, 203, 184));"
      },
      {
          "name": "Argon",
          "color": "background: linear-gradient(to right, rgb(3, 0, 30), rgb(115, 3, 192), rgb(236, 56, 188), rgb(253, 239, 249));"
      },
      {
          "name": "Hydrogen",
          "color": "background: linear-gradient(to right, rgb(102, 125, 182), rgb(0, 130, 200), rgb(0, 130, 200), rgb(102, 125, 182));"
      },
      {
          "name": "Zinc",
          "color": "background: linear-gradient(to right, rgb(173, 169, 150), rgb(242, 242, 242), rgb(219, 219, 219), rgb(234, 234, 234));"
      },
      {
          "name": "Velvet Sun",
          "color": "background: linear-gradient(to right, rgb(225, 238, 195), rgb(240, 80, 83));"
      },
      {
          "name": "King Yna",
          "color": "background: linear-gradient(to right, rgb(26, 42, 108), rgb(178, 31, 31), rgb(253, 187, 45));"
      },
      {
          "name": "Summer",
          "color": "background: linear-gradient(to right, rgb(34, 193, 195), rgb(253, 187, 45));"
      },
      {
          "name": "Orange Coral",
          "color": "background: linear-gradient(to right, rgb(255, 153, 102), rgb(255, 94, 98));"
      },
      {
          "name": "Purpink",
          "color": "background: linear-gradient(to right, rgb(127, 0, 255), rgb(225, 0, 255));"
      },
      {
          "name": "Dull",
          "color": "background: linear-gradient(to right, rgb(201, 214, 255), rgb(226, 226, 226));"
      },
      {
          "name": "Kimoby Is The New Blue",
          "color": "background: linear-gradient(to right, rgb(57, 106, 252), rgb(41, 72, 255));"
      },
      {
          "name": "Broken Hearts",
          "color": "background: linear-gradient(to right, rgb(217, 167, 199), rgb(255, 252, 220));"
      },
      {
          "name": "Subu",
          "color": "background: linear-gradient(to right, rgb(12, 235, 235), rgb(32, 227, 178), rgb(41, 255, 198));"
      },
      {
          "name": "Socialive",
          "color": "background: linear-gradient(to right, rgb(6, 190, 182), rgb(72, 177, 191));"
      },
      {
          "name": "Crimson Tide",
          "color": "background: linear-gradient(to right, rgb(100, 43, 115), rgb(198, 66, 110));"
      },
      {
          "name": "Telegram",
          "color": "background: linear-gradient(to right, rgb(28, 146, 210), rgb(242, 252, 254));"
      },
      {
          "name": "Terminal",
          "color": "background: linear-gradient(to right, rgb(0, 0, 0), rgb(15, 155, 15));"
      },
      {
          "name": "Scooter",
          "color": "background: linear-gradient(to right, rgb(54, 209, 220), rgb(91, 134, 229));"
      },
      {
          "name": "Alive",
          "color": "background: linear-gradient(to right, rgb(203, 53, 107), rgb(189, 63, 50));"
      },
      {
          "name": "Relay",
          "color": "background: linear-gradient(to right, rgb(58, 28, 113), rgb(215, 109, 119), rgb(255, 175, 123));"
      },
      {
          "name": "Meridian",
          "color": "background: linear-gradient(to right, rgb(40, 60, 134), rgb(69, 162, 71));"
      },
      {
          "name": "Compare Now",
          "color": "background: linear-gradient(to right, rgb(239, 59, 54), rgb(255, 255, 255));"
      },
      {
          "name": "Mello",
          "color": "background: linear-gradient(to right, rgb(192, 57, 43), rgb(142, 68, 173));"
      },
      {
          "name": "Crystal Clear",
          "color": "background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));"
      },
      {
          "name": "Visions of Grandeur",
          "color": "background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));"
      },
      {
          "name": "Chitty Chitty Bang Bang",
          "color": "background: linear-gradient(to right, rgb(0, 121, 145), rgb(120, 255, 214));"
      },
      {
          "name": "Blue Skies",
          "color": "background: linear-gradient(to right, rgb(86, 204, 242), rgb(47, 128, 237));"
      },
      {
          "name": "Sunkist",
          "color": "background: linear-gradient(to right, rgb(242, 153, 74), rgb(242, 201, 76));"
      },
      {
          "name": "Coal",
          "color": "background: linear-gradient(to right, rgb(235, 87, 87), rgb(0, 0, 0));"
      },
      {
          "name": "Html",
          "color": "background: linear-gradient(to right, rgb(228, 77, 38), rgb(241, 101, 41));"
      },
      {
          "name": "Cinnamint",
          "color": "background: linear-gradient(to right, rgb(74, 194, 154), rgb(189, 255, 243));"
      },
      {
          "name": "Maldives",
          "color": "background: linear-gradient(to right, rgb(178, 254, 250), rgb(14, 210, 247));"
      },
      {
          "name": "Mini",
          "color": "background: linear-gradient(to right, rgb(48, 232, 191), rgb(255, 130, 53));"
      },
      {
          "name": "Sha la la",
          "color": "background: linear-gradient(to right, rgb(214, 109, 117), rgb(226, 149, 135));"
      },
      {
          "name": "Purplepine",
          "color": "background: linear-gradient(to right, rgb(32, 0, 44), rgb(203, 180, 212));"
      },
      {
          "name": "Celestial",
          "color": "background: linear-gradient(to right, rgb(195, 55, 100), rgb(29, 38, 113));"
      },
      {
          "name": "Learning and Leading",
          "color": "background: linear-gradient(to right, rgb(247, 151, 30), rgb(255, 210, 0));"
      },
      {
          "name": "Pacific Dream",
          "color": "background: linear-gradient(to right, rgb(52, 232, 158), rgb(15, 52, 67));"
      },
      {
          "name": "Venice",
          "color": "background: linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232));"
      },
      {
          "name": "Orca",
          "color": "background: linear-gradient(to right, rgb(68, 160, 141), rgb(9, 54, 55));"
      },
      {
          "name": "Love and Liberty",
          "color": "background: linear-gradient(to right, rgb(32, 1, 34), rgb(111, 0, 0));"
      },
      {
          "name": "Very Blue",
          "color": "background: linear-gradient(to right, rgb(5, 117, 230), rgb(2, 27, 121));"
      },
      {
          "name": "Can You Feel The Love Tonight",
          "color": "background: linear-gradient(to right, rgb(69, 104, 220), rgb(176, 106, 179));"
      },
      {
          "name": "The Blue Lagoon",
          "color": "background: linear-gradient(to right, rgb(67, 198, 172), rgb(25, 22, 84));"
      },
      {
          "name": "Under the Lake",
          "color": "background: linear-gradient(to right, rgb(9, 48, 40), rgb(35, 122, 87));"
      },
      {
          "name": "Honey Dew",
          "color": "background: linear-gradient(to right, rgb(67, 198, 172), rgb(248, 255, 174));"
      },
      {
          "name": "Roseanna",
          "color": "background: linear-gradient(to right, rgb(255, 175, 189), rgb(255, 195, 160));"
      },
      {
          "name": "What lies Beyond",
          "color": "background: linear-gradient(to right, rgb(240, 242, 240), rgb(0, 12, 64));"
      },
      {
          "name": "Rose Colored Lenses",
          "color": "background: linear-gradient(to right, rgb(232, 203, 192), rgb(99, 111, 164));"
      },
      {
          "name": "EasyMed",
          "color": "background: linear-gradient(to right, rgb(220, 227, 91), rgb(69, 182, 73));"
      },
      {
          "name": "Cocoaa Ice",
          "color": "background: linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255));"
      },
      {
          "name": "Jodhpur",
          "color": "background: linear-gradient(to right, rgb(156, 236, 251), rgb(101, 199, 247), rgb(0, 82, 212));"
      },
      {
          "name": "Jaipur",
          "color": "background: linear-gradient(to right, rgb(219, 230, 246), rgb(197, 121, 109));"
      },
      {
          "name": "Vice City",
          "color": "background: linear-gradient(to right, rgb(52, 148, 230), rgb(236, 110, 173));"
      },
      {
          "name": "Mild",
          "color": "background: linear-gradient(to right, rgb(103, 178, 111), rgb(76, 162, 205));"
      },
      {
          "name": "Dawn",
          "color": "background: linear-gradient(to right, rgb(243, 144, 79), rgb(59, 67, 113));"
      },
      {
          "name": "Ibiza Sunset",
          "color": "background: linear-gradient(to right, rgb(238, 9, 121), rgb(255, 106, 0));"
      },
      {
          "name": "Radar",
          "color": "background: linear-gradient(to right, rgb(167, 112, 239), rgb(207, 139, 243), rgb(253, 185, 155));"
      },
      {
          "name": "80's Purple",
          "color": "background: linear-gradient(to right, rgb(65, 41, 90), rgb(47, 7, 67));"
      },
      {
          "name": "Black Rosé",
          "color": "background: linear-gradient(to right, rgb(244, 196, 243), rgb(252, 103, 250));"
      },
      {
          "name": "Brady Brady Fun Fun",
          "color": "background: linear-gradient(to right, rgb(0, 195, 255), rgb(255, 255, 28));"
      },
      {
          "name": "Ed's Sunset Gradient",
          "color": "background: linear-gradient(to right, rgb(255, 126, 95), rgb(254, 180, 123));"
      },
      {
          "name": "Snapchat",
          "color": "background: linear-gradient(to right, rgb(255, 252, 0), rgb(255, 255, 255));"
      },
      {
          "name": "Cosmic Fusion",
          "color": "background: linear-gradient(to right, rgb(255, 0, 204), rgb(51, 51, 153));"
      },
      {
          "name": "Nepal",
          "color": "background: linear-gradient(to right, rgb(222, 97, 97), rgb(38, 87, 235));"
      },
      {
          "name": "Azure Pop",
          "color": "background: linear-gradient(to right, rgb(239, 50, 217), rgb(137, 255, 253));"
      },
      {
          "name": "Love Couple",
          "color": "background: linear-gradient(to right, rgb(58, 97, 134), rgb(137, 37, 62));"
      },
      {
          "name": "Disco",
          "color": "background: linear-gradient(to right, rgb(78, 205, 196), rgb(85, 98, 112));"
      },
      {
          "name": "Limeade",
          "color": "background: linear-gradient(to right, rgb(161, 255, 206), rgb(250, 255, 209));"
      },
      {
          "name": "Dania",
          "color": "background: linear-gradient(to right, rgb(190, 147, 197), rgb(123, 198, 204));"
      },
      {
          "name": "50 Shades of Grey",
          "color": "background: linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80));"
      },
      {
          "name": "Jupiter",
          "color": "background: linear-gradient(to right, rgb(255, 216, 155), rgb(25, 84, 123));"
      },
      {
          "name": "IIIT Delhi",
          "color": "background: linear-gradient(to right, rgb(128, 128, 128), rgb(63, 173, 168));"
      },
      {
          "name": "Sun on the Horizon",
          "color": "background: linear-gradient(to right, rgb(252, 234, 187), rgb(248, 181, 0));"
      },
      {
          "name": "Blood Red",
          "color": "background: linear-gradient(to right, rgb(248, 80, 50), rgb(231, 56, 39));"
      },
      {
          "name": "Sherbert",
          "color": "background: linear-gradient(to right, rgb(247, 157, 0), rgb(100, 243, 140));"
      },
      {
          "name": "Firewatch",
          "color": "background: linear-gradient(to right, rgb(203, 45, 62), rgb(239, 71, 58));"
      },
      {
          "name": "Lush",
          "color": "background: linear-gradient(to right, rgb(86, 171, 47), rgb(168, 224, 99));"
      },
      {
          "name": "Frost",
          "color": "background: linear-gradient(to right, rgb(0, 4, 40), rgb(0, 78, 146));"
      },
      {
          "name": "Mauve",
          "color": "background: linear-gradient(to right, rgb(66, 39, 90), rgb(115, 75, 109));"
      },
      {
          "name": "Royal",
          "color": "background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));"
      },
      {
          "name": "Minimal Red",
          "color": "background: linear-gradient(to right, rgb(240, 0, 0), rgb(220, 40, 30));"
      },
      {
          "name": "Dusk",
          "color": "background: linear-gradient(to right, rgb(44, 62, 80), rgb(253, 116, 108));"
      },
      {
          "name": "Deep Sea Space",
          "color": "background: linear-gradient(to right, rgb(44, 62, 80), rgb(76, 161, 175));"
      },
      {
          "name": "Grapefruit Sunset",
          "color": "background: linear-gradient(to right, rgb(233, 100, 67), rgb(144, 78, 149));"
      },
      {
          "name": "Sunset",
          "color": "background: linear-gradient(to right, rgb(11, 72, 107), rgb(245, 98, 23));"
      },
      {
          "name": "Solid Vault",
          "color": "background: linear-gradient(to right, rgb(58, 123, 213), rgb(58, 96, 115));"
      },
      {
          "name": "Bright Vault",
          "color": "background: linear-gradient(to right, rgb(0, 210, 255), rgb(146, 141, 171));"
      },
      {
          "name": "Politics",
          "color": "background: linear-gradient(to right, rgb(33, 150, 243), rgb(244, 67, 54));"
      },
      {
          "name": "Sweet Morning",
          "color": "background: linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113));"
      },
      {
          "name": "Sylvia",
          "color": "background: linear-gradient(to right, rgb(255, 75, 31), rgb(255, 144, 104));"
      },
      {
          "name": "Transfile",
          "color": "background: linear-gradient(to right, rgb(22, 191, 253), rgb(203, 48, 102));"
      },
      {
          "name": "Tranquil",
          "color": "background: linear-gradient(to right, rgb(238, 205, 163), rgb(239, 98, 159));"
      },
      {
          "name": "Red Ocean",
          "color": "background: linear-gradient(to right, rgb(29, 67, 80), rgb(164, 57, 49));"
      },
      {
          "name": "Shahabi",
          "color": "background: linear-gradient(to right, rgb(168, 0, 119), rgb(102, 255, 0));"
      },
      {
          "name": "Alihossein",
          "color": "background: linear-gradient(to right, rgb(247, 255, 0), rgb(219, 54, 164));"
      },
      {
          "name": "Ali",
          "color": "background: linear-gradient(to right, rgb(255, 75, 31), rgb(31, 221, 255));"
      },
      {
          "name": "Purple White",
          "color": "background: linear-gradient(to right, rgb(186, 83, 112), rgb(244, 226, 216));"
      },
      {
          "name": "Colors Of Sky",
          "color": "background: linear-gradient(to right, rgb(224, 234, 252), rgb(207, 222, 243));"
      },
      {
          "name": "Decent",
          "color": "background: linear-gradient(to right, rgb(76, 161, 175), rgb(196, 224, 229));"
      },
      {
          "name": "Deep Space",
          "color": "background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));"
      },
      {
          "name": "Dark Skies",
          "color": "background: linear-gradient(to right, rgb(75, 121, 161), rgb(40, 62, 81));"
      },
      {
          "name": "Suzy",
          "color": "background: linear-gradient(to right, rgb(131, 77, 155), rgb(208, 78, 214));"
      },
      {
          "name": "Superman",
          "color": "background: linear-gradient(to right, rgb(0, 153, 247), rgb(241, 23, 18));"
      },
      {
          "name": "Nighthawk",
          "color": "background: linear-gradient(to right, rgb(41, 128, 185), rgb(44, 62, 80));"
      },
      {
          "name": "Forest",
          "color": "background: linear-gradient(to right, rgb(90, 63, 55), rgb(44, 119, 68));"
      },
      {
          "name": "Miami Dolphins",
          "color": "background: linear-gradient(to right, rgb(77, 160, 176), rgb(211, 157, 56));"
      },
      {
          "name": "Minnesota Vikings",
          "color": "background: linear-gradient(to right, rgb(86, 20, 176), rgb(219, 214, 92));"
      },
      {
          "name": "Christmas",
          "color": "background: linear-gradient(to right, rgb(47, 115, 54), rgb(170, 58, 56));"
      },
      {
          "name": "Joomla",
          "color": "background: linear-gradient(to right, rgb(30, 60, 114), rgb(42, 82, 152));"
      },
      {
          "name": "Pizelex",
          "color": "background: linear-gradient(to right, rgb(17, 67, 87), rgb(242, 148, 146));"
      },
      {
          "name": "Haikus",
          "color": "background: linear-gradient(to right, rgb(253, 116, 108), rgb(255, 144, 104));"
      },
      {
          "name": "Pale Wood",
          "color": "background: linear-gradient(to right, rgb(234, 205, 163), rgb(214, 174, 123));"
      },
      {
          "name": "Purplin",
          "color": "background: linear-gradient(to right, rgb(106, 48, 147), rgb(160, 68, 255));"
      },
      {
          "name": "Inbox",
          "color": "background: linear-gradient(to right, rgb(69, 127, 202), rgb(86, 145, 200));"
      },
      {
          "name": "Blush",
          "color": "background: linear-gradient(to right, rgb(178, 69, 146), rgb(241, 95, 121));"
      },
      {
          "name": "Back to the Future",
          "color": "background: linear-gradient(to right, rgb(192, 36, 37), rgb(240, 203, 53));"
      },
      {
          "name": "Poncho",
          "color": "background: linear-gradient(to right, rgb(64, 58, 62), rgb(190, 88, 105));"
      },
      {
          "name": "Green and Blue",
          "color": "background: linear-gradient(to right, rgb(194, 229, 156), rgb(100, 179, 244));"
      },
      {
          "name": "Light Orange",
          "color": "background: linear-gradient(to right, rgb(255, 183, 94), rgb(237, 143, 3));"
      },
      {
          "name": "Netflix",
          "color": "background: linear-gradient(to right, rgb(142, 14, 0), rgb(31, 28, 24));"
      },
      {
          "name": "Little Leaf",
          "color": "background: linear-gradient(to right, rgb(118, 184, 82), rgb(141, 194, 111));"
      },
      {
          "name": "Deep Purple",
          "color": "background: linear-gradient(to right, rgb(103, 58, 183), rgb(81, 45, 168));"
      },
      {
          "name": "Back To Earth",
          "color": "background: linear-gradient(to right, rgb(0, 201, 255), rgb(146, 254, 157));"
      },
      {
          "name": "Master Card",
          "color": "background: linear-gradient(to right, rgb(244, 107, 69), rgb(238, 168, 73));"
      },
      {
          "name": "Clear Sky",
          "color": "background: linear-gradient(to right, rgb(0, 92, 151), rgb(54, 55, 149));"
      },
      {
          "name": "Passion",
          "color": "background: linear-gradient(to right, rgb(229, 57, 53), rgb(227, 93, 91));"
      },
      {
          "name": "Timber",
          "color": "background: linear-gradient(to right, rgb(252, 0, 255), rgb(0, 219, 222));"
      },
      {
          "name": "Between Night and Day",
          "color": "background: linear-gradient(to right, rgb(44, 62, 80), rgb(52, 152, 219));"
      },
      {
          "name": "Sage Persuasion",
          "color": "background: linear-gradient(to right, rgb(204, 204, 178), rgb(117, 117, 25));"
      },
      {
          "name": "Lizard",
          "color": "background: linear-gradient(to right, rgb(48, 67, 82), rgb(215, 210, 204));"
      },
      {
          "name": "Piglet",
          "color": "background: linear-gradient(to right, rgb(238, 156, 167), rgb(255, 221, 225));"
      },
      {
          "name": "Dark Knight",
          "color": "background: linear-gradient(to right, rgb(186, 139, 2), rgb(24, 24, 24));"
      },
      {
          "name": "Curiosity blue",
          "color": "background: linear-gradient(to right, rgb(82, 82, 82), rgb(61, 114, 180));"
      },
      {
          "name": "Ukraine",
          "color": "background: linear-gradient(to right, rgb(0, 79, 249), rgb(255, 249, 76));"
      },
      {
          "name": "Green to dark",
          "color": "background: linear-gradient(to right, rgb(106, 145, 19), rgb(20, 21, 23));"
      },
      {
          "name": "Fresh Turboscent",
          "color": "background: linear-gradient(to right, rgb(241, 242, 181), rgb(19, 80, 88));"
      },
      {
          "name": "Koko Caramel",
          "color": "background: linear-gradient(to right, rgb(209, 145, 60), rgb(255, 209, 148));"
      },
      {
          "name": "Virgin America",
          "color": "background: linear-gradient(to right, rgb(123, 67, 151), rgb(220, 36, 48));"
      },
      {
          "name": "Portrait",
          "color": "background: linear-gradient(to right, rgb(142, 158, 171), rgb(238, 242, 243));"
      },
      {
          "name": "Turquoise flow",
          "color": "background: linear-gradient(to right, rgb(19, 106, 138), rgb(38, 120, 113));"
      },
      {
          "name": "Vine",
          "color": "background: linear-gradient(to right, rgb(0, 191, 143), rgb(0, 21, 16));"
      },
      {
          "name": "Flickr",
          "color": "background: linear-gradient(to right, rgb(255, 0, 132), rgb(51, 0, 27));"
      },
      {
          "name": "Instagram",
          "color": "background: linear-gradient(to right, rgb(131, 58, 180), rgb(253, 29, 29), rgb(252, 176, 69));"
      },
      {
          "name": "Atlas",
          "color": "background: linear-gradient(to right, rgb(254, 172, 94), rgb(199, 121, 208), rgb(75, 192, 200));"
      },
      {
          "name": "Twitch",
          "color": "background: linear-gradient(to right, rgb(100, 65, 165), rgb(42, 8, 69));"
      },
      {
          "name": "Pastel Orange at the Sun",
          "color": "background: linear-gradient(to right, rgb(255, 179, 71), rgb(255, 204, 51));"
      },
      {
          "name": "Endless River",
          "color": "background: linear-gradient(to right, rgb(67, 206, 162), rgb(24, 90, 157));"
      },
      {
          "name": "Predawn",
          "color": "background: linear-gradient(to right, rgb(255, 161, 127), rgb(0, 34, 62));"
      },
      {
          "name": "Purple Bliss",
          "color": "background: linear-gradient(to right, rgb(54, 0, 51), rgb(11, 135, 147));"
      },
      {
          "name": "Talking To Mice Elf",
          "color": "background: linear-gradient(to right, rgb(148, 142, 153), rgb(46, 20, 55));"
      },
      {
          "name": "Hersheys",
          "color": "background: linear-gradient(to right, rgb(30, 19, 12), rgb(154, 132, 120));"
      },
      {
          "name": "Crazy Orange I",
          "color": "background: linear-gradient(to right, rgb(211, 131, 18), rgb(168, 50, 121));"
      },
      {
          "name": "Between The Clouds",
          "color": "background: linear-gradient(to right, rgb(115, 200, 169), rgb(55, 59, 68));"
      },
      {
          "name": "Metallic Toad",
          "color": "background: linear-gradient(to right, rgb(171, 186, 171), rgb(255, 255, 255));"
      },
      {
          "name": "Martini",
          "color": "background: linear-gradient(to right, rgb(253, 252, 71), rgb(36, 254, 65));"
      },
      {
          "name": "Friday",
          "color": "background: linear-gradient(to right, rgb(131, 164, 212), rgb(182, 251, 255));"
      },
      {
          "name": "ServQuick",
          "color": "background: linear-gradient(to right, rgb(72, 85, 99), rgb(41, 50, 60));"
      },
      {
          "name": "Behongo",
          "color": "background: linear-gradient(to right, rgb(82, 194, 52), rgb(6, 23, 0));"
      },
      {
          "name": "SoundCloud",
          "color": "background: linear-gradient(to right, rgb(254, 140, 0), rgb(248, 54, 0));"
      },
      {
          "name": "Facebook Messenger",
          "color": "background: linear-gradient(to right, rgb(0, 198, 255), rgb(0, 114, 255));"
      },
      {
          "name": "Shore",
          "color": "background: linear-gradient(to right, rgb(112, 225, 245), rgb(255, 209, 148));"
      },
      {
          "name": "Cheer Up Emo Kid",
          "color": "background: linear-gradient(to right, rgb(85, 98, 112), rgb(255, 107, 107));"
      },
      {
          "name": "Amethyst",
          "color": "background: linear-gradient(to right, rgb(157, 80, 187), rgb(110, 72, 170));"
      },
      {
          "name": "Man of Steel",
          "color": "background: linear-gradient(to right, rgb(120, 2, 6), rgb(6, 17, 97));"
      },
      {
          "name": "Neon Life",
          "color": "background: linear-gradient(to right, rgb(179, 255, 171), rgb(18, 255, 247));"
      },
      {
          "name": "Teal Love",
          "color": "background: linear-gradient(to right, rgb(170, 255, 169), rgb(17, 255, 189));"
      },
      {
          "name": "Red Mist",
          "color": "background: linear-gradient(to right, rgb(0, 0, 0), rgb(231, 76, 60));"
      },
      {
          "name": "Starfall",
          "color": "background: linear-gradient(to right, rgb(240, 194, 123), rgb(75, 18, 72));"
      },
      {
          "name": "Dance To Forget",
          "color": "background: linear-gradient(to right, rgb(255, 78, 80), rgb(249, 212, 35));"
      },
      {
          "name": "Parklife",
          "color": "background: linear-gradient(to right, rgb(173, 209, 0), rgb(123, 146, 10));"
      },
      {
          "name": "Cherryblossoms",
          "color": "background: linear-gradient(to right, rgb(251, 211, 233), rgb(187, 55, 125));"
      },
      {
          "name": "Ash",
          "color": "background: linear-gradient(to right, rgb(96, 108, 136), rgb(63, 76, 107));"
      },
      {
          "name": "Virgin",
          "color": "background: linear-gradient(to right, rgb(201, 255, 191), rgb(255, 175, 189));"
      },
      {
          "name": "Earthly",
          "color": "background: linear-gradient(to right, rgb(100, 145, 115), rgb(219, 213, 164));"
      },
      {
          "name": "Dirty Fog",
          "color": "background: linear-gradient(to right, rgb(185, 147, 214), rgb(140, 166, 219));"
      },
      {
          "name": "The Strain",
          "color": "background: linear-gradient(to right, rgb(135, 0, 0), rgb(25, 10, 5));"
      },
      {
          "name": "Reef",
          "color": "background: linear-gradient(to right, rgb(0, 210, 255), rgb(58, 123, 213));"
      },
      {
          "name": "Candy",
          "color": "background: linear-gradient(to right, rgb(211, 149, 155), rgb(191, 230, 186));"
      },
      {
          "name": "Autumn",
          "color": "background: linear-gradient(to right, rgb(218, 210, 153), rgb(176, 218, 185));"
      },
      {
          "name": "Nelson",
          "color": "background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));"
      },
      {
          "name": "Winter",
          "color": "background: linear-gradient(to right, rgb(230, 218, 218), rgb(39, 64, 70));"
      },
      {
          "name": "Forever Lost",
          "color": "background: linear-gradient(to right, rgb(93, 65, 87), rgb(168, 202, 186));"
      },
      {
          "name": "Almost",
          "color": "background: linear-gradient(to right, rgb(221, 214, 243), rgb(250, 172, 168));"
      },
      {
          "name": "Moor",
          "color": "background: linear-gradient(to right, rgb(97, 97, 97), rgb(155, 197, 195));"
      },
      {
          "name": "Aqualicious",
          "color": "background: linear-gradient(to right, rgb(80, 201, 195), rgb(150, 222, 218));"
      },
      {
          "name": "Misty Meadow",
          "color": "background: linear-gradient(to right, rgb(33, 95, 0), rgb(228, 228, 217));"
      },
      {
          "name": "Kyoto",
          "color": "background: linear-gradient(to right, rgb(194, 21, 0), rgb(255, 197, 0));"
      },
      {
          "name": "Sirius Tamed",
          "color": "background: linear-gradient(to right, rgb(239, 239, 187), rgb(212, 211, 221));"
      },
      {
          "name": "Jonquil",
          "color": "background: linear-gradient(to right, rgb(255, 238, 238), rgb(221, 239, 187));"
      },
      {
          "name": "Petrichor",
          "color": "background: linear-gradient(to right, rgb(102, 102, 0), rgb(153, 153, 102));"
      },
      {
          "name": "A Lost Memory",
          "color": "background: linear-gradient(to right, rgb(222, 98, 98), rgb(255, 184, 140));"
      },
      {
          "name": "Vasily",
          "color": "background: linear-gradient(to right, rgb(233, 211, 98), rgb(51, 51, 51));"
      },
      {
          "name": "Blurry Beach",
          "color": "background: linear-gradient(to right, rgb(213, 51, 105), rgb(203, 173, 109));"
      },
      {
          "name": "Namn",
          "color": "background: linear-gradient(to right, rgb(167, 55, 55), rgb(122, 40, 40));"
      },
      {
          "name": "Day Tripper",
          "color": "background: linear-gradient(to right, rgb(248, 87, 166), rgb(255, 88, 88));"
      },
      {
          "name": "Pinot Noir",
          "color": "background: linear-gradient(to right, rgb(75, 108, 183), rgb(24, 40, 72));"
      },
      {
          "name": "Miaka",
          "color": "background: linear-gradient(to right, rgb(252, 53, 76), rgb(10, 191, 188));"
      },
      {
          "name": "Army",
          "color": "background: linear-gradient(to right, rgb(65, 77, 11), rgb(114, 122, 23));"
      },
      {
          "name": "Shrimpy",
          "color": "background: linear-gradient(to right, rgb(228, 58, 21), rgb(230, 82, 69));"
      },
      {
          "name": "Influenza",
          "color": "background: linear-gradient(to right, rgb(192, 72, 72), rgb(72, 0, 72));"
      },
      {
          "name": "Calm Darya",
          "color": "background: linear-gradient(to right, rgb(95, 44, 130), rgb(73, 160, 157));"
      },
      {
          "name": "Bourbon",
          "color": "background: linear-gradient(to right, rgb(236, 111, 102), rgb(243, 161, 131));"
      },
      {
          "name": "Stellar",
          "color": "background: linear-gradient(to right, rgb(116, 116, 191), rgb(52, 138, 199));"
      },
      {
          "name": "Clouds",
          "color": "background: linear-gradient(to right, rgb(236, 233, 230), rgb(255, 255, 255));"
      },
      {
          "name": "Moonrise",
          "color": "background: linear-gradient(to right, rgb(218, 226, 248), rgb(214, 164, 164));"
      },
      {
          "name": "Peach",
          "color": "background: linear-gradient(to right, rgb(237, 66, 100), rgb(255, 237, 188));"
      },
      {
          "name": "Dracula",
          "color": "background: linear-gradient(to right, rgb(220, 36, 36), rgb(74, 86, 157));"
      },
      {
          "name": "Mantle",
          "color": "background: linear-gradient(to right, rgb(36, 198, 220), rgb(81, 74, 157));"
      },
      {
          "name": "Titanium",
          "color": "background: linear-gradient(to right, rgb(40, 48, 72), rgb(133, 147, 152));"
      },
      {
          "name": "Opa",
          "color": "background: linear-gradient(to right, rgb(61, 126, 170), rgb(255, 228, 122));"
      },
      {
          "name": "Sea Blizz",
          "color": "background: linear-gradient(to right, rgb(28, 216, 210), rgb(147, 237, 199));"
      },
      {
          "name": "Midnight City",
          "color": "background: linear-gradient(to right, rgb(35, 37, 38), rgb(65, 67, 69));"
      },
      {
          "name": "Mystic",
          "color": "background: linear-gradient(to right, rgb(117, 127, 154), rgb(215, 221, 232));"
      },
      {
          "name": "Shroom Haze",
          "color": "background: linear-gradient(to right, rgb(92, 37, 141), rgb(67, 137, 162));"
      },
      {
          "name": "Moss",
          "color": "background: linear-gradient(to right, rgb(19, 78, 94), rgb(113, 178, 128));"
      },
      {
          "name": "Bora Bora",
          "color": "background: linear-gradient(to right, rgb(43, 192, 228), rgb(234, 236, 198));"
      },
      {
          "name": "Venice Blue",
          "color": "background: linear-gradient(to right, rgb(8, 80, 120), rgb(133, 216, 206));"
      },
      {
          "name": "Electric Violet",
          "color": "background: linear-gradient(to right, rgb(71, 118, 230), rgb(142, 84, 233));"
      },
      {
          "name": "Kashmir",
          "color": "background: linear-gradient(to right, rgb(97, 67, 133), rgb(81, 99, 149));"
      },
      {
          "name": "Steel Gray",
          "color": "background: linear-gradient(to right, rgb(31, 28, 44), rgb(146, 141, 171));"
      },
      {
          "name": "Mirage",
          "color": "background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));"
      },
      {
          "name": "Juicy Orange",
          "color": "background: linear-gradient(to right, rgb(255, 128, 8), rgb(255, 200, 55));"
      },
      {
          "name": "Mojito",
          "color": "background: linear-gradient(to right, rgb(29, 151, 108), rgb(147, 249, 185));"
      },
      {
          "name": "Cherry",
          "color": "background: linear-gradient(to right, rgb(235, 51, 73), rgb(244, 92, 67));"
      },
      {
          "name": "Pinky",
          "color": "background: linear-gradient(to right, rgb(221, 94, 137), rgb(247, 187, 151));"
      },
      {
          "name": "Sea Weed",
          "color": "background: linear-gradient(to right, rgb(76, 184, 196), rgb(60, 211, 173));"
      },
      {
          "name": "Stripe",
          "color": "background: linear-gradient(to right, rgb(31, 162, 255), rgb(18, 216, 250), rgb(166, 255, 203));"
      },
      {
          "name": "Purple Paradise",
          "color": "background: linear-gradient(to right, rgb(29, 43, 100), rgb(248, 205, 218));"
      },
      {
          "name": "Sunrise",
          "color": "background: linear-gradient(to right, rgb(255, 81, 47), rgb(240, 152, 25));"
      },
      {
          "name": "Aqua Marine",
          "color": "background: linear-gradient(to right, rgb(26, 41, 128), rgb(38, 208, 206));"
      },
      {
          "name": "Aubergine",
          "color": "background: linear-gradient(to right, rgb(170, 7, 107), rgb(97, 4, 95));"
      },
      {
          "name": "Bloody Mary",
          "color": "background: linear-gradient(to right, rgb(255, 81, 47), rgb(221, 36, 118));"
      },
      {
          "name": "Mango Pulp",
          "color": "background: linear-gradient(to right, rgb(240, 152, 25), rgb(237, 222, 93));"
      },
      {
          "name": "Frozen",
          "color": "background: linear-gradient(to right, rgb(64, 59, 74), rgb(231, 233, 187));"
      },
      {
          "name": "Rose Water",
          "color": "background: linear-gradient(to right, rgb(229, 93, 135), rgb(95, 195, 228));"
      },
      {
          "name": "Horizon",
          "color": "background: linear-gradient(to right, rgb(0, 57, 115), rgb(229, 229, 190));"
      },
      {
          "name": "Monte Carlo",
          "color": "background: linear-gradient(to right, rgb(204, 149, 192), rgb(219, 212, 180), rgb(122, 161, 210));"
      },
      {
          "name": "Lemon Twist",
          "color": "background: linear-gradient(to right, rgb(60, 165, 92), rgb(181, 172, 73));"
      },
      {
          "name": "Emerald Water",
          "color": "background: linear-gradient(to right, rgb(52, 143, 80), rgb(86, 180, 211));"
      },
      {
          "name": "Intuitive Purple",
          "color": "background: linear-gradient(to right, rgb(218, 34, 255), rgb(151, 51, 238));"
      },
      {
          "name": "Green Beach",
          "color": "background: linear-gradient(to right, rgb(2, 170, 176), rgb(0, 205, 172));"
      },
      {
          "name": "Sunny Days",
          "color": "background: linear-gradient(to right, rgb(237, 229, 116), rgb(225, 245, 196));"
      },
      {
          "name": "Playing with Reds",
          "color": "background: linear-gradient(to right, rgb(211, 16, 39), rgb(234, 56, 77));"
      },
      {
          "name": "Harmonic Energy",
          "color": "background: linear-gradient(to right, rgb(22, 160, 133), rgb(244, 208, 63));"
      },
      {
          "name": "Cool Brown",
          "color": "background: linear-gradient(to right, rgb(96, 56, 19), rgb(178, 159, 148));"
      },
      {
          "name": "YouTube",
          "color": "background: linear-gradient(to right, rgb(229, 45, 39), rgb(179, 18, 23));"
      },
      {
          "name": "Noon to Dusk",
          "color": "background: linear-gradient(to right, rgb(255, 110, 127), rgb(191, 233, 255));"
      },
      {
          "name": "Hazel",
          "color": "background: linear-gradient(to right, rgb(119, 161, 211), rgb(121, 203, 202), rgb(230, 132, 174));"
      },
      {
          "name": "Nimvelo",
          "color": "background: linear-gradient(to right, rgb(49, 71, 85), rgb(38, 160, 218));"
      },
      {
          "name": "Sea Blue",
          "color": "background: linear-gradient(to right, rgb(43, 88, 118), rgb(78, 67, 118));"
      },
      {
          "name": "Blooker20",
          "color": "background: linear-gradient(to right, rgb(230, 92, 0), rgb(249, 212, 35));"
      },
      {
          "name": "Sexy Blue",
          "color": "background: linear-gradient(to right, rgb(33, 147, 176), rgb(109, 213, 237));"
      },
      {
          "name": "Purple Love",
          "color": "background: linear-gradient(to right, rgb(204, 43, 94), rgb(117, 58, 136));"
      },
      {
          "name": "DIMIGO",
          "color": "background: linear-gradient(to right, rgb(236, 0, 140), rgb(252, 103, 103));"
      },
      {
          "name": "Skyline",
          "color": "background: linear-gradient(to right, rgb(20, 136, 204), rgb(43, 50, 178));"
      },
      {
          "name": "Sel",
          "color": "background: linear-gradient(to right, rgb(0, 70, 127), rgb(165, 204, 130));"
      },
      {
          "name": "Sky",
          "color": "background: linear-gradient(to right, rgb(7, 101, 133), rgb(255, 255, 255));"
      },
      {
          "name": "Petrol",
          "color": "background: linear-gradient(to right, rgb(187, 210, 197), rgb(83, 105, 118));"
      },
      {
          "name": "Anamnisar",
          "color": "background: linear-gradient(to right, rgb(151, 150, 240), rgb(251, 199, 212));"
      },
      {
          "name": "Copper",
          "color": "background: linear-gradient(to right, rgb(183, 152, 145), rgb(148, 113, 107));"
      },
      {
          "name": "Royal Blue + Petrol",
          "color": "background: linear-gradient(to right, rgb(187, 210, 197), rgb(83, 105, 118), rgb(41, 46, 73));"
      },
      {
          "name": "Royal Blue",
          "color": "background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));"
      },
      {
          "name": "Windy",
          "color": "background: linear-gradient(to right, rgb(172, 182, 229), rgb(134, 253, 232));"
      },
      {
          "name": "Rea",
          "color": "background: linear-gradient(to right, rgb(255, 224, 0), rgb(121, 159, 12));"
      },
      {
          "name": "Bupe",
          "color": "background: linear-gradient(to right, rgb(0, 65, 106), rgb(228, 229, 230));"
      },
      {
          "name": "Mango",
          "color": "background: linear-gradient(to right, rgb(255, 226, 89), rgb(255, 167, 81));"
      },
      {
          "name": "Reaqua",
          "color": "background: linear-gradient(to right, rgb(121, 159, 12), rgb(172, 187, 120));"
      },
      {
          "name": "Lunada",
          "color": "background: linear-gradient(to right, rgb(84, 51, 255), rgb(32, 189, 255), rgb(165, 254, 203));"
      },
      {
          "name": "Bluelagoo",
          "color": "background: linear-gradient(to right, rgb(0, 82, 212), rgb(67, 100, 247), rgb(111, 177, 252));"
      },
      {
          "name": "Anwar",
          "color": "background: linear-gradient(to right, rgb(51, 77, 80), rgb(203, 202, 165));"
      },
      {
          "name": "Combi",
          "color": "background: linear-gradient(to right, rgb(0, 65, 106), rgb(121, 159, 12), rgb(255, 224, 0));"
      },
      {
          "name": "Ver Black",
          "color": "background: linear-gradient(to right, rgb(247, 248, 248), rgb(172, 187, 120));"
      },
      {
          "name": "Ver",
          "color": "background: linear-gradient(to right, rgb(255, 224, 0), rgb(121, 159, 12));"
      },
      {
          "name": "Blu",
          "color": "background: linear-gradient(to right, rgb(0, 65, 106), rgb(228, 229, 230));"
      }
    ]

    for (let i = 0; i < x.length; i++) {
        const element = x[i];
    let gradient:gradientModel = {
        id:"",
        type:this.gradientType[0].code, 
        demoCSS:element.color, 
        about:this.gradientType[0].name, info:this.gradientType[0].info, 
        by:"Dipesh Bhoir", dial_code:"+91", contact:"9892381514",
        name: element.name, data:element.color,
        active:true, bulk:true,
        sin:null
      }

    this.auth.submitGRADIENT(gradient).then(() => {
        //this.dialogRef.close()
      }).catch(() => {
        this.makingChanges = false;
    })   
    }
  }
*/

  submit(){
    this.makingChanges = true;
    if( !this.gradient.type || !this.gradient.name || !this.gradient.data  || !this.gradient.demoCSS || !this.gradient.by || !this.gradient.contact ){
      this.makingChanges = false;
    }else{
      const x = this.resource.gradientList[this.resource.gradientList.findIndex(i => i.code == this.gradient.type)];
      this.gradient.about = x.name;
      this.gradient.info = x.info;

      console.log(this.gradient)
      this.auth.submitGRADIENT(this.gradient).then(() => {
        this.dialogRef.close()
      }).catch(() => {
        this.makingChanges = false;
      })
    }
  }

}

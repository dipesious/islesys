import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, startWith, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ResourceService } from 'src/app/services/resource.service';
import { mapModel } from 'src/app/universal.model';
import { AddMapComponent } from './add-map/add-map.component';

import { getStorage } from "firebase/storage";
import { AlgoMapService } from 'src/app/services/algorithm/algo-map.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-list-maps',
  templateUrl: './list-maps.component.html',
  styleUrls: ['./list-maps.component.scss']
})
export class ListMapsComponent implements OnInit {

  links = [
    {title:'Design', link:''},
    {title:'Repo', link:''},
    {title:'License', link:''},
  ]

  searching = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  currentTyp = "";

  globalMaps = [
    { title:"Mercator - World map" , id:"KCchYPIYgNMqfARGXgGB" },
    { title:"Mercator Pacific - World map" , id:"wZZYVnjusfPpcAneEfzL" },
    { title:"Africa", id:"lAGGD1HIzbcpS1aB5K8L" },
    { title:"Caribbean", id:"DzxsjXB0W03vxIZU9Ix1" },
    { title:"Europe", id:"yJY5PAJIpLee3uAjs2YQ" },
    { title:"Indo China", id:"5HdiIHDm81mdN6inP9FP" },
    { title:"Middle East", id:"retQIf6wx0QTWAq1SCJd" },
    { title:"North America", id:"ZKouFGUIXjl0JHJubzPH" },
    { title:"South America", id:"ZCh3pFBe2iOLg7or7LJU" },
  ]
  nationMaps = [
    {title:"Afghanistan", id:"EXrnidf7ArDEriwrAA4q" },
    {title:"Albania", id:"GbBkUYWNlePlshiIfnvI" },
    {title:"Algeria", id:"iANOO8TyYgN45lKlBakR" },
    {title:"Andorra", id:"cPL5FdUGR2iiT1aFZ5FJ" },
    {title:"Angola", id:"427HfmifP5fbecYUnioQ" },
    {title:"Anguilla", id:"3SDfyi4qGeIKmGuPJ35o" },
    {title:"Antigua and Barbuda", id:"eJL7Qd90zx8gagXo6yKt" },
    {title:"Argentina", id:"apQehJk9xzZuYbwAdQUH" },
    {title:"Armenia", id:"boGn3aYCN8HEO8Y32j1P" },
    {title:"Aruba", id:"RZ4B3O23Yh7AY4jAT934" },
    {title:"Australia", id:"SZSmJx7MnYzXyuRc10YY" },
    {title:"Austria", id:"T0cbToHiJblkEK07DsRF" },
    {title:"Azerbaijan", id:"JvGCRv69E4EKohnOPoPx" },
    {title:"Bahamas", id:"9I33F19ai1xtBqUlxFWw" },
    {title:"Bahrain", id:"bxRQFZH6y5IdShjPT6Gh" },
    {title:"Bangladesh", id:"fMn1LuurkaBjLvrDcqt0" },
    {title:"Barbados", id:"TvMI2IrcirWv3ZjiMSIv" },
    {title:"Belarus", id:"bYNieLBHNOgtdqJbycxC" },
    {title:"Belgium", id:"nyxbTozYJ6MaKNi2MYhI" },
    {title:"Belize", id:"chZAR5pHiNAudLG8vR1d" },
    {title:"Benin", id:"6S3uAcUWELSIQ6WLUHRl" },
    {title:"Bermuda", id:"jwZfYPfeOln2Q1KbNMy6" },
    {title:"Bhutan", id:"xnXFskwHLugaoGjjvU3f" },
    {title:"Bolivia", id:"yWGYxbg0EXnf5ds9cqEo" },
    {title:"Bosnia and Herzegovina", id:"hJwt8BegrqA46GzMpx4E" },
    {title:"Botswana", id:"wfOF80BEGQkQ7i7Mj49Q" },
    {title:"Brazil", id:"ZPLW0w0Nb3qeuv9gttUc" },
    {title:"British Virgin Islands", id:"DoOSbPZk0q7jR5DytsMp" },
    {title:"Brunei", id:"rUX54YjRgMMDnLirmyYq" },
    {title:"Bulgaria", id:"4FeGDYlSmg83qH1EZqGB" },
    {title:"Burkina Faso", id:"MjW4T8fDz7SUeWF6vATQ" },
    {title:"Burundi", id:"Cm01x1WXM4nZLxElN1zF" },
    {title:"Cambodia", id:"zNvlt6saCdYtPtUz1wAW" },
    {title:"Cameroon", id:"9CVhYLizGKo2xXpcObfs" },
    {title:"Canada", id:"mtj0hkPGO3XnXh31S0ZD" },
    {title:"Cape Verde", id:"xn7lx7Szi8WPZaAo72eO" },
    {title:"Cayman Islands", id:"sw3GqUBwlq2wPDDKPmdi" },
    {title:"Central African Republic", id:"Us6ZefoDchFLGiXBzvOO" },
    {title:"Chad", id:"BNMiCxBHuScV0kuekb88" },
    {title:"Chile", id:"ix4WilzeqmYUWNxfamBN" },
    {title:"China", id:"at9tXmYElAsy301lhGM7" },
    {title:"Colombia", id:"o1fXEsS56Ksv7YHD3WOt" },
    {title:"Comoros", id:"nRkke9gOoWkPFBcstVCr" },
    {title:"Costa Rica", id:"KQc2sTNviLXE2FNwMkZC" },
    {title:"Croatia", id:"gnSpIenLG7gBFohKT1qv" },
    {title:"Cuba", id:"KZdtYzd7QkU0BT9tltt0" },
    {title:"Curaco (Netherlands)", id:"0FYUlo0cv9EKQWmagPB6" },
    {title:"Cyprus", id:"53LV7VbLD7JfJPOIDSVd" },
    {title:"Czech Republic", id:"J9INLJvvWgKoZxlrlKQK" },
    {title:"Côte d'Ivoire", id:"5maM0goo6oIldntffUw6" },
    {title:"Democratic Republic of the Congo", id:"2NF7Y3Qal25ZFNYu4qZL" },
    {title:"Denmark", id:"t6mPX2xen0ZGyTD4JRx8" },
    {title:"Djibouti", id:"Azy00VSpylD4nJTWWC88" },
    {title:"Dominica", id:"WNQBjrHdo1QX3Ajvx8ne" },
    {title:"Dominican Republic", id:"vcfjbJ9XicvSanl8NPg7" },
    {title:"Ecuador", id:"IeUtKbkWJkiD8Jg6Y2CL" },
    {title:"Egypt", id:"cGfgC4alveUppz1MiH24" },
    {title:"El Salvador", id:"THCprvFcz9yuV44NgzAd" },
    {title:"Equatorial Guinea", id:"LC8DHvoS46cvnsrNZQ0C" },
    {title:"Eritrea", id:"KqMMLwMqYfwg6P6nBIfm" },
    {title:"Estonia", id:"30OmtTFP79GzWH5HfGKB" },
    {title:"Ethiopia", id:"uvcJzj5c4LpsiJ67BGiM" },
    {title:"Faeroe Islands", id:"NqHfaUfvcWd2oH1mvhco" },
    {title:"Falkland Islands", id:"sQyaKZWO8m16lOPqjIH7" },
    {title:"Fiji", id:"u1t28pjL01IrKMatVizx" },
    {title:"Finland", id:"jGR7CL0EXbdXh5y02dWK" },
    {title:"France", id:"ipnA5sm3bImNkSf3wGHa" },
    {title:"French Polynesia", id:"cP54TDIU97l4jyY09miy" },
    {title:"Gabon", id:"Jd8GtZVNUTgIBXBiw3tA" },
    {title:"Georgia", id:"w21jd0QUcKDATgnPD528" },
    {title:"Germany", id:"WKXXRFo7BSlSfFnNwpjY" },
    {title:"Ghana", id:"rKYx9l5nYAwLXEm5Mfge" },
    {title:"Greece", id:"0KIjQuGOx50T52ZRnERd" },
    {title:"Greenland", id:"jswHoE1cgJWQWwFYJaEe" },
    {title:"Grenada", id:"8aVqI9s5It1I9pPGY5XK" },
    {title:"Guatemala", id:"nhJthyrfVmtZn4q7Jmq7" },
    {title:"Guinea", id:"mS8eGB4OHEfOhV52Qvf5" },
    {title:"Guinea-Bissau", id:"dgzmicYGL83Nq5IkEi62" },
    {title:"Guyana", id:"41UKlwwurGUGTYA1GzoT" },
    {title:"Haiti", id:"VvWKwwSraZaxikkesCyS" },
    {title:"Honduras", id:"7DqBJRe5ywRH5sgu7bt3" },
    {title:"Hong Kong", id:"VATAalogj7LVHKJr3XCH" },
    {title:"Hungary", id:"P03dQFpKHRLxp4848ylA" },
    {title:"Iceland", id:"fyNLjCoQJFqOijyNSoAn" },
    {title:"India", id:"VW3kjXIGi9oqbaYrjC6G" },
    {title:"Indonesia", id:"CVFU4spYOdOmDdo24xMg" },
    {title:"Iran", id:"TcWy3aZqprnxEZ0BgNBF" },
    {title:"Iraq", id:"VviWY8G8Pa301GL4tpwP" },
    {title:"Ireland", id:"WlfmGuJ0lJCAOi6vXt3G" },
    {title:"Israel", id:"LxUvcK2nTxYlVVAlK4dl" },
    {title:"Italy", id:"VIX3oszCVxqkH7Smm60A" },
    {title:"Jamaica", id:"axFXQI3saVvM0NrUvraM" },
    {title:"Japan", id:"xPIRKTgglbQhlkrp0Igw" },
    {title:"Jordan", id:"A8aAqsdQu3dHOAGlmepr" },
    {title:"Kazakhstan", id:"Vh6YoEiJFO3E07mg8NUT" },
    {title:"Kenya", id:"eKMOJtFDZXn0ZNu4jbT5" },
    {title:"Kuwait", id:"oEbFh94hDN9f6Jdr9bTV" },
    {title:"Kyrgyzstan", id:"11whIZyznmW4vC5GbC4G" },
    {title:"Laos", id:"bsvpT7bvtYDO5uBZM2Hj" },
    {title:"Latvia", id:"rA6rzjESk9DGJia4RNXx" },
    {title:"Lebanon", id:"mPHMwJv3ttIV14xpq3TX" },
    {title:"Lesotho", id:"iBNYmKPJkmcZjffIcJg3" },
    {title:"Liberia", id:"dJQ7LdJhKw9LSxFA1CdJ" },
    {title:"Libya", id:"gGiuQC91WPNpfSpNAPas" },
    {title:"Liechtenstein", id:"feCrepdPh7LfYbBny165" },
    {title:"Lithuania", id:"7ZM9ivqYaXjW4SO0gKib" },
    {title:"Luxembourg", id:"Gd0LEI97ecKgn1qBJtS3" },
    {title:"Macedonia", id:"vbixZNsrJOlhOZi5ekT5" },
    {title:"Madagascar", id:"Z3DWn5K1g6w3FsI1ZSxR" },
    {title:"Malawi", id:"M0JnpXushuoB1SFFOADe" },
    {title:"Malaysia", id:"OwAjqNHaEH3zkR8PlxDx" },
    {title:"Maldives", id:"OA8hQwrXoTPC4XUOhhOQ" },
    {title:"Mali", id:"vLhGAyiCDrpygA1YiOUz" },
    {title:"Malta", id:"iMdfzPzXK13FGJXpt9k3" },
    {title:"Mauritania", id:"VR56prK24u0I2LnMpXOR" },
    {title:"Mauritius", id:"OVPaUGmEehP1KCmZ5n8D" },
    {title:"Mexico", id:"cQveyFD0AAEUYR9Nw65P" },
    {title:"Moldova", id:"Yw2cVC6OIMzc2mXjh7my" },
    {title:"Mongolia", id:"uU9qq6wPkfJgFjSv74fn" },
    {title:"Montenegro", id:"4PajnMfWlJnR6R5A1MXq" },
    {title:"Montserrat", id:"Q3G1Kmyy8piWsU6H7qDw" },
    {title:"Morocco", id:"kyyKgyLypPZhdeLTQwOd" },
    {title:"Mozambique", id:"HqWV5obhMEpA72gy4w8B" },
    {title:"Myanmar", id:"L0dDn2VsuMrvOckkekSF" },
    {title:"Namibia", id:"vJO1NilNDSS2WTU48ffW" },
    {title:"Nauru", id:"uDcBihqorIHCdyzy86eT" },
    {title:"Nepal", id:"IwjlFahRE3FuFP8B7bF4" },
    {title:"Netherlands", id:"HACUMk2dbAqsrwyIguSI" },
    {title:"New Caledonia", id:"sPD9MHrnFERleCtwXl3y" },
    {title:"New Zealand", id:"Q00B7Nroq1vQPPQYX4SK" },
    {title:"Nicaragua", id:"q0PMyzNLGdAnkPMxXgYY" },
    {title:"Niger", id:"5BK3dcsK7TPHKFLlvQIh" },
    {title:"Nigeria", id:"1DKbmeIZJ0C5yc0IuYp0" },
    {title:"North Korea", id:"Z0QyDlPCj9UNrPDTEChR" },
    {title:"Norway", id:"VbQvePlrdcjluE1Fpddg" },
    {title:"Oman", id:"Z3KQktXL68WH1ZsD9Sm5" },
    {title:"Pakistan", id:"SgglB2nHgn1qSI7ESZ52" },
    {title:"Palestine", id:"fr1yg6lNTZgxAqBAAnFO" },
    {title:"Panama", id:"yrl7qzffRvrxwktkqMLF" },
    {title:"Papua New Guinea", id:"tvn804FYRAtHpiZVlY4m" },
    {title:"Paraguay", id:"KkrV52Q7ey8a2yaJYLsf" },
    {title:"Peru", id:"AniEewofMFy6Eo46wUZW" },
    {title:"Philippines", id:"s2F9yZDrSYYf3uAAlpcy" },
    {title:"Pitcairn Islands", id:"rMXYosHHlZJTXhUJdh8y" },
    {title:"Poland", id:"iprLBnFN49lkh153ndSD" },
    {title:"Portugal", id:"9bmhQyQyBnleP1NxIZ8o" },
    {title:"Puerto Rico", id:"9kxoDCiPsAk9xY47z6HN" },
    {title:"Qatar", id:"jeLzw1iOPCwNF7EXGWQ9" },
    {title:"Republic of Congo", id:"2oXVheAeKuEFjPDmaPHw" },
    {title:"Romania", id:"hjyJP3llzO6C3zSdqULo" },
    {title:"Russian Federation", id:"fmtMXbLSwGXsHXoLM8dP" },
    {title:"Rwanda", id:"mzZZ17tu5S9OXh2UjfYd" },
    {title:"Saint Kitts and Nevis", id:"iLRxC3FxCpGVpGJHtECH" },
    {title:"Saint Lucia", id:"dGpFOIrvR4LIUYToSxJ7" },
    {title:"Saint Martin (Dutch)", id:"y0J3JDJK0CQRj8Wx3GXs" },
    {title:"Saint Martin (French)", id:"53XrUJFmRLiArUnvbP9N" },
    {title:"Saint Vincent and the Grenadines", id:"99HP4D3Cqx5tbiGstNhn" },
    {title:"Saudi Arabia", id:"Wr36OItVQEIKWiDjuBmt" },
    {title:"Senegal", id:"YDjM0mA6vPNA5nT3lyWj" },
    {title:"Serbia", id:"Y7d7fUHDLb8xH9kCVtxv" },
    {title:"Seychelles", id:"BMKZi8U7fqQyWxpVkdio" },
    {title:"Sierra Leone", id:"0QfLy8ljoObhbFUPwIpA" },
    {title:"Singapore", id:"kMv1Qo4xVZ9OgOPqO8Ww" },
    {title:"Slovakia", id:"18LEJ5zpBOB3wET1ClGp" },
    {title:"Slovenia", id:"fcEJoZDHELxfvJ12mNAU" },
    {title:"Solomon Islands", id:"I9t2xid68dcmriLblg6P" },
    {title:"Somalia", id:"TxCQMZehcDvGZiR3Ba4H" },
    {title:"South Africa", id:"6ZPQcx1iMHfpw5j59kU6" },
    {title:"South Korea", id:"iQfkUEb9pQWlw4NGwn7y" },
    {title:"South Sudan", id:"fzJCumkO5VVShiLB2ics" },
    {title:"Spain", id:"QFwlcyDU8cuUDDrTthe9" },
    {title:"Sri Lanka", id:"EfpOSjKlQATVVLSRQXBm" },
    {title:"Sudan", id:"ZvPfwhb5E9talzffpeiy" },
    {title:"Suriname", id:"Ize6tFZtQYbKckgQuNaZ" },
    {title:"Swaziland", id:"4HTKS2XIaXOo3g9qFBQ5" },
    {title:"Sweden", id:"oUxVsjU1rzF9XasNczBt" },
    {title:"Switzerland", id:"bkHO88hM8mxr9unTQaLk" },
    {title:"Syria", id:"Yqi5Z5CFwvTbH9M8Qf0c" },
    {title:"São Tomé and Principe", id:"amphmoLmKBnrkQ7rRrlJ" },
    {title:"Taiwan", id:"VKijrF5RaLV6vgzq3WJp" },
    {title:"Tajikistan", id:"k1RSq66fxBbFOKiDgyZk" },
    {title:"Tanzania", id:"yrYUaBGL52aOqxdmE3Pz" },
    {title:"Thailand", id:"MnDQQdlGiucb2eIF9VQj" },
    {title:"The Gambia", id:"VjHXltnAT3kWRngrgq1S" },
    {title:"Timor-Leste", id:"7gaNbJb2nMoONm1ydyUc" },
    {title:"Togo", id:"DN0nbkzH7JFbJ6pBWz77" },
    {title:"Tonga", id:"JqiEdZLXNAhv7qEl5JT6" },
    {title:"Trinidad and Tobago", id:"v9hIPFTXzPN8J1lVklVw" },
    {title:"Tunisia", id:"75aOFyX0kqSqm8hvvexs" },
    {title:"Turkey", id:"4wEHH7XkR8tg4EzlGVrl" },
    {title:"Turkmenistan", id:"OdhpzFM5hjKVVoi5XLZI" },
    {title:"Turks and Caicos Islands", id:"oSiIzRZE0OOn9IOWFrMc" },
    {title:"Uganda", id:"2e7X1yRlzDvdO6OPpr1W" },
    {title:"Ukraine", id:"SvsghZ9K9CWbkyFP8eIf" },
    {title:"United Arab Emirates", id:"fwfUrZWgtIUeNldmI92O" },
    {title:"United Kingdom", id:"fci6oSEeX4iBQqvOhD5R" },
    {title:"United States", id:"wK0fPxpnTOhoODOiPxSB" },
    {title:"United States Congress", id:"UcRTnaUAUWQuDWoYT0Mv" },
    {title:"United States Virgin Islands", id:"hwXDDOH1RvtY5iTuCx5b" },
    {title:"Uruguay", id:"rJUGQ6LPy5nw9R596FMq" },
    {title:"Uzbekistan", id:"cBdXF52l8a2YMj1aGOk8" },
    {title:"Vanuatu", id:"gbHcB0cj91EplbZFeQjy" },
    {title:"Venezuela", id:"wvdGZVJ20RkAkKoJ29WI" },
    {title:"Vietnam", id:"giArkqe2dBaGnvmPTvoy" },
    {title:"Western Sahara", id:"9c12LZmBu8NrH7BfVJjq" },
    {title:"Yemen", id:"229HRipQzQW6q8mzr418" },
    {title:"Zambia", id:"kBSpzcTZCyHpjrR0ZRmv" },
    {title:"Zimbabwe", id:"uap1a5VzaREXUlv2krAN" },
  ]
  usaStatesMaps = [
    { title:"US Alabama", id:"MHV7I2mAUt1fMgRGv7FZ" },
    { title:"US Alaska", id:"FaDntOIhoJ5wGuDUC51h" },
    { title:"US Arizona", id:"7aSJDSRpNUgHfAxU70kC" },
    { title:"US Arkansas", id:"7VMyJYci4cGOXQb4oTOe" },
    { title:"US California", id:"ARwkQ5N6IGcArtuWn83O" },
    { title:"US Colorado", id:"csqZjEzKNazMPw2oNhsj" },
    { title:"US Connecticut", id:"ICPnsOKnYjvFJ8u8Ul2F" },
    { title:"US Delaware", id:"8GpRuS8G306nvBdlxfzY" },
    { title:"US District Of Columbia", id:"Rc4oV9BydSlcsAozYMqF" },
    { title:"US Florida", id:"7jfdnjGyY4F5hB1hMr9T" },
    { title:"US Georgia", id:"biya78AkqOCFWydcos4C" },
    { title:"US Hawaii", id:"71yc26iJ2yVgzGJDDIRe" },
    { title:"US Idaho", id:"dctoLePbqEaryn6MUgUq" },
    { title:"US Illinois", id:"eFHWNxiWWO61tEi3s5hq" },
    { title:"US Indiana", id:"4CCBd4H9OjZTAvZ77X5D" },
    { title:"US Iowa", id:"Qt9bhpf8YXNAXrl4PFbP" },
    { title:"US Kansas", id:"reDWJyZTmnuDECENOM55" },
    { title:"US Kentucky", id:"pM3oF60QECoYO6XkRGE2" },
    { title:"US Louisiana", id:"KTcVZKV5zDe0xlJWVXW3" },
    { title:"US Maine", id:"1SoA2Em2xy2bvsqswyAA" },
    { title:"US Maryland", id:"djqC33Wr2jWdAXHS3poH" },
    { title:"US Massachusetts", id:"Nj7xVV6UwcPLDr7XZmdp" },
    { title:"US Michigan", id:"wIpAuxpN25gmXGm2YWLJ" },
    { title:"US Minnesota", id:"jdgXesyvcPiGv3tUWhH0" },
    { title:"US Mississippi", id:"hhhFPC2iy09Py1XTMAvM" },
    { title:"US Missouri", id:"wRHr6ipAXz4eET05eFZW" },
    { title:"US Montana", id:"dFecEtcaivtSVHeIIYlP" },
    { title:"US Nebraska", id:"bQxywEAblkZr1si8HzUW" },
    { title:"US Nevada", id:"loZa3f2hqUk4SLeL466L" },
    { title:"US New Hampshire", id:"H0Ogqs9ph0nue7VjXnLO" },
    { title:"US New Jersey", id:"YASorGKvlRsd3hZZ8adl" },
    { title:"US New Mexico", id:"N9VKhgg0c20SOZA5YfXX" },
    { title:"US New York", id:"QXns54cKYdSUxr9RLGZi" },
    { title:"US North Carolina", id:"BMVxSo9wOe7wLposlryB" },
    { title:"US North Dakota", id:"otNX6rSB1G66ggn9qHaX" },
    { title:"US Ohio", id:"vtkSDwV4dSc0EdefjWZd" },
    { title:"US Oklahoma", id:"fPcKo8xqqn1MWMNFOIwY" },
    { title:"US Oregon", id:"NcrjFx8HTcEbfX7BVowK" },
    { title:"US Pennsylvania", id:"QaNSA8AAJSxzsm1UwlEA" },
    { title:"US Rhode Island", id:"BhL8HyhpbhLSy6hcp0v2" },
    { title:"US South Carolina", id:"PrvOyQPMnedMtOWzcKFq" },
    { title:"US South Dakota", id:"9K5vbkrtLOw1j9AYsn7l" },
    { title:"US Tennessee", id:"LvFxsSAVhBJB5Wxg6EPN" },
    { title:"US Texas", id:"kXQ1yz5cZy1opa2uTyvf" },
    { title:"US Utah", id:"tbYQz4xpaJgcCUSyMIo1" },
    { title:"US Vermont", id:"JRdEIzKQ1nWk3Ri1ix5Y" },
    { title:"US Virginia", id:"8FmEtBsMKOXCPZdu8mBj" },
    { title:"US Washington", id:"ZGF7IAoiuFUYHnPwpFyp" },
    { title:"US West Virginia", id:"0Wxwjml57L4Yc6FqFPKv" },
    { title:"US Wisconsin", id:"tfLAnWjbwxvhB9MVNNv6" },
    { title:"US Wyoming", id:"scXgwCYMlmC7HOWvvUk1" },
  ]
  indStatesMaps = [
    { title:"Andhra Pradesh", about:"Amaravati", id:"pjqEjDftiqZMYhPSciP5" },
    { title:"Arunachal Pradesh", about:"Itanagar", id:"A6befsxlG1MnwGwuJCiJ" },
    { title:"Assam", about:"Dispur", id:"8tbWTph7gexYf9eMszQn" },
    { title:"Bihar", about:"Patna", id:"glokQkpHs3Gcq6YVQ92z" },
    { title:"Chhattisgarh", about:"Raipur", id:"XsYgmHTNt2HkPd6Xvd9S" },
    { title:"Goa", about:"Panaji", id:"qUFKMpC6ZpdAU5440tA9" },
    { title:"Gujarat", about:"Gandhinagar", id:"VZDiWOoiukfo3XetUqB3" },
    { title:"Haryana", about:"Chandigarh", id:"mGAzy5KNEth2qGDUvhBM" },
    { title:"Himachal Pradesh", about:"Shimla", id:"1oxG2tJ72ppnTb46Nm7b" },
    { title:"Jharkhand", about:"Ranchi", id:"NBBKnJN5MXatGwxpPH9u" },
    { title:"Karnataka", about:"Bangalore", id:"1P09TMe8ZZhgGcD24j0M" },
    { title:"Kerala", about:"Thiruvananthapuram", id:"0jk5Uy3OQp11YMmKW8dS" },
    { title:"Madhya Pradesh", about:"Bhopal", id:"N511w7EYv5V46IuMZckm" },
    { title:"Maharashtra", about:"Mumbai", id:"yp9Z5fukBniU3B6eH8aT" },
    { title:"Manipur", about:"Imphal", id:"Cq8KK1P81WiR4Oe1fqic" },
    { title:"Meghalaya", about:"Shillong", id:"bAch38xmIDWSk5sHpEWm" },
    { title:"Mizoram", about:"Aizawl", id:"PK5HFCaGwQJblDH2oOo3" },
    { title:"Nagaland", about:"Kohima", id:"5n2byCCBSAE411jLtBdL" },
    { title:"Odisha", about:"Bhubaneshwar", id:"kAKVCgau1UneShnN5ct6" },
    { title:"Punjab", about:"Chandigarh", id:"bCyiRpTn79qzo8kE4uor" },
    { title:"Rajasthan", about:"Jaipur", id:"9CW5MgC4A2x4zlyLAW9S" },
    { title:"Sikkim", about:"Gangtok", id:"2qbrAXI0VdsXgmqnD0kI" },
    { title:"Tamil Nadu", about:"Chennai", id:"p5PYzXvo1rNxETibELQv" },
    { title:"Telangana", about:"Hyderabad", id:"5hNtI6dESnVpNWmLJzzk" },
    { title:"Tripura", about:"Agartala", id:"4ctyzuLxRj7YobkV5Sw7" },
    { title:"Uttarakhand", about:"Dehradun", id:"7PkNaqVdZl3sa4bx30pR" },
    { title:"Uttar Pradesh", about:"Lucknow", id:"94PvxeiJWYqQhBZTHe2t" },
    { title:"West Bengal", about:"Kolkata", id:"jsWsLpeoQBxFql4QwRRI" },
    { title:"Andaman and Nicobar Islands", about:"Port Blair", id:"MpPQdKEgCtxxCu81mdnj" },
    { title:"Chandigarh", about:"Chandigarh", id:"igVcZoqM4BtLeFJmKcEz" },
    { title:"Dadra & Nagar Haveli and Daman & Diu", about:"Daman", id:"3qptee1PhU4vbZwZSM9F" },
    { title:"The Government of NCT of Delhi", about:"Delhi", id:"1ZBlfLXJklfCjHbVYpaV" },
    { title:"Jammu & Kashmir", about:"Srinagar-S*, Jammu-W*", id:"VbPqjbLQYWM6XlhuDmFh" },
    { title:"Ladakh", about:"Leh", id:"kqS2kcMPVg89qxKrmA9Y" },
    { title:"Lakshadweep Islands", about:"Kavaratti", id:"mB0EhoIDu0x5IDRvNqfu" },
    { title:"Puducherry", about:"Puducherry", id:"KR8QSjFmhvrNAAmXLrAE" },
  ]
  cityMaps = [
    { title:"Tokyo", about:"Japan" , id:"" },
    { title:"Delhi", about:"India" , id:"" },
    { title:"Shanghai", about:"China" , id:"" },
    { title:"São Paulo", about:"Brazil" , id:"" },
    { title:"Mexico City", about:"Mexico" , id:"" },
    { title:"Cairo", about:"Egypt" , id:"" },
    { title:"Mumbai", about:"India" , id:"" },
    { title:"Beijing", about:"China" , id:"" },
    { title:"Dhaka", about:"Bangladesh" , id:"" },
    { title:"Osaka", about:"Japan" , id:"" },
    { title:"New York", about:"United States" , id:"" },
    { title:"Karachi", about:"Pakistan" , id:"" },
    { title:"Buenos Aires", about:"Argentina" , id:"" },
    { title:"Chongqing", about:"China" , id:"" },
    { title:"Istanbul", about:"Turkey" , id:"" },
    { title:"Kolkata", about:"India" , id:"" },
    { title:"Manila", about:"Philippines" , id:"" },
    { title:"Lagos", about:"Nigeria" , id:"" },
    { title:"Rio de Janeiro", about:"Brazil" , id:"" },
    { title:"Tianjin", about:"China" , id:"" },
  ]
  otherMaps = [
    { title:"Tibet", id:"" },
    { title:"Kurdistan", id:"" },
    { title:"Quebec", id:"" },
    { title:"East Turkestan", id:"" },
    { title:"Macau", id:"" },
    { title:"Manchukuo", id:"" },
    { title:"Balochistan", id:"" },
    { title:"Aryavrata", id:"" },
    { title:"Bharatvarsh", id:"" },
    { title:"Greater India", id:"" },
    { title:"Maratha Empire", id:"" },
    { title:"Chola Empire", id:"" },
    { title:"British India", id:"" },
    { title:"Kushan Empire", id:"" },
    { title:"Mauryan Empire", id:"" },
    { title:"Gupta Empire", id:"" },
    { title:"Mughal Empire", id:"" },
    { title:"USSR", id:"" },
    { title:"Russian Empire", id:"" },
    { title:"Mongol Empire", id:"" },
    { title:"Qing dynasty", id:"" },
    { title:"Spanish Empire", id:"" },
    { title:"Empire of Japan", id:"" },
    { title:"Iberian Union", id:"" },
    { title:"Second French colonial empire", id:"" },
    { title:"Abbasid Caliphate", id:"" },
    { title:"Umayyad Caliphate", id:"" },
    { title:"Yuan dynasty", id:"" },
    { title:"Ottoman Empire", id:"" },
    { title:"Roman Empire", id:"" },
  ]

  constructor(
    public auth:AuthService,
    // public page: AlgoMapService,
    public resource: ResourceService,
    public dialog: MatDialog,
    public seo: SeoService,
  ) {
    let x:any = '';
    this.filteredOptions = this.searching.valueChanges.pipe(
      startWith(x),
      map((value:string) => this._filter(!value ? '' : value )),
    );

    // if(!page.firstHit){
    //   this.page.init('maps', 'info', { reverse: false, prepend: false,  })
    // }
  
    this.execute()
  }

  ngOnInit(): void {
    let xTitle = "Download maps svg, jpeg, png, webp";
    let xDescription = "We are building a diverse library of interactive maps. The maps undertaking by Dipesh Bhoir with over 1k+ maps at your fingertips.";
    let xURL = "https://islesys.com/maps";
    let xImage = "";
    let xKeywords = "maps, free download, Islesys, Dipesh Bhoir";
    this.seo.setSEO(xTitle, xDescription, xURL, xImage, xKeywords)
  }

  submitMap(){
    const dialogRef = this.dialog.open(AddMapComponent, {
      width: '100%',
      maxWidth: '450px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  execute(){}

}

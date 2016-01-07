
angular
.module('myApp')
.factory('VendorsCoords', [
VendorsCoords
])
// .factory('VendorsPrepService',['VendorsService'], VendorsPrepService);


function VendorsCoords() {
    var vc = [
      {
        "latitude":45.7112274,
        "longitude":-122.5521164,
        "name":"12313 NE 117TH AVE VANCOUVER WA 98662",
        "desc":"12313 NE 117th Ave, Vancouver, WA 98662"
      },
      {
        "latitude":47.9959984,
        "longitude":-122.0217285,
        "name":"21 154TH DR SE    STE A SNOHOMISH WA 98290",
        "desc":"21 154th Dr SE, Snohomish, WA 98290"
      },
      {
        "latitude":47.5187683,
        "longitude":-122.635231,
        "name":"1374 SE LUND AVE PORT ORCHARD WA 98366",
        "desc":"1374 SE Lund Ave, Port Orchard, WA 98366"
      },
      {
        "latitude":47.049942,
        "longitude":-122.9949188,
        "name":"410-A RONLEE LN OLYMPIA WA 98502",
        "desc":"410 Ronlee Ln NW, Olympia, WA 98502"
      },
      {
        "latitude":47.6419014,
        "longitude":-117.4889812,
        "name":"1515 LEWIS ST SPOKANE WA 99224",
        "desc":"1515 S Lewis St, Spokane, WA 99224"
      },
      {
        "latitude":48.3542595,
        "longitude":-119.6019821,
        "name":"23251 HWY 20 OKANOGAN WA 98840",
        "desc":"23251 Highway 20, Okanogan, WA 98840"
      },
      {
        "latitude":47.5773286,
        "longitude":-122.3341819,
        "name":"2942 1ST AVE S SEATTLE WA 98134",
        "desc":"2942 1st Ave S, Seattle, WA 98134"
      },
      {
        "latitude":48.0663223,
        "longitude":-119.7131271,
        "name":"19 GUN CLUB RD STE A BREWSTER WA 98812",
        "desc":"19 Gun Club Rd, Brewster, WA 98812"
      },
      {
        "latitude":47.0460739,
        "longitude":-122.8452911,
        "name":"421 LILLY RD SE OLYMPIA WA 98501",
        "desc":"421 Lilly Rd SE, Olympia, WA 98501"
      },
      {
        "latitude":47.7057991,
        "longitude":-122.3011322,
        "name":"10522 LAKE CITY WAY NE STE SEATTLE WA 98125",
        "desc":"10522 Lake City Way NE, Seattle, WA 98125"
      },
      {
        "latitude":45.5846726,
        "longitude":-122.3677276,
        "name":"325 NE LECHNER ST CAMAS WA 98607",
        "desc":"325 NE Lechner St, Camas, WA 98607"
      },
      {
        "latitude":48.6813131,
        "longitude":-119.5047786,
        "name":"1926 PINE CR RD   UNIT 5 TONASKET WA 98855",
        "desc":"1926 Pine Creek Rd, Tonasket, WA 98855"
      },
      {
        "latitude":47.6595001,
        "longitude":-117.3792801,
        "name":"202 N CRESTLINE STE C SPOKANE WA 99202",
        "desc":"202 N Crestline St, Spokane, WA 99202"
      },
      {
        "latitude":47.884593,
        "longitude":-117.447563,
        "name":"2418 W SAFARI LN  STE A DEER PARK WA 99006",
        "desc":"2418 W Safari Ln, Deer Park, WA 99006"
      },
      {
        "latitude":46.3754334,
        "longitude":-120.1515316,
        "name":"1845 GURLEY RD GRANGER WA 98932",
        "desc":"1845 Gurley Rd, Granger, WA 98932"
      },
      {
        "latitude":48.675983,
        "longitude":-122.202384,
        "name":"960 VALLEY HWY STE A ACME WA 98220",
        "desc":"960 Valley Hwy, Acme, WA 98220"
      },
      {
        "latitude":48.3022919,
        "longitude":-120.0289536,
        "name":"166 BENSON CREEK DR TWISP WA 98856",
        "desc":"166 Benson Creek Dr, Twisp, WA 98856"
      },
      {
        "latitude":48.6813131,
        "longitude":-119.5047786,
        "name":"1926 PINE CREEK RD UNIT 6 TONASKET WA 98855",
        "desc":"1926 Pine Creek Rd, Tonasket, WA 98855"
      },
      {
        "latitude":47.1511638,
        "longitude":-119.7555417,
        "name":"4290 STATE ROUTE 283 N STE A QUINCY WA 98848",
        "desc":"4290 State Route 283 N, Quincy, WA 98848"
      },
      {
        "latitude":46.5643806,
        "longitude":-120.3871918,
        "name":"8531 POSTMA RD MOXEE WA 98936",
        "desc":"8531 Postma Rd, Moxee, WA 98936"
      },
      {
        "latitude":45.7676773,
        "longitude":-122.5211411,
        "name":"1810 SE COMMERCE AVE BATTLE GROUND WA 98604",
        "desc":"1810 SE Commerce Ave, Battle Ground, WA 98604"
      },
      {
        "latitude":48.4741252,
        "longitude":-119.5269558,
        "name":"145 GREENACRES RD STE 3 RIVERSIDE WA 98849",
        "desc":"145 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":47.2331963,
        "longitude":-122.4574661,
        "name":"2919 S ALASKA ST TACOMA WA 98409",
        "desc":"2919 S Alaska St, Tacoma, WA 98409"
      },
      {
        "latitude":45.735794,
        "longitude":-122.66291,
        "name":"15812 NE 10TH AVE STE A RIDGEFIELD WA 98642",
        "desc":"15812 NE 10th Ave, Ridgefield, WA 98642"
      },
      {
        "latitude":47.712101,
        "longitude":-117.3571014,
        "name":"23833 EAST BISMARK AVE SPOKANE WA 99217",
        "desc":"E Bismark Ave, Spokane, WA 99217"
      },
      {
        "latitude":46.0149155,
        "longitude":-118.2261734,
        "name":"6241 COTTONWOOD RD WALLA WALLA WA 99362",
        "desc":"6241 Cottonwood Rd, Walla Walla, WA 99362"
      },
      {
        "latitude":47.5798452,
        "longitude":-122.3250168,
        "name":"624 S LANDER ST STE 47 SEATTLE WA 98134",
        "desc":"624 S Lander St, Seattle, WA 98134"
      },
      {
        "latitude":48.020912,
        "longitude":-122.054206,
        "name":"2515 HARTFORD DR STE A LAKE STEVENS WA 98258",
        "desc":"2515 Hartford Dr, Lake Stevens, WA 98258"
      },
      {
        "latitude":48.4152118,
        "longitude":-119.4780786,
        "name":"234 OMAK RIVER RD   UNIT 2 OMAK WA 98841",
        "desc":"234 Omak River Rd, Omak, WA 98841"
      },
      {
        "latitude":47.941124,
        "longitude":-124.4113925,
        "name":"185 ZEPEDA RD BLDG 1 FORKS WA 98331",
        "desc":"185 Zepeda Rd, Forks, WA 98331"
      },
      {
        "latitude":46.219463,
        "longitude":-119.784538,
        "name":"260 MERLOT DR PROSSER WA 99350",
        "desc":"260 Merlot Dr, Prosser, WA 99350"
      },
      {
        "latitude":null,
        "longitude":null,
        "name":"5473 GUIDE MERIDIAN STE B & C BELLINGHAM WA 98226",
        "desc":"-"
      },
      {
        "latitude":47.491874,
        "longitude":-120.425079,
        "name":"4185 OLD MONITOR RD, STE A MONITOR WA 98836",
        "desc":"4185 Old Monitor Rd, Cashmere, WA 98815"
      },
      {
        "latitude":47.663219,
        "longitude":-120.2473918,
        "name":"3478 ENTIAT RIVER RD ENTIAT WA 98822",
        "desc":"3478 Entiat River Rd, Entiat, WA 98822"
      },
      {
        "latitude":47.472011,
        "longitude":-120.3313006,
        "name":"3012 GS CENTER RD WENATCHEE WA 98801",
        "desc":"3012 GS Center Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.6613106,
        "longitude":-122.3247854,
        "name":"321 NE 45TH ST SEATTLE WA 98105",
        "desc":"321 NE 45th St, Seattle, WA 98105"
      },
      {
        "latitude":46.8092041,
        "longitude":-123.0071106,
        "name":"5845 192ND AVE SW STE 101 ROCHESTER WA 98579",
        "desc":"5845 192nd Ave SW, Rochester, WA 98579"
      },
      {
        "latitude":48.9450426,
        "longitude":-119.4166667,
        "name":"130 CHESAW RD STE B OROVILLE WA 98844",
        "desc":"130 Chesaw Rd, Oroville, WA 98844"
      },
      {
        "latitude":47.716476,
        "longitude":-122.345497,
        "name":"12015 AURORA AVE N STE 1 SEATTLE WA 98133",
        "desc":"12015 Aurora Ave N, Seattle, WA 98133"
      },
      {
        "latitude":47.9725615,
        "longitude":-119.9967816,
        "name":"659 ANTOINE CREEK RD CHELAN WA 98816",
        "desc":"659 Antoine Creek Rd, Chelan, WA 98816"
      },
      {
        "latitude":47.6742783,
        "longitude":-117.3411942,
        "name":"1802 N LANGLEY STE #2 SPOKANE WA 99212",
        "desc":"1802 N Langley St, Spokane, WA 99212"
      },
      {
        "latitude":47.459571,
        "longitude":-121.705535,
        "name":"47600 SE 153RD ST STE A NORTH BEND WA 98045",
        "desc":"47600 SE 153rd St, North Bend, WA 98045"
      },
      {
        "latitude":48.5150416,
        "longitude":-123.0293776,
        "name":"82 PORTAGE PLACE UNIT B FRIDAY HARBOR WA 98250",
        "desc":"82 Portage Pl, Friday Harbor, WA 98250"
      },
      {
        "latitude":47.2049904,
        "longitude":-123.9713669,
        "name":"86 BADGER RD HOQUIAM WA 98550",
        "desc":"86 Badger Rd, Hoquiam, WA 98550"
      },
      {
        "latitude":47.0713654,
        "longitude":-122.7523956,
        "name":"2660 WILLIAMETTE DR LACEY WA 98516",
        "desc":"2660 Willamette Dr NE, Lacey, WA 98516"
      },
      {
        "latitude":48.5473328,
        "longitude":-120.3345413,
        "name":"18407 STATE ROUTE 20 WINTHROP WA 98862",
        "desc":"18407 State Route 20, Winthrop, WA 98862"
      },
      {
        "latitude":47.3674583,
        "longitude":-120.2822876,
        "name":"440 GRUBB RD WENATCHEE WA 98801",
        "desc":"Grubb Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.053299,
        "longitude":-123.0088272,
        "name":"6031 OLD OLYMPIC HWY SW STE A OLYMPIA WA 98512",
        "desc":"6031 Old Olympic Hwy SW, Olympia, WA 98512"
      },
      {
        "latitude":48.0518027,
        "longitude":-122.8241819,
        "name":"123 BLACK BEAR RD PORT TOWNSEND WA 98368",
        "desc":"123 Black Bear Rd, Port Townsend, WA 98368"
      },
      {
        "latitude":47.5702705,
        "longitude":-122.3216171,
        "name":"820 S CHARLESTOWN SEATTLE WA 98134",
        "desc":"820 S Charlestown St, Seattle, WA 98108"
      },
      {
        "latitude":47.9091034,
        "longitude":-121.9441528,
        "name":"21516 95TH ST SE SNOHOMISH WA 98290",
        "desc":"21516 95th St SE, Snohomish, WA 98290"
      },
      {
        "latitude":48.4610742,
        "longitude":-120.1802829,
        "name":"29 HORIZON FLATS RD STE 8 WINTHROP WA 98862",
        "desc":"29 Horizon Flats Rd, Winthrop, WA 98862"
      },
      {
        "latitude":48.3245726,
        "longitude":-122.6487494,
        "name":"3171 GOLDIE RD OAK HARBOR WA 98277",
        "desc":"3171 Goldie Rd, Oak Harbor, WA 98277"
      },
      {
        "latitude":48.2264328,
        "longitude":-122.1471939,
        "name":"25404 STATE ROUTE 9 STE A ARLINGTON WA 98223",
        "desc":"25404 State Route 9, Arlington, WA 98223"
      },
      {
        "latitude":48.2264328,
        "longitude":-122.1471939,
        "name":"25404 STATE ROUTE 9 STE B ARLINGTON WA 98223",
        "desc":"25404 State Route 9, Arlington, WA 98223"
      },
      {
        "latitude":47.658062,
        "longitude":-117.362999,
        "name":"3230 E RIVERSIDE AVE STE 110 SPOKANE WA 99202",
        "desc":"3230 E Riverside Ave, Spokane, WA 99202"
      },
      {
        "latitude":47.658062,
        "longitude":-117.362999,
        "name":"3230 E RIVERSIDE AVE STE 111 SPOKANE WA 98202",
        "desc":"3230 E Riverside Ave, Spokane, WA 99202"
      },
      {
        "latitude":48.0945206,
        "longitude":-117.2065811,
        "name":"22625 TELEPHONE RD W STE A NEWPORT WA 99156",
        "desc":"Telephone Rd W, Newport, WA 99156"
      },
      {
        "latitude":45.640995,
        "longitude":-122.2334824,
        "name":"181 KATIES LN SUITE B WASHOUGAL WA 98671",
        "desc":"181 Katies Ln, Washougal, WA 98671"
      },
      {
        "latitude":47.049942,
        "longitude":-122.9949188,
        "name":"410 RONLEE LN NW A2 OLYMPIA WA 98502",
        "desc":"410 Ronlee Ln NW, Olympia, WA 98502"
      },
      {
        "latitude":48.9985542,
        "longitude":-122.2692413,
        "name":"470 W 2ND ST STE 106 SUMAS WA 98295",
        "desc":"470 W 2nd St, Sumas, WA 98295"
      },
      {
        "latitude":47.5354843,
        "longitude":-117.4636993,
        "name":"12917 S SHORT RD CHENEY WA 99004",
        "desc":"12917 S Short Rd, Cheney, WA 99004"
      },
      {
        "latitude":46.1153297,
        "longitude":-122.9396057,
        "name":"1041 INDUSTRIAL WAY LONGVIEW WA 98632",
        "desc":"1041 Industrial Way, Longview, WA 98632"
      },
      {
        "latitude":48.0607063,
        "longitude":-117.3407737,
        "name":"161 KIRKPATRICK RD ELK WA 99009",
        "desc":"161 Kirkpatrick Rd, Elk, WA 99009"
      },
      {
        "latitude":47.1520996,
        "longitude":-119.3061066,
        "name":"1824 RD N NE UNIT 4 MOSES LAKE WA 98837",
        "desc":"98837, WA"
      },
      {
        "latitude":48.9985542,
        "longitude":-122.2692413,
        "name":"470 W 2ND ST STE 104 SUMAS WA 98295",
        "desc":"470 W 2nd St, Sumas, WA 98295"
      },
      {
        "latitude":48.930397,
        "longitude":-122.142303,
        "name":"7955 CHISHOLM TRAIL STE A MAPLE FALLS WA 98266",
        "desc":"7955 Chisholm Trail, Maple Falls, WA 98266"
      },
      {
        "latitude":47.6576729,
        "longitude":-117.4047241,
        "name":"411 E SPRAGUE AVE SPOKANE WA 99202",
        "desc":"411 E Sprague Ave, Spokane, WA 99202"
      },
      {
        "latitude":47.6156788,
        "longitude":-122.1855768,
        "name":"614 116TH AVE NE BELLEVUE WA 98004",
        "desc":"614 116th Ave NE, Bellevue, WA 98004"
      },
      {
        "latitude":46.958321,
        "longitude":-122.9289798,
        "name":"8912 KIMMIE ST SW  STE A TUMWATER WA 98512",
        "desc":"8912 Kimmie St SW, Tumwater, WA 98512"
      },
      {
        "latitude":47.67042,
        "longitude":-119.391802,
        "name":"1655 ROAD 4 NE COULEE CITY WA 99115",
        "desc":"1655 Road 4 NE, Coulee City, WA 99115"
      },
      {
        "latitude":47.67042,
        "longitude":-119.391802,
        "name":"1655 ROAD 4 NE STE D COULEE CITY WA 99115",
        "desc":"1655 Road 4 NE, Coulee City, WA 99115"
      },
      {
        "latitude":47.411293,
        "longitude":-120.5562668,
        "name":"7584 JAMES ST WAY STE A FORD WA 99013",
        "desc":"Washington"
      },
      {
        "latitude":47.7221753,
        "longitude":-117.2033481,
        "name":"15026 E BREVIER RD SUITE A SPOKANE WA 99217",
        "desc":"15026 E Brevier Rd, Spokane, WA 99217"
      },
      {
        "latitude":47.669208,
        "longitude":-117.326271,
        "name":"5805 E SHARPE AVE STE 2 SPOKANE VALLEY WA 99212",
        "desc":"5805 E Sharp Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":48.6059761,
        "longitude":-122.9320297,
        "name":"85 SCOTT HILL DR #A ORCAS WA 98280",
        "desc":"85 Scott Hill Rd, Orcas, WA 98280"
      },
      {
        "latitude":47.8025742,
        "longitude":-117.215271,
        "name":"14110 EAST MT SPOKANE PARK DR MEAD WA 99021",
        "desc":"14110 E Mt Spokane Park Dr, Mead, WA 99021"
      },
      {
        "latitude":45.8783684,
        "longitude":-120.9396286,
        "name":"728 TURKEY RANCH RD STE A GOLDENDALE WA 98620",
        "desc":"728 Turkey Ranch Rd, Goldendale, WA 98620"
      },
      {
        "latitude":47.3332751,
        "longitude":-120.2650689,
        "name":"5256 UPPER HEDGES ROAD  STE B WENATCHEE WA 98801",
        "desc":"5256 Upper Hedges Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.1754908,
        "longitude":-119.6611608,
        "name":"5985 RD H NW EPHRATA WA 98823",
        "desc":"5985 Road H NW, Ephrata, WA 98823"
      },
      {
        "latitude":47.5169029,
        "longitude":-122.893898,
        "name":"6251 NE BEAR CREEK DEWATTO RD BELFAIR WA 98528",
        "desc":"6251 NE Bear Creek Dewatto Rd, Belfair, WA 98528"
      },
      {
        "latitude":47.4832191,
        "longitude":-120.6527481,
        "name":"2855 US 97 PESHASTIN WA 98847",
        "desc":"US-97, Peshastin, WA 98847"
      },
      {
        "latitude":47.4832191,
        "longitude":-120.6527481,
        "name":"2855 US 97 # B PESHASTIN WA 98847",
        "desc":"US-97, Peshastin, WA 98847"
      },
      {
        "latitude":48.3243084,
        "longitude":-122.6486407,
        "name":"3163 GOLDIE RD  BLDG B STE 2 OAK HARBOR WA 98277",
        "desc":"3163 Goldie Rd, Oak Harbor, WA 98277"
      },
      {
        "latitude":48.4630814,
        "longitude":-117.8842316,
        "name":"2545 C HWY 395 S COLVILLE WA 99114",
        "desc":"Highway 395 S, Colville, WA 99114"
      },
      {
        "latitude":48.6996117,
        "longitude":-119.3385315,
        "name":"186 HOWELL CANYON RD STE A TONASKET WA 98855",
        "desc":"186 Howell Canyon Rd, Tonasket, WA 98855"
      },
      {
        "latitude":47.0560417,
        "longitude":-120.6032715,
        "name":"412854OWER GREEN CANYON RD #A ELLENSBURG WA 98926",
        "desc":"Lower Green Canyon Rd, Ellensburg, WA 98926"
      },
      {
        "latitude":47.630809,
        "longitude":-117.59008,
        "name":"13026 W MCFARLANE RD BLDG C1 AIRWAY HEIGHTS WA 99001",
        "desc":"13026 W McFarlane Rd, Airway Heights, WA 99001"
      },
      {
        "latitude":47.5083847,
        "longitude":-120.2957306,
        "name":"5526 INDUSTRY LN STE 4 EAST WENATCHEE WA 98802",
        "desc":"5526 Industry Ln, East Wenatchee, WA 98802"
      },
      {
        "latitude":46.6821876,
        "longitude":-123.7552665,
        "name":"1725 OCEAN AVE BLDG 15 RAYMOND WA 98577",
        "desc":"1725 Ocean Ave, Raymond, WA 98577"
      },
      {
        "latitude":48.4049759,
        "longitude":-117.865242,
        "name":"1106 CANNON WAY STE 7 COLVILLE WA 99114",
        "desc":"1106 Cannon Way, Colville, WA 99114"
      },
      {
        "latitude":46.1760406,
        "longitude":-119.2846527,
        "name":"102003 E BADGER RD #A KENNEWICK WA 99338",
        "desc":"102003 E Badger Rd, Kennewick, WA 99338"
      },
      {
        "latitude":46.2098064,
        "longitude":-119.8664899,
        "name":"305 S LOWER COUNTY LINE RD PROSSER WA 99350",
        "desc":"305 S Lower County Line Rd, Grandview, WA 98930"
      },
      {
        "latitude":46.1151886,
        "longitude":-122.9459534,
        "name":"1401 INDUSTRIAL WAY LONGVIEW WA 98632",
        "desc":"1401 Industrial Way, Longview, WA 98632"
      },
      {
        "latitude":47.5740433,
        "longitude":-122.3328629,
        "name":"145 S HORTON ST SEATTLE WA 98134",
        "desc":"145 S Horton St, Seattle, WA 98134"
      },
      {
        "latitude":47.5740433,
        "longitude":-122.3336945,
        "name":"3300 1ST AVE S STE 100 SEATTLE WA 98134",
        "desc":"3300 1st Ave S, Seattle, WA 98134"
      },
      {
        "latitude":47.5740433,
        "longitude":-122.3347092,
        "name":"3301 1ST AVE S SEATTLE WA 98134",
        "desc":"3301 1st Ave S, Seattle, WA 98134"
      },
      {
        "latitude":46.25513,
        "longitude":-119.078529,
        "name":"2505 N COMMERCIAL AVE UNIT C/D PASCO WA 99301",
        "desc":"2505 N Commercial Ave, Pasco, WA 99301"
      },
      {
        "latitude":47.5834274,
        "longitude":-122.3295593,
        "name":"2215 4TH AVE S SEATTLE WA 98134",
        "desc":"2215 4th Ave S, Seattle, WA 98134"
      },
      {
        "latitude":48.0985039,
        "longitude":-117.1935701,
        "name":"310 BROKEN J LN #B NEWPORT WA 99156",
        "desc":"310 Broken J Ln, Newport, WA 99156"
      },
      {
        "latitude":47.4224512,
        "longitude":-117.4695432,
        "name":"26425 S RUPP #G 1 CHENEY WA 99004",
        "desc":"26425 S Rupp Rd, Cheney, WA 99004"
      },
      {
        "latitude":48.3237807,
        "longitude":-122.6484228,
        "name":"3147 GOLDIE RD BLDG 6 OAK HARBOR WA 98277",
        "desc":"3147 Goldie Rd, Oak Harbor, WA 98277"
      },
      {
        "latitude":46.9999107,
        "longitude":-122.918306,
        "name":"849 TROSPER RD SW STE 207 TUMWATER WA 98512",
        "desc":"849 Trosper Rd SW, Tumwater, WA 98512"
      },
      {
        "latitude":47.8928185,
        "longitude":-122.2546158,
        "name":"11603 HWY 99 EVERETT WA 98204",
        "desc":"11603 Highway 99, Everett, WA 98204"
      },
      {
        "latitude":48.240283,
        "longitude":-122.421836,
        "name":"1123 E STATE ROUTE 532 CAMANO ISLAND WA 98282",
        "desc":"1123 Highway 532, Camano Island, WA 98282"
      },
      {
        "latitude":47.5162086,
        "longitude":-122.3547974,
        "name":"9640 16TH AVE SW STE A SEATTLE WA 98106",
        "desc":"9640 16th Ave SW, Seattle, WA 98106"
      },
      {
        "latitude":47.8198624,
        "longitude":-117.8389969,
        "name":"38278 ANGELS LANDING RD N FORD WA 99013",
        "desc":"38278 Angels Landing Rd N, Ford, WA 99013"
      },
      {
        "latitude":47.3829231,
        "longitude":-122.4241104,
        "name":"7206 SW 248TH ST VASHON WA 98070",
        "desc":"7206 SW 248th St, Vashon, WA 98070"
      },
      {
        "latitude":48.8614349,
        "longitude":-122.5861664,
        "name":"6061 PORTAL WAY FERNDALE WA 98248",
        "desc":"6061 Portal Way, Ferndale, WA 98248"
      },
      {
        "latitude":47.7123909,
        "longitude":-117.3543549,
        "name":"6009 N JULIA ST SPOKANE WA 99217",
        "desc":"6009 N Julia St, Spokane, WA 99217"
      },
      {
        "latitude":47.8907575,
        "longitude":-117.4978834,
        "name":"25711 N MONROE RD DEER PARK WA 99006",
        "desc":"25711 N Monroe Rd, Deer Park, WA 99006"
      },
      {
        "latitude":47.3601032,
        "longitude":-121.8871267,
        "name":"34307 SE 270TH ST RAVENSDALE WA 98051",
        "desc":"34307 SE 270th St, Ravensdale, WA 98051"
      },
      {
        "latitude":47.6817738,
        "longitude":-117.2667488,
        "name":"2621 N FELTS RD SPOKANE VALLEY WA 99206",
        "desc":"2621 N Felts Rd, Spokane Valley, WA 99206"
      },
      {
        "latitude":47.192539,
        "longitude":-119.386047,
        "name":"4896 MCCHONIHE RD NE SITE A MOSES LAKE WA 98837",
        "desc":"4896 McConihe Rd NE, Moses Lake, WA 98837"
      },
      {
        "latitude":47.8954086,
        "longitude":-120.4532166,
        "name":"17801 ENTIAT RIVER RD STE A ENTIAT WA 98822",
        "desc":"17801 Entiat River Rd, Entiat, WA 98822"
      },
      {
        "latitude":47.7165225,
        "longitude":-118.936969,
        "name":"31150 COSGROVE RD N, STE A ALMIRA WA 99103",
        "desc":"31150 Cosgrove Rd N, Almira, WA 99103"
      },
      {
        "latitude":48.0230255,
        "longitude":-117.8789825,
        "name":"4711 #U SPRINGDALE HUNTERS RD SPRINGDALE WA 99173",
        "desc":"4711 Springdale-Hunters Rd, Springdale, WA 99173"
      },
      {
        "latitude":47.8785629,
        "longitude":-117.850235,
        "name":"5494J HWY 231 STE 101 FORD WA 99013",
        "desc":"5494 Highway 231, Ford, WA 99013"
      },
      {
        "latitude":48.0015488,
        "longitude":-123.0904541,
        "name":"374 BUSINESS PARK LP SEQUIM WA 98382",
        "desc":"98382, WA"
      },
      {
        "latitude":47.6569595,
        "longitude":-117.3936157,
        "name":"1107 E 1ST AVE SPOKANE WA 99202",
        "desc":"1107 E 1st Ave, Spokane, WA 99202"
      },
      {
        "latitude":48.6834797,
        "longitude":-119.5042777,
        "name":"8 COW TRAIL RD TONASKET WA 98855",
        "desc":"8 Cow Trail Rd, Tonasket, WA 98855"
      },
      {
        "latitude":48.4152118,
        "longitude":-119.4780786,
        "name":"234 OMAK RIVER RD STE A OMAK WA 98841",
        "desc":"234 Omak River Rd, Omak, WA 98841"
      },
      {
        "latitude":46.4155121,
        "longitude":-117.0451736,
        "name":"721 6TH ST CLARKSTON WA 99403",
        "desc":"721 6th St, Clarkston, WA 99403"
      },
      {
        "latitude":47.718303,
        "longitude":-117.364097,
        "name":"6620 N MARKET ST SUITE 100 SPOKANE WA 99217",
        "desc":"6620 N Market St, Spokane, WA 99217"
      },
      {
        "latitude":46.9773218,
        "longitude":-123.8056223,
        "name":"1000 E WISHKAH ST ABERDEEN WA 98520",
        "desc":"1000 E Wishkah St, Aberdeen, WA 98520"
      },
      {
        "latitude":47.00716,
        "longitude":-120.5703887,
        "name":"1516 WEST UNIVERSITY WAY ELLENSBURG WA 98926",
        "desc":"1516 W University Way, Ellensburg, WA 98926"
      },
      {
        "latitude":47.578769,
        "longitude":-122.329559,
        "name":"2733 4TH AVE S SEATTLE WA 98134",
        "desc":"2733 4th Ave S, Seattle, WA 98134"
      },
      {
        "latitude":45.7806435,
        "longitude":-122.5573484,
        "name":"1910 W MAIN ST SUITE 101 BATTLE GROUND WA 98604",
        "desc":"1910 W Main St, Battle Ground, WA 98604"
      },
      {
        "latitude":45.6239357,
        "longitude":-122.6472931,
        "name":"2305 E 5TH ST VANCOUVER WA 98661",
        "desc":"2305 E 5th St, Vancouver, WA 98661"
      },
      {
        "latitude":48.7394943,
        "longitude":-119.2947769,
        "name":"91 RAZOR RD TONASKET WA 98855",
        "desc":"91 Razor Rd, Tonasket, WA 98855"
      },
      {
        "latitude":48.758873,
        "longitude":-122.4557877,
        "name":"2134 PACIFIC ST BELLINGHAM WA 98229",
        "desc":"2134 Pacific St, Bellingham, WA 98229"
      },
      {
        "latitude":48.021675,
        "longitude":-122.054336,
        "name":"2705 HARTFORD DR STE A LAKE STEVENS WA 98258",
        "desc":"2705 Hartford Dr, Lake Stevens, WA 98258"
      },
      {
        "latitude":48.8395882,
        "longitude":-122.4888916,
        "name":"5473 GUIDE MERIDIAN RD LOT A BELLINGHAM WA 98226",
        "desc":"5473 Guide Meridian Rd, Bellingham, WA 98226"
      },
      {
        "latitude":45.690239,
        "longitude":-122.5164566,
        "name":"26212 NE 152ND AVE VANCOUVER WA 98682",
        "desc":"NE 152nd Ave, Vancouver, WA 98682"
      },
      {
        "latitude":47.3383699,
        "longitude":-119.5353317,
        "name":"1448 BASIN ST NW SUITE A EPHRATA WA 98823",
        "desc":"1448 Basin St NW, Ephrata, WA 98823"
      },
      {
        "latitude":48.3999138,
        "longitude":-122.3324127,
        "name":"2714 HENSON RD MOUNT VERNON WA 98273",
        "desc":"2714 Henson Rd, Mount Vernon, WA 98273"
      },
      {
        "latitude":48.4695299,
        "longitude":-119.5270289,
        "name":"99 GREENACRES RD SUITE E RIVERSIDE WA 98849",
        "desc":"99 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":48.5286026,
        "longitude":-122.0565796,
        "name":"8129A PIPELINE RD LYMAN WA 98263",
        "desc":"8129 Pipeline Rd, Sedro-Woolley, WA 98284"
      },
      {
        "latitude":46.8438142,
        "longitude":-123.049916,
        "name":"16726 PROMISE LN SW ROCHESTER WA 98579",
        "desc":"16726 Promise Ln SW, Rochester, WA 98579"
      },
      {
        "latitude":48.7312659,
        "longitude":-119.4250164,
        "name":"31688 D HWY 97 SUITE A TONASKET WA 98855",
        "desc":"31688 Highway 97, Tonasket, WA 98855"
      },
      {
        "latitude":48.0872002,
        "longitude":-123.2878876,
        "name":"639 JOHN JACOBS RD PORT ANGELES WA 98362",
        "desc":"639 John Jacobs Rd, Port Angeles, WA 98362"
      },
      {
        "latitude":48.2209971,
        "longitude":-117.1252294,
        "name":"556 LONE PINE RD NEWPORT WA 99156",
        "desc":"556 Lone Pine Rd, Newport, WA 99156"
      },
      {
        "latitude":47.6749496,
        "longitude":-117.2348099,
        "name":"12620 E INDIANA AVE SPOKANE VALLEY WA 99216",
        "desc":"12620 E Indiana Ave, Spokane Valley, WA 99216"
      },
      {
        "latitude":47.2237244,
        "longitude":-123.217392,
        "name":"6671 W SHELTON MATLOCK RD SHELTON WA 98584",
        "desc":"6671 W Shelton Matlock Rd, Shelton, WA 98584"
      },
      {
        "latitude":48.302291,
        "longitude":-120.028953,
        "name":"166 BENSON CREEK DR STE E TWISP WA 98856",
        "desc":"166 Benson Creek Dr, Twisp, WA 98856"
      },
      {
        "latitude":48.7396507,
        "longitude":-122.4703598,
        "name":"1240 E MAPLE ST STE 103 BELLINGHAM WA 98225",
        "desc":"1240 E Maple St, Bellingham, WA 98225"
      },
      {
        "latitude":48.170497,
        "longitude":-122.186126,
        "name":"19129 SMOKEY POINT BLVD STE B ARLINGTON WA 98223",
        "desc":"19129 Smokey Point Blvd, Arlington, WA 98223"
      },
      {
        "latitude":48.1725597,
        "longitude":-122.1460082,
        "name":"19401 63RD AVE NE ARLINGTON WA 98223",
        "desc":"19401 63rd Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.2394467,
        "longitude":-122.4105571,
        "name":"1501 E PORTLAND AVE TACOMA WA 98421",
        "desc":"1501 E Portland Ave, Tacoma, WA 98421"
      },
      {
        "latitude":48.791713,
        "longitude":-122.44313,
        "name":"4165 HANNEGAN RD STE B BELLINGHAM WA 98226",
        "desc":"4165 Hannegan Rd, Bellingham, WA 98226"
      },
      {
        "latitude":45.66431,
        "longitude":-122.548156,
        "name":"5717 NE 121ST AVE VANCOUVER WA 98682",
        "desc":"5717 NE 121st Ave, Vancouver, WA 98682"
      },
      {
        "latitude":47.2255287,
        "longitude":-123.1779175,
        "name":"50 W. WESTFIELD CT. UNIT D SHELTON WA 98584",
        "desc":"98584, WA"
      },
      {
        "latitude":46.3157387,
        "longitude":-119.467041,
        "name":"268705 N 132 PR NE BENTON CITY WA 99320",
        "desc":"N 132 Pr NE, Benton City, WA 99320"
      },
      {
        "latitude":46.7047653,
        "longitude":-122.9562607,
        "name":"1039 S GOLD ST CENTRALIA WA 98531",
        "desc":"1039 S Gold St, Centralia, WA 98531"
      },
      {
        "latitude":47.57444,
        "longitude":-117.702858,
        "name":"1618 WILLOW ST CHENEY WA 99404",
        "desc":"Willow Dr, Medical Lake, WA 99022"
      },
      {
        "latitude":48.0742111,
        "longitude":-122.0989761,
        "name":"8618 99TH AVE NE STE A ARLINGTON WA 98223",
        "desc":"8618 99th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.7078857,
        "longitude":-117.3568115,
        "name":"3605 E ROWAN AVE SPOKANE WA 99217",
        "desc":"3605 E Rowan Ave, Spokane, WA 99217"
      },
      {
        "latitude":47.585891,
        "longitude":-121.935997,
        "name":"30334 SE 26TH STREET STE C FALL CITY WA 98024",
        "desc":"30334 SE 26th St, Fall City, WA 98024"
      },
      {
        "latitude":47.670257,
        "longitude":-117.281929,
        "name":"1421 N MULLAN RD STE B SPOKANE VALLEY WA 99206",
        "desc":"1421 N Mullan Rd, Spokane Valley, WA 99206"
      },
      {
        "latitude":47.721614,
        "longitude":-117.411697,
        "name":"7011 N DIVISION ST STE A SPOKANE WA 99208",
        "desc":"7011 N Division St, Spokane, WA 99208"
      },
      {
        "latitude":47.5774164,
        "longitude":-122.3291367,
        "name":"2905 4TH AVE S SEATTLE WA 98134",
        "desc":"2905 4th Ave S, Seattle, WA 98134"
      },
      {
        "latitude":48.687297,
        "longitude":-122.194992,
        "name":"5410 SAXON RD STE A ACME WA 98220",
        "desc":"5410 Saxon Rd, Acme, WA 98220"
      },
      {
        "latitude":47.8364421,
        "longitude":-121.9947423,
        "name":"17595 177TH AVE SE MONROE WA 98272",
        "desc":"17595 177th Ave SE, Monroe, WA 98272"
      },
      {
        "latitude":47.8364421,
        "longitude":-121.9947423,
        "name":"17595 177TH AVE SE STE B MONROE WA 98272",
        "desc":"17595 177th Ave SE, Monroe, WA 98272"
      },
      {
        "latitude":46.8238512,
        "longitude":-118.9839781,
        "name":"1199 W CUNNINGHAM RD OTHELLO WA 99344",
        "desc":"1199 W Cunningham Rd, Othello, WA 99344"
      },
      {
        "latitude":47.1843605,
        "longitude":-122.4623413,
        "name":"8001 S HOSMER ST TACOMA WA 98408",
        "desc":"8001 S Hosmer St, Tacoma, WA 98408"
      },
      {
        "latitude":48.1565919,
        "longitude":-122.1508757,
        "name":"17731 59TH AVE NE BLDG 16  #B ARLINGTON WA 98223",
        "desc":"17731 59th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.411293,
        "longitude":-120.5562668,
        "name":"38818 N HATCH RD SUITE C DEER PARK WA 99006",
        "desc":"Washington"
      },
      {
        "latitude":47.4992714,
        "longitude":-122.2210464,
        "name":"11537 RAINIER AVE S SEATTLE WA 98178",
        "desc":"11537 Rainier Ave S, Seattle, WA 98178"
      },
      {
        "latitude":47.5803566,
        "longitude":-122.3251572,
        "name":"2450 6TH AVE S #104 SEATTLE WA 98134",
        "desc":"2450 6th Ave S, Seattle, WA 98134"
      },
      {
        "latitude":null,
        "longitude":null,
        "name":"4499 ROAD L NE, SUITE B MOSES LAKE WA 98837",
        "desc":"-"
      },
      {
        "latitude":47.5414276,
        "longitude":-120.5607376,
        "name":"8459 MAIN ST DRYDEN WA 98821",
        "desc":"8459 Main St, Dryden, WA 98821"
      },
      {
        "latitude":47.3480148,
        "longitude":-117.3012772,
        "name":"8109 E BRATT RD FAIRFIELD WA 99012",
        "desc":"8109 E Bratt Rd, Fairfield, WA 99012"
      },
      {
        "latitude":48.683477,
        "longitude":-119.5040209,
        "name":"12 COW TRAIL RD TONASKET WA 98855",
        "desc":"12 Cow Trail Rd, Tonasket, WA 98855"
      },
      {
        "latitude":47.48315,
        "longitude":-120.420265,
        "name":"3650 & 1/2 FAIRVIEW CANYON RD MONITOR WA 98836",
        "desc":"3650 Fairview Canyon Rd, Cashmere, WA 98815"
      },
      {
        "latitude":46.298847,
        "longitude":-118.3085597,
        "name":"105 MILL ST PRESCOTT WA 99348",
        "desc":"105 Mill St, Prescott, WA 99348"
      },
      {
        "latitude":46.2968597,
        "longitude":-119.5393448,
        "name":"56005 N THOMAS RD STE A BENTON CITY WA 99320",
        "desc":"56005 N Thomas Rd, Benton City, WA 99320"
      },
      {
        "latitude":48.0985039,
        "longitude":-117.1935701,
        "name":"310 BROKEN J LANE STE A NEWPORT WA 99156",
        "desc":"310 Broken J Ln, Newport, WA 99156"
      },
      {
        "latitude":null,
        "longitude":null,
        "name":"9326 NEPPLE RD NE SUITE A MOSES LAKE WA 98837",
        "desc":"-"
      },
      {
        "latitude":46.115196,
        "longitude":-122.946601,
        "name":"1445 INDUSTRIAL WAY UNIT 19B LONGVIEW WA 98632",
        "desc":"1445 Industrial Way, Longview, WA 98632"
      },
      {
        "latitude":47.5719566,
        "longitude":-122.3223648,
        "name":"3512 AIRPORT WAY S SEATTLE WA 98134",
        "desc":"3512 Airport Way S, Seattle, WA 98134"
      },
      {
        "latitude":47.6500397,
        "longitude":-122.3323212,
        "name":"3528 BAGLEY AVE N SEATTLE WA 98103",
        "desc":"3528 Bagley Ave N, Seattle, WA 98103"
      },
      {
        "latitude":48.7870974,
        "longitude":-122.4560112,
        "name":"4055 HAMMER DR BELLINGHAM WA 98226",
        "desc":"4055 Hammer Dr, Bellingham, WA 98226"
      },
      {
        "latitude":45.6669769,
        "longitude":-122.5406113,
        "name":"6101 NE 127TH AVE SUITE 400 VANCOUVER WA 98682",
        "desc":"6101 NE 127th Ave, Vancouver, WA 98682"
      },
      {
        "latitude":47.3531985,
        "longitude":-122.1220735,
        "name":"27623 COVINGTON WAY SE UNIT 1 COVINGTON WA 98042",
        "desc":"27623 Covington Way SE, Covington, WA 98042"
      },
      {
        "latitude":47.411293,
        "longitude":-120.5562668,
        "name":"39110 N GROVE RD SUITE A DEER PARK WA 99006",
        "desc":"Washington"
      },
      {
        "latitude":47.5056381,
        "longitude":-122.6306229,
        "name":"1703 SE SEDGWICK RD PORT ORCHARD WA 98366",
        "desc":"1703 SE Sedgwick Rd, Port Orchard, WA 98366"
      },
      {
        "latitude":47.1309166,
        "longitude":-122.3578568,
        "name":"13724 CANYON RD E PUYALLUP WA 98373",
        "desc":"13724 Canyon Rd E, Puyallup, WA 98373"
      },
      {
        "latitude":47.7889985,
        "longitude":-119.9777345,
        "name":"19 BOX CANYON RD ORONDO WA 98843",
        "desc":"19 Box Canyon Rd, Orondo, WA 98843"
      },
      {
        "latitude":47.4304629,
        "longitude":-117.4664694,
        "name":"24625 S. RUPP ROAD #4 CHENEY WA 99004",
        "desc":"24625 S Rupp Rd, Cheney, WA 99004"
      },
      {
        "latitude":48.6982155,
        "longitude":-122.8856659,
        "name":"20 CANDLEWOOD LN EASTSOUND WA 98245",
        "desc":"20 Candlewood Ln, Eastsound, WA 98245"
      },
      {
        "latitude":47.3911377,
        "longitude":-120.1998684,
        "name":"806 UTE AVE E EAST WENATCHEE WA 98802",
        "desc":"806 Ute Ave, East Wenatchee, WA 98802"
      },
      {
        "latitude":46.9031809,
        "longitude":-123.9972588,
        "name":"1504 STATE ROUTE 105 ABERDEEN WA 98520",
        "desc":"1504 State RT 105, Aberdeen, WA 98520"
      },
      {
        "latitude":48.7577172,
        "longitude":-122.4651716,
        "name":"794 KENTUCKY ST BELLINGHAM WA 98225",
        "desc":"794 Kentucky St, Bellingham, WA 98225"
      },
      {
        "latitude":48.5100105,
        "longitude":-122.1857719,
        "name":"9268 SOREN RD SEDRO WOOLLEY WA 98284",
        "desc":"9268 Soren Rd, Sedro-Woolley, WA 98284"
      },
      {
        "latitude":48.10651,
        "longitude":-123.390342,
        "name":"212 N GALES ST STE A PORT ANGELES WA 98362",
        "desc":"212 N Gales St, Port Angeles, WA 98362"
      },
      {
        "latitude":48.6142545,
        "longitude":-118.1092595,
        "name":"1250 W SCHREIBER RD KETTLE FALLS WA 99141",
        "desc":"1250 W Schreiber Rd, Kettle Falls, WA 99141"
      },
      {
        "latitude":46.3280556,
        "longitude":-120.041144,
        "name":"10 MAPLE GROVE RD SUNNYSIDE WA 98944",
        "desc":"10 Maple Grove Rd, Sunnyside, WA 98944"
      },
      {
        "latitude":47.5882948,
        "longitude":-122.3285881,
        "name":"432 S MASSACHUSETTS ST SEATTLE WA 98134",
        "desc":"432 S Massachusetts St, Seattle, WA 98134"
      },
      {
        "latitude":47.6119351,
        "longitude":-121.9636441,
        "name":"28011 NE 4TH PL STE 2 REDMOND WA 98053",
        "desc":"28011 NE 4th Pl, Redmond, WA 98053"
      },
      {
        "latitude":47.022197,
        "longitude":-122.94625,
        "name":"3008 29TH AVE SW STE B TUMWATER WA 98512",
        "desc":"3008 29th Ave SW, Tumwater, WA 98512"
      },
      {
        "latitude":47.5811844,
        "longitude":-122.3220596,
        "name":"2415 AIRPORT WAY S SEATTLE WA 98134",
        "desc":"2415 Airport Way S, Seattle, WA 98134"
      },
      {
        "latitude":48.8362656,
        "longitude":-122.4876633,
        "name":"5373 GUIDE MERIDIAN RD STE D3 BELLINGHAM WA 98226",
        "desc":"5373 Guide Meridian Rd, Bellingham, WA 98226"
      },
      {
        "latitude":46.12078,
        "longitude":-122.936096,
        "name":"851 CALIFORNIA WAY STE G LONGVIEW WA 98632",
        "desc":"851 California Way, Longview, WA 98632"
      },
      {
        "latitude":47.2542763,
        "longitude":-122.4255447,
        "name":"1209 ST PAUL ST BLDG 1 TACOMA WA 98421",
        "desc":"1209 St Paul Ave, Tacoma, WA 98421"
      },
      {
        "latitude":46.920638,
        "longitude":-120.5834839,
        "name":"9327 UMPTANUM RD ELLENSBURG WA 98926",
        "desc":"9327 Umptanum Rd, Ellensburg, WA 98926"
      },
      {
        "latitude":47.6022034,
        "longitude":-122.6284103,
        "name":"1225 HOLLIS ST BREMERTON WA 98310",
        "desc":"1225 Hollis St, Bremerton, WA 98310"
      },
      {
        "latitude":47.2497635,
        "longitude":-122.4906464,
        "name":"4002 S 12TH ST TACOMA WA 98405",
        "desc":"4002 S 12th St, Tacoma, WA 98405"
      },
      {
        "latitude":48.0676537,
        "longitude":-122.8585358,
        "name":"409 LANE DE CHANTAL PORT TOWNSEND WA 98368",
        "desc":"409 Lane de Chantal, Port Townsend, WA 98368"
      },
      {
        "latitude":46.9957657,
        "longitude":-122.3907166,
        "name":"2915 288TH ST E SUITE 3 ROY WA 98580",
        "desc":"2915 288th St E, Roy, WA 98580"
      },
      {
        "latitude":48.1117744,
        "longitude":-121.8573456,
        "name":"12720 278TH DR NE STE 1 GRANITE FALLS WA 98252",
        "desc":"12720 278th Dr NE, Granite Falls, WA 98252"
      },
      {
        "latitude":46.9464569,
        "longitude":-122.9415359,
        "name":"9730 LATHROP INDUSTRIAL DR SW OLYMPIA WA 98512",
        "desc":"9730 Lathrop Industrial Dr SW, Olympia, WA 98512"
      },
      {
        "latitude":47.002784,
        "longitude":-122.935348,
        "name":"2407 50TH AVE SW BUILDING 1 TUMWATER WA 98512",
        "desc":"2407 50th Ave SW, Tumwater, WA 98512"
      },
      {
        "latitude":47.5874452,
        "longitude":-122.3290052,
        "name":"1728 4TH AVE S SEATTLE WA 98134",
        "desc":"1728 4th Ave S, Seattle, WA 98134"
      },
      {
        "latitude":47.7381325,
        "longitude":-122.3459854,
        "name":"15001 AURORA AVE N SHORELINE WA 98133",
        "desc":"15001 Aurora Ave N, Shoreline, WA 98133"
      },
      {
        "latitude":47.965316,
        "longitude":-117.556945,
        "name":"4645 N SWENSON RD STE A CLAYTON WA 99110",
        "desc":"4645 N Swenson Rd, Clayton, WA 99110"
      },
      {
        "latitude":47.3732452,
        "longitude":-120.1988983,
        "name":"3919 MALAGA ALCOA HWY MALAGA WA 98828",
        "desc":"3919 Malaga Alcoa Hwy, Malaga, WA 98828"
      },
      {
        "latitude":46.3895888,
        "longitude":-120.0672975,
        "name":"351 W MERZ RD STE 1 SUNNYSIDE WA 98944",
        "desc":"351 W Merz Rd, Sunnyside, WA 98944"
      },
      {
        "latitude":48.000309,
        "longitude":-119.6601639,
        "name":"2512 FOSTER CREEK AVE BRIDGEPORT WA 98813",
        "desc":"2512 Foster Creek Ave, Bridgeport, WA 98813"
      },
      {
        "latitude":47.2535404,
        "longitude":-122.248781,
        "name":"898 VALENTINE AVE SE PACIFIC WA 98047",
        "desc":"898 Valentine Ave SE, Pacific, WA 98047"
      },
      {
        "latitude":48.973201,
        "longitude":-122.723312,
        "name":"2750 PEACE PORTAL DR STE A BLAINE WA 98230",
        "desc":"2750 Peace Portal Dr, Blaine, WA 98230"
      },
      {
        "latitude":48.5054245,
        "longitude":-123.0584488,
        "name":"491 TELEGRAPH LN #A FRIDAY HARBOR WA 98250",
        "desc":"491 Telegraph Ln, Friday Harbor, WA 98250"
      },
      {
        "latitude":47.2253396,
        "longitude":-123.9733643,
        "name":"84 HANSON RD HUMPTULIPS WA 98552",
        "desc":"84 Hanson Rd, Hoquiam, WA 98550"
      },
      {
        "latitude":48.0882639,
        "longitude":-122.8204134,
        "name":"192 W FREDERICKS ST PORT TOWNSEND WA 98368",
        "desc":"192 W Fredericks St, Port Townsend, WA 98368"
      },
      {
        "latitude":47.6859742,
        "longitude":-117.1620863,
        "name":"18101 E EUCLID AVE SPOKANE VALLEY WA 99216",
        "desc":"18101 E Euclid Ave, Spokane Valley, WA 99216"
      },
      {
        "latitude":48.5625764,
        "longitude":-122.2410938,
        "name":"5675 BROOKINGS RD SEDRO WOOLLEY WA 98284",
        "desc":"5675 Brookings Rd, Sedro-Woolley, WA 98284"
      },
      {
        "latitude":47.579509,
        "longitude":-122.326927,
        "name":"505 S LANDER ST STE 2 SEATTLE WA 98134",
        "desc":"505 S Lander St, Seattle, WA 98134"
      },
      {
        "latitude":47.713649,
        "longitude":-122.159637,
        "name":"13513 NE 126TH PL STE B KIRKLAND WA 98034",
        "desc":"13513 NE 126th Pl, Kirkland, WA 98034"
      },
      {
        "latitude":48.3003301,
        "longitude":-117.3337866,
        "name":"271 AMBUSH GROVE LOOP STE B USK WA 99180",
        "desc":"271 Ambush Grove Loop, Usk, WA 99180"
      },
      {
        "latitude":48.5804443,
        "longitude":-119.0679703,
        "name":"23 EAGLE ROCK RD SUITE 1 TONASKET WA 98855",
        "desc":"23 Eagle Rock Rd, Tonasket, WA 98855"
      },
      {
        "latitude":45.7518082,
        "longitude":-121.4163437,
        "name":"214 BATES RD STE A WHITE SALMON WA 98672",
        "desc":"214 Bates Rd, White Salmon, WA 98672"
      },
      {
        "latitude":46.3743896,
        "longitude":-120.0009079,
        "name":"5990 INDEPENDENCE RD STE B SUNNYSIDE WA 98944",
        "desc":"5990 Independence Rd, Sunnyside, WA 98944"
      },
      {
        "latitude":47.57059,
        "longitude":-122.356346,
        "name":"3601 W MARGINAL WAY SW #10 SEATTLE WA 98106",
        "desc":"3601 W Marginal Way SW, Seattle, WA 98106"
      },
      {
        "latitude":48.1582535,
        "longitude":-122.1509361,
        "name":"17931 59TH AVE NE BLDG 2 STE A ARLINGTON WA 98223",
        "desc":"17931 59th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":46.5643806,
        "longitude":-120.3871918,
        "name":"8531 POSTMA RD  STE D MOXEE WA 98936",
        "desc":"8531 Postma Rd, Moxee, WA 98936"
      },
      {
        "latitude":48.3236486,
        "longitude":-122.6483698,
        "name":"3143 GOLDIE RD OAK HARBOR WA 98277",
        "desc":"3143 Goldie Rd, Oak Harbor, WA 98277"
      },
      {
        "latitude":47.669208,
        "longitude":-117.326271,
        "name":"5805 E SHARP AVE STE C5 SPOKANE VALLEY WA 99212",
        "desc":"5805 E Sharp Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":47.5720444,
        "longitude":-122.3514481,
        "name":"1128 SW SPOKANE ST SEATTLE WA 98134",
        "desc":"1128 SW Spokane St, Seattle, WA 98134"
      },
      {
        "latitude":48.4615409,
        "longitude":-122.5443316,
        "name":"9019 MOLLY LN STE C ANACORTES WA 98221",
        "desc":"9019 Molly Ln, Anacortes, WA 98221"
      },
      {
        "latitude":47.503955,
        "longitude":-122.16555,
        "name":"4033 NE SUNSET BLVD UNIT 5 RENTON WA 98056",
        "desc":"4033 NE Sunset Blvd, Renton, WA 98056"
      },
      {
        "latitude":47.7076035,
        "longitude":-122.301033,
        "name":"10722 LAKE CITY WAY NE SEATTLE WA 98125",
        "desc":"10722 Lake City Way NE, Seattle, WA 98125"
      },
      {
        "latitude":47.2551994,
        "longitude":-122.4715881,
        "name":"2702 6TH AVE TACOMA WA 98406",
        "desc":"2702 6th Ave, Tacoma, WA 98406"
      },
      {
        "latitude":45.9001312,
        "longitude":-120.6823883,
        "name":"2459 BRENTWOOD RD GOLDENDALE WA 98620",
        "desc":"Brentwood Rd, Goldendale, WA 98620"
      },
      {
        "latitude":48.682315,
        "longitude":-119.498886,
        "name":"2 & 4 COW TRAIL ROAD TONASKET WA 98855",
        "desc":"24 Cow Trail Rd, Tonasket, WA 98855"
      },
      {
        "latitude":47.6889212,
        "longitude":-117.162268,
        "name":"3524 N EDEN RD STE B SPOKANE VALLEY WA 99216",
        "desc":"3524 N Eden Rd, Spokane Valley, WA 99216"
      },
      {
        "latitude":48.1161766,
        "longitude":-123.5178604,
        "name":"1509 SOUTH CRITCHFIELD RD PORT ANGELES WA 98363",
        "desc":"1509 S Critchfield Rd, Port Angeles, WA 98363"
      },
      {
        "latitude":47.769822,
        "longitude":-122.6066454,
        "name":"22277 STOTTLEMEYER RD NE POULSBO WA 98370",
        "desc":"22277 Stottlemeyer Rd NE, Poulsbo, WA 98370"
      },
      {
        "latitude":47.8056717,
        "longitude":-122.1423798,
        "name":"21127 STATE ROUTE 9 SE WOODINVILLE WA 98072",
        "desc":"21127 State Route 9 SE, Woodinville, WA 98072"
      },
      {
        "latitude":47.8056717,
        "longitude":-122.1423798,
        "name":"21127 STATE RT 9 SE WOODINVILLE WA 98072",
        "desc":"21127 State Route 9 SE, Woodinville, WA 98072"
      },
      {
        "latitude":47.1520996,
        "longitude":-119.3061066,
        "name":"1824 RD N NE UNIT 3 MOSES LAKE WA 98837",
        "desc":"98837, WA"
      },
      {
        "latitude":48.9918365,
        "longitude":-122.7511597,
        "name":"922 PEACE PORTAL DR BLAINE WA 98230",
        "desc":"922 Peace Portal Dr, Blaine, WA 98230"
      },
      {
        "latitude":48.3022919,
        "longitude":-120.0289536,
        "name":"166 BENSON CREEK RD STE F TWISP WA 98856",
        "desc":"166 Benson Creek Rd, Twisp, WA 98856"
      },
      {
        "latitude":47.2255287,
        "longitude":-123.1779175,
        "name":"50 W WESTFIELD CT UNIT C SHELTON WA 98584",
        "desc":"98584, WA"
      },
      {
        "latitude":47.580772,
        "longitude":-122.320205,
        "name":"923 S BAYVIEW ST STE 200 SEATTLE WA 98134",
        "desc":"923 S Bayview St, Seattle, WA 98134"
      },
      {
        "latitude":48.3245062,
        "longitude":-122.6487219,
        "name":"3169 B GOLDIE RD OAK HARBOR WA 98277",
        "desc":"3169 Goldie Rd, Oak Harbor, WA 98277"
      },
      {
        "latitude":47.4871216,
        "longitude":-120.4173584,
        "name":"100 MAIN ST STE 10 MONITOR WA 98836",
        "desc":"Main St, Monitor, WA 98836"
      },
      {
        "latitude":46.9632111,
        "longitude":-122.9461288,
        "name":"1027 85TH AVE SW TUMWATER WA 98501",
        "desc":"85th Ave SW, Olympia, WA 98512"
      },
      {
        "latitude":46.6443253,
        "longitude":-119.8723297,
        "name":"30356 HIGHWAY 243 S MATTAWA WA 99349",
        "desc":"30356 Highway 243 S, Mattawa, WA 99349"
      },
      {
        "latitude":47.837326,
        "longitude":-117.8064957,
        "name":"7651 HIGHWAY 291 FORD WA 99031",
        "desc":"7651 Highway 291, Ford, WA 99013"
      },
      {
        "latitude":45.666172,
        "longitude":-122.540969,
        "name":"5913 NE 127TH AVE STE 300 VANCOUVER WA 98682",
        "desc":"5913 NE 127th Ave, Vancouver, WA 98682"
      },
      {
        "latitude":47.4224512,
        "longitude":-117.4695432,
        "name":"26425 S RUPP RD F1 CHENEY WA 99004",
        "desc":"26425 S Rupp Rd, Cheney, WA 99004"
      },
      {
        "latitude":47.8233986,
        "longitude":-117.4625931,
        "name":"1220 W BALLARD RD STE B SPOKANE WA 99208",
        "desc":"W Ballard Rd, Spokane, WA 99208"
      },
      {
        "latitude":47.8233986,
        "longitude":-117.4625931,
        "name":"1220 W BALLARD RD STE A SPOKANE WA 99208",
        "desc":"W Ballard Rd, Spokane, WA 99208"
      },
      {
        "latitude":47.3695602,
        "longitude":-120.1826324,
        "name":"4380 KAWECKI ROAD MALAGA WA 98829",
        "desc":"Kawecki Rd, Malaga, WA 98828"
      },
      {
        "latitude":47.7381726,
        "longitude":-122.3452862,
        "name":"15015 AURORA AVE N   STE 21 SHORELINE WA 98133",
        "desc":"15015 Aurora Ave N, Shoreline, WA 98133"
      },
      {
        "latitude":47.681324,
        "longitude":-117.272842,
        "name":"2611 N WOODRUFF RD STE A SPOKANE VALLEY WA 99206",
        "desc":"2611 N Woodruff Rd, Spokane Valley, WA 99206"
      },
      {
        "latitude":47.2222977,
        "longitude":-122.4815674,
        "name":"3801 S PUGET SOUND AVE TACOMA WA 98409",
        "desc":"3801 S Puget Sound Ave, Tacoma, WA 98409"
      },
      {
        "latitude":48.4456757,
        "longitude":-119.4738983,
        "name":"18 RIVERVIEW RD # B OMAK WA 98841",
        "desc":"18 Riverview Rd, Omak, WA 98841"
      },
      {
        "latitude":47.5846939,
        "longitude":-122.3336945,
        "name":"1944 1ST AVE S    STE B SEATTLE WA 98134",
        "desc":"1944 1st Ave S, Seattle, WA 98134"
      },
      {
        "latitude":47.584693,
        "longitude":-122.333694,
        "name":"1944 1ST AVE S STE 300 SEATTLE WA 98134",
        "desc":"1944 1st Ave S, Seattle, WA 98134"
      },
      {
        "latitude":46.8238512,
        "longitude":-118.9839781,
        "name":"1199 W CUNNINGHAM RD SUITE A OTHELLO WA 99344",
        "desc":"1199 W Cunningham Rd, Othello, WA 99344"
      },
      {
        "latitude":48.783775,
        "longitude":-122.443618,
        "name":"3863 HANNEGAN RD STE 106 BELLINGHAM WA 98226",
        "desc":"3863 Hannegan Rd, Bellingham, WA 98226"
      },
      {
        "latitude":46.22929,
        "longitude":-119.7742081,
        "name":"133302 W JOHNSON RD STE A PROSSER WA 99350",
        "desc":"133302 W Johnson Rd, Prosser, WA 99350"
      },
      {
        "latitude":46.22929,
        "longitude":-119.774208,
        "name":"133302 W JOHNSON RD STE B PROSSER WA 99350",
        "desc":"133302 W Johnson Rd, Prosser, WA 99350"
      },
      {
        "latitude":48.5963783,
        "longitude":-122.3217316,
        "name":"3431 OLD HIGHWAY 99 NORTH RD BURLINGTON WA 98233",
        "desc":"3431 Old Highway 99 North Rd, Burlington, WA 98233"
      },
      {
        "latitude":46.2587013,
        "longitude":-122.9665146,
        "name":"251 GARLOCK RD STE B CASTLE ROCK WA 98611",
        "desc":"251 Garlock Rd, Castle Rock, WA 98611"
      },
      {
        "latitude":46.2587013,
        "longitude":-122.9665146,
        "name":"251 GARLOCK RD STE A CASTLE ROCK WA 98611",
        "desc":"251 Garlock Rd, Castle Rock, WA 98611"
      },
      {
        "latitude":47.7122196,
        "longitude":-117.0983838,
        "name":"22909 E TRENT AVE OTIS ORCHARDS WA 99027",
        "desc":"22909 E Trent Ave, Otis Orchards, WA 99027"
      },
      {
        "latitude":47.3674583,
        "longitude":-120.2822876,
        "name":"440 GRUBB RD STE 2 WENATCHEE WA 98801",
        "desc":"Grubb Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":null,
        "longitude":null,
        "name":"139 GREENACRES RD PLOT #4 RIVERSIDE WA 98849",
        "desc":"-"
      },
      {
        "latitude":46.7840881,
        "longitude":-123.0187225,
        "name":"6424 210TH AVE SW CENTRALIA WA 98531",
        "desc":"6424 210th Ave SW, Centralia, WA 98531"
      },
      {
        "latitude":47.1561621,
        "longitude":-123.0130584,
        "name":"421 SE SELLS DR SUITE A SHELTON WA 98584",
        "desc":"421 SE Sells Dr, Shelton, WA 98584"
      },
      {
        "latitude":47.2630233,
        "longitude":-122.3978421,
        "name":"1920 PORT OF TACOMA RD TACOMA WA 98421",
        "desc":"1920 Port of Tacoma Rd, Tacoma, WA 98421"
      },
      {
        "latitude":48.1565583,
        "longitude":-122.1508744,
        "name":"17727 59TH AVE NE BLDG 12 #A ARLINGTON WA 98223",
        "desc":"17727 59th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.2323189,
        "longitude":-122.4721451,
        "name":"3113 B S PINE ST TACOMA WA 98409",
        "desc":"3113 S Pine St, Tacoma, WA 98409"
      },
      {
        "latitude":47.4837952,
        "longitude":-122.0801926,
        "name":"19610 SE 128TH WAY ISSAQUAH WA 98027",
        "desc":"19610 SE 128th Way, Issaquah, WA 98027"
      },
      {
        "latitude":46.2489319,
        "longitude":-119.6533585,
        "name":"22604 HOSKO RD PROSSER WA 99350",
        "desc":"N Hosko Rd, Prosser, WA 99350"
      },
      {
        "latitude":47.6676903,
        "longitude":-117.3304138,
        "name":"1110 N STANLEY RD SPOKANE VALLEY WA 99212",
        "desc":"1110 N Stanley Rd, Spokane Valley, WA 99212"
      },
      {
        "latitude":46.1653119,
        "longitude":-122.9160301,
        "name":"820A WESTSIDE HWY KELSO WA 98626",
        "desc":"820 Westside Hwy, Kelso, WA 98626"
      },
      {
        "latitude":47.1515121,
        "longitude":-122.9456406,
        "name":"8213 STEAM BOAT ISLAND RD NW OLYMPIA WA 98502",
        "desc":"8213 Steamboat Island Rd NW, Olympia, WA 98502"
      },
      {
        "latitude":47.9445686,
        "longitude":-117.402832,
        "name":"31526 N LIDGERWOOD LN STE 1 DEER PARK WA 99006",
        "desc":"31526 N Lidgerwood Ln, Deer Park, WA 99006"
      },
      {
        "latitude":48.1717229,
        "longitude":-122.1459686,
        "name":"19321 63RD AVE NE STE A ARLINGTON WA 98223",
        "desc":"19321 63rd Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.2124329,
        "longitude":-119.8886337,
        "name":"18514 RD 8 NW QUINCY WA 98848",
        "desc":"18514 Road 8 NW, Quincy, WA 98848"
      },
      {
        "latitude":47.235699,
        "longitude":-119.6609764,
        "name":"10167 ROAD H NW EPHRATA WA 98823",
        "desc":"10167 Road H NW, Ephrata, WA 98823"
      },
      {
        "latitude":47.5342674,
        "longitude":-121.9463425,
        "name":"29700 SE HIGH POINT WAY ISSAQUAH WA 98027",
        "desc":"29700 SE High Point Way, Issaquah, WA 98027"
      },
      {
        "latitude":47.823745,
        "longitude":-122.002609,
        "name":"17022 FROHNING RD MONROE WA 98272",
        "desc":"17022 Frohning Rd, Monroe, WA 98272"
      },
      {
        "latitude":47.575172,
        "longitude":-122.334709,
        "name":"3207 1ST AVE S UNIT A SEATTLE WA 98134",
        "desc":"3207 1st Ave S, Seattle, WA 98134"
      },
      {
        "latitude":47.447078,
        "longitude":-122.830596,
        "name":"23441 NE STATE ROUTE 3 BELFAIR WA 98528",
        "desc":"23441 NE State Route 3, Belfair, WA 98528"
      },
      {
        "latitude":46.5643806,
        "longitude":-120.3871918,
        "name":"8531 POSTMA RD   STE G MOXEE WA 98936",
        "desc":"8531 Postma Rd, Moxee, WA 98936"
      },
      {
        "latitude":47.6611671,
        "longitude":-117.3566971,
        "name":"3625 E FERRY ST SPOKANE WA 99202",
        "desc":"3625 E Ferry Ave, Spokane, WA 99202"
      },
      {
        "latitude":46.8649902,
        "longitude":-123.2762146,
        "name":"1831 S BANK RD OAKVILLE WA 98568",
        "desc":"1831 South Bank Rd, Oakville, WA 98568"
      },
      {
        "latitude":47.3851204,
        "longitude":-120.1934357,
        "name":"4263 12TH ST SE EAST WENATCHEE WA 98802",
        "desc":"4263 12th St SE, East Wenatchee, WA 98802"
      },
      {
        "latitude":46.6464961,
        "longitude":-120.5303695,
        "name":"521 S 1ST ST #A SELAH WA 98942",
        "desc":"521 S 1st St, Selah, WA 98942"
      },
      {
        "latitude":48.784446,
        "longitude":-122.451789,
        "name":"1975 ALPINE WAY #6 BELLINGHAM WA 98226",
        "desc":"1975 Alpine Way, Bellingham, WA 98226"
      },
      {
        "latitude":45.8763179,
        "longitude":-122.7160989,
        "name":"35702 NW TOENJES RD STE 1 WOODLAND WA 98674",
        "desc":"35702 NW Toenjes Rd, Woodland, WA 98674"
      },
      {
        "latitude":48.2399788,
        "longitude":-122.2093887,
        "name":"26901 15TH AVE NE  BLDG 1 ARLINGTON WA 98223",
        "desc":"26901 15th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":48.4742203,
        "longitude":-122.3686295,
        "name":"17447 PETERSON RD  STE 2 BURLINGTON WA 98233",
        "desc":"17447 Peterson Rd, Burlington, WA 98233"
      },
      {
        "latitude":47.9744835,
        "longitude":-122.1920776,
        "name":"3223 PINE ST EVERETT WA 98201",
        "desc":"3223 Pine St, Everett, WA 98201"
      },
      {
        "latitude":47.9818111,
        "longitude":-122.1898013,
        "name":"3015 EVERETT AVE EVERETT WA 98201",
        "desc":"3015 Everett Ave, Everett, WA 98201"
      },
      {
        "latitude":45.7359276,
        "longitude":-120.973999,
        "name":"154 STRING STREET RD SUITE A CENTERVILLE WA 98613",
        "desc":"98613, WA"
      },
      {
        "latitude":45.6695357,
        "longitude":-122.6376792,
        "name":"3214 NE 65TH ST VANCOUVER WA 98663",
        "desc":"3214 NE 65th St, Vancouver, WA 98663"
      },
      {
        "latitude":45.8270874,
        "longitude":-120.8043823,
        "name":"650 LLAMA LN GOLDENDALE WA 98620",
        "desc":"650 Llama Ln, Goldendale, WA 98620"
      },
      {
        "latitude":47.7588921,
        "longitude":-120.3681183,
        "name":"10064 ENTIAT RIVER RD ENTIAT WA 98822",
        "desc":"10064 Entiat River Rd, Entiat, WA 98822"
      },
      {
        "latitude":46.2949104,
        "longitude":-119.4930725,
        "name":"56603 N SR 225 NW BENTON CITY WA 99320",
        "desc":"56603 N Sr 225 NW, Benton City, WA 99320"
      },
      {
        "latitude":48.0205727,
        "longitude":-122.0531464,
        "name":"2524 N MACHIAS RD LAKE STEVENS WA 98258",
        "desc":"2524 N Machias Rd, Lake Stevens, WA 98258"
      },
      {
        "latitude":48.0556183,
        "longitude":-117.7684631,
        "name":"3969 SPRINGDALE HUNTERS RD SPRINGDALE WA 99173",
        "desc":"Springdale-Hunters Rd, Springdale, WA 99173"
      },
      {
        "latitude":47.167919,
        "longitude":-119.726608,
        "name":"5384 NW K RD STE A QUINCY WA 98848",
        "desc":"5384 Road K NW, Quincy, WA 98848"
      },
      {
        "latitude":47.233032,
        "longitude":-122.450103,
        "name":"2915 S M ST  UNIT 103 TACOMA WA 98409",
        "desc":"2915 S M St, Tacoma, WA 98409"
      },
      {
        "latitude":48.443607,
        "longitude":-122.342926,
        "name":"205 W STEWART RD STE 107 MOUNT VERNON WA 98273",
        "desc":"205 W Stewart Rd, Mount Vernon, WA 98273"
      },
      {
        "latitude":47.7332115,
        "longitude":-122.3130951,
        "name":"14343 15TH AVE NE SEATTLE WA 98125",
        "desc":"14343 15th Ave NE, Seattle, WA 98125"
      },
      {
        "latitude":47.7100716,
        "longitude":-117.355484,
        "name":"5724 N SYCAMORE ST SPOKANE WA 99217",
        "desc":"5724 N Sycamore St, Spokane, WA 99217"
      },
      {
        "latitude":48.9450426,
        "longitude":-119.4166667,
        "name":"130 CHESAW RD OROVILLE WA 98844",
        "desc":"130 Chesaw Rd, Oroville, WA 98844"
      },
      {
        "latitude":47.6678444,
        "longitude":-121.9988085,
        "name":"7104 254TH AVE NE REDMOND WA 98053",
        "desc":"7104 254th Ave NE, Redmond, WA 98053"
      },
      {
        "latitude":47.0689735,
        "longitude":-122.7576447,
        "name":"2604 WILLAMETTE DR NE LACEY WA 98516",
        "desc":"2604 Willamette Dr NE, Lacey, WA 98516"
      },
      {
        "latitude":48.4721176,
        "longitude":-119.5270215,
        "name":"139 GREENACRES RD RIVERSIDE WA 98849",
        "desc":"139 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":47.2282746,
        "longitude":-122.4791298,
        "name":"3303 S 35TH ST TACOMA WA 98409",
        "desc":"3303 S 35th St, Tacoma, WA 98409"
      },
      {
        "latitude":46.1213684,
        "longitude":-122.8910522,
        "name":"1811 BAKER WAY KELSO WA 98626",
        "desc":"1811 Baker Way, Kelso, WA 98626"
      },
      {
        "latitude":46.1224136,
        "longitude":-122.9009705,
        "name":"2205 PARROT WAY SUITE A KELSO WA 98626",
        "desc":"2205 Parrott Way, Kelso, WA 98626"
      },
      {
        "latitude":47.6756758,
        "longitude":-122.6929294,
        "name":"12363 CLEAR CREEK RD NW SILVERDALE WA 98383",
        "desc":"12363 Clear Creek Rd NW, Silverdale, WA 98383"
      },
      {
        "latitude":47.8215828,
        "longitude":-117.271492,
        "name":"18102 N DAY MT SPOKANE RD  #3 MEAD WA 99021",
        "desc":"18102 N Day Mt Spokane Rd, Mead, WA 99021"
      },
      {
        "latitude":46.7944716,
        "longitude":-122.7792435,
        "name":"7713 SKOOKUMCHUCK RD SE TENINO WA 98589",
        "desc":"7713 Skookumchuck Rd SE, Tenino, WA 98589"
      },
      {
        "latitude":46.7932549,
        "longitude":-122.7771988,
        "name":"7715 SKOOKUMCHUCK RD SE STE D TENINO WA 98589",
        "desc":"7715 Skookumchuck Rd SE, Tenino, WA 98589"
      },
      {
        "latitude":48.107482,
        "longitude":-121.94841,
        "name":"12315 MOUNTAIN LOOP HWY STE A GRANITE FALLS WA 98252",
        "desc":"12315 Mountain Loop Hwy, Granite Falls, WA 98252"
      },
      {
        "latitude":47.8750076,
        "longitude":-122.2705307,
        "name":"13601 HIGHWAY 99 STE B EVERETT WA 98204",
        "desc":"13601 Highway 99, Everett, WA 98204"
      },
      {
        "latitude":47.16258,
        "longitude":-122.4342618,
        "name":"10422 PACIFIC AVE S STE B TACOMA WA 98444",
        "desc":"10422 Pacific Ave S, Tacoma, WA 98444"
      },
      {
        "latitude":47.6759454,
        "longitude":-122.3626904,
        "name":"417 NW 65TH ST SEATTLE WA 98117",
        "desc":"417 NW 65th St, Seattle, WA 98117"
      },
      {
        "latitude":46.2098064,
        "longitude":-119.8664899,
        "name":"305 S LOWER COUNTY LINE RD PROSSER WA 99350",
        "desc":"305 S Lower County Line Rd, Grandview, WA 98930"
      },
      {
        "latitude":48.7870974,
        "longitude":-122.4560112,
        "name":"4055 HAMMER DR STE 103 BELLINGHAM WA 98226",
        "desc":"4055 Hammer Dr, Bellingham, WA 98226"
      },
      {
        "latitude":48.1574227,
        "longitude":-122.1509059,
        "name":"17831 59TH AVE NE ARLINGTON WA 98223",
        "desc":"17831 59th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.0039711,
        "longitude":-123.452179,
        "name":"1087 MONTE ELMA RD ELMA WA 98541",
        "desc":"1087 Monte-Elma Rd, Elma, WA 98541"
      },
      {
        "latitude":47.232498,
        "longitude":-122.451881,
        "name":"2940 S M STREET STE C TACOMA WA 98409",
        "desc":"2940 S M St, Tacoma, WA 98409"
      },
      {
        "latitude":47.5314827,
        "longitude":-120.4211884,
        "name":"6000 WARNER CANYON RD STE A CASHMERE WA 98815",
        "desc":"6000 Warner Canyon Rd, Cashmere, WA 98815"
      },
      {
        "latitude":48.0741622,
        "longitude":-122.006935,
        "name":"8631 STATE ROUTE 92 STE A GRANITE FALLS WA 98252",
        "desc":"8631 State Route 92, Granite Falls, WA 98252"
      },
      {
        "latitude":45.6418495,
        "longitude":-122.647171,
        "name":"2815 ST. JOHNS ROAD   STE B VANCOUVER WA 98661",
        "desc":"2815 St Johns Blvd, Vancouver, WA 98661"
      },
      {
        "latitude":48.5226555,
        "longitude":-123.0601807,
        "name":"142 PEMBERTON PL STE B FRIDAY HARBOR WA 98250",
        "desc":"142 Pemberton Pl, Friday Harbor, WA 98250"
      },
      {
        "latitude":46.6656113,
        "longitude":-123.7809601,
        "name":"45 RAYMOND SOUTH BEND RD SOUTH BEND WA 98586",
        "desc":"45 Raymond South Bend Rd, Raymond, WA 98577"
      },
      {
        "latitude":47.043247,
        "longitude":-122.856979,
        "name":"3044 PACIFIC AVE SE STE B OLYMPIA WA 98501",
        "desc":"3044 Pacific Ave SE, Olympia, WA 98501"
      },
      {
        "latitude":48.794452,
        "longitude":-122.485298,
        "name":"4220 MERIDIAN ST STE 102 BELLINGHAM WA 98226",
        "desc":"4220 Meridian St, Bellingham, WA 98226"
      },
      {
        "latitude":48.8362656,
        "longitude":-122.4876633,
        "name":"5373 GUIDE MERIDIAN STE F5 BELLINGHAM WA 98226",
        "desc":"5373 Guide Meridian, Bellingham, WA 98226"
      },
      {
        "latitude":47.472011,
        "longitude":-120.3313006,
        "name":"3012 GS CENTER RD STE A WENATCHEE WA 98801",
        "desc":"3012 GS Center Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.4994125,
        "longitude":-122.2210846,
        "name":"11463 RAINIER AVE S STE A SEATTLE WA 98178",
        "desc":"11463 Rainier Ave S, Seattle, WA 98178"
      },
      {
        "latitude":47.4706573,
        "longitude":-117.8145981,
        "name":"20219 S HARRISON RD EDWALL WA 99008",
        "desc":"20219 S Harrison Rd, Edwall, WA 99008"
      },
      {
        "latitude":47.0049515,
        "longitude":-124.1654739,
        "name":"668 OCEAN SHORES BLVD NW OCEAN SHORES WA 98569",
        "desc":"668 Ocean Shores Blvd NW, Ocean Shores, WA 98569"
      },
      {
        "latitude":48.2250404,
        "longitude":-117.1710205,
        "name":"461 MCCLOUD CREEK RD NEWPORT WA 99156",
        "desc":"461 McCloud Creek Rd, Newport, WA 99156"
      },
      {
        "latitude":48.188488,
        "longitude":-119.6832275,
        "name":"73 PIT RD STE A BREWSTER WA 98812",
        "desc":"73 Pit Rd, Brewster, WA 98812"
      },
      {
        "latitude":47.6877213,
        "longitude":-117.5731659,
        "name":"3307 N LYONS RD #101 SPOKANE WA 99224",
        "desc":"3307 N Lyons Rd, Spokane, WA 99224"
      },
      {
        "latitude":47.6859715,
        "longitude":-117.1649449,
        "name":"17901 E EUCLID AVE SPOKANE VALLEY WA 99216",
        "desc":"17901 E Euclid Ave, Spokane Valley, WA 99216"
      },
      {
        "latitude":47.670818,
        "longitude":-117.411628,
        "name":"1403 N DIVISION ST STE A SPOKANE WA 99202",
        "desc":"1403 N Division St, Spokane, WA 99202"
      },
      {
        "latitude":48.924507,
        "longitude":-122.079101,
        "name":"7466 MT BAKER HWY MAPLE FALLS WA 98266",
        "desc":"7466 Mt Baker Hwy, Deming, WA 98244"
      },
      {
        "latitude":47.6101052,
        "longitude":-122.1983434,
        "name":"10697 MAIN ST STE B BELLEVUE WA 98004",
        "desc":"10697 Main St, Bellevue, WA 98004"
      },
      {
        "latitude":47.1169662,
        "longitude":-120.504097,
        "name":"13421 WILSON CREEK RD ELLENSBURG WA 98926",
        "desc":"13421 Wilson Creek Rd, Ellensburg, WA 98926"
      },
      {
        "latitude":47.584693,
        "longitude":-122.333694,
        "name":"1944 1ST AVE S  SUITE 400 SEATTLE WA 98134",
        "desc":"1944 1st Ave S, Seattle, WA 98134"
      },
      {
        "latitude":48.2550888,
        "longitude":-122.036911,
        "name":"14617 STATE ROUTE 530 NE STE A ARLINGTON WA 98223",
        "desc":"14617 State Route 530 NE, Arlington, WA 98223"
      },
      {
        "latitude":46.2588158,
        "longitude":-120.002182,
        "name":"101 GREEN VALLEY RD STE A MABTON WA 98935",
        "desc":"101 Green Valley Rd, Mabton, WA 98935"
      },
      {
        "latitude":47.0460447,
        "longitude":-122.7141966,
        "name":"1003 OLD PACIFIC HWY SE OLYMPIA WA 98513",
        "desc":"1003 Old Pacific Hwy SE, Olympia, WA 98513"
      },
      {
        "latitude":48.5904655,
        "longitude":-119.2815781,
        "name":"3 BLUE MOON RD #A RIVERSIDE WA 98849",
        "desc":"3 Blue Moon Rd, Riverside, WA 98849"
      },
      {
        "latitude":47.7127609,
        "longitude":-117.3543549,
        "name":"6017 N JULIA ST SPOKANE WA 99217",
        "desc":"6017 N Julia St, Spokane, WA 99217"
      },
      {
        "latitude":null,
        "longitude":null,
        "name":"22930 SE 384TH ST SUITE A ENUMCLAW WA 98022",
        "desc":"-"
      },
      {
        "latitude":47.23172,
        "longitude":-119.6142883,
        "name":"9777 F RD NW STE B EPHRATA WA 98823",
        "desc":"9777 Road F NW, Ephrata, WA 98823"
      },
      {
        "latitude":46.415226,
        "longitude":-117.0459518,
        "name":"728 6TH ST CLARKSTON WA 99403",
        "desc":"728 6th St, Clarkston, WA 99403"
      },
      {
        "latitude":45.8526802,
        "longitude":-120.6212387,
        "name":"2834 BADGER GULCH GOLDENDALE WA 98620",
        "desc":"Badger Gulch Rd, Goldendale, WA 98620"
      },
      {
        "latitude":47.0259617,
        "longitude":-122.9376762,
        "name":"2621 MOTTMAN CT SW #B TUMWATER WA 98512",
        "desc":"2621 Mottman Ct SW, Tumwater, WA 98512"
      },
      {
        "latitude":47.3674583,
        "longitude":-120.2822876,
        "name":"440 GRUBB RD WENATCHEE WA 98801",
        "desc":"Grubb Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.6845077,
        "longitude":-117.2658415,
        "name":"10309 E TRENT AVE MILLWOOD WA 99206",
        "desc":"10309 E Trent Ave, Millwood, WA 99206"
      },
      {
        "latitude":48.03157,
        "longitude":-122.001647,
        "name":"3928 171ST AVE NE, STE A SNOHOMISH WA 98290",
        "desc":"3928 171st Ave NE, Snohomish, WA 98290"
      },
      {
        "latitude":47.3916779,
        "longitude":-122.2956543,
        "name":"23407 PACIFIC HWY S DES MOINES WA 98198",
        "desc":"23407 Pacific Hwy S, Des Moines, WA 98032"
      },
      {
        "latitude":47.6104012,
        "longitude":-122.1984177,
        "name":"10600 MAIN ST BELLEVUE WA 98004",
        "desc":"10600 Main St, Bellevue, WA 98004"
      },
      {
        "latitude":47.718303,
        "longitude":-117.364097,
        "name":"6620 N MARKET ST SUITE 200 SPOKANE WA 99217",
        "desc":"6620 N Market St, Spokane, WA 99217"
      },
      {
        "latitude":47.504436,
        "longitude":-122.637893,
        "name":"4851 GEIGER RD SE PORT ORCHARD WA 98366",
        "desc":"4851 Geiger Rd SE, Port Orchard, WA 98367"
      },
      {
        "latitude":46.7098122,
        "longitude":-120.536026,
        "name":"710 ADOBE WAY STE A SELAH WA 98942",
        "desc":"710 Adobe Way, Selah, WA 98942"
      },
      {
        "latitude":47.681324,
        "longitude":-117.272842,
        "name":"2611 N WOODRUFF RD STE B SPOKANE VALLEY WA 99206",
        "desc":"2611 N Woodruff Rd, Spokane Valley, WA 99206"
      },
      {
        "latitude":47.656723,
        "longitude":-117.3194504,
        "name":"6310 E SPRAGUE AVE SPOKANE VALLEY WA 99212",
        "desc":"6310 E Sprague Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":46.6677647,
        "longitude":-123.7884099,
        "name":"613 MONTANA AVE STE 2 SOUTH BEND WA 98586",
        "desc":"613 Montana Ave, Raymond, WA 98577"
      },
      {
        "latitude":47.7653367,
        "longitude":-117.1856354,
        "name":"16315 E TEMPLE RD STE C SPOKANE WA 99217",
        "desc":"16315 E Temple Rd, Spokane, WA 99217"
      },
      {
        "latitude":47.9995193,
        "longitude":-122.018013,
        "name":"15701 OK MILL RD  STE A SNOHOMISH WA 98290",
        "desc":"15701 Ok Mill Rd, Snohomish, WA 98290"
      },
      {
        "latitude":46.2170715,
        "longitude":-123.0199585,
        "name":"443 CARLON LOOP RD STE A LONGVIEW WA 98632",
        "desc":"443 Carlon Loop Rd, Longview, WA 98632"
      },
      {
        "latitude":47.652973,
        "longitude":-117.398674,
        "name":"922 E 3RD AVE UNIT A SPOKANE WA 99202",
        "desc":"922 E 3rd Ave, Spokane, WA 99202"
      },
      {
        "latitude":46.955761,
        "longitude":-123.3265991,
        "name":"5603 STATE ROUTE 12 PORTER WA 98559",
        "desc":"Porter, WA"
      },
      {
        "latitude":48.8068519,
        "longitude":-122.4948757,
        "name":"456 W HORTON RD BELLINGHAM WA 98226",
        "desc":"456 W Horton Rd, Bellingham, WA 98226"
      },
      {
        "latitude":46.56438,
        "longitude":-120.387191,
        "name":"8531 POSTMA RD MOXEE WA 98936",
        "desc":"8531 Postma Rd, Moxee, WA 98936"
      },
      {
        "latitude":48.0209122,
        "longitude":-122.0542068,
        "name":"2515 HARTFORD DR STE B LAKE STEVENS WA 98258",
        "desc":"2515 Hartford Dr, Lake Stevens, WA 98258"
      },
      {
        "latitude":47.4717331,
        "longitude":-120.356102,
        "name":"892 LOWER SUNNYSLOPE RD WENATCHEE WA 98801",
        "desc":"892 Lower Sunnyslope Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.9291115,
        "longitude":-117.7834778,
        "name":"5044 B HWY 231 FORD WA 99013",
        "desc":"5044 Highway 231, Ford, WA 99013"
      },
      {
        "latitude":46.6190147,
        "longitude":-120.5104141,
        "name":"1301 N 2ND ST YAKIMA WA 98901",
        "desc":"1301 N 2nd St, Yakima, WA 98901"
      },
      {
        "latitude":48.8362656,
        "longitude":-122.4876633,
        "name":"5373 GUIDE MERIDIAN  STE D-11 BELLINGHAM WA 98226",
        "desc":"5373 Guide Meridian, Bellingham, WA 98226"
      },
      {
        "latitude":47.6651616,
        "longitude":-117.3217964,
        "name":"908 N LAKE RD SPOKANE VALLEY WA 99212",
        "desc":"908 N Lake Rd, Spokane Valley, WA 99212"
      },
      {
        "latitude":47.073619,
        "longitude":-122.758712,
        "name":"8575 COMMERCE PL DR NE STE A LACEY WA 98516",
        "desc":"8575 Commerce Place Dr NE, Lacey, WA 98516"
      },
      {
        "latitude":46.8584442,
        "longitude":-122.6102371,
        "name":"15716 URSULA LN SE STE A YELM WA 98597",
        "desc":"15716 Ursula Ln SE, Yelm, WA 98597"
      },
      {
        "latitude":47.3674583,
        "longitude":-120.2822876,
        "name":"440 GRUBB RD STE 4 WENATCHEE WA 98801",
        "desc":"Grubb Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.4875908,
        "longitude":-122.2589722,
        "name":"12833 MARTIN LUTHER KING JR SEATTLE WA 98178",
        "desc":"12833 Martin Luther King Jr Way, Seattle, WA 98178"
      },
      {
        "latitude":46.8238512,
        "longitude":-118.9839781,
        "name":"1199 WEST CUNNINGHAM RD OTHELLO WA 99344",
        "desc":"1199 W Cunningham Rd, Othello, WA 99344"
      },
      {
        "latitude":47.481555,
        "longitude":-122.826093,
        "name":"1982 NE OLD BELFAIR HWY BELFAIR WA 98528",
        "desc":"1982 NE Old Belfair Hwy, Belfair, WA 98528"
      },
      {
        "latitude":48.3725989,
        "longitude":-119.5939554,
        "name":"61 SALMON CREEK RD SUITE A OKANOGAN WA 98840",
        "desc":"61 Salmon Creek Rd, Okanogan, WA 98840"
      },
      {
        "latitude":46.115196,
        "longitude":-122.946601,
        "name":"1445 INDUSTRIAL WAY 19 C LONGVIEW WA 98632",
        "desc":"1445 Industrial Way, Longview, WA 98632"
      },
      {
        "latitude":48.8362656,
        "longitude":-122.4876633,
        "name":"5373 GUIDE MERIDIAN RD BELLINGHAM WA 98226",
        "desc":"5373 Guide Meridian Rd, Bellingham, WA 98226"
      },
      {
        "latitude":47.9326439,
        "longitude":-120.1221619,
        "name":"91 GRAND CREEK RD STE A MANSON WA 98831",
        "desc":"98831, WA"
      },
      {
        "latitude":47.6617149,
        "longitude":-117.3573833,
        "name":"3608 E OLIVE AVE SPOKANE WA 99202",
        "desc":"3608 E Olive Ave, Spokane, WA 99202"
      },
      {
        "latitude":47.6761627,
        "longitude":-122.3653336,
        "name":"716 NW 65TH ST SEATTLE WA 98117",
        "desc":"716 NW 65th St, Seattle, WA 98117"
      },
      {
        "latitude":48.0328931,
        "longitude":-122.7668846,
        "name":"661 NESS' CORNER RD PORT HADLOCK WA 98339",
        "desc":"661 Ness Corner Rd, Port Hadlock, WA 98339"
      },
      {
        "latitude":48.553599,
        "longitude":-117.918372,
        "name":"1040 NORTH HIGHWAY COLVILLE WA 99114",
        "desc":"1040 N Highway, Colville, WA 99114"
      },
      {
        "latitude":47.0220146,
        "longitude":-122.9943924,
        "name":"3104 DELPHI RD SW STE A OLYMPIA WA 98512",
        "desc":"3104 Delphi Rd SW, Olympia, WA 98512"
      },
      {
        "latitude":47.8227348,
        "longitude":-122.2078857,
        "name":"19302 BOTHELL EVERETT HWY BOTHELL WA 98012",
        "desc":"19302 Bothell Everett Hwy, Bothell, WA 98012"
      },
      {
        "latitude":47.9843407,
        "longitude":-121.9606247,
        "name":"1515 SANDERS RD STE 100A SNOHOMISH WA 98290",
        "desc":"1515 Sanders Rd, Snohomish, WA 98290"
      },
      {
        "latitude":48.462616,
        "longitude":-122.5813217,
        "name":"7656 STATE ROUTE 20 ANACORTES WA 98221",
        "desc":"7656 State Route 20, Anacortes, WA 98221"
      },
      {
        "latitude":48.2004356,
        "longitude":-122.2991333,
        "name":"5008 226 ST NW STE A STANWOOD WA 98292",
        "desc":"5008 226th St NW, Stanwood, WA 98292"
      },
      {
        "latitude":46.2003708,
        "longitude":-123.1965714,
        "name":"281 MILL CREEK RD STE A LONGVIEW WA 98632",
        "desc":"281 Mill Creek Rd, Longview, WA 98632"
      },
      {
        "latitude":47.7091446,
        "longitude":-122.3015289,
        "name":"11013 LAKE CITY WAY NE SEATTLE WA 98125",
        "desc":"11013 Lake City Way NE, Seattle, WA 98125"
      },
      {
        "latitude":47.900848,
        "longitude":-117.327407,
        "name":"26815 N HARDESTY RD STE A CHATTAROY WA 99003",
        "desc":"26815 N Hardesty Rd, Chattaroy, WA 99003"
      },
      {
        "latitude":48.6339951,
        "longitude":-117.5229416,
        "name":"2668 HIGHWAY 20 E LOT T COLVILLE WA 99114",
        "desc":"2668 Highway 20 E, Colville, WA 99114"
      },
      {
        "latitude":47.4750023,
        "longitude":-122.7915649,
        "name":"11854 SW LAKE FLORA RD PORT ORCHARD WA 98367",
        "desc":"11854 SW Lake Flora Rd, Port Orchard, WA 98367"
      },
      {
        "latitude":48.0150642,
        "longitude":-121.9182053,
        "name":"23321 HIDDEN VALLEY RD GRANITE FALLS WA 98252",
        "desc":"23321 Hidden Valley Rd, Granite Falls, WA 98252"
      },
      {
        "latitude":47.4298935,
        "longitude":-119.4981918,
        "name":"23203 HWY 17 N SOAP LAKE WA 98851",
        "desc":"23203 State Highway 17 N, Soap Lake, WA 98851"
      },
      {
        "latitude":45.6360321,
        "longitude":-122.6707077,
        "name":"1906 BROADWAY VANCOUVER WA 98663",
        "desc":"1906 Broadway St, Vancouver, WA 98663"
      },
      {
        "latitude":46.216426,
        "longitude":-119.813255,
        "name":"2 S MISSIMER RD STE A PROSSER WA 99350",
        "desc":"2 Missimer Rd, Prosser, WA 99350"
      },
      {
        "latitude":47.8544617,
        "longitude":-122.2902451,
        "name":"15919 HWY 99 LYNNWOOD WA 98087",
        "desc":"15919 Highway 99, Lynnwood, WA 98087"
      },
      {
        "latitude":48.4620331,
        "longitude":-122.5569306,
        "name":"8630 S MARCH POINT RD ANACORTES WA 98221",
        "desc":"8630 S March Point Rd, Anacortes, WA 98221"
      },
      {
        "latitude":47.9932567,
        "longitude":-122.2012731,
        "name":"1824 BROADWAY EVERETT WA 98201",
        "desc":"1824 Broadway Ave, Everett, WA 98201"
      },
      {
        "latitude":47.712944,
        "longitude":-122.154502,
        "name":"12525 WILLOWS RD NE STE 60 KIRKLAND WA 98034",
        "desc":"12525 Willows Rd NE, Kirkland, WA 98034"
      },
      {
        "latitude":47.9991074,
        "longitude":-122.0018082,
        "name":"317 PRICE RD STE A SNOHOMISH WA 98290",
        "desc":"317 Price Rd, Snohomish, WA 98290"
      },
      {
        "latitude":47.3166389,
        "longitude":-123.2134705,
        "name":"2400 W SKOKOMISH VALLEY RD SHELTON WA 98584",
        "desc":"2400 W Skokomish Valley Rd, Shelton, WA 98584"
      },
      {
        "latitude":47.1929607,
        "longitude":-122.4341264,
        "name":"7046 PACIFIC AVE TACOMA WA 98408",
        "desc":"7046 Pacific Ave, Tacoma, WA 98408"
      },
      {
        "latitude":46.2222443,
        "longitude":-119.8091354,
        "name":"4301 N MISSIMER RD PROSSER WA 99350",
        "desc":"4301 N Missimer Rd, Prosser, WA 99350"
      },
      {
        "latitude":48.8207321,
        "longitude":-122.6636276,
        "name":"4933 ELDER RD FERNDALE WA 98248",
        "desc":"4933 Elder Rd, Ferndale, WA 98248"
      },
      {
        "latitude":47.714466,
        "longitude":-121.898429,
        "name":"13118 328TH AVE NE STE A DUVALL WA 98019",
        "desc":"13118 328th Ave NE, Duvall, WA 98019"
      },
      {
        "latitude":46.1158828,
        "longitude":-122.9474227,
        "name":"1465 INDUSTRIAL WAY BLDG 17 LONGVIEW WA 98632",
        "desc":"1465 Industrial Way, Longview, WA 98632"
      },
      {
        "latitude":46.2138519,
        "longitude":-119.8281403,
        "name":"158901 W OLD INLAND EMPIRE HWY PROSSER WA 99350",
        "desc":"158901 W Old Inland Empire Hwy, Prosser, WA 99350"
      },
      {
        "latitude":46.9897003,
        "longitude":-122.9268112,
        "name":"28629 LITTLEROCK RD SW SUITE A OLYMPIA WA 98512",
        "desc":"Littlerock Rd SW, Olympia, WA 98512"
      },
      {
        "latitude":48.978141,
        "longitude":-118.525085,
        "name":"11 CASEY'S RANCH RD STE A DANVILLE WA 99121",
        "desc":"11 Caseys Ranch Rd, Danville, WA 99121"
      },
      {
        "latitude":48.9209028,
        "longitude":-119.444561,
        "name":"18 GOLDEN WILLOW LN OROVILLE WA 98844",
        "desc":"18 Golden Willow Ln, Oroville, WA 98844"
      },
      {
        "latitude":47.5541188,
        "longitude":-122.6593354,
        "name":"1110 CHARLESTON BEACH RD W BREMERTON WA 98312",
        "desc":"1110 Charleston Beach Rd W, Bremerton, WA 98312"
      },
      {
        "latitude":47.1994286,
        "longitude":-120.8900299,
        "name":"340 POWERLINE RD STE B CLE ELUM WA 98922",
        "desc":"340 Powerline Rd, Cle Elum, WA 98922"
      },
      {
        "latitude":47.1994286,
        "longitude":-120.8900299,
        "name":"340 POWERLINE RD, SUITE A CLE ELUM WA 98922",
        "desc":"340 Powerline Rd, Cle Elum, WA 98922"
      },
      {
        "latitude":46.2419357,
        "longitude":-119.7628784,
        "name":"128507 W KING TULL RD #A PROSSER WA 99350",
        "desc":"128507 W King Tull Rd, Prosser, WA 99350"
      },
      {
        "latitude":47.6819804,
        "longitude":-117.2667521,
        "name":"2709 N FELTS LANE SPOKANE VALLEY WA 99206",
        "desc":"2709 N Felts Rd, Spokane Valley, WA 99206"
      },
      {
        "latitude":47.8045989,
        "longitude":-118.4179173,
        "name":"26051 MEAN CANYON TRAIL E  #A CRESTON WA 99147",
        "desc":"26051 Mean Canyon Trail E, Creston, WA 99117"
      },
      {
        "latitude":47.571514,
        "longitude":-120.663017,
        "name":"12386 SHORE ST STE A LEAVENWORTH WA 98826",
        "desc":"12386 Shore St, Leavenworth, WA 98826"
      },
      {
        "latitude":47.4870455,
        "longitude":-122.2578616,
        "name":"12925 MARTIN LUTHER KING WAY SEATTLE WA 98178",
        "desc":"12925 Martin Luther King Jr Way, Seattle, WA 98178"
      },
      {
        "latitude":47.2083257,
        "longitude":-120.9389672,
        "name":"1571 SUMMIT VIEW RD CLE ELUM WA 98922",
        "desc":"1571 Summit View Rd, Cle Elum, WA 98922"
      },
      {
        "latitude":47.7118568,
        "longitude":-117.353508,
        "name":"3812 E BISMARK AVE SPOKANE WA 99217",
        "desc":"3812 E Bismark Ave, Spokane, WA 99217"
      },
      {
        "latitude":46.750413,
        "longitude":-117.0924608,
        "name":"3431 AIRPORT RD PULLMAN WA 99163",
        "desc":"3431 Airport Rd, Pullman, WA 99163"
      },
      {
        "latitude":47.6308098,
        "longitude":-117.5900803,
        "name":"13026 MCFARLANE RD C1-1 AIRWAY HEIGHTS WA 99001",
        "desc":"13026 W McFarlane Rd, Airway Heights, WA 99001"
      },
      {
        "latitude":48.0632839,
        "longitude":-117.3253872,
        "name":"249 JUANITA LANE ELK WA 99009",
        "desc":"249 Juanita Ln, Elk, WA 99009"
      },
      {
        "latitude":48.008918,
        "longitude":-122.526855,
        "name":"5565 VANBARR PLACE UNIT F FREELAND WA 98249",
        "desc":"5565 Vanbarr Pl, Freeland, WA 98249"
      },
      {
        "latitude":47.2033539,
        "longitude":-120.8840408,
        "name":"481 BUENA VIEW RD   STE A CLE ELUM WA 98922",
        "desc":"481 Buena View Rd, Cle Elum, WA 98922"
      },
      {
        "latitude":47.539444,
        "longitude":-122.0318604,
        "name":"230 NE JUNIPER ST ISSAQUAH WA 98027",
        "desc":"230 NE Juniper St, Issaquah, WA 98027"
      },
      {
        "latitude":47.1406791,
        "longitude":-122.5190189,
        "name":"12825 PACIFIC HWY SW LAKEWOOD WA 98499",
        "desc":"12825 Pacific Hwy SW, Lakewood, WA 98499"
      },
      {
        "latitude":47.0123253,
        "longitude":-118.3083954,
        "name":"669 N RICHARDS RD STE A RITZVILLE WA 99169",
        "desc":"669 N Richards Rd, Ritzville, WA 99169"
      },
      {
        "latitude":46.8872526,
        "longitude":-122.9133493,
        "name":"236 140TH AVE SW STE B TENINO WA 98589",
        "desc":"236 140th Ave SW, Tenino, WA 98589"
      },
      {
        "latitude":46.8872526,
        "longitude":-122.9133493,
        "name":"236 140TH AVE SW TENINO WA 98589",
        "desc":"236 140th Ave SW, Tenino, WA 98589"
      },
      {
        "latitude":47.5589447,
        "longitude":-121.9189911,
        "name":"4759 317TH PL SE FALL CITY WA 98024",
        "desc":"4759 317th Pl SE, Fall City, WA 98024"
      },
      {
        "latitude":48.3186188,
        "longitude":-117.2848816,
        "name":"412 N RIVER RD USK WA 99180",
        "desc":"N River Rd, Usk, WA 99180"
      },
      {
        "latitude":46.7837563,
        "longitude":-123.0882416,
        "name":"9642 LUNDEEN RD SW ROCHESTER WA 98579",
        "desc":"9642 Lundeen Rd SW, Rochester, WA 98579"
      },
      {
        "latitude":48.7581188,
        "longitude":-122.4621682,
        "name":"2121 LINCOLN ST BELLINGHAM WA 98225",
        "desc":"2121 Lincoln St, Bellingham, WA 98225"
      },
      {
        "latitude":47.839508,
        "longitude":-120.012191,
        "name":"410 HIGHWAY 150 STE 1 CHELAN WA 98816",
        "desc":"410 Highway 150, Chelan, WA 98816"
      },
      {
        "latitude":45.816597,
        "longitude":-122.6838303,
        "name":"6307 N 1ST CIR RIDGEFIELD WA 98642",
        "desc":"6307 N 1st Circle, Ridgefield, WA 98642"
      },
      {
        "latitude":47.509861,
        "longitude":-120.2966003,
        "name":"5552 INDUSTRY LN EAST WENATCHEE WA 98802",
        "desc":"5552 Industry Ln, East Wenatchee, WA 98802"
      },
      {
        "latitude":48.1056051,
        "longitude":-122.7844316,
        "name":"453 OTTO ST STE B PORT TOWNSEND WA 98368",
        "desc":"453 8th St, Port Townsend, WA 98368"
      },
      {
        "latitude":47.6659126,
        "longitude":-117.3305435,
        "name":"5504 E CATALDO AVE SPOKANE VALLEY WA 99212",
        "desc":"5504 E Cataldo Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":47.80574,
        "longitude":-117.128242,
        "name":"16315 N COUGAR LN STE A NEWMAN LAKE WA 99025",
        "desc":"16315 N Cougar Ln, Newman Lake, WA 99025"
      },
      {
        "latitude":45.8557701,
        "longitude":-120.7315903,
        "name":"90 CRAGGANMORE GOLDENDALE WA 98620",
        "desc":"Cragganmore Dr, Goldendale, WA 98620"
      },
      {
        "latitude":47.1060075,
        "longitude":-117.380752,
        "name":"5901 OLD THORNTON HWY STE A THORNTON WA 99176",
        "desc":"5901 Old Thornton Hwy, Thornton, WA 99176"
      },
      {
        "latitude":47.644825,
        "longitude":-117.6585617,
        "name":"1120 S FAIRCHILD ST MEDICAL LAKE WA 99022",
        "desc":"1120 S Fairchild St, Medical Lake, WA 99022"
      },
      {
        "latitude":48.6672478,
        "longitude":-119.4678345,
        "name":"116 B SOUTH STATE FRONTAGE RD TONASKET WA 98855",
        "desc":"116 S State Frontage Rd, Tonasket, WA 98855"
      },
      {
        "latitude":46.9768791,
        "longitude":-122.7329941,
        "name":"9630 75TH LN SE STE B OLYMPIA WA 98513",
        "desc":"9630 75th Ln SE, Olympia, WA 98513"
      },
      {
        "latitude":48.3161498,
        "longitude":-122.6321686,
        "name":"33858 SR 20 STE 102 OAK HARBOR WA 98277",
        "desc":"33858 State Route 20, Oak Harbor, WA 98277"
      },
      {
        "latitude":46.0787277,
        "longitude":-118.2888718,
        "name":"2800 E ISAACS AVE  STE C WALLA WALLA WA 99362",
        "desc":"2800 E Isaacs Ave, Walla Walla, WA 99362"
      },
      {
        "latitude":45.768272,
        "longitude":-121.278663,
        "name":"393 JOHNSON RD STE A LYLE WA 98635",
        "desc":"393 Johnson Rd, Lyle, WA 98635"
      },
      {
        "latitude":48.3555213,
        "longitude":-120.0981557,
        "name":"10 AYERS RD BLDG 2 TWISP WA 98856",
        "desc":"10 Ayers Rd, Twisp, WA 98856"
      },
      {
        "latitude":48.0453339,
        "longitude":-117.4284897,
        "name":"606 W LONE PINE LN DEER PARK WA 99006",
        "desc":"606 W Lone Pine Ln, Deer Park, WA 99006"
      },
      {
        "latitude":48.9788399,
        "longitude":-118.5251389,
        "name":"17 CASEYS RANCH RD DANVILLE WA 99121",
        "desc":"17 Caseys Ranch Rd, Danville, WA 99121"
      },
      {
        "latitude":45.6143417,
        "longitude":-122.2471924,
        "name":"112 ELLIE WAY WASHOUGAL WA 98671",
        "desc":"Ellie Way, Washougal, WA 98671"
      },
      {
        "latitude":47.152935,
        "longitude":-122.9357605,
        "name":"8305 SCHIRM RD NW OLYMPIA WA 98502",
        "desc":"8305 Schirm Rd NW, Olympia, WA 98502"
      },
      {
        "latitude":48.3006554,
        "longitude":-117.7606201,
        "name":"1967 HIGHWAY 395 S CHEWELAH WA 99109",
        "desc":"1967 Highway 395 S, Chewelah, WA 99109"
      },
      {
        "latitude":46.9729424,
        "longitude":-123.8978577,
        "name":"1225 5TH ST EXT HOQUIAM WA 98550",
        "desc":"1225 5th Street Ext, Hoquiam, WA 98550"
      },
      {
        "latitude":47.076088,
        "longitude":-122.7616043,
        "name":"8401 HOGUM BAY LN NE LACEY WA 98516",
        "desc":"8401 Hogum Bay Ln NE, Lacey, WA 98516"
      },
      {
        "latitude":47.6873207,
        "longitude":-117.1637192,
        "name":"18001 E EUCLID AVE SPOKANE VALLEY WA 99216",
        "desc":"18001 E Euclid Ave, Spokane Valley, WA 99216"
      },
      {
        "latitude":47.714995,
        "longitude":-117.3817136,
        "name":"1919 E FRANCIS AVE STE B SPOKANE WA 99208",
        "desc":"1919 E Francis Ave, Spokane, WA 99208"
      },
      {
        "latitude":46.975853,
        "longitude":-123.0008621,
        "name":"7736 THORNBURG ST SW STE C OLYMPIA WA 98512",
        "desc":"7736 Thornburg St SW, Olympia, WA 98512"
      },
      {
        "latitude":47.6628075,
        "longitude":-117.5080032,
        "name":"6805 W DENO RD SPOKANE WA 99224",
        "desc":"6805 W Deno Rd, Spokane, WA 99224"
      },
      {
        "latitude":47.6597862,
        "longitude":-117.3771362,
        "name":"213 N STONE ST SPOKANE WA 99202",
        "desc":"213 N Stone St, Spokane, WA 99202"
      },
      {
        "latitude":46.6828092,
        "longitude":-123.7445886,
        "name":"337 PETERS ST RAYMOND WA 98577",
        "desc":"337 Peters St, Raymond, WA 98577"
      },
      {
        "latitude":47.4796715,
        "longitude":-118.7848587,
        "name":"5004 WEISHAAR RD E ODESSA WA 99159",
        "desc":"Weishaar Rd E, Odessa, WA 99159"
      },
      {
        "latitude":47.940879,
        "longitude":-122.217109,
        "name":"6309 EVERGREEN WAY STE C EVERETT WA 98203",
        "desc":"6309 Evergreen Way, Everett, WA 98203"
      },
      {
        "latitude":47.2282746,
        "longitude":-122.4791298,
        "name":"3303 S 35TH ST  STE B12 & B15 TACOMA WA 98409",
        "desc":"3303 S 35th St, Tacoma, WA 98409"
      },
      {
        "latitude":46.1151161,
        "longitude":-122.8924026,
        "name":"2407 TALLEY WAY KELSO WA 98626",
        "desc":"2407 Talley Way, Kelso, WA 98626"
      },
      {
        "latitude":47.3333381,
        "longitude":-120.2649549,
        "name":"5258 UPPER HEDGES RD STE A WENATCHEE WA 98801",
        "desc":"5258 Upper Hedges Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.968406,
        "longitude":-124.40419,
        "name":"193161 HWY 101 FORKS WA 98331",
        "desc":"193161 Highway 101, Forks, WA 98331"
      },
      {
        "latitude":47.944236,
        "longitude":-124.4630398,
        "name":"2100 LA PUSH RD STE 602 FORKS WA 98331",
        "desc":"2100 La Push Rd, Forks, WA 98331"
      },
      {
        "latitude":47.9687195,
        "longitude":-119.9562225,
        "name":"30 QUIET VALLEY RD UNIT A CHELAN WA 98816",
        "desc":"30 Quiet Valley Rd, Chelan, WA 98816"
      },
      {
        "latitude":46.334735,
        "longitude":-122.700996,
        "name":"144 MORGAN RD # A TOUTLE WA 98649",
        "desc":"144 Morgan Rd, Toutle, WA 98649"
      },
      {
        "latitude":46.1567726,
        "longitude":-118.0761642,
        "name":"2987 S FORK COPPEI RD STE A WAITSBURG WA 99361",
        "desc":"2987 S Fork Coppei Rd, Waitsburg, WA 99361"
      },
      {
        "latitude":47.239933,
        "longitude":-119.740524,
        "name":"11670 STATE ROUTE 28 W STE B QUINCY WA 98848",
        "desc":"11670 State Route 28 W, Quincy, WA 98848"
      },
      {
        "latitude":46.1754417,
        "longitude":-123.3767166,
        "name":"485 STATE ROUTE 409 CATHLAMET WA 98612",
        "desc":"485 State Route 409, Cathlamet, WA 98612"
      },
      {
        "latitude":48.9450426,
        "longitude":-119.4166667,
        "name":"130 CHESAW RD  STE C OROVILLE WA 98844",
        "desc":"130 Chesaw Rd, Oroville, WA 98844"
      },
      {
        "latitude":46.793663,
        "longitude":-123.1544266,
        "name":"5845 192N LN SW ROCHESTER WA 98579",
        "desc":"98579, WA"
      },
      {
        "latitude":47.675559,
        "longitude":-122.696762,
        "name":"12363 CLEAR CREEK RD NW STE B SILVERDALE WA 98383",
        "desc":"12363 Clear Creek Rd NW, Silverdale, WA 98383"
      },
      {
        "latitude":47.3850555,
        "longitude":-120.2011566,
        "name":"3902 10TH ST SE EAST WENATCHEE WA 98802",
        "desc":"3902 10th St SE, East Wenatchee, WA 98802"
      },
      {
        "latitude":46.1215744,
        "longitude":-122.9368973,
        "name":"909 CALIFORNIA WAY LONGVIEW WA 98632",
        "desc":"909 California Way, Longview, WA 98632"
      },
      {
        "latitude":47.6784019,
        "longitude":-117.3231125,
        "name":"6021 E MANSFIELD AVE SPOKANE VALLEY WA 99212",
        "desc":"6021 E Mansfield Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":46.867879,
        "longitude":-120.2997411,
        "name":"16845 UPPER BADGER POCKET RD ELLENSBURG WA 98926",
        "desc":"16845 Upper Badger Pocket Rd, Ellensburg, WA 98926"
      },
      {
        "latitude":47.5791894,
        "longitude":-122.3259247,
        "name":"2752 6TH AVE S SEATTLE WA 98134",
        "desc":"2752 6th Ave S, Seattle, WA 98134"
      },
      {
        "latitude":47.6364021,
        "longitude":-117.5774918,
        "name":"2002 S GARFIELD RD AIRWAY HEIGHTS WA 99001",
        "desc":"2002 S Garfield Rd, Airway Heights, WA 99001"
      },
      {
        "latitude":48.7898903,
        "longitude":-119.427887,
        "name":"34 YARNELL RD STE A TONASKET WA 98855",
        "desc":"34 Yarnell Rd, Tonasket, WA 98855"
      },
      {
        "latitude":46.787567,
        "longitude":-123.080513,
        "name":"9444 LUNDEEN RD SW STE A ROCHESTER WA 98579",
        "desc":"9444 Lundeen Rd SW, Rochester, WA 98579"
      },
      {
        "latitude":47.4220683,
        "longitude":-117.4701045,
        "name":"26525 S RUPP RD #3 CHENEY WA 99004",
        "desc":"26525 S Rupp Rd, Cheney, WA 99004"
      },
      {
        "latitude":46.1692276,
        "longitude":-119.2648849,
        "name":"28505 S CLODFELTER RD KENNEWICK WA 99338",
        "desc":"28505 S Clodfelter Rd, Kennewick, WA 99338"
      },
      {
        "latitude":47.2527275,
        "longitude":-122.4258347,
        "name":"1129 ST PAUL AVE TACOMA WA 98421",
        "desc":"1129 St Paul Ave, Tacoma, WA 98421"
      },
      {
        "latitude":47.8235397,
        "longitude":-122.2358627,
        "name":"212 W WINESAP RD STE 101, 102 BOTHELL WA 98012",
        "desc":"212 W Winesap Rd, Bothell, WA 98012"
      },
      {
        "latitude":48.0723343,
        "longitude":-122.0081787,
        "name":"8411 SR 92 STE 5 GRANITE FALLS WA 98252",
        "desc":"8411 State Route 92, Granite Falls, WA 98252"
      },
      {
        "latitude":47.8152237,
        "longitude":-122.2069016,
        "name":"1912 201ST PLACE SE #202 BOTHELL WA 98012",
        "desc":"1912 201st Pl SE, Bothell, WA 98012"
      },
      {
        "latitude":46.122364,
        "longitude":-122.936554,
        "name":"1006 CALIFORNIA WAY LONGVIEW WA 98632",
        "desc":"1006 California Way, Longview, WA 98632"
      },
      {
        "latitude":47.657015,
        "longitude":-117.2759306,
        "name":"9616 E SPRAGUE AVE SPOKANE VALLEY WA 99206",
        "desc":"9616 E Sprague Ave, Spokane Valley, WA 99206"
      },
      {
        "latitude":46.132064,
        "longitude":-122.938186,
        "name":"971 14TH AVE STE 110 LONGVIEW WA 98632",
        "desc":"971 14th Ave, Longview, WA 98632"
      },
      {
        "latitude":47.745452,
        "longitude":-117.047027,
        "name":"26725 E MOFFAT RD   STE A NEWMAN LAKE WA 99025",
        "desc":"26725 E Moffat Rd, Newman Lake, WA 99025"
      },
      {
        "latitude":48.4006805,
        "longitude":-122.3360596,
        "name":"2615 OLD HIGHWAY 99 S MOUNT VERNON WA 98273",
        "desc":"2615 Old Highway 99 South Rd, Mount Vernon, WA 98273"
      },
      {
        "latitude":47.6604424,
        "longitude":-117.3538589,
        "name":"3804 E FERRY AVE SPOKANE WA 99202",
        "desc":"3804 E Ferry Ave, Spokane, WA 99202"
      },
      {
        "latitude":48.0350914,
        "longitude":-117.8024216,
        "name":"4326 LYONS HILL RD   STE B SPRINGDALE WA 99173",
        "desc":"4326 Lyons Hill Rd, Springdale, WA 99173"
      },
      {
        "latitude":47.0534172,
        "longitude":-122.7831802,
        "name":"7294 MARTIN WAY E OLYMPIA WA 98516",
        "desc":"7294 Martin Way E, Olympia, WA 98516"
      },
      {
        "latitude":46.9962951,
        "longitude":-122.8219999,
        "name":"4820 YELM HWY SE SUITE D LACEY WA 98503",
        "desc":"4820 Yelm Hwy SE, Lacey, WA 98503"
      },
      {
        "latitude":46.2613297,
        "longitude":-119.0793915,
        "name":"3411 N CAPITOL AVE PASCO WA 99301",
        "desc":"3411 N Capitol Ave, Pasco, WA 99301"
      },
      {
        "latitude":47.917713,
        "longitude":-117.419975,
        "name":"615 W OWENS RD STE A DEER PARK WA 99006",
        "desc":"615 W Owens Rd, Deer Park, WA 99006"
      },
      {
        "latitude":47.2431327,
        "longitude":-123.1431723,
        "name":"460 W ENTERPRISE RD BUILDING 1 SHELTON WA 98584",
        "desc":"460 W Enterprise Rd, Shelton, WA 98584"
      },
      {
        "latitude":47.1769868,
        "longitude":-123.093465,
        "name":"212 SE BANJO LN SHELTON WA 98584",
        "desc":"212 SE Banjo Ln, Shelton, WA 98584"
      },
      {
        "latitude":47.187767,
        "longitude":-119.2006989,
        "name":"6884 BACON LN NE #A MOSES LAKE WA 98837",
        "desc":"6884 Bacon Ln NE, Moses Lake, WA 98837"
      },
      {
        "latitude":45.6386032,
        "longitude":-122.6717453,
        "name":"2314 MAIN ST VANCOUVER WA 98660",
        "desc":"2314 Main St, Vancouver, WA 98660"
      },
      {
        "latitude":48.4714483,
        "longitude":-119.527043,
        "name":"137 GREENACRES RD RIVERSIDE WA 98849",
        "desc":"137 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":47.817646,
        "longitude":-117.1914673,
        "name":"17605 N TIMBERLANE CIR #A MEAD WA 99021",
        "desc":"17605 N Timberlane Circle, Mead, WA 99021"
      },
      {
        "latitude":47.817646,
        "longitude":-117.1914673,
        "name":"17605 N TIMBERLANE CIR MEAD WA 99021",
        "desc":"17605 N Timberlane Circle, Mead, WA 99021"
      },
      {
        "latitude":47.0506744,
        "longitude":-122.994606,
        "name":"540 RONLEE LN NW STE B OLYMPIA WA 98502",
        "desc":"540 Ronlee Ln NW, Olympia, WA 98502"
      },
      {
        "latitude":47.3279266,
        "longitude":-120.2395782,
        "name":"5579 BIG SPRINGS RANCH RD WENATCHEE WA 98801",
        "desc":"5579 Big Springs Ranch Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":45.7132301,
        "longitude":-121.4629135,
        "name":"405 E STUEBEN BINGEN WA 98605",
        "desc":"405 E Steuben St, Bingen, WA 98605"
      },
      {
        "latitude":47.9119148,
        "longitude":-122.2077484,
        "name":"9506 19TH AVE SE EVERETT WA 98208",
        "desc":"9506 19th Ave SE, Everett, WA 98208"
      },
      {
        "latitude":45.8259735,
        "longitude":-122.4739304,
        "name":"19400 NE 280TH ST BATTLE GROUND WA 98604",
        "desc":"19400 NE 280th St, Battle Ground, WA 98604"
      },
      {
        "latitude":47.8995397,
        "longitude":-117.6662739,
        "name":"6822 SHANNON WAY TUMTUM WA 99034",
        "desc":"6822 Shannon Way, Deer Park, WA 99006"
      },
      {
        "latitude":46.8035583,
        "longitude":-123.0113297,
        "name":"6039 SW 197TH AVE ROCHESTER WA 98579",
        "desc":"6039 197th Ave SW, Rochester, WA 98579"
      },
      {
        "latitude":46.9327888,
        "longitude":-122.5905075,
        "name":"1405 YELM AVE E YELM WA 98597",
        "desc":"1405 Yelm Ave E, Yelm, WA 98597"
      },
      {
        "latitude":46.8238512,
        "longitude":-118.9839781,
        "name":"1199 WEST CUNNINGHAM RD OTHELLO WA 99344",
        "desc":"1199 W Cunningham Rd, Othello, WA 99344"
      },
      {
        "latitude":47.7136497,
        "longitude":-122.1596375,
        "name":"13513 NE 126TH PL SUITE C KIRKLAND WA 98034",
        "desc":"13513 NE 126th Pl, Kirkland, WA 98034"
      },
      {
        "latitude":45.7845414,
        "longitude":-120.8284535,
        "name":"49 BAILEY LOOP RD GOLDENDALE WA 98620",
        "desc":"49 S Bailey Loop Dr, Goldendale, WA 98620"
      },
      {
        "latitude":47.228248,
        "longitude":-122.294364,
        "name":"3204 MERIDIAN AVE E EDGEWOOD WA 98372",
        "desc":"3204 Meridian Ave E, Edgewood, WA 98371"
      },
      {
        "latitude":47.2555199,
        "longitude":-122.4752274,
        "name":"3005 6TH AVE STE B TACOMA WA 98406",
        "desc":"3005 6th Ave, Tacoma, WA 98406"
      },
      {
        "latitude":47.718898,
        "longitude":-122.344291,
        "name":"12230 AURORA AVE N STE B SEATTLE WA 98133",
        "desc":"12230 Aurora Ave N, Seattle, WA 98133"
      },
      {
        "latitude":45.6883888,
        "longitude":-120.8132019,
        "name":"125 MARYHILL HWY GOLDENDALE WA 98620",
        "desc":"125 Maryhill Hwy, Goldendale, WA 98620"
      },
      {
        "latitude":47.2264442,
        "longitude":-122.0875092,
        "name":"19003 SE 416TH ST  STE A ENUMCLAW WA 98022",
        "desc":"19003 SE 416th St, Enumclaw, WA 98022"
      },
      {
        "latitude":46.5655441,
        "longitude":-120.7158585,
        "name":"15151 COTTONWOOD CANYON RD YAKIMA WA 98908",
        "desc":"15151 Cottonwood Canyon Rd, Yakima, WA 98908"
      },
      {
        "latitude":47.4225135,
        "longitude":-117.4696384,
        "name":"26424 S RUPP RD E1 CHENEY WA 99004",
        "desc":"26424 S Rupp Rd, Cheney, WA 99004"
      },
      {
        "latitude":48.0115125,
        "longitude":-122.1352056,
        "name":"1716 SUNNYSIDE BLVD LAKE STEVENS WA 98258",
        "desc":"1716 Sunnyside Blvd, Lake Stevens, WA 98258"
      },
      {
        "latitude":47.3495636,
        "longitude":-122.5103302,
        "name":"28300 137TH AVE SW SUITE B VASHON WA 98070",
        "desc":"28300 137th Ave SW, Vashon, WA 98070"
      },
      {
        "latitude":45.609657,
        "longitude":-122.320899,
        "name":"34230 SE 20TH ST   STE A WASHOUGAL WA 98671",
        "desc":"34230 SE 20th St, Washougal, WA 98671"
      },
      {
        "latitude":48.3626888,
        "longitude":-120.204056,
        "name":"298 POORMAN CREEK RD #A TWISP WA 98856",
        "desc":"298 Poorman Creek Rd, Twisp, WA 98856"
      },
      {
        "latitude":48.1427155,
        "longitude":-120.0250769,
        "name":"39 PRAIRIE FLATS RD STE A METHOW WA 98834",
        "desc":"39 Prairie Flats Rd, Methow, WA 98834"
      },
      {
        "latitude":48.4609535,
        "longitude":-120.180295,
        "name":"28 HORIZON FLATS RD #A WINTHROP WA 98862",
        "desc":"28 Horizon Flats Rd, Winthrop, WA 98862"
      },
      {
        "latitude":48.4609535,
        "longitude":-120.180295,
        "name":"28 HORIZON FLATS RD #B WINTHROP WA 98862",
        "desc":"28 Horizon Flats Rd, Winthrop, WA 98862"
      },
      {
        "latitude":46.543762,
        "longitude":-120.475585,
        "name":"4315 MAIN ST STE A UNION GAP WA 98903",
        "desc":"4315 Main St, Yakima, WA 98903"
      },
      {
        "latitude":48.5455666,
        "longitude":-122.6174927,
        "name":"5735 HOMESTEAD LN ANACORTES WA 98221",
        "desc":"5735 Homestead Ln, Anacortes, WA 98221"
      },
      {
        "latitude":46.9377042,
        "longitude":-123.3105737,
        "name":"5675 STATE ROUTE 12 STE 1 ELMA WA 98541",
        "desc":"5675 US Highway 12, Elma, WA 98541"
      },
      {
        "latitude":48.5595864,
        "longitude":-122.4191,
        "name":"5937 CHUCKANUT DR BOW WA 98232",
        "desc":"5937 Chuckanut Dr, Bow, WA 98232"
      },
      {
        "latitude":48.7533875,
        "longitude":-118.6064987,
        "name":"20 HUMPHREY LN #A REPUBLIC WA 99166",
        "desc":"20 Humphrey Ln, Republic, WA 99166"
      },
      {
        "latitude":48.1217916,
        "longitude":-123.4433665,
        "name":"536 MARINE DR STE B PORT ANGELES WA 98363",
        "desc":"536 Marine Dr, Port Angeles, WA 98363"
      },
      {
        "latitude":47.7417831,
        "longitude":-118.3824005,
        "name":"32941 TELFORD RD N CRESTON WA 99117",
        "desc":"32941 Telford Rd N, Creston, WA 99117"
      },
      {
        "latitude":47.669208,
        "longitude":-117.326271,
        "name":"5805 E SHARP AVE STE A3 & A4 SPOKANE VALLEY WA 99212",
        "desc":"5805 E Sharp Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":46.719524,
        "longitude":-117.1640973,
        "name":"1335 SE BISHOP BLVD PULLMAN WA 99163",
        "desc":"1335 SE Bishop Blvd, Pullman, WA 99163"
      },
      {
        "latitude":48.683475,
        "longitude":-119.5037641,
        "name":"16 COW TRAIL RD TONASKET WA 98665",
        "desc":"16 Cow Trail Rd, Tonasket, WA 98855"
      },
      {
        "latitude":47.862606,
        "longitude":-121.800338,
        "name":"1116 E MAIN ST STE A SULTAN WA 98294",
        "desc":"1116 E Main St, Sultan, WA 98294"
      },
      {
        "latitude":48.6689877,
        "longitude":-119.504161,
        "name":"3 ROLLING HILLS DR SUITE 2 TONASKET WA 98855",
        "desc":"3 Rolling Hills Dr, Tonasket, WA 98855"
      },
      {
        "latitude":47.001495,
        "longitude":-120.576194,
        "name":"1911 W DOLARWAY RD STE A ELLENSBURG WA 98926",
        "desc":"1911 W Dolarway Rd, Ellensburg, WA 98926"
      },
      {
        "latitude":47.4852676,
        "longitude":-120.3194656,
        "name":"3710 HWY 97 A WENATCHEE WA 98801",
        "desc":"3710 State Highway 97A, Wenatchee, WA 98801"
      },
      {
        "latitude":47.4224512,
        "longitude":-117.4695432,
        "name":"26425 S RUPP RD  UNIT 5 CHENEY WA 99004",
        "desc":"26425 S Rupp Rd, Cheney, WA 99004"
      },
      {
        "latitude":48.8301308,
        "longitude":-119.4020118,
        "name":"81 ONEIL RD STE A OROVILLE WA 98844",
        "desc":"81 ONeil Rd, Oroville, WA 98844"
      },
      {
        "latitude":48.1008864,
        "longitude":-123.5483388,
        "name":"314 POWER PLANT RD PORT ANGELES WA 98363",
        "desc":"314 Power Plant Rd, Port Angeles, WA 98363"
      },
      {
        "latitude":48.2552299,
        "longitude":-122.2179565,
        "name":"920 288TH ST NE SUITE A STANWOOD WA 98292",
        "desc":"920 288th St NE, Stanwood, WA 98292"
      },
      {
        "latitude":47.253116,
        "longitude":-122.759986,
        "name":"414 DELANO ROAD KP S STE A LAKEBAY WA 98349",
        "desc":"414 Delano Rd KP S, Lakebay, WA 98349"
      },
      {
        "latitude":48.1727267,
        "longitude":-122.1460155,
        "name":"19417 63RD AVE NE ARLINGTON WA 98223",
        "desc":"19417 63rd Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.1571617,
        "longitude":-122.049469,
        "name":"28505 112TH ST E # A BUCKLEY WA 98321",
        "desc":"28505 112th St E, Buckley, WA 98321"
      },
      {
        "latitude":48.2941475,
        "longitude":-117.96138,
        "name":"2259 ADDY GIFFORD RD ADDY WA 99101",
        "desc":"2259 Addy Gifford Rd, Addy, WA 99101"
      },
      {
        "latitude":47.6777687,
        "longitude":-117.6279907,
        "name":"2219 A N RAMBO RD SPOKANE WA 99224",
        "desc":"2219 N Rambo Rd, Spokane, WA 99224"
      },
      {
        "latitude":47.6595,
        "longitude":-117.37928,
        "name":"202 N CRESTLINE ST #1 SPOKANE WA 99202",
        "desc":"202 N Crestline St, Spokane, WA 99202"
      },
      {
        "latitude":47.1583176,
        "longitude":-122.0379944,
        "name":"29297 HWY 410 E STE D BUCKLEY WA 98321",
        "desc":"29297 State Route 410 E, Buckley, WA 98321"
      },
      {
        "latitude":46.6736434,
        "longitude":-123.7690464,
        "name":"2870 OCEAN AVE RAYMOND WA 98577",
        "desc":"2870 Ocean Ave, Raymond, WA 98577"
      },
      {
        "latitude":47.669208,
        "longitude":-117.326271,
        "name":"5805 E SHARP AVE STE B-1 & B-2 SPOKANE VALLEY WA 99212",
        "desc":"5805 E Sharp Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":48.2253838,
        "longitude":-117.1923828,
        "name":"231 WESTERN LARCH RD SUITE A NEWPORT WA 99156",
        "desc":"99156, WA"
      },
      {
        "latitude":48.7889633,
        "longitude":-122.5267258,
        "name":"1761 W BAKERVIEW RD BELLINGHAM WA 98226",
        "desc":"1761 W Bakerview Rd, Bellingham, WA 98226"
      },
      {
        "latitude":48.785522,
        "longitude":-122.445457,
        "name":"3929 SPUR RIDGE LANE #1 BELLINGHAM WA 98226",
        "desc":"3929 Spur Ridge Ln, Bellingham, WA 98226"
      },
      {
        "latitude":48.8405035,
        "longitude":-122.4860492,
        "name":"5497 GUIDE MERIDIAN BELLINGHAM WA 98226",
        "desc":"5497 Guide Meridian, Bellingham, WA 98226"
      },
      {
        "latitude":47.8132553,
        "longitude":-117.2015457,
        "name":"15117 E COOPER RD #A MEAD WA 99021",
        "desc":"15117 E Cooper Rd, Mead, WA 99021"
      },
      {
        "latitude":48.1050034,
        "longitude":-123.3701019,
        "name":"3134 E HIGHWAY 101 SUITE A PORT ANGELES WA 98362",
        "desc":"3134 E Highway 101, Port Angeles, WA 98362"
      },
      {
        "latitude":46.9079018,
        "longitude":-122.6433487,
        "name":"12341 ZELLER RD SE STE A YELM WA 98597",
        "desc":"12341 Zeller Rd SE, Yelm, WA 98597"
      },
      {
        "latitude":48.1315918,
        "longitude":-117.8633118,
        "name":"4224C DEER CREEK RD VALLEY WA 99181",
        "desc":"4224 Deer Creek Rd, Valley, WA 99181"
      },
      {
        "latitude":46.56438,
        "longitude":-120.387191,
        "name":"8531 POSTMA RD STE H MOXEE WA 98936",
        "desc":"8531 Postma Rd, Moxee, WA 98936"
      },
      {
        "latitude":47.051239,
        "longitude":-120.4650803,
        "name":"5810 NANEUM RD STE 1 ELLENSBURG WA 98926",
        "desc":"5810 Naneum Rd, Ellensburg, WA 98926"
      },
      {
        "latitude":46.1653252,
        "longitude":-123.3783798,
        "name":"628 STATE ROUTE 409 CATHLAMET WA 98612",
        "desc":"628 State Route 409, Cathlamet, WA 98612"
      },
      {
        "latitude":47.7969754,
        "longitude":-120.1943484,
        "name":"6520 NAVARRE COULEE ROAD STE A CHELAN WA 98816",
        "desc":"6520 Navarre Coulee Rd, Chelan, WA 98816"
      },
      {
        "latitude":47.3674583,
        "longitude":-120.2822876,
        "name":"440 GRUBB RD STE 5 WENATCHEE WA 98801",
        "desc":"Grubb Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.6692085,
        "longitude":-117.3262711,
        "name":"5805 E SHARP AVE SPOKANE VALLEY WA 99212",
        "desc":"5805 E Sharp Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":45.920322,
        "longitude":-122.76226,
        "name":"1819 SCHURMAN WAY STE 101 WOODLAND WA 98674",
        "desc":"1819 Schurman Way, Woodland, WA 98674"
      },
      {
        "latitude":47.5324554,
        "longitude":-122.3291321,
        "name":"460 S KENYON ST #470 SEATTLE WA 98108",
        "desc":"460 S Kenyon St, Seattle, WA 98108"
      },
      {
        "latitude":47.6876755,
        "longitude":-120.324028,
        "name":"6435 ROARING CREEK RD ENTIAT WA 98822",
        "desc":"6435 Roaring Creek Rd, Entiat, WA 98822"
      },
      {
        "latitude":45.6270294,
        "longitude":-122.6041946,
        "name":"6515 E MILL PLAIN BLVD VANCOUVER WA 98661",
        "desc":"6515 E Mill Plain Blvd, Vancouver, WA 98661"
      },
      {
        "latitude":46.0632668,
        "longitude":-119.1012039,
        "name":"47305 S 2066 PRSE STE A KENNEWICK WA 99337",
        "desc":"99337, WA"
      },
      {
        "latitude":47.5051117,
        "longitude":-122.3340683,
        "name":"10859 1ST AVE S SUITE A SEATTLE WA 98168",
        "desc":"10859 1st Ave S, Seattle, WA 98168"
      },
      {
        "latitude":47.5456886,
        "longitude":-122.6791,
        "name":"1788 3RD AVE W BREMERTON WA 98312",
        "desc":"1788 3rd Ave W, Bremerton, WA 98312"
      },
      {
        "latitude":47.3887825,
        "longitude":-122.826889,
        "name":"211 E NORTH BAY RD ALLYN WA 98524",
        "desc":"211 E North Bay Rd, Allyn, WA 98524"
      },
      {
        "latitude":48.4596481,
        "longitude":-122.5317307,
        "name":"212743 QUANTUM LANE ANACORTES WA 98221",
        "desc":"Quantum Ln, Anacortes, WA 98221"
      },
      {
        "latitude":47.527011,
        "longitude":-122.314399,
        "name":"8500 14TH AVE S STE B SEATTLE WA 98108",
        "desc":"8500 14th Ave S, Seattle, WA 98108"
      },
      {
        "latitude":47.5296669,
        "longitude":-122.5539932,
        "name":"2065 GARFIELD AVE SE STE A PORT ORCHARD WA 98366",
        "desc":"2065 Garfield Ave SE, Port Orchard, WA 98366"
      },
      {
        "latitude":47.669208,
        "longitude":-117.326271,
        "name":"5805 E SHARP AVE STE C6 SPOKANE VALLEY WA 99212",
        "desc":"5805 E Sharp Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":46.9475327,
        "longitude":-122.9438171,
        "name":"9631 LATHROP INDUSTRIAL DR SW OLYMPIA WA 98512",
        "desc":"9631 Lathrop Industrial Dr SW, Olympia, WA 98512"
      },
      {
        "latitude":46.9483376,
        "longitude":-122.9437637,
        "name":"9603 LATHROP INDUSTRIAL DR SW OLYMPIA WA 98512",
        "desc":"9603 Lathrop Industrial Dr SW, Olympia, WA 98512"
      },
      {
        "latitude":47.1766815,
        "longitude":-117.5497971,
        "name":"13301 PINE CITY MALDEN RD SAINT JOHN WA 99171",
        "desc":"Pine City-Malden Rd, St John, WA 99171"
      },
      {
        "latitude":47.8986588,
        "longitude":-121.7808304,
        "name":"33707 112TH ST SE #A SULTAN WA 98294",
        "desc":"33707 112th St SE, Sultan, WA 98294"
      },
      {
        "latitude":47.612033,
        "longitude":-117.1610858,
        "name":"4611 S LINKE RD GREENACRES WA 99016",
        "desc":"4611 S Linke Rd, Greenacres, WA 99016"
      },
      {
        "latitude":48.422527,
        "longitude":-122.207061,
        "name":"24862 BENHAM RD STE A MOUNT VERNON WA 98273",
        "desc":"24862 Benham Rd, Mount Vernon, WA 98273"
      },
      {
        "latitude":47.00135,
        "longitude":-123.395904,
        "name":"80 MARION RD    BLDG B ELMA WA 98541",
        "desc":"80 Marion Rd, Elma, WA 98541"
      },
      {
        "latitude":48.869045,
        "longitude":-122.399459,
        "name":"6283 NOON RD STE A EVERSON WA 98247",
        "desc":"6283 Noon Rd, Everson, WA 98247"
      },
      {
        "latitude":47.0506744,
        "longitude":-122.994606,
        "name":"540 RON LEE LANE NW OLYMPIA WA 98502",
        "desc":"540 Ronlee Ln NW, Olympia, WA 98502"
      },
      {
        "latitude":47.2418734,
        "longitude":-123.0709653,
        "name":"340 E MILLWRIGHT RD BLDG A SHELTON WA 98584",
        "desc":"340 E Millwright Rd, Shelton, WA 98584"
      },
      {
        "latitude":47.6553345,
        "longitude":-117.4029694,
        "name":"512 E PACIFIC AVE SPOKANE WA 99202",
        "desc":"512 E Pacific Ave, Spokane, WA 99202"
      },
      {
        "latitude":48.632743,
        "longitude":-123.009849,
        "name":"82 LAGOON RD SUITE A DEER HARBOR WA 98243",
        "desc":"82 Lagoon Rd, Eastsound, WA 98245"
      },
      {
        "latitude":48.0387764,
        "longitude":-122.0030136,
        "name":"4722 169TH AVE NE STE A SNOHOMISH WA 98290",
        "desc":"4722 169th Ave NE, Snohomish, WA 98290"
      },
      {
        "latitude":47.9000511,
        "longitude":-119.9414902,
        "name":"120 ROLLING ROCK ROAD CHELAN WA 98816",
        "desc":"Rolling Rock Rd, Chelan, WA 98816"
      },
      {
        "latitude":47.7002678,
        "longitude":-122.3443527,
        "name":"9724 AURORA AVE N SEATTLE WA 98103",
        "desc":"9724 Aurora Ave N, Seattle, WA 98103"
      },
      {
        "latitude":48.876644,
        "longitude":-122.584991,
        "name":"6481 PORTAL WAY STE A FERNDALE WA 98248",
        "desc":"6481 Portal Way, Ferndale, WA 98248"
      },
      {
        "latitude":47.1430664,
        "longitude":-123.0409088,
        "name":"4340 SE BLOOMFIELD RD STE B SHELTON WA 98584",
        "desc":"4340 SE Bloomfield Rd, Shelton, WA 98584"
      },
      {
        "latitude":48.6226654,
        "longitude":-119.0257034,
        "name":"474 CAPE LABELLE RD STE A TONASKET WA 98855",
        "desc":"474 Cape Labelle Rd, Tonasket, WA 98855"
      },
      {
        "latitude":48.8149948,
        "longitude":-118.669754,
        "name":"415 N EMPIRE CREEK RD STE A MALO WA 99150",
        "desc":"415 North Empire Creek Rd, Malo, WA 99150"
      },
      {
        "latitude":46.8238512,
        "longitude":-118.9839781,
        "name":"1199 W CUNNINGHAM RD STE E OTHELLO WA 99344",
        "desc":"1199 W Cunningham Rd, Othello, WA 99344"
      },
      {
        "latitude":48.4708569,
        "longitude":-119.5270135,
        "name":"125 GREENACRES RD RIVERSIDE WA 98849",
        "desc":"125 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":48.627911,
        "longitude":-119.4004212,
        "name":"504 MCLAUGHLIN CANYON RD STE A RIVERSIDE WA 98849",
        "desc":"504 McLaughlin Canyon Rd, Riverside, WA 98849"
      },
      {
        "latitude":46.9303665,
        "longitude":-120.4516525,
        "name":"1006 EMERSON RD STE C ELLENSBURG WA 98926",
        "desc":"1006 Emerson Rd, Ellensburg, WA 98926"
      },
      {
        "latitude":48.7549858,
        "longitude":-122.1941452,
        "name":"3110 STANDARD RD STE B DEMING WA 98244",
        "desc":"3110 Standard Rd, Deming, WA 98244"
      },
      {
        "latitude":46.664676,
        "longitude":-122.973129,
        "name":"391 NW STATE AVE STE 1 CHEHALIS WA 98532",
        "desc":"391 NW State Ave, Chehalis, WA 98532"
      },
      {
        "latitude":48.2054596,
        "longitude":-122.2101288,
        "name":"22330 15TH AVE NE ARLINGTON WA 98223",
        "desc":"15th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.3788681,
        "longitude":-120.2573853,
        "name":"1717 MALAGA ALCOA HWY WENATCHEE WA 98801",
        "desc":"1717 Malaga Alcoa Hwy, Wenatchee, WA 98801"
      },
      {
        "latitude":47.7613983,
        "longitude":-118.3503799,
        "name":"35100 MILES CRESTON RD N CRESTON WA 99117",
        "desc":"Miles Creston Rd N, Creston, WA 99117"
      },
      {
        "latitude":47.6308098,
        "longitude":-117.5900803,
        "name":"13026 W MCFARLAND RD STE B1-3 AIRWAY HEIGHTS WA 98001",
        "desc":"13026 W McFarlane Rd, Airway Heights, WA 99001"
      },
      {
        "latitude":47.9486851,
        "longitude":-121.8894616,
        "name":"5115 WOODS CREEK RD MONROE WA 98272",
        "desc":"5115 Woods Creek Rd, Monroe, WA 98272"
      },
      {
        "latitude":48.4695299,
        "longitude":-119.5270289,
        "name":"99 GREENACRES RD  LOT D RIVERSIDE WA 98849",
        "desc":"99 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":48.373561,
        "longitude":-122.334289,
        "name":"18791 CEDARDALE RD SUITE B MOUNT VERNON WA 98274",
        "desc":"18791 Cedardale Rd, Mount Vernon, WA 98274"
      },
      {
        "latitude":47.337558,
        "longitude":-122.225692,
        "name":"3402 C ST NE    #109 AUBURN WA 98002",
        "desc":"3402 C St NE, Auburn, WA 98002"
      },
      {
        "latitude":48.563652,
        "longitude":-122.4147339,
        "name":"3533 CHUCKANUT DR SUITE A BOW WA 98232",
        "desc":"98232, WA"
      },
      {
        "latitude":47.9940534,
        "longitude":-117.2573496,
        "name":"37315 N FRIDAY LN ELK WA 99009",
        "desc":"37315 N Friday Ln, Elk, WA 99009"
      },
      {
        "latitude":48.0320039,
        "longitude":-117.3217569,
        "name":"6412 E OREGON_RD, SUITE B ELK WA 99009",
        "desc":"6412 E Oregon Rd, Elk, WA 99009"
      },
      {
        "latitude":47.6335464,
        "longitude":-117.3086838,
        "name":"7118 E JENNIE LN #A SPOKANE WA 99212",
        "desc":"7118 E Jennie Ln, Spokane, WA 99212"
      },
      {
        "latitude":46.5910797,
        "longitude":-120.1158676,
        "name":"503 W PROSPECT RD MOXEE WA 98936",
        "desc":"98936, WA"
      },
      {
        "latitude":47.5843353,
        "longitude":-122.1656723,
        "name":"2930 RICHARDS RD #100 BELLEVUE WA 98005",
        "desc":"2930 Richards Rd SE, Bellevue, WA 98005"
      },
      {
        "latitude":48.797569,
        "longitude":-122.52597,
        "name":"4326 PACIFIC HWY BELLINGHAM WA 98226",
        "desc":"4326 Pacific Hwy, Bellingham, WA 98226"
      },
      {
        "latitude":48.0863838,
        "longitude":-122.8153763,
        "name":"71 EISENBEIS AVE PORT TOWNSEND WA 98368",
        "desc":"71 Eisenbeis Ave, Port Townsend, WA 98368"
      },
      {
        "latitude":47.6536446,
        "longitude":-122.3430176,
        "name":"3831 STONE WAY N SEATTLE WA 98103",
        "desc":"3831 Stone Way N, Seattle, WA 98103"
      },
      {
        "latitude":47.0390968,
        "longitude":-123.9478378,
        "name":"215 OCEAN BEACH RD STE A HOQUIAM WA 98550",
        "desc":"215 Ocean Beach Rd, Hoquiam, WA 98550"
      },
      {
        "latitude":47.5678959,
        "longitude":-122.65335,
        "name":"625 N CALLOW AVE BREMERTON WA 98312",
        "desc":"625 N Callow Ave, Bremerton, WA 98312"
      },
      {
        "latitude":46.8092041,
        "longitude":-123.0071106,
        "name":"5845 192ND AVE SW STE 104 ROCHESTER WA 98579",
        "desc":"5845 192nd Ave SW, Rochester, WA 98579"
      },
      {
        "latitude":45.7350922,
        "longitude":-121.1405117,
        "name":"27 HARRELL RD LYLE WA 98635",
        "desc":"27 Harrell Rd, Lyle, WA 98635"
      },
      {
        "latitude":47.6348801,
        "longitude":-117.5712509,
        "name":"11509 W 21ST AVE BLD 2 AIRWAY HEIGHTS WA 99001",
        "desc":"11509 W 21st Ave, Spokane, WA 99224"
      },
      {
        "latitude":48.021362,
        "longitude":-122.055618,
        "name":"13008 27TH PL NE BUILDING 2 LAKE STEVENS WA 98258",
        "desc":"13008 27th Pl NE, Lake Stevens, WA 98258"
      },
      {
        "latitude":45.671188,
        "longitude":-122.63887,
        "name":"3019 NE 68TH ST  STE A VANCOUVER WA 98665",
        "desc":"3019 NE 68th St, Vancouver, WA 98665"
      },
      {
        "latitude":46.8238512,
        "longitude":-118.9839781,
        "name":"1199 W CUNNINGHAM RD STE D OTHELLO WA 99344",
        "desc":"1199 W Cunningham Rd, Othello, WA 99344"
      },
      {
        "latitude":47.0444107,
        "longitude":-124.1560898,
        "name":"2294 STATE ROUTE 109 HOQUIAM WA 98550",
        "desc":"2294 State Route 109, Hoquiam, WA 98550"
      },
      {
        "latitude":47.4735413,
        "longitude":-117.3908615,
        "name":"1316 E SMYTHE RD STE A SPANGLE WA 99031",
        "desc":"1316 E Smythe Rd, Spangle, WA 99031"
      },
      {
        "latitude":47.6574936,
        "longitude":-117.3896103,
        "name":"1407 E SPRAGUE AVE SPOKANE WA 99202",
        "desc":"1407 E Sprague Ave, Spokane, WA 99202"
      },
      {
        "latitude":47.6655693,
        "longitude":-117.5576324,
        "name":"10517 W BALMER RD #A SPOKANE WA 99224",
        "desc":"10517 W Balmer Rd, Spokane, WA 99224"
      },
      {
        "latitude":47.680187,
        "longitude":-122.542213,
        "name":"8040 NE DAY RD W BLDG 3 STE 1 BAINBRIDGE ISLAND WA 98110",
        "desc":"8040 NE Day Rd W, Bainbridge Island, WA 98110"
      },
      {
        "latitude":48.2023163,
        "longitude":-120.0167389,
        "name":"696 TEXAS CREEK ROAD #A CARLTON WA 98814",
        "desc":"696 Texas Creek Rd, Carlton, WA 98814"
      },
      {
        "latitude":46.564624,
        "longitude":-120.400337,
        "name":"7521 POSTMA RD SUITE C MOXEE WA 98936",
        "desc":"7521 Postma Rd, Moxee, WA 98936"
      },
      {
        "latitude":46.8292084,
        "longitude":-122.9681473,
        "name":"17830 DANE LN SW ROCHESTER WA 98579",
        "desc":"17830 Dane Ln SW, Rochester, WA 98579"
      },
      {
        "latitude":47.1570053,
        "longitude":-119.839447,
        "name":"4656 RD P #3 QUINCY WA 98848",
        "desc":"4656 Road P NW, Quincy, WA 98848"
      },
      {
        "latitude":48.091449,
        "longitude":-122.815116,
        "name":"205A N OTTO ST PORT TOWNSEND WA 98368",
        "desc":"205 N Otto St, Port Townsend, WA 98368"
      },
      {
        "latitude":47.5036354,
        "longitude":-117.7416534,
        "name":"16102 S WOOD RD STE A CHENEY WA 99004",
        "desc":"16102 S Wood Rd, Cheney, WA 99004"
      },
      {
        "latitude":47.552745,
        "longitude":-122.387489,
        "name":"5437 CALIFORNIA AVE SW SUITE B SEATTLE WA 98136",
        "desc":"5437 California Ave SW, Seattle, WA 98136"
      },
      {
        "latitude":48.1071358,
        "longitude":-123.3629379,
        "name":"3368 EAST HWY 101 PORT ANGELES WA 98362",
        "desc":"3368 E Highway 101, Port Angeles, WA 98362"
      },
      {
        "latitude":48.8362656,
        "longitude":-122.4876633,
        "name":"5373 GUIDE MERIDIAN RD STE C4 BELLINGHAM WA 98226",
        "desc":"5373 Guide Meridian Rd, Bellingham, WA 98226"
      },
      {
        "latitude":47.2336044,
        "longitude":-122.4556503,
        "name":"1610 CENTRE ST TACOMA WA 98406",
        "desc":"1610 S Center St, Tacoma, WA 98409"
      },
      {
        "latitude":47.2317734,
        "longitude":-122.9212265,
        "name":"1052 E SOUTH ISLAND DR STE A SHELTON WA 98584",
        "desc":"1052 E South Island Dr, Shelton, WA 98584"
      },
      {
        "latitude":48.918499,
        "longitude":-119.2704163,
        "name":"110 AIRPORT ROAD PICKENS MTN OROVILLE WA 98844",
        "desc":"98844, WA"
      },
      {
        "latitude":47.7070161,
        "longitude":-122.3447994,
        "name":"10715 AURORA AVE N SEATTLE WA 98133",
        "desc":"10715 Aurora Ave N, Seattle, WA 98133"
      },
      {
        "latitude":46.8303146,
        "longitude":-122.953392,
        "name":"3320 178TH LN SW STE B TENINO WA 98589",
        "desc":"3320 178th Ln SW, Tenino, WA 98589"
      },
      {
        "latitude":46.8411255,
        "longitude":-122.4972534,
        "name":"16948 LONGMIRE RD SE    STE A YELM WA 98597",
        "desc":"16948 Longmire Rd SE, Yelm, WA 98597"
      },
      {
        "latitude":47.2005554,
        "longitude":-119.6760531,
        "name":"7835 WA 283 STE C EPHRATA WA 98823",
        "desc":"7835 WA-283, Ephrata, WA 98823"
      },
      {
        "latitude":46.9947395,
        "longitude":-120.4719086,
        "name":"2451 N FERGUSON RD ELLENSBURG WA 98926",
        "desc":"2451 N Ferguson Rd, Ellensburg, WA 98926"
      },
      {
        "latitude":48.1574555,
        "longitude":-122.1509072,
        "name":"17835 59TH AVE NE BLDG 8 STE A ARLINGTON WA 98223",
        "desc":"17835 59th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":48.5312119,
        "longitude":-122.0236359,
        "name":"33081 STATE ROUTE 20 SEDRO WOOLLEY WA 98284",
        "desc":"33081 State Route 20, Sedro-Woolley, WA 98284"
      },
      {
        "latitude":48.4260909,
        "longitude":-122.3589025,
        "name":"17926 STATE ROUTE 536 STE B MOUNT VERNON WA 98273",
        "desc":"17926 State Route 536, Mount Vernon, WA 98273"
      },
      {
        "latitude":47.8077965,
        "longitude":-122.0078659,
        "name":"20808 167TH AVE SE MONROE WA 98272",
        "desc":"20808 167th Ave SE, Monroe, WA 98272"
      },
      {
        "latitude":47.3674583,
        "longitude":-120.2822876,
        "name":"440 GRUBB ROAD #4 WENATCHEE WA 99880",
        "desc":"Grubb Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.2187836,
        "longitude":-123.4751165,
        "name":"654 W HOMER ADAMS RD ELMA WA 98541",
        "desc":"654 W Homer Adams Rd, Elma, WA 98541"
      },
      {
        "latitude":46.9525047,
        "longitude":-122.929006,
        "name":"9320 KIMMIE ST SW OLYMPIA WA 98512",
        "desc":"9320 Kimmie St SW, Olympia, WA 98512"
      },
      {
        "latitude":48.2229881,
        "longitude":-122.0431213,
        "name":"13731 250TH ST NE SUITE C ARLINGTON WA 98223",
        "desc":"13731 250th St NE, Arlington, WA 98223"
      },
      {
        "latitude":47.6126556,
        "longitude":-122.3007507,
        "name":"2413 E UNION ST SEATTLE WA 98122",
        "desc":"2413 E Union St, Seattle, WA 98122"
      },
      {
        "latitude":47.4871216,
        "longitude":-120.4173584,
        "name":"100 MAIN ST SUITE 7 MONITOR WA 98836",
        "desc":"Main St, Monitor, WA 98836"
      },
      {
        "latitude":47.8592945,
        "longitude":-122.1136822,
        "name":"8820 152ND ST SE STE A SNOHOMISH WA 98296",
        "desc":"8820 152nd St SE, Snohomish, WA 98296"
      },
      {
        "latitude":47.6540619,
        "longitude":-122.3444722,
        "name":"1058 N 39TH ST SEATTLE WA 98103",
        "desc":"1058 N 39th St, Seattle, WA 98103"
      },
      {
        "latitude":47.001495,
        "longitude":-120.576194,
        "name":"1911 W DOLARWAY RD STE B ELLENSBURG WA 98926",
        "desc":"1911 W Dolarway Rd, Ellensburg, WA 98926"
      },
      {
        "latitude":48.1720161,
        "longitude":-117.7110291,
        "name":"3049 BAKIE RD VALLEY WA 99181",
        "desc":"3049 Bakie Rd, Valley, WA 99181"
      },
      {
        "latitude":47.2255287,
        "longitude":-123.1779175,
        "name":"50 W. WESTFIELD CT. UNIT E SHELTON WA 98584",
        "desc":"98584, WA"
      },
      {
        "latitude":48.4721176,
        "longitude":-119.5270215,
        "name":"139 GREEN ACRES RD UNIT 3 RIVERSIDE WA 98849",
        "desc":"139 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":47.6121941,
        "longitude":-117.5097427,
        "name":"4509 S CHEATHAM RD STE A SPOKANE WA 99224",
        "desc":"4509 S Cheatham Rd, Spokane, WA 99224"
      },
      {
        "latitude":47.497882,
        "longitude":-121.809585,
        "name":"1610 NW 8TH STREET SUITE B NORTH BEND WA 98045",
        "desc":"1610 NW 8th St, North Bend, WA 98045"
      },
      {
        "latitude":47.9086304,
        "longitude":-121.9296417,
        "name":"22521 100TH ST SE STE A MONROE WA 98272",
        "desc":"22521 100th St SE, Monroe, WA 98272"
      },
      {
        "latitude":47.5350609,
        "longitude":-122.3277893,
        "name":"7510 5TH AVE S SEATTLE WA 98108",
        "desc":"7510 5th Ave S, Seattle, WA 98108"
      },
      {
        "latitude":48.1361618,
        "longitude":-122.0841751,
        "name":"10908 156TH ST NE STE C ARLINGTON WA 98223",
        "desc":"10908 156th St NE, Arlington, WA 98223"
      },
      {
        "latitude":47.0881004,
        "longitude":-120.6866608,
        "name":"2500 ROCKY RIVER RD ELLENSBURG WA 98926",
        "desc":"Rocky River Rd, Ellensburg, WA 98926"
      },
      {
        "latitude":46.8647881,
        "longitude":-124.0612106,
        "name":"254 BAYVIEW RD ABERDEEN WA 98520",
        "desc":"254 Bayview Rd, Aberdeen, WA 98520"
      },
      {
        "latitude":48.0841064,
        "longitude":-122.8159332,
        "name":"274 A OTTO ST PORT TOWNSEND WA 98368",
        "desc":"274 Otto St, Port Townsend, WA 98368"
      },
      {
        "latitude":47.2101704,
        "longitude":-122.05601,
        "name":"21418 SE 436TH ENUMCLAW WA 98022",
        "desc":"21418 SE 436th St, Enumclaw, WA 98022"
      },
      {
        "latitude":46.5624867,
        "longitude":-120.3961571,
        "name":"7800 POSTMA RD   STE 2 MOXEE WA 98936",
        "desc":"7800 Postma Rd, Moxee, WA 98936"
      },
      {
        "latitude":45.8763179,
        "longitude":-122.7160989,
        "name":"35702 NW TOENJES RD WOODLAND WA 98674",
        "desc":"35702 NW Toenjes Rd, Woodland, WA 98674"
      },
      {
        "latitude":47.9612617,
        "longitude":-122.2111664,
        "name":"4218 RUCKER AVE EVERETT WA 98203",
        "desc":"4218 Rucker Ave, Everett, WA 98203"
      },
      {
        "latitude":48.87437,
        "longitude":-122.503677,
        "name":"425 W KING TUT RD STE A BELLINGHAM WA 98226",
        "desc":"425 W King Tut Rd, Bellingham, WA 98226"
      },
      {
        "latitude":47.8510437,
        "longitude":-121.6498184,
        "name":"16212 MAY CREEK ROAD GOLD BAR WA 98251",
        "desc":"16212 May Creek Rd, Gold Bar, WA 98251"
      },
      {
        "latitude":46.8718987,
        "longitude":-123.7073517,
        "name":"776 US HWY 101 COSMOPOLIS WA 98537",
        "desc":"US Highway 101, Cosmopolis, WA 98537"
      },
      {
        "latitude":46.6736434,
        "longitude":-123.7690464,
        "name":"2870 OCEAN AVE RAYMOND WA 98577",
        "desc":"2870 Ocean Ave, Raymond, WA 98577"
      },
      {
        "latitude":47.6154823,
        "longitude":-122.5384979,
        "name":"5973 OLD MILL RD NE BLDG E-5 BAINBRIDGE ISLAND WA 98110",
        "desc":"5973 NE Old Mill Rd, Bainbridge Island, WA 98110"
      },
      {
        "latitude":47.4750023,
        "longitude":-122.7915649,
        "name":"11854 SW LAKE FLORA RD BREMERTON WA 98367",
        "desc":"11854 SW Lake Flora Rd, Bremerton, WA 98367"
      },
      {
        "latitude":47.570591,
        "longitude":-122.3563461,
        "name":"3601 W MARGINAL WAY SW #2 SEATTLE WA 98106",
        "desc":"3601 W Marginal Way SW, Seattle, WA 98106"
      },
      {
        "latitude":46.3579642,
        "longitude":-119.0849525,
        "name":"103 CRESTLOCH RD PASCO WA 99301",
        "desc":"103 Crestloch Rd, Pasco, WA 99301"
      },
      {
        "latitude":47.3995667,
        "longitude":-118.337944,
        "name":"9485 KNAPP RD MOHLER WA 99154",
        "desc":"9485 Knapp Rd N, Mohler, WA 99154"
      },
      {
        "latitude":47.6308098,
        "longitude":-117.5900803,
        "name":"13026 W MCFARLANE RD SUITE C 1 AIRWAY HEIGHTS WA 99001",
        "desc":"13026 W McFarlane Rd, Airway Heights, WA 99001"
      },
      {
        "latitude":47.2400334,
        "longitude":-122.4349974,
        "name":"112 S 24TH ST TACOMA WA 98402",
        "desc":"112 S 24th St, Tacoma, WA 98402"
      },
      {
        "latitude":47.232151,
        "longitude":-122.4729919,
        "name":"3111 S PINE ST TACOMA WA 98409",
        "desc":"3111 S Pine St, Tacoma, WA 98409"
      },
      {
        "latitude":46.9639359,
        "longitude":-122.6064987,
        "name":"15709 ORDWAY DR S.E. YELM WA 98597",
        "desc":"15709 Ordway Dr SE, Yelm, WA 98597"
      },
      {
        "latitude":47.0510635,
        "longitude":-122.9946594,
        "name":"600 RONLEE LN NW BLDG B2 OLYMPIA WA 98502",
        "desc":"600 Ronlee Ln NW, Olympia, WA 98502"
      },
      {
        "latitude":47.0510635,
        "longitude":-122.9946594,
        "name":"600 RONLEE LN NW BLDG A OLYMPIA WA 98502",
        "desc":"600 Ronlee Ln NW, Olympia, WA 98502"
      },
      {
        "latitude":48.8441185,
        "longitude":-119.4045518,
        "name":"182 ONEIL RD STE B OROVILLE WA 98844",
        "desc":"182 ONeil Rd, Oroville, WA 98844"
      },
      {
        "latitude":47.1227531,
        "longitude":-119.3706055,
        "name":"2255 ROAD E.5 NE STE A MOSES LAKE WA 98837",
        "desc":"2255 Road E.5 NE, Moses Lake, WA 98837"
      },
      {
        "latitude":47.8083681,
        "longitude":-122.2601469,
        "name":"20925 CYPRESS WAY STE C 103 LYNNWOOD WA 98036",
        "desc":"20925 Cypress Way, Lynnwood, WA 98036"
      },
      {
        "latitude":47.881149,
        "longitude":-121.924301,
        "name":"12815 227TH AVE SE MONROE WA 98272",
        "desc":"12815 227th Ave SE, Monroe, WA 98272"
      },
      {
        "latitude":46.5815544,
        "longitude":-120.7019882,
        "name":"14601 PALM CT YAKIMA WA 98908",
        "desc":"14601 Palm Ct, Yakima, WA 98908"
      },
      {
        "latitude":48.10284,
        "longitude":-122.80072,
        "name":"2123 W SIMS WAY APT 1 PORT TOWNSEND WA 98368",
        "desc":"2123 W Sims Way, Port Townsend, WA 98368"
      },
      {
        "latitude":47.6967316,
        "longitude":-117.53862,
        "name":"9011 W NEWKIRK RD STE A SPOKANE WA 99224",
        "desc":"9011 W Newkirk Rd, Spokane, WA 99224"
      },
      {
        "latitude":47.1376305,
        "longitude":-119.2399673,
        "name":"3426 CITATION RD NE STE 3 & 4 MOSES LAKE WA 98837",
        "desc":"3426 Citation Rd NE, Moses Lake, WA 98837"
      },
      {
        "latitude":45.6605221,
        "longitude":-121.0582933,
        "name":"8846 HWY 14 STE A WISHRAM WA 98673",
        "desc":"8846 Highway 14, Lyle, WA 98635"
      },
      {
        "latitude":46.8500483,
        "longitude":-117.4706731,
        "name":"128852 SR 26 STE A COLFAX WA 99111",
        "desc":"128852 State Route 26, Colfax, WA 99111"
      },
      {
        "latitude":46.2970365,
        "longitude":-119.5414994,
        "name":"57406 N THOMAS RD STE B BENTON CITY WA 99320",
        "desc":"57406 N Thomas Rd, Benton City, WA 99320"
      },
      {
        "latitude":47.423313,
        "longitude":-122.445854,
        "name":"20171 87TH AVE SW SUITE B VASHON WA 98070",
        "desc":"20171 87th Ave SW, Vashon, WA 98070"
      },
      {
        "latitude":48.3353615,
        "longitude":-122.5756989,
        "name":"3438 ALTAIR PL STE A OAK HARBOR WA 98277",
        "desc":"3438 Altair Pl, Oak Harbor, WA 98277"
      },
      {
        "latitude":47.2872772,
        "longitude":-122.3207058,
        "name":"1123 351ST ST STE B FEDERAL WAY WA 98003",
        "desc":"1123 S 351st St, Federal Way, WA 98003"
      },
      {
        "latitude":47.3656807,
        "longitude":-120.3081436,
        "name":"3345 JAGLA ROAD LOT #2 WENATCHEE WA 98801",
        "desc":"3345 Jagla Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.6687584,
        "longitude":-117.3534775,
        "name":"3830 E BOONE AVE SPOKANE WA 99202",
        "desc":"3830 E Boone Ave, Spokane, WA 99202"
      },
      {
        "latitude":47.2554741,
        "longitude":-123.1580811,
        "name":"190 W PINE ACRES WAY SHELTON WA 98584",
        "desc":"190 W Pine Acres Way, Shelton, WA 98584"
      },
      {
        "latitude":46.2272797,
        "longitude":-119.8383408,
        "name":"164101 W JOHNSON RD   STE A PROSSER WA 99350",
        "desc":"164101 W Johnson Rd, Prosser, WA 99350"
      },
      {
        "latitude":47.2335821,
        "longitude":-122.4578337,
        "name":"2909 S ALASKA ST TACOMA WA 98409",
        "desc":"2909 S Alaska St, Tacoma, WA 98409"
      },
      {
        "latitude":47.7231483,
        "longitude":-117.4120407,
        "name":"7115 N DIVISION ST STE A SPOKANE WA 99208",
        "desc":"7115 N Division St, Spokane, WA 99208"
      },
      {
        "latitude":47.6230549,
        "longitude":-122.3132325,
        "name":"1465 E REPUBLICAN ST SEATTLE WA 98112",
        "desc":"1465 E Republican St, Seattle, WA 98112"
      },
      {
        "latitude":47.158287,
        "longitude":-122.503593,
        "name":"10901 BRIDGEPORT WAY SW STE A LAKEWOOD WA 98499",
        "desc":"10901 Bridgeport Way SW, Lakewood, WA 98499"
      },
      {
        "latitude":47.4224512,
        "longitude":-117.4695432,
        "name":"26425 S RUPP RD STE 10 CHENEY WA 99004",
        "desc":"26425 S Rupp Rd, Cheney, WA 99004"
      },
      {
        "latitude":46.1493301,
        "longitude":-119.0801468,
        "name":"200115 E GAME FARM RD STE B KENNEWICK WA 99337",
        "desc":"200115 E Game Farm Rd, Kennewick, WA 99337"
      },
      {
        "latitude":48.417804,
        "longitude":-119.506309,
        "name":"903 ENGH RD  STE C OMAK WA 98841",
        "desc":"903 Engh Rd, Omak, WA 98841"
      },
      {
        "latitude":48.8362656,
        "longitude":-122.4876633,
        "name":"5373 GUIDE MERIDIAN STE D1 BELLINGHAM WA 98226",
        "desc":"5373 Guide Meridian, Bellingham, WA 98226"
      },
      {
        "latitude":47.5015068,
        "longitude":-122.105011,
        "name":"17702 SE MAY VALLEY RD  STE B RENTON WA 98059",
        "desc":"17702 SE May Valley Rd, Renton, WA 98059"
      },
      {
        "latitude":46.8238512,
        "longitude":-118.9839781,
        "name":"1199 W CUNNINGHAM RD STE C OTHELLO WA 99344",
        "desc":"1199 W Cunningham Rd, Othello, WA 99344"
      },
      {
        "latitude":48.5575371,
        "longitude":-123.1492538,
        "name":"252A FIELDSTONE RD LOT 1 FRIDAY HARBOR WA 98250",
        "desc":"252 Fieldstone Rd, Friday Harbor, WA 98250"
      },
      {
        "latitude":47.3695602,
        "longitude":-120.1826324,
        "name":"4380 KAWECKI RD WENATCHEE WA 98828",
        "desc":"Kawecki Rd, Malaga, WA 98828"
      },
      {
        "latitude":47.4224512,
        "longitude":-117.4695432,
        "name":"26425 S RUPP ROAD STE 8 CHENEY WA 99004",
        "desc":"26425 S Rupp Rd, Cheney, WA 99004"
      },
      {
        "latitude":48.8189359,
        "longitude":-122.3771207,
        "name":"4911 EVERSON GOSHEN RD BELLINGHAM WA 98226",
        "desc":"4911 Everson-Goshen Rd, Bellingham, WA 98226"
      },
      {
        "latitude":48.8329163,
        "longitude":-122.6545029,
        "name":"3171 UNICK RD SUITE B FERNDALE WA 98248",
        "desc":"3171 Unick Rd, Ferndale, WA 98248"
      },
      {
        "latitude":46.564624,
        "longitude":-120.400337,
        "name":"7521 POSTMA RD STE A MOXEE WA 98936",
        "desc":"7521 Postma Rd, Moxee, WA 98936"
      },
      {
        "latitude":47.3656807,
        "longitude":-120.3081436,
        "name":"3345 JAGLA RD STE A WENATCHEE WA 98801",
        "desc":"3345 Jagla Rd, Wenatchee, WA 98801"
      },
      {
        "latitude":47.6850696,
        "longitude":-117.2631875,
        "name":"10525 E TRENT AVE STE 1 SPOKANE WA 99206",
        "desc":"10525 E Trent Ave, Spokane, WA 99206"
      },
      {
        "latitude":47.7423439,
        "longitude":-117.4120789,
        "name":"9301 N DIVISION ST STE B-C SPOKANE WA 99218",
        "desc":"9301 N Division St, Spokane, WA 99218"
      },
      {
        "latitude":47.5832558,
        "longitude":-122.1633301,
        "name":"13215 SE 30TH ST BELLEVUE WA 98005",
        "desc":"13215 SE 30th St, Bellevue, WA 98005"
      },
      {
        "latitude":47.998176,
        "longitude":-117.572341,
        "name":"4428 WILLIAMS VALLEY RD STE A CLAYTON WA 99110",
        "desc":"4428 Williams Valley Rd, Clayton, WA 99110"
      },
      {
        "latitude":47.9902153,
        "longitude":-122.8907547,
        "name":"282332 HIGHWAY 101 STE 2 PORT TOWNSEND WA 98368",
        "desc":"282332 US Highway 101, Port Townsend, WA 98368"
      },
      {
        "latitude":47.660183,
        "longitude":-122.3866196,
        "name":"2327 W COMMODORE WAY SEATTLE WA 98199",
        "desc":"2327 W Commodore Way, Seattle, WA 98199"
      },
      {
        "latitude":47.5751627,
        "longitude":-122.3341738,
        "name":"3230 1ST AVE S STE B SEATTLE WA 98134",
        "desc":"3230 1st Ave S, Seattle, WA 98134"
      },
      {
        "latitude":47.569393,
        "longitude":-122.322296,
        "name":"3810 AIRPORT WAY S   STE 110 SEATTLE WA 98108",
        "desc":"3810 Airport Way S, Seattle, WA 98108"
      },
      {
        "latitude":45.71323,
        "longitude":-121.462913,
        "name":"405 E STEUBEN ST STE A BINGEN WA 98605",
        "desc":"405 E Steuben St, Bingen, WA 98605"
      },
      {
        "latitude":47.7170181,
        "longitude":-122.3449657,
        "name":"12059 AURORA AVE N SEATTLE WA 98133",
        "desc":"12059 Aurora Ave N, Seattle, WA 98133"
      },
      {
        "latitude":48.1565919,
        "longitude":-122.1508757,
        "name":"17731 59TH AV NE BLDG 16 STE A ARLINGTON WA 98223",
        "desc":"17731 59th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.5595474,
        "longitude":-122.6902847,
        "name":"410 IDA ST W BREMERTON WA 98312",
        "desc":"410 Ida St W, Bremerton, WA 98312"
      },
      {
        "latitude":48.6270761,
        "longitude":-118.1233236,
        "name":"2 COLUMBIA DR KETTLE FALLS WA 99141",
        "desc":"2 Columbia Dr, Kettle Falls, WA 99141"
      },
      {
        "latitude":48.4253311,
        "longitude":-118.109169,
        "name":"1949 SCOTT RD BLDG B RICE WA 99167",
        "desc":"1949 Scott Rd, Rice, WA 99167"
      },
      {
        "latitude":46.9033318,
        "longitude":-122.6363525,
        "name":"12742 ZELLER RD SE SUITE B YELM WA 98597",
        "desc":"12742 Zeller Rd SE, Yelm, WA 98597"
      },
      {
        "latitude":47.3995667,
        "longitude":-118.337944,
        "name":"9485 KNAPP RD MOHLER WA 99154",
        "desc":"9485 Knapp Rd N, Mohler, WA 99154"
      },
      {
        "latitude":47.539646,
        "longitude":-122.323081,
        "name":"7047 E MARGINAL WAY S UNIT B SEATTLE WA 98108",
        "desc":"7047 E Marginal Way S, Seattle, WA 98108"
      },
      {
        "latitude":47.8954086,
        "longitude":-120.4532166,
        "name":"17801 ENTIAT RIVER RD ENTIAT WA 98822",
        "desc":"17801 Entiat River Rd, Entiat, WA 98822"
      },
      {
        "latitude":48.1582535,
        "longitude":-122.1509361,
        "name":"17931 59TH AVE NE,BLDG 2 STE B ARLINGTON WA 98223",
        "desc":"17931 59th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":46.9464569,
        "longitude":-122.9415359,
        "name":"9730 LATHROP INDUSTRIAL DR SW OLYMPIA WA 98512",
        "desc":"9730 Lathrop Industrial Dr SW, Olympia, WA 98512"
      },
      {
        "latitude":46.797019,
        "longitude":-122.803306,
        "name":"6123 199TH AVE SE TENINO WA 98589",
        "desc":"6123 199th Ave SE, Tenino, WA 98589"
      },
      {
        "latitude":47.7086469,
        "longitude":-122.3014006,
        "name":"11015 LAKE CITY WAY NE SEATTLE WA 98125",
        "desc":"11015 Lake City Way NE, Seattle, WA 98125"
      },
      {
        "latitude":46.56438,
        "longitude":-120.387191,
        "name":"8531 POSTMA RD  STE C MOXEE WA 98936",
        "desc":"8531 Postma Rd, Moxee, WA 98936"
      },
      {
        "latitude":47.5720444,
        "longitude":-122.3514481,
        "name":"1128 SW SPOKANE ST SEATTLE WA 98134",
        "desc":"1128 SW Spokane St, Seattle, WA 98134"
      },
      {
        "latitude":48.4741252,
        "longitude":-119.5269558,
        "name":"145 GREENACRES RD UNIT 4 RIVERSIDE WA 98849",
        "desc":"145 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":47.6580846,
        "longitude":-117.3623072,
        "name":"71 N RALPH ST STE 102 SPOKANE WA 99202",
        "desc":"71 N Ralph St, Spokane, WA 99202"
      },
      {
        "latitude":48.458105,
        "longitude":-122.5380271,
        "name":"9642 PADILLA HEIGHTS RD ANACORTES WA 98221",
        "desc":"9642 Padilla Heights Rd, Anacortes, WA 98221"
      },
      {
        "latitude":48.4958611,
        "longitude":-122.2731628,
        "name":"1912 STATE ROUTE 20 SEDRO WOOLLEY WA 98284",
        "desc":"1912 State Route 20, Sedro-Woolley, WA 98284"
      },
      {
        "latitude":48.373561,
        "longitude":-122.334289,
        "name":"18791 CEDARDALE RD   STE C MOUNT VERNON WA 98274",
        "desc":"18791 Cedardale Rd, Mount Vernon, WA 98274"
      },
      {
        "latitude":47.5710411,
        "longitude":-122.3423615,
        "name":"2640 S SPOKANE ST SEATTLE WA 98134",
        "desc":"S Spokane St, Seattle, WA 98134"
      },
      {
        "latitude":48.6813131,
        "longitude":-119.5047786,
        "name":"1926 PINE CR RD  #3 TONASKET WA 98855",
        "desc":"1926 Pine Creek Rd, Tonasket, WA 98855"
      },
      {
        "latitude":46.963554,
        "longitude":-122.8892671,
        "name":"1013 85TH AVE SE STE A TUMWATER WA 98501",
        "desc":"1013 85th Ave SE, Tumwater, WA 98501"
      },
      {
        "latitude":47.669208,
        "longitude":-117.326271,
        "name":"5805 E SHARP AVE STE C4 SPOKANE VALLEY WA 99212",
        "desc":"5805 E Sharp Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":48.1093521,
        "longitude":-123.4093475,
        "name":"1403 E 1ST ST PORT ANGELES WA 98362",
        "desc":"1403 E 1st St, Port Angeles, WA 98362"
      },
      {
        "latitude":47.373096,
        "longitude":-120.242706,
        "name":"2345 MCELDOWNEY RD STE 1 MALAGA WA 98828",
        "desc":"2345 McEldowney Rd, Malaga, WA 98828"
      },
      {
        "latitude":47.2467842,
        "longitude":-122.42836,
        "name":"420 E 18TH ST UNIT B TACOMA WA 98421",
        "desc":"420 E 18th St, Tacoma, WA 98421"
      },
      {
        "latitude":47.740905,
        "longitude":-117.413566,
        "name":"9107 N COUNTRY HOMES BLVD STEB SPOKANE WA 99218",
        "desc":"9107 N Country Homes Blvd, Spokane, WA 99218"
      },
      {
        "latitude":47.131176,
        "longitude":-123.1016617,
        "name":"90 W ST HWY 108 SHELTON WA 98584",
        "desc":"90 W State Route 108, Shelton, WA 98584"
      },
      {
        "latitude":47.1979281,
        "longitude":-117.5118859,
        "name":"652 SQUIRES RD STE 1 ROSALIA WA 99170",
        "desc":"652 Squires Rd, Rosalia, WA 99170"
      },
      {
        "latitude":46.56438,
        "longitude":-120.387191,
        "name":"8531 POSTMA RD STE B MOXEE WA 98936",
        "desc":"8531 Postma Rd, Moxee, WA 98936"
      },
      {
        "latitude":47.2473183,
        "longitude":-122.9848251,
        "name":"1001 E MALANEY CREEK RD STE A SHELTON WA 98584",
        "desc":"1001 E Malaney Creek Rd, Shelton, WA 98584"
      },
      {
        "latitude":48.0437546,
        "longitude":-123.1798401,
        "name":"2564 HOOKER RD SEQUIM WA 98382",
        "desc":"2564 Hooker Rd, Sequim, WA 98382"
      },
      {
        "latitude":47.710712,
        "longitude":-117.350296,
        "name":"4110 E CENTRAL AVE SPOKANE WA 99217",
        "desc":"4110 E Central Ave, Spokane, WA 99217"
      },
      {
        "latitude":47.664836,
        "longitude":-122.378654,
        "name":"4912 17TH AVE NW STE A SEATTLE WA 98107",
        "desc":"4912 17th Ave NW, Seattle, WA 98107"
      },
      {
        "latitude":48.0841064,
        "longitude":-122.8159332,
        "name":"274 OTTO ST UNIT U PORT TOWNSEND WA 98368",
        "desc":"274 Otto St, Port Townsend, WA 98368"
      },
      {
        "latitude":46.5472041,
        "longitude":-120.4754359,
        "name":"4007 MAIN ST UNION GAP WA 98903",
        "desc":"4007 Main St, Union Gap, WA 98903"
      },
      {
        "latitude":46.4431988,
        "longitude":-120.3381389,
        "name":"7560 YAKIMA VALLEY HWY ZILLAH WA 98953",
        "desc":"7560 Yakima Valley Hwy, Zillah, WA 98953"
      },
      {
        "latitude":45.6790354,
        "longitude":-122.6619311,
        "name":"7831 NE HIGHWAY 99 VANCOUVER WA 98665",
        "desc":"7831 NE Highway 99, Vancouver, WA 98665"
      },
      {
        "latitude":47.9294968,
        "longitude":-117.4681625,
        "name":"29911 N DALTON RD #A DEER PARK WA 99006",
        "desc":"29911 N Dalton Rd, Deer Park, WA 99006"
      },
      {
        "latitude":47.2255287,
        "longitude":-123.1779175,
        "name":"50 WEST WESTFIELD COURT #1 SHELTON WA 98584",
        "desc":"98584, WA"
      },
      {
        "latitude":48.7577178,
        "longitude":-122.4631224,
        "name":"916 KENTUCKY ST BELLINGHAM WA 98225",
        "desc":"916 Kentucky St, Bellingham, WA 98225"
      },
      {
        "latitude":47.5030746,
        "longitude":-122.8978271,
        "name":"6841 NE ELFENDAHL PASS RD BELFAIR WA 98528",
        "desc":"6841 NE Elfendahl Pass Rd, Belfair, WA 98528"
      },
      {
        "latitude":48.8931465,
        "longitude":-122.6136856,
        "name":"2425 SALASHAN LOOP BLDG 2 FERNDALE WA 98248",
        "desc":"2425 Salashan Loop, Ferndale, WA 98248"
      },
      {
        "latitude":45.6570527,
        "longitude":-121.1922891,
        "name":"8142 HIGHWAY 14 LYLE WA 98635",
        "desc":"8142 Highway 14, Lyle, WA 98635"
      },
      {
        "latitude":47.5128593,
        "longitude":-122.8934479,
        "name":"470 NE TOONERVILLE DR BLDG 1 BELFAIR WA 98528",
        "desc":"470 NE Toonerville Dr, Belfair, WA 98528"
      },
      {
        "latitude":46.1185265,
        "longitude":-122.8908386,
        "name":"2300 B TALLEY WAY KELSO WA 98626",
        "desc":"2300 Talley Way, Kelso, WA 98626"
      },
      {
        "latitude":48.4721176,
        "longitude":-119.5270215,
        "name":"139 GREENACRES RD RIVERSIDE WA 98849",
        "desc":"139 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":48.8198948,
        "longitude":-122.5583589,
        "name":"1419 WHITEHORN ST FERNDALE WA 98248",
        "desc":"1419 Whitehorn St, Ferndale, WA 98248"
      },
      {
        "latitude":48.4522133,
        "longitude":-122.3530884,
        "name":"18254 W MCCORQUEDALE RD, STE B MOUNT VERNON WA 98273",
        "desc":"18254 W McCorquedale Rd, Mount Vernon, WA 98273"
      },
      {
        "latitude":48.6813131,
        "longitude":-119.5047786,
        "name":"1926 PINE CREEK RD  UNIT 4 TONASKET WA 98855",
        "desc":"1926 Pine Creek Rd, Tonasket, WA 98855"
      },
      {
        "latitude":48.6813131,
        "longitude":-119.5047786,
        "name":"1926 PINE CREEK RD UNIT 4-A TONASKET WA 98855",
        "desc":"1926 Pine Creek Rd, Tonasket, WA 98855"
      },
      {
        "latitude":48.4049759,
        "longitude":-117.865242,
        "name":"1106 CANNON WAY COLVILLE WA 99114",
        "desc":"1106 Cannon Way, Colville, WA 99114"
      },
      {
        "latitude":46.6736434,
        "longitude":-123.7690464,
        "name":"2870 OCEAN AVE STE A RAYMOND WA 98577",
        "desc":"2870 Ocean Ave, Raymond, WA 98577"
      },
      {
        "latitude":47.7567673,
        "longitude":-122.6272125,
        "name":"15915 ST HWY 305 NE POULSBO WA 98370",
        "desc":"98370, WA"
      },
      {
        "latitude":47.466607,
        "longitude":-122.8271806,
        "name":"860 NE OLD BELFAIR HWY BELFAIR WA 98528",
        "desc":"860 NE Old Belfair Hwy, Belfair, WA 98528"
      },
      {
        "latitude":46.7986558,
        "longitude":-123.0121672,
        "name":"19943 OLD HWY 99 SW ROCHESTER WA 98579",
        "desc":"19943 Old Highway 99 SW, Rochester, WA 98579"
      },
      {
        "latitude":46.9725113,
        "longitude":-123.6902695,
        "name":"100 OLD HILL RD ABERDEEN WA 98520",
        "desc":"Old Hill Rd, Aberdeen, WA 98520"
      },
      {
        "latitude":47.569393,
        "longitude":-122.322296,
        "name":"3810 AIRPORT WAY S    STE 111 SEATTLE WA 98108",
        "desc":"3810 Airport Way S, Seattle, WA 98108"
      },
      {
        "latitude":48.8441185,
        "longitude":-119.4045518,
        "name":"182 ONEIL RD STE A OROVILLE WA 98844",
        "desc":"182 ONeil Rd, Oroville, WA 98844"
      },
      {
        "latitude":47.630809,
        "longitude":-117.59008,
        "name":"13026 W MCFARLANE RD UNIT C1-2 AIRWAY HEIGHTS WA 99001",
        "desc":"13026 W McFarlane Rd, Airway Heights, WA 99001"
      },
      {
        "latitude":47.0123253,
        "longitude":-118.3083954,
        "name":"669 NORTH RICHARDS RD #Z RITZVILLE WA 99169",
        "desc":"669 N Richards Rd, Ritzville, WA 99169"
      },
      {
        "latitude":45.7404518,
        "longitude":-121.4419479,
        "name":"112 TUNNEL RD  STE A WHITE SALMON WA 98672",
        "desc":"112 Tunnel Rd, White Salmon, WA 98672"
      },
      {
        "latitude":47.5312328,
        "longitude":-120.6239779,
        "name":"6262 CAMPBELL RD PESHASTIN WA 98847",
        "desc":"6262 Campbell Rd, Peshastin, WA 98847"
      },
      {
        "latitude":46.9968791,
        "longitude":-122.8072223,
        "name":"5740 RUDDEL RD  STE C LACEY WA 98503",
        "desc":"5740 Ruddell Rd SE, Lacey, WA 98503"
      },
      {
        "latitude":45.8838308,
        "longitude":-120.7024936,
        "name":"84 INDIAN BASIN RD GOLDENDALE WA 98620",
        "desc":"84 Indian Basin Rd, Goldendale, WA 98620"
      },
      {
        "latitude":46.6821876,
        "longitude":-123.7552665,
        "name":"1725 OCEAN AVE BLDG 2 RAYMOND WA 98577",
        "desc":"1725 Ocean Ave, Raymond, WA 98577"
      },
      {
        "latitude":48.3981819,
        "longitude":-119.4063721,
        "name":"14 MONKEY GRASS RD STE D OMAK WA 98841",
        "desc":"98841, WA"
      },
      {
        "latitude":48.013229,
        "longitude":-121.916435,
        "name":"23410 HIDDEN VALLEY RD STE A GRANITE FALLS WA 98252",
        "desc":"23410 Hidden Valley Rd, Granite Falls, WA 98252"
      },
      {
        "latitude":48.0847015,
        "longitude":-122.8158646,
        "name":"234 OTTO ST STE R3 PORT TOWNSEND WA 98368",
        "desc":"234 Otto St, Port Townsend, WA 98368"
      },
      {
        "latitude":47.6706772,
        "longitude":-117.3458099,
        "name":"4310 E TRENT AVE SPOKANE WA 99212",
        "desc":"4310 E Trent Ave, Spokane, WA 99212"
      },
      {
        "latitude":47.435423,
        "longitude":-120.3201789,
        "name":"907 N WENATCHEE AVENUE STE B WENATCHEE WA 98501",
        "desc":"907 N Wenatchee Ave, Wenatchee, WA 98801"
      },
      {
        "latitude":46.2348213,
        "longitude":-119.8523636,
        "name":"19705 N GRIFFIN RD PROSSER WA 99350",
        "desc":"N Griffin Rd, Prosser, WA 99350"
      },
      {
        "latitude":45.8957867,
        "longitude":-119.9093442,
        "name":"484 ALDERDALE RD SUITE B PROSSER WA 99350",
        "desc":"484 Alderdale Rd, Prosser, WA 99350"
      },
      {
        "latitude":45.6417732,
        "longitude":-121.9851608,
        "name":"484 EVERGREEN DR NORTH BONNEVILLE WA 98639",
        "desc":"484 Evergreen Dr, North Bonneville, WA 98639"
      },
      {
        "latitude":46.6736434,
        "longitude":-123.7690464,
        "name":"2870 OCEAN AVE BLDG 7 RAYMOND WA 98577",
        "desc":"2870 Ocean Ave, Raymond, WA 98577"
      },
      {
        "latitude":47.2533264,
        "longitude":-119.4428558,
        "name":"11056 NEPPEL RD NE MOSES LAKE WA 98837",
        "desc":"11056 Neppel Rd NE, Moses Lake, WA 98837"
      },
      {
        "latitude":47.2678604,
        "longitude":-119.4536438,
        "name":"11061 NEPPEL RD NE MOSES LAKE WA 98837",
        "desc":"Neppel Rd NE, Moses Lake, WA 98837"
      },
      {
        "latitude":48.1574555,
        "longitude":-122.1509072,
        "name":"17835 59TH AVE NE BLDG 8 STE B ARLINGTON WA 98223",
        "desc":"17835 59th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.4882102,
        "longitude":-122.2180342,
        "name":"409 RAINIER AVE N RENTON WA 98057",
        "desc":"409 Rainier Ave N, Renton, WA 98057"
      },
      {
        "latitude":48.4695299,
        "longitude":-119.5270289,
        "name":"99 GREENACRES RD LOT A RIVERSIDE WA 98849",
        "desc":"99 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":45.669052,
        "longitude":-122.640411,
        "name":"2917 NE 65TH ST UNIT E VANCOUVER WA 98663",
        "desc":"2917 NE 65th St, Vancouver, WA 98663"
      },
      {
        "latitude":47.1392716,
        "longitude":-122.4345468,
        "name":"13005 PACIFIC AVE SOUTH TACOMA WA 98444",
        "desc":"13005 Pacific Ave S, Tacoma, WA 98444"
      },
      {
        "latitude":48.7527718,
        "longitude":-119.4056247,
        "name":"38 APPLE JACK RD TONASKET WA 98855",
        "desc":"38 Applejack Rd, Tonasket, WA 98855"
      },
      {
        "latitude":47.9566533,
        "longitude":-117.3892674,
        "name":"1517 E DEER PARK MILAN RD DEER PARK WA 99006",
        "desc":"1517 E Deer Park Milan Rd, Deer Park, WA 99006"
      },
      {
        "latitude":47.158638,
        "longitude":-122.0537186,
        "name":"28120 HWY 410 E UNIT A8 BUCKLEY WA 98321",
        "desc":"28120 State Route 410 E, Buckley, WA 98321"
      },
      {
        "latitude":46.6430092,
        "longitude":-118.5600433,
        "name":"1891 W LEE ROAD WASHTUCNA WA 99371",
        "desc":"W Lee Rd, Kahlotus, WA 99335"
      },
      {
        "latitude":47.714995,
        "longitude":-117.3817136,
        "name":"1919 E FRANCIS AVE SUITE A SPOKANE WA 99208",
        "desc":"1919 E Francis Ave, Spokane, WA 99208"
      },
      {
        "latitude":47.1624565,
        "longitude":-119.311409,
        "name":"8420 ASPI BLVD STE 3 MOSES LAKE WA 98837",
        "desc":"8420 Aspi Blvd NE, Moses Lake, WA 98837"
      },
      {
        "latitude":46.9890327,
        "longitude":-120.5479279,
        "name":"400 S. MAIN STREET ELLENSBURG WA 98926",
        "desc":"400 S Main St, Ellensburg, WA 98926"
      },
      {
        "latitude":48.2470016,
        "longitude":-122.055687,
        "name":"27613 127TH AVE NE SUITE B ARLINGTON WA 98223",
        "desc":"27613 127th Ave NE, Arlington, WA 98223"
      },
      {
        "latitude":47.802574,
        "longitude":-117.21527,
        "name":"14110 E MT SPOKANE PK DR BLD B MEAD WA 99021",
        "desc":"14110 E Mt Spokane Park Dr, Mead, WA 99021"
      },
      {
        "latitude":46.664314,
        "longitude":-122.9729573,
        "name":"365 NW STATE AVE CHEHALIS WA 98532",
        "desc":"365 NW State Ave, Chehalis, WA 98532"
      },
      {
        "latitude":47.8101883,
        "longitude":-117.2672729,
        "name":"16802 N APPLEWOOD LN STE A MEAD WA 99021",
        "desc":"16802 N Applewood Ln, Mead, WA 99021"
      },
      {
        "latitude":47.5278982,
        "longitude":-120.4852889,
        "name":"5736 VALE RD CASHMERE WA 98815",
        "desc":"5736 Vale Rd, Cashmere, WA 98815"
      },
      {
        "latitude":47.4040871,
        "longitude":-120.288765,
        "name":"50 ROCK ISLAND RD EAST WENATCHEE WA 98802",
        "desc":"50 Rock Island Rd, East Wenatchee, WA 98802"
      },
      {
        "latitude":47.4224512,
        "longitude":-117.4695432,
        "name":"26425 S RUPP RD D1 CHENEY WA 99004",
        "desc":"26425 S Rupp Rd, Cheney, WA 99004"
      },
      {
        "latitude":47.6779798,
        "longitude":-117.3210669,
        "name":"6205 E MANSFIELD AVE STE 100 SPOKANE VALLEY WA 99212",
        "desc":"6205 E Mansfield Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":47.2340698,
        "longitude":-119.320137,
        "name":"6994 RD 10 NE MOSES LAKE WA 98837",
        "desc":"Road 10 NE, Moses Lake, WA 98837"
      },
      {
        "latitude":46.851032,
        "longitude":-122.859809,
        "name":"449 WICHMAN ST S STE A TENINO WA 98589",
        "desc":"449 Wichman St S, Tenino, WA 98589"
      },
      {
        "latitude":45.622268,
        "longitude":-122.505157,
        "name":"212 NE 164TH AVE STE 11 VANCOUVER WA 98684",
        "desc":"212 NE 164th Ave, Vancouver, WA 98684"
      },
      {
        "latitude":45.666107,
        "longitude":-122.636894,
        "name":"6018 NE ST JOHNS RD STE D VANCOUVER WA 98661",
        "desc":"6018 NE St Johns Rd, Vancouver, WA 98661"
      },
      {
        "latitude":48.1060061,
        "longitude":-123.3682506,
        "name":"3230 E HWY 101 PORT ANGELES WA 98362",
        "desc":"3230 E Highway 101, Port Angeles, WA 98362"
      },
      {
        "latitude":47.2611198,
        "longitude":-123.2225189,
        "name":"541 W HONEYSUCKLE LN SHELTON WA 98584",
        "desc":"541 W Honeysuckle Ln, Shelton, WA 98584"
      },
      {
        "latitude":47.669208,
        "longitude":-117.326271,
        "name":"5805 E SHARP AVE #1 SPOKANE VALLEY WA 99212",
        "desc":"5805 E Sharp Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":47.131763,
        "longitude":-119.254554,
        "name":"1450 WHEELER RD NE STE A MOSES LAKE WA 98837",
        "desc":"1450 Wheeler Rd NE, Moses Lake, WA 98837"
      },
      {
        "latitude":47.4444847,
        "longitude":-120.3282166,
        "name":"1510 N WENATCHEE AVE WENATCHEE WA 98801",
        "desc":"1510 N Wenatchee Ave, Wenatchee, WA 98801"
      },
      {
        "latitude":47.769927,
        "longitude":-122.313171,
        "name":"19258 15TH AVE NE STE B LAKE FOREST PARK WA 98155",
        "desc":"19258 15th Ave NE, Lake Forest Park, WA 98155"
      },
      {
        "latitude":47.8765984,
        "longitude":-122.1563187,
        "name":"5626 134TH PL SE STE B EVERETT WA 98208",
        "desc":"5626 134th Pl SE, Everett, WA 98208"
      },
      {
        "latitude":47.8330994,
        "longitude":-122.1272964,
        "name":"18026 STATE ROUTE 9 SE STE 2 SNOHOMISH WA 98296",
        "desc":"18026 State Route 9 SE, Snohomish, WA 98296"
      },
      {
        "latitude":48.4772911,
        "longitude":-120.2103119,
        "name":"60 WOLF CREEK RD STE A WINTHROP WA 98862",
        "desc":"60 Wolf Creek Rd, Winthrop, WA 98862"
      },
      {
        "latitude":48.8352013,
        "longitude":-122.4870453,
        "name":"5309 GUIDE MERIDIAN RD SUITE A BELLINGHAM WA 98226",
        "desc":"5309 Guide Meridian Rd, Bellingham, WA 98226"
      },
      {
        "latitude":47.8349571,
        "longitude":-122.0164032,
        "name":"17829 TESTER RD SNOHOMISH WA 98290",
        "desc":"17829 Tester Rd, Snohomish, WA 98290"
      },
      {
        "latitude":47.6265532,
        "longitude":-122.1671406,
        "name":"1817 130TH AVE NE SUITE B BELLEVUE WA 98005",
        "desc":"1817 130th Ave NE, Bellevue, WA 98005"
      },
      {
        "latitude":48.1489372,
        "longitude":-117.1235962,
        "name":"41 RUMSEY RD NEWPORT WA 99156",
        "desc":"41 Rumsey Rd, Newport, WA 99156"
      },
      {
        "latitude":48.0350914,
        "longitude":-117.8024216,
        "name":"4326 LYONS HILL RD STE A SPRINGDALE WA 99173",
        "desc":"4326 Lyons Hill Rd, Springdale, WA 99173"
      },
      {
        "latitude":47.5711951,
        "longitude":-122.6533641,
        "name":"1107 N CALLOW AVE STE C BREMERTON WA 98312",
        "desc":"1107 N Callow Ave, Bremerton, WA 98312"
      },
      {
        "latitude":48.0422478,
        "longitude":-119.6926498,
        "name":"133 STATE AVE BREWSTER WA 98812",
        "desc":"133 State Ave, Brewster, WA 98812"
      },
      {
        "latitude":47.449329,
        "longitude":-122.827812,
        "name":"23632 NE STATE ROUTE 3 BELFAIR WA 98528",
        "desc":"23632 NE State Route 3, Belfair, WA 98528"
      },
      {
        "latitude":46.5464325,
        "longitude":-120.4751892,
        "name":"4101 MAIN STREET UNION GAP WA 98903",
        "desc":"4101 Main St, Union Gap, WA 98903"
      },
      {
        "latitude":47.28012,
        "longitude":-122.228378,
        "name":"3108 A ST SE STE F AUBURN WA 98002",
        "desc":"3108 A St SE, Auburn, WA 98002"
      },
      {
        "latitude":46.973724,
        "longitude":-123.89891,
        "name":"1302 5TH STREET EXTENTION HOQUIAM WA 98550",
        "desc":"1302 5th St, Hoquiam, WA 98550"
      },
      {
        "latitude":47.1138255,
        "longitude":-119.1934821,
        "name":"1824 ROAD N NE UNIT 2 MOSES LAKE WA 98837",
        "desc":"1824 Road N NE, Moses Lake, WA 98837"
      },
      {
        "latitude":47.6443369,
        "longitude":-117.5607524,
        "name":"1305 S HAYFORD RD SPOKANE WA 99224",
        "desc":"1305 S Hayford Rd, Spokane, WA 99001"
      },
      {
        "latitude":46.5932,
        "longitude":-120.596832,
        "name":"6601 TIETON DR     STE B YAKIMA WA 98908",
        "desc":"6601 Tieton Dr, Yakima, WA 98908"
      },
      {
        "latitude":47.5846939,
        "longitude":-122.3336945,
        "name":"1944 1ST AVE S #100 SEATTLE WA 98134",
        "desc":"1944 1st Ave S, Seattle, WA 98134"
      },
      {
        "latitude":47.7585118,
        "longitude":-122.2575103,
        "name":"6323 NE BOTHEL WAY KENMORE WA 98028",
        "desc":"6323 NE Bothell Way, Kenmore, WA 98028"
      },
      {
        "latitude":47.8919983,
        "longitude":-120.2234955,
        "name":"9285 S LAKESHORE RD STE A CHELAN WA 98816",
        "desc":"9285 S Lakeshore Rd, Chelan, WA 98816"
      },
      {
        "latitude":47.4224512,
        "longitude":-117.4695432,
        "name":"26425 RUPP RD J1 CHENEY WA 99004",
        "desc":"26425 S Rupp Rd, Cheney, WA 99004"
      },
      {
        "latitude":46.9469927,
        "longitude":-117.8218802,
        "name":"7205 ENDICOTT RD STE A ENDICOTT WA 99125",
        "desc":"7205 Endicott Rd, Endicott, WA 99125"
      },
      {
        "latitude":48.4695299,
        "longitude":-119.5270289,
        "name":"99 GREENACRES RD LOT B RIVERSIDE WA 98849",
        "desc":"99 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":48.4888954,
        "longitude":-119.5296249,
        "name":"247 GREENACRES RD RIVERSIDE WA 98849",
        "desc":"247 Greenacres Rd, Riverside, WA 98849"
      },
      {
        "latitude":47.2024956,
        "longitude":-123.0912781,
        "name":"1428 OLYMPIC HWY S SHELTON WA 98584",
        "desc":"1428 Olympic Hwy S, Shelton, WA 98584"
      },
      {
        "latitude":48.6962357,
        "longitude":-122.8854675,
        "name":"837 A CRESCENT BEACH RD EASTSOUND WA 98245",
        "desc":"837 Crescent Beach Dr, Eastsound, WA 98245"
      },
      {
        "latitude":47.3714939,
        "longitude":-120.2003659,
        "name":"3895 MALAGA AVE MALAGA WA 98828",
        "desc":"3895 Malaga Ave, Malaga, WA 98828"
      },
      {
        "latitude":48.3022919,
        "longitude":-120.0289536,
        "name":"166 BENSON CREEK DR TWISP WA 98856",
        "desc":"166 Benson Creek Dr, Twisp, WA 98856"
      },
      {
        "latitude":47.669208,
        "longitude":-117.326271,
        "name":"5805 E SHARP AVE UNIT C-8 SPOKANE VALLEY WA 99212",
        "desc":"5805 E Sharp Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":48.7968526,
        "longitude":-119.3730332,
        "name":"179 AIR PORT ROAD LOT 1 TONASKET WA 98855",
        "desc":"179 Airport Rd, Oroville, WA 98844"
      },
      {
        "latitude":47.2314949,
        "longitude":-122.4776535,
        "name":"3101 S LAWRENCE ST TACOMA WA 98409",
        "desc":"3101 S Lawrence St, Tacoma, WA 98409"
      },
      {
        "latitude":47.6354141,
        "longitude":-117.7199326,
        "name":"2203 S RIETH LN SUITE 1 MEDICAL LAKE WA 99022",
        "desc":"2203 S Rieth Ln, Medical Lake, WA 99022"
      },
      {
        "latitude":48.7837753,
        "longitude":-122.4436188,
        "name":"3863 HANNEGAN RD BELLINGHAM WA 98226",
        "desc":"3863 Hannegan Rd, Bellingham, WA 98226"
      },
      {
        "latitude":48.8362656,
        "longitude":-122.4876633,
        "name":"5373 GUIDE MERIDIAN RD #C1-2 BELLINGHAM WA 98226",
        "desc":"5373 Guide Meridian Rd, Bellingham, WA 98226"
      },
      {
        "latitude":46.379094,
        "longitude":-120.2833635,
        "name":"303 OLD MCCOY RD TOPPENISH WA 98948",
        "desc":"303 Old McCoy Rd, Toppenish, WA 98948"
      },
      {
        "latitude":47.232318,
        "longitude":-122.472145,
        "name":"3113 S PINE ST UNIT C1 TACOMA WA 98409",
        "desc":"3113 S Pine St, Tacoma, WA 98409"
      },
      {
        "latitude":48.7825737,
        "longitude":-122.4497681,
        "name":"2005 DIVISION ST BELLINGHAM WA 98226",
        "desc":"2005 Division St, Bellingham, WA 98226"
      },
      {
        "latitude":47.9496117,
        "longitude":-117.3935471,
        "name":"32111 N PERRY RD DEER PARK WA 99006",
        "desc":"32111 N Perry Rd, Deer Park, WA 99006"
      },
      {
        "latitude":47.7073784,
        "longitude":-117.3523331,
        "name":"3836 E ROWAN AVE STE B SPOKANE WA 99208",
        "desc":"3836 E Rowan Ave, Spokane, WA 99217"
      },
      {
        "latitude":47.6951752,
        "longitude":-117.2105865,
        "name":"14421 E TRENT AVE SPOKANE VALLEY WA 99216",
        "desc":"14421 E Trent Ave, Spokane Valley, WA 99216"
      },
      {
        "latitude":46.1590691,
        "longitude":-119.0642548,
        "name":"33907 S GERARDS RD STE A KENNEWICK WA 99337",
        "desc":"33907 S Gerards Rd, Kennewick, WA 99337"
      },
      {
        "latitude":47.560141,
        "longitude":-117.518688,
        "name":"10211 S SPOTTED RD CHENEY WA 99004",
        "desc":"10211 S Spotted Rd, Cheney, WA 99004"
      },
      {
        "latitude":48.1464048,
        "longitude":-123.1418359,
        "name":"1430 MARINE DR SEQUIM WA 98382",
        "desc":"1430 Marine Dr, Sequim, WA 98382"
      },
      {
        "latitude":48.738243,
        "longitude":-122.469299,
        "name":"218 N SAMISH WAY STE #103 BELLINGHAM WA 98225",
        "desc":"218 N Samish Way, Bellingham, WA 98225"
      },
      {
        "latitude":46.2822762,
        "longitude":-119.5191956,
        "name":"47504 N 108 PR NW BENTON CITY WA 99320",
        "desc":"47504 N 108 Pr NW, Benton City, WA 99320"
      },
      {
        "latitude":48.6451073,
        "longitude":-119.549422,
        "name":"102 GARRETT LANE TONASKET WA 98855",
        "desc":"102 Garrett Ln, Tonasket, WA 98855"
      },
      {
        "latitude":47.7064629,
        "longitude":-117.6375427,
        "name":"5116 N GORDON RD STE A SPOKANE WA 99224",
        "desc":"5116 N Gordon Rd, Spokane, WA 99224"
      },
      {
        "latitude":46.787567,
        "longitude":-123.080513,
        "name":"9444 LUNDEEN RD SW SUITE B ROCHESTER WA 98579",
        "desc":"9444 Lundeen Rd SW, Rochester, WA 98579"
      },
      {
        "latitude":47.8851662,
        "longitude":-122.0730515,
        "name":"12125 TREOSTI RD STE A SNOHOMISH WA 98290",
        "desc":"12125 Treosti Rd, Snohomish, WA 98290"
      },
      {
        "latitude":46.6821876,
        "longitude":-123.7552665,
        "name":"1725 OCEAN AVE BLDG 4 RAYMOND WA 98577",
        "desc":"1725 Ocean Ave, Raymond, WA 98577"
      },
      {
        "latitude":47.1380768,
        "longitude":-124.095253,
        "name":"2002 OCEAN BEACH RD SUITE B COPALIS CROSSING WA 98536",
        "desc":"2002 Ocean Beach Rd, Copalis Crossing, WA 98536"
      },
      {
        "latitude":45.669052,
        "longitude":-122.640411,
        "name":"2917 NE 65TH ST STE B VANCOUVER WA 98663",
        "desc":"2917 NE 65th St, Vancouver, WA 98663"
      },
      {
        "latitude":47.613012,
        "longitude":-122.3019256,
        "name":"2310 EAST UNION ST SEATTLE WA 98122",
        "desc":"2310 E Union St, Seattle, WA 98122"
      },
      {
        "latitude":48.539619,
        "longitude":-121.885398,
        "name":"39549 BAKER LK RD  STE A CONCRETE WA 98237",
        "desc":"39549 Baker Lake Rd, Concrete, WA 98237"
      },
      {
        "latitude":46.115196,
        "longitude":-122.946601,
        "name":"1445 INDUSTRIAL WAY BLDG 19-A LONGVIEW WA 98632",
        "desc":"1445 Industrial Way, Longview, WA 98632"
      },
      {
        "latitude":46.3302612,
        "longitude":-124.0549622,
        "name":"2546 HWY 101 ILWACO WA 98614",
        "desc":"Highway 101, Seaview, WA 98644"
      },
      {
        "latitude":47.390129,
        "longitude":-122.510086,
        "name":"13610 SW 240TH ST STE A VASHON WA 98070",
        "desc":"13610 SW 240th St, Vashon, WA 98070"
      },
      {
        "latitude":47.2023659,
        "longitude":-119.2447281,
        "name":"7797 ROAD K.5 NE STE B MOSES LAKE WA 98837",
        "desc":"7797 Road K.5 NE, Moses Lake, WA 98837"
      },
      {
        "latitude":47.8783951,
        "longitude":-122.2412796,
        "name":"532 132ND ST SW EVERETT WA 98204",
        "desc":"532 132nd St SW, Everett, WA 98204"
      },
      {
        "latitude":48.7575417,
        "longitude":-122.4624481,
        "name":"924 KENTUCKY ST BELLINGHAM WA 98225",
        "desc":"924 Kentucky St, Bellingham, WA 98225"
      },
      {
        "latitude":48.3022919,
        "longitude":-120.0289536,
        "name":"166 BENSON CREEK DRIVE STE B TWISP WA 98856",
        "desc":"166 Benson Creek Dr, Twisp, WA 98856"
      },
      {
        "latitude":47.3890152,
        "longitude":-120.2892532,
        "name":"353 MALAGA ALCOA HWY STE 6 WENATCHEE WA 98801",
        "desc":"353 Malaga Alcoa Hwy, Wenatchee, WA 98801"
      },
      {
        "latitude":47.678401,
        "longitude":-117.323112,
        "name":"6021 E MANSFIELD AVE SUITE 100 SPOKANE VALLEY WA 99212",
        "desc":"6021 E Mansfield Ave, Spokane Valley, WA 99212"
      },
      {
        "latitude":48.6969986,
        "longitude":-117.8957596,
        "name":"1191 PETERSON SWAMP RD STE A COLVILLE WA 99114",
        "desc":"1191 Peterson Swamp Rd, Colville, WA 99114"
      },
      {
        "latitude":47.2101704,
        "longitude":-122.05601,
        "name":"21418 SE 436TH ST STE A ENUMCLAW WA 98022",
        "desc":"21418 SE 436th St, Enumclaw, WA 98022"
      },
      {
        "latitude":48.7570496,
        "longitude":-122.46595,
        "name":"2018 IRON ST STE B BELLINGHAM WA 98226",
        "desc":"2018 Iron St, Bellingham, WA 98225"
      },
      {
        "latitude":48.9157268,
        "longitude":-118.6315224,
        "name":"190 GRAVES RD #A CURLEW WA 99118",
        "desc":"190 Graves Rd, Curlew, WA 99118"
      },
      {
        "latitude":48.8438644,
        "longitude":-122.2878571,
        "name":"3708 MT BAKER HWY EVERSON WA 98247",
        "desc":"3708 Mt Baker Hwy, Everson, WA 98247"
      },
      {
        "latitude":48.0482597,
        "longitude":-117.8180389,
        "name":"4341 SPRINGDALE HUNTERS RD #B SPRINGDALE WA 99173",
        "desc":"4341 Springdale-Hunters Rd, Springdale, WA 99173"
      },
      {
        "latitude":47.068973,
        "longitude":-122.757644,
        "name":"2604 WILLAMETTE DR NE STE D LACEY WA 98516",
        "desc":"2604 Willamette Dr NE, Lacey, WA 98516"
      },
      {
        "latitude":48.2415276,
        "longitude":-119.7392426,
        "name":"1104 OLD HWY 97  STE A BREWSTER WA 98812",
        "desc":"1104 Old Highway 97, Brewster, WA 98812"
      },
      {
        "latitude":46.0618235,
        "longitude":-118.3514334,
        "name":"927 W MAIN ST WALLA WALLA WA 99362",
        "desc":"927 W Main St, Walla Walla, WA 99362"
      },
      {
        "latitude":46.8401235,
        "longitude":-118.3352134,
        "name":"1891 E LEE RD SUITE C WASHTUCNA WA 99371",
        "desc":"1891 E Lee Rd, Washtucna, WA 99371"
      },
      {
        "latitude":46.0613098,
        "longitude":-118.3463593,
        "name":"207 S 9TH AVE WALLA WALLA WA 99362",
        "desc":"207 S 9th Ave, Walla Walla, WA 99362"
      },
      {
        "latitude":46.7697983,
        "longitude":-123.0681839,
        "name":"21847 LEE RD SW CENTRALIA WA 98531",
        "desc":"21847 Lee St SW, Centralia, WA 98531"
      },
      {
        "latitude":48.0329056,
        "longitude":-122.098732,
        "name":"4030 99TH AVE NE EVERETT WA 98205",
        "desc":"4030 99th Ave NE, Lake Stevens, WA 98258"
      },
      {
        "latitude":45.8830719,
        "longitude":-120.8493729,
        "name":"400 WHITE OAK RD SUITE A GOLDENDALE WA 98620",
        "desc":"400 White Oak Rd, Goldendale, WA 98620"
      },
      {
        "latitude":47.5052261,
        "longitude":-122.7472076,
        "name":"7390 STATE HWY 3 SW STE E BREMERTON WA 98312",
        "desc":"7390 State Highway 3 SW, Bremerton, WA 98312"
      },
      {
        "latitude":47.022678,
        "longitude":-122.939956,
        "name":"2855 R W JOHNSON RD SW STE A TUMWATER WA 98512",
        "desc":"2855 R W Johnson Rd SW, Tumwater, WA 98512"
      },
      {
        "latitude":48.9664917,
        "longitude":-122.4866257,
        "name":"8971 GUIDE MERIDIAN RD LYNDEN WA 98264",
        "desc":"8971 Guide Meridian Rd, Lynden, WA 98264"
      },
      {
        "latitude":47.90596,
        "longitude":-117.499488,
        "name":"27315 N MONROE RD STE A DEER PARK WA 99006",
        "desc":"27315 N Monroe Rd, Deer Park, WA 99006"
      },
      {
        "latitude":47.6801872,
        "longitude":-122.5422134,
        "name":"8040 NE DAY RD BLDG 3 STE 2 BAINBRIDGE ISLAND WA 98110",
        "desc":"8040 NE Day Rd W, Bainbridge Island, WA 98110"
      },
      {
        "latitude":48.8362656,
        "longitude":-122.4876633,
        "name":"5373 GUIDE MERIDIAN  STE D-11 BELLINGHAM WA 98226",
        "desc":"5373 Guide Meridian, Bellingham, WA 98226"
      },
      {
        "latitude":46.7195917,
        "longitude":-117.1639705,
        "name":"1340 SE BISHOP BLVD STE A PULLMAN WA 99163",
        "desc":"1340 SE Bishop Blvd, Pullman, WA 99163"
      },
      {
        "latitude":47.7283229,
        "longitude":-117.3646065,
        "name":"7810 N MARKET ST STE A SPOKANE WA 99217",
        "desc":"7810 N Market St, Spokane, WA 99217"
      },
      {
        "latitude":45.734016,
        "longitude":-122.552543,
        "name":"11700 NE 154TH ST BRUSH PRAIRIE WA 98606",
        "desc":"11700 NE 154th St, Brush Prairie, WA 98606"
      },
      {
        "latitude":48.7581322,
        "longitude":-122.4635522,
        "name":"2123 KING ST BELLINGHAM WA 98225",
        "desc":"2123 King St, Bellingham, WA 98225"
      },
      {
        "latitude":46.1403694,
        "longitude":-119.0219574,
        "name":"46605 S MORTON RD KENNEWICK WA 99337",
        "desc":"46605 S Morton Rd, Kennewick, WA 99337"
      },
      {
        "latitude":47.6993828,
        "longitude":-117.6837921,
        "name":"19701 W BOWIE RD #A MEDICAL LAKE WA 99022",
        "desc":"19701 W Bowie Rd, Medical Lake, WA 99022"
      },
      {
        "latitude":47.50634,
        "longitude":-122.3327789,
        "name":"10825 MYERS WAY S SEATTLE WA 98168",
        "desc":"10825 Myers Way S, Seattle, WA 98168"
      },
      {
        "latitude":46.1625214,
        "longitude":-122.9988327,
        "name":"4503 OCEAN BEACH HWY STE 103 LONGVIEW WA 98632",
        "desc":"4503 Ocean Beach Hwy, Longview, WA 98632"
      },
      {
        "latitude":47.998989,
        "longitude":-122.456542,
        "name":"5826 S KRAMER RD STE A AND D LANGLEY WA 98260",
        "desc":"5826 Kramer Rd, Langley, WA 98260"
      },
      {
        "latitude":47.8545852,
        "longitude":-122.2909997,
        "name":"15928 HWY 99 LYNNWOOD WA 98087",
        "desc":"15928 Highway 99, Lynnwood, WA 98087"
      },
      {
        "latitude":47.6308098,
        "longitude":-117.5900803,
        "name":"13026 W MCFARLANE RD AIRWAY HEIGHTS WA 99001",
        "desc":"13026 W McFarlane Rd, Airway Heights, WA 99001"
      },
      {
        "latitude":47.7042749,
        "longitude":-122.3015931,
        "name":"10334 LAKE CITY WAY NE SEATTLE WA 98115",
        "desc":"10334 Lake City Way NE, Seattle, WA 98125"
      },
      {
        "latitude":47.2345009,
        "longitude":-122.4098587,
        "name":"3202 E PORTLAND AVE TACOMA WA 98404",
        "desc":"3202 E Portland Ave, Tacoma, WA 98404"
      },
      {
        "latitude":45.6268768,
        "longitude":-121.1484146,
        "name":"100 DOW RD DALLESPORT WA 98617",
        "desc":"100 Dow Rd, Dallesport, WA 98617"
      },
      {
        "latitude":47.4323959,
        "longitude":-117.0483856,
        "name":"26620 E HOXIE RD STE A ROCKFORD WA 99030",
        "desc":"26620 E Hoxie Rd, Rockford, WA 99030"
      },
      {
        "latitude":47.572982,
        "longitude":-122.329627,
        "name":"3423 4TH AVE S SEATTLE WA 98134",
        "desc":"3423 4th Ave S, Seattle, WA 98134"
      },
      {
        "latitude":47.6715393,
        "longitude":-117.3526459,
        "name":"3911 E TRENT SPOKANE WA 99202",
        "desc":"3911 E Trent Ave, Spokane, WA 99202"
      },
      {
        "latitude":48.973201,
        "longitude":-122.723312,
        "name":"2750 E PEACE PORTAL DR STE E BLAINE WA 98230",
        "desc":"2750 Peace Portal Dr, Blaine, WA 98230"
      },
      {
        "latitude":46.9763832,
        "longitude":-123.882103,
        "name":"905 SIMPSON AVENUE HOQUIAM WA 98550",
        "desc":"905 Simpson Ave, Hoquiam, WA 98550"
      },
      {
        "latitude":47.5329323,
        "longitude":-120.5002518,
        "name":"175 ZION LANE CASHMERE WA 98815",
        "desc":"98815, WA"
      },
      {
        "latitude":47.6730652,
        "longitude":-117.0508728,
        "name":"26327 E MISSION AVE LIBERTY LAKE WA 99019",
        "desc":"26327 E Mission Ave, Liberty Lake, WA 99019"
      },
      {
        "latitude":47.6730652,
        "longitude":-117.0508728,
        "name":"26327 E MISSION AVE STE 2 LIBERTY LAKE WA 99019",
        "desc":"26327 E Mission Ave, Liberty Lake, WA 99019"
      },
      {
        "latitude":47.6500453,
        "longitude":-122.3426329,
        "name":"3540 STONE WAY N SEATTLE WA 98103",
        "desc":"3540 Stone Way N, Seattle, WA 98103"
      },
      {
        "latitude":48.851387,
        "longitude":-122.4941711,
        "name":"250 W AXTON RD BELLINGHAM WA 98226",
        "desc":"250 W Axton Rd, Bellingham, WA 98226"
      },
      {
        "latitude":48.3416214,
        "longitude":-122.3412781,
        "name":"18729 FIR ISLAND RD STE C MOUNT VERNON WA 98273",
        "desc":"18729 Fir Island Rd, Mount Vernon, WA 98273"
      },
      {
        "latitude":48.7570496,
        "longitude":-122.46595,
        "name":"2018 IRON ST STE A BELLINGHAM WA 98226",
        "desc":"2018 Iron St, Bellingham, WA 98225"
      },
      {
        "latitude":48.8465691,
        "longitude":-122.4866333,
        "name":"5655 GUIDE MERIDIAN STE A BELLINGHAM WA 98226",
        "desc":"5655 Guide Meridian, Bellingham, WA 98226"
      },
      {
        "latitude":47.584404,
        "longitude":-122.1632843,
        "name":"13300 SE 30TH ST BELLEVUE WA 98005",
        "desc":"13300 SE 30th St, Bellevue, WA 98005"
      },
      {
        "latitude":47.0484238,
        "longitude":-122.7955704,
        "name":"422 CARPENTER RD STE 105 LACEY WA 98503",
        "desc":"422 Carpenter Rd SE, Lacey, WA 98503"
      },
      {
        "latitude":46.1456375,
        "longitude":-122.9291229,
        "name":"2028 10TH AVE LONGVIEW WA 98632",
        "desc":"2028 10th Ave, Longview, WA 98632"
      },
      {
        "latitude":48.016716,
        "longitude":-117.3435974,
        "name":"4710 E ELK TO HIGHWAY RD STE A ELK WA 99009",
        "desc":"4710 E Elk to Highway Rd, Elk, WA 99009"
      },
      {
        "latitude":47.756267,
        "longitude":-122.313957,
        "name":"17517 15TH AVE NE STE 202 SHORELINE WA 98155",
        "desc":"17517 15th Ave NE, Shoreline, WA 98155"
      },
      {
        "latitude":46.9464569,
        "longitude":-122.9415359,
        "name":"9730 LATHROP INDUSTRIAL DR SW TUMWATER WA 98512",
        "desc":"9730 Lathrop Industrial Dr SW, Olympia, WA 98512"
      }
    ]
    var vc_bykey = {}
    vc.map( function (vlocationinfo) {
        vc_bykey[vlocationinfo.name] = {latitude: vlocationinfo.latitude, longitude: vlocationinfo.longitude }
    })

    function getcoords (fulladdress) {
        // console.log(fulladdress);
        var coords = vc_bykey[fulladdress]
        if (typeof coords != 'undefined') return coords
        // return vc_bykey[fulladdress]
        // vc.map( function (vendorcoords) {
        //     console.log(vendorcoords.name + " " + fulladdress);
        //     if (fulladdress === vendorcoords.name) {
        //         return { lat: vendorcoords.lattitude, lon: vendorcoords.longitude }
        //     }
        // })
        // console.log('Error: Address not found! '  + fulladdress);
    }
    return {
        // getvendors: getvendors,
        getcoords: getcoords,
    }
}

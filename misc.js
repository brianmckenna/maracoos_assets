  /**
   * Decimal to DMS conversion
   */
  convertDMS = function(coordinate, type, spaceOnly) {
    var coords = new Array();

    abscoordinate = Math.abs(coordinate)
    coordinatedegrees = Math.floor(abscoordinate);

    coordinateminutes = (abscoordinate - coordinatedegrees)/(1/60);
    tempcoordinateminutes = coordinateminutes;
    coordinateminutes = Math.floor(coordinateminutes);
    coordinateseconds = (tempcoordinateminutes - coordinateminutes)/(1/60);
    coordinateseconds =  Math.round(coordinateseconds*10);
    coordinateseconds /= 10;

    if( coordinatedegrees < 10 )
      coordinatedegrees = "0" + coordinatedegrees;

    if( coordinateminutes < 10 )
      coordinateminutes = "0" + coordinateminutes;

    if( coordinateseconds < 10 )
      coordinateseconds = "0" + coordinateseconds;

    if (spaceOnly) {
      var factor = 1;
      if (coordinate < 0) {
        factor = -1;
      }
      return factor * coordinatedegrees + ' ' + coordinateminutes + ' ' + coordinateseconds + ' ';
    }
    else {
      return coordinatedegrees + '&deg; ' + coordinateminutes + "' " + coordinateseconds + '" ' + this.getHemi(coordinate, type);
    }
  }

  /**
   * Return the hemisphere abbreviation for this coordinate.
   */
  getHemi = function(coordinate, type) {
    var coordinatehemi = "";
    if (type == 'LAT') {
      if (coordinate >= 0) {
        coordinatehemi = "N";
      }
      else {
        coordinatehemi = "S";
      }
    }
    else if (type == 'LON') {
      if (coordinate >= 0) {
        coordinatehemi = "E";
      } else {
        coordinatehemi = "W";
      }
    }

    return coordinatehemi;
  }

// this function stuck here for layers that aren't WMS-ready (yet)
function addVector(l) {
  var a = {
    'ROMS ESPRESSO' : [
      [
         '-70.6147,41.6548'
        ,'-70.741,41.5658'
        ,'-70.695,41.529'
        ,'-70.5687,41.618'
        ,'-70.5228,41.5813'
        ,'-70.3334,41.7147'
        ,'-70.2415,41.6412'
        ,'-70.1152,41.73'
        ,'-70.0693,41.6933'
        ,'-70.1325,41.6489'
        ,'-70.0406,41.5754'
        ,'-69.9775,41.6198'
        ,'-67.7701,39.8491'
        ,'-68.7134,39.1629'
        ,'-69.6578,38.4681'
        ,'-70.7291,37.6709'
        ,'-71.738,36.9117'
        ,'-72.8104,36.0958'
        ,'-73.8198,35.3197'
        ,'-74.8291,34.5359'
        ,'-75.8383,33.7446'
        ,'-76.8569,34.6281'
        ,'-76.6676,34.7755'
        ,'-76.575,34.6956'
        ,'-76.1963,34.9898'
        ,'-76.2889,35.0694'
        ,'-76.352,35.0204'
        ,'-76.4446,35.0999'
        ,'-76.5708,35.0021'
        ,'-76.6171,35.0419'
        ,'-76.7433,34.944'
        ,'-76.7896,34.9838'
        ,'-76.8527,34.9348'
        ,'-76.9916,35.0542'
        ,'-76.9285,35.1031'
        ,'-76.8359,35.0236'
        ,'-76.7728,35.0725'
        ,'-76.7265,35.0327'
        ,'-76.5371,35.1794'
        ,'-76.5834,35.219'
        ,'-76.4572,35.3166'
        ,'-76.5497,35.3958'
        ,'-76.6129,35.3471'
        ,'-76.6591,35.3867'
        ,'-76.5329,35.4841'
        ,'-76.394,35.3653'
        ,'-76.3309,35.414'
        ,'-76.2846,35.3745'
        ,'-76.2215,35.4232'
        ,'-76.1752,35.3836'
        ,'-75.8596,35.6267'
        ,'-75.8134,35.5872'
        ,'-75.6871,35.6843'
        ,'-75.7334,35.7238'
        ,'-75.6703,35.7723'
        ,'-75.7628,35.851'
        ,'-75.6997,35.8994'
        ,'-75.8847,36.0567'
        ,'-75.9479,36.0084'
        ,'-75.9016,35.9691'
        ,'-75.9647,35.9207'
        ,'-76.1498,36.0779'
        ,'-76.276,35.9813'
        ,'-76.3223,36.0206'
        ,'-76.3854,35.9722'
        ,'-76.4317,36.0116'
        ,'-76.4949,35.9632'
        ,'-76.5411,36.0025'
        ,'-76.6043,35.9542'
        ,'-76.6968,36.0328'
        ,'-76.6337,36.0811'
        ,'-76.5874,36.0418'
        ,'-76.5242,36.0901'
        ,'-76.478,36.0509'
        ,'-76.3517,36.1474'
        ,'-76.3054,36.1082'
        ,'-76.2423,36.1564'
        ,'-76.196,36.1172'
        ,'-76.0066,36.2618'
        ,'-75.9604,36.2226'
        ,'-75.8972,36.2708'
        ,'-75.8047,36.1924'
        ,'-75.8678,36.1442'
        ,'-75.8216,36.1049'
        ,'-75.7585,36.1532'
        ,'-75.7122,36.114'
        ,'-75.666,36.0747'
        ,'-75.7291,36.0264'
        ,'-75.544,35.8691'
        ,'-75.4809,35.9175'
        ,'-75.6197,36.0354'
        ,'-75.5566,36.0837'
        ,'-75.7878,36.2798'
        ,'-75.7247,36.3279'
        ,'-75.8172,36.4062'
        ,'-75.7541,36.4542'
        ,'-75.8466,36.5324'
        ,'-75.7834,36.5804'
        ,'-75.9221,36.6974'
        ,'-75.859,36.7453'
        ,'-75.9977,36.8621'
        ,'-75.9346,36.9098'
        ,'-76.027,36.9876'
        ,'-76.0902,36.9398'
        ,'-76.1364,36.9787'
        ,'-76.1996,36.9309'
        ,'-76.2921,37.0086'
        ,'-76.4184,36.9132'
        ,'-76.6958,37.1461'
        ,'-76.6326,37.1937'
        ,'-76.6789,37.2325'
        ,'-76.6157,37.2801'
        ,'-76.5232,37.2026'
        ,'-76.5864,37.155'
        ,'-76.4015,36.9998'
        ,'-76.212,37.1428'
        ,'-76.4431,37.3364'
        ,'-76.3799,37.384'
        ,'-76.4261,37.4226'
        ,'-76.363,37.4701'
        ,'-76.2705,37.3928'
        ,'-76.2073,37.4402'
        ,'-76.4847,37.6717'
        ,'-76.5479,37.6244'
        ,'-76.6865,37.74'
        ,'-76.6233,37.7872'
        ,'-76.5309,37.7102'
        ,'-76.4677,37.7575'
        ,'-76.3753,37.6805'
        ,'-76.3121,37.7278'
        ,'-76.3583,37.7663'
        ,'-76.2951,37.8135'
        ,'-76.3413,37.852'
        ,'-76.2149,37.9463'
        ,'-76.3073,38.0231'
        ,'-76.3705,37.976'
        ,'-76.6478,38.2059'
        ,'-76.711,38.1589'
        ,'-76.8034,38.2355'
        ,'-76.8666,38.1885'
        ,'-77.0515,38.3414'
        ,'-76.9882,38.3883'
        ,'-76.8958,38.3119'
        ,'-76.8326,38.3589'
        ,'-76.7402,38.2824'
        ,'-76.677,38.3294'
        ,'-76.3997,38.0998'
        ,'-76.2733,38.1938'
        ,'-76.4581,38.3468'
        ,'-76.3949,38.3937'
        ,'-76.4873,38.47'
        ,'-76.4241,38.5168'
        ,'-76.5627,38.6311'
        ,'-76.4994,38.6778'
        ,'-76.5456,38.7158'
        ,'-76.4824,38.7625'
        ,'-76.5286,38.8005'
        ,'-76.4654,38.8471'
        ,'-76.5577,38.923'
        ,'-76.368,39.0625'
        ,'-76.4604,39.1382'
        ,'-76.3971,39.1846'
        ,'-76.4433,39.2224'
        ,'-75.9373,39.5923'
        ,'-75.8912,39.5547'
        ,'-76.2074,39.3236'
        ,'-76.1612,39.2859'
        ,'-76.2877,39.1932'
        ,'-76.1492,39.0797'
        ,'-76.2757,38.9868'
        ,'-76.1833,38.9109'
        ,'-76.3098,38.8178'
        ,'-76.2636,38.7798'
        ,'-76.2004,38.8264'
        ,'-76.1542,38.7884'
        ,'-76.2174,38.7418'
        ,'-76.1712,38.7038'
        ,'-76.2977,38.6104'
        ,'-76.2515,38.5723'
        ,'-76.3147,38.5255'
        ,'-76.0837,38.3347'
        ,'-76.0205,38.3815'
        ,'-75.9743,38.3433'
        ,'-75.9111,38.3902'
        ,'-75.8188,38.3138'
        ,'-75.882,38.2669'
        ,'-75.7896,38.1904'
        ,'-75.8528,38.1434'
        ,'-75.8066,38.105'
        ,'-75.8698,38.058'
        ,'-75.685,37.9045'
        ,'-75.8113,37.8101'
        ,'-75.7651,37.7716'
        ,'-75.8915,37.6771'
        ,'-75.8452,37.6386'
        ,'-75.9716,37.5439'
        ,'-75.9254,37.5053'
        ,'-75.9886,37.4579'
        ,'-75.9423,37.4192'
        ,'-76.0055,37.3718'
        ,'-75.9593,37.3331'
        ,'-76.0224,37.2856'
        ,'-75.8838,37.1694'
        ,'-75.8206,37.217'
        ,'-75.8668,37.2557'
        ,'-75.8037,37.3032'
        ,'-75.8499,37.3419'
        ,'-75.7867,37.3894'
        ,'-75.8329,37.428'
        ,'-75.5803,37.6176'
        ,'-75.6265,37.6561'
        ,'-75.5002,37.7507'
        ,'-75.5464,37.7891'
        ,'-75.2305,38.0248'
        ,'-75.2767,38.0632'
        ,'-75.1504,38.1572'
        ,'-75.1965,38.1955'
        ,'-75.0702,38.2893'
        ,'-75.1164,38.3276'
        ,'-75.0532,38.3744'
        ,'-75.0994,38.4126'
        ,'-75.0362,38.4594'
        ,'-75.0824,38.4975'
        ,'-75.0192,38.5443'
        ,'-75.1115,38.6205'
        ,'-75.0483,38.6671'
        ,'-75.0945,38.7052'
        ,'-75.0313,38.7518'
        ,'-75.3544,39.0175'
        ,'-75.2912,39.064'
        ,'-75.4297,39.1775'
        ,'-75.3665,39.2238'
        ,'-75.4587,39.2994'
        ,'-75.3955,39.3457'
        ,'-75.6263,39.5341'
        ,'-75.563,39.5802'
        ,'-75.6553,39.6554'
        ,'-75.4023,39.8394'
        ,'-75.4485,39.8769'
        ,'-75.322,39.9687'
        ,'-75.2759,39.9313'
        ,'-75.3391,39.8854'
        ,'-75.293,39.8479'
        ,'-75.5459,39.6639'
        ,'-75.4536,39.5887'
        ,'-75.5169,39.5426'
        ,'-75.1477,39.2409'
        ,'-75.0845,39.2872'
        ,'-74.9922,39.2116'
        ,'-74.929,39.2579'
        ,'-74.8368,39.1823'
        ,'-74.9632,39.0896'
        ,'-74.917,39.0517'
        ,'-74.9802,39.0053'
        ,'-74.9341,38.9674'
        ,'-74.6813,39.1529'
        ,'-74.7274,39.1908'
        ,'-74.2851,39.5142'
        ,'-74.3312,39.5519'
        ,'-74.3944,39.5058'
        ,'-74.4405,39.5434'
        ,'-74.3141,39.6355'
        ,'-74.268,39.5979'
        ,'-74.1416,39.6899'
        ,'-74.1877,39.7275'
        ,'-74.1245,39.7735'
        ,'-74.1706,39.811'
        ,'-74.0442,39.9027'
        ,'-74.0903,39.9402'
        ,'-74.0271,39.986'
        ,'-74.0732,40.0235'
        ,'-74.01,40.0692'
        ,'-74.0561,40.1066'
        ,'-73.9929,40.1523'
        ,'-74.039,40.1897'
        ,'-73.9758,40.2353'
        ,'-74.0219,40.2727'
        ,'-73.9586,40.3183'
        ,'-74.0047,40.3556'
        ,'-73.9415,40.4011'
        ,'-74.0797,40.5128'
        ,'-74.143,40.4673'
        ,'-74.2351,40.5417'
        ,'-74.0454,40.678'
        ,'-74.1836,40.7892'
        ,'-74.1204,40.8345'
        ,'-74.1665,40.8716'
        ,'-73.9767,41.0072'
        ,'-73.9307,40.9702'
        ,'-74.0571,40.8798'
        ,'-74.0111,40.8428'
        ,'-74.0743,40.7975'
        ,'-73.9361,40.6862'
        ,'-73.9994,40.6408'
        ,'-73.9533,40.6037'
        ,'-73.8901,40.6491'
        ,'-73.844,40.6119'
        ,'-73.7808,40.6573'
        ,'-73.7347,40.6201'
        ,'-73.6715,40.6655'
        ,'-73.6254,40.6283'
        ,'-73.5622,40.6737'
        ,'-73.5161,40.6366'
        ,'-73.4529,40.6819'
        ,'-73.4069,40.6447'
        ,'-73.3437,40.6901'
        ,'-73.2976,40.6529'
        ,'-73.2344,40.6982'
        ,'-73.1884,40.6611'
        ,'-73.1252,40.7064'
        ,'-73.0791,40.6692'
        ,'-72.9527,40.7598'
        ,'-72.9067,40.7227'
        ,'-72.7803,40.8131'
        ,'-72.7343,40.776'
        ,'-72.6079,40.8664'
        ,'-72.5618,40.8293'
        ,'-72.4355,40.9196'
        ,'-72.3894,40.8825'
        ,'-72.1999,41.0178'
        ,'-72.1539,40.9808'
        ,'-72.0275,41.0708'
        ,'-71.9815,41.0338'
        ,'-71.8552,41.1237'
        ,'-71.9012,41.1607'
        ,'-71.9643,41.1157'
        ,'-72.0103,41.1527'
        ,'-72.1367,41.0628'
        ,'-72.1827,41.0998'
        ,'-72.2459,41.0548'
        ,'-72.2919,41.0918'
        ,'-72.3551,41.0468'
        ,'-72.4011,41.0837'
        ,'-72.3379,41.1287'
        ,'-72.3839,41.1657'
        ,'-72.5735,41.0307'
        ,'-72.6195,41.0677'
        ,'-72.7459,40.9775'
        ,'-72.838,41.0515'
        ,'-72.9012,41.0065'
        ,'-72.9472,41.0435'
        ,'-73.0104,40.9984'
        ,'-73.0565,41.0354'
        ,'-73.1829,40.9452'
        ,'-73.2289,40.9822'
        ,'-73.2922,40.937'
        ,'-73.3382,40.974'
        ,'-73.4014,40.9289'
        ,'-73.4475,40.9659'
        ,'-73.5107,40.9207'
        ,'-73.5567,40.9578'
        ,'-73.62,40.9126'
        ,'-73.666,40.9496'
        ,'-73.8557,40.8139'
        ,'-73.9018,40.851'
        ,'-73.5224,41.1219'
        ,'-73.4763,41.085'
        ,'-73.3499,41.1751'
        ,'-73.3038,41.1382'
        ,'-73.1774,41.2282'
        ,'-73.1313,41.1913'
        ,'-72.9417,41.3261'
        ,'-72.8957,41.2892'
        ,'-72.8324,41.3341'
        ,'-72.7864,41.2973'
        ,'-72.7232,41.3422'
        ,'-72.6772,41.3053'
        ,'-72.614,41.3502'
        ,'-72.522,41.2764'
        ,'-72.4587,41.3213'
        ,'-72.4127,41.2844'
        ,'-72.2863,41.3741'
        ,'-72.2403,41.3373'
        ,'-72.1771,41.3821'
        ,'-72.1311,41.3452'
        ,'-72.0679,41.39'
        ,'-72.0219,41.3532'
        ,'-71.9588,41.398'
        ,'-71.9128,41.3611'
        ,'-71.8496,41.4059'
        ,'-71.8036,41.369'
        ,'-71.7404,41.4138'
        ,'-71.6944,41.3769'
        ,'-71.6312,41.4217'
        ,'-71.5853,41.3848'
        ,'-71.3957,41.5189'
        ,'-71.4417,41.5557'
        ,'-71.3785,41.6003'
        ,'-71.4245,41.6371'
        ,'-71.3613,41.6817'
        ,'-71.2694,41.6082'
        ,'-71.3325,41.5636'
        ,'-71.2866,41.5268'
        ,'-71.2234,41.5714'
        ,'-71.1774,41.5346'
        ,'-71.1143,41.5792'
        ,'-71.0683,41.5424'
        ,'-71.0051,41.587'
        ,'-70.9592,41.5502'
        ,'-70.896,41.5948'
        ,'-70.942,41.6315'
        ,'-70.8788,41.6761'
        ,'-70.8329,41.6393'
        ,'-70.6434,41.7727'
        ,'-70.5974,41.736'
        ,'-70.6606,41.6915'
        ,'-70.6147,41.6548'
      ]
    ]
  };
  var s = {
    'ROMS ESPRESSO' : new OpenLayers.StyleMap({
      'default' : new OpenLayers.Style(OpenLayers.Util.applyDefaults({
         'strokeWidth' : 2
        ,'strokeColor' : '#d80893'
        ,'fillColor'   : '#d80893'
        ,'fillOpacity' : 0.2
      }))
    })
  };

  var polygons = [];
  for (var j = 0; j < a[l.name].length; j++) {
    var pts = [];
    for (var i = 0; i < a[l.name][j].length; i++) {
      var p = a[l.name][j][i].split(',');
      pts.push(new OpenLayers.Geometry.Point(p[0],p[1]));
    }
    polygons.push(new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(pts)));
  }

  var lyr = new OpenLayers.Layer.Vector(
     l.name
    ,{
       styleMap   : s[l.name]
      ,visibility : mainStore.getAt(mainStore.find('name',l.name)).get('status') == 'on'
    }
  );
  lyr.addFeatures([new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPolygon(polygons).transform(proj4326,proj900913))]);

  map.addLayer(lyr);
}

function zeroPad(number, length) {
    number = String(number);
    var zeros = [];
    for(var i=0; i<length; ++i) {
        zeros.push('0');
    }
    return zeros.join('').substring(0, length - number.length) + number;
}

function shortDateString(d) {
  return (d.getMonth() + 1)
    + '/' + d.getDate() 
    + '/' + d.getFullYear()
    + ' ' + zeroPad(d.getHours(),2) 
    + ':' + zeroPad(d.getMinutes(),2) 
    + ' UTC' + (d.getTimezoneOffset() * -1 < 0 ? '-' : '+')
    + zeroPad(d.getTimezoneOffset()/60,2);
}

function shortDateToDate(s) {
  // 10/22/2011 08:00 UTC-04
  return new Date(
     s.substr(6,4)
    ,s.substr(0,2)-1
    ,s.substr(3,2)
    ,s.substr(11,2)
    ,s.substr(14,2)
  );
}

function dateToFriendlyString(e) {
  var c = "";
  var a = new Date();
  if (a.getDate() == e.getDate()) {
    strDay = "today"
  } else {
    var b = new Date(a.getTime() + 86400000);
    var d = new Date(a.getTime() - 86400000);
    if (b.getDate() == e.getDate()) {
      strDay = "tomorrow"
    } else {
      if (d.getDate() == e.getDate()) {
        strDay = "yesterday"
      } else {
        aryDays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        strDay = aryDays[e.getDay()]
      }
    }
  }
  c += (e.getHours() > 12 ? e.getHours() - 12 : (e.getHours() == 0 ? 12 : e.getHours()));
  c += ":" + (e.getMinutes() < 10 ? "0" : "") + e.getMinutes() + (e.getHours() > 11 ? " pm" : " am");
  c += " " + strDay;
  return c
}

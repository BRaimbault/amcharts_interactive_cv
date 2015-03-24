// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

var map;
var chart;

 // build map
AmCharts.ready(function() {
    AmCharts.theme = "none";
    map = new AmCharts.AmMap();
    map.pathToImages = "http://www.amcharts.com/lib/3/images/";

    map.mouseWheelZoomEnabled = true;
    map.zoomDuration = 0.5;
    map.zoomControl = {
        zoomControlEnabled: true,
        buttonSize:10, iconSize:10};

    map.areasSettings = {
     	color: "#eff2c3",
        autoZoom: true,
        selectedColor:"#eff2c3" ,
        selectedOutlineColor: "#CC0000",
      	rollOverOutlineColor: "#CC0000",
        alpha:0.8,
        unlistedAreasAlpha:0.1,
        balloonText: "[[title]] [[customData]]"};

    map.legend = {
        width:370,
        marginRight:0,
        marginLeft:0,
        align:"right",
        equalWidths:false,
        backgroundAlpha: 0.5,
        backgroundColor: "#FFFFFF",
        borderColor: "#ffffff",
        borderAlpha: 1,
        bottom:5,
        right:5,
        data: [{title: "Worked & Lived", color: "#00933b"},
            {title: "Had a Project", color: "#f2b50f"},
            {title: "Travelled", color: "#d2e5f0"}]
	};

    map.smallMap = {
        minimizeButtonWidth:10,
        size:0.15};

    map.imagesSettings = {
        color: "#CC0000",
        rollOverColor: "#CC0000",
        selectedColor: "#000000"};

    var expdesclength = (expdesc.length-1) ;

 // get the data
    var dataProvider = {
        map: "worldLow",
        zoomLatitude: 44.3, zoomLongitude: 9.5, "zoomLevel": 1,
        linkToObject: "Home",
        areas: expareas,
        getAreasFromMap: true,
        images: [
            {id: "Home", zoomLatitude: 44.3, zoomLongitude: 9.5, "zoomLevel": 1,
            images: [{imageURL:"http://raimbault.bru.free.fr/mapdata/arrows/left-arrow-off.png",
                    width: 32, height: 24, left: 126, top: 34},
                    {imageURL:"http://raimbault.bru.free.fr/mapdata/arrows/right-arrow-off.png",
                    width: 32, height: 24, left: 166, top: 34}]},
            {label: "Browse Experiences", left: 50, top: 5, labelShiftY: 5, color: "#CC0000", labelColor: "#CC0000", labelRollOverColor: "#CC0000", labelFontSize: 18, linkToObject: "Home"},
            {label: "2006", left: 56, top: 34, labelColor: "#CC0000", labelRollOverColor: "#CC0000", labelFontSize: 14,
            linkToObject: expdesc[0].id,
            num: expdesc[0].num,
            customData1: expdesc[0].customData1,
            customData2: expdesc[0].customData2,
            customData3: expdesc[0].customData3,
            customData4: expdesc[0].customData4},
            {label: "2015", left: 188, top: 34, labelColor: "#CC0000", labelRollOverColor: "#CC0000", labelFontSize: 14,
            linkToObject: expdesc[expdesclength].id,
            num: expdesc[expdesclength].num,
            customData1: expdesc[expdesclength].customData1,
            customData2: expdesc[expdesclength].customData2,
            customData3: expdesc[expdesclength].customData3,
            customData4: expdesc[expdesclength].customData4}
        ]};

    for (var i = 0; i < expdesc.length; i++) {
        var expItem = expdesc[i];
        var expItemPid, expItemPcol, expItemSid, expItemScol;
        if (i==0) {
            expItemP = "";
            expItemPcol = "http://raimbault.bru.free.fr/mapdata/arrows/left-arrow-off.png";
            expItemS = expdesc[i+1];
            expItemScol = "http://raimbault.bru.free.fr/mapdata/arrows/right-arrow.png";
        }
        else if (i==(expdesc.length -1)) {
            expItemP = expdesc[i-1];
            expItemPcol = "http://raimbault.bru.free.fr/mapdata/arrows/left-arrow.png";
            expItemS = "";
            expItemScol = "http://raimbault.bru.free.fr/mapdata/arrows/right-arrow-off.png";
        }
        else {
            expItemP = expdesc[i-1];
            expItemPcol = "http://raimbault.bru.free.fr/mapdata/arrows/left-arrow.png";
            expItemS = expdesc[i+1];
            expItemScol = "http://raimbault.bru.free.fr/mapdata/arrows/right-arrow.png";
        }
        dataProvider.images.push({
            id: expItem.id,
            num: expItem.num,
            customData1: expItem.customData1,
            customData2: expItem.customData2,
            customData3: expItem.customData3,
            customData4: expItem.customData4,
            color: "#000000", selectedColor: "#CC0000", svgPath: targetSVG,
            zoomLevel: 7, scale: 0.55,
            title: expItem.title,
            latitude: expItem.latitude,
            longitude: expItem.longitude,
            images: [
                {imageURL: expItemPcol,
                width: 32, height: 24, left: 126, top: 36,
                linkToObject: expItemP.id,
                num: expItemP.num,
                customData1: expItemP.customData1,
                customData2: expItemP.customData2,
                customData3: expItemP.customData3,
                customData4: expItemP.customData4},
                {imageURL: expItemScol,
                width: 32, height: 24, left: 166, top: 36,
                linkToObject: expItemS.id,
                num: expItemS.num,
                customData1: expItemS.customData1,
                customData2: expItemS.customData2,
                customData3: expItemS.customData3,
                customData4: expItemS.customData4}]
            });
        }

    map.dataProvider = dataProvider;

//get the data
    var chartData = [];
    for (i = 0; i < expdesc.length; i++) {
    expItem = expdesc[i];

    var colorJob;
    switch(expItem.job) {
      case "University":
        colorJob = "#fbf79c";
        break;
      case "NGO":
        colorJob = "#00933b";
        break;
      case "Company":
        colorJob = "#00933b";
        break;
      case "Research":
        colorJob = "#00933b";
        break;
      default:
          colorJob = "#000000";
    }

    chartData.push({
        id: expItem.id,
        num: expItem.num,
        name: expItem.customData1,
        startTime: expItem.startTime,
        endTime: expItem.endTime,
        color: colorJob,
        cat: "",
        alpha: 1
       });
    }





chart = AmCharts.makeChart("chartdiv", {
    theme: "none",
    type: "serial",
    thousandsSeparator: "",

    "dataProvider": chartData,
     "valueAxes": [{
        "axisAlpha": 0,
        "gridAlpha": 0.1
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "[[name]]",
        "colorField": "color",
        "fillColorsField": "fill",
        "fillAlphas": 0.8,
        "lineAlpha": 0,
        "alphaField": "alpha",
        "openField": "startTime",
        "type": "column",
        "valueField": "endTime",
        "showHandOnHover": true
    }],
    "rotate": true,
    "columnWidth": 1,
    "categoryField": "cat",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0.1,
        "position": "left"
    },
    "exportConfig":{
        "menuTop":"20px",
        "menuRight":"20px",
        "menuItems": [{
            "icon": "http://www.amcharts.com/lib/3/images/export.png",
            "format": 'png'
        }]
    }
});


function getChartDataColor(dataNum) {
    for (i = 0; i < expdesc.length; i++) {
    expItem = expdesc[i];
    expItemJob = expdesc[i].job;

    var colorJob;
    switch(expItemJob) {
      case "University":
        colorJob = "#fbf79c";
        break;
      case "NGO":
        colorJob = "#00933b";
        break;
      case "Company":
        colorJob = "#00933b";
        break;
      case "Research":
        colorJob = "#00933b";
        break;
      default:
          colorJob = "#000000";
    }
    if(i==dataNum) {
        chart.dataProvider[i].color ="#CC0000";}
    else {
        chart.dataProvider[i].color = colorJob;}
    }
}

funSelectChart = function (eventS) {
        getChartDataColor();
        // recalculate and reload chart
        var item = chart.dataProvider[eventS.index];

        eventS.item.dataContext.color = "#CC0000";
        chart.validateData();
        map.selectMapObject(eventS.item.dataContext.number);
}

    // set click events on chart
    chart.addListener("clickGraphItem", function (event) {
        // recalculate and reload chart
        var item = chart.dataProvider[event.index];
        getChartDataColor(event.item.dataContext.num);
        chart.validateData();

        dataProvider.linkToObject = expdesc[event.item.dataContext.num].id;
        map.dataProvider = dataProvider;
        map.write("mapdiv");
        document.getElementById("info").innerHTML = '<table border=0><tr><td><b>' + expdesc[event.item.dataContext.num].customData1 + '</b></td><td align="right" width=150px><img src="' + expdesc[event.item.dataContext.num].customData3 + '"/></td></tr></table><p>' + expdesc[event.item.dataContext.num].customData2 + '</p><p><a href="' + expdesc[event.item.dataContext.num].customData4 + '">Show more...</a></p>';

});

    map.addListener("clickMapObject", function (event) {

        if (event.mapObject.customData3 == undefined) {
            document.getElementById("info").innerHTML = 'Click on the map or on the timeline to display information';
            }
        else {
            document.getElementById("info").innerHTML = '<table border=0><tr><td><b>' + event.mapObject.customData1 + '</b></td><td align="right" width=150px><img src="' + event.mapObject.customData3 + '"/></td></tr></table><p>' + event.mapObject.customData2 + '</p><p><a href="' + event.mapObject.customData4 + '">Show more...</a></p>';
            }
          getChartDataColor(event.mapObject.num);
          chart.validateData();
    });

    map.write("mapdiv");


});

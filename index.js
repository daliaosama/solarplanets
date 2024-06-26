var planetsArray = [
  {
    name: "MERCURY",
    src: "images/planet-mercury.svg",
    overview:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    structure:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    structureimg: "images/planet-mercury-internal.svg",
    surface:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    surfaceimg: "images/geology-mercury.png",
    rotaiontime: "58.6 DAYS",
    evolutiontime: "87.97 DAYS",
    radius: "2,439.7 KM",
    avgtemp: "430°C",
    color: "#419EBB",
  },
  {
    name: "VENUS",
    src: "images/planet-venus.svg",
    overview:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    structure:
      "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
    structureimg: "images/planet-venus-internal.svg",
    surface:
      "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
    surfaceimg: "images/geology-venus.png",
    rotaiontime: "243 DAYS",
    evolutiontime: "224.7 DAYS",
    radius: "6,051.8 KM",
    avgtemp: "471°C",
    color: "#EDA249",
  },
  {
    name: "EARTH",
    src: "images/planet-earth.svg",
    overview:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    structure:
      "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    structureimg: "images/planet-earth-internal.svg",
    surface:
      "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
    surfaceimg: "images/geology-earth.png",
    rotaiontime: "0.99 DAYS",
    evolutiontime: "365.26 DAYS",
    radius: "6,371 KM",
    avgtemp: "16°C",
    color: "#6D2ED5",
  },
  {
    name: "MARS",
    src: "images/planet-mars.svg",
    overview:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
    structure:
      "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
    structureimg: "images/planet-mars-internal.svg",
    surface:
      "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    surfaceimg: "images/geology-mars.png",
    rotaiontime: "1.03 DAYS",
    evolutiontime: "1.88 YEARS",
    radius: "3,389.5 KM",
    avgtemp: "-28°C",
    color: "#D14C32",
  },
  {
    name: "JUPITER",
    src: "images/planet-jupiter.svg",
    overview:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    structure:
      "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    structureimg: "images/planet-jupiter-internal.svg",
    surface:
      "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
    surfaceimg: "images/geology-jupiter.png",
    rotaiontime: "9.93 HOURS",
    evolutiontime: "11.86 YEARS",
    radius: "69,911 KM",
    avgtemp: "-108°C",
    color: "#D83A34",
  },
  {
    name: "SATURN",
    src: "images/planet-saturn.svg",
    overview:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    structure:
      "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    structureimg: "images/planet-saturn-internal.svg",
    surface:
      "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
    surfaceimg: "images/geology-saturn.png",
    rotaiontime: "10.8 HOURS",
    evolutiontime: "29.46 YEARS",
    radius: "58,232 KM",
    avgtemp: "-138C",
    color: "#CD5120",
  },
  {
    name: "URANUS",
    src: "images/planet-uranus.svg",
    overview:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    structure:
      "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    structureimg: "images/planet-uranus-internal.svg",
    surface:
      "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    surfaceimg: "images/geology-uranus.png",
    rotaiontime: "17.2 HOURS",
    evolutiontime: "84 YEARS",
    radius: "25,362 KM",
    avgtemp: "-195C",
    color: "#1EC1A2",
  },
  {
    name: "NEPTUNE",
    src: "images/planet-neptune.svg",
    overview:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    structure:
      "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    structureimg: "images/planet-neptune-internal.svg",
    surface:
      "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    surfaceimg: "images/geology-neptune.png",
    rotaiontime: "16.08 HOURS",
    evolutiontime: "164.79 YEARS",
    radius: "24,622 KM",
    avgtemp: "-201C",
    color: "#2D68F0",
  },
];

var description = document.getElementsByClassName("description");
var structure = document.getElementById("structure");
var surface = document.getElementById("surface");
var overview = document.getElementById("overview");
overview.addEventListener("click", function () {
  overview.style.backgroundColor = planetsArray[0].color;
  structure.style.backgroundColor = "transparent";
  surface.style.backgroundColor = "transparent";
  document.getElementById("img").children[0].src = planetsArray[0].src;
  document.getElementById("img").children[1].style.display = "none";
});
/*add eventlistener click to the button with id 'structure'
change the image to internalstructure and textparagraph
 of the fistplanet  appears when page loads*/
structure.addEventListener("click", function () {
  document.getElementById("img").children[0].src = planetsArray[0].structureimg;
  document.getElementById("par").textContent = planetsArray[0].structure;
  structure.style.backgroundColor = planetsArray[0].color;
  overview.style.backgroundColor = "transparent";
  surface.style.backgroundColor = "transparent";
  document.getElementById("img").children[1].style.display = "none";
});

/*add eventlistener click to the button with id 'surface'
change the image to surfacegeology and textparagraph
 of the fistplanet  appears when page loads*/
surface.addEventListener("click", function () {
  document.getElementById("img").children[1].src = planetsArray[0].surfaceimg;
  document.getElementById("img").children[0].src = planetsArray[0].src;
  document.getElementById("img").children[1].style.display = "block";
  document.getElementById("par").textContent = planetsArray[0].surface;
  surface.style.backgroundColor = planetsArray[0].color;
  structure.style.backgroundColor = "transparent";
  overview.style.backgroundColor = "transparent";
});
document.getElementById("mer").addEventListener("click", colorRemove);
document.getElementById("venus").addEventListener("click", colorRemove);
document.getElementById("earth").addEventListener("click", colorRemove);
document.getElementById("mars").addEventListener("click", colorRemove);
document.getElementById("jup").addEventListener("click", colorRemove);
document.getElementById("sat").addEventListener("click", colorRemove);
document.getElementById("ur").addEventListener("click", colorRemove);
document.getElementById("nep").addEventListener("click", colorRemove);
var planets = document.getElementsByClassName("btn");
function colorRemove() {
  for (let i = 0; i < planets.length; i++) {
    planets[i].style.borderTop = "none";
  }
}

for (let i = 0; i < planetsArray.length; i++) {
  planets[i].onclick = function () {
    document.getElementById("img").children[0].src = planetsArray[i].src;
    document.getElementById("planet").children[0].children[0].textContent =
      planetsArray[i].name;
    document.getElementById("par").textContent = planetsArray[i].overview;

    overview.onclick = function () {
      document.getElementById("img").children[0].src = planetsArray[i].src;
      document.getElementById("par").textContent = planetsArray[i].overview;
      overview.style.backgroundColor = planetsArray[i].color;
      surface.style.backgroundColor = "transparent";
      structure.style.backgroundColor = "transparent";
      document.getElementById("img").children[1].style.display = "none";
    };

    /*change the image to internal structure and textparagraph
     when clicking over each element  of the array planetsArray*/
    structure.onclick = function () {
      document.getElementById("par").textContent = planetsArray[i].structure;
      document.getElementById("img").children[0].src =
        planetsArray[i].structureimg;
      structure.style.backgroundColor = planetsArray[i].color;
      /* remove style of unneeded  elements*/
      overview.style.backgroundColor = "transparent";
      surface.style.backgroundColor = "transparent";
      document.getElementById("img").children[1].style.display = "none";
    };
    /*change the image to surfacegeology and textparagraph
     when clicking over each element  of the array planetsArray*/
    surface.onclick = function () {
      document.getElementById("par").textContent = planetsArray[i].surface;
      document.getElementById("img").children[0].src = planetsArray[i].src;
      document.getElementById("img").children[1].src =
        planetsArray[i].surfaceimg;
      document.getElementById("img").children[1].style.display = "block";
      surface.style.backgroundColor = planetsArray[i].color;
      overview.style.backgroundColor = "transparent";
      structure.style.backgroundColor = "transparent";
    };
    planets[i].style.borderTop = "thick solid";
    planets[i].style.borderTopColor = planetsArray[i].color;

    document.getElementById("evolution").textContent =
      planetsArray[i].evolutiontime;
    document.getElementById("rotation").textContent =
      planetsArray[i].rotaiontime;
    document.getElementById("radius").textContent = planetsArray[i].radius;
    document.getElementById("temp").textContent = planetsArray[i].avgtemp;
    document.getElementById("img").children[1].style.display = "none";
    overview.style.backgroundColor = "transparent";
    structure.style.backgroundColor = "transparent";
    surface.style.backgroundColor = "transparent";
  };
}

/*js for mobile view*/

var mobileView = window.matchMedia("(max-width: 600px)", "(min-width:375px)");
var menu = document.getElementById("menu");
mobile(mobileView);
function mobile() {
  var planetsMenu = document.createElement("div");
  planetsMenu.id = "planetmenu";
  for (let y = 0; y < planetsArray.length; y++) {
    var solarplanet = document.createElement("div");
    solarplanet.className = "solar";
    planetsMenu.appendChild(solarplanet);
    var sol = document.createElement("div");
    sol.className = "sol";
    solarplanet.appendChild(sol);
    var circle = document.createElement("div");
    circle.className = "circle";
    sol.appendChild(circle);
    var solar = document.createElement("label");
    solar.className = "solartext";
    solar.textContent = planetsArray[y].name;
    sol.appendChild(solar);
    circle.style.backgroundColor = planetsArray[y].color;
    var next = document.createElement("img");
    next.className = "next";
    next.src = "images/icon-chevron.svg";
    solarplanet.appendChild(next);
    var hr = document.createElement("hr");
    hr.style.height = "0px";
    planetsMenu.appendChild(hr);
    next.onclick = function () {
      planetsMenu.style.display = "none";
      /*create main div  */
      var planetInformation = document.createElement("div");
      planetInformation.id = "planetInformation";
      /*div contain buttons */
      var des = document.createElement("div");
      des.id = "des";
      planetInformation.appendChild(des);
      var buttonOverview = document.createElement("button");
      buttonOverview.className = "button";
      buttonOverview.textContent = "overview";
      buttonOverview.onclick = function () {
        buttonOverview.style.borderBottom = "thick solid";
        buttonOverview.style.borderBottomColor = planetsArray[y].color;
        buttonStructure.style.borderBottom = "none";
        buttonSurface.style.borderBottom = "none";
        planetInfoParagraph.textContent = planetsArray[y].overview;
        image.src = planetsArray[y].src;
        surfaceimage.style.display = "none";
      };
      des.appendChild(buttonOverview);

      var buttonStructure = document.createElement("button");
      buttonStructure.className = "button";
      buttonStructure.textContent = "structure";
      buttonStructure.onclick = function () {
        buttonStructure.style.borderBottom = "thick solid";
        buttonStructure.style.borderBottomColor = planetsArray[y].color;
        buttonOverview.style.borderBottom = "none";
        buttonSurface.style.borderBottom = "none";
        image.src = planetsArray[y].structureimg;
        planetInfoParagraph.textContent = planetsArray[y].structure;
        surfaceimage.style.display = "none";
      };
      des.appendChild(buttonStructure);

      var buttonSurface = document.createElement("button");
      buttonSurface.textContent = "Surface";
      buttonSurface.className = "button";
      buttonSurface.onclick = function () {
        buttonSurface.style.borderBottom = "thick solid";
        buttonSurface.style.borderBottomColor = planetsArray[y].color;
        buttonOverview.style.borderBottom = "none";
        buttonStructure.style.borderBottom = "none";
        image.src = planetsArray[y].src;
        planetInfoParagraph.textContent = planetsArray[y].surface;
         surfaceimage.style.display='block'
      };
      des.appendChild(buttonSurface);
      var hor = document.createElement("hr");
      planetInformation.appendChild(hor);
      var planetImage = document.createElement("div");
      planetImage.id = "planetImage";
      planetInformation.appendChild(planetImage);
      var image = document.createElement("img");
      image.id = "imgplanet";
      image.src = planetsArray[y].src;
      planetImage.appendChild(image);
      var surfaceimage = document.createElement("img");
        surfaceimage.src = planetsArray[y].surfaceimg;
        surfaceimage.id = "surfaceimage";
        planetImage.appendChild(surfaceimage);
      /*create div to append planet name and information */
      var planetInfo = document.createElement("div");
      planetInfo.id = "planetInfo";
      planetInformation.appendChild(planetInfo);
      var planetName = document.createElement("label");
      planetName.id = "planetName";
      planetName.textContent = planetsArray[y].name;
      planetInfo.appendChild(planetName);
      /*paragraph contain information */
      var planetInfoParagraph = document.createElement("p");
      planetInfoParagraph.id = "planetInfoParagraph";
      planetInfoParagraph.textContent = planetsArray[y].overview;
      planetInfo.appendChild(planetInfoParagraph);
      /*create source div */
      var sourceDiv = document.createElement("div");
      sourceDiv.id = "sourceDiv";
      planetInfo.appendChild(sourceDiv);
      var source = document.createElement("label");
      source.textContent = "Source:";
      source.id = "source";
      sourceDiv.appendChild(source);
      var site = document.createElement("a");
      site.textContent = "Wikipedia";
      site.id = "site";
      sourceDiv.appendChild(site);
      var sourceImg = document.createElement("img");
      sourceImg.src = "images/icon-source.svg";
      sourceDiv.appendChild(sourceImg);
      /*create div for details */
      var detailsDiv = document.createElement("div");
      detailsDiv.id = "detailsDiv";
      planetInformation.appendChild(detailsDiv);
      var rotationDiv = document.createElement("div");
      rotationDiv.className = "information";
      detailsDiv.appendChild(rotationDiv);
      var rotationTime = document.createElement("label");
      rotationTime.className = "info";
      rotationTime.textContent = "Rotaion Time";
      rotationDiv.appendChild(rotationTime);
      var rotation = document.createElement("label");
      rotation.className = "infotext";
      rotation.textContent = planetsArray[y].rotaiontime;
      rotationDiv.appendChild(rotation);
      var evolutionDiv = document.createElement("div");
      evolutionDiv.className = "information";
      detailsDiv.appendChild(evolutionDiv);
      var evolutionTime = document.createElement("label");
      evolutionTime.className = "info";
      evolutionTime.textContent = "evolution time";
      evolutionDiv.appendChild(evolutionTime);
      var evolution = document.createElement("label");
      evolution.className = "infotext";
      evolution.textContent = planetsArray[y].evolutiontime;
      evolutionDiv.appendChild(evolution);
      var radiusDiv = document.createElement("div");
      radiusDiv.className = "information";
      detailsDiv.appendChild(radiusDiv);
      var radius = document.createElement("label");
      radius.className = "info";
      radius.textContent = "Radius";
      radiusDiv.appendChild(radius);
      var radiusText = document.createElement("label");
      radiusText.className = "infotext";
      radiusText.textContent = planetsArray[y].radius;
      radiusDiv.appendChild(radiusText);
      var tempDiv = document.createElement("div");
      tempDiv.className = "information";
      detailsDiv.appendChild(tempDiv);
      var avgTemp = document.createElement("label");
      avgTemp.className = "info";
      avgTemp.textContent = "Average Temp.";
      tempDiv.appendChild(avgTemp);
      var temp = document.createElement("label");
      temp.className = "infotext";
      temp.textContent = planetsArray[y].avgtemp;
      tempDiv.appendChild(temp);
      document.body.appendChild(planetInformation);
      menu.onclick = function () {
        planetInformation.style.display = "none";
        planetsMenu.style.display = "flex";
      };
    };

    document.body.appendChild(planetsMenu);
  }
}

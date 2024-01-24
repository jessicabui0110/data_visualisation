
function loadDataset(datasetPath) {
  console.log("loadDataSet run");
    d3.csv(datasetPath).then(function (data) {
      
      data.forEach(function (d) {
        d.x = d.name;
        d.y = +d.value;
      });

      console.log(data); 

      
      d3.select("#chartContainer").html("");
      
      drawChart(data);
    });
  }

  
 

  

//2020
  document.getElementById("Aus_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Austria_2020.csv");
  });

  document.getElementById("Bel_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Belgium_2020.csv");
  });

  document.getElementById("Bul_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Bulgaria_2020.csv");
  });

  document.getElementById("Cro_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Croatia_2020.csv");
  });

  document.getElementById("Cyp_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Cyprus_2020.csv");
  });

  document.getElementById("Cze_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Czechia_2020.csv");
  });

  document.getElementById("Den_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Denmark_2020.csv");
  });

  document.getElementById("Est_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Estonia_2020.csv");
  });

  document.getElementById("Fin_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Finland_2020.csv");
  });

  document.getElementById("Ger_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Germany_2020.csv");
  });

  document.getElementById("Gre_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Greek_2020.csv");
  });

  document.getElementById("Hun_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Hungary_2020.csv");
  });

  document.getElementById("Ire_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Ireland_2020.csv");
  });

  document.getElementById("Ita_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Italy_2020.csv");
  });

  document.getElementById("Lat_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Latvia_2020.csv");
  });

  document.getElementById("Lit_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Lithuania_2020.csv");
  });

  document.getElementById("Lux_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Luxembourg_2020.csv");
  });

  document.getElementById("Mal_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Malta_2020.csv");
  });

  document.getElementById("Net_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Netherland_2020.csv");
  });

  document.getElementById("Pol_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Poland_2020.csv");
  });

  document.getElementById("Por_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Portugal_2020.csv");
  });

  document.getElementById("Rom_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Romania_2020.csv");
  });

  document.getElementById("Slovalia_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Slovakia_2020.csv");
  });

  document.getElementById("Slovenia_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Slovenia_2020.csv");
  });

  document.getElementById("Spa_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Spain_2020.csv");
  });

  document.getElementById("Swe_2020").addEventListener("click", function () {
    loadDataset("/data_bar/2020/Sweden_2020.csv");
  });


  //2019

  
  document.getElementById("Aus_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Austria_2019.csv");
  });

  document.getElementById("Bel_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Belgium_2019.csv");
  });

  document.getElementById("Bul_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Bulgaria_2019.csv");
  });

  document.getElementById("Cro_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Croatia_2019.csv");
  });

  document.getElementById("Cyp_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Cyprus_2019.csv");
  });

  document.getElementById("Cze_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Czechia_2019.csv");
  });

  document.getElementById("Den_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Denmark_2019.csv");
  });

  document.getElementById("Est_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Estonia_2019.csv");
  });

  document.getElementById("Fin_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Finland_2019.csv");
  });

  document.getElementById("Ger_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Germany_2019.csv");
  });

  document.getElementById("Gre_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Greek_2019.csv");
  });

  document.getElementById("Hun_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Hungary_2019.csv");
  });

  document.getElementById("Ire_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Ireland_2019.csv");
  });

  document.getElementById("Ita_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Italy_2019.csv");
  });

  document.getElementById("Lat_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Latvia_2019.csv");
  });

  document.getElementById("Lit_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Lithuania_2019.csv");
  });

  document.getElementById("Lux_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Luxembourg_2019.csv");
  });

  document.getElementById("Mal_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Malta_2019.csv");
  });

  document.getElementById("Net_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Netherland_2019.csv");
  });

  document.getElementById("Pol_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Poland_2019.csv");
  });

  document.getElementById("Por_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Portugal_2019.csv");
  });

  document.getElementById("Rom_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Romania_2019.csv");
  });

  document.getElementById("Slovalia_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Slovakia_2019.csv");
  });

  document.getElementById("Slovenia_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Slovenia_2019.csv");
  });

  document.getElementById("Spa_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Spain_2019.csv");
  });

  document.getElementById("Swe_2019").addEventListener("click", function () {
    loadDataset("/data_bar/2019/Sweden_2019.csv");
  });

  
  //2018

  
document.getElementById("Aus_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Austria_2018.csv");
});

document.getElementById("Bel_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Belgium_2018.csv");
});

document.getElementById("Bul_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Bulgaria_2018.csv");
});

document.getElementById("Cro_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Croatia_2018.csv");
});

document.getElementById("Cyp_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Cyprus_2018.csv");
});

document.getElementById("Cze_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Czechia_2018.csv");
});

document.getElementById("Den_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Denmark_2018.csv");
});

document.getElementById("Est_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Estonia_2018.csv");
});

document.getElementById("Fin_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Finland_2018.csv");
});

document.getElementById("Ger_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Germany_2018.csv");
});

document.getElementById("Gre_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Greek_2018.csv");
});

document.getElementById("Hun_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Hungary_2018.csv");
});

document.getElementById("Ire_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Ireland_2018.csv");
});

document.getElementById("Ita_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Italy_2018.csv");
});

document.getElementById("Lat_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Latvia_2018.csv");
});

document.getElementById("Lit_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Lithuania_2018.csv");
});

document.getElementById("Lux_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Luxembourg_2018.csv");
});

document.getElementById("Mal_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Malta_2018.csv");
});

document.getElementById("Net_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Netherland_2018.csv");
});

document.getElementById("Pol_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Poland_2018.csv");
});

document.getElementById("Por_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Portugal_2018.csv");
});

document.getElementById("Rom_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Romania_2018.csv");
});

document.getElementById("Slovalia_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Slovakia_2018.csv");
});

document.getElementById("Slovenia_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Slovenia_2018.csv");
});

document.getElementById("Spa_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Spain_2018.csv");
});

document.getElementById("Swe_2018").addEventListener("click", function () {
  loadDataset("/data_bar/2018/Sweden_2018.csv");
});

//2017

  
document.getElementById("Aus_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Austria_2017.csv");
});

document.getElementById("Bel_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Belgium_2017.csv");
});

document.getElementById("Bul_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Bulgaria_2017.csv");
});

document.getElementById("Cro_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Croatia_2017.csv");
});

document.getElementById("Cyp_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Cyprus_2017.csv");
});

document.getElementById("Cze_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Czechia_2017.csv");
});

document.getElementById("Den_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Denmark_2017.csv");
});

document.getElementById("Est_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Estonia_2017.csv");
});

document.getElementById("Fin_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Finland_2017.csv");
});

document.getElementById("Ger_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Germany_2017.csv");
});

document.getElementById("Gre_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Greek_2017.csv");
});

document.getElementById("Hun_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Hungary_2017.csv");
});

document.getElementById("Ire_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Ireland_2017.csv");
});

document.getElementById("Ita_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Italy_2017.csv");
});

document.getElementById("Lat_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Latvia_2017.csv");
});

document.getElementById("Lit_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Lithuania_2017.csv");
});

document.getElementById("Lux_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Luxembourg_2017.csv");
});

document.getElementById("Mal_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Malta_2017.csv");
});

document.getElementById("Net_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Netherland_2017.csv");
});

document.getElementById("Pol_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Poland_2017.csv");
});

document.getElementById("Por_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Portugal_2017.csv");
});

document.getElementById("Rom_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Romania_2017.csv");
});

document.getElementById("Slovalia_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Slovakia_2017.csv");
});

document.getElementById("Slovenia_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Slovenia_2017.csv");
});

document.getElementById("Spa_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Spain_2017.csv");
});

document.getElementById("Swe_2017").addEventListener("click", function () {
  loadDataset("/data_bar/2017/Sweden_2017.csv");
});

//2016

  
document.getElementById("Aus_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Austria_2016.csv");
});

document.getElementById("Bel_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Belgium_2016.csv");
});

document.getElementById("Bul_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Bulgaria_2016.csv");
});

document.getElementById("Cro_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Croatia_2016.csv");
});

document.getElementById("Cyp_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Cyprus_2016.csv");
});

document.getElementById("Cze_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Czechia_2016.csv");
});

document.getElementById("Den_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Denmark_2016.csv");
});

document.getElementById("Est_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Estonia_2016.csv");
});

document.getElementById("Fin_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Finland_2016.csv");
});

document.getElementById("Ger_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Germany_2016.csv");
});

document.getElementById("Gre_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Greek_2016.csv");
});

document.getElementById("Hun_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Hungary_2016.csv");
});

document.getElementById("Ire_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Ireland_2016.csv");
});

document.getElementById("Ita_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Italy_2016.csv");
});

document.getElementById("Lat_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Latvia_2016.csv");
});

document.getElementById("Lit_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Lithuania_2016.csv");
});

document.getElementById("Lux_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Luxembourg_2016.csv");
});

document.getElementById("Mal_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Malta_2016.csv");
});

document.getElementById("Net_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Netherland_2016.csv");
});

document.getElementById("Pol_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Poland_2016.csv");
});

document.getElementById("Por_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Portugal_2016.csv");
});

document.getElementById("Rom_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Romania_2016.csv");
});

document.getElementById("Slovalia_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Slovakia_2016.csv");
});

document.getElementById("Slovenia_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Slovenia_2016.csv");
});

document.getElementById("Spa_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Spain_2016.csv");
});

document.getElementById("Swe_2016").addEventListener("click", function () {
  loadDataset("/data_bar/2016/Sweden_2016.csv");
});

//2015

  
document.getElementById("Aus_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Austria_2015.csv");
});

document.getElementById("Bel_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Belgium_2015.csv");
});

document.getElementById("Bul_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Bulgaria_2015.csv");
});

document.getElementById("Cro_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Croatia_2015.csv");
});

document.getElementById("Cyp_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Cyprus_2015.csv");
});

document.getElementById("Cze_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Czechia_2015.csv");
});

document.getElementById("Den_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Denmark_2015.csv");
});

document.getElementById("Est_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Estonia_2015.csv");
});

document.getElementById("Fin_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Finland_2015.csv");
});

document.getElementById("Ger_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Germany_2015.csv");
});

document.getElementById("Gre_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Greek_2015.csv");
});

document.getElementById("Hun_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Hungary_2015.csv");
});

document.getElementById("Ire_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Ireland_2015.csv");
});

document.getElementById("Ita_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Italy_2015.csv");
});

document.getElementById("Lat_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Latvia_2015.csv");
});

document.getElementById("Lit_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Lithuania_2015.csv");
});

document.getElementById("Lux_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Luxembourg_2015.csv");
});

document.getElementById("Mal_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Malta_2015.csv");
});

document.getElementById("Net_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Netherland_2015.csv");
});

document.getElementById("Pol_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Poland_2015.csv");
});

document.getElementById("Por_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Portugal_2015.csv");
});

document.getElementById("Rom_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Romania_2015.csv");
});

document.getElementById("Slovalia_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Slovakia_2015.csv");
});

document.getElementById("Slovenia_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Slovenia_2015.csv");
});

document.getElementById("Spa_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Spain_2015.csv");
});

document.getElementById("Swe_2015").addEventListener("click", function () {
  loadDataset("/data_bar/2015/Sweden_2015.csv");
});


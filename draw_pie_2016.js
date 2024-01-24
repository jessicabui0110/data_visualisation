function loadDataset_pie_2016(datasetPath) {
  console.log("loadDataSet_pie run");
  d3.csv(datasetPath).then(function(data) {
    data.forEach(function(d) {
      d.x = d.name;
      d.y = +d.value;
    });

    d3.select("#chart-container_2016").html("");
    d3.select("#pie-chart_2016").html("");
    drawChart_pie_2016(data);
  });
}

function drawChart_pie_2016(data) {
  console.log("draw_pie run");

  var margin = { top: 20, right: 200, bottom: 30, left: 100 };
  var width = 100;
  var height = 150;

  data.reverse();

  var svg = d3
    .select("#bar-chart_2016")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("float", "left")
    .style("margin-right", "20px")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3
    .scaleLinear()
    .range([0, width / 2])
    .domain([0, d3.max(data, function(d) { return d.y; })]);

  var y = d3
    .scaleBand()
    .range([height, 0])
    .padding(0.2)
    .domain(data.map(function(d) { return d.x; }));

  var selectedBar = null;

  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("y", function(d) { return y(d.x); })
    .attr("width", function(d) { return x(d.y); })
    .attr("height", y.bandwidth())
    .attr("fill", "DarkBlue")
    .style("cursor", "pointer")
    .on("click", function(d) {
      if (selectedBar === this) {
        selectedBar = null;
        d3.selectAll(".bar").attr("fill", "DarkBlue"); 
        d3.selectAll(".name").attr("fill", "DarkBlue"); 
        d3.select("#pie-chart_2016").style("display", "none"); 
        d3.select("#legend-panel").style("display", "none"); 
      } else {
        selectedBar = this;
        d3.selectAll(".bar").attr("fill", "DarkBlue"); 
        d3.selectAll(".name").attr("fill", "DarkBlue"); 
        d3.select(this).attr("fill", "SteelBlue"); 
        d3.select(".name_" + d.name).attr("fill", "SteelBlue"); 
        d3.select("#pie-chart_2016").style("display", "block"); 
        d3.select("#legend-panel").style("display", "block"); 
      }

      d3.selectAll(".name").attr("fill", "DarkBlue"); 
      d3.select(".name_" + d.name).attr("fill", "SteelBlue"); 

      d3.csv("./data-pie/2016_pie/2016_" + d.name + ".csv").then(function(grantingData) {
        updatePieChart(grantingData);
      });
    });

  svg
    .selectAll(".name")
    .data(data)
    .enter()
    .append("text")
    .attr("class", function(d) { return "name name_" + d.name; })
    .attr("x", -80)
    .attr("y", function(d) { return y(d.x) + y.bandwidth() / 2; })
    .attr("dy", "0.35em")
    .text(function(d) { return d.name; })
    .attr("fill", "black")
    .style("cursor", "pointer")
    .on("click", function(d) {
      if (selectedBar === null) {
        selectedBar = d3.select(".bar_" + d.name).node();
        d3.select(selectedBar).attr("fill", "SteelBlue"); 
        d3.select("#pie-chart_2016").style("display", "block"); 
        d3.select("#legend-panel").style("display", "block"); 
      } else {
        selectedBar = null;
        d3.selectAll(".bar").attr("fill", "DarkBlue"); 
        d3.select("#pie-chart_2016").style("display", "none"); 
        d3.select("#legend-panel").style("display", "none"); 
      }

      d3.selectAll(".name").attr("fill", "DarkBlue"); 
      d3.select(this).attr("fill", "SteelBlue"); 

      d3.csv("./data-pie/2016_pie/2016_" + d.name + ".csv").then(function(grantingData) {
        updatePieChart(grantingData);
      });
    });

  // Pie chart
  const pieMargin = { top:50, right: 100, bottom: 100, left: 100 };
  const pieWidth = 500 - pieMargin.left - pieMargin.right;
  const pieHeight = 500 - pieMargin.top - pieMargin.bottom;

  const pieSvg = d3.select("#pie-chart_2016")
  .append("svg")
  .attr("width", pieWidth + pieMargin.left + pieMargin.right)
  .attr("height", pieHeight + pieMargin.top + pieMargin.bottom)
  .append("g")
  .attr("transform", "translate(" + (pieWidth / 2 + pieMargin.left) + "," + (pieHeight / 2 + pieMargin.top) + ")");


  const color = d3.scaleOrdinal(d3.schemeCategory10);

function updatePieChart(data) {
  pieSvg.style("display", "block");
  d3.select("#pie-chart-heading").style("display", "block");
  d3.select("#legend-panel").style("display", "block");
  d3.select("#pie-chart_2016").select(".legend").remove();
  data.forEach(function(d) {
    d.value = +d.value;
  });

  pieSvg.selectAll("*").remove();
  pieSvg
  .append("text")
  .attr("x", pieWidth-120)
  .attr("y", -210)
  .attr("text-anchor", "end")
  .attr("font-size", "20px")
  .text("Main granting EU Member States");
  const pie = d3.pie()
    .value(d => d.value)
    .sort(null);

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(Math.min(pieWidth, pieHeight) / 2);

  const pieData = pie(data);

  const arcs = pieSvg.selectAll("path")
    .data(pieData);

  arcs
    .exit()
    .remove(); // Remove old paths

  arcs
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", (d, i) => color(i))
    .on("mouseover", function(d) {
      d3.select(this)
      d3.select(this)
            .transition()
            .duration(200)
            .attr("transform", function(d) {
              const centroid = arc.centroid(d);
              const midAngle = Math.atan2(centroid[1], centroid[0]);
              const x = Math.cos(midAngle) * (Math.min(pieWidth, pieHeight) / 2 * 0.1);
              const y = Math.sin(midAngle) * (Math.min(pieWidth, pieHeight) / 2 * 0.1);
              return "translate(" + x + "," + y + ")";
            })
            .attr("d", d3.arc()
              .innerRadius(0)
              .outerRadius(Math.min(pieWidth, pieHeight) / 2 * 1.1)
            );
    })

    
    .on("mouseout", function(d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr("transform", "translate(0,0)")
        .attr("d", arc);
    })
    .transition()
    .duration(500)
    .attrTween("d", function(d) {
      const interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        return arc(interpolate(t));
      };
    })
    .attr("fill", (d, i) => color(i));

  // Legend
  var legend = d3
    .select("#pie-chart_2016")
    .append("svg")
    .attr("class", "legend")
    .style("display", "block")
    .style("margin-bottom", "20px")
    .style("float", "right")
    .attr("width", 200)
    .attr("height", Math.ceil(data.length / 2) * 20); // Adjust the height of the legend panel

  legend.selectAll("*").remove();

  var legendGroup = legend
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function(d, i) {
      return "translate(" + (i % 2 * 100) + "," + Math.floor(i / 2) * 20 + ")"; // Adjust the translation
    });

  legendGroup
    .append("rect")
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", function(d, i) {
      return color(i);
    });

  legendGroup
    .append("text")
    .attr("x", 24)
    .attr("y", 9)
    .attr("dy", ".35em")
    .text(function(d) {
      return d.name;
    });

    // Add labels with lines
const labelArc = d3.arc()
.innerRadius(Math.min(pieWidth, pieHeight) / 2 * 0.5)
.outerRadius(Math.min(pieWidth, pieHeight) / 2 * 0.8);

const labelGroup = pieSvg.append("g")
.attr("class", "label-group");

const labels = labelGroup.selectAll(".pie-label")
.data(pieData)
.enter()
.append("g")
.attr("class", "pie-label");

labels.append("polyline")
.attr("class", "label-line")
.attr("points", function(d) {
  const centroid = arc.centroid(d);
  const midAngle = Math.atan2(centroid[1], centroid[0]);
  const x1 = Math.cos(midAngle) * (Math.min(pieWidth, pieHeight) / 2 * 0.5);
  const y1 = Math.sin(midAngle) * (Math.min(pieWidth, pieHeight) / 2 * 0.5);
  const x2 = Math.cos(midAngle) * (Math.min(pieWidth, pieHeight) / 2 * 0.8);
  const y2 = Math.sin(midAngle) * (Math.min(pieWidth, pieHeight) / 2 * 0.8);
  const x3 = Math.cos(midAngle) * (Math.min(pieWidth, pieHeight) / 2 * 1.3);
  const y3 = Math.sin(midAngle) * (Math.min(pieWidth, pieHeight) / 2 * 1.3);
  return x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3;
})
.style("stroke", "black")
.style("fill", "none");

labels.append("text")
.attr("transform", function(d) {
  const centroid = arc.centroid(d);
  const midAngle = Math.atan2(centroid[1], centroid[0]);
  const x = Math.cos(midAngle) * (Math.min(pieWidth, pieHeight) / 2 * 1.3);
  const y = Math.sin(midAngle) * (Math.min(pieWidth, pieHeight) / 2 * 1.3);
  return "translate(" + x + "," + y + ")";
})
.attr("text-anchor", function(d) {
  const centroid = arc.centroid(d);
  return (centroid[0] > 0) ? "start" : "end";
})
.text(function(d) {
  const percentage = (d.value / d3.sum(data, function(d) { return d.value; }));
  return d3.format(".1%")(percentage);
})
.style("font-size", "10px")
.style("fill", function(d) {
  if (d.data.name === countryName) {
    return "SteelBlue";
  }
  return "black";
});

}


}  
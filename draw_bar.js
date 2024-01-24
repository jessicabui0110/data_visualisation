function drawChart(data) {
  var margin = { top: 50, right: 100, bottom: 30, left: 100 };
  var width = 500 - margin.left - margin.right;
  var height = 230 - margin.top - margin.bottom;

  var svg = d3
    .select("#chartContainer")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var maxBarValue = d3.max(data, function(d) { return d.y; });
  var maxDisplayedValue = maxBarValue / 0.75;

  var x = d3
    .scaleLinear()
    .range([0, width])
    .domain([0, maxDisplayedValue]);

  var y = d3
    .scaleBand()
    .range([height, 0])
    .padding(0.2)
    .domain(data.map(function(d) { return d.x; }));

  var colorScale = d3.scaleOrdinal(d3.schemeCategory10);

  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(5));

  svg.append("g")
    .call(d3.axisLeft(y));

  svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("y", function(d) { return y(d.x); })
    .attr("width", function(d) { return x(d.y); })
    .attr("height", y.bandwidth() - 4)
    .attr("fill", function(d, i) { return colorScale(i); })
    .on("mouseover", function(d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr("fill", "light gray");

      svg.append("text")
        .attr("class", "value")
        .attr("x", x(d.y) + 5)
        .attr("y", y(d.x) + y.bandwidth() / 2)
        .text(d.y);
    })
    .on("mouseout", function(d, i) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr("fill", colorScale(i));

      svg.select(".value").remove();
    });

    svg.append("text")
    .attr("x", width / 2)
    .attr("y", -10)
    .attr("text-anchor", "middle")
    .attr("font-size", "20px")
    .text("Top 3 recipient countries of citizenships");

}




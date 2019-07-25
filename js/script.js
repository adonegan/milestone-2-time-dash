$(document).ready(function() {

            d3.json("../data/archive.json").then(makeGraphs);

            function makeGraphs(error, mydata) {
                var ndx = crossfilter(mydata);


                show_country_pie(archiveData);

                dc.renderAll();

            }

            function show_country_pie(ndx) {

                var country_dim = ndx.dimension(dc.pluck('country'));
                var total_times_countries = country_dim.group();

                var pieChartCountry = dc.pieChart(country_dim);
                var dim = ndx.dimension(dc.pluck('country'));
                var group = dim.group();


                d3.selectAll("#resetCountry").on("click", function() {
                    pieChartCountry.filterAll();
                    dc.redrawAll();
                });

                dc.pieChart("#countryChart")
                    .dimension(dim)
                    .group(total_times_countries)
                    .height(330)
                    .radius(90)
                    .transitionDuration(1500);
            }
            
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("viewBox", "0 0 320 360");
            chart.selectAll(".dc-legend-item text")
                .attr("fill", "#ffffff")
                .text("")
                .append("tspan")
                .text(function(d) { return d.name; })
                .append("tspan")
                .attr("x", 100)
                .attr("text-anchor", "end")
                .text(function(d) { return d.data.toLocaleString(); });
        });

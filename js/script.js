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
            
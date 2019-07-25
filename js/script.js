queue()
    .defer(d3.csv, "data/archive2.csv")
    .await(makeGraphs);


function makeGraphs(error, archiveData) {
    var ndx = crossfilter(archiveData);


    show_country_pie(ndx);

    dc.renderAll();

}

function show_country_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.pieChart("#country-chart")
        .dimension(dim)
        .group(group)
        .height(330)
        .width(500)
        .radius(120)
        .transitionDuration(1500);
}

 
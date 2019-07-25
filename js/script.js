queue()
    .defer(d3.json, "data/archive.json")
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
        .radius(90)
        .transitionDuration(1500);
}

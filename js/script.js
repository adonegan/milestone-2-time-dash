queue()
    .defer(d3.csv, "data/archive2.csv")
    .await(makeGraphs);


function makeGraphs(error, archiveData) {
    var ndx = crossfilter(archiveData);


    show_country_pie(ndx);
    show_category_pie(ndx);
    show_honor_pie(ndx);

    dc.renderAll();

}

function show_country_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.pieChart("#country-chart")
        .dimension(dim)
        .group(group)
        .height(350)
        .width(300)
        .radius(200)
        .transitionDuration(1500);
}

function show_category_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Category'));
    var group = dim.group();

    dc.pieChart("#category-chart")
        .dimension(dim)
        .group(group)
        .height(350)
        .width(300)
        .radius(200)
        .transitionDuration(1500);
        
}

function show_honor_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Honor'));
    var group = dim.group();

    dc.pieChart("#honor-chart")
        .dimension(dim)
        .group(group)
        .height(350)
        .width(300)
        .radius(200)
        .transitionDuration(1500);
        
}

 
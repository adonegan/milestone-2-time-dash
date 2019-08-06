queue()
    .defer(d3.csv, "data/archive2.csv")
    .await(makeGraphs);

/* Print Filter */

function print_filter(filter) {
    var f = eval(filter);
    if (typeof(f.length) != "undefined") {}
    else {}
    if (typeof(f.top) != "undefined") { f = f.top(Infinity); }
    else {}
    if (typeof(f.dimension) != "undefined") { f = f.dimension(function(d) { return ""; }).top(Infinity); }
    else {}
    console.log(filter + "(" + f.length + ") = " + JSON.stringify(f).replace("[", "[\n\t").replace(/}\,/g, "},\n\t").replace("]", "\n]"));
}

/* Render All */

function makeGraphs(error, archiveData) {
    var ndx = crossfilter(archiveData);

    show_honor_pie(ndx);
    show_country_pie(ndx);
    show_category_bar(ndx);

    dc.renderAll();
}


/* Honor function */

function show_honor_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Honor'));
    var group = dim.group();

    //  var dim = ndx.dimension(function(d) { return d.Honor; });
    //  var group = dim.group().reduceCount();


    dc.pieChart("#honor-chart")
        .dimension(dim)
        .group(group)
        .height(300)
        .width(650)
        //.slicesCap(5)
        //.innerRadius(100)
        .radius(150)
        .useViewBoxResizing(false)
        .transitionDuration(1500)
        .legend(dc.legend().x(0).y(0).itemHeight(16).gap(2));

    //print_filter(group);

}

/* Country function */

function show_country_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.pieChart("#country-chart")
        .externalLabels(50)
       // .drawPaths(true)
      //  .slicesCap(20)
       // .innerRadius(50)
        //  .externalRadiusPadding(50)
        .dimension(dim)
        .group(group)
        .height(450)
        .width(650)
        .radius(150)
        .transitionDuration(1500)
        .legend(dc.legend().x(0).y(0).itemHeight(16).gap(2));

    // print_filter(group);
}

/* Category function */

function show_category_bar(ndx) {
    var dim = ndx.dimension(dc.pluck('Category'));
    var group = dim.group();

    dc.barChart("#bar-chart")
        .width(1000)
        .height(250)
        .dimension(dim)
        .group(group)
        .x(d3.scale.ordinal().domain(["Politics", "War", "Technology", "Economics", "Space", "Diplomacy", "Media", "Space", "Revolution", "Environment", "Religion", "Philanthropy", "Science", ""]))
        .xUnits(dc.units.ordinal)
        //.gap(10);
        .barPadding(0.2);

    // print_filter(group);

}

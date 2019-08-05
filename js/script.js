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
  //  show_text_widget(ndx);
    

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
        .height(350)
        .width(300)
      //.slicesCap(5)
      //.innerRadius(100)
        .radius(200)
       // .useViewBoxResizing(true)
        .transitionDuration(1500)
        .legend(dc.legend().x(1).y(0).itemHeight(15).gap(5));

    //print_filter(group);

}

/* Country function */

function show_country_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.pieChart("#country-chart")
        // .externalLabels(50)
        // .drawPaths(true)
        // .slicesCap(4)
        // .externalRadiusPadding(50)
        .dimension(dim)
        .group(group)
        .height(350)
        .width(300)
        .radius(200)
        .transitionDuration(1500);


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
        // .gap(10);
        .barPadding(0.2);

   // print_filter(group);

}

/*function show_text_widget(ndx) {
    var dim = ndx.dimension(function (d) { return d.Name + ' ' + d.Title; });
    
    
   var chart = dc.textFilterWidget("#search")
        .dimension(dim);
        
         var i = 0;
         
    dc.dataTable('.dc-data-grid')
        .dimension(dim)
        .showSections(false)
        .columns([
            function (d) {
                i = i + 1;
                return i;
            },
            function (d) {
                return d.Name;
            },
            function (d) {
                return d.Title;
            }])
        .on('renderlet', function (c) {
            i = 0;
        });
        
    print_filter(group);

}
*/
queue()
    .defer(d3.csv, "data/archive2.csv")
    .await(makeGraphs);

function print_filter(filter) {
    var f=eval(filter);
    if (typeof(f.length) != "undefined") {}else{}
    if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
    if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
    console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
}


function makeGraphs(error, archiveData) {
    var ndx = crossfilter(archiveData);


    show_country_pie(ndx);
   // show_category_pie(ndx);
    show_honor_pie(ndx);
    //show_category_bar(ndx);
    show_category_bar2(ndx);

    dc.renderAll();

}

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

/* function show_category_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Category'));
    var group = dim.group();

    dc.pieChart("#category-chart")
        .dimension(dim)
        .group(group)
        .height(350)
        .width(300)
        .radius(200)
        .transitionDuration(1500);
        
        //print_filter(group);
        
} */

function show_honor_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Honor'));
    var group = dim.group();

    dc.pieChart("#honor-chart")
        .dimension(dim)
        .group(group)
        .height(350)
        .width(300)
        .slicesCap(5)
        .radius(200)
        .transitionDuration(1500);
        
        //print_filter(group);
        
}

 /* function show_category_bar(ndx) {
    var categoryDimension= ndx.dimension(function(d){ return d.category});
    var categoryGroup = categoryDimension.group();
    
   dc.barChart("#bar-chart")
        .dimension(categoryDimension)
        .group(categoryGroup)
        .x(d3.scale.ordinal().domain(["Politics", "Economics"]))
        .xUnits(dc.units.ordinal);
        
  // print_filter(categoryDimension);
  // console.log(categoryDimension);     

} */


function show_category_bar2(ndx) {
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
        
         print_filter(group);

}
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
    show_year_selector(ndx);
    show_full_table(ndx);

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
       // .colorAccessor(function(d) {return d.value})
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
      //  .colors(d3.scale.ordinal().range(["#3182bc", "#fd8c3d", "#e6550e"]))
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
        .height(300)
        .dimension(dim)
        .group(group)
        .margins({ top: 50, right: 50, bottom: 50, left: 50 })
        .xAxisLabel("Category")
        .yAxisLabel("Number")
        .x(d3.scale.ordinal().domain(["Media", "War", "Society", "Technology", "Economics", "Space", "Diplomacy", "Politics", "Space", "Revolution", "Environment", "Religion", "Philanthropy", "Science", "Aviation"]))
        .xUnits(dc.units.ordinal)
        //.gap(10);
        .barPadding(0.2)
        .renderHorizontalGridLines(true);

    // print_filter(group);

}


function show_year_selector(ndx) {
    let dim = ndx.dimension(dc.pluck('Year'));
    let group = dim.group();

    dc.selectMenu("#year-selector")
        .dimension(dim)
        .group(group)
        .promptText("All years")
        .multiple(false);
}


function show_full_table(ndx) {

 var dim = ndx.dimension(function(d) { return d.dim; });
 
 var table = dc.dataTable("#dc-data-table")
 
        .dimension(dim)
        .width(200)
        .height(200)
        .group(function(d) { return ""; })
        .size(Infinity)
        .columns([
            function(d) { return d.Year; },
            function(d) { return d.Honor; },
            function(d) { return d.Name; },
            function(d) { return d.Title; },
            function(d) { return d.Category; },
            function(d) { return d.Country; },
            function(d) { return d.Context; },
        ]).sortBy(function(d) {
            return d.Year; 
        })
        .order(d3.ascending)
        .on('preRender', update_offset)
        .on('preRedraw', update_offset)
        .on('pretransition', display);
        
            var ofs = 0, pag = 7;

    function update_offset() {
        var totFilteredRecs = ndx.groupAll().value();
        var end = ofs + pag > totFilteredRecs ? totFilteredRecs : ofs + pag;
        ofs = ofs >= totFilteredRecs ? Math.floor((totFilteredRecs - 1) / pag) * pag : ofs;
        ofs = ofs < 0 ? 0 : ofs;
        table.beginSlice(ofs); 
        table.endSlice(ofs + pag);
        
}

function display() {
        var totFilteredRecs = ndx.groupAll().value();
        var end = ofs + pag > totFilteredRecs ? totFilteredRecs : ofs + pag;
        d3.select('#begin')
            .text(end === 0 ? ofs : ofs + 1);
        d3.select('#end')
            .text(end);
        d3.select('#last')
            .attr('disabled', ofs - pag < 0 ? 'true' : null);
        d3.select('#next')
            .attr('disabled', ofs + pag >= totFilteredRecs ? 'true' : null);
        d3.select('#size').text(totFilteredRecs);
        if (totFilteredRecs != ndx.size()) {
            d3.select('#totalsize').text("(filtered Total: " + ndx.size() + " )");
        }
        else {
            d3.select('#totalsize').text('');
        }
    }

    $('#next').on('click', function() {
        ofs += pag;
        update_offset();
        table.redraw();
    });
    /* Event Listener function that fires when "next" HTML btn is clicked */  


    $('#prev').on('click', function() {
        ofs -= pag;
        update_offset();
        table.redraw();
    });

}

 // W3Schools code 

$(document).ready(function(){
 $("button").click(function(){
    $("#instructions-fade").fadeToggle("slow");
  });
});

 // W3Schools code 

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});


 // W3Schools code 

$(document).ready(function(){
  $("#flip-1").click(function(){
    $("#panel-1").slideToggle("slow");
  });
});

 // W3Schools code 

$(document).ready(function(){
  $("#flip-2").click(function(){
    $("#panel-2").slideToggle("slow");
  });
});



$(document).ready(function(){
  $("#flip-3").click(function(){
    $("#panel-3").slideToggle("slow");
  });
});



$(document).ready(function(){
  $("#flip-4").click(function(){
    $("#panel-4").slideToggle("slow");
  });
});
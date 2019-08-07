{"filter":false,"title":"script.js","tooltip":"/js/script.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":75,"column":8},"end":{"row":84,"column":9},"action":"insert","lines":["chart.on('pretransition', function(chart) {","          chart.selectAll('.dc-legend-item text')","              .text('')","            .append('tspan')","              .text(function(d) { return d.name; })","            .append('tspan')","              .attr('x', 100)","              .attr('text-anchor', 'end')","              .text(function(d) { return d.data; });","      });"],"id":2575}],[{"start":{"row":67,"column":4},"end":{"row":67,"column":8},"action":"insert","lines":["    "],"id":2576},{"start":{"row":74,"column":0},"end":{"row":74,"column":8},"action":"remove","lines":["        "]},{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"remove","lines":["    "]},{"start":{"row":76,"column":0},"end":{"row":76,"column":1},"action":"remove","lines":[" "]},{"start":{"row":76,"column":8},"end":{"row":76,"column":9},"action":"remove","lines":[" "]},{"start":{"row":77,"column":12},"end":{"row":77,"column":14},"action":"remove","lines":["  "]},{"start":{"row":79,"column":0},"end":{"row":79,"column":1},"action":"remove","lines":[" "]},{"start":{"row":79,"column":12},"end":{"row":79,"column":13},"action":"remove","lines":[" "]},{"start":{"row":81,"column":0},"end":{"row":81,"column":2},"action":"remove","lines":["  "]},{"start":{"row":82,"column":12},"end":{"row":82,"column":14},"action":"remove","lines":["  "]},{"start":{"row":83,"column":0},"end":{"row":83,"column":2},"action":"remove","lines":["  "]},{"start":{"row":84,"column":0},"end":{"row":84,"column":2},"action":"remove","lines":["  "]},{"start":{"row":103,"column":6},"end":{"row":103,"column":8},"action":"insert","lines":["  "]},{"start":{"row":108,"column":1},"end":{"row":110,"column":0},"action":"remove","lines":["","",""]}],[{"start":{"row":79,"column":41},"end":{"row":79,"column":45},"action":"remove","lines":["name"],"id":2577},{"start":{"row":79,"column":41},"end":{"row":79,"column":42},"action":"insert","lines":["C"]},{"start":{"row":79,"column":42},"end":{"row":79,"column":43},"action":"insert","lines":["o"]},{"start":{"row":79,"column":43},"end":{"row":79,"column":44},"action":"insert","lines":["u"]},{"start":{"row":79,"column":44},"end":{"row":79,"column":45},"action":"insert","lines":["n"]},{"start":{"row":79,"column":45},"end":{"row":79,"column":46},"action":"insert","lines":["r"]},{"start":{"row":79,"column":46},"end":{"row":79,"column":47},"action":"insert","lines":["y"]}],[{"start":{"row":79,"column":46},"end":{"row":79,"column":47},"action":"remove","lines":["y"],"id":2578},{"start":{"row":79,"column":45},"end":{"row":79,"column":46},"action":"remove","lines":["r"]}],[{"start":{"row":79,"column":45},"end":{"row":79,"column":46},"action":"insert","lines":["t"],"id":2579},{"start":{"row":79,"column":46},"end":{"row":79,"column":47},"action":"insert","lines":["r"]},{"start":{"row":79,"column":47},"end":{"row":79,"column":48},"action":"insert","lines":["y"]}],[{"start":{"row":83,"column":41},"end":{"row":83,"column":45},"action":"remove","lines":["data"],"id":2580},{"start":{"row":83,"column":41},"end":{"row":83,"column":42},"action":"insert","lines":["N"]},{"start":{"row":83,"column":42},"end":{"row":83,"column":43},"action":"insert","lines":["a"]},{"start":{"row":83,"column":43},"end":{"row":83,"column":44},"action":"insert","lines":["m"]},{"start":{"row":83,"column":44},"end":{"row":83,"column":45},"action":"insert","lines":["e"]}],[{"start":{"row":73,"column":33},"end":{"row":74,"column":0},"action":"insert","lines":["",""],"id":2581},{"start":{"row":74,"column":0},"end":{"row":74,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":74,"column":8},"end":{"row":74,"column":29},"action":"insert","lines":[" .legend(dc.legend())"],"id":2582}],[{"start":{"row":74,"column":8},"end":{"row":74,"column":9},"action":"remove","lines":[" "],"id":2583}],[{"start":{"row":76,"column":4},"end":{"row":76,"column":5},"action":"insert","lines":["p"],"id":2584},{"start":{"row":76,"column":5},"end":{"row":76,"column":6},"action":"insert","lines":["i"]},{"start":{"row":76,"column":6},"end":{"row":76,"column":7},"action":"insert","lines":["e"]}],[{"start":{"row":77,"column":8},"end":{"row":77,"column":9},"action":"insert","lines":["p"],"id":2585},{"start":{"row":77,"column":9},"end":{"row":77,"column":10},"action":"insert","lines":["i"]},{"start":{"row":77,"column":10},"end":{"row":77,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":76,"column":4},"end":{"row":76,"column":5},"action":"insert","lines":["d"],"id":2586},{"start":{"row":76,"column":5},"end":{"row":76,"column":6},"action":"insert","lines":["c"]},{"start":{"row":76,"column":6},"end":{"row":76,"column":7},"action":"insert","lines":["."]}],[{"start":{"row":77,"column":8},"end":{"row":77,"column":9},"action":"insert","lines":["d"],"id":2587},{"start":{"row":77,"column":9},"end":{"row":77,"column":10},"action":"insert","lines":["c"]},{"start":{"row":77,"column":10},"end":{"row":77,"column":11},"action":"insert","lines":["."]}],[{"start":{"row":76,"column":0},"end":{"row":85,"column":7},"action":"remove","lines":["    dc.piechart.on('pretransition', function(chart) {","        dc.piechart.selectAll('.dc-legend-item text')","            .text('')","            .append('tspan')","            .text(function(d) { return d.Country; })","            .append('tspan')","            .attr('x', 100)","            .attr('text-anchor', 'end')","            .text(function(d) { return d.Name; });","    });"],"id":2588},{"start":{"row":75,"column":0},"end":{"row":76,"column":0},"action":"remove","lines":["",""]},{"start":{"row":74,"column":29},"end":{"row":75,"column":0},"action":"remove","lines":["",""]},{"start":{"row":74,"column":28},"end":{"row":74,"column":29},"action":"remove","lines":[";"]},{"start":{"row":74,"column":27},"end":{"row":74,"column":28},"action":"remove","lines":[")"]}],[{"start":{"row":74,"column":27},"end":{"row":74,"column":28},"action":"insert","lines":[";"],"id":2589}],[{"start":{"row":76,"column":0},"end":{"row":77,"column":0},"action":"insert","lines":["",""],"id":2590}],[{"start":{"row":76,"column":0},"end":{"row":77,"column":0},"action":"remove","lines":["",""],"id":2591},{"start":{"row":75,"column":0},"end":{"row":76,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":74,"column":26},"end":{"row":74,"column":27},"action":"insert","lines":[")"],"id":2592}],[{"start":{"row":66,"column":21},"end":{"row":66,"column":23},"action":"remove","lines":["80"],"id":2593},{"start":{"row":66,"column":21},"end":{"row":66,"column":22},"action":"insert","lines":["5"]},{"start":{"row":66,"column":22},"end":{"row":66,"column":23},"action":"insert","lines":["0"]}],[{"start":{"row":64,"column":7},"end":{"row":64,"column":8},"action":"insert","lines":["/"],"id":2594},{"start":{"row":64,"column":8},"end":{"row":64,"column":9},"action":"insert","lines":["/"]}],[{"start":{"row":65,"column":6},"end":{"row":65,"column":7},"action":"insert","lines":["/"],"id":2595},{"start":{"row":65,"column":7},"end":{"row":65,"column":8},"action":"insert","lines":["/"]}],[{"start":{"row":63,"column":7},"end":{"row":63,"column":8},"action":"insert","lines":["."],"id":2596},{"start":{"row":63,"column":8},"end":{"row":63,"column":9},"action":"insert","lines":["."]}],[{"start":{"row":63,"column":8},"end":{"row":63,"column":9},"action":"remove","lines":["."],"id":2597},{"start":{"row":63,"column":7},"end":{"row":63,"column":8},"action":"remove","lines":["."]}],[{"start":{"row":44,"column":19},"end":{"row":45,"column":0},"action":"insert","lines":["",""],"id":2598},{"start":{"row":45,"column":0},"end":{"row":45,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":45,"column":8},"end":{"row":45,"column":24},"action":"insert","lines":[".innerRadius(50)"],"id":2599}],[{"start":{"row":45,"column":6},"end":{"row":45,"column":24},"action":"remove","lines":["  .innerRadius(50)"],"id":2600},{"start":{"row":45,"column":5},"end":{"row":45,"column":6},"action":"remove","lines":[" "]},{"start":{"row":45,"column":4},"end":{"row":45,"column":5},"action":"remove","lines":[" "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"remove","lines":["    "]},{"start":{"row":44,"column":19},"end":{"row":45,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":74,"column":27},"end":{"row":74,"column":59},"action":"insert","lines":[".x(0).y(0).itemHeight(16).gap(3)"],"id":2601}],[{"start":{"row":74,"column":30},"end":{"row":74,"column":31},"action":"remove","lines":["0"],"id":2602}],[{"start":{"row":74,"column":30},"end":{"row":74,"column":31},"action":"insert","lines":["2"],"id":2603},{"start":{"row":74,"column":31},"end":{"row":74,"column":32},"action":"insert","lines":["0"]}],[{"start":{"row":66,"column":7},"end":{"row":66,"column":8},"action":"insert","lines":["/"],"id":2604},{"start":{"row":66,"column":8},"end":{"row":66,"column":9},"action":"insert","lines":["/"]}],[{"start":{"row":74,"column":31},"end":{"row":74,"column":32},"action":"remove","lines":["0"],"id":2605},{"start":{"row":74,"column":30},"end":{"row":74,"column":31},"action":"remove","lines":["2"]}],[{"start":{"row":74,"column":30},"end":{"row":74,"column":31},"action":"insert","lines":["3"],"id":2606},{"start":{"row":74,"column":31},"end":{"row":74,"column":32},"action":"insert","lines":["0"]}],[{"start":{"row":74,"column":31},"end":{"row":74,"column":32},"action":"remove","lines":["0"],"id":2607},{"start":{"row":74,"column":30},"end":{"row":74,"column":31},"action":"remove","lines":["3"]}],[{"start":{"row":74,"column":30},"end":{"row":74,"column":31},"action":"insert","lines":["4"],"id":2608},{"start":{"row":74,"column":31},"end":{"row":74,"column":32},"action":"insert","lines":["0"]}],[{"start":{"row":40,"column":2},"end":{"row":40,"column":3},"action":"insert","lines":["/"],"id":2609},{"start":{"row":40,"column":3},"end":{"row":40,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":40,"column":3},"end":{"row":40,"column":4},"action":"remove","lines":["/"],"id":2610},{"start":{"row":40,"column":2},"end":{"row":40,"column":3},"action":"remove","lines":["/"]}],[{"start":{"row":43,"column":16},"end":{"row":43,"column":19},"action":"remove","lines":["300"],"id":2611},{"start":{"row":43,"column":16},"end":{"row":43,"column":17},"action":"insert","lines":["2"]},{"start":{"row":43,"column":17},"end":{"row":43,"column":18},"action":"insert","lines":["5"]},{"start":{"row":43,"column":18},"end":{"row":43,"column":19},"action":"insert","lines":["0"]}],[{"start":{"row":70,"column":16},"end":{"row":70,"column":19},"action":"remove","lines":["300"],"id":2612},{"start":{"row":70,"column":16},"end":{"row":70,"column":17},"action":"insert","lines":["2"]},{"start":{"row":70,"column":17},"end":{"row":70,"column":18},"action":"insert","lines":["5"]},{"start":{"row":70,"column":18},"end":{"row":70,"column":19},"action":"insert","lines":["0"]}],[{"start":{"row":74,"column":30},"end":{"row":74,"column":31},"action":"remove","lines":["4"],"id":2613}],[{"start":{"row":74,"column":57},"end":{"row":74,"column":58},"action":"remove","lines":["3"],"id":2614}],[{"start":{"row":74,"column":57},"end":{"row":74,"column":58},"action":"insert","lines":["2"],"id":2615}],[{"start":{"row":50,"column":57},"end":{"row":50,"column":58},"action":"remove","lines":["3"],"id":2616}],[{"start":{"row":50,"column":57},"end":{"row":50,"column":58},"action":"insert","lines":["2"],"id":2617}],[{"start":{"row":70,"column":16},"end":{"row":70,"column":19},"action":"remove","lines":["250"],"id":2618},{"start":{"row":70,"column":16},"end":{"row":70,"column":17},"action":"insert","lines":["3"]},{"start":{"row":70,"column":17},"end":{"row":70,"column":18},"action":"insert","lines":["0"]},{"start":{"row":70,"column":18},"end":{"row":70,"column":19},"action":"insert","lines":["0"]}],[{"start":{"row":70,"column":16},"end":{"row":70,"column":19},"action":"remove","lines":["300"],"id":2619},{"start":{"row":70,"column":16},"end":{"row":70,"column":17},"action":"insert","lines":["3"]},{"start":{"row":70,"column":17},"end":{"row":70,"column":18},"action":"insert","lines":["5"]},{"start":{"row":70,"column":18},"end":{"row":70,"column":19},"action":"insert","lines":["0"]}],[{"start":{"row":70,"column":18},"end":{"row":70,"column":19},"action":"remove","lines":["0"],"id":2620},{"start":{"row":70,"column":17},"end":{"row":70,"column":18},"action":"remove","lines":["5"]},{"start":{"row":70,"column":16},"end":{"row":70,"column":17},"action":"remove","lines":["3"]}],[{"start":{"row":70,"column":16},"end":{"row":70,"column":17},"action":"insert","lines":["4"],"id":2621},{"start":{"row":70,"column":17},"end":{"row":70,"column":18},"action":"insert","lines":["0"]},{"start":{"row":70,"column":18},"end":{"row":70,"column":19},"action":"insert","lines":["0"]}],[{"start":{"row":70,"column":16},"end":{"row":70,"column":19},"action":"remove","lines":["400"],"id":2622},{"start":{"row":70,"column":16},"end":{"row":70,"column":17},"action":"insert","lines":["4"]},{"start":{"row":70,"column":17},"end":{"row":70,"column":18},"action":"insert","lines":["5"]},{"start":{"row":70,"column":18},"end":{"row":70,"column":19},"action":"insert","lines":["0"]}],[{"start":{"row":43,"column":16},"end":{"row":43,"column":19},"action":"remove","lines":["250"],"id":2623},{"start":{"row":43,"column":16},"end":{"row":43,"column":17},"action":"insert","lines":["3"]},{"start":{"row":43,"column":17},"end":{"row":43,"column":18},"action":"insert","lines":["0"]},{"start":{"row":43,"column":18},"end":{"row":43,"column":19},"action":"insert","lines":["0"]}],[{"start":{"row":98,"column":0},"end":{"row":99,"column":0},"action":"insert","lines":["",""],"id":2624},{"start":{"row":99,"column":0},"end":{"row":100,"column":0},"action":"insert","lines":["",""]},{"start":{"row":100,"column":0},"end":{"row":101,"column":0},"action":"insert","lines":["",""]},{"start":{"row":101,"column":0},"end":{"row":102,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":102,"column":0},"end":{"row":114,"column":1},"action":"insert","lines":["function showRegionSelector(dataFor2017) {","    let dim = dataFor2017.dimension(dc.pluck(\"region\"));","    let group = dim.group();","","    dc.selectMenu(\"#region-selector\")","        .dimension(dim)","        .group(group)","        .promptText(\"All regions\")","        .multiple(false)","        .title(function(d) {","            return d.key;","        });","}"],"id":2625}],[{"start":{"row":102,"column":28},"end":{"row":102,"column":39},"action":"remove","lines":["dataFor2017"],"id":2626},{"start":{"row":102,"column":28},"end":{"row":102,"column":29},"action":"insert","lines":["n"]},{"start":{"row":102,"column":29},"end":{"row":102,"column":30},"action":"insert","lines":["d"]},{"start":{"row":102,"column":30},"end":{"row":102,"column":31},"action":"insert","lines":["x"]}],[{"start":{"row":102,"column":13},"end":{"row":102,"column":27},"action":"remove","lines":["RegionSelector"],"id":2627},{"start":{"row":102,"column":13},"end":{"row":102,"column":14},"action":"insert","lines":["n"]},{"start":{"row":102,"column":14},"end":{"row":102,"column":15},"action":"insert","lines":["a"]},{"start":{"row":102,"column":15},"end":{"row":102,"column":16},"action":"insert","lines":["m"]},{"start":{"row":102,"column":16},"end":{"row":102,"column":17},"action":"insert","lines":["e"]}],[{"start":{"row":102,"column":16},"end":{"row":102,"column":17},"action":"remove","lines":["e"],"id":2628},{"start":{"row":102,"column":15},"end":{"row":102,"column":16},"action":"remove","lines":["m"]},{"start":{"row":102,"column":14},"end":{"row":102,"column":15},"action":"remove","lines":["a"]},{"start":{"row":102,"column":13},"end":{"row":102,"column":14},"action":"remove","lines":["n"]}],[{"start":{"row":102,"column":13},"end":{"row":102,"column":14},"action":"insert","lines":["_"],"id":2629},{"start":{"row":102,"column":14},"end":{"row":102,"column":15},"action":"insert","lines":["y"]},{"start":{"row":102,"column":15},"end":{"row":102,"column":16},"action":"insert","lines":["e"]},{"start":{"row":102,"column":16},"end":{"row":102,"column":17},"action":"insert","lines":["a"]},{"start":{"row":102,"column":17},"end":{"row":102,"column":18},"action":"insert","lines":["r"]},{"start":{"row":102,"column":18},"end":{"row":102,"column":19},"action":"insert","lines":["_"]}],[{"start":{"row":102,"column":19},"end":{"row":102,"column":20},"action":"insert","lines":["s"],"id":2630},{"start":{"row":102,"column":20},"end":{"row":102,"column":21},"action":"insert","lines":["e"]},{"start":{"row":102,"column":21},"end":{"row":102,"column":22},"action":"insert","lines":["l"]},{"start":{"row":102,"column":22},"end":{"row":102,"column":23},"action":"insert","lines":["e"]},{"start":{"row":102,"column":23},"end":{"row":102,"column":24},"action":"insert","lines":["c"]},{"start":{"row":102,"column":24},"end":{"row":102,"column":25},"action":"insert","lines":["t"]},{"start":{"row":102,"column":25},"end":{"row":102,"column":26},"action":"insert","lines":["o"]},{"start":{"row":102,"column":26},"end":{"row":102,"column":27},"action":"insert","lines":["r"]}],[{"start":{"row":103,"column":14},"end":{"row":103,"column":55},"action":"remove","lines":["dataFor2017.dimension(dc.pluck(\"region\"))"],"id":2631},{"start":{"row":103,"column":14},"end":{"row":103,"column":15},"action":"insert","lines":["n"]},{"start":{"row":103,"column":15},"end":{"row":103,"column":16},"action":"insert","lines":["d"]},{"start":{"row":103,"column":16},"end":{"row":103,"column":17},"action":"insert","lines":["x"]},{"start":{"row":103,"column":17},"end":{"row":103,"column":18},"action":"insert","lines":["."]}],[{"start":{"row":103,"column":18},"end":{"row":103,"column":19},"action":"insert","lines":["d"],"id":2632},{"start":{"row":103,"column":19},"end":{"row":103,"column":20},"action":"insert","lines":["i"]},{"start":{"row":103,"column":20},"end":{"row":103,"column":21},"action":"insert","lines":["m"]},{"start":{"row":103,"column":21},"end":{"row":103,"column":22},"action":"insert","lines":["e"]},{"start":{"row":103,"column":22},"end":{"row":103,"column":23},"action":"insert","lines":["n"]},{"start":{"row":103,"column":23},"end":{"row":103,"column":24},"action":"insert","lines":["s"]},{"start":{"row":103,"column":24},"end":{"row":103,"column":25},"action":"insert","lines":["i"]},{"start":{"row":103,"column":25},"end":{"row":103,"column":26},"action":"insert","lines":["o"]}],[{"start":{"row":103,"column":26},"end":{"row":103,"column":27},"action":"insert","lines":["n"],"id":2633}],[{"start":{"row":103,"column":27},"end":{"row":103,"column":29},"action":"insert","lines":["()"],"id":2634}],[{"start":{"row":103,"column":28},"end":{"row":103,"column":29},"action":"insert","lines":["d"],"id":2635},{"start":{"row":103,"column":29},"end":{"row":103,"column":30},"action":"insert","lines":["c"]},{"start":{"row":103,"column":30},"end":{"row":103,"column":31},"action":"insert","lines":["."]},{"start":{"row":103,"column":31},"end":{"row":103,"column":32},"action":"insert","lines":["p"]},{"start":{"row":103,"column":32},"end":{"row":103,"column":33},"action":"insert","lines":["u"]}],[{"start":{"row":103,"column":32},"end":{"row":103,"column":33},"action":"remove","lines":["u"],"id":2636}],[{"start":{"row":103,"column":32},"end":{"row":103,"column":33},"action":"insert","lines":["l"],"id":2637},{"start":{"row":103,"column":33},"end":{"row":103,"column":34},"action":"insert","lines":["u"]},{"start":{"row":103,"column":34},"end":{"row":103,"column":35},"action":"insert","lines":["c"]},{"start":{"row":103,"column":35},"end":{"row":103,"column":36},"action":"insert","lines":["k"]}],[{"start":{"row":103,"column":36},"end":{"row":103,"column":38},"action":"insert","lines":["()"],"id":2638}],[{"start":{"row":103,"column":37},"end":{"row":103,"column":39},"action":"insert","lines":["''"],"id":2639}],[{"start":{"row":103,"column":38},"end":{"row":103,"column":39},"action":"insert","lines":["Y"],"id":2640},{"start":{"row":103,"column":39},"end":{"row":103,"column":40},"action":"insert","lines":["e"]},{"start":{"row":103,"column":40},"end":{"row":103,"column":41},"action":"insert","lines":["a"]},{"start":{"row":103,"column":41},"end":{"row":103,"column":42},"action":"insert","lines":["r"]}],[{"start":{"row":106,"column":25},"end":{"row":106,"column":26},"action":"remove","lines":["n"],"id":2641},{"start":{"row":106,"column":24},"end":{"row":106,"column":25},"action":"remove","lines":["o"]},{"start":{"row":106,"column":23},"end":{"row":106,"column":24},"action":"remove","lines":["i"]},{"start":{"row":106,"column":22},"end":{"row":106,"column":23},"action":"remove","lines":["g"]},{"start":{"row":106,"column":21},"end":{"row":106,"column":22},"action":"remove","lines":["e"]},{"start":{"row":106,"column":20},"end":{"row":106,"column":21},"action":"remove","lines":["r"]}],[{"start":{"row":106,"column":20},"end":{"row":106,"column":21},"action":"insert","lines":["y"],"id":2642},{"start":{"row":106,"column":21},"end":{"row":106,"column":22},"action":"insert","lines":["e"]},{"start":{"row":106,"column":22},"end":{"row":106,"column":23},"action":"insert","lines":["a"]},{"start":{"row":106,"column":23},"end":{"row":106,"column":24},"action":"insert","lines":["r"]}],[{"start":{"row":112,"column":23},"end":{"row":112,"column":24},"action":"remove","lines":["y"],"id":2643},{"start":{"row":112,"column":22},"end":{"row":112,"column":23},"action":"remove","lines":["e"]},{"start":{"row":112,"column":21},"end":{"row":112,"column":22},"action":"remove","lines":["k"]}],[{"start":{"row":112,"column":21},"end":{"row":112,"column":22},"action":"insert","lines":["y"],"id":2644},{"start":{"row":112,"column":22},"end":{"row":112,"column":23},"action":"insert","lines":["e"]},{"start":{"row":112,"column":23},"end":{"row":112,"column":24},"action":"insert","lines":["a"]},{"start":{"row":112,"column":24},"end":{"row":112,"column":25},"action":"insert","lines":["r"]}],[{"start":{"row":24,"column":27},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":2645},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":27},"action":"insert","lines":["show_year_selector(ndx)"],"id":2646}],[{"start":{"row":25,"column":27},"end":{"row":25,"column":28},"action":"insert","lines":[";"],"id":2647}],[{"start":{"row":110,"column":25},"end":{"row":110,"column":32},"action":"remove","lines":["regions"],"id":2648},{"start":{"row":110,"column":25},"end":{"row":110,"column":26},"action":"insert","lines":["y"]},{"start":{"row":110,"column":26},"end":{"row":110,"column":27},"action":"insert","lines":["e"]},{"start":{"row":110,"column":27},"end":{"row":110,"column":28},"action":"insert","lines":["a"]},{"start":{"row":110,"column":28},"end":{"row":110,"column":29},"action":"insert","lines":["r"]},{"start":{"row":110,"column":29},"end":{"row":110,"column":30},"action":"insert","lines":["s"]}],[{"start":{"row":113,"column":24},"end":{"row":113,"column":25},"action":"remove","lines":["r"],"id":2649},{"start":{"row":113,"column":23},"end":{"row":113,"column":24},"action":"remove","lines":["a"]},{"start":{"row":113,"column":22},"end":{"row":113,"column":23},"action":"remove","lines":["e"]},{"start":{"row":113,"column":21},"end":{"row":113,"column":22},"action":"remove","lines":["y"]}],[{"start":{"row":113,"column":21},"end":{"row":113,"column":22},"action":"insert","lines":["N"],"id":2650}],[{"start":{"row":113,"column":21},"end":{"row":113,"column":22},"action":"remove","lines":["N"],"id":2651}],[{"start":{"row":113,"column":21},"end":{"row":113,"column":22},"action":"insert","lines":["Y"],"id":2652},{"start":{"row":113,"column":22},"end":{"row":113,"column":23},"action":"insert","lines":["e"]},{"start":{"row":113,"column":23},"end":{"row":113,"column":24},"action":"insert","lines":["a"]},{"start":{"row":113,"column":24},"end":{"row":113,"column":25},"action":"insert","lines":["r"]}],[{"start":{"row":111,"column":18},"end":{"row":111,"column":23},"action":"remove","lines":["false"],"id":2653},{"start":{"row":111,"column":18},"end":{"row":111,"column":19},"action":"insert","lines":["t"]},{"start":{"row":111,"column":19},"end":{"row":111,"column":20},"action":"insert","lines":["r"]},{"start":{"row":111,"column":20},"end":{"row":111,"column":21},"action":"insert","lines":["u"]},{"start":{"row":111,"column":21},"end":{"row":111,"column":22},"action":"insert","lines":["e"]}],[{"start":{"row":111,"column":18},"end":{"row":111,"column":22},"action":"remove","lines":["true"],"id":2654},{"start":{"row":111,"column":18},"end":{"row":111,"column":19},"action":"insert","lines":["f"]},{"start":{"row":111,"column":19},"end":{"row":111,"column":20},"action":"insert","lines":["a"]},{"start":{"row":111,"column":20},"end":{"row":111,"column":21},"action":"insert","lines":["l"]},{"start":{"row":111,"column":21},"end":{"row":111,"column":22},"action":"insert","lines":["s"]},{"start":{"row":111,"column":22},"end":{"row":111,"column":23},"action":"insert","lines":["e"]}],[{"start":{"row":103,"column":0},"end":{"row":103,"column":1},"action":"insert","lines":["/"],"id":2655},{"start":{"row":103,"column":1},"end":{"row":103,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":115,"column":1},"end":{"row":115,"column":2},"action":"insert","lines":["*"],"id":2656},{"start":{"row":115,"column":2},"end":{"row":115,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"insert","lines":["/"],"id":2657},{"start":{"row":25,"column":3},"end":{"row":25,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":103,"column":1},"end":{"row":103,"column":2},"action":"remove","lines":["*"],"id":2658},{"start":{"row":103,"column":0},"end":{"row":103,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":115,"column":2},"end":{"row":115,"column":3},"action":"remove","lines":["/"],"id":2659},{"start":{"row":115,"column":1},"end":{"row":115,"column":2},"action":"remove","lines":["*"]}],[{"start":{"row":110,"column":7},"end":{"row":110,"column":8},"action":"insert","lines":["/"],"id":2660},{"start":{"row":110,"column":8},"end":{"row":110,"column":9},"action":"insert","lines":["/"]}],[{"start":{"row":111,"column":7},"end":{"row":111,"column":8},"action":"insert","lines":["/"],"id":2661},{"start":{"row":111,"column":8},"end":{"row":111,"column":9},"action":"insert","lines":["/"]}],[{"start":{"row":112,"column":7},"end":{"row":112,"column":8},"action":"insert","lines":["/"],"id":2662},{"start":{"row":112,"column":8},"end":{"row":112,"column":9},"action":"insert","lines":["/"]}],[{"start":{"row":113,"column":6},"end":{"row":113,"column":7},"action":"insert","lines":["/"],"id":2663},{"start":{"row":113,"column":7},"end":{"row":113,"column":8},"action":"insert","lines":["/"]}],[{"start":{"row":114,"column":5},"end":{"row":114,"column":6},"action":"insert","lines":["/"],"id":2664},{"start":{"row":114,"column":6},"end":{"row":114,"column":7},"action":"insert","lines":["/"]}],[{"start":{"row":25,"column":3},"end":{"row":25,"column":4},"action":"remove","lines":["/"],"id":2665},{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"remove","lines":["/"]}],[{"start":{"row":110,"column":9},"end":{"row":110,"column":10},"action":"remove","lines":[" "],"id":2666},{"start":{"row":110,"column":8},"end":{"row":110,"column":9},"action":"remove","lines":["/"]},{"start":{"row":110,"column":7},"end":{"row":110,"column":8},"action":"remove","lines":["/"]}],[{"start":{"row":110,"column":7},"end":{"row":110,"column":8},"action":"insert","lines":[" "],"id":2667}],[{"start":{"row":111,"column":8},"end":{"row":111,"column":9},"action":"remove","lines":["/"],"id":2668},{"start":{"row":111,"column":7},"end":{"row":111,"column":8},"action":"remove","lines":["/"]}],[{"start":{"row":112,"column":8},"end":{"row":112,"column":9},"action":"remove","lines":["/"],"id":2669},{"start":{"row":112,"column":7},"end":{"row":112,"column":8},"action":"remove","lines":["/"]}],[{"start":{"row":113,"column":7},"end":{"row":113,"column":8},"action":"remove","lines":["/"],"id":2670},{"start":{"row":113,"column":6},"end":{"row":113,"column":7},"action":"remove","lines":["/"]}],[{"start":{"row":114,"column":6},"end":{"row":114,"column":7},"action":"remove","lines":["/"],"id":2671},{"start":{"row":114,"column":5},"end":{"row":114,"column":6},"action":"remove","lines":["/"]}],[{"start":{"row":112,"column":7},"end":{"row":112,"column":8},"action":"insert","lines":["/"],"id":2672},{"start":{"row":112,"column":8},"end":{"row":112,"column":9},"action":"insert","lines":["/"]}],[{"start":{"row":113,"column":10},"end":{"row":113,"column":11},"action":"insert","lines":["/"],"id":2673},{"start":{"row":113,"column":11},"end":{"row":113,"column":12},"action":"insert","lines":["/"]}],[{"start":{"row":114,"column":7},"end":{"row":114,"column":8},"action":"insert","lines":["/"],"id":2674},{"start":{"row":114,"column":8},"end":{"row":114,"column":9},"action":"insert","lines":["/"]}],[{"start":{"row":115,"column":1},"end":{"row":116,"column":0},"action":"insert","lines":["",""],"id":2675},{"start":{"row":116,"column":0},"end":{"row":117,"column":0},"action":"insert","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":1570,"scrollleft":0,"selection":{"start":{"row":117,"column":0},"end":{"row":117,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":97,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1565207255464,"hash":"f6a70e242e0c89bc1249951897ead2d8993cf6b9"}
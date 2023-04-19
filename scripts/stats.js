window.onload = function() {
    fetch('Words.csv')
    .then((response) => response.text())

    .then(function(content) {
        let row = content.split('\n');
        const array = [];
        for(var i = 1; i < row.length; i++) { 
            let student = row[i].split(',');
            var temp = (((parseFloat(student[1]) + parseFloat(student[2]) + parseFloat(student[3]))/3) + ((parseFloat(student[4]) + parseFloat(student[5])) / 20)) / 2;
            array.push(temp);
        }
        var markA = 0;
        var markB = 0;
        var markC = 0;
        var markD = 0;
        var markF = 0;
        for(var i = 0; i <= array.length; i++) {
            var tempanother = getGrade(array[i]);
            if (tempanother == 'A') {
                markA = markA + 1;
            } else if (tempanother == 'B') {
                markB = markB + 1;
            } else if (tempanother == 'C') {
                markC = markC + 1;
            } else if (tempanother == 'randVar') {
                markD = markD + 1;
            } else {
                markF = markF + 1;
            }
        }

        //creating new
        var total = markA + markB + markC + markD + markF;
        newA = markA/total;
        newB = markB/total;
        newC = markC/total;
        newD = markD/total;
        newF = markF/total;
        const studentGrades = [
            { grade: 'A', mark: newA },
            { grade: 'B', mark: newB },
            { grade: 'C', mark: newC },
            { grade: 'D', mark: newD },
            { grade: 'F', mark: newF },
        ];
        
        var one = 50;
        var two = 500;
        var three = 500;
        const svg = d3.select('#BarGraph')
            .append('svg')
            .attr('width', two)
            .attr('height', three)
            .attr("viewBox", [0, 0, two, three]);

        const x = d3.scaleBand()
            .padding(0.5)
            .domain(d3.range(studentGrades.length))
            .range([one, two - one])
        const y = d3.scaleLinear()
            .domain([0, 1])
            .range([three - one, one])

        function yAxis(temp1) {
            temp1.attr("transform", `translate(${one}, 0)`)
            .attr("font-size", '15px')
            .call(d3.axisLeft(y).ticks(null, studentGrades.format))
        }
        
        function xAxis(temp1) {
            temp1.attr("transform", `translate(0,${three - one})`)
            .attr("font-size", '15px')
            .call(d3.axisBottom(x).tickFormat(i => studentGrades[i].grade))
        }

        svg.append("g")
            .selectAll("rect")
            .data(studentGrades)
            .join("rect")
            .attr("fill",'lavender')
            .attr("y",randVar => y(randVar.mark)).attr('title',(randVar)=>randVar.mark)
            .attr("x",(randVar, i)=>x(i))
            .attr("class","rect")
            .attr("height",randVar=>y(0)-y(randVar.mark)).attr("width",x.bandwidth());
        svg.append("text")
            .attr("transform","rotate(-90)")
            .attr("x",-(three/2)).attr("y",15)
            .style("text-anchor","middle")
            .text("Frequency");
        svg.append("text").attr("x",two/2).attr("y",one).attr("text-anchor","middle").style("font-size","30px").text("Grades");
        svg.append("text").attr("transform","translate(" + (two / 2) + " ," + (three - 8) + ")").style("text-anchor", "middle").text("Letter Grade");
        svg.append("g").call(yAxis);
        svg.append("g").call(xAxis);
        svg.node();

        function getGrade(mark) {
            if (mark < 5.0) {
                return 'F';
            } else if (mark < 6.0) {
                return 'D';
            } else if (mark < 7.0) {
                return 'C';
            } else if (mark < 8.0) {
                return 'B';
            } else {
                return 'A';
            }
        }
        
    });
}
// Google Charts Code
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawGoogleChart);

function drawGoogleChart() {
    var data = google.visualization.arrayToDataTable([
        ['Phase', 'Percentage'],
        ['Educational', 30],
        ['Photoshoot', 20],
        ['Workshop', 30],
        ['Sports', 10],
        ['Miscalleneus', 10]
    ]);

    var options = {
        title: 'Cognitive Application Development Phases',
        pieHole: 0.4,
        colors: ['#8bc34a', '#ff9800', '#2196f3', '#f44336', '#9c27b0'],
        chartArea: {width: '80%', height: '80%'},
        legend: {position: 'bottom'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

// D3.js Code
const data = [
    { iteration: 'Iteration 1', accuracy: 0.75 },
    { iteration: 'Iteration 2', accuracy: 0.80 },
    { iteration: 'Iteration 3', accuracy: 0.85 },
    { iteration: 'Iteration 4', accuracy: 0.90 }
];

const margin = {top: 20, right: 30, bottom: 40, left: 90};
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

const svg = d3.select("#d3-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width]);

const y = d3.scaleBand()
    .domain(data.map(d => d.iteration))
    .range([0, height])
    .padding(0.1);

svg.append("g")
    .call(d3.axisLeft(y));

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0))
    .attr("y", d => y(d.iteration))
    .attr("width", d => x(d.accuracy))
    .attr("height", y.bandwidth())
    .attr("fill", "steelblue");

svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).ticks(5).tickFormat(d3.format(".0%")));

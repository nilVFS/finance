var data = {
    labels: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль"],
    datasets: [{
    label: "Доходы",
    backgroundColor: "rgba(118, 101, 255, 0.2)",
    borderColor: "rgba(224, 101, 255, 1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(118, 101, 255,0.4)",
    hoverBorderColor: "rgba(224, 101, 255, 1)",
    data: [32500, 41762, 38762, 43782, 41882, 36772, 42700],
    fill: "start",
    pointRadius: 5,
    }]
};

var options = {
    maintainAspectRatio: false,
    scales: {
        y: {
            min: 0,
            max: 50000,
            stacked: true,
            grid: {
            display: true,
            color: "rgba(118, 101, 255,0.2)"
            }
        },
            x: {
            grid: {
            display: false
            }
        }
    },
    plugins: {

        tooltip: {
            backgroundColor: "rgba(224, 101, 255, 0.2)"
        },

        legend: {
            display: false,
        }
    },

    elements: {
        line: {
            tension: 0.3,
        }
    }
};

new Chart('revenue', {
    type: 'line',
    options: options,
    data: data
});
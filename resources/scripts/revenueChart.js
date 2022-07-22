
var data = {
    labels: ["Авг", "Сент", "Окт", "Ноя", "Дек", "Янв", "Фев"],
    datasets: [{
    label: "Доходы",
    backgroundColor: "rgba(118, 101, 255, 0.2)",
    borderColor: "rgba(224, 101, 255, 1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(118, 101, 255,0.4)",
    hoverBorderColor: "rgba(224, 101, 255, 1)",
    data: [32500, 41762, 38762, 43782, 41882, 36772, 39835],
    fill: "start",
    pointStyle: "rectRounded",
    }]
};

var options = {
    maintainAspectRatio: false,
    scales: {
        y: {
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
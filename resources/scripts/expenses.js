var data = {
    labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    datasets: [{
    label: "Траты",
    backgroundColor: "rgba(224, 101, 255, 0.7)",
    borderColor: "rgba(224, 101, 255, 1)",
    borderWidth: 0,
    hoverBackgroundColor: "rgba(224, 101, 255, 1)",
    hoverBorderColor: "rgba(224, 101, 255, 1)",
    data: [3000, 4000, 6200, 4700, 3450, 6000, 5600],
    borderRadius: 15,
    barThickness: 15,
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
            backgroundColor: "rgba(118, 101, 255, 0.7)"
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

new Chart('expenses', {
    type: 'bar',
    options: options,
    data: data
});
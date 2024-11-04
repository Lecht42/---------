import runSearchTests  from "./runSearchTest.js";

const results = runSearchTests();

function createChart(ctx, data, title) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.sizes,
            datasets: [
                {
                    label: 'Кількість порівнянь',
                    data: data.comparisons,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: title }
            },
            scales: {
                x: { title: { display: true, text: 'Розмір масиву' } },
                y: { title: { display: true, text: 'Кількість порівнянь' } }
            }
        }
    });
}

function getDataForChart(algorithm) {
    let sizes = [], comparisons = [];
    results[algorithm].forEach(entry => {
        sizes.push(entry.size);
        comparisons.push(entry.comparisons);
    });
    return { sizes, comparisons };
}

window.onload = function() {
    createChart(document.getElementById('linearChart').getContext('2d'), getDataForChart('linear'), 'Лінійний пошук');
    createChart(document.getElementById('binaryChart').getContext('2d'), getDataForChart('binary'), 'Бінарний пошук');
    createChart(document.getElementById('interpolationChart').getContext('2d'), getDataForChart('interpolation'), 'Пошук методом інтерполяції');
};

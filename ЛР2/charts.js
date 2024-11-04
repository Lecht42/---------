function createChart(ctx, data, title) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.sizes,
      datasets: [
        {
          label: "Випадковий набір",
          data: data.random,
          borderColor: "rgba(75, 192, 192, 1)",
          fill: false,
        },
        {
          label: "Майже відсортований набір",
          data: data.almost_sorted,
          borderColor: "rgba(153, 102, 255, 1)",
          fill: false,
        },
        {
          label: "Відсортований в зворотному порядку",
          data: data.reversed,
          borderColor: "rgba(255, 99, 132, 1)",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
        title: { display: true, text: title },
      },
      scales: {
        x: { title: { display: true, text: "Розмір масиву" } },
        y: {
          title: { display: true, text: "Кількість порівнянь/перестановок" },
        },
      },
    },
  });
}

function getDataForChart(algorithm, results) {
  let sizes = [],
    random = [],
    almost_sorted = [],
    reversed = [];
  results[algorithm].forEach((entry) => {
    if (!sizes.includes(entry.size)) sizes.push(entry.size);
    if (entry.type === "random") random.push(entry.comparisons);
    if (entry.type === "almost_sorted") almost_sorted.push(entry.comparisons);
    if (entry.type === "reversed") reversed.push(entry.comparisons);
  });
  return { sizes, random, almost_sorted, reversed };
}

window.onload = function () {
  const results = runSortTests();

  createChart(
    document.getElementById("bubbleSortChart").getContext("2d"),
    getDataForChart("bubble", results),
    "Bubble Sort",
  );
  createChart(
    document.getElementById("selectionSortChart").getContext("2d"),
    getDataForChart("selection", results),
    "Selection Sort",
  );
  createChart(
    document.getElementById("insertionSortChart").getContext("2d"),
    getDataForChart("insertion", results),
    "Insertion Sort",
  );
  createChart(
    document.getElementById("quickSortChart").getContext("2d"),
    getDataForChart("quick", results),
    "Quick Sort",
  );
  createChart(
    document.getElementById("mergeSortChart").getContext("2d"),
    getDataForChart("merge", results),
    "Merge Sort",
  );
};

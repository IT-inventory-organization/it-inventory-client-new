<template>
  <div id="chart">
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="chartOptions.series"
    />
  </div>
</template>

<script>
export default {
  name: "InventoryChart",
  computed: {
    chartOptions: function() {
      return {
        colors: ["#5682FF", "#F27B61"],
        legend: {
          fontSize: "14px",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
          itemMargin: {
            vertical: 10,
          },
          position: "bottom",
        },
        dataLabels: {
          enabled: true,
        },
        labels: ["Export", "Import"],
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "18px",
                  fontFamily: "Rubik, sans-serif",
                  color: "#5682FF",
                  offsetY: -10,
                },
                value: {
                  show: true,
                  fontSize: "16px",
                  fontFamily: "Rubik, sans-serif",
                  color: undefined,
                  offsetY: 2,
                  formatter: function(val) {
                    return val;
                  },
                },
                total: {
                  show: true,
                  label: "Total",
                  color: "#5682FF",
                  fontSize: "16px",
                  formatter: function(w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);
                  },
                },
              },
            },
          },
        },
        responsive: [],
        series: [1250, 4500],
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>


<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "BarChart",
  props: ["data"],
  mounted() {
    // reformat in the way the lib wants
    let chartData = {
      labels: [],
      datasets: [
        {
          label: "New",
          backgroundColor: "#f87979",
          data: []
        },
      
      ]
    };

    for (let i = 0; i < this.data.length; i++) {
      chartData.labels.push(this.data[i].date);
      chartData.datasets[0].data.push(this.data[i].new);
      
    }

    this.renderChart(chartData, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
      
      }
    });
  }
};
</script>

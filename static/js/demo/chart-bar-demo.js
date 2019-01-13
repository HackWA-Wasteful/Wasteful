// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Waste", "Recycle", "Compost"],
    datasets: [{      
      backgroundColor: [
        "rgba(255, 0, 0, 1)",
        "rgba(2, 117, 216, 1)",
        "rgba(255, 206, 86, 1)", 
    ],
      borderColor: "rgba(2,117,216,1)",
      data: [30, 25, 75]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Label'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 4
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

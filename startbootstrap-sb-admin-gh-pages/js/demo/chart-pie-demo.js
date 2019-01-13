// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var waste = 40;
var recycle = 35;
var compost = 25;

var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Waste", "Recycle", "Compost"],
    datasets: [{
      data: [waste, recycle, compost],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107'],
    }],
  },
});

var status = document.getElementById("status");
var messageStat = document.getElementById("messageStat");
if (waste >= 50) {
  $("#status").html("Your waste is high");
  $("#status").css("color", "red");
} else {
  $("#status").html("Your waste is low. Keep up the good work!");
  $("#status").css("color", "green");
}

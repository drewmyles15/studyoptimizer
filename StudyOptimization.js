   var ctxP = document.getElementById("pieChart").getContext('2d');
   var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
      labels: ["HCI-HW", "AI-HW", "AI-READING"],
      datasets: [
      {
        data: [80, 80, 80],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
      }
      ]
    },
    options: {
      responsive: true
    }    
  });


  var ctxB = document.getElementById("barChart").getContext('2d');
  var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
      labels: ["HCI-HW-CP1", "AI-Lab3"],
      datasets: [{
        label: 'Final Score',
        data: [80,95,0,100],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1
      }]
    },
    optionss: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

  var ctxD = document.getElementById("doughnutChart").getContext('2d');
  var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
      labels: ["HcI-HW-Paper Prototype", "HCI-HW-Reading"],
      datasets: [
      {
        data: [20,40],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
      }
      ]
    },
    options: {
      responsive: true
    }    
  });

  $(document).ready(function(){
        var date_input=$('input[name="date"]'); //our date input has the name "date"
        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
        var options={
          format: 'mm/dd/yyyy',
          container: container,
          todayHighlight: true,
          autoclose: true,
        };
        date_input.datepicker(options);
      })

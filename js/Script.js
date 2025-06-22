document.addEventListener('DOMContentLoaded', function () {
    //input with id username on change
    document.getElementById('username').addEventListener('input', function () { 
        //get the value of the input
        var username = document.getElementById('username').value;
        //regex to check if the input is having one capital letter, one small letter, one number and one special character
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/g;
        //check if the input is satisfying the regex if yes then set the border color to green else red
        if (regex.test(username)) {
            document.getElementById('username').style.borderColor = 'green';
        } else {
            document.getElementById('username').style.borderColor = 'red';
        }

    });

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [], // Initialize with empty data
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Expense',
                data: [], // Initialize with empty data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(99, 255, 172)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Function to update chart data
    function updateChartData() {
        myChart.data.datasets[0].data = getIncomeData();
        myChart.data.datasets[1].data = getExpenseData();
        myChart.update();
    }

    // Event listener for chart tab click
    document.getElementById('chart-tab').addEventListener('click', function () {
        updateChartData();
    });

    // Event listener for download button click
    document.getElementById('download').addEventListener('click', function () {
        var link = document.createElement('a');
        link.href = document.getElementById('myChart').toDataURL('image/png');
        link.download = 'chart.png';
        link.click();
    });

    function getIncomeData() {
        return [
            document.getElementById('income-january').value || 0,
            document.getElementById('income-february').value || 0,
            document.getElementById('income-march').value || 0,
            document.getElementById('income-april').value || 0,
            document.getElementById('income-may').value || 0,
            document.getElementById('income-june').value || 0,
            document.getElementById('income-july').value || 0,
            document.getElementById('income-august').value || 0,
            document.getElementById('income-september').value || 0,
            document.getElementById('income-october').value || 0,
            document.getElementById('income-november').value || 0,
            document.getElementById('income-december').value || 0
        ].map(Number);
    }

    function getExpenseData() {
        return [
            document.getElementById('expense-january').value || 0,
            document.getElementById('expense-february').value || 0,
            document.getElementById('expense-march').value || 0,
            document.getElementById('expense-april').value || 0,
            document.getElementById('expense-may').value || 0,
            document.getElementById('expense-june').value || 0,
            document.getElementById('expense-july').value || 0,
            document.getElementById('expense-august').value || 0,
            document.getElementById('expense-september').value || 0,
            document.getElementById('expense-october').value || 0,
            document.getElementById('expense-november').value || 0,
            document.getElementById('expense-december').value || 0
        ].map(Number);
    }
});
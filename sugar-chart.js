
        var barChartData = {
            labels: ["紅茶", "綠茶", "珍珠奶茶", "鮮奶茶", "檸檬綠", "多多綠"],
            datasets: [
            {
                label: '一芳',
                backgroundColor: '#211f20',
                data: [
                    { y: 60, x: "紅茶" },
                    { y: 60, x: "綠茶" },
                    { y: 45, x: "珍珠奶茶" },
                    { y: 60, x: "鮮奶茶" },
                    { y: 90, x: "檸檬綠" },
                    { y: 0, x: "多多綠" },
                ]
            }, {
                label: '清心',
                backgroundColor: '#cd1726',
                data: [
                    { y: 58, x: "紅茶" },
                    { y: 58, x: "綠茶" },
                    { y: 47, x: "珍珠奶茶" },
                    { y: 47, x: "鮮奶茶" },
                    { y: 56, x: "檸檬綠" },
                    { y: 80.4, x: "多多綠" },
                ]
            },  {
                label: 'Coco',
                backgroundColor: '#e8551e',
                data: [
                    { y: 42, x: "紅茶" },
                    { y: 55, x: "綠茶" },
                    { y: 34, x: "珍珠奶茶" },
                    { y: 0, x: "鮮奶茶" },
                    { y: 108, x: "檸檬綠" },
                    { y: 108, x: "多多綠" },
                ]
            },   {
                label: '茶湯會',
                backgroundColor: '#bd9256',
                data: [
                    { y: 45, x: "紅茶" },
                    { y: 40, x: "綠茶" },
                    { y: 31, x: "珍珠奶茶" },
                    { y: 49, x: "鮮奶茶" },
                    { y: 76, x: "檸檬綠" },
                    { y: 0, x: "多多綠" },
                ]
            }, {
                label: '迷客夏',
                backgroundColor: '#507939',
                data: [
                    { y: 60, x: "紅茶" },
                    { y: 42, x: "綠茶" },
                    { y: 36, x: "珍珠奶茶" },
                    { y: 48, x: "鮮奶茶" },
                    { y: 66, x: "檸檬綠" },
                    { y: 75.4, x: "多多綠" },
                ]
            },  {
                label: '大苑子',
                backgroundColor: '#159948',
                data: [
                    { y: 45, x: "紅茶" },
                    { y: 40, x: "綠茶" },
                    { y: 31, x: "珍珠奶茶" },
                    { y: 49, x: "鮮奶茶" },
                    { y: 76, x: "檸檬綠" },
                    { y: 0, x: "多多綠" },
                ]
            },{
                label: '50嵐',
                backgroundColor: '#0000ff',
                data: [
                    { y: 40, x: "紅茶" },
                    { y: 40, x: "綠茶" },
                    { y: 30, x: "珍珠奶茶" },
                    { y: 40, x: "鮮奶茶" },
                    { y: 50, x: "檸檬綠" },
                    { y: 73.4, x: "多多綠" },
                ]
            }, {
                label: 'COMEBUY',
                backgroundColor: '#1aa1e4',
                data: [
                    { y: 53, x: "紅茶" },
                    { y: 44, x: "綠茶" },
                    { y: 49, x: "珍珠奶茶" },
                    { y: 59, x: "鮮奶茶" },
                    { y: 121, x: "檸檬綠" },
                    { y: 88.4, x: "多多綠" },
                ]
            },  ]

        };
        window.onload = function() {
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                options: {
                    
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });
        };

        document.getElementById('randomizeData').addEventListener('click', function() {
            barChartData.datasets.forEach(function(dataset, i) {
                dataset.data = dataset.data.map(function() {
                    return randomScalingFactor();
                });
            });
            window.myBar.update();
        });

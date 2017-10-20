/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$(function() {
    $('#hidden-toggle').on('click', function() {
        $('[data-toggle="popover"]').popover('hide');
        $('#limit-reached').hide();
    });

    $('.profile-action button').on('click', function() {
        $(this).parent().hide();
        $(this).parent().siblings('.profile-message').fadeIn();
    });

    $('.profile-message button').on('click', function() {
        $('#limit-reached').fadeIn();
    });

    $('#close-limit').on('click', function() {
        $('#limit-reached').fadeOut();
    });

    $('.btn-close').on('click', function() {
        $(this).parent().parent().parent().remove();
    });

    $('[data-toggle="popover"]').popover({ content: $('#spotlight'), html: true, placement: 'top', animation: true});
    $("[data-toggle='popover']").on('show.bs.popover', function(){
        $('#spotlight').show();
    });
});

var stealth = {
    initialize: function() {
        this.loadDate();
        this.loadRandomTimes();
        this.loadCharts();
    },
    loadDate: function() {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var d = new Date();

        $('.date').html(days[d.getDay()] + ' ' + d.getDay() + 'th ' + monthNames[d.getMonth()]);
    },
    loadRandomTimes: function() {
        for (var i = 0; i < 4; i++) {
            var minutesValue = Math.floor(Math.random() * 10) + 1;
            var secondsValue = Math.floor(Math.random() * 60) + 1;
            console.log($('.time__value:eq(' + i + ')'));
            $('.time__value:eq(' + i + ')').html(minutesValue + ":" + secondsValue);
        }
    },
    loadCharts: function() {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                datasets: [{
                    fill: false,
                    label: '',
                    data: [12, 19, 3, 5, 2, 3, 8, 9, 9],
                    backgroundColor: [
                        '#4DECB9'
                    ],
                    borderColor: [
                        '#4DECB9'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: "#B3AFAF"
                        },
                        ticks: {
                            display: false
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                }
            }
        });

        var donutOptions = {
            cutoutPercentage: 90,
            responsive: false,
            segmentShowStroke : true,
            segmentStrokeColor : "#fff",
            segmentStrokeWidth : 1,
            percentageInnerCutout : 50,
            animationSteps : 100,
            animationEasing : "easeOutBounce",
            animateRotate : true,
            maintainAspectRatio: true,
            showScale: true,
            animateScale: true
        };
        var donutEl = document.getElementById("doughnutChart").getContext("2d");
        var value = Math.floor(Math.random() * 100) + 1;
        var difference = 100 - value;

        $('.doughnut__value:eq(0)').html(value + '%');

        new Chart(donutEl, {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: '',
                    data: [value, difference],
                    backgroundColor: [
                        '#FFFF00',
                        '#B3AFAF'
                    ],
                    borderColor: [
                        '#FFFF00',
                        '#B3AFAF'
                    ],
                    borderWidth: 1
                }]
            },
            options: donutOptions
        });

        var donutEl1 = document.getElementById("doughnutChart1").getContext("2d");
        var value1 = Math.floor(Math.random() * 100) + 1;
        var difference1 = 100 - value1;
        $('.doughnut__value:eq(1)').html(value1 + '%');

        new Chart(donutEl1, {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: '',
                    data: [value1, difference1],
                    backgroundColor: [
                        '#4DECB9',
                        '#B3AFAF'
                    ],
                    borderColor: [
                        '#4DECB9',
                        '#B3AFAF'
                    ],
                    borderWidth: 1
                }]
            },
            options: donutOptions
        });

        var donutEl2 = document.getElementById("doughnutChart2").getContext("2d");
        var value2 = Math.floor(Math.random() * 99) + 1;
        var difference2 = 100 - value2;
        $('.doughnut__value:eq(2)').html(value2 + '%');

        new Chart(donutEl2, {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: '',
                    data: [value2, difference2],
                    backgroundColor: [
                        '#5A5AFF',
                        '#B3AFAF'
                    ],
                    borderColor: [
                        '#5A5AFF',
                        '#B3AFAF'
                    ],
                    borderWidth: 1
                }]
            },
            options: donutOptions
        });

        var donutEl3 = document.getElementById("doughnutChart3").getContext("2d");
        var value3 = Math.floor(Math.random() * 100) + 1;
        var difference3 = 100 - value3;
        $('.doughnut__value:eq(3)').html(value3 + '%');

        new Chart(donutEl3, {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: '',
                    data: [value3, difference3],
                    backgroundColor: [
                        '#FFC0CB',
                        '#B3AFAF'
                    ],
                    borderColor: [
                        '#FFC0CB',
                        '#B3AFAF'
                    ],
                    borderWidth: 1
                }]
            },
            options: donutOptions
        });
    }
};
document.addEventListener('DOMContentLoaded', function() {
    const ctxBarras = document.getElementById('graficoBarras');
    if (ctxBarras) {
        new Chart(ctxBarras, {
            type: 'bar',
            data: {
                labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                datasets: [
                    {
                        label: 'Últimos 6 dias',
                        data: [1200, 1500, 1800, 1600, 2000, 1900, 2200, 2100, 2400, 2300, 2500, 2400],
                        backgroundColor: '#ff6b35',
                        borderColor: '#ff6b35',
                        borderWidth: 0,
                        borderRadius: 4,
                        borderSkipped: false,
                    },
                    {
                        label: 'Última semana',
                        data: [800, 1000, 1200, 1100, 1300, 1250, 1400, 1350, 1500, 1450, 1600, 1550],
                        backgroundColor: '#e0e0e0',
                        borderColor: '#e0e0e0',
                        borderWidth: 0,
                        borderRadius: 4,
                        borderSkipped: false,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 11
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f0f0f0'
                        },
                        ticks: {
                            font: {
                                size: 11
                            }
                        }
                    }
                }
            }
        });
    }

    const ctxLinha = document.getElementById('graficoLinha');
    if (ctxLinha) {
        new Chart(ctxLinha, {
            type: 'line',
            data: {
                labels: ['01', '02', '03', '04', '05', '06'],
                datasets: [
                    {
                        label: 'Últimos 6 dias',
                        data: [200, 350, 500, 450, 600, 550],
                        borderColor: '#ff6b35',
                        backgroundColor: 'rgba(255, 107, 53, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#ff6b35',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 5
                    },
                    {
                        label: 'Última semana',
                        data: [150, 250, 350, 300, 400, 375],
                        borderColor: '#e0e0e0',
                        backgroundColor: 'rgba(224, 224, 224, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#e0e0e0',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 11
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f0f0f0'
                        },
                        ticks: {
                            font: {
                                size: 11
                            }
                        }
                    }
                }
            }
        });
    }

    const ctxRosca = document.getElementById('graficoRosca');
    if (ctxRosca) {
        new Chart(ctxRosca, {
            type: 'doughnut',
            data: {
                labels: ['Manhã', 'Tarde', 'Noite'],
                datasets: [{
                    data: [40, 32, 28],
                    backgroundColor: [
                        '#ff6b35',
                        '#ffa726',
                        '#ff7043'
                    ],
                    borderWidth: 0,
                    cutout: '60%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                return `${label}: ${value}%`;
                            }
                        }
                    }
                }
            }
        });
    }
});

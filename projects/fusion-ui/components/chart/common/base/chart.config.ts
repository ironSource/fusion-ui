/**
 * Base ChartJS dataset options used for data render
 */
import {ChartBaseDatasetOptions} from './entities/chart-options';
import {externalV4TooltipHandler} from './chart-v4.tooltip';

export const BASE_DATASET_OPTIONS: {[key: string]: ChartBaseDatasetOptions} = {
    style_v1: {
        colorSettings: ['backgroundColor', 'borderColor', 'pointBorderColor', 'pointBackgroundColor'],
        fillOpacity: 50, // in %
        seriesToShow: 7,
        lineOptions: {
            fill: false,
            hidden: false,
            pointBorderColor: '#ffffff'
        },
        barOptions: {
            borderWidth: 1,
            backgroundColor: [],
            borderColor: []
        },
        pieOptions: {
            backgroundColor: []
        }
    },
    style_v2: {
        colorSettings: ['backgroundColor', 'borderColor', 'pointBorderColor', 'pointBackgroundColor'],
        fillOpacity: 40, // in %
        seriesToShow: 7,
        dateFormat: 'MMM dd, yyyy',
        lineOptions: {
            fill: false,
            hidden: false,
            pointBackgroundColor: '#ffffff'
        },
        barOptions: {
            borderWidth: 0,
            backgroundColor: [],
            borderColor: []
        },
        pieOptions: {
            backgroundColor: []
        }
    },
    style_v4: {
        colorSettings: ['backgroundColor', 'borderColor', 'pointBorderColor', 'pointHoverBackgroundColor'],
        fillOpacity: 10,
        seriesToShow: 7,
        dateFormat: 'MMM dd',
        lineOptions: {
            fill: false,
            hidden: false,
            borderWidth: 2,
            tension: 0.4,
            pointHoverBackgroundColor: '#fcfcfc'
        },
        barOptions: {
            borderRadius: 4,
            borderWidth: 0,
            backgroundColor: [],
            borderColor: []
        },
        pieOptions: {
            borderWidth: 3,
            hoverBorderWidth: 0,
            backgroundColor: []
        }
    }
};

/**
 * ChartJS Global Configuration
 * http://www.chartjs.org/docs/#chart-configuration-global-configuration
 */
export const CHART_CONFIGURATIONS: any = {
    style_v1: {
        colorsPalette: 'base', // extend by fusion
        dottedLineForToday: true, // extend by fusion
        calculateMaxForAll: true, // extend by fusion: calculate Y maximum of chart for all datasets (not showed only)
        calculatePieSummary: true, // extend by fusion

        responsive: true, // Resizes the chart canvas when its container does
        maintainAspectRatio: false, // Maintain the original canvas aspect ratio (width / height) when resizing.
        resizeDelay: 0, // Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.

        interaction: {
            mode: 'nearest'
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            subtitle: {
                display: true
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#fff',
                titleFont: {size: 16},
                titleColor: '#172D4C',
                bodyFont: {size: 16},
                bodyColor: '#172D4C',
                borderColor: 'rgba(194,205,215,1)',
                borderWidth: 1,
                cornerRadius: 0,
                caretSize: 10,
                xPadding: 10,
                yPadding: 10
            }
        },
        layout: {
            padding: {
                top: 10
            }
        },
        elements: {
            line: {
                borderWidth: 1,
                tension: 0
            },
            point: {
                borderWidth: 1,
                pointRadius: 2,
                pointHoverRadius: 3,
                pointHitRadius: 2
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: '#678099',
                    padding: 7,
                    maxRotation: 0
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#678099',
                    padding: 10
                },
                grid: {
                    drawBorder: false,
                    lineWidth: 1,
                    color: '#e1e6eb'
                }
            }
        }
    },
    style_v2: {
        colorsPalette: 'base', // extend by fusion
        dottedLineForToday: true, // extend by fusion
        calculateMaxForAll: true, // extend by fusion: calculate Y maximum of chart for all datasets (not showed only)
        calculatePieSummary: true, // extend by fusion

        responsive: true, // Resizes the chart canvas when its container does
        maintainAspectRatio: false, // Maintain the original canvas aspect ratio (width / height) when resizing.
        resizeDelay: 0, // Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.
        interaction: {
            mode: 'nearest'
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            subtitle: {
                display: true
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#fff',
                titleFont: {size: 16},
                titleColor: '#172D4C',
                bodyFont: {size: 16},
                bodyColor: '#172D4C',
                borderColor: 'rgba(194,205,215,1)',
                borderWidth: 1,
                cornerRadius: 0,
                caretSize: 10,
                xPadding: 10,
                yPadding: 10
            }
        },
        layout: {
            padding: {
                top: 10
            }
        },
        elements: {
            line: {
                borderWidth: 2,
                tension: 0
            },
            point: {
                borderWidth: 2,
                radius: 3,
                hoverRadius: 4,
                hitRadius: 3
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: '#7b838c',
                    font: {size: 11},
                    padding: 0
                },
                grid: {
                    drawBorder: false,
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#7b838c',
                    font: {size: 11},
                    padding: 16
                },
                grid: {
                    drawBorder: false,
                    lineWidth: 1,
                    color: '#e5e7e9'
                }
            }
        }
    },
    style_v4: {
        dottedLineForToday: true, // extend by fusion
        calculateMaxForAll: true, // extend by fusion: calculate Y maximum of chart for all datasets (not showed only)
        calculatePieSummary: true, // extend by fusion

        responsive: true, // Resizes the chart canvas when its container does
        maintainAspectRatio: false, // Maintain the original canvas aspect ratio (width / height) when resizing.
        resizeDelay: 0, // Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.
        interaction: {
            mode: 'point'
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
            subtitle: {
                display: true
            },
            tooltip: {
                enabled: false,
                position: 'nearest',
                external: externalV4TooltipHandler
            }
        },
        layout: {
            padding: {
                top: 10
            }
        },
        elements: {
            line: {
                borderWidth: 2,
                tension: 0.4
            },
            point: {
                radius: 0,
                hitRadius: 8,
                hoverBorderWidth: 2,
                pointHoverBackgroundColor: '#fcfcfc'
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: '#646464',
                    font: {size: 12, weight: 400},
                    padding: 0
                },
                grid: {
                    drawBorder: false,
                    display: false
                }
            },
            y: {
                border: {
                    display: false
                },
                beginAtZero: true,
                ticks: {
                    color: '#646464',
                    font: {size: 12, weight: 400},
                    padding: 8
                },
                grid: {
                    lineWidth: 1,
                    color: '#E4E4E4',
                    display: true,
                    tickLength: 8,
                    drawTicks: false
                }
            }
        }
    }
};

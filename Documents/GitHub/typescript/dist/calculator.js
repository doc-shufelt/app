const configuration = {
    federal: {
        progressive: true,
        deductions: {
            single: 14600,
            headOfHousehold: 21900,
            marriedFilingJointly: 29200,
            marriedFilingSeparately: 14600
        },
        brackets: {
            single: [
                {
                    minimum: 0,
                    maximum: 11600,
                    taxRate: 0.10,
                    isTopBracket: false,
                },
                {
                    minimum: 11601,
                    maximum: 47150,
                    taxRate: 0.12,
                    isTopBracket: false,
                },
                {
                    minimum: 47151,
                    maximum: 100525,
                    taxRate: 0.22,
                    isTopBracket: false,
                },
                {
                    minimum: 100526,
                    maximum: 191950,
                    taxRate: 0.24,
                    isTopBracket: false,
                },
                {
                    minimum: 191951,
                    maximum: 243725,
                    taxRate: 0.32,
                    isTopBracket: false,
                },
                {
                    minimum: 243726,
                    maximum: 609350,
                    taxRate: 0.35,
                    isTopBracket: false,
                },
                {
                    minimum: 609351,
                    maximum: -1,
                    taxRate: 0.37,
                    isTopBracket: true,
                }
            ],
            headOfHousehold: [
                {
                    minimum: 0,
                    maximum: 16550,
                    taxRate: 0.10,
                    isTopBracket: false,
                },
                {
                    minimum: 16551,
                    maximum: 63100,
                    taxRate: 0.12,
                    isTopBracket: false,
                },
                {
                    minimum: 63101,
                    maximum: 100500,
                    taxRate: 0.22,
                    isTopBracket: false,
                },
                {
                    minimum: 100501,
                    maximum: 191150,
                    taxRate: 0.24,
                    isTopBracket: false,
                },
                {
                    minimum: 191151,
                    maximum: 243700,
                    taxRate: 0.32,
                    isTopBracket: false,
                },
                {
                    minimum: 243701,
                    maximum: 609350,
                    taxRate: 0.35,
                    isTopBracket: false,
                },
                {
                    minimum: 609351,
                    maximum: -1,
                    taxRate: 0.37,
                    isTopBracket: true,
                }
            ],
            marriedFilingJointly: [
                {
                    minimum: 0,
                    maximum: 23200,
                    taxRate: 0.10,
                    isTopBracket: false,
                },
                {
                    minimum: 23201,
                    maximum: 94300,
                    taxRate: 0.12,
                    isTopBracket: false,
                },
                {
                    minimum: 94301,
                    maximum: 201050,
                    taxRate: 0.22,
                    isTopBracket: false,
                },
                {
                    minimum: 201051,
                    maximum: 383900,
                    taxRate: 0.24,
                    isTopBracket: false,
                },
                {
                    minimum: 383901,
                    maximum: 487450,
                    taxRate: 0.32,
                    isTopBracket: false,
                },
                {
                    minimum: 487451,
                    maximum: 731200,
                    taxRate: 0.35,
                    isTopBracket: false,
                },
                {
                    minimum: 731201,
                    maximum: -1,
                    taxRate: 0.37,
                    isTopBracket: true,
                }
            ],
            marriedFilingSeparately: [
                {
                    minimum: 0,
                    maximum: 11600,
                    taxRate: 0.10,
                    isTopBracket: false,
                },
                {
                    minimum: 11601,
                    maximum: 47150,
                    taxRate: 0.12,
                    isTopBracket: false,
                },
                {
                    minimum: 47151,
                    maximum: 100525,
                    taxRate: 0.22,
                    isTopBracket: false,
                },
                {
                    minimum: 100526,
                    maximum: 191150,
                    taxRate: 0.24,
                    isTopBracket: false,
                },
                {
                    minimum: 191151,
                    maximum: 243725,
                    taxRate: 0.32,
                    isTopBracket: false,
                },
                {
                    minimum: 243726,
                    maximum: 365600,
                    taxRate: 0.35,
                    isTopBracket: false,
                },
                {
                    minimum: 365601,
                    maximum: -1,
                    taxRate: 0.37,
                    isTopBracket: true,
                }
            ]
        },
    },
    states: {
        alabama: {
            abbreviation: `AL`,
            progressive: true,
            deductions: {
                single: 4000,
                headOfHousehold: 7700,
                marriedFilingJointly: 10500,
                marriedFilingSeparately: 5250
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 500,
                        taxRate: 0.02,
                        isTopBracket: false
                    },
                    {
                        minimum: 501,
                        maximum: 3000,
                        taxRate: 0.04,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: -1, // denotes no upper limit
                        taxRate: 0.05,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 500,
                        taxRate: 0.02,
                        isTopBracket: false
                    },
                    {
                        minimum: 501,
                        maximum: 3000,
                        taxRate: 0.04,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: -1, // denotes no upper limit
                        taxRate: 0.05,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 500,
                        taxRate: 0.02,
                        isTopBracket: false
                    },
                    {
                        minimum: 501,
                        maximum: 3000,
                        taxRate: 0.04,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: -1, // denotes no upper limit
                        taxRate: 0.05,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 500,
                        taxRate: 0.02,
                        isTopBracket: false
                    },
                    {
                        minimum: 501,
                        maximum: 3000,
                        taxRate: 0.04,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: -1, // denotes no upper limit
                        taxRate: 0.05,
                        isTopBracket: true
                    }
                ]
            }
        },
        alaska: {
            abbreviation: 'AK',
            progressive: true,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ]
            }
        },
        arizona: {
            abbreviation: 'AZ',
            progressive: true,
            deductions: {
                single: 13850,
                headOfHousehold: 20800,
                marriedFilingJointly: 27700,
                marriedFilingSeparately: 13850
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: .025,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: .025,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: .025,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: .025,
                        isTopBracket: true
                    }
                ]
            }
        },
        arkansas: {
            abbreviation: 'AK',
            progressive: true,
            deductions: {
                single: 2200,
                headOfHousehold: 2200,
                marriedFilingJointly: 4400,
                marriedFilingSeparately: 2200
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 5099,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 5100,
                        maximum: 10299,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 10300,
                        maximum: 14699,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 14700,
                        maximum: 24299,
                        taxRate: 0.0340,
                        isTopBracket: false
                    },
                    {
                        minimum: 24300,
                        maximum: -1,
                        taxRate: 0.0470,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 5099,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 5100,
                        maximum: 10299,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 10300,
                        maximum: 14699,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 14700,
                        maximum: 24299,
                        taxRate: 0.0340,
                        isTopBracket: false
                    },
                    {
                        minimum: 24300,
                        maximum: -1,
                        taxRate: 0.0470,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 5099,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 5100,
                        maximum: 10299,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 10300,
                        maximum: 14699,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 14700,
                        maximum: 24299,
                        taxRate: 0.0340,
                        isTopBracket: false
                    },
                    {
                        minimum: 24300,
                        maximum: -1,
                        taxRate: 0.0470,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 5099,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 5100,
                        maximum: 10299,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 10300,
                        maximum: 14699,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 14700,
                        maximum: 24299,
                        taxRate: 0.0340,
                        isTopBracket: false
                    },
                    {
                        minimum: 24300,
                        maximum: -1,
                        taxRate: 0.0470,
                        isTopBracket: true
                    }
                ]
            }
        },
        california: {
            abbreviation: 'CA',
            progressive: true,
            deductions: {
                single: 5363,
                headOfHousehold: 10726,
                marriedFilingJointly: 10726,
                marriedFilingSeparately: 5363
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 10412,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 10413,
                        maximum: 24684,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 24685,
                        maximum: 38959,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 38960,
                        maximum: 54081,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 54082,
                        maximum: 68350,
                        taxRate: 0.0800,
                        isTopBracket: false
                    },
                    {
                        minimum: 68351,
                        maximum: 349137,
                        taxRate: 0.0930,
                        isTopBracket: false
                    },
                    {
                        minimum: 349138,
                        maximum: 418961,
                        taxRate: 0.1030,
                        isTopBracket: false
                    },
                    {
                        minimum: 418962,
                        maximum: 698271,
                        taxRate: 0.1130,
                        isTopBracket: false
                    },
                    {
                        minimum: 698272,
                        maximum: -1,
                        taxRate: 0.1230,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 10412,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 10413,
                        maximum: 24684,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 24685,
                        maximum: 38959,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 38960,
                        maximum: 54081,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 54082,
                        maximum: 68350,
                        taxRate: 0.0800,
                        isTopBracket: false
                    },
                    {
                        minimum: 68351,
                        maximum: 349137,
                        taxRate: 0.0930,
                        isTopBracket: false
                    },
                    {
                        minimum: 349138,
                        maximum: 418961,
                        taxRate: 0.1030,
                        isTopBracket: false
                    },
                    {
                        minimum: 418962,
                        maximum: 698271,
                        taxRate: 0.1130,
                        isTopBracket: false
                    },
                    {
                        minimum: 698272,
                        maximum: -1,
                        taxRate: 0.1230,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 20824,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 20825,
                        maximum: 49368,
                        taxRate: 0.02,
                        isTopBracket: false
                    },
                    {
                        minimum: 49369,
                        maximum: 77918,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 77919,
                        maximum: 108162,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 108163,
                        maximum: 136700,
                        taxRate: 0.0800,
                        isTopBracket: false
                    },
                    {
                        minimum: 136701,
                        maximum: 698274,
                        taxRate: 0.0930,
                        isTopBracket: false
                    },
                    {
                        minimum: 698275,
                        maximum: 837923,
                        taxRate: 0.1030,
                        isTopBracket: false
                    },
                    {
                        minimum: 837923,
                        maximum: 1396542,
                        taxRate: 0.1130,
                        isTopBracket: false
                    },
                    {
                        minimum: 1396543,
                        maximum: -1,
                        taxRate: 0.1230,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 10412,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 10413,
                        maximum: 24684,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 24685,
                        maximum: 38959,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 38960,
                        maximum: 54081,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 54082,
                        maximum: 68350,
                        taxRate: 0.0800,
                        isTopBracket: false
                    },
                    {
                        minimum: 68351,
                        maximum: 349137,
                        taxRate: 0.0930,
                        isTopBracket: false
                    },
                    {
                        minimum: 349138,
                        maximum: 418961,
                        taxRate: 0.1030,
                        isTopBracket: false
                    },
                    {
                        minimum: 418962,
                        maximum: 698271,
                        taxRate: 0.1130,
                        isTopBracket: false
                    },
                    {
                        minimum: 698272,
                        maximum: -1,
                        taxRate: 0.1230,
                        isTopBracket: true
                    }
                ]
            }
        },
        colorado: {
            abbreviation: 'CO',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.044,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.044,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.044,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.044,
                        isTopBracket: true
                    }
                ]
            }
        },
        connecticut: {
            abbreviation: 'CT',
            progressive: true,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 10000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: 50000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 50001,
                        maximum: 100000,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 100001,
                        maximum: 200000,
                        taxRate: 0.060,
                        isTopBracket: false
                    },
                    {
                        minimum: 200001,
                        maximum: 250000,
                        taxRate: 0.065,
                        isTopBracket: false
                    },
                    {
                        minimum: 250001,
                        maximum: 500000,
                        taxRate: 0.069,
                        isTopBracket: false
                    },
                    {
                        minimum: 500001,
                        maximum: -1,
                        taxRate: 0.0699,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 16000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 16001,
                        maximum: 80000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 80001,
                        maximum: 160000,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 161000,
                        maximum: 320000,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 320001,
                        maximum: 400000,
                        taxRate: 0.0650,
                        isTopBracket: false
                    },
                    {
                        minimum: 400001,
                        maximum: 800000,
                        taxRate: 0.0690,
                        isTopBracket: false
                    },
                    {
                        minimum: 800001,
                        maximum: -1,
                        taxRate: 0.0699,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 20000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 20001,
                        maximum: 100000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 100001,
                        maximum: 200000,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 200001,
                        maximum: 400000,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 400001,
                        maximum: 500000,
                        taxRate: 0.0650,
                        isTopBracket: false
                    },
                    {
                        minimum: 500001,
                        maximum: 1000000,
                        taxRate: 0.0690,
                        isTopBracket: false
                    },
                    {
                        minimum: 1000001,
                        maximum: -1,
                        taxRate: 0.0699,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 10000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: 50000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 50001,
                        maximum: 100000,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 100001,
                        maximum: 200000,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 200001,
                        maximum: 250000,
                        taxRate: 0.0650,
                        isTopBracket: false
                    },
                    {
                        minimum: 250001,
                        maximum: 500000,
                        taxRate: 0.0690,
                        isTopBracket: false
                    },
                    {
                        minimum: 500000,
                        maximum: -1,
                        taxRate: 0.0699,
                        isTopBracket: true
                    }
                ]
            }
        },
        delaware: {
            abbreviation: 'DE',
            progressive: true,
            deductions: {
                single: 3250,
                headOfHousehold: 3250,
                marriedFilingJointly: 6500,
                marriedFilingSeparately: 3250
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 2000,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 2001,
                        maximum: 5000,
                        taxRate: 0.0220,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 10000,
                        taxRate: 0.0390,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: 20000,
                        taxRate: 0.0480,
                        isTopBracket: false
                    },
                    {
                        minimum: 20001,
                        maximum: 25000,
                        taxRate: 0.0520,
                        isTopBracket: false
                    },
                    {
                        minimum: 25001,
                        maximum: 60000,
                        taxRate: 0.0555,
                        isTopBracket: false
                    },
                    {
                        minimum: 60001,
                        maximum: -1,
                        taxRate: 0.0660,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 2000,
                        maximum: 5000,
                        taxRate: 0.022,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 10000,
                        taxRate: 0.0390,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: 20000,
                        taxRate: 0.0480,
                        isTopBracket: false
                    },
                    {
                        minimum: 20001,
                        maximum: 25000,
                        taxRate: 0.0520,
                        isTopBracket: false
                    },
                    {
                        minimum: 25001,
                        maximum: 60000,
                        taxRate: 0.0555,
                        isTopBracket: false
                    },
                    {
                        minimum: 60001,
                        maximum: -1,
                        taxRate: 0.0660,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 2000,
                        maximum: 5000,
                        taxRate: 0.022,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 10000,
                        taxRate: 0.0390,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: 20000,
                        taxRate: 0.0480,
                        isTopBracket: false
                    },
                    {
                        minimum: 20001,
                        maximum: 25000,
                        taxRate: 0.0520,
                        isTopBracket: false
                    },
                    {
                        minimum: 25001,
                        maximum: 60000,
                        taxRate: 0.0555,
                        isTopBracket: false
                    },
                    {
                        minimum: 60001,
                        maximum: -1,
                        taxRate: 0.0660,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 2000,
                        maximum: 5000,
                        taxRate: 0.022,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 10000,
                        taxRate: 0.0390,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: 20000,
                        taxRate: 0.0480,
                        isTopBracket: false
                    },
                    {
                        minimum: 20001,
                        maximum: 25000,
                        taxRate: 0.0520,
                        isTopBracket: false
                    },
                    {
                        minimum: 25001,
                        maximum: 60000,
                        taxRate: 0.0555,
                        isTopBracket: false
                    },
                    {
                        minimum: 60001,
                        maximum: -1,
                        taxRate: 0.0660,
                        isTopBracket: true
                    }
                ],
            }
        },
        florida: {
            abbreviation: 'FL',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ]
            }
        },
        georgia: {
            abbreviation: 'GA',
            progressive: true,
            deductions: {
                single: 5400,
                headOfHousehold: 7100,
                marriedFilingJointly: 5400,
                marriedFilingSeparately: 5400
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 750,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 751,
                        maximum: 2250,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 2251,
                        maximum: 3750,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 3751,
                        maximum: 5250,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 5251,
                        maximum: 7000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 7001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 1000,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 1001,
                        maximum: 3000,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: 5000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 7000,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 7001,
                        maximum: 10000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 1000,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 1001,
                        maximum: 3000,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: 5000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 7000,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 7001,
                        maximum: 10000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 500,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 501,
                        maximum: 1500,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 1501,
                        maximum: 2500,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 2501,
                        maximum: 3500,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 3501,
                        maximum: 5000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ]
            }
        },
        hawaii: {
            abbreviation: 'HI',
            progressive: true,
            deductions: {
                single: 2200,
                headOfHousehold: 2200,
                marriedFilingJointly: 4400,
                marriedFilingSeparately: 2200
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 2400,
                        taxRate: 0.0140,
                        isTopBracket: false
                    },
                    {
                        minimum: 2401,
                        maximum: 4800,
                        taxRate: 0.0320,
                        isTopBracket: false
                    },
                    {
                        minimum: 4801,
                        maximum: 9600,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 9601,
                        maximum: 14400,
                        taxRate: 0.0640,
                        isTopBracket: false
                    },
                    {
                        minimum: 14401,
                        maximum: 19200,
                        taxRate: 0.0680,
                        isTopBracket: false
                    },
                    {
                        minimum: 19201,
                        maximum: 24000,
                        taxRate: 0.0720,
                        isTopBracket: false
                    },
                    {
                        minimum: 24001,
                        maximum: 36000,
                        taxRate: 0.0760,
                        isTopBracket: false
                    },
                    {
                        minimum: 36001,
                        maximum: 48000,
                        taxRate: 0.0790,
                        isTopBracket: false
                    },
                    {
                        minimum: 48001,
                        maximum: 150000,
                        taxRate: 0.0825,
                        isTopBracket: false
                    },
                    {
                        minimum: 150001,
                        maximum: 175000,
                        taxRate: 0.0900,
                        isTopBracket: false
                    },
                    {
                        minimum: 175001,
                        maximum: 200000,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 200001,
                        maximum: -1,
                        taxRate: 0.0110,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 2400,
                        taxRate: 0.0140,
                        isTopBracket: false
                    },
                    {
                        minimum: 2401,
                        maximum: 4800,
                        taxRate: 0.0320,
                        isTopBracket: false
                    },
                    {
                        minimum: 4801,
                        maximum: 9600,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 9601,
                        maximum: 14400,
                        taxRate: 0.0640,
                        isTopBracket: false
                    },
                    {
                        minimum: 14401,
                        maximum: 19200,
                        taxRate: 0.0680,
                        isTopBracket: false
                    },
                    {
                        minimum: 19201,
                        maximum: 24000,
                        taxRate: 0.0720,
                        isTopBracket: false
                    },
                    {
                        minimum: 24001,
                        maximum: 36000,
                        taxRate: 0.0760,
                        isTopBracket: false
                    },
                    {
                        minimum: 36001,
                        maximum: 48000,
                        taxRate: 0.0790,
                        isTopBracket: false
                    },
                    {
                        minimum: 48001,
                        maximum: 150000,
                        taxRate: 0.0825,
                        isTopBracket: false
                    },
                    {
                        minimum: 150001,
                        maximum: 175000,
                        taxRate: 0.0900,
                        isTopBracket: false
                    },
                    {
                        minimum: 175001,
                        maximum: 200000,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 200001,
                        maximum: -1,
                        taxRate: 0.0110,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 4800,
                        taxRate: 0.0140,
                        isTopBracket: false
                    },
                    {
                        minimum: 4801,
                        maximum: 9600,
                        taxRate: 0.0320,
                        isTopBracket: false
                    },
                    {
                        minimum: 9601,
                        maximum: 19200,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 19201,
                        maximum: 28800,
                        taxRate: 0.0640,
                        isTopBracket: false
                    },
                    {
                        minimum: 28801,
                        maximum: 38400,
                        taxRate: 0.0680,
                        isTopBracket: false
                    },
                    {
                        minimum: 38401,
                        maximum: 48000,
                        taxRate: 0.0720,
                        isTopBracket: false
                    },
                    {
                        minimum: 48001,
                        maximum: 72000,
                        taxRate: 0.0760,
                        isTopBracket: false
                    },
                    {
                        minimum: 72001,
                        maximum: 96000,
                        taxRate: 0.0790,
                        isTopBracket: false
                    },
                    {
                        minimum: 96001,
                        maximum: 300000,
                        taxRate: 0.0825,
                        isTopBracket: false
                    },
                    {
                        minimum: 300001,
                        maximum: 350000,
                        taxRate: 0.0900,
                        isTopBracket: false
                    },
                    {
                        minimum: 350001,
                        maximum: 400000,
                        taxRate: 0.1000,
                        isTopBracket: false
                    },
                    {
                        minimum: 400001,
                        maximum: -1,
                        taxRate: 0.1100,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 2400,
                        taxRate: 0.0140,
                        isTopBracket: false
                    },
                    {
                        minimum: 2401,
                        maximum: 4800,
                        taxRate: 0.0320,
                        isTopBracket: false
                    },
                    {
                        minimum: 4801,
                        maximum: 9600,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 9601,
                        maximum: 14400,
                        taxRate: 0.0640,
                        isTopBracket: false
                    },
                    {
                        minimum: 14401,
                        maximum: 19200,
                        taxRate: 0.0680,
                        isTopBracket: false
                    },
                    {
                        minimum: 19201,
                        maximum: 24000,
                        taxRate: 0.0720,
                        isTopBracket: false
                    },
                    {
                        minimum: 24001,
                        maximum: 36000,
                        taxRate: 0.0760,
                        isTopBracket: false
                    },
                    {
                        minimum: 36001,
                        maximum: 48000,
                        taxRate: 0.0790,
                        isTopBracket: false
                    },
                    {
                        minimum: 48001,
                        maximum: 150000,
                        taxRate: 0.0825,
                        isTopBracket: false
                    },
                    {
                        minimum: 150001,
                        maximum: 175000,
                        taxRate: 0.0900,
                        isTopBracket: false
                    },
                    {
                        minimum: 175001,
                        maximum: 200000,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 200001,
                        maximum: -1,
                        taxRate: 0.0110,
                        isTopBracket: true
                    }
                ]
            }
        },
        idaho: {
            abbreviation: 'ID',
            progressive: false,
            deductions: {
                single: 13850,
                headOfHousehold: 13850,
                marriedFilingJointly: 27700,
                marriedFilingSeparately: 13850
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 4489,
                        taxRate: 0.000,
                        isTopBracket: false
                    },
                    {
                        minimum: 4490,
                        maximum: -1,
                        taxRate: 0.0580,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 4489,
                        taxRate: 0.000,
                        isTopBracket: false
                    },
                    {
                        minimum: 4490,
                        maximum: -1,
                        taxRate: 0.0580,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 8978,
                        taxRate: 0.0000,
                        isTopBracket: true
                    },
                    {
                        minimum: 8979,
                        maximum: -1,
                        taxRate: 0.0580,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 4489,
                        taxRate: 0.000,
                        isTopBracket: false
                    },
                    {
                        minimum: 4490,
                        maximum: -1,
                        taxRate: 0.0580,
                        isTopBracket: true
                    }
                ]
            }
        },
        illinois: {
            abbreviation: 'IL',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0495,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0495,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0495,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0495,
                        isTopBracket: true
                    }
                ]
            }
        },
        indiana: {
            abbreviation: 'IN',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0315,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0315,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0315,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0315,
                        isTopBracket: true
                    }
                ]
            }
        },
        iowa: {
            abbreviation: 'IA',
            progressive: true,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 6000,
                        taxRate: 0.0440,
                        isTopBracket: false
                    },
                    {
                        minimum: 6001,
                        maximum: 30000,
                        taxRate: 0.0482,
                        isTopBracket: false
                    },
                    {
                        minimum: 30001,
                        maximum: 75000,
                        taxRate: 0.0570,
                        isTopBracket: false
                    },
                    {
                        minimum: 75001,
                        maximum: -1,
                        taxRate: 0.0600,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 12000,
                        taxRate: 0.0440,
                        isTopBracket: false
                    },
                    {
                        minimum: 12001,
                        maximum: 60000,
                        taxRate: 0.0482,
                        isTopBracket: false
                    },
                    {
                        minimum: 60001,
                        maximum: 150000,
                        taxRate: 0.0570,
                        isTopBracket: false
                    },
                    {
                        minimum: 150001,
                        maximum: -1,
                        taxRate: 0.0600,
                        isTopBracket: true
                    }
                ],
            }
        },
        kansas: {
            abbreviation: 'KS',
            progressive: true,
            deductions: {
                single: 3500,
                headOfHousehold: 3500,
                marriedFilingJointly: 8000,
                marriedFilingSeparately: 3500
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 15000,
                        taxRate: 0.0310,
                        isTopBracket: false
                    },
                    {
                        minimum: 15001,
                        maximum: 30000,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 30001,
                        maximum: -1,
                        taxRate: 0.0570,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 15000,
                        taxRate: 0.0310,
                        isTopBracket: false
                    },
                    {
                        minimum: 15001,
                        maximum: 30000,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 30001,
                        maximum: -1,
                        taxRate: 0.0570,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 30000,
                        taxRate: 0.0310,
                        isTopBracket: false
                    },
                    {
                        minimum: 30001,
                        maximum: 60000,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 60001,
                        maximum: -1,
                        taxRate: 0.0570,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 15000,
                        taxRate: 0.0310
                    },
                    {
                        minimum: 15001,
                        maximum: 30000,
                        taxRate: 0.0525
                    },
                    {
                        minimum: 30001,
                        maximum: -1,
                        taxRate: 0.0570
                    }
                ]
            }
        },
        kentucky: {
            abbreviation: 'KY',
            progressive: false,
            notes: [
                `Kentucky requires special modifications to Federal AGI that are not yet handled.`
            ],
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            type: 'flat',
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0450,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0450,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0450,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0450,
                        isTopBracket: true
                    }
                ]
            }
        },
        louisiana: {
            abbreviation: 'LA',
            progressive: true,
            deductions: {
                single: 4500,
                headOfHousehold: 9000,
                marriedFilingJointly: 9000,
                marriedFilingSeparately: 4500
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 12500,
                        taxRate: 0.0185,
                        isTopBracket: false
                    },
                    {
                        minimum: 12501,
                        maximum: 50000,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 50001,
                        maximum: -1,
                        taxRate: 0.0425,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 12500,
                        taxRate: 0.0185,
                        isTopBracket: false
                    },
                    {
                        minimum: 12501,
                        maximum: 50000,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 50001,
                        maximum: -1,
                        taxRate: 0.0425,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 25000,
                        taxRate: 0.0185,
                        isTopBracket: false
                    },
                    {
                        minimum: 25001,
                        maximum: 100000,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 100001,
                        maximum: -1,
                        taxRate: 0.0425,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 12500,
                        taxRate: 0.0185,
                        isTopBracket: false
                    },
                    {
                        minimum: 12501,
                        maximum: 50000,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 50001,
                        maximum: -1,
                        taxRate: 0.0425,
                        isTopBracket: true
                    }
                ]
            }
        },
        maine: {
            abbreviation: 'ME',
            progressive: true,
            deductions: {
                single: 13850,
                headOfHousehold: 13850,
                marriedFilingJointly: 27700,
                marriedFilingSeparately: 13850
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 24500,
                        taxRate: 0.0580,
                        isTopBracket: false
                    },
                    {
                        minimum: 24501,
                        maximum: 58050,
                        taxRate: 0.0675,
                        isTopBracket: false
                    },
                    {
                        minimum: 58051,
                        maximum: -1,
                        taxRate: 0.0715,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 24500,
                        taxRate: 0.0580,
                        isTopBracket: false
                    },
                    {
                        minimum: 24501,
                        maximum: 58050,
                        taxRate: 0.0675,
                        isTopBracket: false
                    },
                    {
                        minimum: 58051,
                        maximum: -1,
                        taxRate: 0.0715,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 49050,
                        taxRate: 0.0580,
                        isTopBracket: false
                    },
                    {
                        minimum: 49051,
                        maximum: 116100,
                        taxRate: 0.0675,
                        isTopBracket: false
                    },
                    {
                        minimum: 116101,
                        maximum: -1,
                        taxRate: 0.0715,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 24500,
                        taxRate: 0.0580,
                        isTopBracket: false
                    },
                    {
                        minimum: 24501,
                        maximum: 58050,
                        taxRate: 0.0675,
                        isTopBracket: false
                    },
                    {
                        minimum: 58051,
                        maximum: -1,
                        taxRate: 0.0715,
                        isTopBracket: true
                    }
                ]
            }
        },
        maryland: {
            abbreviation: 'MD',
            progressive: true,
            notes: [
                `Maryland's deductions are based on income and not yet addressed.`
            ],
            deductions: {
                single: 3200,
                headOfHousehold: 3200,
                marriedFilingJointly: 3200,
                marriedFilingSeparately: 3200
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 1000,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 1001,
                        maximum: 2000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 2001,
                        maximum: 3000,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: 100000,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 100001,
                        maximum: 125000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 125001,
                        maximum: 150000,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 150001,
                        maximum: 250000,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 250001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 1000,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 1001,
                        maximum: 2000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 2001,
                        maximum: 3000,
                        taxRate: 0.04000,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: 150000,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 150001,
                        maximum: 175000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 175001,
                        maximum: 225000,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 225001,
                        maximum: 300000,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 300001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 1000,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 1001,
                        maximum: 2000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 2001,
                        maximum: 3000,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: 150000,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 150001,
                        maximum: 175000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 175001,
                        maximum: 225000,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 225001,
                        maximum: 300000,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 300001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 1000,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 1001,
                        maximum: 2000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 2001,
                        maximum: 3000,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: 100000,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 100001,
                        maximum: 125000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 125001,
                        maximum: 150000,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 150001,
                        maximum: 250000,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 250001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ]
            }
        },
        massachusetts: {
            abbreviation: 'MA',
            progressive: true,
            deductions: {
                single: 4400,
                headOfHousehold: 6800,
                marriedFilingJointly: 8800,
                marriedFilingSeparately: 4400
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0500,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0500,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0500,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0500,
                        isTopBracket: true
                    }
                ]
            }
        },
        michigan: {
            abbreviation: 'MI',
            progressive: false,
            deductions: {
                single: 5400,
                headOfHousehold: 5400,
                marriedFilingJointly: 10800,
                marriedFilingSeparately: 5400
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0405,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0405,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0405,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0405,
                        isTopBracket: true
                    }
                ]
            }
        },
        minnesota: {
            abbreviation: 'MN',
            progressive: true,
            deductions: {
                single: 13825,
                headOfHousehold: 20800,
                marriedFilingJointly: 27650,
                marriedFilingSeparately: 13825
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 30070,
                        taxRate: 0.0535,
                        isTopBracket: false
                    },
                    {
                        minimum: 30071,
                        maximum: 98760,
                        taxRate: 0.0680,
                        isTopBracket: false
                    },
                    {
                        minimum: 98761,
                        maximum: 183340,
                        taxRate: 0.0785,
                        isTopBracket: false
                    },
                    {
                        minimum: 183341,
                        maximum: -1,
                        taxRate: 0.0985,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 30070,
                        taxRate: 0.0535,
                        isTopBracket: false
                    },
                    {
                        minimum: 30071,
                        maximum: 98760,
                        taxRate: 0.0680,
                        isTopBracket: false
                    },
                    {
                        minimum: 98761,
                        maximum: 183340,
                        taxRate: 0.0785,
                        isTopBracket: false
                    },
                    {
                        minimum: 183341,
                        maximum: -1,
                        taxRate: 0.0985,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 43950,
                        taxRate: 0.0535,
                        isTopBracket: false
                    },
                    {
                        minimum: 43951,
                        maximum: 174610,
                        taxRate: 0.0680,
                        isTopBracket: false
                    },
                    {
                        minimum: 174611,
                        maximum: 304970,
                        taxRate: 0.0785,
                        isTopBracket: false
                    },
                    {
                        minimum: 304971,
                        maximum: -1,
                        taxRate: 0.0985,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 30070,
                        taxRate: 0.0535,
                        isTopBracket: false
                    },
                    {
                        minimum: 30071,
                        maximum: 98760,
                        taxRate: 0.0680,
                        isTopBracket: false
                    },
                    {
                        minimum: 98761,
                        maximum: 183340,
                        taxRate: 0.0785,
                        isTopBracket: false
                    },
                    {
                        minimum: 183341,
                        maximum: -1,
                        taxRate: 0.0985,
                        isTopBracket: true
                    }
                ]
            }
        },
        mississippi: {
            abbreviation: 'MS',
            progressive: true,
            deductions: {
                single: 7300,
                headOfHousehold: 8400,
                marriedFilingJointly: 14600,
                marriedFilingSeparately: 7300
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 10000,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: -1,
                        taxRate: 0.0500,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 10000,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: -1,
                        taxRate: 0.0500,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 10000,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: -1,
                        taxRate: 0.0500,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 10000,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: -1,
                        taxRate: 0.0500,
                        isTopBracket: true
                    }
                ]
            }
        },
        missouri: {
            abbreviation: 'MS',
            progressive: true,
            deductions: {
                single: 13850,
                marriedFilingJointly: 20800,
                marriedFilingSeparately: 13850,
                headOfHousehold: 20800
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 1207,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 1208,
                        maximum: 2414,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 2415,
                        maximum: 3621,
                        taxRate: 0.0250,
                        isTopBracket: false
                    },
                    {
                        minimum: 3622,
                        maximum: 4828,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 4829,
                        maximum: 6035,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 6036,
                        maximum: 7242,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 7243,
                        maximum: 8449,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 8850,
                        maximum: -1,
                        taxRate: 0.0495,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 1207,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 1208,
                        maximum: 2414,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 2415,
                        maximum: 3621,
                        taxRate: 0.0250,
                        isTopBracket: false
                    },
                    {
                        minimum: 3622,
                        maximum: 4828,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 4829,
                        maximum: 6035,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 6036,
                        maximum: 7242,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 7243,
                        maximum: 8449,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 8850,
                        maximum: -1,
                        taxRate: 0.0495,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 1207,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 1208,
                        maximum: 2414,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 2415,
                        maximum: 3621,
                        taxRate: 0.0250,
                        isTopBracket: false
                    },
                    {
                        minimum: 3622,
                        maximum: 4828,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 4829,
                        maximum: 6035,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 6036,
                        maximum: 7242,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 7243,
                        maximum: 8449,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 8850,
                        maximum: -1,
                        taxRate: 0.0495,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 1207,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 1208,
                        maximum: 2414,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 2415,
                        maximum: 3621,
                        taxRate: 0.0250,
                        isTopBracket: false
                    },
                    {
                        minimum: 3622,
                        maximum: 4828,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 4829,
                        maximum: 6035,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 6036,
                        maximum: 7242,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 7243,
                        maximum: 8449,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 8850,
                        maximum: -1,
                        taxRate: 0.0495,
                        isTopBracket: true
                    }
                ]
            }
        },
        montana: {
            abbreviation: 'MT',
            progressive: true,
            notes: [
                `Montana's standard deduction is based on income - not included yet.`
            ],
            deductions: {
                single: 2260,
                headOfHousehold: 10180,
                marriedFilingJointly: 10180,
                marriedFilingSeparately: 2260
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 3600,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 3601,
                        maximum: 6300,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 6301,
                        maximum: 9700,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 9701,
                        maximum: 13000,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 13001,
                        maximum: 16800,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 16801,
                        maximum: 21600,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 21601,
                        maximum: -1,
                        taxRate: 0.0675,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 3600,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 3601,
                        maximum: 6300,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 6301,
                        maximum: 9700,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 9701,
                        maximum: 13000,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 13001,
                        maximum: 16800,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 16801,
                        maximum: 21600,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 21601,
                        maximum: -1,
                        taxRate: 0.0675,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 3600,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 3601,
                        maximum: 6300,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 6301,
                        maximum: 9700,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 9701,
                        maximum: 13000,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 13001,
                        maximum: 16800,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 16801,
                        maximum: 21600,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 21601,
                        maximum: -1,
                        taxRate: 0.0675,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 3600,
                        taxRate: 0.0100,
                        isTopBracket: false
                    },
                    {
                        minimum: 3601,
                        maximum: 6300,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 6301,
                        maximum: 9700,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 9701,
                        maximum: 13000,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 13001,
                        maximum: 16800,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 16801,
                        maximum: 21600,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 21601,
                        maximum: -1,
                        taxRate: 0.0675,
                        isTopBracket: true
                    }
                ]
            }
        },
        nebraska: {
            abbreviation: 'NE',
            progressive: true,
            deductions: {
                single: 7900,
                headOfHousehold: 7900,
                marriedFilingJointly: 15800,
                marriedFilingSeparately: 7900
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 3700,
                        taxRate: 0.0246,
                        isTopBracket: false
                    },
                    {
                        minimum: 3701,
                        maximum: 22170,
                        taxRate: 0.0351,
                        isTopBracket: false
                    },
                    {
                        minimum: 22171,
                        maximum: 35730,
                        taxRate: 0.0501,
                        isTopBracket: false
                    },
                    {
                        minimum: 35731,
                        maximum: -1,
                        taxRate: 0.0664,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 3700,
                        taxRate: 0.0246,
                        isTopBracket: false
                    },
                    {
                        minimum: 3701,
                        maximum: 22170,
                        taxRate: 0.0351,
                        isTopBracket: false
                    },
                    {
                        minimum: 22171,
                        maximum: 35730,
                        taxRate: 0.0501,
                        isTopBracket: false
                    },
                    {
                        minimum: 35731,
                        maximum: -1,
                        taxRate: 0.0664,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 7390,
                        taxRate: 0.0246,
                        isTopBracket: false
                    },
                    {
                        minimum: 7391,
                        maximum: 44350,
                        taxRate: 0.0351,
                        isTopBracket: false
                    },
                    {
                        minimum: 44351,
                        maximum: 71460,
                        taxRate: 0.0501,
                        isTopBracket: false
                    },
                    {
                        minimum: 71461,
                        maximum: -1,
                        taxRate: 0.0664,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 3700,
                        taxRate: 0.0246,
                        isTopBracket: false
                    },
                    {
                        minimum: 3701,
                        maximum: 22170,
                        taxRate: 0.0351,
                        isTopBracket: false
                    },
                    {
                        minimum: 22171,
                        maximum: 35730,
                        taxRate: 0.0501,
                        isTopBracket: false
                    },
                    {
                        minimum: 35731,
                        maximum: -1,
                        taxRate: 0.0664,
                        isTopBracket: true
                    }
                ]
            }
        },
        nevada: {
            abbreviation: 'NV',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ]
            }
        },
        newHampshire: {
            abbreviation: 'NH',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ]
            }
        },
        newJersey: {
            abbreviation: 'NJ',
            progressive: true,
            deductions: {
                single: 1000,
                headOfHousehold: 1000,
                marriedFilingJointly: 2000,
                marriedFilingSeparately: 1000
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 20000,
                        taxRate: 0.0140,
                        isTopBracket: false
                    },
                    {
                        minimum: 20001,
                        maximum: 35000,
                        taxRate: 0.0175,
                        isTopBracket: false
                    },
                    {
                        minimum: 35001,
                        maximum: 40000,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 40001,
                        maximum: 75000,
                        taxRate: 0.05525,
                        isTopBracket: false
                    },
                    {
                        minimum: 75001,
                        maximum: 500000,
                        taxRate: 0.0637,
                        isTopBracket: false
                    },
                    {
                        minimum: 500001,
                        maximum: 1000000,
                        taxRate: 0.0897,
                        isTopBracket: false
                    },
                    {
                        minimum: 1000001,
                        maximum: -1,
                        taxRate: 0.10750,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 20000,
                        taxRate: 0.0140,
                        isTopBracket: false
                    },
                    {
                        minimum: 20001,
                        maximum: 50000,
                        taxRate: 0.0175,
                        isTopBracket: false
                    },
                    {
                        minimum: 50001,
                        maximum: 70000,
                        taxRate: 0.0245,
                        isTopBracket: false
                    },
                    {
                        minimum: 70001,
                        maximum: 80000,
                        taxRate: 0.03500,
                        isTopBracket: false
                    },
                    {
                        minimum: 80001,
                        maximum: 150000,
                        taxRate: 0.05525,
                        isTopBracket: false
                    },
                    {
                        minimum: 150001,
                        maximum: 500000,
                        taxRate: 0.0637,
                        isTopBracket: false
                    },
                    {
                        minimum: 500000,
                        maximum: 1000000,
                        taxRate: 0.0897,
                        isTopBracket: false
                    },
                    {
                        minimum: 1000001,
                        maximum: -1,
                        taxRate: 0.1075,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 20000,
                        taxRate: 0.0140,
                        isTopBracket: false
                    },
                    {
                        minimum: 20001,
                        maximum: 50000,
                        taxRate: 0.0175,
                        isTopBracket: false
                    },
                    {
                        minimum: 50001,
                        maximum: 70000,
                        taxRate: 0.0245,
                        isTopBracket: false
                    },
                    {
                        minimum: 70001,
                        maximum: 80000,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 80001,
                        maximum: 150000,
                        taxRate: 0.05525,
                        isTopBracket: false
                    },
                    {
                        minimum: 150001,
                        maximum: 500000,
                        taxRate: 0.0637,
                        isTopBracket: false
                    },
                    {
                        minimum: 500001,
                        maximum: 100000,
                        taxRate: 0.0897,
                        isTopBracket: false
                    },
                    {
                        minimum: 1000001,
                        maximum: -1,
                        taxRate: 0.1075,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 20000,
                        taxRate: 0.0140,
                        isTopBracket: false
                    },
                    {
                        minimum: 20001,
                        maximum: 35000,
                        taxRate: 0.0175,
                        isTopBracket: false
                    },
                    {
                        minimum: 35001,
                        maximum: 40000,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 40001,
                        maximum: 75000,
                        taxRate: 0.05525,
                        isTopBracket: false
                    },
                    {
                        minimum: 75001,
                        maximum: 500000,
                        taxRate: 0.0637,
                        isTopBracket: false
                    },
                    {
                        minimum: 500001,
                        maximum: 1000000,
                        taxRate: 0.0897,
                        isTopBracket: false
                    },
                    {
                        minimum: 1000001,
                        maximum: -1,
                        taxRate: 0.10750,
                        isTopBracket: true
                    }
                ]
            }
        },
        newMexico: {
            abbreviation: 'NM',
            progressive: true,
            deductions: {
                single: 13850,
                headOfHousehold: 13850,
                marriedFilingJointly: 27700,
                marriedFilingSeparately: 13850
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 5500,
                        taxRate: 0.0170,
                        isTopBracket: false
                    },
                    {
                        minimum: 5501,
                        maximum: 11000,
                        taxRate: 0.0320,
                        isTopBracket: false
                    },
                    {
                        minimum: 11001,
                        maximum: 16000,
                        taxRate: 0.0470,
                        isTopBracket: false
                    },
                    {
                        minimum: 16001,
                        maximum: 210000,
                        taxRate: 0.0490,
                        isTopBracket: false
                    },
                    {
                        minimum: 210001,
                        maximum: -1,
                        taxRate: 0.0590,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 5500,
                        taxRate: 0.0170,
                        isTopBracket: false
                    },
                    {
                        minimum: 5501,
                        maximum: 11000,
                        taxRate: 0.0320,
                        isTopBracket: false
                    },
                    {
                        minimum: 11001,
                        maximum: 16000,
                        taxRate: 0.0470,
                        isTopBracket: false
                    },
                    {
                        minimum: 16001,
                        maximum: 210000,
                        taxRate: 0.0490,
                        isTopBracket: false
                    },
                    {
                        minimum: 210001,
                        maximum: -1,
                        taxRate: 0.0590,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 8000,
                        taxRate: 0.0170,
                        isTopBracket: false
                    },
                    {
                        minimum: 8001,
                        maximum: 16000,
                        taxRate: 0.0320,
                        isTopBracket: false
                    },
                    {
                        minimum: 16001,
                        maximum: 24000,
                        taxRate: 0.0470,
                        isTopBracket: false
                    },
                    {
                        minimum: 24001,
                        maximum: 315000,
                        taxRate: 0.0490,
                        isTopBracket: false
                    },
                    {
                        minimum: 315001,
                        maximum: -1,
                        taxRate: 0.0590,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 5500,
                        taxRate: 0.0170,
                        isTopBracket: false
                    },
                    {
                        minimum: 5501,
                        maximum: 11000,
                        taxRate: 0.0320,
                        isTopBracket: false
                    },
                    {
                        minimum: 11001,
                        maximum: 16000,
                        taxRate: 0.0470,
                        isTopBracket: false
                    },
                    {
                        minimum: 16001,
                        maximum: 210000,
                        taxRate: 0.0490,
                        isTopBracket: false
                    },
                    {
                        minimum: 210001,
                        maximum: -1,
                        taxRate: 0.0590,
                        isTopBracket: true
                    }
                ]
            }
        },
        newYork: {
            abbreviation: 'NY',
            progressive: true,
            deductions: {
                single: 8000,
                headOfHousehold: 8000,
                marriedFilingJointly: 16050,
                marriedFilingSeparately: 8000
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 8500,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 8501,
                        maximum: 11700,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 11701,
                        maximum: 13900,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 13901,
                        maximum: 80650,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 80651,
                        maximum: 215400,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 215401,
                        maximum: 1077550,
                        taxRate: 0.0685,
                        isTopBracket: false
                    },
                    {
                        minimum: 1077551,
                        maximum: 5000000,
                        taxRate: 0.0965,
                        isTopBracket: false
                    },
                    {
                        minimum: 5000001,
                        maximum: 25000000,
                        taxRate: 0.1030,
                        isTopBracket: false
                    },
                    {
                        minimum: 25000001,
                        maximum: -1,
                        taxRate: 0.1090,
                        isTopBracket: false
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 8500,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 8501,
                        maximum: 11700,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 11701,
                        maximum: 13900,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 13901,
                        maximum: 80650,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 80651,
                        maximum: 215400,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 215401,
                        maximum: 1077550,
                        taxRate: 0.0685,
                        isTopBracket: false
                    },
                    {
                        minimum: 1077551,
                        maximum: 5000000,
                        taxRate: 0.0965,
                        isTopBracket: false
                    },
                    {
                        minimum: 5000001,
                        maximum: 25000000,
                        taxRate: 0.1030,
                        isTopBracket: false
                    },
                    {
                        minimum: 25000001,
                        maximum: -1,
                        taxRate: 0.1090,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 17150,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 17151,
                        maximum: 23600,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 23601,
                        maximum: 27900,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 27901,
                        maximum: 161550,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 161551,
                        maximum: 323200,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 323201,
                        maximum: 2155350,
                        taxRate: 0.0685,
                        isTopBracket: false
                    },
                    {
                        minimum: 2155351,
                        maximum: 5000000,
                        taxRate: 0.0965,
                        isTopBracket: false
                    },
                    {
                        minimum: 5000001,
                        maximum: 25000000,
                        taxRate: 0.1030,
                        isTopBracket: false
                    },
                    {
                        minimum: 25000001,
                        maximum: -1,
                        taxRate: 0.1090,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 8500,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 8501,
                        maximum: 11700,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 11701,
                        maximum: 13900,
                        taxRate: 0.0525,
                        isTopBracket: false
                    },
                    {
                        minimum: 13901,
                        maximum: 80650,
                        taxRate: 0.0550,
                        isTopBracket: false
                    },
                    {
                        minimum: 80651,
                        maximum: 215400,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 215401,
                        maximum: 1077550,
                        taxRate: 0.0685,
                        isTopBracket: false
                    },
                    {
                        minimum: 1077551,
                        maximum: 5000000,
                        taxRate: 0.0965,
                        isTopBracket: false
                    },
                    {
                        minimum: 5000001,
                        maximum: 25000000,
                        taxRate: 0.1030,
                        isTopBracket: false
                    },
                    {
                        minimum: 25000001,
                        maximum: -1,
                        taxRate: 0.1090,
                        isTopBracket: false
                    }
                ]
            }
        },
        northCarolina: {
            abbreviation: 'NC',
            progressive: false,
            deductions: {
                single: 12500,
                headOfHousehold: 25500,
                marriedFilingJointly: 12500,
                marriedFilingSeparately: 12500
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0475,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0475,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0475,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0475,
                        isTopBracket: true
                    }
                ]
            }
        },
        northDakota: {
            abbreviation: 'ND',
            progressive: true,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 44725,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 44726,
                        maximum: 225975,
                        taxRate: 0.0195,
                        isTopBracket: false
                    },
                    {
                        minimum: 225976,
                        maximum: -1,
                        taxRate: 0.0250,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 59950,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 59951,
                        maximum: 250550,
                        taxRate: 0.0250,
                        isTopBracket: false
                    },
                    {
                        minimum: 250551,
                        maximum: -1,
                        taxRate: 0.0250,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 74750,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 74751,
                        maximum: 275000,
                        taxRate: 0.0195,
                        isTopBracket: false
                    },
                    {
                        minimum: 275001,
                        maximum: -1,
                        taxRate: 0.0250,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 37375,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 37376,
                        maximum: 137550,
                        taxRate: 0.0195,
                        isTopBracket: false
                    },
                    {
                        minimum: 137551,
                        maximum: -1,
                        taxRate: 0.0250,
                        isTopBracket: true
                    }
                ]
            }
        },
        ohio: {
            abbreviation: 'OH',
            progressive: true,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 26050,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 26051,
                        maximum: 100000,
                        taxRate: 0.0275,
                        isTopBracket: false
                    },
                    {
                        minimum: 100001,
                        maximum: -1,
                        taxRate: 0.0350,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 26050,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 26051,
                        maximum: 100000,
                        taxRate: 0.0275,
                        isTopBracket: false
                    },
                    {
                        minimum: 100001,
                        maximum: -1,
                        taxRate: 0.0350,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 26050,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 26051,
                        maximum: 100000,
                        taxRate: 0.0275,
                        isTopBracket: false
                    },
                    {
                        minimum: 100001,
                        maximum: -1,
                        taxRate: 0.0350,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 26050,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 26051,
                        maximum: 100000,
                        taxRate: 0.0275,
                        isTopBracket: false
                    },
                    {
                        minimum: 100001,
                        maximum: -1,
                        taxRate: 0.0350,
                        isTopBracket: true
                    }
                ]
            }
        },
        oklahoma: {
            abbreviation: 'OK',
            progressive: true,
            deductions: {
                single: 6350,
                headOfHousehold: 6350,
                marriedFilingJointly: 12700,
                marriedFilingSeparately: 6350
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 6350,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 6351,
                        maximum: 7350,
                        taxRate: 0.0025,
                        isTopBracket: false
                    },
                    {
                        minimum: 7351,
                        maximum: 8850,
                        taxRate: 0.0075,
                        isTopBracket: false
                    },
                    {
                        minimum: 8851,
                        maximum: 10100,
                        taxRate: 0.0175,
                        isTopBracket: false
                    },
                    {
                        minimum: 10101,
                        maximum: 11250,
                        taxRate: 0.0275,
                        isTopBracket: false
                    },
                    {
                        minimum: 11251,
                        maximum: 13550,
                        taxRate: 0.0375,
                        isTopBracket: false
                    },
                    {
                        minimum: 13331,
                        maximum: -1,
                        taxRate: 0.0475,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 2000,
                        taxRate: 0.0025,
                        isTopBracket: false
                    },
                    {
                        minimum: 2001,
                        maximum: 5000,
                        taxRate: 0.0075,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 7500,
                        taxRate: 0.0175,
                        isTopBracket: false
                    },
                    {
                        minimum: 7501,
                        maximum: 9800,
                        taxRate: 0.0275,
                        isTopBracket: false
                    },
                    {
                        minimum: 9801,
                        maximum: 12200,
                        taxRate: 0.0375,
                        isTopBracket: false
                    },
                    {
                        minimum: 12201,
                        maximum: -1,
                        taxRate: 0.0475,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 2000,
                        taxRate: 0.0025,
                        isTopBracket: false
                    },
                    {
                        minimum: 2001,
                        maximum: 5000,
                        taxRate: 0.0075,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 7500,
                        taxRate: 0.0175,
                        isTopBracket: false
                    },
                    {
                        minimum: 7501,
                        maximum: 9800,
                        taxRate: 0.0275,
                        isTopBracket: false
                    },
                    {
                        minimum: 9801,
                        maximum: 12200,
                        taxRate: 0.0375,
                        isTopBracket: false
                    },
                    {
                        minimum: 7201,
                        maximum: -1,
                        taxRate: 0.0475,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 1000,
                        taxRate: 0.0025
                    },
                    {
                        minimum: 1001,
                        maximum: 2500,
                        taxRate: 0.0075
                    },
                    {
                        minimum: 2501,
                        maximum: 3750,
                        taxRate: 0.0175
                    },
                    {
                        minimum: 3751,
                        maximum: 4900,
                        taxRate: 0.00275
                    },
                    {
                        minimum: 4901,
                        maximum: 7200,
                        taxRate: 0.00375
                    },
                    {
                        minimum: 7201,
                        maximum: -1,
                        taxRate: 0.00475
                    }
                ]
            }
        },
        oregon: {
            abbreviation: 'OR',
            progressive: true,
            deductions: {
                single: 13850,
                headOfHousehold: 13850,
                marriedFilingJointly: 27700,
                marriedFilingSeparately: 13850
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 3750,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 3751,
                        maximum: 9450,
                        taxRate: 0.0675,
                        isTopBracket: false
                    },
                    {
                        minimum: 9451,
                        maximum: 125000,
                        taxRate: 0.0875,
                        isTopBracket: false
                    },
                    {
                        minimum: 125001,
                        maximum: -1,
                        taxRate: 0.0990,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 7500,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 7501,
                        maximum: 18900,
                        taxRate: 0.0675,
                        isTopBracket: false
                    },
                    {
                        minimum: 18901,
                        maximum: 250000,
                        taxRate: 0.0875,
                        isTopBracket: false
                    },
                    {
                        minimum: 250000,
                        maximum: -1,
                        taxRate: 0.0990,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 7500,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 7501,
                        maximum: 18900,
                        taxRate: 0.0675,
                        isTopBracket: false
                    },
                    {
                        minimum: 18901,
                        maximum: 250000,
                        taxRate: 0.0875,
                        isTopBracket: false
                    },
                    {
                        minimum: 250001,
                        maximum: -1,
                        taxRate: 0.0990,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 3750,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 3751,
                        maximum: 18900,
                        taxRate: 0.0675,
                        isTopBracket: false
                    },
                    {
                        minimum: 18901,
                        maximum: 250000,
                        taxRate: 0.0875,
                        isTopBracket: false
                    },
                    {
                        minimum: 250001,
                        maximum: -1,
                        taxRate: 0.0990,
                        isTopBracket: true
                    }
                ]
            }
        },
        pennsylvania: {
            abbreviation: 'PA',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0307
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0307
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0307
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0307
                    }
                ]
            }
        },
        rhodeIsland: {
            abbreviation: 'RI',
            progressive: true,
            deductions: {
                single: 13850,
                headOfHousehold: 13850,
                marriedFilingJointly: 27700,
                marriedFilingSeparately: 13850
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 73450,
                        taxRate: 0.0375,
                        isTopBracket: false
                    },
                    {
                        minimum: 73451,
                        maximum: 166950,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 166951,
                        maximum: -1,
                        taxRate: 0.0599,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 73450,
                        taxRate: 0.0375,
                        isTopBracket: false
                    },
                    {
                        minimum: 73451,
                        maximum: 166950,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 166951,
                        maximum: -1,
                        taxRate: 0.0599,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 73450,
                        taxRate: 0.0375,
                        isTopBracket: false
                    },
                    {
                        minimum: 73451,
                        maximum: 166950,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 166951,
                        maximum: -1,
                        taxRate: 0.0599,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 73450,
                        taxRate: 0.0375,
                        isTopBracket: false
                    },
                    {
                        minimum: 73451,
                        maximum: 166950,
                        taxRate: 0.0475,
                        isTopBracket: false
                    },
                    {
                        minimum: 166951,
                        maximum: -1,
                        taxRate: 0.0599,
                        isTopBracket: true
                    }
                ]
            }
        },
        southCarolina: {
            abbreviation: 'SC',
            progressive: true,
            deductions: {
                single: 13850,
                headOfHousehold: 17700,
                marriedFilingJointly: 13850,
                marriedFilingSeparately: 13850
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 3460,
                        taxRate: 0.0000,
                        isTopBracket: false
                    },
                    {
                        minimum: 3461,
                        maximum: 17330,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 17331,
                        maximum: -1,
                        taxRate: 0.0650,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 3200,
                        taxRate: 0.000
                    },
                    {
                        minimum: 3201,
                        maximum: 16040,
                        taxRate: 0.030
                    },
                    {
                        minimum: 16041,
                        maximum: -1,
                        taxRate: 0.065
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 3200,
                        taxRate: 0.000
                    },
                    {
                        minimum: 3201,
                        maximum: 16040,
                        taxRate: 0.030
                    },
                    {
                        minimum: 16041,
                        maximum: -1,
                        taxRate: 0.065
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 3200,
                        taxRate: 0.000
                    },
                    {
                        minimum: 3201,
                        maximum: 16040,
                        taxRate: 0.030
                    },
                    {
                        minimum: 16041,
                        maximum: -1,
                        taxRate: 0.065
                    }
                ]
            }
        },
        southDakota: {
            abbreviation: 'SD',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ]
            }
        },
        tennessee: {
            abbreviation: 'TN',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.00,
                        isTopBracket: true
                    }
                ]
            }
        },
        texas: {
            abbreviation: 'TX',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ]
            }
        },
        utah: {
            abbreviation: 'UT',
            progressive: false,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0465,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0465,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0465,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0465,
                        isTopBracket: true
                    }
                ]
            }
        },
        vermont: {
            abbreviation: 'VT',
            progressive: true,
            deductions: {
                single: 13850,
                headOfHousehold: 13850,
                marriedFilingJointly: 27700,
                marriedFilingSeparately: 13850
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 45400,
                        taxRate: 0.0335,
                        isTopBracket: false
                    },
                    {
                        minimum: 45401,
                        maximum: 110050,
                        taxRate: 0.0660,
                        isTopBracket: false
                    },
                    {
                        minimum: 110051,
                        maximum: 229550,
                        taxRate: 0.0760,
                        isTopBracket: false
                    },
                    {
                        minimum: 229550,
                        maximum: -1,
                        taxRate: 0.0875,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 60850,
                        taxRate: 0.0335,
                        isTopBracket: false
                    },
                    {
                        minimum: 60851,
                        maximum: 157150,
                        taxRate: 0.0660,
                        isTopBracket: false
                    },
                    {
                        minimum: 157151,
                        maximum: 254500,
                        taxRate: 0.0760,
                        isTopBracket: false
                    },
                    {
                        minimum: 254501,
                        maximum: -1,
                        taxRate: 0.0875,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 75850,
                        taxRate: 0.0335,
                        isTopBracket: false
                    },
                    {
                        minimum: 75850,
                        maximum: 183400,
                        taxRate: 0.0660,
                        isTopBracket: false
                    },
                    {
                        minimum: 183401,
                        maximum: 279450,
                        taxRate: 0.0760,
                        isTopBracket: false
                    },
                    {
                        minimum: 279451,
                        maximum: -1,
                        taxRate: 0.0875,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 37925,
                        taxRate: 0.0335,
                        isTopBracket: false
                    },
                    {
                        minimum: 37926,
                        maximum: 91700,
                        taxRate: 0.0660,
                        isTopBracket: false
                    },
                    {
                        minimum: 91701,
                        maximum: 139725,
                        taxRate: 0.0760,
                        isTopBracket: false
                    },
                    {
                        minimum: 139725,
                        maximum: -1,
                        taxRate: 0.0875,
                        isTopBracket: true
                    }
                ]
            }
        },
        virginia: {
            abbreviation: 'VA',
            progressive: true,
            deductions: {
                single: 4500,
                headOfHousehold: 4500,
                marriedFilingJointly: 9000,
                marriedFilingSeparately: 4500
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 3000,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: 5000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 17000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 17001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 3000,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: 5000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 17000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 17001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 3000,
                        taxRate: 0.0200,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: 5000,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 17000,
                        taxRate: 0.0500,
                        isTopBracket: false
                    },
                    {
                        minimum: 17001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 3000,
                        taxRate: 0.020,
                        isTopBracket: false
                    },
                    {
                        minimum: 3001,
                        maximum: 5000,
                        taxRate: 0.030,
                        isTopBracket: false
                    },
                    {
                        minimum: 5001,
                        maximum: 17000,
                        taxRate: 0.050,
                        isTopBracket: false
                    },
                    {
                        minimum: 17001,
                        maximum: -1,
                        taxRate: 0.0575,
                        isTopBracket: true
                    }
                ]
            }
        },
        washington: {
            abbreviation: 'WA',
            progressive: true,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: true
                    }
                ]
            }
        },
        westVirginia: {
            abbreviation: 'WV',
            progressive: true,
            deductions: {
                single: 13850,
                headOfHousehold: 13850,
                marriedFilingJointly: 27700,
                marriedFilingSeparately: 13850
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 9999,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 10000,
                        maximum: 24999,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 25000,
                        maximum: 39999,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 40000,
                        maximum: 59999,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 60000,
                        maximum: -1,
                        taxRate: 0.0650,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 10000,
                        taxRate: 0.030,
                        isTopBracket: false
                    },
                    {
                        minimum: 10001,
                        maximum: 25000,
                        taxRate: 0.040,
                        isTopBracket: false
                    },
                    {
                        minimum: 25001,
                        maximum: 40000,
                        taxRate: 0.045,
                        isTopBracket: false
                    },
                    {
                        minimum: 40001,
                        maximum: 60000,
                        taxRate: 0.060,
                        isTopBracket: false
                    },
                    {
                        minimum: 60001,
                        maximum: -1,
                        taxRate: 0.065,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 9999,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 10000,
                        maximum: 24999,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 25000,
                        maximum: 39999,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 40000,
                        maximum: 59999,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 60000,
                        maximum: -1,
                        taxRate: 0.0650,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 4999,
                        taxRate: 0.0300,
                        isTopBracket: false
                    },
                    {
                        minimum: 5000,
                        maximum: 12499,
                        taxRate: 0.0400,
                        isTopBracket: false
                    },
                    {
                        minimum: 12500,
                        maximum: 19999,
                        taxRate: 0.0450,
                        isTopBracket: false
                    },
                    {
                        minimum: 20000,
                        maximum: 29999,
                        taxRate: 0.0600,
                        isTopBracket: false
                    },
                    {
                        minimum: 30000,
                        maximum: -1,
                        taxRate: 0.0650,
                        isTopBracket: true
                    }
                ]
            }
        },
        wisconsin: {
            abbreviation: 'WI',
            progressive: true,
            notes: [
                `Wisconsin's standard deduction depends on income and other factors - not yet included here.`
            ],
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: 13810,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 13811,
                        maximum: 27630,
                        taxRate: 0.0440,
                        isTopBracket: false
                    },
                    {
                        minimum: 27631,
                        maximum: 304170,
                        taxRate: 0.0530,
                        isTopBracket: false
                    },
                    {
                        minimum: 304171,
                        maximum: -1,
                        taxRate: 0.0765,
                        isTopBracket: true
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: 13810,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 13811,
                        maximum: 27630,
                        taxRate: 0.0440,
                        isTopBracket: false
                    },
                    {
                        minimum: 27631,
                        maximum: 304170,
                        taxRate: 0.0530,
                        isTopBracket: false
                    },
                    {
                        minimum: 304171,
                        maximum: -1,
                        taxRate: 0.0765,
                        isTopBracket: true
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: 18420,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 18421,
                        maximum: 36840,
                        taxRate: 0.0440,
                        isTopBracket: false
                    },
                    {
                        minimum: 36841,
                        maximum: 405550,
                        taxRate: 0.0530,
                        isTopBracket: false
                    },
                    {
                        minimum: 405551,
                        maximum: -1,
                        taxRate: 0.0765,
                        isTopBracket: true
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: 9210,
                        taxRate: 0.0350,
                        isTopBracket: false
                    },
                    {
                        minimum: 9211,
                        maximum: 18420,
                        taxRate: 0.0440,
                        isTopBracket: false
                    },
                    {
                        minimum: 18421,
                        maximum: 304170,
                        taxRate: 0.0530,
                        isTopBracket: false
                    },
                    {
                        minimum: 304171,
                        maximum: -1,
                        taxRate: 0.0765,
                        isTopBracket: true
                    }
                ]
            }
        },
        wyoming: {
            abbreviation: 'WY',
            progressive: true,
            deductions: {
                single: 0,
                headOfHousehold: 0,
                marriedFilingJointly: 0,
                marriedFilingSeparately: 0
            },
            brackets: {
                single: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: false
                    }
                ],
                headOfHousehold: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: false
                    }
                ],
                marriedFilingJointly: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: false
                    }
                ],
                marriedFilingSeparately: [
                    {
                        minimum: 0,
                        maximum: -1,
                        taxRate: 0.0000,
                        isTopBracket: false
                    }
                ]
            }
        }
    }
};
export function calculateStateTax(annualGrossIncome, state, filingStatus, includeChamp) {
    var taxAmount = 0;
    var marginalIncome = 0;
    var incrementalTax = 0;
    var next = true;
    const stateConfig = configuration.states[state];
    var taxableIncome = annualGrossIncome - stateConfig.deductions[filingStatus];
    if (includeChamp) {
        taxableIncome += -(276.92 * 52);
    }
    for (let bracket of stateConfig.brackets[filingStatus]) {
        if ((taxableIncome >= bracket.maximum) && next === true) {
            if (bracket.isTopBracket === false) {
                incrementalTax = (bracket.maximum - bracket.minimum) * bracket.taxRate;
                taxAmount += incrementalTax;
            }
            else {
                incrementalTax = (taxableIncome - bracket.minimum) * bracket.taxRate;
                taxAmount += incrementalTax;
                next = false;
            }
        }
        else {
            if (marginalIncome === 0) {
                marginalIncome = taxableIncome - bracket.minimum;
                incrementalTax = marginalIncome * bracket.taxRate;
                taxAmount += incrementalTax;
                next = false;
            }
        }
    }
    console.log(`state tax: ${taxAmount}`);
    return {
        taxableIncome: taxableIncome,
        taxAmount: taxAmount
    };
}
export function calcultateFicaTax(grossIncome) {
    let ficaTaxRate = .0620;
    return grossIncome * ficaTaxRate;
}
export function calculateMedicareTax(grossIncome) {
    let medicareRate = 0.0145;
    return grossIncome * medicareRate;
}
export function calculateFederalTax(grossIncome, filingStatus, includeChamp) {
    var taxAmount = 0; // holds the cumulative tax amount
    var marginalIncome = 0; // holds the marginal income between the taxable income and bracket minimum
    var incrementalTax = 0; // hold the amount of incremental tax for each bracket traversed
    var next = true; // holds a flag for whether to continue to the next bracket
    const ficaTaxRate = 0.0765; // this is the standard fica + medicaid rate
    const federalConfig = configuration.federal; // holds the full federal configuration
    var taxableIncome = grossIncome - federalConfig.deductions[filingStatus];
    if (includeChamp) {
        taxableIncome += -(276.92 * 52); // FIX
    }
    // loop through brackets 
    for (let bracket of federalConfig.brackets[filingStatus]) {
        if ((taxableIncome >= bracket.maximum) && next === true) {
            if (bracket.isTopBracket === false) {
                incrementalTax = (bracket.maximum - bracket.minimum) * bracket.taxRate;
                console.log(`incremental tax: ${incrementalTax}`);
                taxAmount += incrementalTax;
            }
            else {
                incrementalTax = (taxableIncome - bracket.minimum) * bracket.taxRate;
                console.log(`incremental tax: ${incrementalTax}`);
                taxAmount += incrementalTax;
                next = false; // now that we reached the top bracket we can stop
            }
        }
        else {
            if (marginalIncome === 0) {
                marginalIncome = taxableIncome - bracket.minimum;
                incrementalTax = marginalIncome * bracket.taxRate;
                console.log(`incremental tax: ${incrementalTax}`);
                taxAmount += incrementalTax;
                next = false; // now that we found the appropriate bracket we can stop evaluating any additional brackets
            }
        }
    }
    return {
        taxableIncome: taxableIncome,
        taxAmount: taxAmount
    };
}
export function calculateChampEffect(grossIncome, state, filingStatus, payCycle) {
    const payCycleMap = {
        weekly: 52,
        biWeekly: 26,
        biMonthly: 24,
        monthly: 12
    };
    const payCycleDivisor = payCycleMap[payCycle];
    // calculate state tax without include the champ salary reduction
    let stateTaxBefore = calculateStateTax(grossIncome, state, filingStatus, false);
    // calculate federal tax without include the champ salary reduction
    let federalTaxBefore = calculateFederalTax(grossIncome, filingStatus, false);
    // calculate state tax including the champ salary reduction
    let stateTaxAfter = calculateStateTax(grossIncome, state, filingStatus, true);
    // calculate state federal tax including the champ salary reduction
    let federalTaxAfter = calculateFederalTax(grossIncome, filingStatus, true);
    // calculate fica tax 
    let ficaTax = calcultateFicaTax(grossIncome);
    // calculate medicare tax
    let medicareTax = calculateMedicareTax(grossIncome);
    const netIncomeBefore = grossIncome - federalTaxBefore.taxAmount - ficaTax - medicareTax - stateTaxBefore.taxAmount;
    const netIncomeAfter = grossIncome - federalTaxAfter.taxAmount - ficaTax - medicareTax - stateTaxAfter.taxAmount;
    const before = {
        grossIncome: (grossIncome / payCycleDivisor),
        taxableIncome: (federalTaxBefore.taxableIncome / payCycleDivisor),
        federalTax: (federalTaxBefore.taxAmount / payCycleDivisor),
        ficaTax: (ficaTax / payCycleDivisor),
        medicareTax: (medicareTax / payCycleDivisor),
        stateTaxableIncome: (stateTaxBefore.taxableIncome / payCycleDivisor),
        stateTax: (stateTaxBefore.taxAmount / payCycleDivisor),
        netIncome: (netIncomeBefore / payCycleDivisor)
    };
    const after = {
        grossIncome: (grossIncome / payCycleDivisor),
        taxableIncome: (federalTaxAfter.taxableIncome / payCycleDivisor),
        federalTax: (federalTaxAfter.taxAmount / payCycleDivisor),
        ficaTax: (ficaTax / payCycleDivisor),
        medicareTax: (medicareTax / payCycleDivisor),
        stateTaxableIncome: (stateTaxAfter.taxableIncome / payCycleDivisor),
        stateTax: (stateTaxAfter.taxAmount / payCycleDivisor),
        netIncome: (netIncomeAfter / payCycleDivisor)
    };
    const comparison = {
        employeeBenefit: (netIncomeAfter - netIncomeBefore) / 12
    };
    console.log(before);
    console.log(after);
    console.log(comparison);
}

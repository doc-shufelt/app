/**
 * FINCH CONFIGURATION
 * @description this configuration file describes entirely the api calls required for finch
 * 
 */
const FinchConfig = {
    apiVersion: `2020-09-17`,
    baseUrl: `https://api.tryfinch.com/`,
    clientId: 'finch-client-id',
    redirectUri: {
        development: 'http://localhost:8080/imports',
        production: 'https://api.bluebirdbenefits.io/imports'
    },
    endpoints: {
        token: {
            endpoint: `auth/token`,
            method: `post`,
            request: {
                headers: {
                    'finch-api-version': `2020-09-17`,
                    'content-type': `application/json`
                },
                body: {
                    client_id: 'string',
                    client_secret: 'string',
                    code: 'string',
                    redirect_uri: 'string' // required because we are using Finch Connect Flow
                }
            },
            response: {
                company_id: 'string',
                account_id: 'string',
                provider_id: 'string',
                products: 'array',
                client_type: 'string',
                connection_type: 'string',
                access_token: 'string'
            }
        },
        company: {
            endpoint: `employer/company`,
            method: `get`,
            request: {
                headers: {
                    'finch-api-version': `2020-09-17`,
                    authorization: null
                }
            },
            response: {
                id: 'string',
                legal_name: 'string',
                entity: {
                    type: 'string',
                    subtype: 'string'
                },
                ein: 'string',
                primary_email: 'string',
                primary_phone_number: 'string',
                departments: [
                    {
                        name: 'string',
                        parent: {
                            name: 'string'
                        }
                    }
                ],
                locations: [
                    {
                        line1: 'string',
                        line2: 'string',
                        city: 'string',
                        state: 'string',
                        postal_code: 'string',
                        country: 'string'
                    }
                ],
                accounts: [
                    {
                        routing_number: 'string',
                        account_name: 'string',
                        institution_name: 'string',
                        account_type: 'string',
                        account_number: 'string'
                    }
                ]
            }
        },
        directory: {
            endpoint: `employer/directory`,
            method: `get`,
            request: {
                headers: {
                    'finch-api-version': `2020-09-17`,
                    authorization: null
                },
                paging: {
                    count: 'number',
                    offset: 'number'
                }
            },
            response: {
                paging: {
                    count: 'number',
                    offset: 'number'
                },
                individuals: [
                    {
                        id: 'string',
                        first_name: 'string',
                        middle_name: 'string',
                        last_name: 'string',
                        manager: {
                            id: 'string'
                        },
                        department: {
                            name: 'string'
                        },
                        is_active: 'boolean'
                    }
                ]
            }
        },
        individual: {
            endpoint: `employer/individual`,
            method: `post`,
            request: {
                headers: {
                    'finch-api-version': `2020-09-17`,
                    'content-type': `application/json`,
                    authorization: null
                },
                requests: [ 
                    {
                        individual_id: 'string' //  { "individual_id": "c7962b5b-0e6d-4745-a6c3-1ffff6e2883" }
                    }
                ],
                options: {
                    include: `ssn` // ssn is the parameter to include
                }
            },
            response: {
                responses: [
                    {
                        individual_id: 'string',
                        code: 'string',
                        body: {
                            id: 'string',
                            first_name: 'string',
                            middle_name: 'string',
                            last_name: 'string',
                            preferred_name: 'string',
                            emails: [
                                {
                                    data: 'string',
                                    type: 'string'
                                }
                            ],
                            phone_numbers: [
                                {
                                    data: 'string',
                                    type: 'string'
                                }
                            ],
                            gender: 'enum',
                            ethnicity: 'enum',
                            dob: 'date',
                            residence: {
                                line1: 'string',
                                line2: 'string',
                                city: 'string',
                                state: 'string',
                                postal_code: 'string',
                                country: 'string'
                            }
                        }
                    }
                ]
            }
        },
        employment: {
            endpoint: `employer/employment`,
            method: `post`,
            request: {
                headers: {
                    'finch-api-version': `2020-09-17`,
                    'content-type': `application/json`,
                    authorization: null
                },
                body: [
                    `individual_id`
                ]
            },
            response: {
                responses: [
                    {
                        individual_id: 'string',
                        code: 'string',
                        body: {
                            id: 'string',
                            first_name: 'string',
                            middle_name: 'string',
                            last_name: 'string',
                            title: 'string',
                            manager: {
                                id: 'string'
                            },
                            department: {
                                'name': 'string'
                            },
                            employment: {
                                typeunit: 'enum',
                                subtypeunit: 'enum'
                            },
                            start_date: 'date',
                            end_date: 'date',
                            is_active: 'boolean',
                            class_code: 'enum',
                            location: {
                                line1: 'string',
                                line2: 'string',
                                city: 'string',
                                stateunit: 'string',
                                postal_code: 'string',
                                country: 'string'
                            },
                            income: {
                                unit: 'string',
                                amount: 'number',
                                currencyunit: 'string',
                                effective_date: 'date'
                            },
                            income_history: [
                                {
                                    unit: 'string',
                                    amount: 'number',
                                    currencyunit: 'string',
                                    effective_date: 'date'
                                }
                            ],
                            custom_fields: [
                                {
                                    'name': null,
                                    value: 'string'
                                }
                            ],
                            source_id: 'string'
                        }
                    }
                ]
            }
        },
        payment: {
            endpoint: `employer/payment`,
            method: `get`,
            request: {
                headers: {
                    'finch-api-version': `2020-09-17`,
                    authorization: null
                },
                queryParameters: {
                    start_date: 'date',
                    end_date: 'date'
                }
            },
            response: [{
                id: 'string',
                pay_period: {
                    start_date: 'date',
                    end_date: 'date'
                },
                pay_date: 'date',
                debit_date: 'date',
                company_debit: {
                    amount: 'number',
                    currency: 'string'
                },
                gross_pay: {
                    amount: 'number',
                    currency: 'string'
                },
                net_pay: {
                    amount: 'number',
                    currency: 'string'
                },
                employer_taxes: {
                    amount: 'number',
                    currency: 'string'
                },
                employee_taxes: {
                    amount: 'number',
                    currency: 'string'
                },
                individual_ids: 'array'
            }]
        },
        statement: {
            endpoint: `employer/pay-statement`,
            method: `post`,
            request: {
                headers: {
                    'finch-api-version': `2020-09-17`,
                    'content-type': `application/json`,
                    authorization: null
                },
                body: {
                    paging: {
                        limit: 'number',
                        offset: 'number'
                    },
                    requests: [
                        { payment_id: 'string' }, // "{ "payment_id"="fc8b024e-d373-4c9c-80fc-f1625383d142" }"
                    ]
                }
            },
            response: {
              responses: [ {
                    payment_id: 'string',
                    code: 'string',
                    body: {
                        paging: {
                            count: 'number',
                            offset: 'number'
                        },
                        pay_statements: [ {
                            individual_id: 'string',
                            type: 'string',
                            payment_method: 'string',
                            total_hours: 'number',
                            gross_pay: 'number',
                            net_pay: 'number',
                            earnings: 'number',
                            taxes: [
                                {
                                    type: 'string',
                                    name: 'string',
                                    employer: 'boolean',
                                    amount: 'number',
                                    currency: 'string'
                                }
                            ],
                            employee_deductions: [
                                {
                                    name: 'string',
                                    amount: 'number',
                                    currency: 'string',
                                    type: [
                                        `401k`, 
                                        `401k_roth`, 
                                        `401k_loan`,
                                        `403b`, 
                                        `403b_roth`, 
                                        `457`, 
                                        `457_roth`, 
                                        `s125_medical`, 
                                        `s125_dental`,
                                        `s125_vision`,
                                        `hsa_pre`,
                                        `hsa_post`,
                                        `fsa_medical`,
                                        `fsa_dependent_care`,
                                        `simple_ira`,
                                        `simple`,
                                        `commuter`,
                                        `custom_post_tax`,
                                        'custom_pre_tax'
                                    ]
                                }
                            ],
                                employer_contributions: [
                                    {
                                        name: 'string',
                                        amount: 'number',
                                        currency: 'string',
                                        type: [
                                            `401k`, 
                                            `401k_roth`, 
                                            `401k_loan`,
                                            `403b`, 
                                            `403b_roth`, 
                                            `457`, 
                                            `457_roth`, 
                                            `s125_medical`, 
                                            `s125_dental`,
                                            `s125_vision`,
                                            `hsa_pre`,
                                            `hsa_post`,
                                            `fsa_medical`,
                                            `fsa_dependent_care`,
                                            `simple_ira`,
                                            `simple`,
                                            `commuter`,
                                            `custom_post_tax`,
                                            'custom_pre_tax'
                                        ]
                                    }
                                ]
                            }
                        ] }
                    }
                ] 
            }
        }
    }
}

export default FinchConfig
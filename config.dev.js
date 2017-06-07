const config = {
    // Set Server Environment as Development
    ENV: 'dev',

    // App secret, please REPLACE IT WITH A RANDOM STRING IN PRODUCTION
    secret: 'APPSECRET-REPLACE WITH A RANDOM STRING IN PRODUCTION',

    // Set whether database is split into different servers
    db_split: false,
    mongo: {
        url: '127.0.0.1',
        port: '27017',
        collection: 'todooo'
    }
}


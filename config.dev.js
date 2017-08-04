const config = {
    // Server ID, please REPLACE IT WITH A RANDOM STRING IN PRODUCTION
    server: '',

    // App secret, please REPLACE IT WITH A RANDOM STRING IN PRODUCTION
    secret: 'COY1R4UYXVnsmL+0xzoRrh0yH6+3HbKAm6ajQhAUOh2OB676euYr+5WcxRRde0W5ROs/MQ+Gtrs7wpEvZ',

    frontPswHash: '',

    // Expire time for a token, time is set in second.(eg. 1day = 86400)
    token_exp_time: 86400,

    // Set whether database is split into different servers
    db: {
        db_split: false,
        mongo_url: "mongodb://localhost:27017/todooo"
    }

}

module.exports = config;

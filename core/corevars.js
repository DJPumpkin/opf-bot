module.exports = {
    /**
     * @param value
     * @returns {boolean}
     */
    isException: function (value) {
        const exceptions = [
            "y'all",
            "symphogear"
        ];
        if (exceptions.indexOf(value) === -1) {
            return false;
        } else {
            return true;
        }
    },

    /**
     * @param value
     * @returns {boolean}
     */
    isAvailable: function (value) {
        const commandsArray = [
            'hello',
            'help',
            'latest',
            'love',
            'username',
            'whois',
            'nsfw',
            "muhahaha",
            "who's boss",
            "garchu",
            "q"
        ];
        if (commandsArray.indexOf(value) === -1) {
            return false;
        } else {
            return true;
        }
    },

    /**
     * @returns {string}
     */
    randomHello: function() {
        const textArray = [
            "‘Ello, mate.",
            "Heeey, baaaaaby.",
            "Hi, honeybunch!",
            "Oh, yohohohohohohohohohohoho!",
            "How you doin'?",
            "I like your face.",
            "What's cookin', good lookin'? <:smugbird:432840473439109130> ",
            "Howdy, miss.",
            "Why, hello there!",
            "Hey, boo."
        ];

        let randomNumber = Math.floor(Math.random()*textArray.length);
        return textArray[randomNumber];
    },

    /**
     * @returns {string}
     */
    randomColor: function() {
        const colorArray = [
            '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
            '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0'
        ];
        let randomColor = Math.floor(Math.random() * colorArray.length);
        return colorArray[randomColor];
    },

    /**
     * @param message
     */
    credits: function(message) {
        message.channel.send('<@408255473821679617> made me, he\'s boss!');
        message.channel.fetchMessage(message.id)
            .then(m => {
                m.delete();
            });
    },

    /**
     * @param section
     * @returns {string}
     */
    buildRss: function(section) {
        let url = 'https://opforum.net/'+section+'/index.rss';
        return url;
    },



};
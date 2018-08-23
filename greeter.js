(function (global, $) {

    /**
     * @param String firstName
     * @param String lastName
     * @param String language
     */
    var Greeter = function (firstName = '', lastName = '', language = 'en') {
        return new Greeter.init(firstName, lastName, language);
    }

    var supportedLanguages = ['en', 'es', 'jp'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
        jp: 'Kon\'nichiwa',
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        jp: 'Kon\'bawa',
    };

    var logMessages = {
        en: 'Logged In',
        es: 'Conectado',
        jp: 'Roguin shita',
    };

    Greeter.prototype = {
       fullName: function () {
            return `${this.firstName} ${this.lastName}`;
       },

       validate: function () {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
       },

       greeting: function () {
           return `${greetings[this.language]} ${this.firstName}!`;
       },

       formalGreeting: function () {
           return `${formalGreetings[this.language]} ${this.fullName()}!`;
       },

       greet: function (formal) {
            var msg;

            // if undefined or null be coerced to "false"
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // "this" refers to the calling object at execution time
            // make the method chainable
            return this;
       },
       log: function () {
           if (console) {
               console.log(`${logMessages[this.language]}: ${this.fullName()}`);
           }

           return this;
       },

       setLang: function (lang) {

            this.language = lang;

            this.validate();

            return this;

       }

    };

    Greeter.init = function (firstName, lastName, language) {
        self = this;

        self.firstName = firstName;
        self.lastName = lastName;
        self.language = language;
    }

    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.$g = global.$G = Greeter;

}(window || this, jQuery));
;(function (global, $) {

    /**
     * "new" an object
     * @param String firstName
     * @param String lastName
     * @param String language
     */
    var Greeter = function (firstName = '', lastName = '', language = 'en') {
        return new Greeter.init(firstName, lastName, language);
    }

    // Hidden within the scope of The "IIFE" and never directly accessible
    var supportedLanguages = ['en', 'es', 'jp'];

    // Informal Greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola',
        jp: 'Kon\'nichiwa',
    };

    // Formal Greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        jp: 'Kon\'bawa',
    };

    // Logger Messages
    var logMessages = {
        en: 'Logged In',
        es: 'Conectado',
        jp: 'Roguin shita',
    };

    // Prototype holds methods (to save memory space)
    Greeter.prototype = {
        // "this" refers to the calling object at execution time
       fullName: function () {
            return `${this.firstName} ${this.lastName}`;
       },

       validate: function () {
            // check that is a valid language
            // references that externally inaccessible "supportedLanguages" within the closure
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
       },

       // Retrieve Messsages From object by Referring to properties using [] syntax
       greeting: function () {
           return `${greetings[this.language]} ${this.firstName}!`;
       },

       formalGreeting: function () {
           return `${formalGreetings[this.language]} ${this.fullName()}!`;
       },

       greet: function (formal) {
            var msg = this.generateGreet(formal);

            if (console) {
                console.log(msg);
            }

            // make the method chainable
            return this;
       },
       generateGreet: function (formal) {
            return formal ? this.formalGreeting() : this.greeting();
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

       },

       HTMLGreeting: function (selector, formal) {
           if (! $) {
               throw "jQuery Not Loaded";
           }

           if (! selector) {
               throw "Missing jQuery Selector";
           }


           var msg = this.generateGreet(formal);

            $(selector).html(msg);
            
            return this;
       },
       html: function (selector, formal) {
           return this.HTMLGreeting(selector, formal);
       },

    };

    // the actual object is created here, allowing us  to "new" an object without calling "new"
    Greeter.init = function (firstName, lastName, language) {
        self = this;

        self.firstName = firstName;
        self.lastName = lastName;
        self.language = language;

        self.validate();
    }

    // Trick borrowed From jQuery so we don't have to use the "new" keyword
    Greeter.init.prototype = Greeter.prototype;

    // attach out Greeter to the global object with aliases
    global.Greeter = global.$g = global.$G = Greeter;

}(window || this, jQuery));
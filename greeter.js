(function (global, $) {

    /**
     * @param String firstName
     * @param String lastName
     * @param String language
     */
    var Greeter = function (firstName = '', lastName = '', language = 'en') {
        return new Greeter.init(firstName, lastName, language);
    }

    Greeter.prototype = {};

    Greeter.init = function (firstName, lastName, language) {
        self = this;

        self.firstName = firstName;
        self.lastName = lastName;
        self.language = language;
    }

    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.$g = global.$G = Greeter;

}(window || this, jQuery));
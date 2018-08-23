# Greeting 
> Just For Learning Proposes Only

## Use Greet

```javascript
$G('Alaa', 'Dragneel', $('#lang').val()).greet().html('#greeting', true).log();
```
See Your **`console panel`**

## Use Change The Language

```javascript
var greet = $G('Alaa', 'Dragneel', $('#lang').val());

greet.setLang('en');
```

## Use Formal And Informal Greet

```javascript
var greet = $G('Alaa', 'Dragneel');
// true for formal
greet.html('#greeting', true);
```

## Log Your Status

```javascript
$G('Alaa', 'Dragneel').log();
```

## Html Support
`Out Of The Box Greeter Support Jquery and Need to be Found`
`HTMLGreeting() is equal to html()`
```javascript
$G('Alaa', 'Dragneel').html(`jquerySelector`, `formal:(true|false)`);
$G('Alaa', 'Dragneel').HTMLGreeting(`jquerySelector`, `formal:(true|false)`);
```

## Big Example
```javascript
// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = $G('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function () {

    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrtr = $G('Alaa', 'Dragneel');

    // hide the login on the screen
    $('#login-div').hide();

    // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});
```
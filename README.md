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
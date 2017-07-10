# Mushroom-Mania

## Requirements

For this exercise, you're going to create a basic application, with a single view. Your job is to load the JSON data below and display it in a list. Above the list, provide one text box, and two radio buttons.

The radio buttons should be labeled Poisonous and Non-poisonous.

When the user types any text into the text box, the list of mushrooms should be filtered down to any mushrooms whose description contains that text.

When the user clicks either of the radio buttons, only the appropriate mushrooms should be displayed.

You will need:

An Angular application module.
One controller defined in your application. The controller will load the JSON with an XHR call using the $http function that Angular provides.
One partial bound to the controller.
Several directives will be helpful. ng-repeat, ng-click, and the filter property on the ng-repeat.
Load the JSON below into a new Firebase application rather than reading it from a local file.
Put the JSON object into $scope.mushrooms and bind that variable in your partial.
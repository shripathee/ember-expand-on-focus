# Ember-expand-on-focus

This is a bare-bones, highly customizable UI component for interaction through focus-in and focus-out events. If the component is in the expanded state, a class named 'expanded' is added to it.

##Usage
```
{{#expander-on-focus}}

  ..... (your content).....

{{/expander-on-focus}}
```

##What it does:
* Clicking anywhere outside the component removes the class 'expanded', if it is present.

* Clicking within the component involves 2 cases:

  1. Clicking on an element with the class 'force-shrink' removes the 'expanded' class of the component. This can be used for close buttons within the component.

  2. Clicking anywhere else within the component adds the class 'expanded', if it is not already present


* Also, you can bind the expanded property to a property of the surrounding context. Please note that both are boolean properties.
```
{{#expander-on-focus expanded=isExpanded}}
..... (your content) .....
{{/expander-on-focus}}
```

## Installation
```
ember install:addon ember-expand-on-focus
```
To try out the addon, clone the repository and run
```
cd ember-expand-on-focus
ember server
```

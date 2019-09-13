# 2019-09-13 Zero to React Class

## JavaScript references (for background)

- JavaScript in 14 Minutes: https://jgthms.com/javascript-in-14-minutes/
- JavaScript.com by Pluralsight: https://www.javascript.com/ 
- MDN: https://developer.mozilla.org/en-US/docs/Learn/JavaScript 
- You Don't Know JS: https://github.com/getify/You-Dont-Know-JS/tree/1st-ed 
- https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started 
- https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started

## React

The problem that React solves is making web pages more dynamic, usually without requiring users' intervention to reload pages, and so on.

The UI can have a number of different states, many of which can interact with each other.

State Machines contain states. Moving from one state to another is a _state transition_. The challenge before React was how to effectively manage increasing number of states?

The old way of doing this was to manipulate the DOM manually. This isn't feasible. One of the ideas behind React is to throw out the UI, and re-render it dynamically.

It's possible to add a React element to a page that otherwise doesn't use React. Functions calling other functions to create these dynamic elements on a page.

Internally, React returns something similar to strings. React returns elements, with the result that the UI is rendered as a nested data structure, in turn containing a nested tree of element descriptions with properties.

React compares the new state with the previous state, and UI, through a reconciliation process. This determines which components need to be updated in the DOM. This is roughly what the React algorithm does.

Anatomy of a React function like this:

```js
/ UI components, mapping props (data) to UI (React elements)
// No longer returning strings. Instead, returning React elements.
function UI(props) {
    return [
        React.createElement(SearchBox, { query: props.query, onChange: doSearch }),
        props.loading && React.createElement(LoadingPlaceholder, { query: props.query }),
        props.results && React.createElement(DomainsList, { domains: props.results }),
    ];
}
```

The function contains the following parameters: `React.createElement(component, props, children)`. For example, in this function:

```js
function DomainsList(props) {
    return React.createElement('ul', null, props.domains.map(Domain));
}
```

In this example -

* `'ul'` is the component;
* `null` is the `props` value; and
* `props.domains.map(Domain)` is the child value.

In React, the UI comprises functions of state. The following function sets the new state, and then renders it into the relevant container:

```js
function setState(newState) {
    state = { ...state, ...newState };
    render();
}
```

In the following two functions, we can see the parent-child relationship [here](https://cld.wthms.co/yqOErC):

![](https://cld.wthms.co/yqOErC+)

_Screenshot direct link:_ https://cld.wthms.co/yqOErC

We'll also see fragments in our React code. Here's more information about this:

* [Fragments – React](https://reactjs.org/docs/fragments.html)
* [Understanding Fragments in React - Bits and Pieces](https://blog.bitsrc.io/understanding-fragments-in-react-a1b6e534b01a)

[For example](https://cld.wthms.co/vmtb6p):

![](https://cld.wthms.co/vmtb6p+)

_Screenshot direct link:_ https://cld.wthms.co/vmtb6p

One use for fragments is to obviate the need for `<div>`s. They help add structure to the components/elements (?).

>A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

_[Source](https://reactjs.org/docs/fragments.html)_
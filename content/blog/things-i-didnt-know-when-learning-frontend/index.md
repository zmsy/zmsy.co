---
title: "Things I Didn't Know When Learning Frontend Development"
description: "Starting as a backend developer, the switch to learning frontend was jarring in many ways. I tried to spend that time documenting them."
publishDate: 2020-11-22T20:48:58-08:00
# draft: true
---

I'm a backend developer by trade. I've always admired frontend and it's direct connection to users, and those who are talented at it have always seemed impressive to me.

Learning frontend, there was a lot I screwed up. I ended up googling many, many things with poor search terms. I wrote a lot of bad or duplicated code and wasted a lot of time. Here are some of the core things I didn't understand at first, and the recommendations I'd make if I were to do it again.

## Tooling is as Difficult as You Make It

I've always had an unending need to build things from scratch, knowing how the components fit together so that I can truly understand the tools that I'm using. Or so I thought, most of the time.

Implementing Javascript tooling is buoyed by knowing the Javascript ecosystem well, in one form or another. I didn't when I started out, so I led myself down dead ends trying to configure build tools that I didn't necessarily understand the mechanics of. Testing frameworks, Bundlers, linters, transpilers, typescript, frontend frameworks. There is a lot of space for you to get lost in the details in frontend. The tooling exists to bolster your workflow and make you a better developer, but configuring it is something you want to ease your way into.

**Recommendation:** Try either a batteries-included starter from Github or a beginner friendly dev setup like Create React App. You can learn the ins and outs of how these tools work through them, and then form opinions on what you'd do differently for when you want to build it yourself. Plenty of people make great websites without ever writing any build tool configs.

## Which Features Correspond to Which ES Versions

If you've either been following the development of the ECMAScript standards as the years have gone on, or been tasked with supported older browsers using something like Babel, you're probably intimately familiar with what portions of the standard correspond to which versions.

Why is this important? Your build tool / framework likely has a _source_ version of JS that you write in and a _target_ version that gets shipped to the browser, and it helps to understand the difference between those two.

Resources I used:

- [Flavio Copes introductory page](https://flaviocopes.com/ecmascript/)
- Using MDN to look up [modern JS methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) like `Object.entries`

## CommonJS / ES Modules

Code structuring is an example showing how the Javascript ecosystem is a very much evolving one, with new standards emerging and old ones being slowly deprecated. When I started, I just assumed that I'd be able to use the new format, ES Modules, everywhere. Since support for ESM is only making its way slowly into browsers, that turned out not to be the case.

Then I realized it wasn't even implemented in Node yet, as of the time I had started (this [is available in some node versions now](https://nodejs.org/api/esm.html)).

**Recommendation**: If you're using a framework, use whatever that framework uses. I found it easy to set up [Typescript](https://www.typescriptlang.org/) and [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) together using only ES Modules, since it largely handled the difficult parts for me.

## Node as Frontend Build Tool vs. Backend Runtime

I've known that Node is heavily intertwined with frontend development for a long time now, but hadn't truly grasped that it's used for a multitude of purposes for the JS ecosystem:

- Frontend library distribution (via NPM)
- Frontend build tool
- Backend development
- CLI tools
- ...and many more

Solving for _where_ some specific part fits within the JS ecosystem was, and still is, difficult. It can be frustrating to find examples & answers online for the same problem, but separate parts of the ecosystem. Solving something in [Express](https://expressjs.com/) and a similar problem in [Redux](https://redux.js.org/) may seem similar in some aspects, but make very different assumptions.

## Multi-paradigm Language Development

Since the needs of web users and developers has been changing at a rapid pace for so long, frontend development has _many_ different paradigms that one could adhere to. Those paradigms are even further balkanized into groups surrounding specific frameworks. Coming from a place where it felt pretty easy to find which horse to bet on, the sheer breadth of the frontend ecosystem took me a second to understand. The first bits of JS I wrote heavily used jQuery back ~6-7 years ago, and the majority of the JS I write now uses React. There was not as much overlap between them, aside from JS language features and DOM API, that I'd expected.

I generally shy away from languages like this (notably, one of the reasons I found developing C++ frustrating). I like for a language to be very opinionated in how you write it, which is why I found using popular frameworks to be a helpful starting point.

**Recommendation:** Be patient. Once you've picked up one paradigm, it becomes easier to understand others later.

## Differing Ways of Persisting Things in the Client

I had some basic concepts of cookies and other similar objects, but wasn't aware of the depth of options available to the developer for this stuff, with varying levels of support.

Things I looked into:

- Cookies
- [`localStorage`](https://css-tricks.com/localstorage-examples/)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

## Specific JS Features I Didn't Understand

This is a running list of all the rest of the stuff that I didn't get. These aren't themes, they're more like specific methods that didn't work when I wanted them to and I couldn't figure out why.

- [Order of Code Execution]() - Since there's no `main()` in Javascript, where does execution start? How can you tell what order code defined _outside_ of event handlers will run in? Turns out this largely depends on [how the script is defined](https://stackoverflow.com/a/2343051/3522314).
- [Property Value Shorthand](https://javascript.info/object#property-value-shorthand) and [Destructuring](https://javascript.info/destructuring-assignment) - These are two ES6 language features that made code slightly less readable to me at first because I didn't understand them.
- [Spread / rest operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - This one also slightly confused me at first, not based on what it _does_, but rather _how it's used_. There are lots of uses cases where I hadn't expected that this would be a common method, namely merging arrays like `new Array(1, ...rest);`
- `number` vs `int`/`float` - This was the first time I'd used a language where integers and floating point weren't separated, so I just _assumed_ that `number` meant integer. It doesn't.
- [Arrow Functions and Binding `this`]() - Coming from languages where the rules of class references seemed very obvious at any given point in the code, having to specifically take stock of what `this` represents was unintuitive.
- [Computed Properties](https://javascript.info/object#computed-properties) - Wasn't quite understanding why I couldn't use properties of objects in instantiating other objects. Specifically I was trying to create a map of objects by Id, and was wondering why `object.id` as a key didn't work. `[object.id]` did.
- Typescript `type` vs `interface` - Wasn't sure when to use either of these. [This helped](https://blog.logrocket.com/types-vs-interfaces-in-typescript/).

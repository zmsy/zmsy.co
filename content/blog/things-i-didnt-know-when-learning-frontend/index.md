---
title: "Things I Didn't Know When Learning Frontend Development"
description: "Starting as a backend developer, the switch to learning frontend was jarring in many ways. I tried to spend that time documenting them."
publishDate: 2020-11-22T20:48:58-08:00
draft: true
---

I'm a backend developer by trade.

There was a lot I screwed up. I ended up googling many, many things with poor search terms. I wrote a lot of bad or duplicated code and wasted a lot of time. Here are some of the core things I didn't understand at first.

## Tooling is as Difficult as You Make It

I've always had an irrational need to build things from scratch, knowing how the components fit together so that I can truly understand the tools that I'm using. Or so I thought, most of the time.

Implementing Javascript tooling is buoyed by knowing the Javascript ecosystem well, in one form or another. I didn't when I started out, so I led myself down dead ends trying to configure build tools that I didn't necessarily understand the mechanics of. Testing frameworks, Bundlers, linters, transpilers, typescript, frontend frameworks. There is a lot of space for you to get lost in the details in frontend. The tooling exists to bolster your workflow and make you a better developer, but configuring it is something you want to ease your way into.

Recommendation: try either a batteries-included starter from Github or a beginner friendly dev setup like Create React App. You can learn the ins and outs of how these tools work through them, and then form opinions on what you'd do differently for when you want to build it yourself.

## CommonJS / ES Modules

Code structuring is an example showing how the Javascript ecosystem is a very much evolving one, with new standards emerging and old ones being slowly deprecated. When I started, I just assumed that I'd be able to use the new format, ES Modules, everywhere. Since support for ESM is only making its way slowly into browsers, that turned out not to be the case.

Then I realized it wasn't even implemented in Node yet, as of the time I had started.

## Which Features Correspond to Which ES Versions

If you've either been following the development of the ECMAScript standards as the years have gone on, or been tasked with supported older browsers using something like Babel, you're probably intimately familiar with what portions of the standard correspond to which versions. Once you've derived that association, you'll begin to understand the differences between your source (i.e. version you're writing in) and distributed (i.e. the version you're shipping) versions and how they differ.

Resources I used:

- 

## Multi-paradigm Language Development

Since the needs of web users and developers has been changing at a rapid pace for so long, the Javascript ecosystem has _many_ different paradigms that one could adhere to. Those paradigms are even further balkanized into groups surrounding specific frameworks. Coming from a place where it felt pretty easy to find which horse to bet on, the sheer breadth of the frontend ecosystem took me a second to understand.

I generally shy away from languages like this (notably, one of the reasons I found C++ frustrating).

## Differing Ways of Persisting Things in the Client

I had some basic concepts of cookies and other similar objects, but wasn't aware of the depth of options available to the developer for this stuff, with varying levels of support.

## Specific JS Features I Didn't Understand

- [Order of Code Execution]() - Since there's no `main()` in Javascript, where does execution start? How can you tell what order code defined _outside_ of event handlers will run in? Turns out this largely depends on [how the script is defined](https://stackoverflow.com/a/2343051/3522314).
- [Arrow Functions and Binding `this`]() - Coming from languages where the rules of class references seemed very obvious at any given point in the code, having to specifically take stock of what `this` represents was unintuitive.
- [Computed Properties](https://javascript.info/object#computed-properties) - Wasn't quite understanding why I couldn't use properties of objects in instantiating other objects. Specifically I was trying to create a map of objects by Id, and was wondering why `object.id` as a key didn't work. `[object.id]` did.

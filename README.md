# Worldle

Worldle is a simple guess the country game - inspired by browser based "Wordle", it has a .js object file containing an array of objects with a name and a nested array as properties.

Something like this:

COUNTRIES = [
  {name: 'Wonderland', hint: ['Alice goes here', 'Native Animal: Jabberwocky', '<img src="./images/ahintimage.jpg">', 'You get the point']}
]

Aesthetically I was aiming for a very simple retro look, almost text-adventure-esque.

Currently Worldle is barely a game; there are only 5 countries set up - in the future I will likely add more and make it somewhat more playable. In terms of scaleability, while adding new countries is very easy it's also very easy to mess up; so I may somewhere down the line write a little program to add the the array while checking for obvious errors.

All code is original aside from the on-screen keyboard layout which was borrowed from freeCodeCamp (https://www.freecodecamp.org/news/build-a-wordle-clone-in-javascript/), though again the actual functionality for it is original code.

All in all, pretty happy with how this turned out!

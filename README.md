# Alchemy Dev 101 Template

## Making a plan!

1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.


--four pages--
1) Home/Main- username/class (input,radio,submit,h3)

2) List- map/list of quests (generates three buttons/choices and map image)

3) Quest page- targets specific objects in quest data array to display proper 'quest'

4) Results- quest/gold outcome (generates final results after all quests completed)

*each quest detail page will be generated on the same quest page using JS to target individual objects for each

*quest page will need to generate h3, img, decription, radios, and submit

*header must render/update proper hp/gold on each individual page
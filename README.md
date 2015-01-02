Table Tennis Ladder
===================

Christmas project at Makers Academy, create a table tennis ladder, for use
for the final few weeks. 

- The problem

  This project was inspired by the work carried out by 3 of our senior cohort, 
  their work is shown [here](https://github.com/danjocutler/tournament_prog).

  The only difficult presented by their method was that the tournament's
  progress, was limited to the willingness of other people to play their
  games. This resulted in the tournament not being completed. 

- The idea

  We have opted for a ladder configuration, something a few of us are familiar
  with from playing squash. This format prevents the issue relating to
  progression, but does mean that people don't necessarily have the same number
  of games played at the end of the season. However, the latter has been deemed
  the lesser evil in this case. 

- MVP Stages
  * Skateboard: Array of names, with a swap button, specifying the name of each
    player. Add players, remove players, edit player names. Rules page. 
  * Scooter: Record a result of a game, automatic update of ladder. 
    Record player stats. Count down to end of ladder awards.
  * Bicycle: Challenge restrictions, number of times challenge, places above
    you limit. 25% Challenge range.
  * Motorbike: Sign up and sign in. 
  * Car: Challenge other players, time limit associated with challenge,
    restrict open challenges. 
    Admin edit results, admin login. Good CSS. 
  

- Solution
- How to run it
- Images of what it looks like
- Thoughts on how you want to improve it


##Technologies

- MEAN Stack
- TDD
- BDD

###Testing Framworks - Working Environment

######Grunt
We'll be using grunt as our task runner, for running our tests and checking 
our javascript syntax.
######Jshint + Watch
```sh
$ grunt watch
```
Linting tool. Use the command 
In a seperate terminal window to check for errors/typos each time a file
is saved.

######Mocha-CasperJs
```sh
$ grunt mocha_casperjs
```
We will be using Mocha and Casperjs with Chai matchers for our BDD. 
Configured with grunt we simply need to run
to run our feature tests

######Jasmine-node
```sh
$ grunt jasmine-node
```
Jasmine is our preffered unit testing framework of choice. Configured
with grunt we simply need to run
to run our unit tests. 

# GRAMMAR GHOST HUNTER
## Game Development Specification

Build a complete browser educational game called:

# GRAMMAR GHOST HUNTER

Topic:

**Present Simple vs Present Continuous**

All player-facing game text must be in English.

The game will later be hosted on GitHub Pages and embedded into Genially using an iframe.

---

# 1. TECHNOLOGY

Build the game using:

- HTML
- CSS
- Vanilla JavaScript

Do not use a backend.

Do not use React, Vue, Firebase or other frameworks/services unless explicitly requested later.

The game must work:

- locally
- on GitHub Pages
- inside an iframe
- inside Genially

Primary game ratio:

16:9

Primary target size:

1200 × 675

The layout must also scale proportionally to other screen sizes.

Do not create page scrollbars.

---

# 2. EXISTING ASSETS

All artwork and audio assets are already provided by the user.

DO NOT generate replacement artwork.

DO NOT replace the supplied artwork with CSS drawings.

Use the existing files from:

assets/images/

and:

assets/audio/

Before implementing asset references, inspect the actual filenames in these folders and use the real filenames.

Expected image assets include:

- start screen haunted mansion background
- haunted hall background
- haunted library background
- ghost laboratory background
- five different transparent ghost images
- transparent ghost-catching device image

Expected audio assets include:

- background music
- energy beam / shot
- ghost catch
- correct answer
- wrong answer
- round complete
- victory

If the exact filenames differ, use the filenames actually present in the folders.

---

# 3. GAME STRUCTURE

The game contains:

START SCREEN

↓

ROUND 1
THE HAUNTED HALL
10 Affirmative Sentences

↓

ROUND 2
THE HAUNTED LIBRARY
10 Negative Sentences

↓

ROUND 3
THE GHOST LAB
10 Questions

↓

FINAL VICTORY SCREEN

Total:

30 questions.

---

# 4. CORE GAMEPLAY

Each question displays:

- one sentence with a blank
- five answer options
- five ghosts

Each ghost represents one answer.

There is exactly:

- 1 correct answer
- 4 wrong answers

IMPORTANT:

The player's objective is NOT to shoot the correct answer.

The objective is:

**CATCH 4 WRONG GHOSTS**
**KEEP THE CORRECT GHOST SAFE**

The player must eliminate all four incorrect answers.

After all four incorrect ghosts are caught, the remaining correct ghost becomes the correct answer.

---

# 5. START SCREEN

Use the supplied haunted mansion background.

Display:

GRAMMAR GHOST HUNTER

Subtitle:

Present Simple vs Present Continuous

Main button:

START HUNTING

Secondary button:

HOW TO PLAY

Also provide a sound control.

The title and buttons must be HTML elements.

Do NOT add text directly into the background image.

The design should match the supplied artwork:

- mysterious
- blue / purple
- magical
- polished game UI
- slightly spooky
- not frightening

---

# 6. HOW TO PLAY

Clicking HOW TO PLAY opens a centered modal.

Use this text:

HOW TO PLAY

Read the sentence.

5 ghosts have 5 answers.

Catch 4 WRONG ghosts.

Keep the CORRECT ghost safe!

You have 3 lives.

GOOD LUCK, GHOST HUNTER!

Button:

GOT IT!

The modal closes without starting the game.

---

# 7. ROUND INTRO SCREENS

Before every round show a short introduction.

ROUND 1:

ROUND 1

THE HAUNTED HALL

AFFIRMATIVE SENTENCES

Button:

START ROUND


ROUND 2:

ROUND 2

THE HAUNTED LIBRARY

NEGATIVE SENTENCES

Button:

CONTINUE HUNTING


ROUND 3:

ROUND 3

THE GHOST LAB

QUESTIONS

Button:

CONTINUE HUNTING

---

# 8. GAME HUD

During gameplay display a compact HUD at the top.

It must contain:

SCORE

QUESTION

LIVES

Example:

SCORE
1200

QUESTION
4 / 10

LIVES
♥ ♥ ♥

Also keep the volume control accessible.

Do not let the HUD cover the question or ghosts.

---

# 9. QUESTION PANEL

Display the sentence prominently near the upper part of the gameplay area.

Example:

Emma usually ___ to school by bus.

Below it display:

CATCH 4 WRONG GHOSTS • KEEP THE CORRECT ONE SAFE

The sentence must be large and easy to read.

Use a clean panel with strong contrast against the background.

---

# 10. FIVE GHOSTS

Use the five supplied transparent ghost images.

Each question must display all five ghosts.

Use all five different ghost characters.

Each ghost contains one answer option rendered as HTML text over its body.

DO NOT edit answer text into the PNG files.

Answer text must remain HTML so it can change for every question.

The text must:

- remain readable
- be centered on the ghost
- scale when necessary
- support answers such as "doesn't drink" and "aren't playing"

Ghosts should be large enough to see their facial expressions.

---

# 11. GHOST MOVEMENT

Ghosts must feel alive.

Each ghost should:

- float gently
- bob vertically
- drift slightly horizontally
- have a slightly different animation timing

Movement must be slow.

The game is educational, so answers must remain easy to click and read.

Ghosts must NOT:

- move outside the gameplay area
- cover the sentence
- heavily overlap one another
- disappear behind the HUD
- move too fast

Give each ghost its own safe movement zone.

---

# 12. RANDOM ANSWER POSITIONS

Shuffle the five answer options for every question.

The correct answer must not consistently appear in the same position.

Do NOT shuffle the question order unless explicitly requested later.

Only shuffle answer positions.

---

# 13. CUSTOM CROSSHAIR

Inside the gameplay area hide the standard desktop cursor.

Replace it with a custom glowing targeting crosshair.

The crosshair should follow the mouse smoothly.

It must:

- remain visible over all backgrounds
- not block clicks
- stay above game objects visually

Do not use the custom cursor on touch devices if it causes usability problems.

---

# 14. GHOST CATCHER

Use the supplied transparent Ghost Catcher image.

Position it at:

bottom center.

It should appear as if the player is holding/aiming the device into the room.

The Ghost Catcher must react to cursor movement.

When the cursor moves left:

the device slightly rotates/leans left.

When the cursor moves right:

the device slightly rotates/leans right.

A small vertical tilt may also be used.

Movement must be smooth and restrained.

Do not rotate the device excessively.

The bottom of the device should remain anchored near the bottom-center of the screen.

---

# 15. SHOOTING / ENERGY BEAM

When the player clicks a ghost:

fire a visible magical energy beam from the Ghost Catcher toward that ghost.

The beam should be generated programmatically using HTML/CSS/JavaScript.

Do NOT require a separate beam image.

The beam may contain:

- cyan glow
- blue energy
- small particles
- brief electric effect

The beam must connect the device muzzle with the selected ghost.

---

# 16. CATCHING A WRONG GHOST

When the player shoots an incorrect answer:

1. Lock that ghost against additional clicks.
2. Fire the energy beam.
3. Play the shot/beam sound.
4. Make the ghost shake or react.
5. Pull the ghost toward the Ghost Catcher.
6. Scale the ghost down during the movement.
7. Fade it slightly.
8. Make it disappear into the device.
9. Play the ghost-catch sound.
10. Display:

+100

11. Add 100 points.

The complete catch animation should take approximately:

500–900 ms.

The other ghosts remain available.

---

# 17. CORRECT GHOST HIT BY MISTAKE

If the player shoots the correct answer before eliminating the four wrong answers:

DO NOT remove the ghost.

Instead:

1. fire the beam briefly
2. make the ghost react
3. reject/break the beam
4. make a subtle screen shake
5. play the wrong-answer sound
6. display:

WRONG TARGET!

7. remove one life

The player then continues the same question.

Do not reveal which other ghosts are wrong.

---

# 18. LIVES

The player starts each attempt with:

3 lives.

Display them visually.

Example:

♥ ♥ ♥

A life is lost only when the player shoots the correct ghost.

When lives reach zero:

show:

GAME OVER

Try this round again!

Buttons:

RESTART ROUND

HOME

RESTART ROUND:

- restarts the current round from question 1
- restores 3 lives
- restores score to the score the player had when entering that round

Do not force the player to restart the entire game.

HOME returns to the Start Screen.

---

# 19. SCORE

Each wrong ghost successfully caught:

+100 points.

There are:

4 wrong ghosts × 30 questions.

Maximum possible score:

12,000 points.

Do not award points for the remaining correct ghost.

Do not subtract points for mistakes.

Prevent double-clicks from awarding duplicate points.

---

# 20. QUESTION COMPLETION

After all four wrong ghosts are caught:

only the correct ghost remains.

Then:

1. temporarily lock input
2. stop or greatly reduce its movement
3. make it glow
4. play the correct sound
5. display:

CORRECT!

Then animate the answer into the blank.

Example:

Before:

Emma usually ___ to school by bus.

After:

Emma usually GOES to school by bus. ✓

Keep the complete sentence visible for approximately:

2.5 seconds.

This delay is important for learning.

Then automatically load the next question.

---

# 21. GRAMMAR MARKER FEEDBACK

Markers are already included naturally inside the sentences.

Do NOT display separate grammar hints before the player answers.

After the correct answer is revealed, briefly highlight the marker(s) in the completed sentence.

Examples:

usually
often
always
sometimes
now
right now
at the moment
today
this week
Look!
Listen!
at weekends
on Sundays

This should help the learner notice why the tense was selected.

Do not make the marker highlight reveal the answer before completion.

---

# 22. ROUND COMPLETION

After Question 10 of Round 1:

play the round-complete sound.

Show:

ROUND 1 CLEARED!

AFFIRMATIVE SENTENCES COMPLETE

Then transition to Round 2 intro.


After Question 10 of Round 2:

play the round-complete sound.

Show:

ROUND 2 CLEARED!

NEGATIVE SENTENCES COMPLETE

Then transition to Round 3 intro.

Use smooth fade transitions.

---

# 23. BACKGROUND MUSIC

Use the supplied background music.

Requirements:

- begin only after user interaction if browser autoplay restrictions require it
- loop continuously
- continue between questions and rounds
- do not restart every question

Provide:

- mute/unmute
- volume slider

The player must be able to change volume during the game.

Use one master volume control or sensible linked audio levels.

Do not allow missing audio files to crash the game.

---

# 24. RESPONSIVE / GENIALLY REQUIREMENTS

The game is intended to be embedded in Genially.

Primary design size:

1200 × 675

Maintain a 16:9 composition.

Requirements:

- no white borders
- no browser scrollbars
- no horizontal scrolling
- no vertical scrolling during gameplay
- backgrounds fill the screen
- game scales proportionally
- ghosts stay in correct areas
- HUD stays visible
- buttons remain clickable
- text stays readable

Use:

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

Use a full viewport game container.

The final game must be compatible with an iframe such as:

<iframe
  src="GITHUB_PAGES_URL"
  width="1200"
  height="675"
  frameborder="0"
  allow="autoplay; fullscreen"
  allowfullscreen>
</iframe>

Do not hardcode a GitHub Pages URL into game logic.

---

# 25. PERFORMANCE

The game must run smoothly inside Genially.

Optimize for browser performance.

Prefer:

- CSS transforms
- opacity
- requestAnimationFrame where appropriate

Avoid:

- huge unnecessary libraries
- repeated audio loading
- duplicate animation loops
- recreating unnecessary DOM elements constantly

Preload important images.

Use the supplied assets efficiently.

---

# 26. QUIZ DATA ARCHITECTURE

Store questions as JavaScript data.

Do NOT manually create each question in HTML.

Recommended structure:

const rounds = [
  {
    title: "THE HAUNTED HALL",
    type: "AFFIRMATIVE SENTENCES",
    questions: [
      {
        sentence: "Emma usually ___ to school by bus.",
        correct: "goes",
        options: ["goes", "go", "is going", "going", "is go"],
        markers: ["usually"]
      }
    ]
  }
];

The renderer should build each question from this data.

---

# 27. ROUND 1 — AFFIRMATIVE SENTENCES

### 1

Emma usually ___ to school by bus.

Correct:
goes

Options:
goes
go
is going
going
is go

Markers:
usually


### 2

Look! The children ___ in the garden now.

Correct:
are playing

Options:
play
plays
are playing
is playing
playing

Markers:
Look!
now


### 3

My dad often ___ coffee in the morning.

Correct:
drinks

Options:
drink
is drinking
drinks
drinking
does drink

Markers:
often


### 4

Listen! Lucy ___ a beautiful song at the moment.

Correct:
is singing

Options:
sings
sing
are singing
is singing
singing

Markers:
Listen!
at the moment


### 5

We always ___ dinner together on Sundays.

Correct:
have

Options:
are having
has
have
having
is having

Markers:
always
on Sundays


### 6

Tom ___ his new jacket today.

Correct:
is wearing

Options:
wears
wear
is wearing
are wearing
wearing

Markers:
today


### 7

Sarah sometimes ___ her grandmother after school.

Correct:
visits

Options:
visit
visits
is visiting
visiting
does visits

Markers:
sometimes


### 8

Be quiet! The baby ___ right now.

Correct:
is sleeping

Options:
sleeps
sleep
are sleeping
sleeping
is sleeping

Markers:
right now


### 9

Jack and Ben usually ___ football at weekends.

Correct:
play

Options:
plays
are playing
play
playing
is playing

Markers:
usually
at weekends


### 10

Look! Our dog ___ in the lake now.

Correct:
is swimming

Options:
swims
swim
swimming
is swimming
are swimming

Markers:
Look!
now

---

# 28. ROUND 2 — NEGATIVE SENTENCES

### 1

Emma ___ coffee in the morning because she doesn't like it.

Correct:
doesn't drink

Options:
don't drink
doesn't drink
isn't drinking
doesn't drinks
not drink


### 2

Look! The children ___ outside now because it is raining.

Correct:
aren't playing

Options:
don't play
doesn't play
aren't playing
isn't playing
not playing

Markers:
Look!
now


### 3

My brother ___ TV on weekdays.

Correct:
doesn't watch

Options:
don't watch
doesn't watch
isn't watching
doesn't watches
not watch

Markers:
on weekdays


### 4

Listen! The baby ___ at the moment. It is very quiet.

Correct:
isn't crying

Options:
doesn't cry
don't cry
isn't crying
aren't crying
not crying

Markers:
Listen!
at the moment


### 5

We ___ to school on Sundays.

Correct:
don't go

Options:
doesn't go
aren't going
don't go
not go
don't goes

Markers:
on Sundays


### 6

Sarah ___ her school uniform today because it is Saturday.

Correct:
isn't wearing

Options:
doesn't wear
don't wear
isn't wearing
aren't wearing
not wearing

Markers:
today


### 7

Usually Tom ___ computer games before school.

Correct:
doesn't play

Options:
doesn't play
don't play
isn't playing
doesn't plays
not play

Markers:
Usually


### 8

Look! The dog ___ now. It is awake.

Correct:
isn't sleeping

Options:
doesn't sleep
don't sleep
isn't sleeping
aren't sleeping
not sleeping

Markers:
Look!
now


### 9

My parents ___ meat because they are vegetarians.

Correct:
don't eat

Options:
doesn't eat
aren't eating
don't eat
isn't eating
don't eats


### 10

Anna ___ at home this week. She is staying with her grandmother.

Correct:
isn't staying

Options:
doesn't stay
don't stay
isn't staying
aren't staying
not stay

Markers:
this week

---

# 29. ROUND 3 — QUESTIONS

### 1

___ your brother usually walk to school?

Correct:
Does

Options:
Is
Does
Do
Are
Has

Markers:
usually


### 2

___ Emma doing her homework now?

Correct:
Is

Options:
Does
Do
Is
Are
Has

Markers:
now


### 3

Where ___ your parents usually go at weekends?

Correct:
do

Options:
does
are
do
is
doing

Markers:
usually
at weekends


### 4

What ___ the children doing at the moment?

Correct:
are

Options:
do
does
is
are
be

Markers:
at the moment


### 5

___ Tom often play football after school?

Correct:
Does

Options:
Do
Is
Does
Are
Has

Markers:
often


### 6

Look! Why ___ the dog barking now?

Correct:
is

Options:
does
do
are
is
has

Markers:
Look!
now


### 7

What time ___ Sarah usually get up on school days?

Correct:
does

Options:
is
do
does
are
doing

Markers:
usually
on school days


### 8

___ your friends watching TV right now?

Correct:
Are

Options:
Do
Does
Is
Are
Have

Markers:
right now


### 9

___ you usually have breakfast before school?

Correct:
Do

Options:
Are
Does
Do
Is
Have

Markers:
usually


### 10

Listen! ___ Anna singing in her room at the moment?

Correct:
Is

Options:
Does
Is
Do
Are
Has

Markers:
Listen!
at the moment

---

# 30. FINAL SCREEN

After Round 3 Question 10:

play the victory sound.

Show a short magical clearing effect.

Then show:

HAUNTING CLEARED!

YOU ARE A GRAMMAR GHOST HUNTER!

Display:

FINAL SCORE

and the player's actual score.

Also display:

30 / 30 COMPLETED

and remaining lives.

Main button:

PLAY AGAIN

Secondary button:

HOME

PLAY AGAIN:

- score = 0
- lives = 3
- Round 1
- Question 1

HOME:

return to Start Screen.

---

# 31. GAME STATE

Maintain reliable game state.

Suggested variables:

currentRound
currentQuestion
score
lives
wrongGhostsCaught
inputLocked
roundStartScore
volume
muted

Prevent:

- duplicate score
- multiple life loss from one click
- clicking a ghost after it has been caught
- skipping questions
- multiple next-question timers
- animation conflicts
- audio restarting unnecessarily

---

# 32. VISUAL QUALITY

The supplied artwork defines the visual direction.

Build the interface around it.

Use:

- blue
- cyan
- indigo
- violet
- subtle gold accents where appropriate
- translucent dark UI panels
- magical glow
- clean typography

The interface should feel like a polished game, not a worksheet placed over a background.

Do not overload the screen with panels.

The five ghosts, sentence and Ghost Catcher should remain the main focus.

---

# 33. IMPORTANT DEVELOPMENT RULE

Do not attempt to build everything blindly before checking the existing project assets.

FIRST:

1. inspect the project folder
2. inspect assets/images
3. inspect assets/audio
4. identify the exact filenames
5. confirm that the required assets exist
6. then implement the game

If an asset name differs from this specification, use the real file rather than creating a duplicate.

Do not rename or delete the user's supplied assets unless necessary.

---

# 34. IMPLEMENTATION GOAL

Create a finished playable version, not only a visual mockup.

The finished implementation must include:

- Start Screen
- How to Play
- all 3 rounds
- all 30 questions
- 5 ghosts per question
- answer randomization
- ghost movement
- custom crosshair
- Ghost Catcher movement
- beam animation
- ghost catch animation
- score
- 3 lives
- wrong-target behavior
- correct-answer reveal
- marker highlighting
- round transitions
- Game Over
- final victory screen
- background music
- sound effects
- volume controls
- responsive 16:9 layout
- GitHub Pages compatibility
- Genially iframe compatibility
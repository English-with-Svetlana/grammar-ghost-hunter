"use strict";

const rounds = [
  {
    title: "THE HAUNTED HALL", type: "AFFIRMATIVE SENTENCES", background: "assets/images/hall-bg.webp",
    questions: [
      { sentence: "Emma usually ___ to school by bus.", correct: "goes", options: ["goes", "go", "is going", "going", "is go"], markers: ["usually"] },
      { sentence: "Look! The children ___ in the garden now.", correct: "are playing", options: ["play", "plays", "are playing", "is playing", "playing"], markers: ["Look!", "now"] },
      { sentence: "My dad often ___ coffee in the morning.", correct: "drinks", options: ["drink", "is drinking", "drinks", "drinking", "does drink"], markers: ["often"] },
      { sentence: "Listen! Lucy ___ a beautiful song at the moment.", correct: "is singing", options: ["sings", "sing", "are singing", "is singing", "singing"], markers: ["Listen!", "at the moment"] },
      { sentence: "We always ___ dinner together on Sundays.", correct: "have", options: ["are having", "has", "have", "having", "is having"], markers: ["always", "on Sundays"] },
      { sentence: "Tom ___ his new jacket today.", correct: "is wearing", options: ["wears", "wear", "is wearing", "are wearing", "wearing"], markers: ["today"] },
      { sentence: "Sarah sometimes ___ her grandmother after school.", correct: "visits", options: ["visit", "visits", "is visiting", "visiting", "does visits"], markers: ["sometimes"] },
      { sentence: "Be quiet! The baby ___ right now.", correct: "is sleeping", options: ["sleeps", "sleep", "are sleeping", "sleeping", "is sleeping"], markers: ["right now"] },
      { sentence: "Jack and Ben usually ___ football at weekends.", correct: "play", options: ["plays", "are playing", "play", "playing", "is playing"], markers: ["usually", "at weekends"] },
      { sentence: "Look! Our dog ___ in the lake now.", correct: "is swimming", options: ["swims", "swim", "swimming", "is swimming", "are swimming"], markers: ["Look!", "now"] }
    ]
  },
  {
    title: "THE HAUNTED LIBRARY", type: "NEGATIVE SENTENCES", background: "assets/images/library-bg.webp",
    questions: [
      { sentence: "Emma ___ coffee in the morning because she doesn't like it.", correct: "doesn't drink", options: ["don't drink", "doesn't drink", "isn't drinking", "doesn't drinks", "not drink"], markers: [] },
      { sentence: "Look! The children ___ outside now because it is raining.", correct: "aren't playing", options: ["don't play", "doesn't play", "aren't playing", "isn't playing", "not playing"], markers: ["Look!", "now"] },
      { sentence: "My brother ___ TV on weekdays.", correct: "doesn't watch", options: ["don't watch", "doesn't watch", "isn't watching", "doesn't watches", "not watch"], markers: ["on weekdays"] },
      { sentence: "Listen! The baby ___ at the moment. It is very quiet.", correct: "isn't crying", options: ["doesn't cry", "don't cry", "isn't crying", "aren't crying", "not crying"], markers: ["Listen!", "at the moment"] },
      { sentence: "We ___ to school on Sundays.", correct: "don't go", options: ["doesn't go", "aren't going", "don't go", "not go", "don't goes"], markers: ["on Sundays"] },
      { sentence: "Sarah ___ her school uniform today because it is Saturday.", correct: "isn't wearing", options: ["doesn't wear", "don't wear", "isn't wearing", "aren't wearing", "not wearing"], markers: ["today"] },
      { sentence: "Usually Tom ___ computer games before school.", correct: "doesn't play", options: ["doesn't play", "don't play", "isn't playing", "doesn't plays", "not play"], markers: ["Usually"] },
      { sentence: "Look! The dog ___ now. It is awake.", correct: "isn't sleeping", options: ["doesn't sleep", "don't sleep", "isn't sleeping", "aren't sleeping", "not sleeping"], markers: ["Look!", "now"] },
      { sentence: "My parents ___ meat because they are vegetarians.", correct: "don't eat", options: ["doesn't eat", "aren't eating", "don't eat", "isn't eating", "don't eats"], markers: [] },
      { sentence: "Anna ___ at home this week. She is staying with her grandmother.", correct: "isn't staying", options: ["doesn't stay", "don't stay", "isn't staying", "aren't staying", "not stay"], markers: ["this week"] }
    ]
  },
  {
    title: "THE GHOST LAB", type: "QUESTIONS", background: "assets/images/lab-bg.webp",
    questions: [
      { sentence: "___ your brother usually walk to school?", correct: "Does", options: ["Is", "Does", "Do", "Are", "Has"], markers: ["usually"] },
      { sentence: "___ Emma doing her homework now?", correct: "Is", options: ["Does", "Do", "Is", "Are", "Has"], markers: ["now"] },
      { sentence: "Where ___ your parents usually go at weekends?", correct: "do", options: ["does", "are", "do", "is", "doing"], markers: ["usually", "at weekends"] },
      { sentence: "What ___ the children doing at the moment?", correct: "are", options: ["do", "does", "is", "are", "be"], markers: ["at the moment"] },
      { sentence: "___ Tom often play football after school?", correct: "Does", options: ["Do", "Is", "Does", "Are", "Has"], markers: ["often"] },
      { sentence: "Look! Why ___ the dog barking now?", correct: "is", options: ["does", "do", "are", "is", "has"], markers: ["Look!", "now"] },
      { sentence: "What time ___ Sarah usually get up on school days?", correct: "does", options: ["is", "do", "does", "are", "doing"], markers: ["usually", "on school days"] },
      { sentence: "___ your friends watching TV right now?", correct: "Are", options: ["Do", "Does", "Is", "Are", "Have"], markers: ["right now"] },
      { sentence: "___ you usually have breakfast before school?", correct: "Do", options: ["Are", "Does", "Do", "Is", "Have"], markers: ["usually"] },
      { sentence: "Listen! ___ Anna singing in her room at the moment?", correct: "Is", options: ["Does", "Is", "Do", "Are", "Has"], markers: ["Listen!", "at the moment"] }
    ]
  }
];

// Preserve the repository base path on GitHub Pages and inside an iframe.
const assetUrl = path => window.gameAssetUrl(path);
rounds.forEach(round => { round.background = assetUrl(round.background); });

const ghostImages = [1, 2, 3, 4, 5].map(number => assetUrl(`assets/images/ghost-${number}.png`));
const fogImages = ["fog-left.png", "fog-center.png", "fog-right.png"].map(name => assetUrl(`assets/images/${name}`));
const imageAssets = [
  assetUrl("assets/images/start-bg.webp"),
  ...rounds.map(round => round.background),
  ...ghostImages,
  assetUrl("assets/images/ghost-catcher.png"),
  ...fogImages
];

function createAudio(src) {
  const sound = new Audio();
  sound.preload = "none";
  sound.src = assetUrl(src);
  return sound;
}

const audio = {
  background: createAudio("assets/audio/background.mp3"),
  beam: createAudio("assets/audio/beam.mp3"),
  catch: createAudio("assets/audio/ghost-catch.mp3"),
  correct: createAudio("assets/audio/correct.mp3"),
  wrong: createAudio("assets/audio/wrong.mp3"),
  round: createAudio("assets/audio/round-complete.mp3"),
  victory: createAudio("assets/audio/victory.mp3")
};
audio.background.loop = true;
const sfxPlaybackMultipliers = new WeakMap();

const $ = id => document.getElementById(id);
const elements = {
  game: $("game"), backdrop: $("backdrop"), start: $("startScreen"), intro: $("introScreen"), play: $("playScreen"), message: $("messageScreen"),
  introRound: $("introRound"), introTitle: $("introTitle"), introType: $("introType"), introButton: $("introButton"),
  score: $("scoreValue"), question: $("questionValue"), lives: $("livesValue"), sentence: $("sentence"), ghostField: $("ghostField"),
  catcher: $("catcher"), effectsLayer: $("effectsLayer"), feedback: $("feedback"), crosshair: $("crosshair"),
  aimPivot: $("aimPivot"), muzzleAnchor: $("muzzleAnchor"), ambientParticles: $("ambientParticles"),
  howModal: $("howModal"), musicButton: $("musicButton"), sfxButton: $("sfxButton"), homeButton: $("homeButton"), topControls: $("topControls"), musicVolume: $("musicVolumeSlider"), sfxVolume: $("sfxVolumeSlider"),
  messageKicker: $("messageKicker"), messageTitle: $("messageTitle"), messageText: $("messageText"), messageStats: $("messageStats"), messageButtons: $("messageButtons"),
  loading: $("loadingScreen"), modeButtons: [...document.querySelectorAll(".mode-button")]
};

const state = {
  currentRound: 0, currentQuestion: 0, score: 0, lives: 3, wrongGhostsCaught: 0,
  inputLocked: false, roundStartScore: 0, musicVolume: .35, sfxVolume: .25, musicMuted: false, sfxMuted: false, audioStarted: false, audioUnlocked: false, musicRequested: false,
  nextTimer: null, gameplayTimers: new Set(), gameplayVersion: 0, screen: "start"
};

try {
  ["music", "sfx"].forEach(category => {
    const savedVolume = localStorage.getItem(`grammarGhost${category}Volume`);
    const savedMuted = localStorage.getItem(`grammarGhost${category}Muted`);
    const volume = Number(savedVolume);
    if (savedVolume !== null && Number.isFinite(volume) && volume >= 0 && volume <= 1) state[`${category}Volume`] = volume;
    if (savedMuted === "true" || savedMuted === "false") state[`${category}Muted`] = savedMuted === "true";
  });
} catch (_) {
  // Storage can be unavailable in privacy-restricted iframe contexts.
}

function saveAudioPreference() {
  try {
    ["music", "sfx"].forEach(category => {
      localStorage.setItem(`grammarGhost${category}Volume`, String(state[`${category}Volume`]));
      localStorage.setItem(`grammarGhost${category}Muted`, String(state[`${category}Muted`]));
    });
  } catch (_) {
    // Audio still works normally when storage is blocked.
  }
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function showScreen(name) {
  [elements.start, elements.intro, elements.play, elements.message].forEach(screen => screen.classList.remove("active"));
  elements[name].classList.add("active");
  state.screen = name;
  elements.game.classList.toggle("is-playing", name === "play");
  elements.game.classList.remove("screen-shake");
  elements.homeButton.hidden = name === "start";
  (name === "play" ? elements.play.querySelector(".hud") : elements.game).append(elements.topControls);
}

function setBackground(path) {
  elements.backdrop.style.backgroundImage = `url("${path}")`;
}

function unlockAudio() {
  if (state.audioUnlocked) return;
  state.audioUnlocked = true;

}

function startAudio() {
  unlockAudio();
  state.musicRequested = true;
  if (state.musicMuted || state.musicVolume === 0) return;
  if (!state.audioStarted) {
    state.audioStarted = true;
    audio.background.play().catch(() => { state.audioStarted = false; });
  } else if (audio.background.paused && !state.musicMuted) {
    audio.background.play().catch(() => {});
  }
}

function playSound(name, playbackRate = 1, volumeMultiplier = 1) {
  if (state.sfxMuted || state.sfxVolume === 0) return;
  unlockAudio();
  const source = audio[name];
  if (!source) return;
  source.pause();
  source.currentTime = 0;
  source.playbackRate = playbackRate;
  sfxPlaybackMultipliers.set(source, volumeMultiplier);
  source.volume = state.sfxVolume * .25 * volumeMultiplier * .50;
  source.play().catch(() => {});
}

function updateAudio() {
  audio.background.volume = state.musicMuted ? 0 : state.musicVolume * .25 * .50;
  Object.entries(audio).forEach(([name, sound]) => {
    if (name !== "background") sound.volume = state.sfxMuted ? 0 : state.sfxVolume * .25 * (sfxPlaybackMultipliers.get(sound) ?? 1) * .50;
  });
  ["music", "sfx"].forEach(category => {
    const silent = state[`${category}Muted`] || state[`${category}Volume`] === 0;
    const label = `${silent ? "Unmute" : "Mute"} ${category === "music" ? "music" : "sound effects"}`;
    const button = elements[`${category}Button`];
    button.setAttribute("aria-label", label);
    button.setAttribute("aria-pressed", String(silent));
    button.title = label;
    elements[`${category}Volume`].value = String(state[`${category}Volume`]);
  });
}

function toggleMute(category) {
  const silent = state[`${category}Muted`] || state[`${category}Volume`] === 0;
  state[`${category}Muted`] = !silent;
  if (silent && state[`${category}Volume`] === 0) state[`${category}Volume`] = category === "music" ? .35 : .25;
  updateAudio();
  saveAudioPreference();
  if (category === "music" && !state.musicMuted) startAudio();
}

function gameplayTimeout(callback, delay) {
  const timer = setTimeout(() => {
    state.gameplayTimers.delete(timer);
    callback();
  }, delay);
  state.gameplayTimers.add(timer);
  return timer;
}

function resetGameState() {
  state.gameplayTimers.forEach(clearTimeout);
  state.gameplayTimers.clear();
  clearTimeout(state.nextTimer);
  state.nextTimer = null;
  state.gameplayVersion += 1;
  state.currentQuestion = 0;
  state.score = 0;
  state.roundStartScore = 0;
  state.lives = 3;
  state.wrongGhostsCaught = 0;
  state.inputLocked = false;
  elements.ghostField.replaceChildren();
  elements.effectsLayer.replaceChildren();
  elements.feedback.className = "feedback";
  elements.feedback.textContent = "";
  elements.catcher.classList.remove("firing");
  elements.catcher.style.removeProperty("--aim-x");
  elements.crosshair.style.removeProperty("left");
  elements.crosshair.style.removeProperty("top");
  elements.game.classList.remove("victory-glow", "screen-shake");
  elements.howModal.hidden = true;
  elements.messageButtons.replaceChildren();
  Object.entries(audio).forEach(([name, sound]) => {
    if (name !== "background") { sound.pause(); sound.currentTime = 0; }
  });
  updateHud();
}

async function startMode(roundIndex) {
  resetGameState();
  state.currentRound = roundIndex;
  const version = state.gameplayVersion;
  startAudio();
  const requiredImages = [rounds[roundIndex].background, ...ghostImages,
    assetUrl("assets/images/ghost-catcher.png"), ...fogImages];
  elements.game.setAttribute("aria-busy", "true");
  try {
    await Promise.all([
      ...requiredImages.map(src => cacheImage(src, 0)),
      ...Object.entries(audio).map(([name, sound]) => {
        sound.preload = "auto";
        if (sound.readyState < HTMLMediaElement.HAVE_CURRENT_DATA && sound.paused) sound.load();
        return preloadAudio(name, sound);
      })
    ]);
    if (version !== state.gameplayVersion) return;
    elements.play.querySelectorAll("img[data-src]").forEach(image => {
      image.src = assetUrl(image.dataset.src);
      image.removeAttribute("data-src");
    });
    showIntro();
  } catch (error) {
    console.warn("Selected mode assets could not load; select the mode to retry.", error);
  } finally {
    if (version === state.gameplayVersion) elements.game.removeAttribute("aria-busy");
  }
}

function showIntro() {
  clearTimeout(state.nextTimer);
  const round = rounds[state.currentRound];
  state.lives = 3;
  state.wrongGhostsCaught = 0;
  state.inputLocked = false;
  setBackground(round.background);
  elements.introRound.textContent = "10 QUESTIONS";
  elements.introTitle.textContent = round.title;
  elements.introType.textContent = round.type;
  elements.introButton.textContent = "START HUNTING";
  showScreen("intro");
}

function beginRound() {
  startAudio();
  state.roundStartScore = state.score;
  state.currentQuestion = 0;
  state.lives = 3;
  showScreen("play");
  renderQuestion();
}

function sentenceWithBlank(sentence) {
  return escapeHtml(sentence).replace("___", '<span class="blank">___</span>');
}

function completedSentence(question) {
  let result = escapeHtml(question.sentence).replace("___", `<span class="answer-fill">${escapeHtml(question.correct)}</span>`);
  [...question.markers].sort((a, b) => b.length - a.length).forEach(marker => {
    const safe = escapeHtml(marker);
    result = result.replace(safe, `<mark>${safe}</mark>`);
  });
  return `${result} <span class="answer-fill">✓</span>`;
}

function updateHud() {
  elements.score.textContent = state.score.toLocaleString("en-US");
  elements.question.textContent = `${state.currentQuestion + 1} / 10`;
  elements.lives.textContent = [0, 1, 2].map(index => index < state.lives ? "♥" : "♡").join(" ");
  elements.lives.setAttribute("aria-label", `${state.lives} ${state.lives === 1 ? "life" : "lives"}`);
}

function renderQuestion() {
  clearTimeout(state.nextTimer);
  state.inputLocked = false;
  state.wrongGhostsCaught = 0;
  elements.feedback.className = "feedback";
  elements.ghostField.replaceChildren();
  elements.effectsLayer.replaceChildren();
  const question = rounds[state.currentRound].questions[state.currentQuestion];
  elements.sentence.innerHTML = sentenceWithBlank(question.sentence);
  updateHud();

  const options = shuffle(question.options);
  options.forEach((option, index) => {
    const zone = document.createElement("div");
    zone.className = "ghost-zone";
    const ghost = document.createElement("button");
    ghost.type = "button";
    ghost.className = "ghost";
    ghost.dataset.answer = option;
    ghost.dataset.correct = String(option === question.correct);
    ghost.dataset.ghostIndex = String(index);
    ghost.style.setProperty("--float-time", `${3.7 + index * .37}s`);
    ghost.style.setProperty("--float-delay", `${index * -.71}s`);
    ghost.style.setProperty("--text-top", index === 1 ? "56%" : "62%");
    ghost.setAttribute("aria-label", `Answer: ${option}`);
    const image = document.createElement("img");
    image.src = ghostImages[index];
    image.alt = "";
    image.draggable = false;
    image.addEventListener("error", () => {
      if (image.src !== ghostImages[0]) image.src = ghostImages[0];
      else image.hidden = true;
    });
    const answer = document.createElement("span");
    answer.className = "ghost-answer";
    answer.textContent = option;
    ghost.append(image, answer);
    ghost.addEventListener("click", event => targetGhost(ghost, event));
    zone.append(ghost);
    elements.ghostField.append(zone);
  });
}

function ghostAimPoint(ghost) {
  // Aim at the visual torso centre, not at the answer plate.
  // Each PNG has slightly different transparent margins, so use a small
  // per-character calibration based on the rendered image box.
  const image = ghost.querySelector("img");
  const rect = (image || ghost).getBoundingClientRect();
  const index = Number(ghost.dataset.ghostIndex || 0);

  const aimProfiles = [
    { x: 0.50, y: 0.47 }, // ghost 1
    { x: 0.50, y: 0.45 }, // ghost 2 (taller)
    { x: 0.50, y: 0.49 }, // ghost 3 (round)
    { x: 0.50, y: 0.46 }, // ghost 4
    { x: 0.50, y: 0.47 }  // ghost 5
  ];
  const profile = aimProfiles[index] || aimProfiles[0];

  return {
    x: rect.left + rect.width * profile.x,
    y: rect.top + rect.height * profile.y
  };
}

function beamPoints(ghost) {
  const effectsRect = elements.effectsLayer.getBoundingClientRect();
  const muzzleRect = elements.muzzleAnchor.getBoundingClientRect();
  const target = ghostAimPoint(ghost);
  return {
    startX: muzzleRect.left + muzzleRect.width * .5 - effectsRect.left,
    startY: muzzleRect.top + muzzleRect.height * .5 - effectsRect.top,
    endX: target.x - effectsRect.left,
    endY: target.y - effectsRect.top
  };
}

function fireBeam(ghost, broken = false) {
  const { startX, startY, endX, endY } = beamPoints(ghost);
  const dx = endX - startX;
  const dy = endY - startY;
  const beam = document.createElement("div");
  beam.className = `shot-beam${broken ? " broken" : ""}`;
  beam.style.left = `${startX}px`;
  beam.style.top = `${startY}px`;
  beam.style.width = `${Math.hypot(dx, dy)}px`;
  beam.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
  elements.effectsLayer.append(beam);
  beam.addEventListener("animationend", () => beam.remove(), { once: true });

  const flash = document.createElement("i");
  flash.className = "muzzle-burst";
  flash.style.left = `${startX}px`;
  flash.style.top = `${startY}px`;
  elements.effectsLayer.append(flash);
  flash.addEventListener("animationend", () => flash.remove(), { once: true });
  playSound("beam");
}

function createImpact(ghost, badTarget = false) {
  const effectsRect = elements.effectsLayer.getBoundingClientRect();
  const target = ghostAimPoint(ghost);
  const x = target.x - effectsRect.left;
  const y = target.y - effectsRect.top;
  const variant = badTarget ? " correct-hit" : "";
  const flash = document.createElement("i");
  flash.className = `hit-flash${variant}`;
  flash.style.left = `${x}px`;
  flash.style.top = `${y}px`;
  elements.effectsLayer.append(flash);
  flash.addEventListener("animationend", () => flash.remove(), { once: true });

  const ring = document.createElement("i");
  ring.className = `hit-ring${variant}`;
  ring.style.left = `${x}px`;
  ring.style.top = `${y}px`;
  elements.effectsLayer.append(ring);
  ring.addEventListener("animationend", () => ring.remove(), { once: true });

  const sparkCount = 28 + Math.floor(Math.random() * 7);
  for (let index = 0; index < sparkCount; index += 1) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 70 + Math.random() * 70;
    const spark = document.createElement("i");
    spark.className = `hit-spark${variant}`;
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    const elongated = index % 2 === 0;
    spark.style.setProperty("--spark-w", `${elongated ? 24 + Math.random() * 22 : 7 + Math.random() * 6}px`);
    spark.style.setProperty("--spark-h", `${elongated ? 3 + Math.random() * 3 : 7 + Math.random() * 6}px`);
    spark.style.setProperty("--spark-angle", `${angle}rad`);
    spark.style.setProperty("--spark-x", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--spark-y", `${Math.sin(angle) * distance}px`);
    spark.style.setProperty("--spark-duration", `${.75 + Math.random() * .30}s`);
    elements.effectsLayer.append(spark);
    spark.addEventListener("animationend", () => spark.remove(), { once: true });
  }
}

function snapCatcherToTarget(ghost) {
  const pivotRect = elements.aimPivot.getBoundingClientRect();
  const ghostRect = ghost.getBoundingClientRect();
  const pivotX = pivotRect.left + pivotRect.width * .5;
  const pivotY = pivotRect.top + pivotRect.height * .5;
  const targetX = ghostRect.left + ghostRect.width * .5;
  const targetY = ghostRect.top + ghostRect.height * .5;
  const rotation = Math.atan2(targetY - pivotY, targetX - pivotX) * 180 / Math.PI + 90;
  elements.catcher.classList.add("firing");
  elements.catcher.style.setProperty("--aim-x", `${rotation}deg`);
}

function showFeedback(text, kind = "") {
  elements.feedback.className = `feedback ${kind}`;
  elements.feedback.textContent = text;
  void elements.feedback.offsetWidth;
  elements.feedback.classList.add("show");
}

function targetGhost(ghost, pointerEvent = null) {
  if (state.inputLocked || ghost.classList.contains("locked")) return;
  startAudio();
  ghost.classList.add("locked");
  const isCorrect = ghost.dataset.correct === "true";
  if (isCorrect) state.inputLocked = true;
  const gameplayVersion = state.gameplayVersion;
  requestAnimationFrame(() => {
    if (gameplayVersion !== state.gameplayVersion) return;
    fireBeam(ghost, isCorrect);
    createImpact(ghost, isCorrect);
    gameplayTimeout(() => elements.catcher.classList.remove("firing"), 90);
    if (isCorrect) rejectCorrectGhost(ghost);
    else catchWrongGhost(ghost);
  });
}

function catchWrongGhost(ghost) {
  const ghostRect = ghost.getBoundingClientRect();
  const catcherRect = elements.catcher.getBoundingClientRect();
  ghost.style.setProperty("--catch-x", `${catcherRect.left + catcherRect.width / 2 - ghostRect.left - ghostRect.width / 2}px`);
  ghost.style.setProperty("--catch-y", `${catcherRect.top + catcherRect.height * .25 - ghostRect.top - ghostRect.height / 2}px`);
  gameplayTimeout(() => ghost.classList.add("caught"), 90);
  gameplayTimeout(() => playSound("catch", 1.06), 270);
  gameplayTimeout(() => {
    state.score += 100;
    state.wrongGhostsCaught += 1;
    updateHud();
    showFeedback("+100");
    if (state.wrongGhostsCaught === 4) completeQuestion();
  }, 720);
}

function rejectCorrectGhost(ghost) {
  state.inputLocked = true;
  state.lives -= 1;
  updateHud();
  playSound("wrong", 1, .30);
  ghost.classList.add("rejected");
  elements.game.classList.remove("screen-shake");
  void elements.game.offsetWidth;
  elements.game.classList.add("screen-shake");
  showFeedback("WRONG TARGET!", "wrong");
  gameplayTimeout(() => {
    ghost.classList.remove("locked", "rejected");
    elements.game.classList.remove("screen-shake");
    if (state.lives <= 0) showGameOver();
    else state.inputLocked = false;
  }, 760);
}

function completeQuestion() {
  state.inputLocked = true;
  const correctGhost = elements.ghostField.querySelector('[data-correct="true"]');
  correctGhost?.classList.add("survivor", "locked");
  playSound("correct", 1, .30);
  showFeedback("CORRECT!", "correct");
  const question = rounds[state.currentRound].questions[state.currentQuestion];
  gameplayTimeout(() => { elements.sentence.innerHTML = completedSentence(question); }, 480);
  state.nextTimer = gameplayTimeout(advanceQuestion, 2980);
}

function advanceQuestion() {
  if (state.currentQuestion < 9) {
    state.currentQuestion += 1;
    renderQuestion();
  } else {
    showRoundComplete();
  }
}

function configureMessage({ kicker = "", title, text = "", stats = [], buttons = [] }) {
  elements.messageKicker.textContent = kicker;
  elements.messageTitle.textContent = title;
  elements.messageText.textContent = text;
  elements.messageStats.replaceChildren();
  stats.forEach(stat => {
    const chip = document.createElement("div");
    chip.className = "stat-chip";
    const label = document.createElement("span");
    label.textContent = stat.label;
    const value = document.createElement("strong");
    value.textContent = stat.value;
    chip.append(label, value);
    elements.messageStats.append(chip);
  });
  elements.messageButtons.replaceChildren();
  buttons.forEach(config => {
    const button = document.createElement("button");
    button.className = `button ${config.kind || "secondary"}`;
    button.textContent = config.label;
    button.addEventListener("click", config.action);
    elements.messageButtons.append(button);
  });
  showScreen("message");
}

function showGameOver() {
  state.inputLocked = true;
  configureMessage({
    kicker: rounds[state.currentRound].title,
    title: "GAME OVER",
    text: "Try this round again!",
    stats: [{ label: "SCORE", value: state.score.toLocaleString("en-US") }],
    buttons: [
      { label: "RESTART ROUND", kind: "primary", action: restartRound },
      { label: "HOME", action: goHome }
    ]
  });
}

function restartRound() {
  resetGameState();
  beginRound();
}

function showRoundComplete() {
  playSound(state.currentRound === 2 ? "victory" : "round", 1, .30);
  if (state.currentRound === 2) elements.game.classList.add("victory-glow");
  configureMessage({
    kicker: rounds[state.currentRound].title,
    title: ["THE HALL IS CLEAR!", "THE LIBRARY IS CLEAR!", "THE LAB IS CLEAR!"][state.currentRound],
    text: `${rounds[state.currentRound].type} COMPLETE`,
    stats: [
      { label: "SCORE", value: state.score.toLocaleString("en-US") },
      { label: "COMPLETED", value: "10 / 10" }
    ],
    buttons: [
      { label: "PLAY AGAIN", kind: "primary", action: restartRound },
      { label: "HOME", action: goHome }
    ]
  });
}

function goHome() {
  resetGameState();
  state.currentRound = 0;
  setBackground(assetUrl("assets/images/start-bg.webp"));
  showScreen("start");
}

function createSparkles() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 26; i += 1) {
    const spark = document.createElement("i");
    spark.className = "spark";
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${Math.random() * 100}%`;
    spark.style.setProperty("--time", `${3 + Math.random() * 4}s`);
    spark.style.setProperty("--delay", `${-Math.random() * 6}s`);
    fragment.append(spark);
  }
  $("sparkles").append(fragment);
}

function createAmbientParticles() {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < 16; index += 1) {
    const particle = document.createElement("i");
    particle.className = "ambient-particle";
    particle.style.left = `${3 + Math.random() * 94}%`;
    particle.style.setProperty("--size", `${2 + Math.random() * 4}px`);
    particle.style.setProperty("--duration", `${10 + Math.random() * 12}s`);
    particle.style.setProperty("--delay", `${-Math.random() * 18}s`);
    particle.style.setProperty("--drift", `${-35 + Math.random() * 70}px`);
    particle.style.setProperty("--peak", `${.18 + Math.random() * .3}`);
    fragment.append(particle);
  }
  elements.ambientParticles.append(fragment);
}

const imageCache = new Map();
const IMAGE_TIMEOUT_MS = 4500;
const AUDIO_TIMEOUT_MS = 6000;
const PRELOAD_MAX_MS = 6000;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function cacheImage(src, timeoutMs = IMAGE_TIMEOUT_MS) {
  if (imageCache.has(src)) return imageCache.get(src);
  const pending = new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    let finished = false;
    const finish = (status, error) => {
      if (finished) return;
      finished = true;
      clearTimeout(timeoutId);
      image.onload = null;
      image.onerror = null;
      if (status !== "loaded") imageCache.delete(src);
      if (status === "loaded") {
        console.log(`[preload] image loaded: ${src}`);
        resolve(src);
      } else {
        console.warn(`[preload] image ${status}: ${src}`);
        reject(error || new Error(`Image ${status}: ${src}`));
      }
    };
    const timeoutId = timeoutMs ? setTimeout(() => finish("timeout"), timeoutMs) : null;
    image.onload = () => finish("loaded");
    image.onerror = () => finish("error");
    image.src = src;
  });
  imageCache.set(src, pending);
  return pending;
}

function preloadAudio(name, sound) {
  return new Promise(resolve => {
    let finished = false;
    const finish = status => {
      if (finished) return;
      finished = true;
      clearTimeout(timeoutId);
      sound.removeEventListener("canplay", ready);
      sound.removeEventListener("error", failed);
      const method = status === "loaded" ? "log" : "warn";
      console[method](`[preload] audio ${status}: ${name} (${sound.src})`);
      resolve(status);
    };
    const ready = () => finish("loaded");
    const failed = () => finish("error");
    const timeoutId = setTimeout(() => finish("timeout"), AUDIO_TIMEOUT_MS);
    if (sound.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) return finish("loaded");
    sound.addEventListener("canplay", ready, { once: true });
    sound.addEventListener("error", failed, { once: true });
  });
}

function showStartScreen() {
  if (!elements.modeButtons[0].disabled) return;
  elements.modeButtons.forEach(button => {
    button.disabled = false;
    button.setAttribute("aria-disabled", "false");
  });
  elements.loading.classList.add("loaded");
  elements.loading.addEventListener("transitionend", () => elements.loading.remove(), { once: true });
}

async function preloadGame() {
  // Only the home background and its two existing ghosts are needed initially.
  ghostImages.slice(0, 2).forEach(src => { cacheImage(src).catch(() => {}); });

  const startBackground = imageAssets[0];
  const startBackgroundFallback = assetUrl("assets/images/start-bg.png");
  const criticalImages = cacheImage(startBackground).catch(() =>
    cacheImage(startBackgroundFallback).then(() => setBackground(startBackgroundFallback))
  );

  const preloadResult = await Promise.race([
    criticalImages.then(() => "ready").catch(() => "failed"),
    delay(PRELOAD_MAX_MS).then(() => "timeout")
  ]);
  if (preloadResult === "timeout") console.warn(`[preload] overall timeout after ${PRELOAD_MAX_MS}ms`);
  showStartScreen();

}

function handlePointerMove(event) {
  if (state.screen !== "play") return;
  const rect = elements.game.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  elements.crosshair.style.left = `${x}px`;
  elements.crosshair.style.top = `${y}px`;

  // Aim the catcher geometrically at the actual pointer, not by a tiny +/-7 degree approximation.
  const pivotRect = elements.aimPivot.getBoundingClientRect();
  const pivotX = pivotRect.left + pivotRect.width * .5;
  const pivotY = pivotRect.top + pivotRect.height * .5;
  const dx = event.clientX - pivotX;
  const dy = pivotY - event.clientY;
  let rotation = Math.atan2(dx, dy) * 180 / Math.PI;
  rotation = Math.max(-42, Math.min(42, rotation));
  elements.catcher.style.setProperty("--aim-x", `${rotation}deg`);
}

elements.modeButtons.forEach(button => {
  button.addEventListener("click", () => startMode(Number(button.dataset.round)));
});
$("howButton").addEventListener("click", () => { elements.howModal.hidden = false; $("closeHowButton").focus(); });
$("closeHowButton").addEventListener("click", () => { elements.howModal.hidden = true; $("howButton").focus(); });
elements.howModal.addEventListener("click", event => { if (event.target === elements.howModal) elements.howModal.hidden = true; });
elements.introButton.addEventListener("click", beginRound);
elements.homeButton.addEventListener("click", goHome);
["music", "sfx"].forEach(category => {
  elements[`${category}Button`].addEventListener("click", () => toggleMute(category));
  elements[`${category}Volume`].addEventListener("input", event => {
    state[`${category}Volume`] = Number(event.target.value);
    state[`${category}Muted`] = state[`${category}Volume`] === 0;
    updateAudio();
    saveAudioPreference();
    if (category === "music" && !state.musicMuted) startAudio();
  });
});
elements.game.addEventListener("pointermove", handlePointerMove, { passive: true });
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && state.musicRequested && !state.musicMuted) startAudio();
});
window.addEventListener("focus", () => {
  if (state.musicRequested && !state.musicMuted && audio.background.paused) startAudio();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !elements.howModal.hidden) elements.howModal.hidden = true;
});

createSparkles();
createAmbientParticles();
document.querySelectorAll(".fog-puff, .catcher-image").forEach(image => {
  image.addEventListener("error", () => { image.hidden = true; }, { once: true });
  if (image.hasAttribute("src") && image.complete && image.naturalWidth === 0) image.hidden = true;
});
updateAudio();
preloadGame();

# Publishing updates

The permanent Genially URL remains the repository's normal GitHub Pages URL.
`index.html` is a stable launcher; game markup lives in `game.html`.

For each future update:

1. Edit the game files/assets as needed.
2. Change the single `release` value in `release.json` to a NEW unique ID
   (for example `2026-10-05.1`). Never reuse an earlier release ID.
3. Publish the manifest, game.html, JavaScript, CSS and assets together in the
   same GitHub Pages deployment. No Genially embed URL changes are needed.

Release IDs may contain letters, numbers, periods, underscores and hyphens
(up to 100 characters). No build step or server runtime is required.

The launcher requests release.json with a unique check query and no-store,
then loads game.html and all game resources with the release ID in `?v=`.
Resources within an unchanged release retain normal browser caching.
Gameplay-only assets still load on mode selection, not on the home screen.

If the online release check fails, the launcher uses the last known release
(or a unique fallback ID if storage is unavailable). Failed page loading offers
TRY AGAIN. Offline access and an already-open game cannot guarantee updates.

The first deployment of this launcher replaces the old entry page. A browser
still holding the OLD index.html must first revalidate that page through normal
hosting cache expiry/reload; code absent from that old page cannot force it.
Once the launcher is received, leave its update-check logic stable across game
releases. Publish game changes through game.html and the manifest.

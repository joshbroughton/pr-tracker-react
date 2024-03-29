# pr-tracker-react

Current Status: ![Uptime Robot status](https://img.shields.io/uptimerobot/status/m795401477-243babb8a2eda3bfd5ce5511)
7 Day Uptime: ![Uptime Robot ratio (7 days)](https://img.shields.io/uptimerobot/ratio/7/m795401477-243babb8a2eda3bfd5ce5511)
30 Day Uptime: ![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m795401477-243babb8a2eda3bfd5ce5511)


Use the site: [https://joshbroughton.github.io/pr-tracker-react/](https://pr-tracker.dev.joshbroughton.me)

A website for tracking rep maxes and calculating reps required to achieve a PR given an AMRAP weight.
React front-end, API-based Express.js and Postgresql back-end. The API may not be available at all times due to
limitations with render.com's free tier.

To build your own version of the app, clone the repo, create `.env` in the root directory which sets POSTGRES_PASSWORD to a secure password of your choosing, and run `docker compose up` from the root directory. This launches
the back end API, the react client (available at http://localhost:3000), and a postgres database. It also mounts a volume so any data saved to the database will be persisted locally between runs.

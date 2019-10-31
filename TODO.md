# Todo

## Outline

- [Features](#features)
- [Maintenance](#maintenance)
- [Wishlist](#wishlist)
- [Miscellaneous](#miscellaneous)
    - [Bots](#bots)

## Features
- [x] Grab a specific joke from joke file
- [x] Create persistent data sources
- [x] Create a start / setup script to automate set up for new contributors
- [x] Create persistent / loadable bots

## Maintenance
- [x] Add and configure ```semver``` package to ease versioning
- [x] Remove native semver package updating
- [ ] Tests
    - [x] Add test suite for `/src` directory
    - [ ] Make a ci/cd for this
    - [x] Run tests before allowing pushes
    - [x] Create contract tests with the twitter bot
- [x] Flesh out eslint settings
    - [x] Share eslint configurations so that I can use them on other projects
- [ ] Automate Changelog

## Wishlist
- [ ] Integrate some sentiment analysis
    - [ ] Apply comedic sentiment
    - [ ] Apply sarcastic sentiment
    - [ ] Apply insights
- [ ] Make routes that return different types of jokes
    - [x] Make Manichean Bot route that can respond to input
- [ ] Scrape websites and social media to have new jokes or break this feature out to a new service.

## Miscellaneous
- [x] Write generate data script
- [x] Write train bots script
    - [x] Write js train bots script
- [ ] Write tests for all uncovered js code in src

### Bots
- [x] Make Manichean Bot a class

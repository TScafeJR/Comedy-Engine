# Comedy Engine

## Outline
- [Summary](#summary)
- [Todo](#to-do)

## Summary
This is where I curate jokes, sentiment, and dynamic insight for my twitter bot. I'm trying to create a machine learning pipeline to help out with sentiment analysis as well as joke / meme creation. 

I'm kind of playing around with brain.js to see what type of things are possible and also taking them up on their challenge to do some ML with Javascript.

If you come across this project and take interest or want to contribute, feel free to reach out to me.

## Setup
1. You can set up the application by running ```npm run setup``` which will install development dependencies, generate data sources and also will train the bots.
2. You can then run the application by running ```npm run start:dev``` which starts the application in development mode.

### Generate Data
You can generate the data used for training the bots and for performing other operations by running ```npm run generate:data```.

### Training Bots
You can train the bots by running ```npm run train:bots```. *Note:* You will need to make sure that the data is generated before. You can do this by running ```npm run generate:data```.

## To Do
[Todo Readme](./TODO.md)

# hkirat-real-time-chat-clone
Clone of https://github.com/hkirat/real-time-chat

Real time chat in Node.js

# Requirements for v1
* People are rate limited
* People should be able to upvote
* Highly upvoted comments should reach the admin

# Rough steps
* Initialize project
```
npx tsc --init
npm init -y
mkdir src && touch src/index.ts
```
* Changes to `tsconfig.json`: Update `rootDir` and `outDir`
* Websocket deps
```
npm install websocket
npm i --save @types/websocket
```



@echo off
cd src
node GetDailyNoteData.js
timeout /T 1
start DailyNote.html

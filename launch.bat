@echo off
setlocal
set "ROOT=%~dp0"
title MemoTrunk - Landing Page

if not exist "%ROOT%node_modules" (
  echo Installation des dépendances...
  npm install
)

start "" "http://localhost:5180"
npm run dev
endlocal

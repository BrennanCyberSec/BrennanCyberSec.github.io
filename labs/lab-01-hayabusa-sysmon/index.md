---
title: "Lab 01 — Hayabusa + Sysmon"
---

# Lab 01 — Hayabusa + Sysmon: Suspicious Activity Hunt

## Goal
Use Hayabusa to analyze Sysmon logs and try to indentify any suspicious process creation, network connections, and authentication patterns. Will be using Sigma rules.

## Environment
- Ubuntu VM (Hayabusa)
- Windows Sysmon logs (EVTX/JSON)
- Optional: Sigma rules (Using)

## Steps
### 1) Install Hayabusa
```bash
sudo apt update

#!/usr/bin/env node
// SessionStart hook: guarantees the ADHD output-shaping rules load every
// session instead of relying on the skill's auto-trigger heuristic.
const fs = require('fs');
const path = require('path');

const skillPath = path.join(__dirname, '..', 'skills', 'i-have-adhd', 'SKILL.md');
const body = fs.readFileSync(skillPath, 'utf8').replace(/^---[\s\S]*?---\s*/, '');
process.stdout.write(body);

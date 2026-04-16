# A5 - Skill Creation: VS Code `/create-skill` vs Anthropic `skill-creator`

> **Series**: Skills & Customization
> **Length**: 5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A5-skill-creation`
> **Complete Branch**: `video/A5-complete`

---

## Overview

**What viewers learn**: Two paths to building agent skills - VS Code's built-in `/create-skill` for quick iteration, and Anthropic's `skill-creator` for eval-driven production skills. Same use case, side by side.

**Prerequisites**: Basic understanding of what agent skills are.

**Key files touched**:
- `.github/skills/api-endpoint-generator/SKILL.md`
- `.github/skills/api-endpoint-generator/templates/`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card + split comparison | VS Code logo vs Anthropic logo | "Two ways to build skills. Same goal, different approaches." |
| 3 | 0:30-0:45 | Diagram: SKILL.md anatomy | Quick overview of skill structure | "Both produce a SKILL.md. Let's see how they differ." |
| 4 | 0:45-1:50 | VS Code: /create-skill | Live creation of the skill | "Path 1: /create-skill. Fast, conversational, built in." |
| 5 | 1:50-2:10 | Generated SKILL.md | Walk through the output | "Here's what VS Code generated." |
| 6 | 2:10-3:20 | Terminal: skill-creator | Anthropic's eval-driven approach | "Path 2: Anthropic's skill-creator. Rigorous, tested, measured." |
| 7 | 3:20-3:40 | Generated SKILL.md | Walk through this output | "Same skill, different depth." |
| 8 | 3:40-4:30 | Side-by-side comparison | Compare the two SKILL.md files | "When to use which." |
| 9 | 4:30-4:50 | Demo: skill in action | Trigger the skill in chat | "Both work. Let's see it trigger." |
| 10 | 4:50-5:00 | Outro | Next video + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> Agent skills are portable, reusable instruction sets that work across VS Code, Copilot CLI, and the cloud agent. But there are two very different ways to create them.
>
> Today we're building the same skill - an API endpoint generator - using VS Code's built-in `/create-skill` and Anthropic's `skill-creator`. Same goal, different philosophies.

### SECTION 1: SKILL.md Quick Anatomy (0:30-0:45)

**CAMTASIA ACTION**: Show a diagram of SKILL.md structure: frontmatter (name, description) + body (instructions, scripts, resources).

> Every skill is a SKILL.md file with YAML frontmatter - name and description - plus a Markdown body with detailed instructions. The description is how Copilot decides whether to load the skill. The body is what it reads when it does.

### SECTION 2: Path 1 - VS Code /create-skill (0:45-2:10)

**CAMTASIA ACTION**: Open Copilot chat. Type `/create-skill`. When prompted, describe: "A skill that generates Flask API endpoints following the project's existing patterns - model, route, blueprint registration, and tests." Walk through the AI's questions and generated output.

> Path one. I type `/create-skill` and describe what I want: an API endpoint generator that follows our project patterns.
>
> Copilot asks a couple of clarifying questions - what framework, what patterns to follow, should it include tests? Then it generates the SKILL.md.
>
> This took about 30 seconds. Let's look at what we got.

**CAMTASIA ACTION**: Open the generated SKILL.md. Zoom into frontmatter, then scroll through instructions.

> The frontmatter has a name and description. The instructions cover the basic workflow - read existing patterns, generate model, route, tests, register the blueprint.
>
> It's functional. You could use this today. But how do we know the description actually triggers correctly? That's where path two comes in.

### SECTION 3: Path 2 - Anthropic skill-creator (2:10-3:40)

**CAMTASIA ACTION**: Show the skill-creator being invoked. It spawns test cases, runs evaluations, iterates on the description.

> Anthropic's `skill-creator` takes a different approach. Instead of just generating a skill, it builds one through evaluation.
>
> I tell it the same thing - "API endpoint generator for Flask." But instead of immediately producing a file, it first asks: what are example prompts that should trigger this skill? And what prompts should NOT trigger it?
>
> It generates test cases. Then it drafts the skill and runs those test cases against it - does the description trigger correctly? It splits into 60% train and 40% test, runs each query three times for reliability.
>
> If the trigger rate is too low, it iterates - rewriting the description, re-testing, up to five rounds.
>
> Here's the output. The SKILL.md looks similar but the description has been battle-tested. It triggers on the right prompts and stays quiet on the wrong ones.

### SECTION 4: Comparison (3:40-4:30)

**CAMTASIA ACTION**: Side-by-side view of both SKILL.md files.

> So when do you use which?
>
> `/create-skill` is perfect for team-specific skills, quick iteration, and when you know your prompts well. It's built right into VS Code, takes 30 seconds, and you can refine by saying "create a skill from what we just did."
>
> The `skill-creator` is for production skills you're distributing - where trigger accuracy matters, where you want measured confidence, where you're publishing to a plugin marketplace.
>
> Both produce portable skills that work across VS Code, CLI, and cloud agent.

### SECTION 5: Quick Demo (4:30-4:50)

**CAMTASIA ACTION**: In chat, type "Generate a new API endpoint for publishers with CRUD operations." Show the skill triggering and loading.

> Let's confirm it works. I type a prompt that should trigger our skill - and there it is. Copilot loads the API endpoint generator skill and follows the instructions.

### OUTRO (4:50-5:00)

> Two paths, one standard. Next video: we take this skill and optimize it with evals. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `git checkout video/A5-skill-creation`
- [ ] No skills directory exists yet (we're creating from scratch)
- [ ] Anthropic skill-creator plugin installed
- [ ] Pre-run the skill-creator once to know the flow and timing

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + title card | 0:30 | Use split logo comparison |
| 2 | SKILL.md anatomy diagram | 0:15 | Quick overlay |
| 3 | /create-skill interaction | 1:05 | Speed up AI thinking |
| 4 | Walk through VS Code generated SKILL.md | 0:20 | Zoom on key parts |
| 5 | skill-creator eval-driven flow | 1:10 | Speed up heavily - lots of background work |
| 6 | Walk through skill-creator output | 0:20 | Zoom on battle-tested description |
| 7 | Side-by-side comparison | 0:50 | Split screen or toggle between tabs |
| 8 | Quick trigger demo | 0:20 | Show it loading |
| 9 | Outro | 0:10 | Template |

### Post-Recording
- [ ] Side-by-side split screen for comparison section
- [ ] Speed up all AI processing (3-4x)
- [ ] Callout: "30 seconds" for /create-skill, "5 minutes" for skill-creator
- [ ] Lower thirds: "Path 1: VS Code", "Path 2: Anthropic"
- [ ] Zoom on description fields in both outputs

---

## Demo Repo Branch Spec

### Starting State (`video/A5-skill-creation`)
```
- .github/skills/ directory exists but is EMPTY
- Full Tailspin Toys app with games endpoint (pattern to follow)
- Anthropic skill-creator plugin available
```

### Ending State (`video/A5-complete`)
```
- .github/skills/api-endpoint-generator/SKILL.md (the final version)
- .github/skills/api-endpoint-generator/templates/ (optional scaffolds)
```

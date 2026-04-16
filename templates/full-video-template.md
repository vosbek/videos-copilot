# [VIDEO ID] - [TITLE]

> **Series**: [Series Name]
> **Length**: 3-5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/[ID]-[slug]`
> **Complete Branch**: `video/[ID]-complete`

---

## Overview

**What viewers learn**: [1-2 sentences]

**Prerequisites**: [What the viewer should already know / have watched]

**Key files touched**:
- [ ] `path/to/file1`
- [ ] `path/to/file2`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:15 | Branded intro | Play intro animation | -- |
| 2 | 0:15-0:30 | Title card | Show video title + what we're building | "In this video..." |
| 3 | 0:30-X:XX | VS Code / Terminal | [Specific action] | [Script line] |
| ... | ... | ... | ... | ... |
| N | X:XX-X:XX | Branded outro | Show outro + next video link | "Next up..." |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro plays]

> [Opening narration - hook the viewer in 1 sentence]
>
> [What we're building / what you'll learn]
>
> [Quick context if needed]

### SECTION 1: [Name] (0:30-X:XX)

**CAMTASIA ACTION**: [What to show on screen]

> [Narration for this section]

**CAMTASIA ACTION**: [Next screen action]

> [Narration continues]

### SECTION 2: [Name] (X:XX-X:XX)

**CAMTASIA ACTION**: [What to show on screen]

> [Narration for this section]

### DEMO (X:XX-X:XX)

**CAMTASIA ACTION**: [Step-by-step what to do on screen]

> [Narration walking through the demo]

### OUTRO (X:XX-X:XX)

> [Recap what we built]
>
> [Call to action - try it yourself, link to branch]
>
> [Tease next video]

[Branded outro plays]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out demo branch: `git checkout video/[ID]-[slug]`
- [ ] Verify app runs: `./scripts/start-app.sh`
- [ ] VS Code clean state: close all tabs, hide sidebar clutter
- [ ] Font size: 16pt+ in editor, 14pt+ in terminal
- [ ] Screen resolution: 1920x1080 (record at 2x if retina)
- [ ] Hide desktop notifications
- [ ] Close Slack/Teams/email
- [ ] Camtasia: new project, 1920x1080, 60fps
- [ ] Mic check: record 5 seconds, verify levels

### Recording Task Order

> Record these in order. Each is a separate Camtasia take.
> You can re-record any individual take without affecting others.

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + title card | 0:30 | Use intro template |
| 2 | [First action] | X:XX | [Specific notes] |
| 3 | [Second action] | X:XX | [Specific notes] |
| ... | ... | ... | ... |
| N | Outro | 0:15 | Use outro template |

### Post-Recording
- [ ] Review each take for errors
- [ ] Add zoom effects on key UI elements
- [ ] Add callout annotations for important clicks
- [ ] Enable cursor smoothing
- [ ] Add lower-third title cards at section transitions
- [ ] Add background music (low, 10-15% volume)
- [ ] Export: MP4, H.264, 1080p60

---

## Demo Repo Branch Spec

### Starting State (`video/[ID]-[slug]`)
```
Files that should exist when viewer checks out this branch:
- [ ] file1 - description
- [ ] file2 - description
```

### Ending State (`video/[ID]-complete`)
```
Files added/modified during the video:
- [ ] file1 - what was created/changed
- [ ] file2 - what was created/changed
```

---

## Notes

[Any additional notes, gotchas, things to watch out for during recording]

# A6 - Eval-Driven Skill Optimization: Measure, Iterate, Ship

> **Series**: Skills & Customization
> **Length**: 5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A6-skill-evals`
> **Complete Branch**: `video/A6-complete`

---

## Overview

**What viewers learn**: How to run evals against agent skills using Anthropic's skill-creator - the 60/40 train/test split, 3x query runs, iterative optimization, HTML reports, and variance analysis.

**Prerequisites**: A5 (skill creation)

**Key files touched**:
- `.github/skills/api-endpoint-generator/SKILL.md` (iterated)
- `evals/api-endpoint-generator/eval-cases.json`
- `evals/api-endpoint-generator/results/`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card | "Measure, Iterate, Ship" | "If you can't measure your skill's trigger rate, you're guessing." |
| 3 | 0:30-1:10 | Editor: eval-cases.json | Show the eval test cases | "Evals start with test cases - what should trigger and what shouldn't." |
| 4 | 1:10-1:40 | Diagram: eval pipeline | 60/40 split, 3x runs | "The pipeline: split, test, iterate." |
| 5 | 1:40-2:30 | Terminal: running evals | Run baseline eval | "Let's see our starting trigger rate." |
| 6 | 2:30-3:10 | Browser: HTML report | Open and read the report | "The report shows exactly what triggered and what missed." |
| 7 | 3:10-3:50 | Terminal: optimization loop | Run optimization iterations | "Now we let it iterate - up to 5 rounds of improvement." |
| 8 | 3:50-4:20 | Browser: improved report | Compare before/after | "Trigger rate went from 67% to 93%." |
| 9 | 4:20-4:40 | Editor: before/after description | Show what changed | "The description was rewritten for better matching." |
| 10 | 4:40-4:55 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> In the last video we built an API endpoint generator skill two ways. But here's the question nobody asks: does the description actually trigger when it should?
>
> Anthropic's eval pipeline answers this with data. We're going to measure our skill's trigger rate, run optimization iterations, and ship a battle-tested description.

### SECTION 1: Writing Eval Cases (0:30-1:10)

**CAMTASIA ACTION**: Open `evals/api-endpoint-generator/eval-cases.json`. Show the structure.

> Evals start with test cases. Each case has a query - what a user might type - and an expected result: should this trigger our skill or not?
>
> Positive cases: "Generate a new endpoint for publishers." "Add CRUD routes for categories." "Create an API for user profiles with authentication."
>
> Negative cases: "Fix the bug in the login page." "Write unit tests for the game model." "Explain how Flask blueprints work."
>
> We want about 20 cases - enough for a meaningful split. The skill-creator will divide them 60/40 into train and test sets.

### SECTION 2: The Eval Pipeline (1:10-1:40)

**CAMTASIA ACTION**: Show a simple diagram: 20 cases -> 60/40 split -> 3x runs per query -> trigger rate calculation.

> Here's how the pipeline works. Your 20 cases split into 12 training and 8 test cases. Each query runs three times - because AI is non-deterministic, you need multiple runs for a reliable trigger rate.
>
> That's 60 total eval runs just for the baseline. The system measures: did the skill trigger when it should have, and did it stay quiet when it shouldn't have?

### SECTION 3: Running Baseline Evals (1:40-2:30)

**CAMTASIA ACTION**: Run the eval command. Show output as test cases execute in parallel. Show the summary output.

> Let's run the baseline. The skill-creator spawns these test cases in parallel - you'll see them executing simultaneously.
>
> And here's our baseline: 67% trigger accuracy on the training set, 62% on the test set. Not bad for a first draft, but we're leaving a third of our triggers on the table.

### SECTION 4: Reading the HTML Report (2:30-3:10)

**CAMTASIA ACTION**: Open the HTML report in a browser. Show the results table, the per-case breakdown, the trigger/no-trigger matrix.

> The `generate_review.py` script produces this HTML report. Let's read it.
>
> The top section shows overall accuracy per split. Below that, every individual test case with its result across all three runs.
>
> Here's what's interesting - "Add CRUD routes for categories" triggered 3 out of 3 times. But "Create an API for user profiles with authentication" only triggered 1 out of 3. That inconsistency tells us the description is close but not precise enough for that phrasing.
>
> The variance column shows reliability. High variance means flaky triggering - which is worse than consistently not triggering.

### SECTION 5: Optimization Loop (3:10-4:20)

**CAMTASIA ACTION**: Run the optimization command. Show it iterating - proposing new descriptions, re-evaluating, comparing.

> Now we optimize. The system takes the failing cases, sends them to Claude with the current description, and asks: "Propose a better description that would trigger on these missed cases without triggering on the negatives."
>
> It re-evaluates each new description on both train and test. Up to five iterations.
>
> Iteration one: 72% test accuracy. Iteration two: 81%. Iteration three: 93%. It stopped at three because iteration four didn't improve on test score.
>
> And here's the key - it selects the best description by test score, not training score. This prevents overfitting. Your skill works on new prompts it's never seen, not just the ones it trained on.

**CAMTASIA ACTION**: Open the updated SKILL.md. Show the before/after description.

> Look at the description before and after. The original was generic. The optimized version is specific about what triggers it - it mentions "REST endpoints", "CRUD operations", "Flask patterns", and "route scaffolding." Precise enough to trigger, specific enough not to false-positive.

### OUTRO (4:40-4:55)

> Eval-driven skill development. Measure your trigger rate, iterate with data, ship with confidence. This is how you build production skills.
>
> Next: hooks for enforcing guardrails. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `git checkout video/A6-skill-evals`
- [ ] Skill from A5 exists with "unoptimized" description
- [ ] eval-cases.json populated with 20 test cases
- [ ] Anthropic skill-creator plugin installed
- [ ] Pre-run the full eval+optimization once to know outputs and timing
- [ ] Save the HTML report from pre-run for fallback

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + title card | 0:20 | Template |
| 2 | Walk through eval-cases.json | 0:40 | Zoom on positive/negative cases |
| 3 | Pipeline diagram | 0:30 | Overlay graphic |
| 4 | Run baseline eval | 0:50 | Speed up parallel execution 4x |
| 5 | Open and read HTML report | 0:40 | Zoom on key metrics, failing cases |
| 6 | Run optimization loop | 0:50 | Speed up iterations heavily |
| 7 | Show improved report + before/after description | 0:30 | Side-by-side if possible |
| 8 | Outro | 0:15 | Template |

### Post-Recording
- [ ] Speed up all eval execution heavily (4-6x)
- [ ] Zoom on specific failing test cases in report
- [ ] Highlight: 67% -> 93% improvement
- [ ] Callout on "test score, not training score"
- [ ] Lower thirds: "Baseline", "Iteration 1", "Iteration 2", "Iteration 3"

---

## Demo Repo Branch Spec

### Starting State (`video/A6-skill-evals`)
```
- .github/skills/api-endpoint-generator/SKILL.md (unoptimized from A5)
- evals/api-endpoint-generator/eval-cases.json (20 test cases)
- evals/api-endpoint-generator/results/ (empty)
- Anthropic skill-creator plugin
```

### Ending State (`video/A6-complete`)
```
- .github/skills/api-endpoint-generator/SKILL.md (optimized description)
- evals/api-endpoint-generator/results/baseline.html
- evals/api-endpoint-generator/results/optimized.html
```

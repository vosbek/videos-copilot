# A1 - Building a Custom Agent from Scratch

> **Series**: Agents & Orchestration
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A1-custom-agent`
> **Complete Branch**: `video/A1-complete`

---

## Overview

**What viewers learn**: How to create a custom agent with its own persona, tool restrictions, and instructions using both `/create-agent` and manual `.agent.md` authoring.

**Prerequisites**: Familiarity with VS Code Copilot chat and agent mode basics.

**Key files touched**:
- `.github/agents/security-reviewer.agent.md`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro animation | -- |
| 2 | 0:10-0:25 | Title card | "Building a Custom Agent from Scratch" | "Custom agents let you create specialized AI personas with their own tools, instructions, and behavior." |
| 3 | 0:25-0:50 | VS Code chat panel | Type `/create-agent` and describe "security reviewer" | "The fastest way to start is /create-agent. Describe what you want and Copilot scaffolds the file." |
| 4 | 0:50-1:20 | Generated .agent.md file | Walk through the generated frontmatter | "Let's look at what it generated. The frontmatter defines the agent's identity." |
| 5 | 1:20-2:00 | Editor: editing frontmatter | Modify tools list, add instructions | "I'm going to tighten this up. This agent should only read files, search code, and run terminal commands - no editing." |
| 6 | 2:00-2:30 | Editor: instructions section | Write detailed behavior instructions | "The instructions section is where you define the persona's expertise and approach." |
| 7 | 2:30-3:15 | Chat panel with agent selected | Select the security agent, ask it to review auth middleware | "Now let's use it. I select my security agent and ask it to review our authentication code." |
| 8 | 3:15-3:40 | Chat response | Show the agent's security-focused review | "Notice it found the missing rate limiting and the JWT expiry issue. It can't edit - it only reports." |
| 9 | 3:40-3:55 | Recap card | Summary of what we built | "That's a custom agent - specialized persona, restricted tools, targeted instructions." |
| 10 | 3:55-4:05 | Outro | Next video tease + branch link | "Next: orchestrating multiple agents together. Try it yourself on the branch below." |

---

## Full Script

### INTRO (0:00-0:25)

[Branded intro plays - 10 seconds]

> Custom agents let you give Copilot a completely different persona - with its own tools, instructions, and behavior. Think of them as specialized team members you can create in minutes.
>
> In this video, we're building a security reviewer agent from scratch - two ways.

### SECTION 1: /create-agent (0:25-0:50)

**CAMTASIA ACTION**: Show VS Code with Copilot chat open. Type `/create-agent` in the chat input. When prompted, type: "A security review agent that analyzes code for vulnerabilities, follows OWASP guidelines, and only has read access."

> The fastest way to start is with slash-create-agent. I describe what I want - a security reviewer that follows OWASP guidelines and only reads, never writes.
>
> Copilot asks a few clarifying questions, then generates the agent file.

### SECTION 2: Anatomy of .agent.md (0:50-1:20)

**CAMTASIA ACTION**: Open the generated `.github/agents/security-reviewer.agent.md` file. Zoom into the frontmatter.

> Let's look at what it generated. This is an agent-dot-MD file. The frontmatter at the top is YAML that defines three key things.
>
> First, the **description** - this is what Copilot shows in the agent picker.
>
> Second, the **tools** list - which tools this agent is allowed to use.
>
> Third, you can set a specific **model** if you want this agent to always use, say, Opus for deeper analysis.

### SECTION 3: Customizing the Agent (1:20-2:30)

**CAMTASIA ACTION**: Edit the tools list to restrict it. Remove edit tools, keep only read/search/terminal. Then scroll to the instructions body and write detailed security-focused instructions.

> Now I'm going to tighten this up for our specific use case.
>
> For tools, I'm removing all editing capabilities. This agent should only have `readFile`, `search`, `grep`, and `runTerminal` - enough to investigate, but it can't change anything.
>
> Below the frontmatter is the instructions body - this is Markdown where you define the agent's expertise and approach.
>
> I'm writing: "You are a senior application security engineer. When reviewing code, always check for the OWASP Top 10. Report findings with severity level, the vulnerable code, and a recommended fix. Never modify files directly."
>
> This is where your agent's personality and domain expertise live.

### SECTION 4: Using the Agent (2:30-3:40)

**CAMTASIA ACTION**: Open the chat panel. Click the agent picker dropdown. Select "Security Reviewer". Type: "Review the authentication middleware in server/middleware/ for security vulnerabilities." Wait for the response. Zoom into key findings.

> Time to test it. In the chat panel, I click the agent picker - and there's our Security Reviewer.
>
> I'll ask it to review the authentication middleware in our Tailspin Toys app.
>
> Watch what happens - it reads the auth files, searches for related code patterns, and comes back with a structured security report.
>
> It found three issues: missing rate limiting on the login endpoint, JWT tokens with no expiry set, and a SQL injection risk in the user lookup query. Each has a severity rating and a recommended fix.
>
> And notice - it didn't try to edit anything. It reported, exactly as we instructed.

### OUTRO (3:40-4:05)

> That's a custom agent. A specialized persona with restricted tools and targeted instructions, built in under four minutes.
>
> Check out the branch below to try it yourself. And next up - we'll orchestrate multiple agents like this one working together.

[Branded outro plays]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out demo branch: `git checkout video/A1-custom-agent`
- [ ] Verify app runs: `./scripts/start-app.sh`
- [ ] VS Code: close all tabs, Copilot chat open
- [ ] Delete any existing `.github/agents/security-reviewer.agent.md` (we create it live)
- [ ] Font size: 16pt editor, 16pt terminal
- [ ] Resolution: 1920x1080 @ 60fps
- [ ] Notifications OFF

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Branded intro + title card | 0:25 | Use template |
| 2 | Type `/create-agent`, interact with prompts | 0:25 | May need retakes if AI response varies |
| 3 | Walk through generated file frontmatter | 0:30 | Zoom into YAML, move slowly |
| 4 | Edit tools list + write instructions | 1:10 | Have the text ready to paste if needed |
| 5 | Select agent + send review prompt | 0:30 | Pre-test to know what response looks like |
| 6 | Show and discuss findings | 0:25 | Zoom into each finding |
| 7 | Recap + outro | 0:25 | Use template |

### Post-Recording
- [ ] Zoom effects on frontmatter fields
- [ ] Zoom on each security finding
- [ ] Callout annotation on agent picker dropdown
- [ ] Lower thirds: "Frontmatter", "Instructions", "Live Demo"
- [ ] Cursor smoothing ON
- [ ] Background music at 10%

---

## Demo Repo Branch Spec

### Starting State (`video/A1-custom-agent`)
```
- .github/copilot-instructions.md (existing)
- .github/agents/ directory exists but is EMPTY
- server/ - full Tailspin Toys backend with auth middleware
- Auth middleware has intentional security issues:
  - No rate limiting on login
  - JWT with no expiry
  - String concatenation in SQL query
```

### Ending State (`video/A1-complete`)
```
- .github/agents/security-reviewer.agent.md (the completed agent)
```

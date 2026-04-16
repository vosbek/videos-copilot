# Camtasia Production Guide - Professional Video Series

## Recording Setup

### Screen & Resolution
- **Record at**: 1920x1080 (even on retina - scale if needed)
- **Frame rate**: 60fps (Camtasia 2026 supports up to 4K@60)
- **VS Code zoom**: 150-175% so text is readable at 1080p
- **Terminal font**: 16pt minimum
- **Editor font**: 16pt minimum
- **Hide**: minimap, breadcrumbs, activity bar badges (keep it clean)

### VS Code Appearance for Recording
```
Settings to toggle before recording:
- "editor.minimap.enabled": false
- "breadcrumbs.enabled": false
- "editor.fontSize": 16
- "terminal.integrated.fontSize": 16
- Color theme: Dark+ or GitHub Dark (high contrast for recording)
- Hide status bar items you don't need
- Close all open tabs
- Collapse sidebar sections you won't use
```

### Audio Setup
- **Microphone**: USB condenser mic (Blue Yeti, AT2020, etc.) or headset
- **Position**: 6-8 inches from mouth, slightly off-axis to reduce plosives
- **Room**: Quiet room, close doors/windows, turn off fans/AC if possible
- **Gain**: Set so peaks hit -12dB to -6dB (leaves headroom)
- **Pop filter**: Use one if available
- **Test**: Record 10 seconds of silence, then 10 seconds of talking. Check for background hum.

### Environment
- [ ] Close Slack, Teams, email, all notifications
- [ ] macOS: Do Not Disturb ON
- [ ] Windows: Focus Assist ON
- [ ] Close browser tabs (no surprise notification sounds)
- [ ] Second monitor: Camtasia controls + script (don't record this screen)

---

## Branded Intro/Outro Design

### Intro Template (0:00-0:15)
```
Frame 1 (0:00-0:05): Logo animation
  - Your brand logo or "Advanced Copilot" series logo
  - Subtle background animation (gradient shift or particles)
  - Sound: Short branded jingle or whoosh (2-3 seconds)

Frame 2 (0:05-0:15): Title card
  - Video title in large text (e.g., "Building a Custom Agent")
  - Series badge: "Advanced Copilot Series"
  - Episode number: "A1"
  - Subtle lower-third with your name/handle
```

### Creating the Intro in Camtasia
1. **File > New Project** with 1920x1080 canvas
2. **Add media**: Import your logo (PNG with transparency, 500x500+)
3. **Annotations > Shapes**: Add a full-screen colored rectangle as background
   - Use dark gradient: #0D1117 to #161B22 (GitHub dark colors)
4. **Animations**: Apply "Fade In" to logo, then "Scale Up" (0.8x to 1.0x over 1s)
5. **Text**: Add title text
   - Font: Inter, SF Pro, or Segoe UI (clean sans-serif)
   - Size: 72pt for title, 32pt for subtitle
   - Color: White (#FFFFFF) for title, accent color for subtitle
6. **Audio**: Import a 3-second intro sound (royalty-free)
7. **Save as Template**: File > Save Template for reuse

### Color Palette (Consistent Across All Videos)
```
Primary Background:  #0D1117 (GitHub dark)
Secondary BG:        #161B22
Accent Blue:         #58A6FF (GitHub blue)
Accent Green:        #3FB950 (success)
Accent Orange:       #D29922 (warning)
Text Primary:        #FFFFFF
Text Secondary:      #8B949E
```

### Outro Template (last 10-15 seconds)
```
Frame 1: Recap card
  - "What we built: [summary]"
  - "Try it: git checkout video/[branch]"

Frame 2: Next video teaser
  - "Next: [next video title]"
  - Subscribe/follow CTA

Frame 3: End card
  - Logo + links
  - GitHub repo URL
```

---

## Recording Workflow Per Video

### Step 1: Pre-Stage (15 min)
1. Read the full script once
2. Check out the correct demo branch
3. Run the app, verify it works
4. Arrange VS Code exactly as the script describes
5. Open the files you'll need in tabs (in order)
6. Do a 30-second test recording

### Step 2: Record Takes (30-60 min per video)
- Record each take separately (see script's "Recording Task Order")
- **Intro take**: Record once, reuse across session
- **Demo takes**: Record each section as its own clip
- **Narration**: Record voice-over live OR as separate audio track
- **Tip**: If you flub a line, pause 3 seconds, then redo from the last sentence. Cut in post.
- **Tip**: Move your mouse slowly and deliberately. Camtasia's cursor smoothing helps but slow movement looks more professional.

### Step 3: Assemble in Camtasia (30-45 min per video)
1. Create new project from template
2. Import all takes to media bin
3. Drag intro template to track 1
4. Arrange takes in order on track 2
5. Add transitions between takes (0.5s crossfade)
6. Apply effects (see below)
7. Add outro template
8. Review full video
9. Export

---

## Camtasia Effects & Polish

### Zoom & Pan (Critical for Code Videos)
- **When to zoom**: Whenever you're working in a specific part of the screen
- **How**: Animations > Zoom-n-Pan
- **Scale**: Zoom to 150-200% on the active area
- **Duration**: 0.5s ease-in, hold, 0.5s ease-out
- **Rule**: Never stay fully zoomed out for more than 10 seconds. Viewers can't read small code.

### Cursor Effects
- **Cursor Smoothing**: Effects > Cursor Effects > Cursor Smoothing (ALWAYS enable)
- **Cursor Highlight**: Yellow circle highlight on clicks (subtle, 60% opacity)
- **Left Click Effect**: Subtle ripple on left clicks
- **Hide cursor**: During narration-only sections where cursor isn't needed

### Callout Annotations
- Use for keyboard shortcuts: Show `Shift+Tab` as a styled annotation
- Use for file names: Highlight the file being discussed
- Use for menu items: Arrow pointing to what to click
- Style: Rounded rectangle, semi-transparent dark background, white text
- Font: Same as your title font (Inter/SF Pro)

### Lower Thirds
- Show at section transitions
- Position: Bottom-left, 20% height
- Content: Section name + timing
- Style: Semi-transparent bar matching your color palette
- Duration: 3-4 seconds, fade in/out

### Transitions
- **Between takes**: 0.5s crossfade (simple, professional)
- **Between sections**: 1s fade to black, then fade in (marks a shift)
- **AVOID**: Wipes, slides, spins, 3D effects (look amateur)

### Background Music
- Use royalty-free ambient/lo-fi tracks
- Volume: 10-15% (barely audible, just fills silence)
- Duck under narration: Use Camtasia's audio ducking feature
- Sources: Epidemic Sound, Artlist, YouTube Audio Library (free)
- Same track for all videos in a series (consistency)

---

## Audio Post-Processing in Camtasia

### Noise Removal
1. Select audio track
2. Audio Effects > Noise Removal
3. Sensitivity: Start at 15-20, adjust as needed
4. Preview before applying

### Volume Leveling
1. Select all audio clips
2. Audio Effects > Volume Leveling
3. Target: -14 LUFS (standard for web video)
4. This ensures consistent volume across all videos

### If Using Audiate (Camtasia 2026)
- Import audio into Audiate for text-based editing
- Remove filler words ("um", "uh") automatically
- Tighten pauses (remove silence > 1.5s)
- Export cleaned audio back to Camtasia timeline

---

## Exporting

### Export Settings
```
Format:       MP4 (H.264)
Resolution:   1920x1080
Frame Rate:   60fps (or 30fps if file size is a concern)
Quality:      75-85% (good balance of quality/size)
Audio:        AAC, 192kbps, 48kHz
```

### File Naming Convention
```
[SERIES]-[ID]-[slug]-[version].mp4

Examples:
  A-A1-custom-agent-from-scratch-v1.mp4
  F-F2-fleet-parallel-orchestration-v1.mp4
  MICRO-03-switching-between-agents-v1.mp4
```

---

## Quality Checklist (Run for Every Video)

### Visual
- [ ] Text is readable at 1080p on a laptop screen
- [ ] No personal info visible (emails, tokens, API keys)
- [ ] Zoom effects on all code sections
- [ ] Cursor smoothing enabled
- [ ] Consistent color theme throughout
- [ ] Branded intro/outro present

### Audio
- [ ] No background hum or noise
- [ ] Volume consistent throughout
- [ ] No long silences (> 2 seconds)
- [ ] Narration is clear and easy to follow
- [ ] Background music doesn't overpower voice

### Content
- [ ] Demo actually works (no errors that aren't part of the demo)
- [ ] All key points from the script are covered
- [ ] Video stays within time limit (3-5 min full, ~1 min micro)
- [ ] Call to action at the end (try it yourself + branch name)

### Branding
- [ ] Intro matches template
- [ ] Outro matches template
- [ ] Lower thirds present at section transitions
- [ ] Consistent with other videos in the series

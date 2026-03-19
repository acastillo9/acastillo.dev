---
title: "Claude Code Skills at Scale: Lessons from Anthropic's Own Team"
excerpt: "Anthropic runs hundreds of Claude Code Skills internally. Here's what they learned — 9 skill types, what makes them actually work, and how to build yours."
date: 2026-03-19
readTime: "9 min read"
tags: ["Claude Code", "AI Agents", "Developer Tools", "Anthropic", "Prompt Engineering"]
locale: en
---

# Claude Code Skills at Scale: Lessons from Anthropic's Own Team

If you've been sleeping on Claude Code Skills, Thariq Shihipar (Claude Code team, Anthropic) just made the wake-up call hard to ignore. In a detailed thread, he shared what Anthropic learned building and using **hundreds of Skills internally** — what types exist, what makes them work, and where most developers go wrong.

This isn't theory. This is production experience from the team that built the tool.

Here's my synthesis, with my own take as someone who's been building Skills for a while.

---

## First: What Even Is a Skill?

If you think a Skill is just a markdown file with a prompt, you're leaving 80% of the power on the table.

A Skill is a **folder**. It can contain:
- A `SKILL.md` — the core instructions for Claude
- Scripts Claude can run directly
- Reference docs, templates, config files
- Persistent data stores (JSON logs, cached state)

The model reads what it needs, when it needs it. You don't have to dump everything upfront — Claude will explore the folder progressively as the task unfolds. That's the key mental shift.

---

## The 9 Types of Skills (and When to Use Each)

Thariq's breakdown maps the full solution space. Most developers build one or two types and stop there. Here's the complete picture:

### 1. Library & API Reference
Teach Claude how to use a specific library correctly — including the sharp edges.

**Examples:** `billing-lib`, `internal-platform-cli`, `frontend-design`

The `frontend-design` skill (277k+ installs) is the poster child here. It was built by iterating with real customers on improving Claude's design taste — steering it *away* from its defaults (Inter font, purple gradients, generic layouts). The lesson: don't explain what the library *does*, explain what Claude would *get wrong without you*.

### 2. Product Verification
Let Claude test your product end-to-end using Playwright, tmux, or custom scripts.

**Examples:** `signup-flow-driver`, `checkout-verifier`, `tmux-cli-driver`

This is underrated. Instead of asking "does this work?", Claude can actually click through the flow, observe output, and report back. Combine with a code change skill and you get a tight dev/verify loop.

### 3. Data Retrieval & Analysis
Connect Claude to your monitoring systems, databases, or dashboards with real credentials and queries.

**Examples:** `funnel-query`, `cohort-compare`, `grafana`

Put the connection logic and query templates in the skill. Claude fills in the variables, runs the query, interprets the results. This turns "how's the funnel this week?" into a one-liner.

### 4. Business Process & Team Automation
Encode repetitive workflows into a single command.

**Examples:** `standup-post`, `create-ticket`, `weekly-recap`

This is where Skills start feeling like superpowers. The knowledge that used to live in Notion docs or tribal memory becomes executable. Your team's processes become composable.

### 5. Code Scaffolding & Templates
Generate boilerplate that follows *your* patterns, not generic ones.

**Examples:** `new-workflow`, `new-migration`, `create-app`

Instead of Claude hallucinating what your migration pattern looks like, give it actual templates. It fills in the blanks, follows your conventions, respects your folder structure.

### 6. Code Quality & Review
Enforce standards, assist reviews, catch common patterns your team has learned the hard way.

**Examples:** `adversarial-review`, `code-style`, `testing-practices`

The "adversarial-review" concept is interesting — you're asking Claude to actively poke holes in the code, not just rubber-stamp it. This is a fundamentally different prompt posture, and it works better when baked into a skill than typed ad hoc.

### 7. CI/CD & Deployment
Handle the mechanics of pushing code and deploying.

**Examples:** `babysit-pr`, `deploy-service`, `cherry-pick-prod`

`babysit-pr` is my favorite name in this list. It captures exactly what it does: monitor a PR, respond to review comments, re-run flaky checks. These skills need safeguards (more on that below).

### 8. Operations Runbooks
Symptom → investigation → structured report.

**Examples:** `service-debugging`, `oncall-runner`, `log-correlator`

This is where Skills genuinely change how teams work. Instead of a human following a runbook step by step at 2am, the skill does the data collection and correlation. You still make the decisions — but Claude does the legwork.

### 9. Infrastructure Operations
Routine maintenance with built-in safety rails.

**Examples:** `resource-orphans`, `dependency-management`, `cost-investigation`

Critical: these need guardrails. Which leads to...

---

## What Actually Makes Skills Work

### Cut the fluff — ruthlessly
Claude already knows a lot. The value of your skill is in the delta: what does Claude need to know that it *doesn't already know*? Focus there. Long context that repeats common knowledge wastes tokens and dilutes signal.

### Build a "Gotchas" section
Thariq called this the highest-signal content in any skill. Accumulate real failures over time:
```markdown
## Gotchas
- `createPayment()` returns `null` on insufficient funds, not an error. Check explicitly.
- The staging DB resets at midnight UTC. Don't run migrations after 23:30.
- `deploy-service` will fail silently if the service name has uppercase letters.
```

This section pays for itself the first time it prevents a bad prod deploy.

### Use the filesystem for progressive disclosure
Don't stuff everything into `SKILL.md`. Tell Claude what files exist and let it read them at the right time:

```markdown
## References
- `references/api.md` — full API reference with all endpoints
- `references/error-codes.md` — known error codes and resolutions
- `assets/migration-template.sql` — use this for new migrations
```

Claude will pull what it needs. You avoid the token dump and keep the skill focused.

### Don't over-constrain Claude
Skills are reusable. If you write overly specific instructions for one exact use case, the skill breaks the moment context shifts. Give Claude the *what* and the *gotchas* — leave the *how* flexible.

### Use on-demand safety hooks
Two hooks worth building into any destructive skill:

- **`/careful`** — blocks `rm -rf`, `DROP TABLE`, force-push, `kubectl delete`
- **`/freeze`** — locks Claude to only edit files in a specific directory

These activate when called and persist for the session. No excuses for not having them in ops and deployment skills.

### Persistent state across sessions
Use append-only logs or JSON files for state that needs to survive session restarts. Example:

```json
{
  "lastRun": "2026-03-18T09:00:00Z",
  "processedIds": ["abc123", "def456"],
  "errorCount": 2
}
```

Use `${CLAUDE_PLUGIN_DATA}` for stable storage — it survives skill upgrades.

---

## Distribution: How to Share Skills at Scale

**Small team:** Commit to `./.claude/skills` in your repo. Done. Everyone gets it when they pull.

**Larger team:** An internal marketplace (or even a simple Confluence page with install commands) scales better. Members opt in to what they actually need instead of having 50 skills loaded they'll never trigger.

**Open source:** Publish to ClawHub or npm. Keep the `description` field razor-sharp — that's what the model uses to decide *when* to trigger your skill.

---

## Measurement: Find Your Dead Skills

Use a `PreToolUse` hook to log which skills get triggered and when. After a month, look at the data:

- **High usage, high satisfaction:** your best skills. Document the pattern, build more like them.
- **High usage, frequent corrections:** skills that aren't quite right. Invest in improving them.
- **Low usage:** either the description is wrong (Claude never triggers it) or nobody needs it. Kill or fix.

Thariq shared a [GitHub Gist](https://gist.github.com/ThariqS/24defad423d701746e23dc19aace4de5) with example logging code. Worth reading.

---

## Composing Skills

You can reference other skills by name in your `SKILL.md`. If they're installed, Claude will call them. There's no native dependency management yet — but naming conventions work well enough in practice:

```markdown
This skill uses the `tmux` skill for terminal interaction. Ensure it's installed.
```

---

## My Take

What strikes me most about Thariq's breakdown is how much of this maps to *good software engineering* applied to a different medium. Progressive disclosure, separation of concerns, instrumentation, composability — these aren't new ideas. We're just learning to apply them to Skills.

The gap between a Skill that technically works and one that's actually useful is the same gap as between code that runs and code that's maintainable. The `Gotchas` section is your test suite. The filesystem structure is your architecture. The `description` field is your API contract.

If you're building Skills for a team right now, pick one type from Thariq's list that would immediately unblock people — probably Type 4 (process automation) or Type 1 (library reference). Build it small, instrument it, iterate. Don't try to build all nine types at once.

The teams that win with AI tooling aren't the ones with the most Skills. They're the ones with the right Skills, well maintained, that people actually use.

---

## Resources

- [Original thread by Thariq Shihipar (@trq212)](https://x.com/trq212/status/2033949937936085378)
- [Claude Code Skills documentation](https://docs.anthropic.com/claude-code/skills)
- [ClawHub — discover and publish Skills](https://clawhub.com)
- [Example usage logging gist](https://gist.github.com/ThariqS/24defad423d701746e23dc19aace4de5)

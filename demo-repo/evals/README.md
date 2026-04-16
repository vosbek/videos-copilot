# Skill Evaluation Framework

This directory contains evaluation test cases for agent skills. Used with Anthropic's `skill-creator` to measure and optimize skill trigger accuracy.

## Structure

```
evals/
├── api-endpoint-generator/
│   ├── eval-cases.json     # Test cases (positive + negative)
│   └── results/            # HTML reports from eval runs
└── README.md
```

## Running Evals

### With Anthropic skill-creator

```bash
# Run baseline evaluation
skill-creator eval --skill .github/skills/api-endpoint-generator --cases evals/api-endpoint-generator/eval-cases.json

# Run optimization loop
skill-creator optimize --skill .github/skills/api-endpoint-generator --cases evals/api-endpoint-generator/eval-cases.json --iterations 5

# Generate HTML report
skill-creator report --results evals/api-endpoint-generator/results/
```

## Writing Good Test Cases

### Positive Cases (should_trigger: true)
- Direct requests: "Generate a new endpoint for X"
- Indirect requests: "I need an API for managing X"
- Pattern references: "Add a new endpoint following the games pattern"
- Variations: different phrasing for the same intent

### Negative Cases (should_trigger: false)
- Bug fixes: "Fix the bug in X"
- Modifications: "Add pagination to existing X"
- Explanations: "How does X work?"
- Frontend tasks: "Update the UI for X"
- Other tasks: "Write tests for X", "Refactor X"

### Ideal Split
- 20+ total cases
- ~60% positive, ~40% negative
- Cover diverse phrasings and edge cases

## Understanding Results

- **Train accuracy**: How well the description matches the training set
- **Test accuracy**: How well it generalizes to unseen prompts (THIS MATTERS MOST)
- **Variance**: High variance = unreliable triggering (worse than consistent miss)
- **Overfitting**: Train >> Test accuracy means the description is too specific

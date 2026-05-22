# TESTS.md

## Testing Framework

Vitest

Install:

```bash
npm install -D vitest
```

Run tests:

```bash
npx vitest
```

---

# Test Coverage

## audit-engine.test.ts

### Covered Cases

1. ChatGPT optimization for small teams
2. Claude Max downgrade recommendations
3. Cursor Teams over-allocation detection
4. Copilot Business recommendation logic
5. Gemini Ultra optimization suggestions

---

# Goal of Testing

The audit engine performs financial recommendation logic.

Tests focus on:

* pricing correctness
* recommendation consistency
* savings calculations
* deterministic outputs

This ensures audit recommendations remain stable and explainable.

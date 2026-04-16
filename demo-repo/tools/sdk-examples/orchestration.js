/**
 * Sub-Agent Orchestration via Copilot SDK
 *
 * Demonstrates: coordinator pattern with programmatic control flow.
 * Used in video G6 - Copilot SDK.
 */

const { CopilotSDK } = require("@github/copilot-sdk");

async function main() {
  const sdk = new CopilotSDK({ auth: "copilot" });
  const session = await sdk.createSession();

  // Define specialized agents
  const implementer = session.createAgent({
    name: "implementer",
    systemPrompt:
      "You implement Flask features following existing patterns. " +
      "Always run tests after making changes.",
    tools: ["readFile", "editFile", "createFile", "search", "runTerminal"],
  });

  const tester = session.createAgent({
    name: "tester",
    systemPrompt:
      "You write and run pytest tests. Focus on edge cases and error handling.",
    tools: ["readFile", "createFile", "editFile", "runTerminal"],
  });

  const reviewer = session.createAgent({
    name: "reviewer",
    systemPrompt:
      "You review code for quality, patterns, and security. Read-only.",
    tools: ["readFile", "search", "grep"],
  });

  // Orchestration with programmatic control
  const task = "Add a /health endpoint that returns service status and DB connectivity";

  console.log("Step 1: Implementing...");
  const implResult = await implementer.send(task);
  console.log(implResult.text);

  console.log("\nStep 2: Writing tests...");
  const testResult = await tester.send(
    `Write comprehensive tests for: ${implResult.summary}`
  );
  console.log(testResult.text);

  // Programmatic logic: retry on test failure
  if (testResult.text.includes("FAILED")) {
    console.log("\nTests failed. Asking implementer to fix...");
    const fixResult = await implementer.send(
      `Fix the failing tests: ${testResult.text}`
    );
    console.log(fixResult.text);
  }

  console.log("\nStep 3: Reviewing...");
  const reviewResult = await reviewer.send(
    "Review all recent changes for code quality and security."
  );
  console.log(reviewResult.text);

  // Programmatic escalation: large diffs need extra review
  const diffLines = implResult.toolCalls
    .filter((t) => t.name === "editFile")
    .reduce((sum, t) => sum + (t.result?.linesChanged || 0), 0);

  if (diffLines > 100) {
    console.log("\nLarge change detected. Requesting security review...");
    const securityResult = await reviewer.send(
      "Perform a security-focused review of all changes. Check for OWASP Top 10."
    );
    console.log(securityResult.text);
  }

  console.log("\nOrchestration complete.");
  await session.close();
}

main().catch(console.error);

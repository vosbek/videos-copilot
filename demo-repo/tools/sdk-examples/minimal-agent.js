/**
 * Minimal Copilot SDK Agent
 *
 * Demonstrates: create a session, define an agent, send a message, stream response.
 * Used in video G6 - Copilot SDK.
 */

const { CopilotSDK } = require("@github/copilot-sdk");

async function main() {
  // Create a session using your Copilot subscription
  const sdk = new CopilotSDK({ auth: "copilot" });
  const session = await sdk.createSession();

  // Define an agent with a system prompt and tool whitelist
  const agent = session.createAgent({
    name: "code-helper",
    systemPrompt:
      "You are a helpful coding assistant for the Tailspin Toys project. " +
      "You help with Flask backend and Astro/Svelte frontend development.",
    tools: ["readFile", "editFile", "search", "runTerminal"],
  });

  // Send a message and stream the response
  const response = await agent.send(
    "List all API endpoints in the project and describe what each one does."
  );

  for await (const chunk of response.stream()) {
    process.stdout.write(chunk.text || "");
  }

  console.log("\n\nDone.");
  await session.close();
}

main().catch(console.error);

# playwright-training

# 🧪 Playwright Testing Monorepo (with BDD, POM, and JavaScript Concepts)

Welcome to the **Playwright Automation Test Suite Monorepo**! This project is structured to demonstrate real-world automation frameworks using Playwright, Cucumber (BDD), Page Object Model (POM), Fixtures, and core JavaScript testing concepts — **all in one repo**.

> 🔍 This is not just a working project, it's also a **learning resource**.

---

## 📁 Project Structure Overview

```bash
.
├── Basic-E2E-Tests          # Basic Playwright End-to-End Tests
├── BDD-Cucumber             # BDD Style Tests using Cucumber with Playwright
├── Fixtures                 # Playwright fixtures to manage test setup/teardown
├── JavaScript-Concepts     # Core JS Concepts related to Testing
├── Playwright-BDD          # Playwright tests with BDD using playwright runner
├── playwright-config       # Custom Playwright configuration setups
├── POM-(Page-Object-Model) # POM design pattern implementation
├── POM-Parabank            # Parabank application test suite using POM 
├── Sample                  # Sample tests for reference/debug
├── node_modules            # (Ignored in Git) Dependencies folder
├── test-results            # Test reports folder (auto-generated)
├── cucumber.json           # Cucumber report file
├── .gitignore              # Ignore unnecessary files like node_modules
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Lock file for exact versions
└── README.md               # You are here!


📚 Folder-wise Explanation (with Concepts)
🔹 Basic-E2E-Tests
✅ Contains basic Playwright tests

🧠 Concepts: page.goto, locator, click, assertions


🔹 BDD-Cucumber
🧪 Uses Cucumber.js with Gherkin syntax (.feature files).

🔄 Connects .feature steps to JavaScript step definitions.

📘 Concepts: Behavior Driven Development (BDD), Gherkin syntax.

🔹 Fixtures
🔧 Explains how to use Playwright Fixtures for test setup/teardown.

Useful for pre-login setup, test hooks.

🔹 JavaScript-Concepts
✨ Contains core JS programs that are useful for test automation.

Examples: Promises, Async/Await, Callback functions, etc.

📘 Useful to understand async flow in Playwright/Cucumber.

🔹 Playwright-BDD
Combines Playwright and Cucumber without heavy framework overhead.

📘 Concepts: Step Definitions, Hooks (Before, After), Tags.

🔹 playwright-config
Contains custom configurations (like multiple browser setups).

Great for customizing test runs and using playwright.config.ts/js.

🔹 POM-(Page-Object-Model)
Implements POM Design Pattern for test reusability.

Each page has its own class file, making tests cleaner and maintainable.

📘 Concepts: Abstraction, DRY (Don’t Repeat Yourself), Encapsulation.

🔹 POM-Parabank
Real-world application: Testing Parabank

Uses: POM + Reusable Steps.

📘 Great for understanding how to structure real project frameworks.

🔹 Sample
Playground for experiments or test cases not yet structured.


🚀 Getting Started
1. Clone the Repository

git clone https://gitlab.com/your-username/your-repo.git
cd your-repo

2. Install Dependencies
npm install

3. Run Example Tests

# Run Playwright tests
npx playwright test

# Run Cucumber BDD tests
npm run test

# Run specific project folder (e.g., Basic-E2E-Tests)
cd Basic-E2E-Tests
npx playwright test

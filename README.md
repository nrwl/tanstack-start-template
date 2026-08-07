# Nx TanStack Start Template

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A production-ready Nx monorepo for full-stack React apps powered by TanStack Start - type-safe file-based routing, streaming SSR, and server functions out of the box.

<!-- BEGIN: nx-cloud -->

🚀 If you haven't connected to Nx Cloud yet, [complete your setup here](https://cloud.nx.app/get-started). Get faster builds with remote caching, distributed task execution, and self-healing CI. [See how your workspace can benefit](#nx-cloud).

<!-- END: nx-cloud -->

## Quick Start

Clone this template using `create-nx-workspace`:

```bash
npx create-nx-workspace@latest my-workspace --template nrwl/tanstack-start-template
cd my-workspace
npm install
```

Then start developing:

```bash
# Start the TanStack Start dev server
npx nx run @tanstack-start-template/web:dev

# Build all projects
npx nx run-many -t build

# Explore the project graph
npx nx graph

# Run only affected projects (great for CI)
npx nx affected -t build
```

---

## What's Inside

```
tanstack-start-template/
- apps/
  - web/                           TanStack Start full-stack React app
    - src/
      - routes/__root.tsx          Root layout (HTML shell + Tailwind)
      - routes/index.tsx           Home page
      - routes/about.tsx           About page
      - components/                Header, Footer, ThemeToggle
      - styles.css                 Tailwind v4 entry + design tokens
      - router.tsx                 TanStack Router setup + getRouter()
      - client.tsx                 Browser entry point
      - ssr.tsx                    Server entry point (streaming SSR)
    - vite.config.mts              Vite + TanStack Start plugin config
- packages/
  - ui/                            Shared React UI component library
    - src/
      - button.tsx                 Button component
      - card.tsx                   Card component
      - index.ts                   Public API barrel
- nx.json                          Nx configuration
- package.json                     Npm workspaces root
```

---

## Featured Nx Capabilities

### Smart Caching

Nx caches task outputs locally. Unchanged projects are never rebuilt:

```bash
npx nx run-many -t build   # first run: builds everything
npx nx run-many -t build   # second run: instant - all cached
```

### Affected Commands

Run only what changed since your last commit:

```bash
npx nx affected -t build,test
```

### Module Boundaries

Projects are tagged with `scope:` and `type:` tags. Add boundary rules in `nx.json` to enforce that app code cannot import from other apps, and feature libs can only be used by apps:

```json
{
  "generators": {
    "@nx/enforce-module-boundaries": {
      "depConstraints": [
        {
          "sourceTag": "type:app",
          "onlyDependOnLibsWithTags": ["type:ui", "scope:shared"]
        }
      ]
    }
  }
}
```

### Project Graph

Visualize the full dependency graph:

```bash
npx nx graph
```

### TanStack Start + Vite Plugin

The `@tanstack/react-start` Vite plugin wires up:

- File-based routing via TanStack Router (auto-generates `routeTree.gen.ts`)
- Streaming SSR with server-side rendering
- Type-safe server functions (RPC)
- Hot module replacement in dev

---

## Nx Cloud

Nx Cloud supercharges your CI pipeline with three key features:

- **Remote Cache** - Build artifacts are stored in the cloud and shared across your team and CI runners. No more rebuilding what hasn't changed.
- **Distributed Task Execution (DTE)** - Tasks are automatically distributed across multiple CI agents in parallel, reducing wall-clock build time dramatically.
- **Flaky Task Detection** - Nx Cloud identifies and automatically re-runs flaky tests so intermittent failures don't block your team.

Learn more: [https://nx.dev/nx-cloud](https://nx.dev/nx-cloud)

---

## Tech Stack

| Layer           | Technology                   |
| --------------- | ---------------------------- |
| Build system    | Nx 23                        |
| Framework       | TanStack Start 1.x           |
| Router          | TanStack Router (file-based) |
| Bundler         | Vite 8 + Rolldown            |
| Language        | TypeScript 6.0 (strict)      |
| Runtime         | Node.js (SSR)                |
| Package manager | npm workspaces               |

---

## Adding More Apps and Libs

```bash
# Scaffold a new library with Nx
npx nx g @nx/js:library my-lib --directory=packages/my-lib

# Add the new lib to package.json workspaces (already covered by "packages/*")
# then import it in your app:
#   import { something } from '@tanstack-start-template/my-lib'
```

---

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/docs/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## 🔗 Learn More

- [Nx Documentation](https://nx.dev/docs)
- [Crafting Your Workspace Tutorial](https://nx.dev/docs/getting-started/tutorials/crafting-your-workspace)
- [Module Boundaries](https://nx.dev/docs/features/enforce-module-boundaries)
- [TanStack Start Documentation](https://tanstack.com/start/latest)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [Nx Cloud](https://nx.dev/nx-cloud)

## 💬 Community

Join the Nx community:

- [Discord](https://go.nx.dev/community)
- [X (Twitter)](https://twitter.com/nxdevtools)
- [LinkedIn](https://www.linkedin.com/company/nrwl)
- [YouTube](https://www.youtube.com/@nxdevtools)
- [Blog](https://nx.dev/blog)

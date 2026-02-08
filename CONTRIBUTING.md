# Contributing Guide

## Branching Strategy (Git Flow)

We use a simplified **GitHub Flow** strategy.

### Branches

- **`main`**: Production code. Deploys automatically to `devtalk.opsdock.work`.
- **`feat/feature-name`**: For new features.
- **`fix/bug-name`**: For bug fixes.

### Workflow

1.  **Create Branch**:
    ```bash
    git checkout -b feat/my-new-feature
    ```
2.  **Commit Changes**:
    ```bash
    git commit -m "feat: add amazing feature"
    ```
3.  **Push & PR**:
    - Push to GitHub.
    - Open a Pull Request (PR) to `main`.
    - **Jenkins Pipeline** will run Tests & Build automatically.
4.  **Merge**:
    - Once checks pass and PR is approved, merge to `main`.
    - **Jenkins Pipeline** will deploy to Production.

### Automation

- **On PR**: Runs `npm ci`, Lint, and Docker Build (Verification).
- **On Merge (`main`)**: Runs all above + Docker Deploy.

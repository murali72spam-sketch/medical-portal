# Clinical Portal GitHub, Vercel, and Codex Workflow

## 1. Purpose

This document defines the standard workflow for Clinical Portal 2026 development, Codex-assisted implementation, GitHub review, Vercel deployment, production verification, and branch cleanup.

Use this workflow for content batches, documentation updates, technical fixes, and production verification tasks. It is intended to keep the repository clean, protect medical content, avoid accidental generated-file commits, and make sure production is checked before feature branches are deleted.

## 2. Local repository paths

Clinical Portal 2026 may be available in more than one local location:

- Home: `C:\Users\gmura\GitHub Projects\medical-portal`
- Workplace: `D:\Dr Murali DONOT DELETE Please\GitHub Projects\medical-portal`

Before running commands, confirm which local copy is being used.

## 3. Start every task from clean main

Start each new task from an updated, clean `main` branch unless the task explicitly says to work from an existing feature branch.

```powershell
git checkout main
git pull origin main
git status
```

`git status` should show a clean working tree before creating a new branch.

## 4. Generated index rule

The build can regenerate `data/conditions-index.json`.

If only `data/conditions-index.json` is modified after build or testing, and no source HTML or metadata file intentionally changed, restore the generated index before committing:

```powershell
git checkout -- data/conditions-index.json
```

Do not commit a generated index-only change unless the task specifically requires it or source changes need the refreshed index.

## 5. Feature branch rule

Create a feature branch for each batch or focused task:

```powershell
git checkout -b batchXX-short-description
```

Use a clear branch name that describes the batch or technical change. For documentation-only work, a `docs/short-description` branch is also acceptable when requested.

## 6. Codex implementation workflow

When using Codex:

1. Confirm the current branch and working tree state.
2. Read the relevant existing files before editing.
3. Keep edits limited to the requested scope.
4. Do not modify medical content unless the task explicitly asks for it.
5. Do not modify `html-conditions` files for documentation-only tasks.
6. Do not modify `package.json`, `script.js`, `style.css`, or tests unless the task explicitly requires it.
7. Avoid adding generated folders or test output.
8. Run the required checks before reporting completion.
9. Report exactly what changed and whether the branch is safe to commit.

## 7. Manual pre-commit checks

Before committing a batch or technical change, run:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
git status
```

If the task is documentation-only, run only the checks requested for that task. Always run `git status`.

## 8. Files never to stage

Never stage or commit these generated or dependency folders:

```text
node_modules/
playwright-report/
test-results/
```

If any of these appear in `git status`, leave them unstaged and remove them only when it is safe and intentional.

## 9. Commit and push workflow

Review the final diff before staging:

```powershell
git status
git diff
```

Stage only intended files:

```powershell
git add path\to\intended-file
```

Commit with a clear message:

```powershell
git commit -m "Add Batch XX parent guides"
```

Push the branch:

```powershell
git push -u origin branch-name
```

For documentation-only work, use a documentation-focused commit message, for example:

```powershell
git commit -m "Document Clinical Portal workflow"
```

## 10. Pull request workflow

Open a pull request from the feature branch into `main`.

The pull request should include:

- Summary of files changed.
- Confirmation that medical content was or was not modified.
- Build result.
- Validator errors and warnings.
- QA result.
- Any known manual review needs.

For parent-guide batches, mention that draft clinical content requires clinician review before distribution.

## 11. Merge rule

Merge only after checks pass.

Do not merge if:

- Required build or QA checks fail.
- The validator reports unexpected errors.
- Unrelated files are included.
- Generated folders are staged.
- Medical content changed outside the requested scope.

## 12. Production verification rule

Production URL:

```text
https://medical-portal-brown.vercel.app
```

After merge and Vercel deployment, verify production:

- HTTP `200`.
- No redirect to `vercel.com/login`.
- `/data/conditions-index.json` is reachable.
- Expected resource count is present.
- New batch pages are present in the production index.
- Page URLs return HTTP `200`.
- No `.png.png` references.
- For draft pages, disclaimer, references, last reviewed, `status=draft`, and `medical_review_status=pending-clinician-review` are present.

Report production verification results before branch cleanup.

## 13. Branch deletion rule

Do not delete the feature branch until production verification passes.

After production verification passes, it is safe to delete the feature branch locally and remotely if it is no longer needed.

## 14. Safe stopping state

At the end of a completed workflow, the repository should be back on `main` and clean:

```text
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

If the work is intentionally left on a feature branch, report the branch name and the remaining uncommitted files clearly.

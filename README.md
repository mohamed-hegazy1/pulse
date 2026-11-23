# Pulse Analytics

An interactive React analytics learning dashboard. **All 270 records are deterministic synthetic data, not real revenue, customers, sales or the portfolio owner's results.** Fictional USD reporting values cover January 1 to March 31, 2026 across three categories and three channels. No API, sign-in, tracking, personal data or backend.

## What works

- Date, category, channel and text filters recalculate all metrics, charts, table and export
- Integer-cent revenue and cost; derived profit, weighted margin and average order value
- Monthly revenue/cost bars, revenue-share ring and equivalent accessible chart summaries
- Sortable table with 12-row pagination and a separate data-explorer view
- Filtered CSV download with an explicit synthetic-data notice and integer-cent columns
- Empty selections, invalid date range warning, reset and metric-methodology notes
- Responsive layouts at 320, 390 and 1280 pixels

## Run

Use Node.js 22.12+ or a supported newer release.

```sh
npm ci
npm run dev
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Open `/app.html` for source development. The root `index.html` is a separate self-contained production entry. A source build produces `dist/app.html` and assets; rename that HTML to `dist/index.html` and deploy the complete dist folder. Editing source alone does not update the committed prebuilt site. Set CHROME_PATH to use an installed Chrome for tests if desired.

## Method and limitations

One row is a category-day, not an individual sale. Three categories times 90 days gives 270 rows. The generator uses fixed formulas, no randomness or real source claims. Synthetic patterns cannot justify real business recommendations. Profit is revenue minus sample cost, excluding tax, refunds and overhead. Margin uses totals, not an average of row percentages. CSV stores amounts in cents while the UI displays dollars rounded for readability. Search filters all views, not just the table. No saved preferences or uploaded datasets.

## Code

App.jsx: state, filters, accessible chart summaries, navigation, table and CSV trigger.
model.js: sample generator, selection, metrics, aggregates, sorting, CSV and formatting.
style.css: responsive layout. model.test.js and app.spec.js: unit/browser checks.
EXPLAIN-AR.md: Arabic walkthrough and exercises.

Prepared with AI assistance as a portfolio learning project, not client work, employment or evidence of independent authorship. Review and implement practice changes before interviews. UNLICENSED pending the owner's license choice. Tested core interactions, not a complete accessibility audit.

# Add the AI Setup service page

## What will be built
- Add `/services/ai-setup` as a new indexed service page using the shared header, footer, buttons, cards, accordion, and spacing patterns already used across the site.
- Match the Automation and Apps page with a page-scoped pale cyan theme, white cards, teal/lime/coral accents, compact mobile layouts, and the existing typography.
- Add every supplied section in order: hero, problem statement, four outcomes, four-step process, practical examples, dark safety band, included support, supported tools, FAQ, and closing call to action.
- Use the supplied title, description, wording, anchor behavior, and existing Calendly destination exactly, without prices or em dashes.

## Technical details
- Create a focused `AISetup` page component and register its route in the existing router.
- Reuse the existing accordion and button components and mirror the homepage `YOU DO` / `WE DO` step structure.
- Set title and description on mount, include page-specific canonical/Open Graph metadata and FAQ structured data consistent with indexed service pages, and clean up injected tags when leaving the page.
- Keep the cyan styling scoped to this page so no existing page changes appearance.

## Verification
- Check the page at 390px mobile and 1280px desktop for section order, copy, working links and anchor, readable contrast, and no horizontal scrolling.
- Confirm there are no em dashes or dollar amounts and that the project build completes successfully.

# Automation page cyan theme experiment

## Changes
- Add one page-level theme class to the Automation and Apps page so the experiment can be reverted cleanly.
- Change only its blush hero, photo, examples, ARDENT method, and closing call-to-action bands to pale cyan.
- Scope darker teal text, white eyebrow pills, teal dot grids, teal dashed frames, and underlined dark-teal links to this page.
- Preserve paper sections, the near-black Featured Apps band, white cards, lime buttons, and coral/lime badges.

## Technical details
- Define the cyan and dark-teal values as scoped CSS custom properties under the page theme class.
- Replace the photo overlay's paper tint with a page-specific cyan overlay, avoiding pink or paper seams.
- Check text contrast, card borders, tabs, desktop/mobile band transitions, and horizontal overflow in the live preview.

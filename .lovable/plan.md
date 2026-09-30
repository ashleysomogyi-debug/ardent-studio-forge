# Near-black shared navigation

## Changes
- Convert the shared desktop header to a 64px near-black bar with the supplied wordmark, tagline, link, active underline, border, and booking-button colors.
- Convert the mobile header to 56px and its open menu to near-black, with off-white links, 48px minimum targets, active cyan underline, and the existing lime booking action.
- Use the current route to identify the active link across all public pages.
- Adjust shared page top spacing to the slimmer header while preserving a visible light hero band before Training's black section.

## Technical details
- Define one shared CSS variable for the header background so the color is easy to revert.
- Keep the circular logo asset unchanged and preserve sticky hide-on-scroll behavior.
- Verify desktop and mobile rendering on Home, Training, Automation and Apps, and Contact, including menu interaction and horizontal overflow.

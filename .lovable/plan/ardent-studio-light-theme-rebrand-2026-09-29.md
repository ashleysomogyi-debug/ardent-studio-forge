# Ardent Studio light-theme rebrand

## Goal
Convert every public-facing Ardent page to the supplied light brand system, add the supplied circular logo, and preserve all existing copy and behavior. The homepage hero will use the selected split layout: text on warm paper with the speaking photo in a rounded frame.

## Visual system
- Set the global page background to warm paper `#F5F5F0`, card surfaces to `#FFFFFF`, and borders to `rgba(13,13,13,0.08)`.
- Set primary, muted, and dim text to `#0D0D0D`, `rgba(13,13,13,0.62)`, and `rgba(13,13,13,0.42)`.
- Use accessible teal `#0A7D7B` for links, labels, status details, focus states, and secondary emphasis.
- Reserve lime `#C3F73A` for fills only, always paired with near-black text. Use it for the primary action and no more than one highlighted hero phrase.
- Remove blue, red, legacy gold, bright-teal text, lime text, lime borders, and multi-color accent treatments.
- Standardize typography to Inter 400–700 for headings and body. Keep JetBrains Mono only for small uppercase labels, prices, and stats; remove serif and italic display styling.
- Keep the footer as the one permitted dark section, with warm-paper text and accessible teal links.

## Homepage and shared navigation
- Rebuild the homepage hero as a responsive split composition: existing copy and actions on warm paper, existing speaking photo in a stable rounded frame, collapsing cleanly on mobile.
- Convert the four-word eyebrow to one restrained teal treatment without changing its words.
- Add the supplied logo, unaltered and without effects, at approximately 40px beside the Ardent Studio wordmark in desktop and mobile navigation.
- Change the scrolled header and mobile menu to light surfaces with subtle borders and blur, preserving all links and behavior.
- Restyle homepage sections, cards, process rows, photo bands, badges, status pills, profiles, testimonials, and calls to action using the new tokens while preserving layouts and copy.

## Remaining pages and shared components
- Convert Automation & Apps, Training, Contact, service templates, location pages, blog index/posts, 404, and the Pooches event page to the same light palette.
- Update reusable card, form, pricing, comparison, case-study, testimonial, work, ticker, particle, sphere, cursor, and CTA treatments so legacy colors cannot reappear on any page.
- Restyle the chat window for the light theme and keep its floating bubble at `#0A7D7B` with a high-contrast icon.
- Keep all current page text, URLs, forms, animations, and interactions unchanged.

## Logo and favicon
- Save the attached original image as `public/ardent-logo-circle.png`.
- Generate a compact square favicon from that same image, reference it in the document head, remove the old `.ico` fallback, and update light browser/PWA theme colors where applicable.

## Protected scope
- Do not edit `src/pages/events/WowAttendeeOffer.tsx` or alter its key-based redirect.
- Do not edit `src/App.tsx`.
- Do not edit `public/robots.txt`.
- Do not change page copy.

## Verification
- Scan the site source, excluding the protected WOW page, for forbidden legacy accents, dark page backgrounds, serif/italic display styles, and low-contrast text combinations.
- Verify the uploaded logo and favicon files are valid PNGs at their intended sizes.
- Check representative pages at desktop and mobile widths, including the homepage, Automation & Apps, Training, Contact, blog, service/location templates, Pooches event, and the chat panel.
- Confirm `/wow?k=u2t3zl7q` still renders unchanged and `/wow` still redirects home.
- Confirm the preview build has no errors and interactive links/forms remain intact.

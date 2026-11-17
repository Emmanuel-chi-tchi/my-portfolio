# my-portfolio
Personal portfolio website showcasing my skills, projects and experience.

1. Main instruction to Codex
Build the portfolio website to match the supplied Figma design reference as closely as possible. The reference image is the source of truth.

Do not redesign, reinterpret, modernise, simplify, or replace the design. Do not introduce your own layout, colours, effects, sections, icons, wording, or animations. Reproduce what is shown in the reference. If a detail is difficult to read in the photograph, inspect the original Figma design/assets or the existing project files before making a decision. Do not invent missing content.

The supplied reference shows six desktop page designs:
# Home Page
# About Page
# My Journey
# My Skills
# Project Page
# Contact Page
Treat these as six distinct pages/routes, not as six unrelated designs.

2. Required page and navigation behaviour
Create these six pages separately:
## / — Home / landing page
## /about — About page
## /journey — My Journey page
## /skills — My Skills page
## /projects — Project page
## /contact — Contact page

Use the project's existing framework and routing setup if one already exists. Do not migrate the project to another framework or replace its existing structure without a real technical need.

Home page requirements

The Home page is the main landing page. It must contain the complete Home Page design shown in the reference, including its hero area and the visible content sections below it. Keep the same order, layout, visual hierarchy, cards, imagery, buttons, icons, and footer shown in the Home Page frame.

The landing page must also provide clear navigation to the five individual pages. The navigation links and any relevant call-to-action buttons must work.
Do not make the Home page a substitute for the other five pages. Each of the five pages must also have its own separate route and reproduce its corresponding Figma frame.

Navigation requirements

# Clicking Home opens /.
# Clicking About opens /about.
# Clicking My Journey opens /journey.
# Clicking My Skills opens /skills.
# Clicking Projects opens /projects.
# Clicking Contact opens /contact.

Any button in a page that is intended to navigate to another page must navigate to the correct destination.
Use real links or router navigation, not decorative buttons with no action.
Keep navigation labels, placement, styling, and icons consistent with the reference.
Add working links to the social/profile icons using the actual URLs already supplied in the project. If a URL is not available, do not invent one; leave a clearly identified configuration value and report it.

3. Visual design — preserve the reference

Reproduce the visual language visible across all six frames:
Dark, near-black/navy background.
Blue and cyan lighting/glow effects.
Purple/magenta accent details and gradients where shown.
White and light-coloured text with the same hierarchy as the reference.
Thin outlined cards and panels.
Rounded corners and borders matching the reference.
Glowing outlines, gradients, shadows, and background effects only where they appear in the design.
The same overall spacing, alignment, proportions, section order, and visual balance.
The same image placement, image sizes, crops, and text-to-image relationships.
Do not replace the dark theme with a light theme. Do not change the accent colours to orange, green, red, or another palette. Do not add unrelated decorative effects.
Typography
Match the font style, weight, size hierarchy, line spacing, and alignment in the Figma reference.
Use the original font files if they are included in the project or Figma exports.
If the exact font is unavailable, choose the closest practical match and report that substitution.
Do not arbitrarily change heading wording or capitalization.
Images and visual assets
Reuse the exact images, logos, illustrations, and icons supplied with the project/Figma export.
Preserve their intended placement and aspect ratios.
Use the correct image crop and object positioning.
Do not replace the people/photos with stock images, generated images, emojis, or unrelated pictures.
Do not distort images.
If an asset shown in the reference cannot be found, identify the missing asset instead of silently substituting another one.
4. Page-by-page implementation
Use the corresponding frame in the supplied reference as the visual target for each page.

A. Home Page (/)

Reproduce the complete Home Page frame:
 The top navigation/header.
 The hero content, including its text, visual/image, and buttons.
 The additional content sections visible below the hero.
 The skill/progress-style elements and outlined cards shown in the frame.
 The project previews/cards shown in the frame.
 The lower-page content, call-to-action area, and footer.

The hero must not be the only completed part of the page. Implement every visible section in the Home Page frame.

B. About Page (/about)

Reproduce the About Page frame, including:
Its navigation/header.
The main introduction/hero area and image.
The information/content panels below the introduction.
The outlined cards and highlighted call-to-action area.
The footer and social icons.
Keep the About page's layout and content arrangement distinct from the Home page.

C. My Journey (/journey)

Reproduce the My Journey frame, including:
Its navigation/header.
The introductory area and image.
The journey/timeline or milestone content shown.
The two-column/card arrangement and outlined panels.
The experience section/cards shown lower on the page.
The highlighted lower call-to-action area and footer.
Do not turn this page into the Skills page or use a generic timeline design.

D. My Skills (/skills)

Reproduce the My Skills frame, including:
Its navigation/header.
The introduction and image placement.
The skill groups and progress bars/indicators.
The outlined skill cards and their icons.
The lower call-to-action section and footer.
Keep the number, order, grouping, and visual treatment of the skill items consistent with the design. Do not add skill items that are not in the source 
design.

E. Project Page (/projects)

Reproduce the Project Page frame, including:
Its navigation/header.
The introductory heading/content area.
The project-card grid.
The exact card proportions, images, spacing, borders, and text hierarchy.
Any project action buttons/links and icons.
The lower-page content and footer.
Each project card must use its corresponding supplied project image and actual project information. Do not invent project names, descriptions, technologies, or links. If the project data is not yet available, preserve the visual card structure and clearly identify the missing content for the site owner.

F. Contact Page (/contact)

Reproduce the Contact Page frame, including:
Its navigation/header.
The contact heading/introduction.
The contact form and all visible fields.
The form's borders, spacing, labels, icons, and submit button.
The contact/social information shown.
The footer.
The form must be usable:
Inputs must accept text.
Labels must be associated with their inputs.
Required fields must be validated.
The submit button must provide clear success/error feedback.
Do not pretend a message was sent if no backend or form service is configured. Explain what configuration is needed.

5. Icons and buttons

Icons are part of the design and must not be ignored.
Use the same icon where the correct icon asset or icon library is available.
Match icon size, stroke/weight, colour, alignment, and spacing.
Do not replace icons with emoji characters.
Keep each icon beside the same label or action as shown.
Every visible CTA/button must have a defined action.
Use the actual destination for each button when that destination is known.
Do not leave buttons looking clickable if they do nothing.
Do not invent external URLs or social accounts.
Create a small, consistent icon component/system if that helps preserve the same appearance across pages.

6. Shared components

Build reusable components for elements that are repeated across the six pages, such as:
Header/navigation.
Navigation links and active-page state.
Buttons/CTA styles.
Social icons/links.
Repeated card styles.
Footer.
Shared background/glow effects.
Reusable components must still allow each page to match its own frame. Do not force all pages into one identical content layout.

7. Responsive behaviour

The reference is a desktop design. First reproduce the desktop layout faithfully.
Then make the site responsive without changing the design's identity:
On tablets, reduce spacing and adapt columns while preserving the order.
On mobile, stack multi-column content cleanly.
Keep text readable and buttons easy to tap.
Make navigation usable on small screens.
Prevent horizontal overflow.
Preserve the dark background, colour palette, cards, borders, and visual hierarchy.
Do not remove important content simply to make the mobile layout shorter.

8. Technical and code-quality requirements

Inspect the existing repository before editing.
Keep the existing technology stack and conventions.
Reuse existing assets and dependencies where possible.
Do not delete working code or files without a clear reason.
Keep the six pages separate and use clear route/page components.
Keep shared styles and components organised.
Use semantic HTML and accessible form controls.
Ensure navigation works from every page.
Ensure there are no broken image paths, console errors, or dead buttons.
Do not use placeholder links such as href="#" for finished actions.
Do not add unnecessary libraries.
Do not put the entire website into one giant component or one HTML file if the project already supports separate components/pages.

9. Accuracy and no-unrequested-changes rule

The Figma design is the specification. Follow it rather than personal design preferences.
Do not:
Change the colour palette.
Change the page structure or section order.
Remove sections or cards.
Add new sections that are not in the design.
Change the design into a different portfolio template.
Replace the supplied photos or project thumbnails.
Replace the icons with emojis.
Change button labels without checking the source.
invent biography, experience, skill, or project information.
make all six pages copies of the Home page.
create only the hero and claim the site is complete.
If a detail cannot be read from the supplied photograph, inspect the original Figma file, exported assets, or existing project content. If it is still unavailable, keep the closest supported structure and list the uncertainty for the owner. Do not guess.

10. Build and verification checklist

Before saying the work is complete, verify all of the following:
[ ] Home page matches the Home Page frame.
[ ] About page matches the About Page frame.
[ ] My Journey page matches the My Journey frame.
[ ] My Skills page matches the My Skills frame.
[ ] Project page matches the Project Page frame.
[ ] Contact page matches the Contact Page frame.
[ ] The Home page contains all sections visible in its own design.
[ ] All six pages exist as separate routes.
[ ] Every navigation item opens the correct page.
[ ] Every CTA has the correct working action.
[ ] All icons are present and visually appropriate.
[ ] All supplied images/assets load correctly.
[ ] The desktop layout preserves the reference proportions and spacing.
[ ] Tablet and mobile layouts work without overflow.
[ ] Contact form validation and feedback work.
[ ] No dead buttons, broken links, missing assets, or console errors remain.
11. How to work through the implementation
Work in this order:
Inspect the repository, existing app structure, dependencies, and assets.
Identify the current entry point, routing method, global styles, and reusable components.
Map the supplied assets to the six Figma page frames.
Build the shared header, navigation, buttons, icon treatment, background, and footer.

Implement the complete Home page, including every visible section in its frame.
Implement About, My Journey, My Skills, Projects, and Contact as separate pages.
Connect all navigation links and CTA buttons.
Match spacing, typography, colours, borders, glows, image sizes, and card layouts against the reference.
Add responsive behaviour.
Run the project, inspect every route, test every button, and fix errors.
Report what is complete and list only the genuine missing assets, URLs, content, or backend configuration.

12. Final instruction

Do not stop after building the hero section. The task is to implement the entire six-page portfolio shown in the reference, with the Home page acting as the complete landing page and the five other designs available as separate pages through working navigation.
The required result is a faithful implementation of the supplied design — not a redesigned version of it. """ path = Path("/mnt/data/README_CODEX_DESIGN_GUIDE.md") path.write_text(content, encoding="utf-8") print(path)
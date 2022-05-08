# Playbook


## TypeScript

- Coding Etiquette:
  - Seperate Types in a `.types` file eg: if you have `Component.tsx` have all types and interfaces at `Component.types.ts` 
  - Related Types should be referenced, eg: if component uses api response, make sure the type references it too
  - make sure all types and interfaces start with an `I` helps intellisense differenciate between variables and interfaces
  - seperate types and code so it looks clean and if needed, you can easily migrate ts code to js

- Presenting:
  - Make sure the code is always easily referenced
  - use aids such as slides.com to visualise whats going on
  - Have an exercise for attendees to be more involved with the process
  - All config files should have the default values laid out too for easy understanding
  - Its better to have the `tsc` running in watch mode so that we get the errors in terminal and be more realistic with how ts deals with errors
  - use helpers and show what happens without them

- Documentation
  - Maintain a .md file in you folder if needed to explain whats going on
  - cite all sources in the same .md file
  - good to have a summary of what you explained so thats its easier to catchup
  - dont be afraid to add comments if something is extremely vague
  - involve everyone in the documentation process
  - spot doubts, ambigious terms and inaccuracies in all documentations (including this one) so that we can improve the overall quality
  - link notion/slides (if any) used to explain specific concepts.
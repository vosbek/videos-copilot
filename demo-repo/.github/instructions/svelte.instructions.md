---
applyTo: "client/src/**/*.svelte"
---

# Svelte Component Conventions

When writing Svelte components in this project:

- Use Svelte 5 runes-based reactivity: `$state`, `$derived`, `$effect`, `$props`
- Use `client:only="svelte"` directive when embedding in Astro pages
- Use Tailwind CSS utility classes exclusively for styling
- Dark theme: slate palette (`bg-slate-800`, `text-slate-100`)
- Include loading states with the LoadingSkeleton component
- Include error states with the ErrorMessage component
- Handle empty states with the EmptyState component
- Use `fetch()` with the backend API URL for data operations

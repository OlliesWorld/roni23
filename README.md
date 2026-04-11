# Roni's Frontend Developer Portfolio

My personal portfolio site — rebuilt from Gatsby to SvelteKit. Both versions live in this repo intentionally, so you can see how the same site is approached across two different frameworks.

## Repo structure

```
├── gatsby_roni/      # Original build — Gatsby + Sanity CMS
├── sveltekit_roni/   # Current build — SvelteKit, data in TypeScript
└── studio/           # Sanity Studio (used with the Gatsby version)
```

## Why both are here

The Gatsby version was the first build, using Sanity as a CMS backend. The SvelteKit version is the current live site — lighter, no CMS dependency, and a chance to compare how the same ideas translate between frameworks. Keeping both felt more honest than deleting the history.

## Current site — SvelteKit

**Stack:** SvelteKit · TypeScript · TailwindCSS · Motion

```shell
cd sveltekit_roni
npm install
npm run dev
```

## Original site — Gatsby

**Stack:** Gatsby · Sanity · TailwindCSS · Netlify

```shell
cd gatsby_roni
npm install
npm run develop
```

## About Roni

[roni.rocks](https://www.roni.rocks)

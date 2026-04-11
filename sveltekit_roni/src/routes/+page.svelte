<script lang="ts">
  import Social from "$lib/components/Social.svelte";
  import { about } from "$lib/data/about";
  import { caseStudies } from "$lib/data/experience";
  import { onMount } from "svelte";
  import { animate, inView, stagger } from "motion";

  let aboutSection: HTMLElement;
  let workSection: HTMLElement;
  let contactSection: HTMLElement;

  onMount(() => {
    inView(aboutSection, () => {
      animate(aboutSection, { opacity: [0, 1], y: [40, 0] }, { duration: 0.6 });
    });
    const cards = workSection.querySelectorAll("[data-case-study]");
    cards.forEach((card) => {
      inView(card, () => {
        animate(card, { opacity: [0, 1], y: [40, 0] }, { duration: 0.6 });
        const border = card.querySelector("[data-border]");
        if (border) animate(border as Element, { height: ["0%", "100%"] }, { delay: 0.2, duration: 0.8 });
        const badges = card.querySelectorAll("[data-badge]");
        animate(badges, { opacity: [0, 1], y: [6, 0] }, { delay: stagger(0.06), duration: 0.25 });
      });
    });
    inView(contactSection, () => {
      animate(
        contactSection,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.5 },
      );
    });
  });
</script>

<div class="bg-[#05386b] h-full py-8 scroll-smooth">
  <div id="top" class="text-right mr-24 sticky top-0">
    <a
      class="text-white hover:text-purple-700 uppercase text-lg pr-8"
      href="/#about">About</a
    >
    <a class="text-white hover:text-purple-700 uppercase text-lg" href="/#work"
      >Work</a
    >
  </div>

  <Social />

  <!-- Hero -->
  <section class="lg:w-3/4 mt-4 md:mb-24 mx-auto md:flex">
    <h2
      class="z-10 p-8 animate-border rounded-xl bg-white bg-gradient-to-r from-teal-500 via-purple-500 to-regal-green bg-[length:400%_400%] transition hover:shadow-lg focus:outline-none focus:ring text-[#05386b] text-4xl md:w-3/5 lg:w-2/5 my-auto md:ml-24 lg:ml-56"
    >
      {about.subtitle}
    </h2>

    <div
      class="hidden md:block md:order-first lg:order-last lg:-ml-36 lg:w-2/3 md:-ml-12 my-auto"
    >
      <div class="fun overflow-hidden lg:w-3/4 md:-ml-20 lg:m-auto z-0">
        <img
          src="/me1k.webp"
          alt="Roni"
          class="w-full h-full object-cover"
          loading="lazy"
          width="850"
        />
      </div>
    </div>
  </section>

  <!-- About -->
  <section>
    <div
      class="h-full w-full bg-no-repeat lg:bg-50% bg-right bg-fixed md:bg-ollie"
    >
      <div
        bind:this={aboutSection}
        class="text-white md:w-2/3 lg:w-1/2 md:my-48 mx-auto backdrop-blur-xl backdrop-brightness-50 lg:backdrop-filter-none"
        id="about"
        style="opacity: 0"
      >
        <h2 class="text-6xl md:-ml-4 mb-8 font-bold text-regal-green">
          About Me
        </h2>
        <div class="lg:w-3/4">
          <!-- eslint-disable-next-line svelte/no-at-html-tags -->
          {@html about.body}
        </div>
        <div class="mt-8 text-xl">
          <p class="mb-4">Some tech that I have experience with:</p>
          <ul class="grid grid-rows-6 md:grid-rows-4 grid-flow-col gap-4">
            {#each about.techStack as tech}
              <li class="flex">
                <!-- bolt icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mt-1 mr-2 text-regal-green w-4 h-4 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                {tech}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Work / Case Studies -->
  <section
    bind:this={workSection}
    class="md:w-2/3 lg:w-1/2 mx-auto md:my-24"
    id="work"
  >
    <h2 class="text-6xl md:-ml-8 mb-12 font-bold text-regal-green">Work</h2>

    <div class="flex flex-col gap-16">
      {#each caseStudies as study}
        <article
          data-case-study
          class="text-white relative pl-6"
          style="opacity: 0"
        >
          <div data-border class="absolute left-0 top-0 w-0.5 bg-regal-green" style="height: 0"></div>
          <div class="flex flex-wrap gap-4 justify-between items-baseline mb-2">
            <h3 class="text-2xl font-bold text-regal-green">{study.title}</h3>
            <span class="text-gray-400">{study.time}</span>
          </div>
          <p class="text-gray-300 text-sm mb-4">
            {study.role} · {study.company}
          </p>

          {#if study.image}
            <img
              src={study.image}
              alt={study.title}
              class="rounded mb-6 {study.imageSize === 'small' ? 'w-24 h-24 object-contain' : 'w-full max-h-64 object-cover'}"
              loading="lazy"
            />
          {/if}

          <div class="flex flex-col gap-4 mb-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <p class="text-regal-green uppercase tracking-widest mb-1">Problem</p>
                <p class="text-base">{study.problem}</p>
              </div>
              <div>
                <p class="text-regal-green uppercase tracking-widest mb-1">Solution</p>
                <p class="text-base">{study.solution}</p>
              </div>
            </div>
            <div>
              <p class="text-regal-green text-xs uppercase tracking-widest mb-1">Outcome</p>
              <p class="text-base">{study.outcome}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 items-center mt-4">
            {#each study.tags as tag, i}
              <span
                data-badge
                style="opacity: 0; animation-delay: {i * 0.5}s"
                class="badge-shimmer inline-block text-xs border border-gray-500 rounded px-2 py-0.5 text-gray-200"
                >{tag}</span
              >
            {/each}
            {#if study.href}
              <a
                href={study.href}
                target="_blank"
                rel="noreferrer"
                class="ml-auto text-regal-green hover:text-white text-sm border-b border-regal-green"
              >
                View site →
              </a>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </section>

  <!-- Contact -->
  <section
    bind:this={contactSection}
    class="md:w-2/3 lg:w-1/2 mx-auto my-6 md:my-24 text-white"
    style="opacity: 0"
  >
    <h3 class="text-4xl">Get In Touch</h3>
    <p class="text-xl">
      I am currently looking for my next full-time opportunity. Please reach out
      my inbox is always open. Whether you have a question or just want to say
      hi, I'll try my best to get back to you!
    </p>

    <div class="mt-8">
      <a
        href="mailto:roniwork@duck.com"
        class="inline-block rounded-md bg-[#8b8b00] px-10 py-2 text-white hover:bg-yellow-700 transition-colors"
      >
        Send a message
      </a>
    </div>
  </section>
</div>

<style>
  @keyframes shimmer {
    0% {
      background-position: 200% center;
    }
    100% {
      background-position: -200% center;
    }
  }

  :global(.badge-shimmer) {
    background: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.03) 40%,
      rgba(180, 220, 200, 0.18) 50%,
      rgba(255, 255, 255, 0.03) 60%,
      rgba(255, 255, 255, 0.03) 100%
    );
    background-size: 300% 100%;
    animation: shimmer 4s ease-in-out infinite;
  }
</style>

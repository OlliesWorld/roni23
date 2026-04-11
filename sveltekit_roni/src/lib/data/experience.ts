export interface CaseStudy {
	title: string;
	company: string;
	time: string;
	role: string;
	problem: string;   // What was the challenge?
	solution: string;  // What did you build / do?
	outcome: string;   // What was the result?
	href?: string;
	image?: string;    // /images/work/...
	imageSize?: 'full' | 'small'; // 'full' = wide banner (default), 'small' = logo/square
	tags: string[];
}

// TODO: fill in from your Sanity export — 3 case studies
export const caseStudies: CaseStudy[] = [
	{
		title: 'State of the API Report (7th Annual)',
		company: 'Postman',
		time: '2025',
		role: 'Lead Developer',
		problem: 'Annual data-heavy report viewed by thousands. Previous versions had rigid layouts, and cross-browser issues slipped through under deadline pressure. We needed a flexible front-end that wouldn\'t break with last-minute changes.',
		solution: 'I led front-end development with Next.js, Tailwind, and react-spring — building systems that adapt instead of forcing content into fixed layouts. Charts pull live data from Postman\'s own API. I also chose the animation library and guided design conversations.',
		outcome: 'My fourth time shipping this report. On the first one, I was the new team member trying not to break things. This time, I was making the technical calls. The result: a resilient front-end that\'s intuitive, purposeful, and has small moments of motion that bring a smile.',
		href: 'https://www.postman.com/state-of-api/2025/',
		image: '/postma-sota-25.webp',
		tags: ['Next.js', 'TailwindCSS', 'React Spring', 'Postman']
	},
	{
		title: 'Animated Sports Dashboard (WIP)',
		company: 'TODO: Company',
		time: '2025 - Present',
		role: 'Front-end Developer',
		problem: 'ports stats are everywhere, but most dashboards feel static and cluttered. I wanted a clean, animated view of NWSL team statistics that\'s actually enjoyable to check = not just another table of numbers. Plus, ESPN\'s API doesn\'t cover every league I\'d like to include, so I needed a flexible system that can adapt as I add more sports.',
		solution: 'I built an animated dashboard that pulls live NWSL data from the ESPN API and displays key stats - wins, win percentage, goal difference, and team rankings - in a visual, scannable layout. Motion is used purposefully to guide the eye, not just for decoration. The component-based structure means I can add new leagues (MLS, WNBA, etc.) as API access allows, even if each one requires a slightly different data mapping.',
		outcome: 'A living project I\'m constantly improving. Right now it shows the 2026 NWSL season at a glance - who\'s on top, who\'s climbing, and who\'s struggling. It\'s already useful for fans like me who want more than a spreadsheet. Next up: adding more leagues and refining the motion design.',
		href: 'https://animateddash.vercel.app/',
		image: '/animated-dash.webp',
		tags: ['Astro', 'DaisyUI', 'React', 'ESPN API', 'Motion']
	},
	{
		title: 'Membership & Email Automation',
		company: '14ers',
		time: '2026',
		role: 'Integration Developer',
		problem: 'The supporters group for Denver Summit FC needed a way to process membership payments through Square and automatically trigger welcome emails via Brevo. Wix handled the frontend, but no native connector existed to tie Square payment success to Brevo automation.',
		solution: 'I built a custom workflow using Square\'s SDK to handle payment processing. On successful payment, the Wix backend (via a backend file) receives the confirmation, then sends the supporter\'s form data to Brevo\'s API to trigger an automated welcome email sequence. The setup includes an HTML widget for the Square form, frontend page code to manage state, and backend logic to connect everything.',
		outcome: 'New supporters pay through Square, and if the payment succeeds, Brevo automatically sends a welcome email and adds them to the correct list for future updates. No manual data entry, no missed follow-ups. The group can focus on building community instead of wrestling with disconnected tools.',
		href: 'https://www.14erssupporters.com/',
		image: '/14er-logo.svg',
		imageSize: 'small',
		tags: ['Wix (frontend + backend)', 'Square SDK/API', 'Brevo API']
	}
];

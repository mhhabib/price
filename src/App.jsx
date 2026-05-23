import { useMemo, useState } from 'react';
import {
	ArrowRight,
	BrainCircuit,
	Check,
	ShieldCheck,
	Sparkles,
	Zap,
} from 'lucide-react';
import { Button } from './components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './components/ui/card';

const plans = [
	{
		name: 'Free',
		description: 'Build and prototype with a generous daily allowance.',
		monthly: 0,
		yearly: 0,
		cta: 'Start free',
		highlight: false,
		features: ['1 workspace', 'Basic model access', 'Community support'],
	},
	{
		name: 'Plus',
		description:
			'For solo builders who want faster throughput and higher limits.',
		monthly: 191,
		yearly: 32,
		cta: 'Choose Plus',
		highlight: true,
		badge: 'Most popular',
		features: [
			'100x higher rate limits',
			'Priority responses 24/7',
			'Early access to all the new tools',
		],
	},
	{
		name: 'Pro',
		description:
			'For teams shipping production workflows and advanced controls.',
		monthly: 421,
		yearly: 100,
		cta: 'Talk to sales',
		highlight: false,
		features: [
			'Dedicated support 24/7',
			'Advanced guardrails security',
			'Admin controls and SSO',
		],
	},
];

const featurePills = [
	{
		icon: Sparkles,
		title: 'Model flexibility',
		text: 'Switch across the latest reasoning and image models.',
	},
	{
		icon: Zap,
		title: 'Fast deployments',
		text: 'Ship prototypes in minutes with reusable prompt templates.',
	},
	{
		icon: ShieldCheck,
		title: 'Enterprise-grade security',
		text: 'Control access, audit activity, and meet compliance needs.',
	},
	{
		icon: BrainCircuit,
		title: 'Built-in reasoning',
		text: 'Improve outputs with structured tool use and safe autonomy.',
	},
];

const comparison = [
	['Daily usage', '5k tokens', '50k tokens', '200k tokens'],
	['Priority support', 'Community', 'Priority', 'Dedicated'],
	['Advanced tools', 'Basic', 'Included', 'Included + admin'],
	['Custom policies', '—', 'Limited', 'Full'],
];

function App() {
	const [billing, setBilling] = useState('monthly');

	const annualSavings = useMemo(() => {
		return Math.round(
			((plans[1].monthly - plans[1].yearly) / plans[1].monthly) * 100,
		);
	}, []);

	return (
		<div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),transparent_25%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.22),transparent_22%),linear-gradient(180deg,#020617_0%,#0f172a_50%,#111827_100%)] text-white">
			<header className="mx-auto flex max-w-6xl items-center justify-between px-6 pb-4 pt-6">
				<div className="flex items-center gap-3">
					<div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-200">
						Prism
					</div>
					<span className="text-sm text-slate-200">Pricing</span>
				</div>

				<nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
					<a href="#plans" className="transition hover:text-white">
						Plans
					</a>
					<a href="#compare" className="transition hover:text-white">
						Compare
					</a>
					<a href="#faq" className="transition hover:text-white">
						FAQ
					</a>
				</nav>

				<Button variant="outline" size="sm">
					Contact sales
				</Button>
			</header>

			<main className="mx-auto max-w-6xl px-6 pb-16 pt-4 sm:pt-8">
				<section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<div>
						<h1 className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm text-sky-100">
							<Sparkles className="h-4 w-4" />
							Trusted by product teams, startups, and design-led crews
						</h1>

						<p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
							From free experimentation to enterprise-grade controls, this page
							mirrors the calm, elevated structure of OpenAI’s pricing
							experience with clear tiers, transparent limits, and a strong CTA
							path.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-4">
							<Button size="lg">
								Start building
								<ArrowRight className="h-4 w-4" />
							</Button>
							<Button variant="outline" size="lg">
								View enterprise package
							</Button>
						</div>

						<div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-200">
							<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
								No hidden fees
							</span>
							<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
								Cancel anytime
							</span>
							<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
								30-day trial for teams
							</span>
						</div>
					</div>

					<Card className="border-white/10 bg-slate-950/60">
						<CardHeader>
							<div className="flex items-center justify-between">
								<CardTitle>Choose your billing</CardTitle>
								<span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
									Save {annualSavings}% yearly
								</span>
							</div>
							<CardDescription>
								Switch between monthly and annual billing to see the best fit
								for your team.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-1">
								<button
									type="button"
									onClick={() => setBilling('monthly')}
									className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${billing === 'monthly' ? 'bg-white text-slate-950' : 'text-slate-200'}`}
								>
									Monthly
								</button>
								<button
									type="button"
									onClick={() => setBilling('yearly')}
									className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${billing === 'yearly' ? 'bg-white text-slate-950' : 'text-slate-200'}`}
								>
									Yearly
								</button>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
								<p className="text-sm text-slate-300">Starting from</p>
								<p className="mt-2 text-3xl font-semibold text-white">
									${billing === 'monthly' ? plans[1].monthly : plans[1].yearly}
								</p>
								<p className="mt-1 text-sm text-slate-300">
									per seat / month, billed{' '}
									{billing === 'monthly' ? 'monthly' : 'annually'}.
								</p>
							</div>

							<ul className="space-y-3 text-sm text-slate-200">
								{[
									'Unlimited prompt versions',
									'Priority routing',
									'Advanced analytics',
								].map((item) => (
									<li key={item} className="flex items-center gap-2">
										<Check className="h-4 w-4 text-emerald-300" />
										{item}
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</section>

				<section className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{featurePills.map(({ icon: Icon, title, text }) => (
						<Card key={title} className="border-white/10 bg-white/[0.025]">
							<CardContent className="pt-6">
								<Icon className="h-5 w-5 text-sky-200" />
								<h2 className="mt-4 text-lg font-semibold text-white">
									{title}
								</h2>
								<p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
							</CardContent>
						</Card>
					))}
				</section>

				<section id="plans" className="mt-16">
					<div className="max-w-2xl">
						<p className="text-sm uppercase tracking-[0.3em] text-sky-200">
							Plans
						</p>
						<h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
							Select the plan that matches your workflow.
						</h2>
						<p className="mt-3 text-base leading-7 text-slate-200">
							Every plan is designed to keep your team moving with clear feature
							boundaries and an easy upgrade path.
						</p>
					</div>

					<div className="mt-8 grid gap-4 lg:grid-cols-3">
						{plans.map((plan) => {
							const price = billing === 'monthly' ? plan.monthly : plan.yearly;

							return (
								<Card
									key={plan.name}
									className={`${plan.highlight ? 'border-sky-300/50 bg-sky-400/10' : 'border-white/10 bg-white/[0.025]'} ${plan.highlight ? 'scale-[1.01]' : ''}`}
								>
									<CardHeader>
										<div className="flex items-center justify-between gap-3">
											<div>
												<CardTitle>{plan.name}</CardTitle>
												<CardDescription>{plan.description}</CardDescription>
											</div>
											{plan.badge ? (
												<span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-950">
													{plan.badge}
												</span>
											) : null}
										</div>
									</CardHeader>

									<CardContent>
										<div className="flex items-end gap-2">
											<span className="text-4xl font-semibold text-white">
												${price}
											</span>
											<span className="pb-1 text-sm text-slate-300">
												{price === 0 ? 'forever' : '/ seat'}
											</span>
										</div>
										<p className="mt-2 text-sm text-slate-300">
											{billing === 'monthly'
												? 'Billed monthly'
												: 'Billed annually with 2 months free'}
										</p>

										<ul className="mt-6 space-y-3 text-sm text-slate-100">
											{plan.features.map((feature) => (
												<li key={feature} className="flex items-start gap-2">
													<Check className="mt-0.5 h-4 w-4 text-emerald-300" />
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</CardContent>

									<CardFooter>
										<Button
											variant={plan.highlight ? 'default' : 'outline'}
											className="w-full"
										>
											{plan.cta}
										</Button>
									</CardFooter>
								</Card>
							);
						})}
					</div>
				</section>

				<section id="compare" className="mt-16">
					<div className="flex flex-wrap items-end justify-between gap-4">
						<div>
							<p className="text-sm uppercase tracking-[0.3em] text-sky-200">
								Compare
							</p>
							<h2 className="mt-3 text-3xl font-semibold text-white">
								Everything you need at a glance.
							</h2>
						</div>
						<p className="max-w-2xl text-sm leading-6 text-slate-200">
							The layout and typography stay intentionally clear and editorial,
							so teams can understand the tradeoffs at a glance.
						</p>
					</div>

					<Card className="mt-6 overflow-hidden border-white/10 bg-white/[0.025]">
						<CardContent className="p-0">
							<div className="grid grid-cols-[1.2fr_repeat(3,minmax(0,1fr))] border-b border-white/10 text-sm text-slate-200">
								<div className="border-r border-white/10 px-4 py-3 font-semibold text-white">
									Feature
								</div>
								{plans.map((plan) => (
									<div
										key={plan.name}
										className="border-r border-white/10 px-4 py-3 text-center font-semibold text-white"
									>
										{plan.name}
									</div>
								))}
							</div>
							{comparison.map(([feature, free, plus, pro]) => (
								<div
									key={feature}
									className="grid grid-cols-[1.2fr_repeat(3,minmax(0,1fr))] border-b border-white/10 text-sm text-slate-200 last:border-b-0"
								>
									<div className="border-r border-white/10 px-4 py-3">
										{feature}
									</div>
									<div className="border-r border-white/10 px-4 py-3 text-center">
										{free}
									</div>
									<div className="border-r border-white/10 px-4 py-3 text-center">
										{plus}
									</div>
									<div className="px-4 py-3 text-center">{pro}</div>
								</div>
							))}
						</CardContent>
					</Card>
				</section>

				<section id="faq" className="mt-16 grid gap-4 lg:grid-cols-3">
					<div>
						<p className="text-sm uppercase tracking-[0.3em] text-sky-200">
							FAQs
						</p>
						<h2 className="mt-3 text-3xl font-semibold text-white">
							Everything in one place.
						</h2>
					</div>
					<div className="lg:col-span-2 grid gap-4">
						{[
							[
								'Can I switch plans later?',
								'Yes. You can upgrade or downgrade at any time and your usage is prorated automatically.',
							],
							[
								'Is annual billing cheaper?',
								'Annual billing reduces the Plus and Pro tiers by about 20% compared with monthly billing.',
							],
							[
								'Do you offer team onboarding?',
								'Custom onboarding is available on Plus and Pro plans, including migration support and rollout guidance.',
							],
						].map(([question, answer]) => (
							<Card key={question} className="border-white/10 bg-white/[0.025]">
								<CardContent className="pt-6">
									<h3 className="text-lg font-semibold text-white">
										{question}
									</h3>
									<p className="mt-2 text-sm leading-6 text-slate-300">
										{answer}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;

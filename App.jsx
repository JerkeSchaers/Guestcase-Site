import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Building2, Check, CheckCircle2, ChevronDown, ClipboardCheck,
  Clock3, CreditCard, Languages, Lock, Mail, MessageCircle, Play, Send,
  ShieldCheck, Sparkles, Star, Users, X
} from 'lucide-react';

function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl font-medium transition focus:outline-none focus:ring-4 focus:ring-[#C97855]/20 disabled:opacity-50';
  const styles = variant === 'outline'
    ? 'border border-[#C97855] bg-transparent text-[#172522] hover:bg-[#FFF3E8]'
    : 'bg-[#B55336] text-white hover:bg-[#93452F]';
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}

function Card({ children, className = '' }) {
  return <div className={`rounded-[2rem] border border-[#E8DED3] bg-white shadow-sm ${className}`}>{children}</div>;
}

function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

const translations = {
  en: {
    nav: { how: 'How it works', why: 'Why GuestCase', useCases: 'Use cases', pricing: 'Pricing', resources: 'Resources', login: 'Log in', cta: 'Start Free Demo' },
    hero: {
      trust: 'Trusted by hospitality teams worldwide', headline1: 'Respond right.', headline2: 'Resolve faster.',
      sub: 'Turn guest complaints and bad reviews into structured action. Protect your reputation, improve guest satisfaction, and empower your team to deliver better hospitality.',
      primary: 'Start Free Demo', secondary: 'See How It Works', benefits: ['5-min setup', 'No credit card', 'Cancel anytime']
    },
    trust: 'Trusted by 1,200+ hospitality teams',
    problemsTitle: 'Built for real hospitality teams',
    problems: [
      { title: 'Too many complaints, not enough follow-through', text: 'Important issues get missed or forgotten across inboxes, platforms and busy shifts.' },
      { title: 'Bad reviews hurt your reputation', text: 'Unresolved feedback stays visible online and influences future guests before they ever visit.' },
      { title: 'Teams need clear guidance and accountability', text: 'Everyone should know what to say, what to check and when to follow up.' },
      { title: 'Protect your reputation. Drive repeat visits.', text: 'Close the loop with confidence and turn feedback into loyalty.' },
    ],
    featuresTitle: 'One clear case for every guest issue',
    featuresSub: 'GuestCase turns complaints, reviews and sensitive guest feedback into structured cases with a risk level, response suggestion and follow-up checklist.',
    features: [
      { title: 'Capture every voice', text: 'Collect guest feedback from reviews, messages and internal reports in one place.' },
      { title: 'Prioritize what matters', text: 'Smart triage helps your team focus on the cases that need attention first.' },
      { title: 'Respond professionally', text: 'Use ready-to-edit response suggestions that match the situation and tone.' },
      { title: 'Guide internal follow-up', text: 'Assign owners, track actions and close every case with confidence.' },
    ],
    howTitle: 'How GuestCase works',
    steps: [
      { title: 'Capture', text: 'A review, complaint or guest message comes in.' },
      { title: 'Triage', text: 'GuestCase assesses risk and issue type.' },
      { title: 'Assign', text: 'The right person gets ownership.' },
      { title: 'Respond', text: 'Use a professional suggested response.' },
      { title: 'Follow up', text: 'Track resolution and close the loop.' },
    ],
    useCasesTitle: 'Built for the issues hospitality teams face every day',
    useCases: [
      { title: 'Bad reviews', text: 'Respond quickly and turn negative experiences around.' },
      { title: 'Service complaints', text: 'Give managers the right words and follow-up steps.' },
      { title: 'Food safety', text: 'Handle sensitive claims with structure and documentation.' },
      { title: 'Refund requests', text: 'Avoid random compensation decisions with a clear approval flow.' },
      { title: 'Hygiene complaints', text: 'Document the issue, assign checks and follow up professionally.' },
      { title: 'Multi-location feedback', text: 'Spot repeat issues across teams, locations and complaint categories.' },
    ],
    demo: { title: 'Try GuestCase with a real complaint', sub: 'Paste a complaint or bad review and see how a case would be structured.', placeholder: 'e.g. The food was cold and we had to wait 30 minutes...', button: 'Analyze Complaint', note: 'Demo only. Please do not enter sensitive personal data.', sampleTitle: 'Sample output', risk: 'Risk level', response: 'Suggested response', checklist: 'Follow-up checklist' },
    pricingTitle: 'Simple pricing. Built to scale with your team.',
    pricingSub: 'Public pricing is coming soon. Join early access to test GuestCase before launch.',
    plans: [
      { name: 'Starter', text: 'For independent restaurants and small teams getting started.', items: ['Complaint analysis', 'Response suggestions', 'Basic case log', 'Core templates'] },
      { name: 'Growth', text: 'For growing hospitality teams with multiple managers or locations.', items: ['Multi-location tracking', 'Team roles', 'Custom templates', 'Monthly insights'] },
      { name: 'Enterprise', text: 'For food halls, hotel groups and larger operators.', items: ['Advanced permissions', 'Custom onboarding', 'Tailored protocols', 'Dedicated support'] },
    ],
    comingSoon: 'Coming soon', early: 'Early access available',
    testimonialsTitle: 'Loved by hospitality teams',
    testimonials: [
      { quote: 'GuestCase keeps us organized and helps us respond faster. Our guests notice, and our reviews show it.', name: 'Marco De Luca', role: 'Operations Director' },
      { quote: 'The structure and templates save our managers hours every week and keep our messaging consistent.', name: 'Jenna Lee', role: 'Director of Operations' },
      { quote: 'It is simple to use and gives our team confidence to handle difficult guest situations professionally.', name: 'Sarah Nguyen', role: 'General Manager' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'Is GuestCase only for Google Reviews?', a: 'No. GuestCase is designed for reviews, emails, direct messages, guest complaints and internal incident reports.' },
      { q: 'Does GuestCase replace our managers?', a: 'No. GuestCase supports managers with structure, suggested responses and checklists. Your team stays in control.' },
      { q: 'Can we customize the responses?', a: 'Yes. Response templates can be adapted to your tone of voice, language and internal policies.' },
      { q: 'Does GuestCase work in multiple languages?', a: 'Yes. GuestCase is designed for teams working across English, Dutch and French.' },
    ],
    finalCta: { title: 'Ready to turn feedback into better hospitality?', sub: 'Start your free demo and see how GuestCase helps your team respond right — every time.', button: 'Start Free Demo', contact: 'Questions? Let’s talk.' },
    footer: { text: 'Helping hospitality teams turn feedback into better experiences.', product: 'Product', company: 'Company', resources: 'Resources', legal: 'Legal', disclaimer: 'GuestCase provides workflow support and suggested responses for hospitality teams. It does not replace legal, medical or food safety advice.' }
  },
  nl: {
    nav: { how: 'Hoe het werkt', why: 'Waarom GuestCase', useCases: 'Use cases', pricing: 'Pricing', resources: 'Resources', login: 'Inloggen', cta: 'Start gratis demo' },
    hero: { trust: 'Gebouwd voor horeca teams wereldwijd', headline1: 'Reageer juist.', headline2: 'Los sneller op.', sub: 'Zet klachten en slechte reviews om in duidelijke actie. Bescherm je reputatie, verbeter gasttevredenheid en geef je team de juiste flow om professioneel op te volgen.', primary: 'Start gratis demo', secondary: 'Bekijk hoe het werkt', benefits: ['Setup in 5 minuten', 'Geen creditcard', 'Altijd opzegbaar'] },
    trust: 'Vertrouwd door 1.200+ horeca teams',
    problemsTitle: 'Gebouwd voor echte horeca teams',
    problems: [
      { title: 'Te veel klachten, te weinig opvolging', text: 'Belangrijke meldingen raken verloren tussen inboxen, platformen en drukke shifts.' },
      { title: 'Slechte reviews schaden je reputatie', text: 'Onopgeloste feedback blijft online zichtbaar en beïnvloedt toekomstige gasten.' },
      { title: 'Teams hebben duidelijke richtlijnen nodig', text: 'Iedereen moet weten wat te zeggen, wat te controleren en wanneer op te volgen.' },
      { title: 'Bescherm je reputatie. Stimuleer herhaalbezoek.', text: 'Sluit klachten professioneel af en zet feedback om in vertrouwen.' },
    ],
    featuresTitle: 'Eén duidelijke case voor elke gastmelding',
    featuresSub: 'GuestCase zet klachten, reviews en gevoelige gastmeldingen om in gestructureerde cases met risiconiveau, antwoordvoorstel en opvolgchecklist.',
    features: [
      { title: 'Verzamel elke melding', text: 'Breng feedback uit reviews, berichten en interne meldingen samen in één flow.' },
      { title: 'Prioriteer wat telt', text: 'Slimme triage helpt je team focussen op cases die eerst aandacht nodig hebben.' },
      { title: 'Reageer professioneel', text: 'Gebruik aanpasbare antwoordvoorstellen die passen bij situatie en tone of voice.' },
      { title: 'Begeleid interne opvolging', text: 'Wijs verantwoordelijken toe, track acties en sluit cases correct af.' },
    ],
    howTitle: 'Hoe GuestCase werkt',
    steps: [
      { title: 'Verzamel', text: 'Een review, klacht of gastbericht komt binnen.' },
      { title: 'Beoordeel', text: 'GuestCase bepaalt risico en type melding.' },
      { title: 'Wijs toe', text: 'De juiste persoon krijgt eigenaarschap.' },
      { title: 'Reageer', text: 'Gebruik een professioneel antwoordvoorstel.' },
      { title: 'Volg op', text: 'Track de oplossing en sluit de case af.' },
    ],
    useCasesTitle: 'Gebouwd voor situaties die horeca teams elke dag tegenkomen',
    useCases: [
      { title: 'Slechte reviews', text: 'Reageer snel en draai negatieve ervaringen om.' },
      { title: 'Serviceklachten', text: 'Geef managers de juiste woorden en opvolgstappen.' },
      { title: 'Voedselveiligheid', text: 'Behandel gevoelige claims met structuur en documentatie.' },
      { title: 'Refund requests', text: 'Vermijd willekeurige compensaties met een duidelijke flow.' },
      { title: 'Hygiëneklachten', text: 'Documenteer de melding, wijs checks toe en volg professioneel op.' },
      { title: 'Multi-location feedback', text: 'Herken terugkerende problemen per team, locatie en categorie.' },
    ],
    demo: { title: 'Test GuestCase met een echte klacht', sub: 'Plak een klacht of slechte review en zie hoe de case gestructureerd wordt.', placeholder: 'bv. Het eten was koud en we moesten 30 minuten wachten...', button: 'Analyseer klacht', note: 'Demo only. Voer geen gevoelige persoonsgegevens in.', sampleTitle: 'Voorbeelduitkomst', risk: 'Risiconiveau', response: 'Voorgesteld antwoord', checklist: 'Opvolgchecklist' },
    pricingTitle: 'Eenvoudige pricing. Gebouwd om mee te groeien.',
    pricingSub: 'Publieke prijzen volgen binnenkort. Vraag early access aan om GuestCase voor launch te testen.',
    plans: [
      { name: 'Starter', text: 'Voor zelfstandige restaurants en kleine teams die willen starten.', items: ['Klachtanalyse', 'Antwoordvoorstellen', 'Basis case log', 'Kerntemplates'] },
      { name: 'Growth', text: 'Voor groeiende horeca teams met meerdere managers of locaties.', items: ['Multi-location tracking', 'Teamrollen', 'Aangepaste templates', 'Maandelijkse inzichten'] },
      { name: 'Enterprise', text: 'Voor food halls, hotelgroepen en grotere operators.', items: ['Geavanceerde rechten', 'Onboarding op maat', 'Protocollen op maat', 'Dedicated support'] },
    ],
    comingSoon: 'Binnenkort', early: 'Early access beschikbaar',
    testimonialsTitle: 'Geliefd door horeca teams',
    testimonials: [
      { quote: 'GuestCase houdt ons georganiseerd en helpt ons sneller reageren. Onze gasten merken het, en onze reviews tonen het.', name: 'Marco De Luca', role: 'Operations Director' },
      { quote: 'De structuur en templates besparen onze managers elke week uren en houden onze communicatie consistent.', name: 'Jenna Lee', role: 'Director of Operations' },
      { quote: 'Het is eenvoudig in gebruik en geeft ons team vertrouwen om moeilijke gastensituaties professioneel te behandelen.', name: 'Sarah Nguyen', role: 'General Manager' },
    ],
    faqTitle: 'Veelgestelde vragen',
    faq: [
      { q: 'Is GuestCase enkel voor Google Reviews?', a: 'Nee. GuestCase is gemaakt voor reviews, e-mails, direct messages, gastklachten en interne incidentmeldingen.' },
      { q: 'Vervangt GuestCase onze managers?', a: 'Nee. GuestCase ondersteunt managers met structuur, antwoordvoorstellen en checklists. Je team blijft altijd in controle.' },
      { q: 'Kunnen we de antwoorden aanpassen?', a: 'Ja. Templates kunnen aangepast worden aan jullie tone of voice, taal en interne afspraken.' },
      { q: 'Werkt GuestCase in meerdere talen?', a: 'Ja. GuestCase is ontworpen voor teams die werken in Engels, Nederlands en Frans.' },
    ],
    finalCta: { title: 'Klaar om feedback om te zetten in betere hospitality?', sub: 'Start je gratis demo en ontdek hoe GuestCase je team helpt om juist te reageren — elke keer opnieuw.', button: 'Start gratis demo', contact: 'Vragen? Laat ons praten.' },
    footer: { text: 'We helpen horeca teams feedback om te zetten in betere ervaringen.', product: 'Product', company: 'Bedrijf', resources: 'Resources', legal: 'Legal', disclaimer: 'GuestCase biedt workflowondersteuning en antwoordvoorstellen voor horeca teams. Het vervangt geen juridisch, medisch of voedselveiligheidsadvies.' }
  }
};

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-[1.25rem] border-2 border-[#B55336] bg-[#FFF9F2]">
        <div className="absolute bottom-[-6px] left-3 h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#B55336] bg-[#FFF9F2]" />
        <div className="space-y-1"><div className="h-[2px] w-5 rounded bg-[#B55336]" /><div className="h-[2px] w-3 rounded bg-[#B55336]" /></div>
      </div>
      <div><div className="font-serif text-3xl font-semibold leading-none text-[#172522]">GuestCase</div><div className="text-xs text-[#66716D]">a product of Food Solutions</div></div>
    </div>
  );
}

function Container({ children, className = '' }) { return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>; }
function Pill({ children, icon: Icon }) { return <div className="flex items-center gap-2 text-sm text-[#596660]">{Icon && <Icon size={17} className="text-[#B55336]" />}<span>{children}</span></div>; }
function SectionHeader({ title, sub }) { return <div className="mx-auto mb-10 max-w-3xl text-center"><h2 className="font-serif text-4xl font-semibold leading-tight text-[#172522] md:text-5xl">{title}</h2>{sub && <p className="mt-4 text-lg leading-8 text-[#596660]">{sub}</p>}</div>; }

function DashboardMockup({ lang }) {
  const nl = lang === 'nl';
  return <div className="relative overflow-hidden rounded-[2rem] border border-[#E8DED3] bg-white shadow-2xl shadow-[#172522]/10"><div className="grid grid-cols-[105px_1fr]"><div className="bg-[#102B24] p-5 text-white"><div className="mb-8 flex h-9 w-9 items-center justify-center rounded-xl border border-[#C97855] text-[#C97855]"><MessageCircle size={18} /></div>{['Dashboard','Cases','Reviews','Reports','Templates'].map((item,index)=><div key={item} className={`mb-3 rounded-xl px-3 py-2 text-xs ${index===0?'bg-white/10':'text-white/70'}`}>{item}</div>)}</div><div className="p-6"><div className="mb-5 flex items-start justify-between"><div><div className="text-lg font-bold text-[#172522]">Case #GC-24719</div><div className="text-xs text-[#66716D]">Created May 14, 2026 · 10:23 AM</div></div><div className="rounded-full bg-[#F1F4ED] px-3 py-1 text-xs text-[#567049]">Open</div></div><div className="grid gap-4 lg:grid-cols-3"><div className="rounded-2xl border border-[#EEE5DB] bg-[#FFFCF8] p-4"><div className="text-xs font-semibold uppercase tracking-wider text-[#66716D]">{nl?'Risiconiveau':'Risk level'}</div><div className="mt-3 flex items-center gap-2 text-[#B55336]"><ShieldCheck size={20}/><span className="text-xl font-bold">Medium</span></div><p className="mt-3 text-sm leading-6 text-[#596660]">{nl?'Deze melding kan impact hebben op gasttevredenheid en online reputatie.':'The issue could impact guest satisfaction and online reputation.'}</p></div><div className="rounded-2xl border border-[#EEE5DB] bg-white p-4"><div className="flex items-center justify-between"><div className="text-xs font-semibold uppercase tracking-wider text-[#66716D]">{nl?'Antwoord':'Suggested response'}</div><span className="rounded-full bg-[#EEF5EA] px-2 py-1 text-[10px] text-[#567049]">AI</span></div><p className="mt-3 text-sm leading-6 text-[#596660]">{nl?'Beste Sarah, bedankt om dit te melden. Dit is niet de ervaring die wij willen bieden...':'Hi Sarah, we’re truly sorry to hear about your experience. This is not the standard we strive for...'}</p><button className="mt-3 rounded-xl bg-[#102B24] px-4 py-2 text-xs text-white">{nl?'Gebruik antwoord':'Use response'}</button></div><div className="rounded-2xl border border-[#EEE5DB] bg-white p-4"><div className="text-xs font-semibold uppercase tracking-wider text-[#66716D]">{nl?'Checklist':'Case checklist'}</div><div className="mt-3 space-y-2 text-sm text-[#596660]">{[nl?'Gast erkennen':'Acknowledge guest',nl?'Onderzoek starten':'Investigate issue',nl?'Oplossen':'Resolve',nl?'Documenteren':'Document'].map((item,i)=><div key={item} className="flex items-center gap-2">{i<3?<CheckCircle2 size={15} className="text-[#567049]"/>:<div className="h-[15px] w-[15px] rounded-full border border-[#B9C1BA]"/>}<span>{item}</span></div>)}</div></div></div><div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-[#EEE5DB] bg-white p-4"><div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#66716D]">Case log</div><div className="space-y-2 text-xs text-[#596660]"><div>10:23 · Case created from Google Review</div><div>10:24 · Risk assessed as Medium</div><div>10:25 · Suggested response generated</div></div></div><div className="rounded-2xl border border-[#EEE5DB] bg-white p-4"><div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#66716D]">Case details</div><div className="space-y-2 text-xs text-[#596660]"><div>Source · Google Review</div><div>Location · Downtown — Main St.</div><div>Category · Food Quality</div></div></div></div></div></div></div>;
}

function HostessCard() {
  return <div className="relative hidden overflow-hidden rounded-[2rem] border border-[#E8DED3] bg-[#F6EFE6] shadow-xl shadow-[#172522]/10 lg:block"><div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#102B24]/20"/><svg viewBox="0 0 300 430" className="h-full w-full" role="img" aria-label="Front-of-house hostess illustration"><rect width="300" height="430" fill="#F6EFE6"/><circle cx="235" cy="72" r="46" fill="#E8DED3" opacity="0.8"/><circle cx="72" cy="110" r="54" fill="#F1E6DA"/><rect x="35" y="300" width="230" height="18" rx="9" fill="#D8C7B8"/><rect x="55" y="318" width="190" height="42" rx="18" fill="#FDF7EF"/><circle cx="152" cy="112" r="42" fill="#CFA47E"/><path d="M110 119c6-50 35-77 78-54 22 12 33 39 21 68-16-26-56-16-99-14z" fill="#4D3127"/><path d="M118 148c17 24 55 25 72 0v42h-72v-42z" fill="#CFA47E"/><path d="M78 398c8-100 32-164 73-175 45 9 68 77 75 175H78z" fill="#102B24"/><path d="M117 220l35 61 36-61c-17-12-52-12-71 0z" fill="#FFF9F2"/><path d="M93 268c-30 26-39 62-37 104h42c0-30 10-62 30-91l-35-13z" fill="#102B24"/><path d="M211 268c30 26 39 62 37 104h-42c0-30-10-62-30-91l35-13z" fill="#102B24"/><rect x="189" y="255" width="58" height="38" rx="6" fill="#C97855"/><rect x="198" y="266" width="39" height="4" rx="2" fill="#FFF9F2"/><rect x="202" y="276" width="31" height="3" rx="1.5" fill="#FFF9F2" opacity="0.8"/><circle cx="138" cy="113" r="4" fill="#172522"/><circle cx="171" cy="113" r="4" fill="#172522"/><path d="M139 137c11 8 25 8 36 0" fill="none" stroke="#7B4A3A" strokeWidth="4" strokeLinecap="round"/><path d="M38 93c24-18 49-19 75-3" fill="none" stroke="#567049" strokeWidth="5" strokeLinecap="round" opacity="0.6"/><path d="M36 124c27-18 54-18 79-1" fill="none" stroke="#567049" strokeWidth="5" strokeLinecap="round" opacity="0.45"/></svg></div>;
}

function DemoBlock({ t, lang }) {
  const [input, setInput] = useState('');
  const hasText = input.trim().length > 0;
  return <section id="demo" className="py-20"><Container><div className="rounded-[2rem] border border-[#D7CBBF] bg-white p-6 shadow-sm md:p-8"><div className="grid gap-8 lg:grid-cols-[0.9fr_1.2fr] lg:items-start"><div><h2 className="font-serif text-4xl font-semibold text-[#172522]">{t.demo.title}</h2><p className="mt-4 leading-7 text-[#596660]">{t.demo.sub}</p><div className="mt-6 flex items-center gap-2 text-sm text-[#66716D]"><Lock size={16}/>{t.demo.note}</div></div><div className="space-y-4"><textarea value={input} onChange={(e)=>setInput(e.target.value)} placeholder={t.demo.placeholder} className="min-h-[130px] w-full rounded-2xl border border-[#E4D8CB] bg-[#FFFCF8] p-4 text-[#172522] outline-none ring-[#C97855]/30 transition focus:ring-4"/><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><span className="text-xs text-[#66716D]">{input.length}/500</span><Button className="px-6 py-6"><Sparkles className="mr-2" size={17}/>{t.demo.button}</Button></div><div className={`rounded-2xl border p-5 transition ${hasText?'border-[#C97855] bg-[#FFF7EF]':'border-[#E8DED3] bg-[#FFFCF8]'}`}><div className="mb-3 text-sm font-semibold text-[#172522]">{t.demo.sampleTitle}</div><div className="grid gap-3 md:grid-cols-3"><div className="rounded-xl bg-white p-3"><div className="text-xs text-[#66716D]">{t.demo.risk}</div><div className="mt-1 font-semibold text-[#B55336]">Medium</div></div><div className="rounded-xl bg-white p-3"><div className="text-xs text-[#66716D]">{t.demo.response}</div><div className="mt-1 text-sm text-[#596660]">{lang==='nl'?'Professioneel en empathisch':'Professional and empathetic'}</div></div><div className="rounded-xl bg-white p-3"><div className="text-xs text-[#66716D]">{t.demo.checklist}</div><div className="mt-1 text-sm text-[#596660]">3 {lang==='nl'?'stappen':'steps'}</div></div></div></div></div></div></div></Container></section>;
}

export default function GuestCaseWebsite() {
  const [lang, setLang] = useState('en');
  const [openFaq, setOpenFaq] = useState(0);
  const t = translations[lang];
  const logos = ['URBAN\nPLATE','MERCATO\nHOSPITALITY','The Brass\nGroup','MOXIE','daily eats','FORK & FIELD'];
  const problemIcons = [MessageCircle, Star, Users, ShieldCheck];
  const featureIcons = [MessageCircle, Sparkles, Send, ClipboardCheck];
  const useCaseIcons = [Star, MessageCircle, ShieldCheck, CreditCard, Sparkles, Building2];
  const scrollToDemo = () => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });

  return <div className="min-h-screen bg-[#FFF9F2] text-[#172522]"><header className="sticky top-0 z-50 border-b border-[#E8DED3]/80 bg-[#FFF9F2]/90 backdrop-blur-xl"><Container className="flex h-20 items-center justify-between gap-6"><Logo/><nav className="hidden items-center gap-8 text-sm text-[#2E3B37] lg:flex"><a href="#how" className="hover:text-[#B55336]">{t.nav.how}</a><a href="#why" className="hover:text-[#B55336]">{t.nav.why}</a><a href="#usecases" className="hover:text-[#B55336]">{t.nav.useCases}</a><a href="#pricing" className="hover:text-[#B55336]">{t.nav.pricing}</a><a href="#faq" className="hover:text-[#B55336]">{t.nav.resources}</a></nav><div className="flex items-center gap-3"><button onClick={()=>setLang(lang==='en'?'nl':'en')} className="hidden items-center gap-2 rounded-full border border-[#E4D8CB] px-3 py-2 text-sm text-[#596660] md:flex"><Languages size={16}/> {lang.toUpperCase()}</button><button className="hidden text-sm text-[#2E3B37] md:block">{t.nav.login}</button><Button onClick={scrollToDemo} className="px-5 py-6">{t.nav.cta}</Button></div></Container></header><main><section className="overflow-hidden border-b border-[#E8DED3] py-16 md:py-24"><Container><div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center"><motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.5}}><div className="mb-6 flex items-center gap-3 text-sm text-[#66716D]"><div className="flex -space-x-2">{[0,1,2].map(i=><div key={i} className="h-8 w-8 rounded-full border-2 border-[#FFF9F2] bg-[#D8C7B8]"/> )}</div>{t.hero.trust}</div><h1 className="font-serif text-6xl font-semibold leading-[0.98] tracking-tight text-[#172522] md:text-7xl xl:text-8xl">{t.hero.headline1}<br/><span className="text-[#B55336]">{t.hero.headline2}</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#596660]">{t.hero.sub}</p><div className="mt-8 flex flex-col gap-4 sm:flex-row"><Button onClick={scrollToDemo} className="px-7 py-7 text-base">{t.hero.primary}<ArrowRight className="ml-2" size={18}/></Button><Button variant="outline" onClick={()=>document.getElementById('how')?.scrollIntoView({behavior:'smooth'})} className="px-7 py-7 text-base"><Play className="mr-2" size={18}/>{t.hero.secondary}</Button></div><div className="mt-7 flex flex-wrap gap-5"><Pill icon={Clock3}>{t.hero.benefits[0]}</Pill><Pill icon={CreditCard}>{t.hero.benefits[1]}</Pill><Pill icon={X}>{t.hero.benefits[2]}</Pill></div></motion.div><motion.div initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} transition={{duration:.6,delay:.1}} className="grid gap-5 lg:grid-cols-[1fr_220px]"><DashboardMockup lang={lang}/><HostessCard/></motion.div></div></Container></section><section className="border-b border-[#E8DED3] py-9"><Container><div className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[#66716D]">{t.trust}</div><div className="grid grid-cols-2 gap-6 text-center md:grid-cols-6">{logos.map(logo=><div key={logo} className="whitespace-pre-line font-serif text-xl font-semibold leading-tight text-[#2E3B37]/70">{logo}</div>)}</div></Container></section><section id="why" className="py-20"><Container><SectionHeader title={t.problemsTitle}/><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{t.problems.map((item,i)=>{const Icon=problemIcons[i];return <Card key={item.title} className="bg-white/75"><CardContent className="p-7"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF3E9] text-[#567049]"><Icon size={25}/></div><h3 className="font-serif text-2xl font-semibold leading-tight text-[#172522]">{item.title}</h3><p className="mt-4 leading-7 text-[#596660]">{item.text}</p></CardContent></Card>})}</div></Container></section><section className="bg-[#F8F1E9] py-20"><Container><SectionHeader title={t.featuresTitle} sub={t.featuresSub}/><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{t.features.map((item,i)=>{const Icon=featureIcons[i];return <div key={item.title} className="rounded-[2rem] border border-[#E4D8CB] bg-[#FFF9F2] p-7"><div className="mb-6 text-[#B55336]"><Icon size={30}/></div><h3 className="font-serif text-2xl font-semibold text-[#172522]">{item.title}</h3><p className="mt-4 leading-7 text-[#596660]">{item.text}</p></div>})}</div></Container></section><section id="how" className="py-20"><Container><SectionHeader title={t.howTitle}/><div className="grid gap-4 md:grid-cols-5">{t.steps.map((step,i)=><div key={step.title} className="relative rounded-[2rem] border border-[#E8DED3] bg-white p-6 text-center shadow-sm"><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#102B24] text-white">{i+1}</div><h3 className="font-serif text-2xl font-semibold text-[#172522]">{step.title}</h3><p className="mt-3 text-sm leading-6 text-[#596660]">{step.text}</p>{i<t.steps.length-1&&<ArrowRight className="absolute -right-5 top-1/2 z-10 hidden text-[#C97855] md:block"/>}</div>)}</div></Container></section><section id="usecases" className="border-y border-[#E8DED3] bg-white/50 py-20"><Container><SectionHeader title={t.useCasesTitle}/><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.useCases.map((item,i)=>{const Icon=useCaseIcons[i];return <div key={item.title} className="rounded-[2rem] border border-[#E8DED3] bg-[#FFF9F2] p-7"><Icon className="mb-5 text-[#567049]" size={28}/><h3 className="font-serif text-2xl font-semibold text-[#172522]">{item.title}</h3><p className="mt-3 leading-7 text-[#596660]">{item.text}</p></div>})}</div></Container></section><DemoBlock t={t} lang={lang}/><section id="pricing" className="bg-[#F8F1E9] py-20"><Container><SectionHeader title={t.pricingTitle} sub={t.pricingSub}/><div className="grid gap-6 lg:grid-cols-3">{t.plans.map((plan,i)=><Card key={plan.name} className={`${i===1?'ring-2 ring-[#567049]':''}`}><CardContent className="p-8">{i===1&&<div className="mb-4 inline-flex rounded-full bg-[#EEF5EA] px-3 py-1 text-xs font-semibold text-[#567049]">Most Popular</div>}<h3 className="font-serif text-3xl font-semibold text-[#172522]">{plan.name}</h3><p className="mt-3 min-h-[64px] leading-7 text-[#596660]">{plan.text}</p><div className="my-6 rounded-2xl border border-dashed border-[#C97855] bg-[#FFF9F2] p-4 text-center"><div className="font-semibold text-[#172522]">{t.comingSoon}</div><div className="text-sm text-[#66716D]">{t.early}</div></div><div className="space-y-3">{plan.items.map(item=><div key={item} className="flex items-center gap-3 text-[#596660]"><Check size={17} className="text-[#567049]"/> {item}</div>)}</div><Button onClick={scrollToDemo} className="mt-8 w-full bg-[#102B24] py-6 hover:bg-[#1B3A32]">{lang==='nl'?'Vraag early access aan':'Join Early Access'}</Button></CardContent></Card>)}</div></Container></section><section className="py-20"><Container><SectionHeader title={t.testimonialsTitle}/><div className="grid gap-6 lg:grid-cols-3">{t.testimonials.map(item=><div key={item.name} className="rounded-[2rem] border border-[#E8DED3] bg-white p-7 shadow-sm"><div className="mb-5 flex gap-1 text-[#B55336]">{[0,1,2,3,4].map(x=><Star key={x} size={17} fill="currentColor"/>)}</div><p className="min-h-[120px] text-lg leading-8 text-[#2E3B37]">“{item.quote}”</p><div className="mt-6 flex items-center gap-4"><div className="h-12 w-12 rounded-full bg-[#D8C7B8]"/><div><div className="font-semibold text-[#172522]">{item.name}</div><div className="text-sm text-[#66716D]">{item.role}</div></div></div></div>)}</div></Container></section><section id="faq" className="border-y border-[#E8DED3] bg-white/50 py-20"><Container><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><h2 className="font-serif text-5xl font-semibold text-[#172522]">{t.faqTitle}</h2><p className="mt-5 leading-7 text-[#596660]">info@guestcase.eu</p></div><div className="space-y-3">{t.faq.map((item,i)=><div key={item.q} className="rounded-2xl border border-[#E8DED3] bg-[#FFF9F2]"><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} className="flex w-full items-center justify-between p-5 text-left font-semibold text-[#172522]">{item.q}<ChevronDown className={`transition ${openFaq===i?'rotate-180':''}`}/></button>{openFaq===i&&<div className="px-5 pb-5 leading-7 text-[#596660]">{item.a}</div>}</div>)}</div></div></Container></section><section className="py-16"><Container><div className="rounded-[2.2rem] bg-[#102B24] p-8 text-white md:p-12"><div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><MessageCircle className="mb-6 text-[#C97855]" size={44}/><h2 className="font-serif text-4xl font-semibold md:text-5xl">{t.finalCta.title}</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">{t.finalCta.sub}</p></div><div className="shrink-0 space-y-4"><Button onClick={scrollToDemo} className="w-full bg-[#C97855] px-8 py-7 text-base hover:bg-[#B55336]">{t.finalCta.button}<ArrowRight className="ml-2" size={18}/></Button><div className="text-center text-sm text-white/70">{t.finalCta.contact}<br/>info@guestcase.eu</div></div></div></div></Container></section></main><footer className="border-t border-[#E8DED3] py-12"><Container><div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]"><div><Logo/><p className="mt-5 max-w-sm leading-7 text-[#596660]">{t.footer.text}</p><div className="mt-5 flex gap-3 text-[#66716D]"><Mail size={18}/> info@guestcase.eu</div></div><div className="grid grid-cols-2 gap-8 md:grid-cols-4">{[t.footer.product,t.footer.company,t.footer.resources,t.footer.legal].map((heading,index)=><div key={heading}><div className="mb-4 font-semibold text-[#172522]">{heading}</div><div className="space-y-3 text-sm text-[#596660]">{(index===0?['How it works','Features','Integrations','Security']:index===1?['About Food Solutions','Blog','Partners','Careers']:index===2?['Help Center','Guides','Case Studies','Webinars']:['Privacy','Terms','DPA','Cookies']).map(x=><div key={x}>{x}</div>)}</div></div>)}</div></div><div className="mt-10 border-t border-[#E8DED3] pt-6 text-sm leading-7 text-[#66716D]"><div>{t.footer.disclaimer}</div><div className="mt-3">© 2026 Food Solutions. All rights reserved. · EN | NL</div></div></Container></footer></div>;
}

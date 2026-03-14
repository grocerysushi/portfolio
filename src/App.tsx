import { ExternalLink, FileText, Github, Globe, Mail, Star, GitFork, Code2, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import saintDiscoveryQuizImage from './assets/saintdiscoveryquiz.png';
import theCatholicBriefImage from './assets/thecatholicbrief.png';

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
}

interface Project {
    title: string;
    description: string;
    url: string;
    image: string;
    tags: string[];
    repoName?: string;
}

interface Experience {
    role: string;
    company: string;
    period: string;
    desc: string;
}

const PROFILE = {
    name: 'Kyle Shaft',
    title: 'Customer Operations Agent',
    headline: 'Solving complex problems while putting people first.',
    about:
        'Solving complex operational problems and delivering improvements with measurable business impact.',
    email: 'shaftkyle1@gmail.com',
    githubUsername: import.meta.env.VITE_GITHUB_USERNAME || 'grocerysushi',
    resumeUrl: 'https://drive.google.com/file/d/1H3ux78b-pBDVJTbgUyvw5zyXcdUtQGVu/view?usp=sharing',
};

const PROJECTS: Project[] = [
    {
        title: 'Saint Discovery Quiz',
        description:
            'Interactive faith-based quiz experience designed for fast completion and clear engagement outcomes.',
        url: 'https://saintdiscoveryquiz.com',
        image: saintDiscoveryQuizImage,
        tags: [],
        repoName: 'Saint-Discovery',
    },
    {
        title: 'The Catholic Brief',
        description:
            'A content platform focused on concise Catholic resources and readable daily publishing workflows.',
        url: 'https://thecatholicbrief.com',
        image: theCatholicBriefImage,
        tags: [],
        repoName: 'catholic-word',
    },
];

const EXPERIENCE: Experience[] = [
    {
        role: 'Customer Operations Agent',
        company: 'Robinhood',
        period: 'November 2025 - Present; 40 hrs/week',
        desc: 'Provide high-empathy customer support in a fast-paced in-person environment, investigate complex issues, identify trends that may indicate product/system problems, escalate when needed, and adapt quickly as processes evolve. Experienced with text/email support, financial products, and Zendesk.',
    },
    {
        role: 'Customer Service Specialist',
        company: 'Adapt Health',
        period: 'February 2025 - November 2025; 40 hrs/week',
        desc: 'Handled inbound and outbound patient support in a fast-paced environment, verified referral information, created orders, scheduled equipment delivery, and educated patients on financial responsibilities.',
    },
    {
        role: 'Customer Service/Sales Associate',
        company: 'The Home Depot',
        period: 'June 2024 - February 2025; 40 hrs/week',
        desc: 'Provided fast, friendly assistance, assessed customer needs, recommended products for full projects, and supported closeout across the department while handling adjacent-area basics.',
    },
    {
        role: 'Tax Compliance Officer II',
        company: 'Comptroller of Public Accounts',
        period: 'November 2022 - June 2024; 40 hrs/week',
        desc: 'Managed records for tax collections and seized assets, prepared official forms/notices/reports, guided taxpayers through licensing and filing, performed compliance activities, and resolved taxpayer complaints in person and via telecommunication.',
    },
    {
        role: 'Client Banking Services',
        company: 'Charles Schwab',
        period: 'August 2021 - November 2022; 40 hrs/week',
        desc: 'Delivered client support for deposit accounts, online management, bill pay, money movement, mobile banking, and debit card services, including technical troubleshooting and issue resolution.',
    },
    {
        role: 'Care Coordination Assistant',
        company: "Children's Medical Center",
        period: 'June 2019 - April 2020; 40 hrs/week',
        desc: 'Supported care coordination by organizing home health services, arranging home medical equipment, scheduling appointments, and completing administrative tasks to improve continuity of care.',
    },
    {
        role: 'Hospital Corpsman Third Class',
        company: 'United States Navy',
        period: 'June 2013 - June 2018; 50 hrs/week',
        desc: 'Provided medical support across units and mission contexts while upholding high standards of care, readiness, and service delivery in both shore and afloat environments.',
    },
];

const SKILLS = [
    'Communication',
    'Compliance',
    'Investigation',
    'Empathy',
    'Troubleshooting',
    'Documentation',
    'Coordination',
    'Analysis',
    'Adaptability',
    'Customer-Service',
    'Problem-Solving',
    'Leadership',
];
const PINNED_REPOS = ['Saint-Discovery', 'catholic-word', 'countdown-timer'];
const CONTACT_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`;

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
        <div className="glass px-6 py-3 rounded-full flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#github" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#resume" className="hover:text-emerald-400 transition-colors">Resume</a>
        </div>
    </nav>
);

const Hero = () => (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl"
        >
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">{PROFILE.title}</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                {PROFILE.name}: <span className="gradient-text">{PROFILE.headline}</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">{PROFILE.about}</p>
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="#projects"
                    className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2"
                >
                    View Projects <ExternalLink size={18} />
                </a>
                <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass hover:bg-white/10 px-8 py-4 rounded-xl transition-all flex items-center gap-2"
                >
                    Contact Me <Mail size={18} />
                </a>
            </div>
        </motion.div>
    </section>
);

const GitHubSection = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setError(null);
                const requests = PINNED_REPOS.map(async (repoName) => {
                    const response = await fetch(`https://api.github.com/repos/${PROFILE.githubUsername}/${repoName}`);
                    if (!response.ok) {
                        throw new Error(`GitHub request failed for ${repoName} with status ${response.status}`);
                    }
                    return (await response.json()) as Repo;
                });
                const data = await Promise.all(requests);
                setRepos(data);
            } catch (fetchError) {
                console.error('Error fetching repos:', fetchError);
                setError('Could not load repositories right now.');
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="github" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-white/5 rounded-2xl">
                    <Github className="text-emerald-400" size={32} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">GitHub Repositories</h2>
                    <p className="text-zinc-500">Pinned repositories for @{PROFILE.githubUsername}</p>
                </div>
            </div>

            {error ? <p className="text-rose-400 mb-6">{error}</p> : null}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading
                    ? [...Array(3)].map((_, i) => (
                        <div key={i} className="h-48 rounded-2xl bg-white/5 animate-pulse border border-white/5" />
                    ))
                    : repos.map((repo) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="group p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-emerald-500/50 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <Code2 size={20} className="text-emerald-400" />
                                    <div className="flex items-center gap-3 text-xs text-zinc-500">
                                        <span className="flex items-center gap-1">
                                            <Star size={14} /> {repo.stargazers_count.toLocaleString()}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <GitFork size={14} /> {repo.forks_count.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{repo.name}</h3>
                                <p className="text-zinc-500 text-sm mb-4 min-h-10">{repo.description || 'No description provided.'}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/70">
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                {repo.language || 'Unspecified'}
                            </div>
                        </motion.a>
                    ))}
            </div>
        </section>
    );
};

const ProjectsSection = () => {
    const [repoLanguages, setRepoLanguages] = useState<Record<string, string[]>>({});

    useEffect(() => {
        const fetchRepoLanguages = async () => {
            const repoProjects = PROJECTS.filter((project) => project.repoName);
            try {
                const requests = repoProjects.map(async (project) => {
                    const response = await fetch(`https://api.github.com/repos/${PROFILE.githubUsername}/${project.repoName}/languages`);
                    if (!response.ok) {
                        throw new Error(`GitHub languages request failed for ${project.repoName} with status ${response.status}`);
                    }
                    const data = (await response.json()) as Record<string, number>;
                    return { repoName: project.repoName as string, languages: Object.keys(data) };
                });

                const results = await Promise.all(requests);
                const languageMap = results.reduce<Record<string, string[]>>((acc, result) => {
                    acc[result.repoName] = result.languages;
                    return acc;
                }, {});

                setRepoLanguages(languageMap);
            } catch (fetchError) {
                console.error('Error fetching repo languages:', fetchError);
            }
        };

        fetchRepoLanguages();
    }, []);

    return (
        <section id="projects" className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-white/5 rounded-2xl">
                        <Globe className="text-emerald-400" size={32} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Featured Projects</h2>
                        <p className="text-zinc-500">Recent web products I designed and shipped</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {PROJECTS.map((project, i) => {
                        const tags = project.repoName ? repoLanguages[project.repoName] || project.tags : project.tags;

                        return (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-3xl bg-brand-card border border-brand-border"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {tags.length > 0 ? (
                                            tags.map((tag) => (
                                                <span
                                                    key={`${project.title}-${tag}`}
                                                    className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-wider text-zinc-400 border border-white/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-wider text-zinc-500 border border-white/5">
                                                Language data unavailable
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:gap-3 transition-all"
                                    >
                                        Visit Project <ExternalLink size={18} />
                                    </a>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const ResumeSection = () => (
    <section id="resume" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
                <div className="sticky top-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-white/5 rounded-2xl">
                            <FileText className="text-emerald-400" size={32} />
                        </div>
                        <h2 className="text-3xl font-bold">Resume</h2>
                    </div>
                    <p className="text-zinc-400 mb-8 leading-relaxed">
                        Hands-on experience improving systems, workflows, and customer outcomes in fast-paced operational environments.
                    </p>
                    <a
                        href={PROFILE.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full glass hover:bg-white/10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                    >
                        Download Resume <FileText size={18} />
                    </a>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-12">
                <div>
                    <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-8">Experience</h3>
                    <div className="space-y-8">
                        {EXPERIENCE.map((exp) => (
                            <div key={`${exp.company}-${exp.role}`} className="relative pl-8 border-l border-white/10">
                                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <span className="text-xs text-zinc-500 font-mono mb-1 block">{exp.period}</span>
                                <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                                <p className="text-emerald-400/80 text-sm mb-3">{exp.company}</p>
                                <p className="text-zinc-400">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-8">Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {SKILLS.map((skill) => (
                            <div key={skill} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                                <Terminal size={16} className="text-emerald-400" />
                                <span className="text-sm font-medium">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind.</p>
    </footer>
);

export default function App() {
    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <GitHubSection />
            <ProjectsSection />
            <ResumeSection />
            <Footer />

            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
            </div>
        </div>
    );
}

export type ArticleBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Article = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  topic: string;
  dek: string;
  authors: string[];
  sourceUrl: string;
  coverImage?: { src: string; alt: string };
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "the-saaspocalypse-why-software-stocks-fell-and-what-it-means-for-how-we-pay-for-software",
    title: "The \"SaaSpocalypse\": Why software stocks fell and what it means for how we pay for software",
    date: "2026-02-28",
    dateLabel: "28 FEB 2026",
    topic: "Technology",
    dek: "In early February, software stocks sold off after AI agents showed they can finish whole tasks, not just chat. That reset how markets price per-seat SaaS.",
    authors: ["DEMALOGUE", "Jevan Ihsan"],
    sourceUrl: "https://dema-logue.beehiiv.com/p/the-saaspocalypse-why-software-stocks-fell-and-what-it-means-for-how-we-pay-for-software",
    coverImage: { src: "/articles/saas/cover.png", alt: "Cover image for The SaaSpocalypse article on DEMALOGUE" },
    body: [
      { type: "h2", text: "Why This Is Suddenly Everywhere" },
      { type: "p", text: "If your feed has been full of shaky stock charts and hot takes about AI \"agents,\" you're not sleeping in your dreams. In early February, software stocks around the world sold off hard after new AI features showed they can do entire tasks end-to-end, not just chat in a sidebar like ChatGPT. Global market wraps tied the move to an AI-led reset in expectations for enterprise software. In particular, coverage highlighted how Anthropic's update to its \"Cowork\" tools spooked investors by automating work that many software products monetize per human user." },
      { type: "p", text: "Some outlets even put the single-day damage near $300 billion as investors re-priced what SaaS is worth in an \"agentic\" world, where a digital helper can log in, read files, and finish jobs. And the weakness didn't end that day; roundups noted steep year-to-date declines across big names like Adobe, Salesforce, and ServiceNow as the month wore on." },
      { type: "h2", text: "What Actually Happened (A Quick Timeline)" },
      { type: "list", items: [
        "Feb 3-6: After Anthropic rolled out new agent plugins tied to its Claude \"Cowork\" product, software names fell in the U.S., Europe, and Asia, with headlines framing it as an AI-led disruption scare.",
        "Mid-February: Commentaries and investor notes kept pointing to the same pressure points. AI agents threaten to reduce human seats, so the math behind per-seat SaaS gets shakier in certain categories (think CRM, basic back-office workflows).",
        "Across the month: Analysts and reporters kept tallying the drawdowns, noting 25-30% year-to-date declines in several large software names despite continued product releases.",
      ] },
      { type: "p", text: "The through-line: the market tried to price, very quickly, what happens when the definition of a \"user\" changes." },
      { type: "h2", text: "The Big Idea: \"Seat Compression,\" Explained" },
      { type: "p", text: "For two decades, SaaS growth rode a straightforward logic: more people using the tool = more licenses sold. That's per-seat pricing in a nutshell. Now bring in AI agents: software that can plan steps, call tools, and complete tasks under your supervision. If a single agent lets one employee do what used to require five, a company may buy fewer seats. That fear even got a name in analyst notes: seat compression. Salesforce often shows up in these conversations as the \"classic CRM example,\" where investors worry that seats stop growing at the same pace once agents automate routine pipeline work." },
      { type: "p", text: "None of this means \"software is over.\" It shows how value is measured and billed was tied to human headcount, and agents broke that clean correlation. You can feel the anxiety in the way the sell-off spread across regions and categories in those first days." },
      { type: "h2", text: "No, It's Not the End of Software" },
      { type: "p", text: "Plenty of smart people pushed back on the doom narrative. Goldman Sachs' David Solomon called the reaction \"too broad,\" arguing the blanket panic didn't match the nuance of how AI will be adopted. JPMorgan research went further, calling the logic \"broken\": markets can't simultaneously believe AI will decimate software demand and that AI infrastructure spending won't pay off - those two beliefs cancel each other out." },
      { type: "p", text: "A more grounded take: this is a reset, not an extinction event. Software that adapts by embedding agents and rethinking pricing will stabilize; software that can't show clear outcomes will feel more pressure. That's why February felt so volatile. Stocks move faster than roadmaps, and it takes time for pricing and packaging to catch up." },
      { type: "h2", text: "What Changes Next: From Seats to Hybrids" },
      { type: "p", text: "The clean story is that we're shifting from pure per-seat to hybrid pricing. Expect combinations of:" },
      { type: "list", items: [
        "Seats, where human access still equals value",
        "Usage, where you pay for consumption (compute, API calls, messages, data processed)",
        "Outcomes, where you pay for results (a resolved ticket, a qualified lead, a completed review)",
      ] },
      { type: "p", text: "Bain's 2026 brief says per-seat isn't \"dead,\" but new models are gaining steam, especially as AI introduces background execution that doesn't map to a login. McKinsey reaches a similar conclusion: with AI turning software into an active performer (not just a tool), vendors need new telemetry and go-to-market motions to capture value beyond headcount. Hybrids are the practical bridge for 2026-2028." },
      { type: "p", text: "Zoom out and the trend is bigger than pricing. Deloitte's 2026 predictions argue that as AI agents spread across SaaS, products will look more like orchestrated services that learn and act across workflows - another reason the old \"user = value\" shortcut keeps breaking." },
      { type: "h2", text: "What It Means for You (Students, Teams, Builders)" },
      { type: "h3", text: "Students & early-career analysts" },
      { type: "p", text: "This is your sign to shift from listing tool names to showing outcomes. A short line like \"Automated weekly report prep (summarize PDFs -> update Excel tracker -> draft Slack recap), saving 3 hrs/week\" proves two things:" },
      { type: "list", items: [
        "You can design an agent-assisted workflow",
        "You know how to supervise it",
      ] },
      { type: "p", text: "Hiring managers increasingly expect fluency around agents, because that's where SaaS is headed over the next 12-24 months. Forecasts about agents reshaping SaaS are a recurring theme across 2026 industry outlooks." },
      { type: "h3", text: "Teams that buy software" },
      { type: "p", text: "Before renewal season, run a quick seat audit. Who logs in? What's shelfware? Which tasks are already agent-friendly? Use that baseline to negotiate usage/outcome pilots alongside your core seats. Pricing advisors and operator briefs suggest that hybrids are the near-term reality and that vendors are more open to experimentation during this transition. If underused licenses have ever burned you, this is your moment: procurement conversations are shifting your way." },
      { type: "h3", text: "Builders / Product managers" },
      { type: "list", items: [
        "Instrument outcomes (time-to-resolution, conversion lift, error reduction), not just usage. If your product ships an agent, prove it removes clicks and cycle time, not just that it \"chats.\"",
        "Pilot hybrid pricing instead of big-banging a model change. Bain's take: hybrids are winning because they're a practical middle ground for customers and sales teams - fewer shocks, more room to align price with delivered value.",
      ] },
      { type: "h2", text: "What to Watch Next" },
      { type: "p", text: "Listen to earnings calls for three words: \"seats,\" \"agents,\" \"pricing.\" They're breadcrumbs. When a vendor starts talking openly about agent attach rates or pilots for usage/outcome tiers, you're hearing how fast customers are moving." },
      { type: "h2", text: "Bottom Line" },
      { type: "p", text: "The February slump wasn't just a market mood swing; it was the first loud, public argument about how we measure software's value when work is increasingly done by agents, not only humans. The old per-seat still matters, but it can't carry the story alone. Expect hybrid pricing to be the default bridge as vendors prove outcomes and buyers insist on paying for what actually gets done." },
      { type: "p", text: "If you're a student, build a tiny agent workflow and put the outcome on your resume. If you're buying, run the seat audit and pilot usage/outcome terms. If you're building, measure what your agent really changes - and price to match. The \"SaaSpocalypse\" isn't the end of software; it's a nudge to rethink the metrics in an agentic era." },
    ],
  },
  {
    slug: "the-demathon-is-near-what-can-you-expect",
    title: "The Demathon Is Near! What Can You Expect?",
    date: "2026-02-28",
    dateLabel: "28 FEB 2026",
    topic: "Business",
    dek: "DEMA and the Design Hub are running DESIGNATHON, a hybrid of hackathon, design sprint, and case competition built around a high-fidelity prototype for Squirl Signs.",
    authors: ["DEMALOGUE", "Zainab Al-Zadjali"],
    sourceUrl: "https://dema-logue.beehiiv.com/p/the-demathon-is-near-what-can-you-expect",
    coverImage: { src: "/articles/demathon/cover.png", alt: "Cover image for The Demathon Is Near on DEMALOGUE" },
    body: [
      { type: "h2", text: "What Is DESIGNATHON?" },
      { type: "p", text: "When you think of Digital Enterprise Management, you likely assume it's all about business and tech. While that's half-true, the creativity can take you by surprise. DEMA's collaborative event with the Design Hub (TDH), the DESIGNATHON, is a hybrid between a hackathon, design sprint, and traditional case competition." },
      { type: "h2", text: "Who It's For" },
      { type: "p", text: "If you do not have experience competing in case competitions, this event is for you. Judging is based on creativity and effort in developing an innovative means to make real change. The competition is strong for those looking to gain experience in leadership, research, and design, and it is inclusive regardless of experience or background." },
      { type: "h2", text: "The Brief: Squirl Signs" },
      { type: "p", text: "Participants create a high-fidelity prototype for a UofT-based start-up, Squirl Signs. The youth-based fintech's objective is to deliver products that aid deaf and hard-of-hearing (HoH) individuals." },
      { type: "p", text: "Teams should design an app that lets deaf/HoH users create a profile and access features like translation screens and accessibility settings, with emphasis on user research and collaboration through roles like team lead, data analyst, and UX/UI designer." },
      { type: "h2", text: "Info Session and Support" },
      { type: "p", text: "TDH and DEMA ran an info session on February 11 with tips on creating an impactful product. Check the linktree on TDH's Instagram (@thed3signhub.utm) for more information." },
      { type: "h2", text: "Prizes and How to Join" },
      { type: "p", text: "The winning team has the chance to win $80 per member, as well as have their designs integrated into Squirl Signs' final product. If you prefer not to compete and instead support friends or make connections, you are welcome to sit in." },
      { type: "p", text: "The deadline to sign up is February 13, and submissions are due by the 26th at 11:50 pm. Presentations are on the 26th." },
    ],
  },
  {
    slug: "techtrack-2026-connecting-students-to-industry-through-experience-and-access",
    title: "TechTrack 2026: Connecting Students to Industry Through Experience and Access",
    date: "2026-02-28",
    dateLabel: "28 FEB 2026",
    topic: "AI Skills",
    dek: "Presented with ISACA Toronto Chapter and partner schools, TechTrack 2026 brought GTA students into industry conversations on cyber, cloud, AI, and early-career navigation.",
    authors: ["DEMALOGUE", "Zainab Al-Zadjali"],
    sourceUrl: "https://dema-logue.beehiiv.com/p/techtrack-2026-connecting-students-to-industry-through-experience-and-access",
    coverImage: { src: "/articles/techtrack/cover.png", alt: "Cover image for TechTrack 2026 on DEMALOGUE" },
    body: [
      { type: "p", text: "Over the past four years, TechTrack has been one of DEMA's core events dedicated to curating a space for students to connect with industry professionals and explore technology-focused career pathways. Presented by ISACA Toronto Chapter and hosted by the Digital Enterprise Management Association (DEMA) in collaboration with Seneca Polytechnic, Toronto Metropolitan University, and York University, TechTrack 2026 has grown from a small initiative into one of DEMA's largest programs, bringing together students from across the Greater Toronto Area to engage with industry perspectives, challenge entry-level stigma, and participate in cross-institutional conversations." },
      { type: "h2", text: "DEMA's Vision for TechTrack" },
      { type: "p", text: "In a pre-event interview with members of DEMA's external events team, Vaibhav Kaushal, External Director, described TechTrack as an extension of DEMA's broader purpose." },
      { type: "quote", text: "DEMA's mission is to bridge the gap between business and technology, and TechTrack reflects that in practice." },
      { type: "p", text: "The event focuses on areas where business and technology intersect, including cybersecurity, cloud engineering, AI and data analytics, IT auditing and governance. It intentionally brings together students from different academic environments to contribute to shared discussions shaped by varied curricula. Through conversations with professionals from a range of industries, students were exposed to the realities of these fields, from early uncertainty and preparation to long-term persistence." },
      { type: "image", src: "/articles/techtrack/audience.jpeg", alt: "Audience at TechTrack 2026 opening", caption: "TechTrack 2026 opening audience" },
      { type: "h2", text: "Industry Perspective: ISACA Toronto Chapter" },
      { type: "p", text: "The event opened with remarks from the ISACA Toronto Chapter, delivered by Belal Raifai, Academic Relations Director and Senior Manager at PwC Canada. He spoke about how ISACA's focus has evolved alongside the technology landscape, expanding beyond traditional IT audit into areas such as cloud computing, data analysis, AI, and other emerging fields." },
      { type: "quote", text: "ISACA today offers far more than IT auditing or governance. It covers cloud computing, data analysis, AI, and other emerging technologies." },
      { type: "image", src: "/articles/techtrack/opening.jpeg", alt: "Belal Raifai speaking at TechTrack 2026 opening", caption: "Belal Raifai leading the opening remarks" },
      { type: "p", text: "As the largest ISACA chapter in Canada, the Toronto Chapter highlighted the role industry organizations can play in helping students bridge academic learning with real-world expectations through events, certifications, and student-focused initiatives." },
      { type: "h2", text: "Panel Discussion: Experience and Early Career Navigation" },
      { type: "p", text: "Personal experiences, early career uncertainty, and the realities of entering a competitive job market shaped the panel discussion. Panelists reflected on navigating internships, developing skills beyond the classroom, and learning through trial and error." },
      { type: "p", text: "Murilo Pereira, who works in tech and cyber risk at Loblaw Companies Limited and previously held roles in cyber risk at PwC, spoke candidly about navigating early internships and limited choice." },
      { type: "quote", text: "I wouldn't say I had the luxury of choice all the time. Even early on, my first internship wasn't my first choice. It was just the only one I could get. Sometimes you have to take whatever's available, but make the most out of it, and think critically - how does this apply to my career? With a little bit more experience under your belt, that luxury of choice begins to open up. When your back is against the wall, that's when you begin to really hone in and do whatever's possible. You just have to go out there and do everything you can." },
      { type: "p", text: "Building on this perspective, Kensho Ando Heng, Head of AI at Coaching and Sales Institute, emphasized how adaptability and self-directed learning can reshape early career growth, particularly as new technologies change how skills are developed." },
      { type: "quote", text: "We are in a super learning industry now where AI can help teach anything and everything. Use it to your advantage. I've learned more in the past two years than I ever have. I hate math, I've learned math. I hate coding, I learned coding. All of this without a single human teaching." },
      { type: "p", text: "Taken together, the panel suggested that early career progress is shaped less by perfect choices and more by how students respond to constraints, adapt their learning, and take ownership of their growth." },
      { type: "image", src: "/articles/techtrack/panel.jpeg", alt: "TechTrack 2026 panel discussion", caption: "TechTrack 2026 panel discussion" },
      { type: "p", text: "During the open discussion, students raised questions about navigating uncertainty, particularly when opportunities feel limited. In response, Murilo emphasized the importance of reflection and adaptability." },
      { type: "quote", text: "Sometimes you have to take what's available, but the important part is thinking critically about how it applies to your career and how you can build from it." },
      { type: "h2", text: "From Discussion to Connection" },
      { type: "p", text: "Following the panel, the event transitioned into a networking segment where students approached industry professionals and organizers. In this more informal setting, attendees were able to ask specific questions, receive personalized advice, and reflect on how the panel's themes applied to their own academic and career paths." },
      { type: "h2", text: "Certifications and Financial Help" },
      { type: "p", text: "In a post-panel conversation, Belal Raifai expanded on how the ISACA Toronto Chapter works to make technology and cybersecurity more accessible to students, particularly given the perception that these fields are not entry-level friendly." },
      { type: "quote", text: "We offer events tailored for students, including networking events, panels, and case competitions, often in collaboration with academic institutions." },
      { type: "p", text: "He also addressed concerns around the cost of certifications and professional development." },
      { type: "quote", text: "If a student faces financial barriers, they can reach out to us directly and we can discuss how to make certifications more accessible." },
      { type: "quote", text: "We're always looking for ways to collaborate and give back, especially to students and clubs that contribute to the community." },
      { type: "p", text: "Belal noted that students can contact the chapter through ISACA's general email, connect through the ISACA Toronto Chapter website, or reach out directly via LinkedIn." },
      { type: "p", text: "For first-year attendees, the impact of TechTrack showed up in practical takeaways. \"Beyond technical knowledge, connections are one of the most important things you need to get internships,\" shared a first-year student attendee. Another student emphasized that clear communication and understanding the people you work with are just as important as technical skills." },
      { type: "h2", text: "Looking Ahead" },
      { type: "p", text: "TechTrack 2026 concluded with an emphasis on continuity rather than closure. Through collaboration between DEMA and ISACA Toronto Chapter, the event created space for students to engage with industry perspectives, ask questions, and build connections across disciplines and institutions." },
      { type: "p", text: "As TechTrack continues to grow, its purpose remains consistent: to support students navigating technology-focused careers through shared knowledge, accessible resources, and community-driven engagement." },
      { type: "h2", text: "Acknowledgements & Resources" },
      { type: "p", text: "TechTrack 2026 was made possible through collaboration between DEMA and ISACA Toronto Chapter, with support from Seneca Polytechnic, Toronto Metropolitan University, and York University." },
      { type: "p", text: "Students who attended TechTrack 2026 are also eligible to redeem an ISACA Toronto Chapter student membership, with discounted access to future events, professional development opportunities, and student-focused resources." },
    ],
  },
  {
    slug: "the-gamification-of-everything",
    title: "The 'Gamification' of Everything",
    date: "2026-02-28",
    dateLabel: "28 FEB 2026",
    topic: "Digital Media",
    dek: "Points, streaks, levels, and leaderboards now show up in study apps, fitness trackers, and campus recycling bins. Here is what that design pattern does, and where it goes wrong.",
    authors: ["DEMALOGUE", "Sabine Jalil"],
    sourceUrl: "https://dema-logue.beehiiv.com/p/the-gamification-of-everything",
    coverImage: { src: "/articles/gamification/cover.png", alt: "Cover image for The Gamification of Everything on DEMALOGUE" },
    body: [
      { type: "h2", text: "Introduction" },
      { type: "p", text: "Everywhere you look, it seems that game features have snuck into everything - from rewards at your go-to coffee shop, to the steps tracker apps on your phone or FitBit." },
      { type: "p", text: "'Gamification' refers to the application of game design features to 'non-game' activities - anything from educational tools to healthcare software. Common aspects include points, streaks, levels, and leaderboards. If you've ever used a tool like Duolingo, Khan Academy, or any kind of fitness app, you're already familiar with these tools. Even everyday features such as likes on Instagram, badges on Reddit, or heart rate and sleep tracking on a smartwatch are examples of 'gamified' features (Gardiner, 2024)." },
      { type: "p", text: "Gamification is a common feature of UX design: a way of keeping users engaged on a platform and motivated to continue a task. Take Flora, a study app that turns daily tasks into something more engaging by rewarding you with a new 'plant' for your garden after each study session. It also includes a social aspect where you can add friends, further boosting motivation through a competitive environment similar to a multiplayer video game. Those who have studied psychology may recognize operant conditioning here. Gamification uses rewards to reinforce certain behaviors (Gardiner, 2024)." },
      { type: "h2", text: "Why Gamification?" },
      { type: "p", text: "Using these strategies has become a must-have for businesses when it comes to keeping customers engaged. The rollout of rewards programs over the last decade and a half is one customary example of connecting average purchases to a process that feels rewarding, like in games." },
      { type: "p", text: "Research also indicates that gamification can open opportunities outside smartphones or computers. Integrating gamification features into urban environments is one development in motion - think of the robot screens on recycling cans across campus - with potential to encourage participation in intensive tasks and even combat burnout (Sharma et al, 2024)." },
      { type: "p", text: "This all begs the question: how can you integrate a 'gamified' experience into your daily life?" },
      { type: "h2", text: "How Can You Use It?" },
      { type: "p", text: "One key benefit of gamification is that it motivates you the way your favorite video game keeps you hooked. Using that same psychology to hit a daily steps goal, or to complete an hour of studying while holding friends accountable, goes a long way in keeping you productive and healthy. Research has found that motivation from gamified platforms and habits can support participation in healthy activities (Johnson et al, 2016)." },
      { type: "p", text: "Setting a daily goal is the first step. Maintaining a 'streak' is a common feature of gamified platforms and a helpful way to stay motivated. One infamous example is Duolingo's streak reminders. Setting a goal and creating a timeline to progress toward it is a strong first step." },
      { type: "image", src: "/articles/gamification/inline.png", alt: "Illustration related to gamified habits and streaks", caption: "From DEMALOGUE" },
      { type: "p", text: "It's also important to track your own motivational patterns and connect them to habits you already have. Something simple like rewarding yourself with a stroll after you finish an hour of studying is one way to incorporate gamified motivation into a habit." },
      { type: "p", text: "Gamification also has potential harms. Those who survived CCT109 may recall 'dark patterns' in media technologies that keep you returning even when they promote negative behaviors. One example is unhealthy buying habits tied to rewards programs, where you feel encouraged to buy the next product for points even when you don't need it. Similar patterns show up in gambling platforms (Liberty, 2025). Gamification can also promote comparison to others in ways that lower self-esteem rather than boost it (Almeida et al, 2025)." },
      { type: "p", text: "Keeping your own limits in mind matters. Poorly designed gamification won't help and may become exhausting quickly (Liberty, 2025). Set a healthy mindset around gamified behaviors so the same design features that keep users engaged can support consistent progress toward goals." },
      { type: "h2", text: "References" },
      { type: "p", text: "Sharma, W., Lim, W. M., Kumar, S., Verma, A., & Kumra, R. (2024). Game on! A state-of-the-art overview of doing business with gamification. Technological Forecasting and Social Change, 198, 122988. https://doi.org/10.1016/j.techfore.2023.122988" },
      { type: "p", text: "Johnson, D., Deterding, S., Kuhn, K. A., Staneva, A., Stoyanov, S., & Hides, L. (2016). Gamification for health and wellbeing: A systematic review of the literature. Internet interventions, 6, 89-106. https://doi.org/10.1016/j.invent.2016.10.002" },
      { type: "p", text: "Almeida, C., Kalinowski, M., Uchoa, A., & Feijo, B. (2023). Negative effects of gamification in education software: Systematic mapping and practitioner perceptions. Information and Software Technology, 156, 107142. https://doi.org/10.1016/j.infsof.2022.107142" },
    ],
  },
  {
    slug: "which-jobs-ai-is-actually-automating-and-which-it-isn-t",
    title: "Which Jobs AI is Actually Automating (and which it isn't)",
    date: "2026-02-28",
    dateLabel: "28 FEB 2026",
    topic: "Artificial Intelligence",
    dek: "The real story is not mass unemployment. It is which tasks AI already handles, which roles still need human judgment, and how work is being reshaped.",
    authors: ["DEMALOGUE", "Zainab Al-Zadjali"],
    sourceUrl: "https://dema-logue.beehiiv.com/p/which-jobs-ai-is-actually-automating-and-which-it-isn-t",
    coverImage: { src: "/articles/ai-jobs/cover.png", alt: "Cover image for Which Jobs AI is Actually Automating on DEMALOGUE" },
    body: [
      { type: "h2", text: "The Reality Check" },
      { type: "p", text: "Many headlines invoke fear with the same warning: \"Artificial Intelligence Is Taking Your Job.\"" },
      { type: "p", text: "In most offices today, you will find humans still working, just differently. The real story is not mass unemployment; it is about which tasks are being automated and which tasks humans can better focus on. AI is not simply stealing jobs; it is making some tasks easier so people can spend more time on work that provides value." },
      { type: "p", text: "Following the boom of AI development, there is now clearer data on what jobs are actually being automated." },
      { type: "h2", text: "Jobs AI Has Already Automated" },
      { type: "p", text: "The wave of automation has already begun. Jobs based on pattern recognition, simple decision-making, and repetitive tasks are vulnerable to AI displacement (Romford, 2025). Bookkeepers now compete with accounting software, retail cashiers are being replaced by self-checkout kiosks, and warehouse workers compete against robotic arms and autonomous forklifts that handle inventory with greater precision (Romford, 2025). Tasks that are heavily rules-based or administrative are increasingly handled by AI systems embedded into everyday tools, leading to fewer entry-level roles and higher expectations for human judgment and oversight." },
      { type: "image", src: "/articles/ai-jobs/automated.jpeg", alt: "Illustration of roles affected by automation", caption: "Camoin Associates, 2024" },
      { type: "p", text: "The reasons are straightforward: companies use AI to cut costs, meet speed demands, and allow for constant service. AI can complete these tasks with more accuracy, efficiency, and speed (Romford, 2025). The automation wave also extends beyond the obvious targets. Drivers are seeing roles change as autonomous vehicles advance, with Uber collaborating with companies like Waymo and Aurora. Financial traders are being outpaced by AI systems that predict trends faster, and travel advisors have been displaced by AI-powered platforms that personalize recommendations from search history (Urwin, 2026)." },
      { type: "p", text: "The scale can feel overwhelming: generative AI is predicted to automate 57 percent of work hours in the United States (Yee et al., n.d.). What these jobs share is a performance advantage: consistency, lower hiring costs while maintaining accuracy, and computer vision that lets robots navigate complex environments (Urwin, 2026)." },
      { type: "h2", text: "Jobs AI Can't Touch (And What They Have In Common)" },
      { type: "p", text: "While AI has made significant strides, certain professions remain firmly in human hands. Technology roles like data scientists, cybersecurity engineers, machine learning engineers, and AI operations managers continue to thrive. Outside technology, mental health specialists, teachers and professors, registered nurses, paramedics, civil engineers, project managers, surgeons, artists, and musicians share something AI cannot replicate: critical thinking, personal judgment, and emotional connection (Romford, 2025)." },
      { type: "p", text: "These positions demand context, trust, ethics, and human connection - areas AI still struggles with. Roles requiring problem-solving, leadership, and relationship management continue to matter in healthcare, education, and the creative arts (Romford, 2025)." },
      { type: "h2", text: "The Real Pattern: Tasks vs. Jobs" },
      { type: "p", text: "The conversation around AI and employment has been dominated by fear of mass unemployment, but the reality is more nuanced. AI may have replaced work, but not always the workers (Romford, 2025). Many roles still exist; they just look different. Jobs that once required full-time staff now often need fewer people overseeing AI-powered workflows. One customer support agent may supervise multiple AI assistants instead of handling every request manually." },
      { type: "p", text: "Employment declines are concentrated where AI is more likely to automate rather than augment human labour (Urwin, 2026). That mirrors historical shifts like the Industrial Revolution, when human work was not eliminated so much as changed, and many new jobs were created." },
      { type: "image", src: "/articles/ai-jobs/pattern.jpeg", alt: "Diagram on tasks versus jobs in an AI economy", caption: "McClintock, 2023" },
      { type: "p", text: "The World Economic Forum projects a net increase of 170 million new jobs by 2030 (Urwin, 2026), many created by AI's expansion. New roles like AI ethics specialist, AI literacy trainer, health technology implementation specialist, and prompt engineer are already emerging. AI is not solely a job eliminator, but a job transformer (Romford, 2025)." },
      { type: "p", text: "To be successful, develop skills AI cannot replicate: creativity, empathy, strategic thinking, and the ability to navigate complex human situations. Ray Dalio argues that the economy depends on the balance between AI's ability and human potential; to influence the future, prepare now (Kelly, 2025). The future of work is not humans versus machines. It is humans working smarter with machines." },
      { type: "h2", text: "References" },
      { type: "p", text: "Yee, L., Madgavkar, A., Smit, S., Krivkovich, A., Chui, M., Jesus Ramirez, M., & Castresana, D. (n.d.). Agents, Robots, and US: Skill partnerships in the age of AI. McKinsey Global Institute. https://www.mckinsey.com/mgi/our-research/agents-robots-and-us-skill-partnerships-in-the-age-of-ai" },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticle() {
  return articles[0];
}

export function getIndexArticles() {
  return articles.slice(1);
}

import PlaybookLayout, { DemoLabel, Note, P, Prompt } from "@/components/playbooks/PlaybookLayout";

const PlaybookFound = () => (
  <PlaybookLayout
    metaTitle="Show up when customers ask AI instead of Google | Ardent Studio"
    metaDescription="More people now ask ChatGPT who to hire the way they used to search. Find out what it says about your business today, then give it clearer answers to work with."
    crumb="Getting found"
    title={<>Show up when customers <span className="text-primary">ask AI</span> instead of Google.</>}
    intro="More people now ask ChatGPT who to hire the way they used to search. Find out what it says about your business today, then give it clearer answers to work with."
    chips={["1 hour", "Needs access to your website", "Check back monthly"]}
    demo={{
      eyebrow: "See the difference",
      heading: "Two ways to say the same thing on a website.",
      tabA: "Hard for AI to use",
      tabB: "Easy for AI to use",
      leftLabel: "A customer asks an AI tool",
      left: "\"Who repaints kitchen cabinets near me, and how long does it take?\"",
      a: (
        <>
          <DemoLabel>On the website</DemoLabel><p className="mt-2">"We are a full-service, family-owned company passionate about quality and committed to excellence in every project."</p><p className="mt-3 text-[14px] text-label-text">Nothing here answers the question, so there is nothing for the tool to repeat.</p>
        </>
      ),
      b: (
        <>
          <DemoLabel>On the website</DemoLabel><p className="mt-2">"<strong>Do you repaint kitchen cabinets?</strong> Yes. We repaint kitchen cabinets across Palm Beach County. Most kitchens take four to five days, and we quote after a 20-minute visit."</p><p className="mt-3 text-[14px] text-label-text">It has the question, a direct answer, a place and a number. A tool can quote this.</p>
        </>
      ),
    }}
    steps={[
    {
      label: "Step 1 / 10 min",
      title: "Ask three AI tools about your business",
      nav: "Ask the AI tools",
      check: "Done, I have my baseline",
      body: (
        <>
          <P>Use any three of ChatGPT, Claude, Gemini and Perplexity, with web search switched on. Use a temporary or incognito chat so the answer is not shaped by what the tool remembers about you.</P>
          <Prompt>{"Who are the best [your trade] in [your town]? List them and say why you chose each one."}</Prompt>
          <Prompt>{"What do you know about [your business name] in [your town]? Tell me what they do, where they work and how to contact them."}</Prompt>
          <P>Write down three things: whether you were named, whether what it said about you was right, and who was named instead.</P>
        </>
      ),
    },
    {
      label: "Step 2 / 10 min",
      title: "List the ten questions customers ask most",
      nav: "Ten questions",
      check: "Done, ten questions listed",
      body: (
        <>
          <P>Your inbox and your phone already know these. Paste in a batch of customer emails with the names removed.</P>
          <Prompt>{"Here are emails customers have sent me, with names removed: [paste them]. List the ten questions they ask most often, in their own words."}</Prompt>
        </>
      ),
    },
    {
      label: "Step 3 / 25 min",
      title: "Answer each one on your website",
      nav: "Answer on your site",
      check: "Done, answers are on the site",
      body: (
        <>
          <P>Put each question on your site as a heading and answer it in the first sentence. State plain facts: what you do, where, how long it takes, how you quote. An AI tool can only repeat what it can read, so keep these answers as normal text on the page, not inside an image, a PDF or a form.</P>
          <Prompt>{"Using my business brief, draft a short answer to each of these ten questions for my website. Start each answer with a direct yes, no or number. Two to four sentences each. Write [CHECK] wherever you are unsure of a fact."}</Prompt>
          <P>Replace every [CHECK] with the real fact before anything goes on the site.</P>
        </>
      ),
    },
    {
      label: "Step 4 / 10 min",
      title: "Make your details match everywhere",
      nav: "Match your details",
      check: "Done, details match",
      body: (
        <>
          <P>Check your business name, service area, hours and list of services on your website, your Google Business Profile, your Facebook page and any directory you are listed in. Fix anything that disagrees. Conflicting details give an AI tool a reason to leave you out or get you wrong.</P>
          <P>When a happy customer offers a review, ask them to mention the job you did and the town. That gives the tools one more plain statement of what you do and where.</P>
        </>
      ),
    },
    {
      label: "Step 5 / 5 min",
      title: "Ask again next month",
      nav: "Ask again monthly",
      check: "Done, reminder is set",
      body: (
        <>
          <P>Put a monthly reminder in your calendar to repeat step 1 with the same two prompts and compare the answers with your notes.</P>
          <Note><strong>A plain warning:</strong> this can take weeks to show up, and nobody can promise you a mention. That includes us. What this playbook does is remove the reasons you would be left out.</Note>
        </>
      ),
    },
    ]}
    doneMessage="Done. Check again in a month."
    next={{ href: "/playbooks/first-tool", label: "Next: Build your first small tool without code" }}
  />
);

export default PlaybookFound;

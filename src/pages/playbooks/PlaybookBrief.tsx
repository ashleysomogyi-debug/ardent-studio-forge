import PlaybookLayout, { Boxes, DemoLabel, Note, P, Prompt, ToolTabs } from "@/components/playbooks/PlaybookLayout";

const PlaybookBrief = () => (
  <PlaybookLayout
    metaTitle="Stop re-explaining your business to AI | Ardent Studio"
    metaDescription="A new chat knows very little about what you sell, who buys it or how you talk, so it guesses. This playbook fixes that with one page and about half an hour."
    crumb="Start here"
    title={<>Stop re-explaining your business to <span className="text-primary">AI.</span></>}
    intro="A new chat knows very little about what you sell, who buys it or how you talk, so it guesses. This playbook fixes that with one page and about half an hour."
    chips={["30 minutes", "ChatGPT or Claude", "No technical skill needed"]}
    demo={{
      eyebrow: "See the difference",
      heading: "Same customer question, two answers.",
      tabA: "Without a brief",
      tabB: "With a brief",
      leftLabel: "Customer asks",
      left: "\"Hi, do you repaint kitchen cabinets, and roughly what does it cost?\"",
      a: (
        <>
          <DemoLabel>AI drafts</DemoLabel><p className="mt-2">"Thank you for reaching out! We offer a wide range of high-quality painting services tailored to your needs. Pricing can vary depending on several factors. Please let us know more about your project and we would be happy to assist."</p><p className="mt-3 text-[14px] text-label-text">Polite, and it could have come from any painter in the country.</p>
        </>
      ),
      b: (
        <>
          <DemoLabel>AI drafts</DemoLabel><p className="mt-2">"Hi Dana, yes, cabinets are most of what we do. We quote after a 20-minute visit because the wood and the finish change the price. Which day suits you this week? Marco"</p><p className="mt-3 text-[14px] text-label-text">Same AI. The only change is that it read one page about the business first, so it knows what the business does, how it quotes and how the owner signs off.</p>
        </>
      ),
    }}
    steps={[
    {
      label: "Step 1 / 5 min",
      title: "Run a before test",
      nav: "Run a before test",
      check: "Done, I saved the reply",
      body: (
        <>
          <P>Pick something you did this week, like replying to a new inquiry. Open a brand-new chat, paste in the customer's message without their surname or contact details, and ask for a reply. Add nothing else.</P>
          <P>If your AI remembers past chats, use a temporary chat in ChatGPT or an incognito chat in Claude for this test. Otherwise what it already knows about you will blur the comparison.</P>
          <P>Save what comes back. You will compare it in step 5, and the gap is usually obvious.</P>
        </>
      ),
    },
    {
      label: "Step 2 / 10 min",
      title: "Write your one-page business brief",
      nav: "Write your brief",
      check: "Done, I have my brief",
      body: (
        <>
          <P>You do not have to write it yourself. Let the AI interview you, then have it write the page. Read it once and fix anything it got wrong, then save it as a document. A good brief covers five things.</P>
          <Boxes items={[["What you sell", null], ["Who buys it", null], ["What they ask", null], ["How you quote", null], ["What you never say", null]]} />
          <Prompt>{"Interview me so you can write a one-page brief about my business. Ask no more than ten questions, one at a time, and wait for my answer before asking the next. Cover my business name and where I work, what I sell, who buys it, the questions customers ask most, how I quote, and anything I never want said on my behalf. When we are done, write the brief in plain English in under 400 words."}</Prompt>
          <Note><strong>Shortcut for Claude users:</strong> the free Business Brief Builder skill runs this interview for you. <a href="/playbooks#downloads">Get it with the downloads.</a></Note>
        </>
      ),
    },
    {
      label: "Step 3 / 5 min",
      title: "Show it how you write",
      nav: "Show it how you write",
      check: "Done, my voice notes are in the brief",
      body: (
        <>
          <P>Find three things you wrote yourself that got a good response. Emails to customers work best. Take out customer names, paste them in with the prompt below, and add the five bullet points it gives you to the bottom of your brief.</P>
          <Prompt>{"Here are three things I wrote. Describe how I write in five short bullet points I can reuse: sentence length, tone, words I use, words I avoid, and how I sign off."}</Prompt>
        </>
      ),
    },
    {
      label: "Step 4 / 5 min",
      title: "Save it where every chat can see it",
      nav: "Save it",
      check: "Done, it is saved",
      body: (
        <>
          <P>A brief you have to paste in every time will be forgotten by Friday. Projects are included on the free plans of both Claude and ChatGPT. Pick your tool.</P>
          <ToolTabs options={[
            { label: "Claude", body: <>Open Projects and create a new project named after your business. Inside it, choose "Set project instructions", paste in your whole brief and save. Start your work chats from inside that project.</> },
            { label: "ChatGPT", body: <>Choose "New project" in the sidebar and name it after your business. Open the project's instructions, paste in your whole brief and save. Start your work chats from inside that project.</> },
            { label: "Something else", body: <>Save the brief as a document on your desktop. Attach it or paste it in at the start of each new chat, before you ask for anything.</> },
          ]} />
        </>
      ),
    },
    {
      label: "Step 5 / 5 min",
      title: "Run the test again",
      nav: "Run the test again",
      check: "Done, I compared them",
      body: (
        <>
          <P>Same customer message, same request, this time in a new chat inside your project, or with your brief pasted in first if you use another tool. Put the two replies side by side.</P>
          <P>If the new one still misses, work out what the AI did not know, add that line to the brief in your project instructions and save. The brief gets better every time you correct it.</P>
        </>
      ),
    },
    ]}
    doneMessage="All five done. Your AI now knows who it works for."
    next={{ href: "/playbooks/sound-like-you", label: "Next: Make AI drafts sound like you wrote them" }}
  />
);

export default PlaybookBrief;

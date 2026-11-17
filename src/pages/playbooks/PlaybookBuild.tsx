import PlaybookLayout, { Boxes, DemoLabel, Note, P, Prompt } from "@/components/playbooks/PlaybookLayout";

const PlaybookBuild = () => (
  <PlaybookLayout
    metaTitle="Build your first small tool without code | Ardent Studio Playbooks"
    metaDescription="A quote calculator, an intake checklist, a job sheet your team can open on a phone. You describe it in plain English and the AI builds it. This playbook also tells you where the do-it-yourself route stops being a good idea."
    crumb="Building"
    title={<>Build your first small tool <span className="text-primary">without code.</span></>}
    intro="A quote calculator, an intake checklist, a job sheet your team can open on a phone. You describe it in plain English and the AI builds it. This playbook also tells you where the do-it-yourself route stops being a good idea."
    chips={["One afternoon", "Claude, ChatGPT or Lovable", "No code"]}
    demo={{
      eyebrow: "See the difference",
      heading: "What you ask for decides what you get.",
      tabA: "Vague request",
      tabB: "One-page plan",
      a: (
        <>
          <DemoLabel>What most people type</DemoLabel><p className="mt-2">"Make me a quote calculator."</p><p className="mt-3 text-[14px] text-label-text">The AI has to guess what you sell, who uses it and what a right answer looks like.</p>
        </>
      ),
      b: (
        <>
          <DemoLabel>A plan it can build from</DemoLabel><ul className="mt-2 list-disc pl-5"><li><strong>What it is:</strong> a quote calculator for cabinet repainting.</li><li><strong>Who uses it:</strong> me and Sam, on our phones.</li><li><strong>Must do:</strong> take the number of doors and drawers and the finish, add travel over 20 miles, show a price range.</li><li><strong>Must never do:</strong> store customer names or show a price to a customer.</li><li><strong>Done when:</strong> it matches my last five real quotes within 10 percent.</li></ul>
        </>
      ),
    }}
    steps={[
    {
      label: "Step 1 / 15 min",
      title: "Check whether you already pay for it",
      nav: "Check what you have",
      check: "Done, building is the right call",
      body: (
        <>
          <P>The cheapest tool is the one you already have. Ask before you build.</P>
          <Prompt>{"I want a tool that [what it should do]. I already pay for [list your software]. Can any of these do it? If not, is there a low-cost product that does it? Tell me before I build my own."}</Prompt>
          <P>Build your own when the job is simple, only your team will use it, and it does not need to hold customer details.</P>
        </>
      ),
    },
    {
      label: "Step 2 / 30 min",
      title: "Write a one-page plan",
      nav: "Write the plan",
      check: "Done, I have a plan",
      body: (
        <>
          <P>The plan matters more than the tool you build with. A clear plan gets you a working tool in an afternoon, and a vague one gets you a week of going back and forth. Cover five things.</P>
          <Boxes items={[["What it is", null], ["Who uses it", null], ["Must do", null], ["Must never do", null], ["Done when", null]]} />
          <Prompt>{"Interview me to write a one-page plan for a small tool my team will use. Ask no more than eight questions, one at a time. Cover what it is, who uses it and on what device, what it must do, what it must never do, and how I will know it works. Then write the plan."}</Prompt>
        </>
      ),
    },
    {
      label: "Step 3 / 60 min",
      title: "Build it by describing it",
      nav: "Build it",
      check: "Done, a first version works",
      body: (
        <>
          <P>Claude can build a small working tool right in the chat and show it beside the conversation. ChatGPT can do the same in its canvas. Lovable builds a full web app with its own link. Any of them will do for a first tool.</P>
          <Prompt>{"Here is my plan: [paste the plan]. Build the simplest working version as a single page I can open in a browser. Ask me before adding anything that is not in the plan."}</Prompt>
          <P>Change one thing at a time. Say what you saw and what you expected, for example "the total ignores the travel charge, it should add it for anything over 20 miles".</P>
        </>
      ),
    },
    {
      label: "Step 4 / 30 min",
      title: "Test it with five real examples",
      nav: "Test it",
      check: "Done, five out of five",
      body: (
        <>
          <P>Take five real jobs from last week and run them through the tool. Compare each result with what you actually did. Fix what is off, one problem at a time, and run all five again after each fix.</P>
        </>
      ),
    },
    {
      label: "Step 5 / 15 min",
      title: "Know where to stop",
      nav: "Know the limits",
      check: "Done, and I know the limits",
      body: (
        <>
          <P>Keep your first tool away from these four things.</P>
          <Boxes items={[["Customer details", "Names, addresses, phone numbers."], ["Payments", "Cards, invoices, bank details."], ["Logins", "Anything with accounts and passwords."], ["Customer-facing use", "Anything a customer would use directly."]]} />
          <Note><strong>When to get help:</strong> if the tool needs any of those four, or needs to connect to your booking, accounting or customer system, it has outgrown do-it-yourself. That is the kind of build we do at a fixed price in two to four weeks. <a href="https://calendly.com/asomogyi-ardentstudio/30min" target="_blank" rel="noopener noreferrer">Book a free 15-minute call.</a></Note>
        </>
      ),
    },
    ]}
    doneMessage="Done. You built a tool."
    next={{ href: "/playbooks", label: "Back to all playbooks" }}
  />
);

export default PlaybookBuild;

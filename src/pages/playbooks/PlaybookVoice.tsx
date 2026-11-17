import PlaybookLayout, { Boxes, DemoLabel, Note, P, Prompt } from "@/components/playbooks/PlaybookLayout";

const PlaybookVoice = () => (
  <PlaybookLayout
    metaTitle="Make AI drafts sound like you wrote them | Ardent Studio Playbooks"
    metaDescription="Customers can often tell when a message came straight out of a chatbot. These six questions take about five minutes a draft and keep the personal touch that makes people buy from a small business."
    crumb="Writing"
    title={<>Make AI drafts sound like <span className="text-primary">you wrote them.</span></>}
    intro="Customers can often tell when a message came straight out of a chatbot. These six questions take about five minutes a draft and keep the personal touch that makes people buy from a small business."
    chips={["5 minutes a draft", "Any AI", "Best after playbook one"]}
    demo={{
      eyebrow: "See the difference",
      heading: "Same late order, two emails.",
      tabA: "AI first draft",
      tabB: "After the six questions",
      leftLabel: "The job",
      left: "Tell a customer their order is two days late.",
      a: (
        <>
          <DemoLabel>AI first draft</DemoLabel><p className="mt-2">"Dear Valued Customer, I hope this message finds you well. We sincerely apologize for any inconvenience this may have caused. Rest assured, we are working diligently to resolve the matter. Thank you for your patience and understanding."</p><p className="mt-3 text-[14px] text-label-text">It names no order, no date and no person.</p>
        </>
      ),
      b: (
        <>
          <DemoLabel>After the six questions</DemoLabel><p className="mt-2">"Hi Priya, your order is two days late and that is on us. The frames reached our shop this morning, so yours ships Thursday and should be with you Monday. I have taken the delivery charge off your bill. Sam"</p><p className="mt-3 text-[14px] text-label-text">It is shorter, every fact was checked by the owner, and it is signed by a person.</p>
        </>
      ),
    }}
    steps={[
    {
      label: "Question 1 of 6",
      title: "Could you explain it without the screen?",
      nav: "Explain it",
      check: "Yes, I can explain it",
      body: (
        <>
          <P>Read the draft once, look away, and say the main point out loud in one sentence. If you cannot, the customer will not get it either.</P>
          <P>If part of it is fuzzy, ask the AI to explain that part in plain English, or cut it. Sending something you do not fully understand is how wrong promises get made.</P>
        </>
      ),
    },
    {
      label: "Question 2 of 6",
      title: "Did you check every price, date and name?",
      nav: "Check the facts",
      check: "Yes, every fact is checked",
      body: (
        <>
          <P>When an AI is missing a fact it often fills the gap with something that sounds right. Check each one against your own records. Asking the AI whether it is sure does not count as checking.</P>
          <Prompt>{"List every fact in this draft that I should check before sending: names, prices, dates, times, quantities and promises. Do not tell me whether they are correct."}</Prompt>
        </>
      ),
    },
    {
      label: "Question 3 of 6",
      title: "Is there one detail only you would know?",
      nav: "Add your detail",
      check: "Yes, I added one",
      body: (
        <>
          <P>The detail can be something you noticed on site, something they mentioned last time, or the name of their dog. One real detail tells the customer a person wrote this.</P>
          <P>Add it yourself. If you ask the AI to add a personal touch, it will invent one.</P>
        </>
      ),
    },
    {
      label: "Question 4 of 6",
      title: "Would you say it out loud that way?",
      nav: "Say it out loud",
      check: "Yes, it sounds like me",
      body: (
        <>
          <P>Read it aloud. Anything you would never say to a customer on the phone comes out. These are the usual offenders.</P>
          <Boxes items={[["\"I hope this finds you well\"", null], ["\"Rest assured\"", null], ["\"Do not hesitate to reach out\"", null], ["\"Valued customer\"", null], ["Three adjectives in a row", null]]} />
          <Prompt>{"Rewrite this the way I would say it to the customer on the phone. Keep every fact. Use the voice notes in my business brief. Do not open with a line about hoping they are well."}</Prompt>
        </>
      ),
    },
    {
      label: "Question 5 of 6",
      title: "Did you cut what the reader does not need?",
      nav: "Cut it",
      check: "Yes, it is shorter",
      body: (
        <>
          <P>AI drafts run long. Most can lose a third and get better. Look for the sentence that repeats the one before it and the closing line that restates the whole message.</P>
          <Prompt>{"Cut this by a third without losing any fact or the next step I am asking for."}</Prompt>
        </>
      ),
    },
    {
      label: "Question 6 of 6",
      title: "Would you sign your name under it?",
      nav: "Sign it",
      check: "Yes, I would sign it",
      body: (
        <>
          <P>This is the last check. If you hesitate, find the line that makes you hesitate and fix that line. Then send it from your own email, with your own name.</P>
          <Note><strong>Shortcut for Claude users:</strong> the free Sounds Like Me skill runs questions 2, 4 and 5 for you and marks the lines that read like a chatbot. <a href="/playbooks#downloads">Get it with the downloads.</a></Note>
        </>
      ),
    },
    ]}
    doneMessage="Six yeses. Send it."
    next={{ href: "/playbooks/one-task", label: "Next: Find the one task worth handing to AI" }}
  />
);

export default PlaybookVoice;

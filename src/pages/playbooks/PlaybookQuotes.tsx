import PlaybookLayout, { Boxes, DemoLabel, Note, P, Prompt } from "@/components/playbooks/PlaybookLayout";

const PlaybookQuotes = () => (
  <PlaybookLayout
    metaTitle="Follow up on every quote without chasing | Ardent Studio Playbooks"
    metaDescription="Quotes go quiet because following up is nobody's favorite job. This sets up a ten-minute Monday routine where AI tells you who needs a nudge and drafts it in your voice. You send it."
    crumb="Sales"
    title={<>Follow up on <span className="text-primary">every quote</span> without chasing.</>}
    intro="Quotes go quiet because following up is nobody's favorite job. This sets up a ten-minute Monday routine where AI tells you who needs a nudge and drafts it in your voice. You send it."
    chips={["1 hour to set up", "10 minutes each Monday", "Any AI"]}
    demo={{
      eyebrow: "See how it works",
      heading: "What goes in and what comes back.",
      tabA: "What you give it",
      tabB: "What you get back",
      a: (
        <>
          <DemoLabel>Your list</DemoLabel><ul className="mt-2 list-disc pl-5"><li>Dana, cabinet repaint, quoted 3 Nov, no reply</li><li>Luis, deck stain, quoted 10 Nov, asked about start dates</li><li>Mrs. Chen, hallway, quoted 20 Oct, went quiet after one reminder</li></ul>
        </>
      ),
      b: (
        <>
          <DemoLabel>The plan</DemoLabel><ul className="mt-2 list-disc pl-5"><li><strong>Answer first:</strong> Luis asked a question nobody answered. Reply drafted, with a gap left for your dates.</li><li><strong>Follow up today:</strong> Dana, two weeks with no reply. Short check-in drafted.</li><li><strong>Close out:</strong> Mrs. Chen, four weeks and one reminder. Friendly closing note drafted.</li></ul>
        </>
      ),
    }}
    steps={[
    {
      label: "Step 1 / 20 min",
      title: "Put every open quote in one list",
      nav: "One list",
      check: "Done, my list exists",
      body: (
        <>
          <P>A spreadsheet is enough. One row per quote, with these columns. Use first names only and leave out addresses and phone numbers. The AI does not need them.</P>
          <Boxes items={[["First name", null], ["The job", null], ["Date quoted", null], ["Last contact", null], ["What they last said", null], ["Status", null]]} />
        </>
      ),
    },
    {
      label: "Step 2 / 15 min",
      title: "Save your Monday prompt",
      nav: "Monday prompt",
      check: "Done, the prompt is saved",
      body: (
        <>
          <P>Save this somewhere you will find it, ideally in the project that holds your business brief. Each Monday, paste it in with your list.</P>
          <Prompt>{"Here is my list of open quotes as of today, [date]: [paste the list]. Using my business brief, sort them into three groups: follow up today, wait, and close out. Give one line of reasoning for each person. Flag anyone who asked a question I have not answered. Do not draft anything yet."}</Prompt>
          <P>A starting rhythm you can change: a first nudge after three to five working days, a second a week later, then one polite closing note.</P>
        </>
      ),
    },
    {
      label: "Step 3 / 10 min",
      title: "Have it draft the follow-ups",
      nav: "Draft",
      check: "Done, drafts are written",
      body: (
        <>
          <P>In the same chat, ask for the drafts.</P>
          <Prompt>{"Draft a follow-up for each person in the follow up today group. Three sentences at most, in my voice. Mention their job by name and end with one easy question they can answer in a word. Offer no discounts or promises I have not given you."}</Prompt>
        </>
      ),
    },
    {
      label: "Step 4 / 5 min",
      title: "Read, fix and send them yourself",
      nav: "Send them yourself",
      check: "Done, sent",
      body: (
        <>
          <P>Check each name and date, add a detail only you would know, and send from your own email. Nothing goes out on its own, and that is on purpose.</P>
        </>
      ),
    },
    {
      label: "Step 5 / 10 min",
      title: "Update the list and book next Monday",
      nav: "Update and book",
      check: "Done, Monday is booked",
      body: (
        <>
          <P>Change the last contact date and status for everyone you wrote to. Then put a ten-minute repeating reminder in your calendar for Monday morning. The routine only works if the list is current.</P>
          <Note><strong>Shortcut for Claude users:</strong> the free Quote Follow-Up skill does steps 2 and 3 in one go when you paste or attach your list. <a href="/playbooks#downloads">Get it with the downloads.</a></Note>
        </>
      ),
    },
    ]}
    doneMessage="Set up. See you Monday."
    next={{ href: "/playbooks/get-found-by-ai", label: "Next: Show up when customers ask AI" }}
  />
);

export default PlaybookQuotes;

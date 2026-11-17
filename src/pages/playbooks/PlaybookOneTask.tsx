import PlaybookLayout, { Boxes, DemoLabel, Note, P, Prompt, ScoreRow } from "@/components/playbooks/PlaybookLayout";

const PlaybookOneTask = () => (
  <PlaybookLayout
    metaTitle="Find the one task worth handing to AI | Ardent Studio"
    metaDescription="Skip the AI strategy for now. This is the exercise behind our One Task Audit: list your week, score it, and pick the single chore to start with."
    crumb="Planning"
    title={<>Find the <span className="text-primary">one task</span> worth handing to AI.</>}
    intro="Skip the AI strategy for now. This is the exercise behind our One Task Audit: list your week, score it, and pick the single chore to start with."
    chips={["45 minutes", "Pen and paper is fine", "No technical skill needed"]}
    demo={{
      eyebrow: "See how it works",
      heading: "One owner's week, before and after scoring.",
      tabA: "The list",
      tabB: "Scored",
      a: (
        <>
          <DemoLabel>A typical week</DemoLabel><div className="mt-2.5 flex flex-col gap-1.5"><ScoreRow task="Replying to new inquiries" hours="3 h" /><ScoreRow task="Scheduling jobs" hours="2 h" /><ScoreRow task="Writing up quotes" hours="2.5 h" /><ScoreRow task="Chasing unpaid invoices" hours="1 h" /><ScoreRow task="Payroll" hours="1 h" /></div>
        </>
      ),
      b: (
        <>
          <DemoLabel>Scored</DemoLabel><div className="mt-2.5 flex flex-col gap-1.5"><ScoreRow task="Replying to new inquiries" hours="3 h" risk="Low risk" verdict="Start here" win /><ScoreRow task="Writing up quotes" hours="2.5 h" risk="Medium" verdict="Next, with a review step" /><ScoreRow task="Scheduling jobs" hours="2 h" risk="Medium" verdict="Later" /><ScoreRow task="Chasing unpaid invoices" hours="1 h" risk="Low risk" verdict="Easy second task" /><ScoreRow task="Payroll" hours="1 h" risk="High" verdict="Keep doing it yourself" /></div>
        </>
      ),
    }}
    steps={[
    {
      label: "Step 1 / 10 min",
      title: "List what you repeat every week",
      nav: "List your week",
      check: "Done, I have my list",
      body: (
        <>
          <P>Open last week's calendar and your sent emails and write down every job you did more than once. Aim for ten to fifteen. Include the small ones, because the small ones add up.</P>
          <Prompt>{"Help me list every task I repeat in a typical week running my business. Ask no more than eight questions, one at a time. Then give me the list as a table with an empty column for hours per week."}</Prompt>
        </>
      ),
    },
    {
      label: "Step 2 / 10 min",
      title: "Put rough hours next to each one",
      nav: "Add the hours",
      check: "Done, hours are in",
      body: (
        <>
          <P>Guess. Half hours are fine. You are looking for the big numbers, and you will know them when you see them.</P>
        </>
      ),
    },
    {
      label: "Step 3 / 10 min",
      title: "Score each task",
      nav: "Score each task",
      check: "Done, every task is scored",
      body: (
        <>
          <P>For each task, note two things: whether it follows the same pattern every time, and how bad it would be if an AI got it wrong.</P>
          <Boxes items={[["Low risk", "A draft you read before anyone sees it."], ["Medium risk", "A customer would see it with less checking."], ["High risk", "Money, legal, safety or payroll."]]} />
          <Prompt>{"Here is my list of weekly tasks with hours: [paste your list]. For each one, tell me in one line how AI could help with it today, and rate the risk if the AI gets it wrong as low, medium or high. Do not pick for me."}</Prompt>
        </>
      ),
    },
    {
      label: "Step 4 / 5 min",
      title: "Pick one",
      nav: "Pick one",
      check: "Done, I picked one",
      body: (
        <>
          <P>Choose the task with the most hours that is low risk and follows a pattern. Write it down.</P>
          <P>Pick one, even if three look good. One task done properly teaches you more than three started.</P>
        </>
      ),
    },
    {
      label: "Step 5 / 10 min",
      title: "Try it in the chat window first",
      nav: "Try it",
      check: "Done, I tried it",
      body: (
        <>
          <P>Before anyone builds anything, test the idea with a real example from last week.</P>
          <Prompt>{"Here is a real example of [your task] from last week: [paste it, without customer details]. Do this task the way I would, using my business brief. Then list what you would need from me to do it well every time."}</Prompt>
          <P>If the result is mostly usable after two or three tries, the task is worth turning into a routine. The list of what the AI needs from you is the start of a scope for a tool.</P>
          <Note><strong>Prefer paper?</strong> The free One Task Audit worksheet has the table, the scoring guide and both prompts. <a href="/playbooks#downloads">Get it with the downloads.</a></Note>
        </>
      ),
    },
    ]}
    doneMessage="Done. You know where to start."
    next={{ href: "/playbooks/quote-follow-up", label: "Next: Follow up on every quote without chasing" }}
  />
);

export default PlaybookOneTask;

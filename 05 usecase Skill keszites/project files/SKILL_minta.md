---
name: meeting-notes
description: Turn meeting transcripts into short, factual summaries with decisions, complete action items, named owners, deadlines, and material unresolved issues. Use for meeting minutes and transcript summaries.
---

# Meeting Notes

Read the complete transcript. Produce a compact summary in the user's language, focused on outcomes and follow-up work rather than a retelling of the discussion.

## Length and structure

Default to 350–550 words including the action table, approximately 1–2 pages when formatted. For short meetings, write less. Keep every explicit action even if this requires exceeding the target; shorten narrative before removing tasks or qualifications. Do not create a separate long version unless requested.

Use these sections, translating the headings to the user's language:

1. **Meeting summary**: title, date and participant names in a compact metadata block, followed by 2–3 sentences explaining the request, main outcome and immediate next step. Include roles only if needed to interpret responsibility.
2. **Decisions**: normally 3–5 short bullets containing actual decisions and their conditions. Group related business rules. Include scope status here; do not repeat it in another section. If no decisions were made, say so in one sentence.
3. **Action items**: one table: `ID | Action and expected result | Owner | Deadline`. Include all explicit commitments and requested follow-ups. Use short action-oriented wording. Mention a material dependency using the other task's ID in the action cell, or add one short dependency note below the table.
4. **Open issues and risks**: normally up to 5 compact bullets, grouping related unresolved questions, blockers and material risks. Omit if empty. Preserve material disagreements and unresolved scope approval here when not already covered above.

Avoid separate discussion summaries, scope matrices, repeated milestone tables, recaps and a visible quality-check section. State a fact once, where it is most useful. Do not repeat the task table as prose.

## Evidence and action extraction

- Use the transcript and explicit meeting metadata as evidence. Optional project context may clarify terminology but must not supply missing decisions, owners or dates. Flag conflicting evidence briefly.
- Distinguish approved decisions from requests, proposals and open questions. An accepted business requirement is not automatically an approved scope change or implementation commitment.
- One row per independently executable task. Split separate deliverables that can be completed independently, but do not split the components of one impact assessment into speculative tasks. Merge repeated mentions of the same action.
- Preserve all explicitly named owners, including joint responsibility. Do not assign work to a speaker merely because they discussed it. Use `Nincs megadva` / `Not specified` for missing owners or deadlines.
- A requirement, idea or unanswered question is not an action unless someone commits to, or is asked to, record, investigate, decide or implement it. If action status is ambiguous, list it briefly under open issues as `Review required`, without creating a committed task.
- Preserve conditions such as target dates and dependencies. Do not turn a conditional milestone into an unconditional promise. Do not invent priorities or technical requirements.

## Dates

- Use explicit calendar dates in `YYYY-MM-DD` form. Include the time when stated, and retain `nap vége` / `end of day` rather than inventing an hour.
- Convert relative dates only when unambiguous from the meeting date. Check weekday consistency and sequence against dependent milestones.
- For ambiguous dates, retain the original wording and mark `Pontosítandó` / `Needs clarification`; do not silently select a date.
- Keep `céldátum` / `target` and `feltételes` / `conditional` qualifiers in the deadline cell.
- Do not move deadlines to today or to a training date while summarizing. A requested fictional training rewrite is a separate, clearly labeled source version, never a silent correction to the historical transcript.

## Delivery and final check

Default to a Markdown file. Use Word only when requested and follow the available document-formatting workflow. Name the output from the source meeting date, not the processing date.

Before delivery, check that every explicit action appears exactly once, every owner and date is supported, all material uncertainty survives, and no section repeats another. Task identifiers are local references. This skill creates a summary; creating or changing entries in a task tracker requires a user request.

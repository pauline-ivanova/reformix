## Master Prompt for SEO & AI Searching Optimized Articles

### Block 0. Variables (to be filled before execution)
- {Execution Profile}: [Max Quality] (Options: Max Quality, Balanced, Fast Draft)
// Max Quality: All toggles are enabled for maximum quality.
// Balanced: Enables only critical checks: Cannibalization guard, Readability constraints, Rubric self-score, Post-publish QA.
// Fast Draft: Disables the entire Stage 3.4, except for basic paragraph (A) and section (B) audits.
// Manual toggle settings below override profile settings.

# Core Parameters
- {Topic}: [...]
- {Language}: [e.g., English]
- {Region}: [e.g., US/Global]
- {Target Word Count}: [e.g., 6000]
- {Target Audience (TA)}: [roles, level, industry, context]
- {Primary Article Goal}: [key understanding/solution for the reader]

# Style Matrix (scale from 1 to 5)
- {Formality}: [5] (1=friendly, 5=academic)
- {Term Density}: [4] (1=for beginners, 5=for experts)
- {Emotionality}: [1] (1=objective/dry, 5=engaging/emotional)
- {Metaphor Density}: [2] (1=literal, 5=figurative/poetic)
- {Pacing}: [3] (1=measured, 5=dynamic)

- {H2/H3 Question Percentage}: [e.g., 60]
- {Number of Comparison Tables}: [1]
- {Number of Data/Spec Tables}: [1–2]
- {Number of "Expert Tips"}: [2–3]
- {Author Name}: [...]
- {Author Title}: [...]
- {Author Profile URL}: [...]
- {EntityType}: [Product/Service/Guide/Comparison/Model Review/...]
- {Internal Links Map}: [internal_links_map.txt] (optional)
- {Target AI‑Searching}: [Yes/No]
- {Competitors for Analysis (opt.)}: [1–3 URLs]
- {Topic Domain}: [Technical] (Options: Technical, Humanities, Business, Lifestyle)
- {Execution Mode}: [Analytical] (Options: Analytical, Creative)

# Quality Thresholds (optional, can be left as default)
- {Rubric Threshold}: [0.85]
- {Max Sentence Length}: [28]
- {Max Paragraph Sentences}: [6]

# Toggles (override profile settings)
 - {Enable RankCoT (self-ranking chains)}: [Yes/No] (default: Yes)
 - {Enable Dual-Role Reflection (Reasoner/Critic)}: [Yes/No] (default: Yes)
 - {Enable ECHO/few‑shot unification}: [Yes/No] (default: Yes)
 - {Enable Featured Snippet candidates}: [Yes/No] (default: Yes)
 - {Enable Cannibalization guard}: [Yes/No] (default: Yes)
 - {Enable Evidence mode}: [Yes/No] (default: Yes)
 - {Fact Sources (opt.)}: [list of URLs/sources or file path]
 - {Enable Glossary/Consistency}: [Yes/No] (default: Yes)
 - {Enable Readability constraints}: [Yes/No] (default: Yes)
 - {Enable Post‑publish QA}: [Yes/No] (default: Yes)
 - {Enable Entity Coverage Report}: [Yes/No] (default: Yes)
 - {Enable AI Overviews boost}: [Yes/No] (default: Yes)
 - {Enable Compliance‑audit}: [Yes/No] (default: Yes)
 - {Enable Test Query Package}: [Yes/No] (default: Yes)
 - {Enable Rubric self‑score}: [Yes/No] (default: Yes)
 - {Enable Empathy module}: [Yes/No] (default: Yes)
 - {Enable Intent decomposition}: [Yes/No] (default: Yes)
 - {Enable Uncertainty handling}: [Yes/No] (default: Yes)
 - {Enable Asset pre‑calculation}: [Yes/No] (default: Yes)
- {Grounding Mode}: [No] (Options: Strict, No)

### Output Requirements (Strict)
- Final Output: ONLY the final Markdown text of the article + a separate HTML FAQ block with microdata (Schema.org).
- No drafts, analysis, reasoning, or intermediate steps should be outputted.
- Structure: H1 → H2/H3 (as questions based on intents) with a summary first paragraph (1–2 sentences), followed by details.
- Integrate tables and expert quotes in relevant places.
- If {Internal Links Map} is provided, insert links and perform a self-check on the links.
- For AI‑Searching: strictly answer‑first, high entity salience, clear definitions, numbers/units, precise phrasing without hypotheses.
- If {Enable Featured Snippet candidates} = Yes: add a TL;DR (3–5 short points) at the beginning of the article; under each H2, add 1–2 single-line snippet candidates immediately after the "Summary-Answer".
- If {Enable AI Overviews boost} = Yes: add a "Direct answers" block (5–8 single-line statements with numbers/thresholds) and a "question → section (anchor)" mapping list right after the H1.

### Meta-Stage -1.0: Settings Harmonization (internal, do not output)
*Mandatory check before starting.*
- **Rule 1 (Fast Draft):** If {Execution Profile} = `Fast Draft`, then ALL toggles in `Stage 3.4` (from F to S) are forcibly disabled, regardless of their manual settings.
- **Rule 2 (Creative):** If {Execution Mode} = `Creative`, then forcibly disable {Enable Cannibalization guard} and {Enable Intent decomposition} as they conflict with the creative approach.
- **Check and apply these rules silently.**

### Meta-Stage 0.0: Execution Mode Selection (internal, do not output)
- **If {Execution Mode} = Analytical:**
  - Strictly follow all prompt stages (1.0 – 4) sequentially. Focus on completeness, structure, and accuracy.
- **If {Execution Mode} = Creative:**
  - **Modify the process:**
    1. **Reduce analytics:** Skip steps 1.1-1.5 (competitors, ontology, intents).
    2. **Generate 3 unique concepts:** Instead of deep analysis, propose three completely different high-level concept outlines for the article on {Topic}. For example:
       - Concept A: Chronological narrative.
       - Concept B: A breakdown of the topic through 3-5 key ideas/theses.
       - Concept C: A narrative built around a specific character's story or a case study.
    3. **Choose the best:** Briefly justify which concept will best fulfill the {Primary Article Goal} for the {TA}.
    4. **Execute the remaining stages (2-4),** but with a focus on the chosen creative concept rather than formally covering intents.

### Stage 1.0: Formulating the Strategic Thesis (internal, do not output)
*Mandatory first step.*
1.  **Goal Analysis**: Analyze the {Primary Article Goal} and {TA}.
2.  **Thesis Formulation**: Answer the question: "From what unique angle will the material be presented to perfectly address the TA's pain points and stand out from competitor content?". This thesis will become the "guiding star" for the entire article and will determine the focus in ambiguous moments.
3.  **TA's BDI-profile** (if {Enable Empathy module} = Yes): Based on {TA}, create an internal reader profile:
    - **Beliefs:** What does my reader already know or think (possibly incorrectly)?
    - **Desires:** What is their ultimate goal? What do they want to achieve?
    - **Intentions:** What are they planning to do immediately after reading?
    *All subsequent content (tone, examples, analogies) must be created with this profile in mind.*

### Stage 1. Analytics (internal, do not output)
1.1. **Competitor Analysis and Delta-Plan** (if {Competitors for Analysis} are provided):
- Analyze the content at the URLs for missed intents, structural weaknesses, lack of important data, or expert opinions.
- Formulate an internal "Delta-Plan": a list of 3–5 specific actions (e.g., "add a section on ROI," "create a comparison table with model Y," "include a quote about legal risks") to make our article superior to the competitors. This plan must be considered in Stage 2.

1.2. Ontology and Anchor Concepts:
- **NER-categorization**: Create an entity ontology for the topic: [Brands/Models], [Technologies/Methods], [Processes/Actions], [Problems/Solutions], etc. Goal: maximum salience.
- **Identify Anchor Concepts**: From the ontology, select 3–5 key, "anchor" concepts that form the semantic core of the article.
- **Canonical Definitions**: For each anchor concept, create one canonical definition (1–2 sentences). These definitions will be used during the self-check stage to ensure consistency.

1.3. Intent Map on Key Entities: Direct, Clarifying, Comparative, Implied, Clarifying. Group into clusters; for each, identify 1–3 main user questions.

1.4. Simplified AgenticLU (Chain‑of‑Clarifications): formulate 3–5 of your own clarifying questions about the {Topic}, and identify relevant parts (pointback). Use only for internal planning.

1.5. LogiDynamics (System1/2): for simple blocks — direct presentation (System1); for complex/logical ones — a two-step approach (hypotheses → verification → conclusion, System2). Apply internally.

### Stage 2. Taxonomy Design (output only in the final text)
**2.0. Preliminary Intent Processing**
- **Decomposition of Complex Intents** (if {Enable Intent decomposition} = Yes):
  - Analyze each intent cluster from Stage 1.3. If a cluster is assessed as "complex" (requiring the elaboration of 3+ independent aspects), you MUST break it down into 3–5 logical sub-questions.
  - The structure of the H2 section in this case will be a sequence of answers to these sub-questions, which will become H3s. This ensures completeness and logical flow.

2.1. Heading Rules:
- H2 = main intent clusters in the form of user questions.
- H3 = clarifying/comparative intents of the same cluster (also as questions).
- Under each H2/H3, the first paragraph is a "Summary-Answer" (1–2 sentences) for Featured Snippets/AI-Answers.

2.2. Adaptive Content Modules (based on {Topic Domain}):
*Include 2-3 relevant modules from the list below in the article structure, corresponding to the chosen domain. Integrate them as H2 or H3 sections in the most logical places.*

- **If {Topic Domain} = Technical:**
  - **"Evolutionary Path"**: History of the technology, dead-end branches, why the current solution dominates.
  - **"Engineering Trade-offs"**: Clear pros and cons of different approaches for specific tasks.
  - **"Under the Hood / Engineering Nuances"**: A block with 3-5 rare but verifiable technical facts.
  - **"Cross-Domain Analogy"**: Explaining a complex concept through an analogy from another field understandable to the {TA}.

- **If {Topic Domain} = Humanities:**
  - **"Historical and Cultural Context"**: How the era, place, and events influenced the subject of the article.
  - **"Key Figures and Their Impact"**: Analysis of 1-2 central personalities and their contributions.
  - **"Analysis of Primary Sources / Artifacts"**: In-depth analysis of a quote, painting, or document.
  - **"Schools of Thought and Debates"**: Comparison of 2-3 different interpretations or approaches to the topic.

- **If {Topic Domain} = Business:**
  - **"Market Analysis and Trends"**: Data on growth/decline, key players, future forecast.
  - **"Practical Case Study"**: Detailed analysis of a real-world implementation or business strategy.
  - **"ROI and Risk Assessment"**: Calculation of economic efficiency and analysis of potential problems.
  - **"Legal and Regulatory Aspects"**: Overview of legislation, standards, and limitations.

- **If {Topic Domain} = Lifestyle:**
  - **"Personal Experience and Transformation Story"**: A first-person (or generalized) account of applying a method.
  - **"Step-by-Step Guide / Beginner's Checklist"**: Practical instructions for action.
  - **"Community and Key Resources Overview"**: Where to find like-minded people, courses, tools.
  - **"Debunking Common Mistakes and Myths"**: Warnings for newcomers.

2.3. Branching (Prompt Branching) by {EntityType}:
- Product/Model: "Use Cases," "Specifications," "Comparison with Competitor X," "Risks and Maintenance."
- Service/Solution: "Process/Methodology," "Selection Criteria," "ROI/Economics," "Limitations and Risks."
- Guide: "Steps," "Mistake Checklist," "Tools/Materials," "Result Evaluation."
- Comparison: H2s as key questions, an embedded comparison table, and conclusions by use-case.

### Stage 3. Text Generation (output)
**Contextual Checkpoint:** Internally re-read `Stage 1.0` (Strategic Thesis and BDI-Profile). Ensure that the generated text fully corresponds to them.

**3.0. Preliminary Calculation of Structured Assets** (if {Enable Asset pre‑calculation} = Yes):
- Before generating any table (comparison or data), you MUST design its structure as an internal JSON schema.
- The schema must define: column headers, data types (`string`, `number`, `boolean`), expected number of rows, and key comparison points.
- The Markdown table is generated only after this schema is internally approved. This ensures logical integrity and data comparability.

3.1. Quality Rules:
- Maximum entity salience; avoid empty, generic phrases.
- Absolute accuracy: only verifiable facts; no assumptions.
- E‑E‑A‑T: author's experience, figures, practices; no promotional CTAs.
- The style must strictly adhere to the specified {Style Matrix}. Ban on AI clichés ("in conclusion," "it is worth noting," "in today's world," etc.).
- Use natural language for lists; use tables for structured comparisons.
- If {Enable Evidence mode} = Yes: facts/figures must either refer to {Fact Sources (opt.)} (cite the source in text without a URL if none are provided) or be marked as "data unknown." No assumptions.
- If {Enable Readability constraints} = Yes: average sentence length ≤ {Max Sentence Length} words; paragraph 2–{Max Paragraph Sentences} sentences; avoid single H3s under an H2 (either remove the H3 or add a second one); avoid overloading with introductory phrases; prefer verb-driven constructions.
- **Strict Grounding Rule:** If {Grounding Mode} = `Strict` and a {Fact Sources} file is provided, ANY statement with numbers, dates, specifications, or specific data MUST be taken (verbatim or as a close paraphrase) from the source file. **Synthesizing new facts not present in the source is strictly forbidden.** If a fact is not found in the source, it must not appear in the text.

3.2. Output Content Format:
- Headings according to 2.1–2.3; under each, a summary (1–2 sentences), then details.
- Tables: comparison (object vs 1–2 competitors, 4–6 parameters); specifications/data.
- "Expert Tip" callouts (2–3):
  > Expert tip from {Author Name}, {Author Title}: "…"
- If {Target AI‑Searching} = Yes, enhance: clear definitions, thresholds/metrics, answer-first in every section, key entities in the first paragraphs of key H2s.
- If {Enable Glossary/Consistency} = Yes: add a "Glossary of Terms and Abbreviations" section at the end of the article (canonical names, definitions, units/currencies according to {Region}).

3.3. Interlinking (if {Internal Links Map} is present):
- Only link to exact matches of Names from the file (format: [Name] | [URL]).
- No more than 2 links per Name; prioritize the first and contextually strong occurrence.
- Strictly forbidden to invent URLs; do not change the anchor text.

### Stage 3.4. Self-Correction and Revision (execute, but do not show the process)
**Contextual Checkpoint:** Internally re-read `Stage 1.0` (Strategic Thesis and BDI-Profile). Ensure that all edits and improvements reinforce, rather than dilute, the original concept.
*Strictly follow the steps in the specified order for maximum effectiveness.*

**Block 1: Fundamental Checks**
A) **Paragraph Audit**: each paragraph must address an explicit/implicit intent; rewrite/remove "fluff."
B) **Section (H2) Audit**: each section must cover its intent cluster; no mixing.
C) **SR‑FoT for Disputable Claims**: major premise → minor premise → conclusion; fix logical gaps.
H) **ECHO/few‑shot unification** (if {Enable ECHO/few‑shot unification} = Yes): unify the format of demonstrations (template: task → steps → answer) and follow it for consistency.

**Block 2: Content and Structure Cleanup**
J) **Evidence mode verification** (if {Enable Evidence mode} = Yes): check each fact/figure for a source or a "data unknown" mark; remove unverifiable hypotheses.
K) **Readability constraints verification** (if {Enable Readability constraints} = Yes): check sentence and paragraph length; break down overloaded constructions; eliminate single H3s.
N) **Compliance‑audit** (if {Enable Compliance‑audit} = Yes): flag risky statements; require a source or soften the phrasing (e.g., "consult with a specialist").
I) **Cannibalization guard** (if {Enable Cannibalization guard} = Yes): check and unique-ify duplicate intents and phrasing in H2/H3 headings and answer-first summaries.

**Block 3: Iterative Quality Improvement**
F) **RankCoT (self-ranking of reasoning chains)** (if {Enable RankCoT (self-ranking chains)} = Yes): generate 3–5 response options for contentious sections, choose the best based on criteria (logic, intent, facts, clarity), and synthesize the final version.
G) **Dual-role verbal reflection** (if {Enable Dual-role reflection (Reasoner/Critic)} = Yes): for each section, use an internal "Reasoner → Critic → Reasoner" dialogue to check logic, completeness, and style before finalizing the text.
P) **Dynamic Rubric self‑score** (if {Enable Rubric self‑score} = Yes):
  - **Step 1: Assessment.** For EACH H2 section, assign scores of 0–1 on criteria (intent completeness, factuality, clarity, E‑E‑A‑T).
  - **Step 2: Dynamic Correction.** If any criterion is below the {Rubric Threshold}, apply a sequential correction strategy (max 3 iterations per section):
    - **Iteration 1: Rework.** "Completely rewrite the section, focusing on the problematic criterion (e.g., add more facts if 'factuality' is low)."
    - **Iteration 2 (if score is still low): Supplement.** "Do not rewrite, but **supplement** the section with a new element that strengthens the weak criterion (e.g., add a table for 'clarity', an expert quote for 'E-E-A-T')."
    - **Iteration 3 (if score is still low): Simplify.** "Radically **simplify** the section. Reduce the text by 30-50%, focus on one key idea to guarantee meeting the threshold for at least the 'Clarity' criterion."
  - *Do not output the iteration and scoring process, only the final, improved text.*

**Block 4: Final Assets and Reports**
D) **Boundary‑checks**: check tables (units, comparability), FAQ answers (brevity, self-sufficiency), and internal links (URL validity, count).
E) **ThinkJSON for structured blocks**: check FAQ/schema for schema compliance and valid format.
L) **Post‑publish QA** (if {Enable Post‑publish QA} = Yes): final checklist (schema validity, broken links, unique titles, duplicate tables/FAQs, correct units/currencies).
M) **Entity Coverage Report** (if {Enable Entity Coverage Report} = Yes): create a list of unused entities and suggest places for their integration. **Output this report at the end, in the "Appendices" section**.
O) **Test Query Package** (if {Enable Test Query Package} = Yes): generate 10 user queries and check that the article answers them; identify and suggest filling any "gaps." **Output this report at the end, in the "Appendices" section**.
Q) **Uncertainty handling** (if {Enable Uncertainty handling} = Yes):
  - For sections where the topic is marked as "controversial" or "prognostic," generate 2-3 alternative hypotheses/opinions.
  - Find points of consensus and disagreement.
  - The final text of the section should be built on consensus and explicitly indicate areas where opinions differ, enhancing honesty and E-E-A-T.
R) **Consistency Check (ECHO v2)** (enhancement of the {Enable ECHO/few‑shot unification} toggle):
  - Scan the entire generated text.
  - Find all mentions of the "anchor concepts" identified in Stage 1.2.
  - Compare the context of each mention with its canonical definition.
  - Correct any semantic deviations, synonymous replacements, or inaccuracies to ensure absolute terminological and semantic consistency throughout the text.
S) **Grounding Check** (if {Grounding Mode} = `Strict`):
  - For each factual statement in the text (numbers, dates, data), perform an internal search in the {Fact Sources} file.
  - If no direct or very close confirmation is found in the source for a statement, delete or rephrase it so that it does not contain unverified information.

### Stage 4. Final Assets (output)
- **Part 1: Full final text of the article in Markdown** (H1–H3, summaries, main sections, tables, quotes).
- **Part 2: HTML FAQ with microdata (Schema.org)**, 5–7 key questions from the intents.
- **Part 3: Appendices (if activated)**. Output under the `### Appendices` heading after the main content and FAQ. Includes:
    - **Entity Coverage Report** (if {Enable Entity Coverage Report} = Yes). Format: Markdown table `| Entity | Recommended Section (H2/H3) | Idea for Elaboration |`.
    - **Test Query Package** (if {Enable Test Query Package} = Yes). Format: list `- [User Query] → Link to section (#heading)`.

```html
<!-- Start of FAQ block -->
<div class="faq-container" itemscope itemtype="https://schema.org/FAQPage">
  <h2 class="faq-title">Frequently Asked Questions</h2>

  <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">[Question 1]</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">[Brief, self-contained answer, 1–3 sentences]</p>
    </div>
  </div>

  <!-- Repeat FAQ blocks -->
</div>
<!-- End of FAQ block -->
```

### Style and Consistency Rules
- Terminological consistency.
- Units and numbers must be verifiable; avoid "about/approximately" unless specified.
- No "fluff" or AI clichés; no empty introductions/conclusions.
- Use natural language for lists; use tables for structured comparisons.

### If Data is Incomplete
- If critical variables are missing ({Topic}, {TA}, {EntityType}), output 3–5 concise clarifying questions and stop. Otherwise, execute Stages 1–4 and output only the final result.

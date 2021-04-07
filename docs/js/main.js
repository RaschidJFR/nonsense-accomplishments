(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "adjective1": [
    "Key",
    "Top",
    "Main",
    "Chief",
    "Assistant to",
    "Advisory to",
    "Personal Assistant to",
    "Part Time",
    ""
  ],
  "adjective2": [
    "Senior",
    "Junior",
    "Regional",
    "Country",
    "Associate",
    "Head",
    "Super",
    "Local",
    "Global",
    "Assistant",
    "Independent",
    "Full-time",
    "Division",
    "National",
    "Creative",
    "Dedicated",
    "Operations",
    "Improvement",
    "Area",
    "Licenced",
    "Retail",
    "Office",
    "Industrial",
    "International"
  ],
  "adjective3": [
    "Development",
    "Technical",
    "Business",
    "Financial",
    "IT",
    "Project",
    "Cost",
    "Managing",
    "Commercial",
    "Procurement",
    "Cleaning",
    "Team",
    "Real Estate",
    "Sales",
    "Property",
    "Asset",
    "Facility",
    "Cashflow",
    "Creative",
    "Operation",
    "Letting",
    "Enterprise",
    "Corporate",
    "Accounting",
    "Green Building",
    "Construction",
    "Marketing",
    "Investment",
    "Customer",
    "Support",
    "Feedback",
    "Reconciliation",
    "Volume Rebates",
    "Sales Support",
    "Master",
    "Safety",
    "Process",
    "Research",
    "Leasing",
    "Strategy",
    "Planning",
    "Due Diligence",
    "Loan",
    "Risk",
    "Valuations",
    "Insurance",
    "Debt",
    "Portfolio",
    "Acquisitions",
    "Performance",
    "Economic",
    "Tax"
  ],
  "position": [
    "Director",
    "Manager",
    "Administrator",
    "Architect",
    "Representative",
    "Specialist",
    "Boss",
    "President",
    "Vice-president",
    "Partner",
    "Leader",
    "Coordinator",
    "Engineer",
    "Officer",
    "Analyst",
    "Consultant",
    "Advisory",
    "Estimator",
    "Professional",
    "Supervisor",
    "Messenger",
    "Executive",
    "Agent",
    "Appraiser",
    "Economist",
    "Controller",
    "Counsel",
    "Underwriter",
    "Broker",
    "Operator",
    "Superintendent",
    "Surveyor",
    "Researcher"
  ]
}

},{}],2:[function(require,module,exports){
require('./job-title');
const verbs = require('./lists/power_verbs.json').map(e => e.toLowerCase());
const adjectives = require('./lists/adjectives.json').map(e => e.toLowerCase());
const adverbs = require('./lists/adverbs.json').map(e => e.toLowerCase());
const terms = require('./lists/terms.json').map(e => e.toLowerCase());
const metrics = require('./lists/metrics.json').map(e => e.toLowerCase());
const units = ['k USD', 'M USD', '%',];

/**
 * @param {string[]} arr
 */
function getRandomElement(arr) {
  const n = Math.floor(Math.random() * arr.length);
  return arr[n];
}

function randomize() {
  const verb1 = getRandomElement(verbs);
  const adjective = getRandomElement(adjectives);
  const term = getRandomElement(terms);
  const adverb = getRandomElement(adverbs);
  const verb2 = getRandomElement(verbs);
  const metric = getRandomElement(metrics);
  const amount = Math.round(Math.random() * 100);
  const unit = getRandomElement(units)

  $('#verb1').val(verb1);
  $('#adjective').val(adjective);
  $('#term').val(term);
  $('#adverb').val(adverb);
  $('#verb2').val(verb2);
  $('#metric').val(metric);
  $('#amount').val(amount);
  $('#unit').val(unit);

  updateOutput();
}

function updateOutput() {
  const verb1 = $('#verb1').val() || '';
  const adjective = $('#adjective').val() || '';
  const term = $('#term').val() || '';
  const adverb = $('#adverb').val() || '';
  const verb2 = $('#verb2').val() || '';
  const metric = $('#metric').val() || '';
  const amount = $('#amount').val() || '';
  const unit = $('#unit').val() || '';

  const text = `${verb1} ${adjective} ${term} and ${adverb} ${verb2} ${metric} by ${amount}${unit}`;
  $('#output').val(text);
}

/**
 * @param {string} text 
 */
function add(text) {
  $('ul').append(`<li>${text}</li>`)
}

function init() {
  verbs.sort((a, b) => a > b ? 1 : -1).forEach(v => $("#verb1, #verb2").append(new Option(v, v)));
  adjectives.sort((a, b) => a > b ? 1 : -1).forEach(v => $("#adjective").append(new Option(v, v)));
  terms.sort((a, b) => a > b ? 1 : -1).forEach(v => $("#term").append(new Option(v, v)));
  adverbs.sort((a, b) => a > b ? 1 : -1).forEach(v => $("#adverb").append(new Option(v, v)));
  metrics.sort((a, b) => a > b ? 1 : -1).forEach(v => $("#metric").append(new Option(v, v)));
  units.sort((a, b) => a > b ? 1 : -1).forEach(v => $("#unit").append(new Option(v, v)));

  $('.form-control').each(function(_i, element) {
    $(element).bind('change', updateOutput);
  });

  $('.btn#randomize').click(function(e) {
    e.preventDefault();
    randomize();
  });

  $('.btn#add').click(function(e) {
    e.preventDefault();
    const text = $('#output').val()
    if (text) add(text);
    $('#output').val('')
  });

  $('#jobTitle').text(window.getJobTitle());
}

init();
},{"./job-title":3,"./lists/adjectives.json":4,"./lists/adverbs.json":5,"./lists/metrics.json":6,"./lists/power_verbs.json":7,"./lists/terms.json":8}],3:[function(require,module,exports){
const words = require('../job-title-generator/words.json');

function genJobTitle() {
  const adj1 = Math.floor(Math.random() * words.adjective1.length);
  const adj2 = Math.floor(Math.random() * words.adjective2.length);
  const adj3 = Math.floor(Math.random() * words.adjective2.length);
  const pos = Math.floor(Math.random() * words.position.length);
  const adjective1 = words.adjective1[adj1];
  const adjective2 = words.adjective2[adj2];
  const adjective3 = words.adjective3[adj3];
  const position = words.position[pos];
  return `${adjective1} ${adjective2} ${adjective3} ${position}`;
}

window.getJobTitle = genJobTitle;
},{"../job-title-generator/words.json":1}],4:[function(require,module,exports){
module.exports=[
  "Contrarian",
  "Authentic",
  "Scalable",
  "Adaptive",
  "Consistent",
  "Disruptive",
  "Approachable",
  "Creative",
  "Authentic",
  "Evolutionary",
  "Future Planners",
  "Professional",
  "Reliable",
  "Trustworthy"
]
},{}],5:[function(require,module,exports){
module.exports=[
  "Accurately",
  "Actively",
  "Ambitiously",
  "Analytically",
  "Artistically",
  "Assertively",
  "Competently",
  "Competitively",
  "Confidently",
  "Conscientiously",
  "Consistently",
  "Cooperatively",
  "Courteously",
  "Creatively",
  "Diligently",
  "Effectively",
  "Efficiently",
  "Energetically",
  "Enthusiastically",
  "Imaginatively",
  "Independently",
  "Intellectually",
  "Intelligently",
  "Logically",
  "Meticulously",
  "Patiently",
  "Perseveringly",
  "Pleasantly",
  "Practically",
  "Precisely",
  "Proficiently",
  "Progressively",
  "Rationally",
  "Realistically",
  "Reliably",
  "Resourcefully",
  "Responsibly",
  "Significantly",
  "Steadily",
  "Strongly",
  "Substantially",
  "Successfully",
  "Supportively",
  "Technically",
  "Thoroughly"
]
},{}],6:[function(require,module,exports){
module.exports=[
  "Monthly recurring revenue",
  "Customer Lifetime Value",
  "Customer Acquisition Cost",
  "Daily Active User ratio",
  "Monthly Active User ratio",
  "Session duration",
  "Paid Traffic",
  "Organic Traffic",
  "Bounce rate",
  "Retention rate",
  "Churn rate",
  "Number of sessions per user",
  "Number of user actions per session",
  "Net Promoter Score",
  "Customer Satisfaction Score",
  "Customer Integration",
  "Market Potential",
  "Product Life-Cycle Cost",
  "Percentage of Concepts Selected",
  "Formal Review of Concepts",
  "Idea Tracking",
  "Time to Market",
  "Breakeven Time",
  "Marketing Penetration",
  "Average Revenue per Customer"
]
},{}],7:[function(require,module,exports){
module.exports=[
  "Accelerated",
  "Generated",
  "Prescribed",
  "Accomplished",
  "Grew",
  "Produced",
  "Achieved",
  "Honored",
  "Prevailed",
  "Arose",
  "Improved",
  "Raised",
  "Attained",
  "Increased",
  "Realized",
  "Awarded",
  "Introduced",
  "Reduced",
  "Chosen",
  "Lessened",
  "Revitalized",
  "Completed",
  "Mastered",
  "Streamlined",
  "Consummated",
  "Maximized",
  "Surpassed",
  "Circumvented",
  "Minimized",
  "Topped",
  "Established",
  "Outperformed",
  "Transformed",
  "Exceeded",
  "Overachieved",
  "Won",
  "Founded",
  "Overcame",
  "Addressed",
  "Disseminated",
  "Profiled",
  "Advertised",
  "Documented",
  "Proofread",
  "Advised",
  "Drafted",
  "Publicized",
  "Alerted",
  "Edited",
  "Published",
  "Amended",
  "Emailed",
  "Queried",
  "Announced",
  "Generated",
  "Questioned",
  "Answered",
  "Emphasized",
  "Recorded",
  "Arbitrated",
  "Explained",
  "Relayed",
  "Articulated",
  "Expressed",
  "Reported",
  "Authored",
  "Framed",
  "Responded",
  "Branded",
  "Highlighted",
  "Rewrote",
  "Briefed",
  "Informed",
  "Scribed",
  "Broadcasted",
  "Interacted",
  "Search Engine Optimized",
  "Chronicled",
  "Interfaced",
  "Shared",
  "Circulated",
  "Interpreted",
  "Socialized",
  "Cited",
  "Interviewed",
  "Specified",
  "Clarified",
  "Liaised",
  "Spoke",
  "Commended",
  "Listened",
  "Suggested",
  "Communicated",
  "Logged",
  "Synthesized",
  "Compiled",
  "Mediated",
  "Talked",
  "Condensed",
  "Moderated",
  "Telegraphed",
  "Consulted",
  "Narrated",
  "Transcribed",
  "Contacted",
  "Notated",
  "Translated",
  "Conveyed",
  "Notified",
  "Transmitted",
  "Convinced",
  "Outlined",
  "Tweeted",
  "Corresponded",
  "Penned",
  "Verbalized",
  "Crowd Sourced",
  "Portrayed",
  "Wrote",
  "Debated",
  "Posted",
  "Defined",
  "Presented",
  "Detailed",
  "Proclaimed",
  "Accentuated",
  "Drew",
  "Merchandised",
  "Advertised",
  "Enhanced",
  "Originated",
  "Animated",
  "Enlivened",
  "Patented",
  "Architected",
  "Envisioned",
  "Personalized",
  "Brainstormed",
  "Exhibited",
  "Piloted",
  "Captivated",
  "Fashioned",
  "Pioneered",
  "Captured",
  "Formulated",
  "Photographed",
  "Composed",
  "Graphed",
  "Redesigned",
  "Conceived",
  "Hypothesized",
  "Renewed",
  "Conceptualized",
  "Illustrated",
  "Revolutionized",
  "Crafted",
  "Imaged",
  "Sculpted",
  "Created",
  "Imagined",
  "Shaped",
  "Customized",
  "Improvised",
  "Showcased",
  "Designed",
  "Initiated",
  "Sketched",
  "Devised",
  "Innovated",
  "Storyboarded",
  "Differentiated",
  "Instituted",
  "Unveiled",
  "Displayed",
  "Invented",
  "Visualized",
  "Drafted",
  "Marketed",
  "Advocated",
  "Enabled",
  "Led",
  "Aroused",
  "Energized",
  "Lobbied",
  "Assembled",
  "Encouraged",
  "Mentored",
  "Bolstered",
  "Engaged",
  "Mobilized",
  "Campaigned",
  "Enlisted",
  "Modeled",
  "Catapulted",
  "Enticed",
  "Moderated",
  "Chaired",
  "Enthused",
  "Motivated",
  "Challenged",
  "Focused",
  "Nurtured",
  "Championed",
  "Furthered",
  "Parlayed",
  "Coached",
  "Garnered",
  "Persuaded",
  "Compromised",
  "Guided",
  "Rallied",
  "Counseled",
  "Ignited",
  "Sparked",
  "Drove",
  "Influenced",
  "Spearheaded",
  "Elected",
  "Infused",
  "Spurred",
  "Elicited",
  "Inspired",
  "Steered",
  "Empowered",
  "Instilled",
  "Stimulated",
  "Absorbed",
  "Discharged",
  "Prepared",
  "Accounted for",
  "Dissolved",
  "Prioritized",
  "Accrued",
  "Dispensed",
  "Procured",
  "Acted",
  "Dispersed",
  "Projected",
  "Adopted",
  "Doubled",
  "Promoted",
  "Administered",
  "Economized",
  "Provisioned",
  "Aligned",
  "Elevated",
  "Pruned",
  "Allocated",
  "Eliminated",
  "Quantified",
  "Amended",
  "Enacted",
  "Ratcheted",
  "Anticipated",
  "Ensured",
  "Rated",
  "Appointed",
  "Estimated",
  "Reapportioned",
  "Appraised",
  "Examined",
  "Recognized",
  "Appropriated",
  "Executed",
  "Recommended",
  "Approved",
  "Extracted",
  "Recruited",
  "Assessed",
  "Facilitated",
  "Redefined",
  "Audited",
  "Forecasted",
  "Reinforced",
  "Augmented",
  "Fought",
  "Reigned in",
  "Authorized",
  "Fulfilled",
  "Reorganized",
  "Avoided",
  "Furnished",
  "Researched",
  "Benchmarked",
  "Funded",
  "Restructured",
  "Budgeted",
  "Gained",
  "Required",
  "Calculated",
  "Gauged",
  "Reversed",
  "Capitalized",
  "Governed",
  "Reviewed",
  "Carried out",
  "Hired",
  "Revised",
  "Carved out",
  "Injected",
  "Risked",
  "Cemented",
  "Intervened",
  "Saved",
  "Charged",
  "Justified",
  "Seized",
  "Charted",
  "Leveraged",
  "Set goals",
  "Checked",
  "Magnified",
  "Sharpened",
  "Chose",
  "Managed",
  "Shortened",
  "Commanded",
  "Mandated",
  "Slashed",
  "Commended",
  "Maneuvered",
  "Solicited",
  "Compared",
  "Measured",
  "Sourced",
  "Complied",
  "Mitigated",
  "Supervised",
  "Contracted",
  "Monitored",
  "Sustained",
  "Controlled",
  "Mounted",
  "Terminated",
  "Convened",
  "Navigated",
  "Transferred",
  "Critiqued",
  "Normalized",
  "Trimmed",
  "Cut",
  "Off shored",
  "Tripled",
  "Decided",
  "Orchestrated",
  "Turned",
  "Deduced",
  "Outsourced",
  "Vetted",
  "Delineated",
  "Oversaw",
  "Weighed",
  "Delegated",
  "Planned",
  "Withstood",
  "Designated",
  "Praised",
  "Directed",
  "Predicted",
  "Acknowledged",
  "Diversified",
  "Melded",
  "Amassed",
  "Embraced",
  "Merged",
  "Anchored",
  "Elevated",
  "Nominated",
  "Assimilated",
  "Encouraged",
  "Organized",
  "Augmented",
  "Energized",
  "Participated",
  "Balanced",
  "Enlisted",
  "Partnered",
  "Blended",
  "Forged",
  "Supplemented",
  "Buoyed",
  "Fostered",
  "Syncopated",
  "Collaborated",
  "Gathered",
  "Teamed",
  "Coalesced",
  "Harmonized",
  "United",
  "Contributed",
  "Ignited",
  "Volunteered",
  "Coordinated",
  "Joined",
  "Wove",
  "Cultivated",
  "Married",
  "Accelerated",
  "Equipped",
  "Qualified",
  "Added",
  "Evaluated",
  "Quality Assured",
  "Adopted",
  "Expunged",
  "Ranked",
  "Aggregated",
  "Extended",
  "Realigned",
  "Analyzed",
  "Extracted",
  "Rebooted",
  "Applied",
  "Extrapolated",
  "Rebuilt",
  "Assembled",
  "Fabricated",
  "Reconciled",
  "Authenticated",
  "Finalized",
  "Reconstructed",
  "Automated",
  "Fine-Tuned",
  "Recovered",
  "Backed-up",
  "Formatted",
  "Rectified",
  "Balanced",
  "Functionalized",
  "Re-engineered",
  "Blocked",
  "Grouped",
  "Refreshed",
  "Boosted",
  "Hosted",
  "Reinforced",
  "Branched",
  "Identified",
  "Rehabilitated",
  "Bridged",
  "Implemented",
  "Released",
  "Built",
  "Initialized",
  "Remodeled",
  "Bundled",
  "Installed",
  "Replicated",
  "Calculated",
  "Integrated",
  "Restored",
  "Calibrated",
  "Isolated",
  "Retooled",
  "Certified",
  "Launched",
  "Retrieved",
  "Changed",
  "Licensed",
  "Retrofitted",
  "Checked",
  "Linked",
  "Revamped",
  "Classified",
  "Loaded",
  "Revised",
  "Cleaned",
  "Maintained",
  "Road mapped",
  "Cleansed",
  "Manufactured",
  "Rolled out",
  "Cleared",
  "Mapped",
  "Rotated",
  "Coded",
  "Mechanized",
  "Routed",
  "Collocated",
  "Merged",
  "Safeguarded",
  "Computed",
  "Migrated",
  "Salvaged",
  "Computerized",
  "Mined",
  "Scanned",
  "Configured",
  "Mirrored",
  "Scoped",
  "Consolidated",
  "Mobilized",
  "Scrubbed",
  "Constructed",
  "Modeled",
  "Secured",
  "Corrected",
  "Modified",
  "Selected",
  "Debugged",
  "Moved",
  "Sequenced",
  "Deciphered",
  "Networked",
  "Solved",
  "Decoded",
  "Neutralized",
  "Stabilized",
  "Dedicated",
  "Operated",
  "Standardized",
  "Defended",
  "Optimized",
  "Straddled",
  "Delivered",
  "Overhauled",
  "Systematized",
  "Deployed",
  "Packaged",
  "Tested",
  "Digitized",
  "Patched",
  "Toggled",
  "Discovered",
  "Penetrated",
  "Traced",
  "Dispatched",
  "Pinpointed",
  "Transitioned",
  "Distributed",
  "Prevented",
  "Updated",
  "Duplicated",
  "Prioritized",
  "Upgraded",
  "Enabled",
  "Processed",
  "Validated",
  "Engineered",
  "Programmed",
  "Verified",
  "Enhanced",
  "Protected",
  "Virtualized",
  "Eradicated",
  "Prototyped",
  "Web-enabled",
  "Estimated",
  "Provisioned",
  "Assessed",
  "Enriched",
  "Lectured",
  "Adapted",
  "Enrolled",
  "Showed",
  "Advised",
  "Familiarized",
  "Taught",
  "Demonstrated",
  "Honed",
  "Trained",
  "Demystified",
  "Indoctrinated",
  "Tutored",
  "Dispensed",
  "Informed",
  "Educated",
  "Instructed",
  "Appeased",
  "Formatted",
  "Resolved",
  "Allayed",
  "Inspected",
  "Responded",
  "Ascertained",
  "Inventoried",
  "Satisfied",
  "Assisted",
  "Investigated",
  "Scheduled",
  "Assured",
  "Issued",
  "Served",
  "Cabled",
  "Labeled",
  "Serviced",
  "Closed",
  "Located",
  "Set up",
  "Connected",
  "Logged",
  "Shipped",
  "Corrected",
  "Monitored",
  "Supported",
  "Diagnosed",
  "Performed",
  "Sustained",
  "Dispatched",
  "Pleased",
  "Ticketed",
  "Dissected",
  "Prioritized",
  "Tracked",
  "Eased",
  "Racked",
  "Trailed",
  "Escalated",
  "Remedied",
  "Triaged",
  "Expedited",
  "Repaired",
  "Troubleshot",
  "Fixed",
  "Requisitioned",
  "Uncovered"
]
},{}],8:[function(require,module,exports){
module.exports=[
  "Server hosting",
  "Data center",
  "Back end",
  "Virtual private network",
  "Web app",
  "Application programming interface",
  "Technology stack",
  "Domain name service",
  "Open source",
  "Machine learning",
  "Cloud hosting",
  "SaaS",
  "Content management systems",
  "Custom software development",
  "ERP",
  "Business intelligence (BI) software",
  "Contract management software",
  "Performance management software",
  "CRM",
  "Learning management system",
  "Document management",
  "Version control",
  "Managed services",
  "MVP",
  "Email marketing",
  "Content curation",
  "Engagement",
  "A/B testing"
]
},{}]},{},[2]);
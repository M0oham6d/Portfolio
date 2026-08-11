export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Skill {
  name: string;
  proficiency: number; // percentage
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ProjectFile {
  name: string;
  type: "pdf" | "doc" | "image" | "report" | "diagram";
  url: string;
  category: "Documentation" | "Screenshots" | "Architecture" | "Reports";
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learned: string[];
  company: string;
  date: string;
  liveUrl?: string;
  githubUrl?: string;
  docUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  defaultFiles?: ProjectFile[];
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialId?: string;
  skillsGained: string[];
  verificationUrl?: string;
  fileType?: "pdf" | "image";
  fileUrl?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    headline: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    summary: string;
    aboutText: string;
    yearsOfExperience: number;
    specializations: string[];
    currentFocus: string;
    careerGoals: string;
    dateOfBirth: string;
    nationality: string;
    militaryStatus: string;
    resumeUrl?: string;
  };
  experiences: Experience[];
  skillCategories: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  languages: { language: string; proficiency: string }[];
  volunteer: string[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Muhammad Ayman",
    headline: "Blue Team Engineer",
    email: "eng.muhammed.ayman@gmail.com",
    phone: "(+20) 101 4935 968",
    location: "Egypt",
    linkedin: "https://linkedin.com/in/eng-muhammad-ayman/",
    github: "https://github.com/M0oham6d",
    summary:
      "Dedicated and results-oriented Cybersecurity Engineer with a Bachelor’s in Electronics and Communications Engineering and strong, hands-on experience in Microsoft 365 Security, network defense, and Blue Team operations. Proven ability to architect and implement Zero-Trust frameworks, deploy and monitor Microsoft Defender XDR and Sentinel, and automate incident response through SOAR workflows. Combines a solid foundation in networking (CCNA-level) and systems administration with practical experience in threat hunting, vulnerability assessment, and security monitoring. Currently excelling as a Microsoft 365 Security Engineer, focused on enhancing identity protection, endpoint security, and data compliance. Passionate about threat detection and leveraging technical expertise to build resilient security postures.",
    aboutText:
      "With a strong background in Electronics and Communications Engineering from Zagazig University, I specialize in engineering cloud security solutions, automating SOC operations, and securing enterprise infrastructures. My core expertise centers on the Microsoft 365 Security suite, including Sentinel, Defender XDR, and Intune. I design automated responses (SOAR) and build telemetry detection engines to protect cloud-native resources. I have practical experience in both engineering secure cloud architectures and executing advanced Blue Team incident response scenarios.",
    yearsOfExperience: 1, // Active in 2026 (GBG, GFD, GBG Academy, NTI from late 2025/2026)
    specializations: [
      "Microsoft 365 Security Architecture",
      "Security Orchestration, Automation & Response (SOAR)",
      "Threat Detection & SIEM Engineering (Sentinel, Splunk)",
      "Zero-Trust Framework Design & Implementation",
      "Endpoint Management & MDM (Microsoft Intune)",
      "Network Security & CCNA-Level Engineering",
    ],
    currentFocus:
      "Architecting automated incident response playbooks using Azure Logic Apps, strengthening identity boundaries with Conditional Access and PIM, and building advanced threat hunting scenarios with KQL and Sysmon telemetry.",
    careerGoals:
      "To secure enterprise-scale cloud infrastructures, pioneer advanced automated detection ecosystems, and lead high-impact incident response operations that proactively neutralize emerging cyber threats.",
    dateOfBirth: "August 2002",
    nationality: "Egyptian",
    militaryStatus: "Final Exemption",
    resumeUrl: "/resume/Resume.pdf",
  },
  experiences: [
    {
      id: "exp1",
      company: "Global Brands Group (GBG)",
      position: "Microsoft 365 Security Engineer",
      duration: "June 2026 – Present",
      location: "New Cairo (Fifth Settlement)",
      responsibilities: [
        "Architect, deploy, and configure Microsoft Defender XDR and Microsoft Sentinel solutions for enterprise security.",
        "Implement advanced threat detection logic, log ingestion policies, and KQL-based analytic rules.",
        "Design automated incident response playbooks (SOAR) using Azure Logic Apps and Microsoft Sentinel Automation.",
      ],
      technologies: [
        "Microsoft Defender XDR",
        "Microsoft Sentinel",
        "KQL",
        "Logic Apps",
        "Azure",
        "Security Automation",
      ],
      achievements: [
        "Architected Sentinel SOAR workflow detecting and responding to unauthorized Azure VM deletions in real time.",
        "Spearheaded Sysmon telemetry ingestion across endpoints, drastically expanding visibility of LOLBins abuse and credential dumping.",
      ],
    },
    {
      id: "exp2",
      company: "Galaxy for Development (GFD)",
      position: "Networks & Cybersecurity Instructor",
      duration: "January 2026 – June 2026",
      location: "Sharkia",
      responsibilities: [
        "Delivered training in networking fundamentals (CCNA-level) and core cybersecurity concepts.",
        "Taught critical networking topics including TCP/IP, routing & switching, network security, and system administration.",
        "Guided student cohorts through practical hands-on labs using Cisco Packet Tracer and Wireshark.",
        "Introduced essential security concepts such as threat detection, incident response, and basic defensive tactics.",
        "Supported students in developing core IT troubleshooting, network analysis, and security problem-solving skills.",
      ],
      technologies: [
        "TCP/IP",
        "Routing & Switching",
        "Cisco Packet Tracer",
        "Wireshark",
        "Network Security",
        "System Administration",
      ],
    },
    {
      id: "exp3",
      company: "GBG Academy",
      position: "Microsoft 365 Security Engineer",
      duration: "January 2026 – May 2026",
      location: "New Cairo (Fifth Settlement)",
      responsibilities: [
        "Implemented robust security controls across Microsoft Entra ID to reduce identity-related compromise risks.",
        "Managed Microsoft Intune for device compliance, application management (MAM), and endpoint security.",
        "Deployed and monitored Microsoft Defender XDR components for automated threat detection and response.",
        "Implemented Microsoft Purview features (Data Loss Prevention & sensitivity labels) for comprehensive data protection.",
      ],
      technologies: [
        "Microsoft Entra ID",
        "Microsoft Intune",
        "Microsoft Defender XDR",
        "Microsoft Purview",
        "DLP",
        "Conditional Access",
      ],
    },
    {
      id: "exp4",
      company: "National Telecommunication Institute (NTI)",
      position: "Blue Team Cybersecurity Boot Camp",
      duration: "October 2025 – January 2026",
      location: "Smart Village",
      responsibilities: [
        "Completed rigorous Blue Team training, gaining deep hands-on expertise in network defense, Splunk SIEM, and incident response.",
        "Conducted extensive labs in CompTIA Security+, CySA+, cryptography, and cloud security fundamentals.",
        "Exposed to offensive security tactics using Nmap and Metasploit to perform threat simulations and control testing.",
        "Applied YARA rules for malware analysis and designed Linux and Windows system hardening configurations.",
      ],
      technologies: [
        "Splunk SIEM",
        "YARA Rules",
        "System Hardening",
        "Nmap",
        "Metasploit",
        "Network Security",
        "Linux/Windows Admin",
      ],
    },
  ],
  skillCategories: [
    {
      category: "Cloud",
      skills: [
        { name: "Azure", proficiency: 85 },
        { name: "Microsoft 365", proficiency: 90 },
        { name: "Microsoft Entra ID", proficiency: 92 },
        { name: "Azure Sentinel", proficiency: 88 },
        { name: "Azure Logic Apps", proficiency: 85 },
        { name: "Azure Monitor", proficiency: 80 },
      ],
    },
    {
      category: "Security",
      skills: [
        { name: "Microsoft Defender XDR", proficiency: 90 },
        { name: "Microsoft Defender for Endpoint (MDE)", proficiency: 88 },
        { name: "Microsoft Defender for Office 365 (MDO)", proficiency: 85 },
        { name: "Microsoft Purview (DLP)", proficiency: 83 },
        { name: "Microsoft Intune (MDM/MAM)", proficiency: 86 },
        { name: "Conditional Access & MFA", proficiency: 92 },
        { name: "Identity Protection & PIM", proficiency: 88 },
        { name: "Zero Trust Architecture", proficiency: 87 },
      ],
    },
    {
      category: "Automation",
      skills: [
        { name: "PowerShell", proficiency: 80 },
        { name: "Python", proficiency: 75 },
        { name: "n8n Automation", proficiency: 70 },
        { name: "Logic Apps Playbooks", proficiency: 85 },
        { name: "REST APIs Integration", proficiency: 82 },
      ],
    },
    {
      category: "SIEM / Monitoring",
      skills: [
        { name: "Microsoft Sentinel", proficiency: 88 },
        { name: "Splunk SIEM", proficiency: 82 },
        { name: "KQL (Kusto Query Language)", proficiency: 85 },
        { name: "Sysmon Telemetry", proficiency: 85 },
        { name: "Windows Event Logs", proficiency: 88 },
      ],
    },
    {
      category: "Networking",
      skills: [
        { name: "TCP/IP & Subnetting", proficiency: 90 },
        { name: "DNS, DHCP, & Protocols", proficiency: 88 },
        { name: "VPNs & IPSec", proficiency: 84 },
        { name: "Firewalls (Cisco ASA, ZPF)", proficiency: 80 },
        { name: "Routing & Switching (OSPF/v3)", proficiency: 85 },
        { name: "VLAN Segmentation", proficiency: 88 },
      ],
    },
    {
      category: "Tools & OS",
      skills: [
        { name: "Linux Administration", proficiency: 80 },
        { name: "Windows Server Management", proficiency: 85 },
        { name: "Active Directory & GPOs", proficiency: 88 },
        { name: "Wireshark Packet Analysis", proficiency: 86 },
        { name: "Docker Containers", proficiency: 75 },
        { name: "Nmap & Vulnerability Scanning", proficiency: 82 },
        { name: "VMware / Virtualization", proficiency: 85 },
      ],
    },
  ],
  projects: [
    {
      id: "proj14",
      title: "Microsoft Sentinel Home Lab with Azure Bicep",
      company: "Global Brands Group (GBG)",
      date: "August 2026",
      shortDescription:
        "A hands-on Microsoft Sentinel lab that uses Azure Bicep to deploy a cost-conscious security monitoring environment, covering Infrastructure as Code, Azure Activity Logs, KQL investigation, scheduled analytics rules, and controlled security event detection.",
      longDescription:
        "End-to-end Microsoft Sentinel Infrastructure as Code lab focused on building and testing a cloud security monitoring environment with Azure Bicep. The lab deploys a dedicated Resource Group, Log Analytics workspace, Microsoft Sentinel, subscription-level Activity Log diagnostic settings, and scheduled analytics rules. Azure Activity Logs are ingested into the AzureActivity table and analyzed using KQL, while controlled network security group and Azure Policy changes are generated to validate the detection pipeline from Azure activity through Log Analytics and Sentinel alerts to incidents. The lab also includes deployment validation, troubleshooting, permissions management, cost awareness, and complete cleanup procedures.",
      technologies: [
        "Microsoft Sentinel",
        "Microsoft Azure",
        "Azure Log Analytics",
        "Kusto Query Language (KQL)",
        "Azure Bicep",
        "Infrastructure as Code (IaC)",
        "Azure Activity Logs",
        "Azure CLI",
        "Microsoft Sentinel Analytics Rules",
        "Azure Resource Manager",
        "MITRE ATT&CK Framework",
      ],
      features: [
        "Subscription-scope Infrastructure as Code deployment using Azure Bicep with a resource-group scoped Sentinel module.",
        "Automated deployment of a dedicated Resource Group, Log Analytics workspace, and Microsoft Sentinel.",
        "Subscription Activity Log diagnostic settings forwarding Administrative, Security, Policy, ServiceHealth, and ResourceHealth events to Log Analytics.",
        "KQL-based investigation of AzureActivity events including administrative activity, callers, operations, resources, and activity status.",
        "Scheduled Microsoft Sentinel analytics rules deployed directly through Bicep.",
        "Network security group change detection covering creation, updates, and deletion of network security groups.",
        "Azure Policy assignment change detection for successful policy assignment write and delete operations.",
        "Controlled test-event generation using temporary Azure resources to safely validate detection rules.",
        "Automatic Sentinel incident creation when scheduled analytics rules detect matching activity.",
        "Deployment validation, troubleshooting, permission management, and complete cleanup of subscription-level and resource-group resources.",
      ],
      challenges: [
        "Managing Bicep deployments across subscription and resource-group scopes while keeping the infrastructure modular.",
        "Configuring subscription-level Activity Log diagnostic settings and connecting them to the deployed Log Analytics workspace.",
        "Creating Microsoft Sentinel scheduled analytics rules as Infrastructure as Code resources.",
        "Writing KQL queries that accurately match Azure Activity Log fields and resource provider operations.",
        "Handling differences in Azure Activity Log operation names and refining detection queries using has and has_any operators.",
        "Understanding the delay between Azure activity generation, Log Analytics ingestion, scheduled rule evaluation, and Sentinel incident creation.",
        "Managing the permissions required for resource groups, Log Analytics, Microsoft Sentinel, and subscription-level diagnostic settings.",
        "Keeping the lab cost-effective by using a lightweight architecture and removing resources and subscription-level configuration after testing.",
      ],
      learned: [
        "Practical understanding of Microsoft Sentinel architecture and its integration with Log Analytics.",
        "Infrastructure as Code deployment using Azure Bicep and Azure CLI.",
        "Azure Activity Log collection, ingestion, and security monitoring.",
        "Advanced KQL fundamentals for investigating Azure administrative activity and building security detections.",
        "Creating Microsoft Sentinel scheduled analytics rules as code.",
        "Understanding the complete detection workflow from Azure resource changes to Activity Logs, Log Analytics, Sentinel alerts, and incidents.",
        "Designing controlled security events to safely test cloud detection rules.",
        "Azure deployment validation, troubleshooting, permissions management, and security lab cleanup.",
      ],
      featured: true,
      defaultFiles: [
        {
          name: "Microsoft Sentinel Home Lab with Azure Bicep.pdf",
          type: "pdf",
          url: "/projects/Microsoft Sentinel Home Lab with Azure Bicep.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj13",
      title: "Telegram Quick Notes to AI-Expanded Notion Entries",
      company: "Self-Learning & Automation",
      date: "August 2026",
      shortDescription:
        "An automation workflow that captures 2-3 word quick notes sent via Telegram, expands them using Google Gemini AI into structured, detailed entries, and saves them to a Notion database—all orchestrated through n8n with real-time Telegram confirmation.",
      longDescription:
        "End-to-end automation pipeline that transforms brief Telegram messages into comprehensive Notion entries. The workflow triggers on incoming Telegram messages, sends the note text to Google Gemini API for intelligent expansion with structured categories and practical details, parses the JSON response, and creates a new Notion database page. The entire process is confirmed back to the user via Telegram. Built using n8n as the orchestration layer, the system handles note expansion, category classification, and seamless integration between Telegram, Gemini AI, and Notion.",
      technologies: [
        "n8n (Workflow Automation)",
        "Telegram Bot API",
        "Google Gemini API (gemini-3.6-flash)",
        "Notion API",
        "REST APIs",
        "JSON Parsing",
        "Cloudflare Workers (optional)",
        "AWS S3 (optional)",
        "Cloudflare R2 (optional)",
        "JavaScript (n8n Code Nodes)",
        "Google Cloud Platform",
      ],
      features: [
        "Telegram bot integration for capturing quick notes (2-3 words)",
        "AI-powered note expansion using Google Gemini API",
        "Structured JSON response generation with title, description, details, and category fields",
        "Automatic category classification (Tool, Concept, Game, Project Idea, Person/Org, Place, Random)",
        "Notion database page creation with mapped fields (Title, Expanded Description, Why Useful, Category, Status, Created)",
        "Real-time Telegram confirmation message with saved note title and category",
        "Secure handling of API keys using n8n Query Parameters",
        "Multi-service credential management (Telegram bot token, Notion API token, Google Gemini API key)",
        "Extensible workflow design allowing additional features like voice transcription, tagging, and weekly digests",
        "Error handling and parsing of AI responses with regex stripping for clean JSON extraction",
      ],
      challenges: [
        "Setting up Telegram bot with proper authentication and /start initialization",
        "Obtaining and configuring Notion Internal Integration Token with proper database connections",
        "Configuring Google Gemini API with correct model version (gemini-3.6-flash) and handling deprecation notices",
        "Parsing Gemini API response structure to extract JSON payload from nested candidates array",
        "Stripping markdown fences (```json```) from AI response before JSON.parse execution",
        "Ensuring category values match Notion Select field options (case-sensitive matching)",
        "Persisting chat_id across workflow nodes for Telegram confirmation messages",
        "Billing setup on Google Cloud with budget alerts to avoid unexpected charges",
        "Handling rate limits on free tiers while maintaining reliable personal use",
      ],
      learned: [
        "Full workflow automation using n8n with webhook triggers and node-based orchestration",
        "Telegram Bot API integration including bot creation via BotFather, token management, and message handling",
        "Google Gemini API implementation with proper authentication, request formatting, and response parsing",
        "Notion API integration for database page creation with field mapping and Select property handling",
        "JSON parsing and data transformation in JavaScript within n8n Code nodes",
        "Working with multipart/form-data for file uploads (extendable for attachments)",
        "Managing multiple API credentials securely in automation workflows",
        "Understanding Google Cloud billing setup, budget alerts, and API key generation",
        "Workflow troubleshooting including HTTP error 401 (auth), JSON parsing failures, and Select field mismatches",
        "Extensible automation design with optional features like voice note transcription and weekly digests",
      ],
      featured: true,
      defaultFiles: [
        {
          name: "Telegram Quick Notes to AI-Expanded Notion Entries.pdf",
          type: "pdf",
          url: "/projects/Telegram Quick Notes to AI-Expanded Notion Entries.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj12",
      title: "Sentinel Analyst Lab",
      company: "Global Brands Group (GBG)",
      date: "July 2026",
      shortDescription:
        "A hands-on, step-by-step Microsoft Sentinel lab that guides you through building a complete security operations environment—from data onboarding and custom KQL detection rules to automated playbooks, threat intelligence, and notebook-based hunting.",
      longDescription:
        "End-to-end Microsoft Sentinel implementation lab that equips security professionals with practical skills in building and managing a cloud-native SIEM, including configuring data connectors for diverse sources, creating scheduled analytics rules with MITRE ATT&CK mapping, implementing automated remediation workflows through playbooks (VM shutdown, email alerts), enriching detections with threat intelligence and watchlists, leveraging the investigation graph for incident triage, and performing advanced KQL hunting with notebook-based visualizations—all within a cost-optimized Azure environment.",
      technologies: [
        "Microsoft Sentinel",
        "Azure Log Analytics",
        "Kusto Query Language (KQL)",
        "Azure Logic Apps",
        "Azure Monitor Agent",
        "Azure Machine Learning",
        "Jupyter Notebooks",
        "MSTICPy",
        "Azure Active Directory",
        "Azure Resource Manager",
        "REST APIs",
        "PowerShell",
        "Bash",
        "MITRE ATT&CK Framework",
        "TAXII Threat Intelligence",
        "CSV Watchlists",
        "Microsoft Defender Portal",
        "Azure Virtual Machines",
      ],
      features: [
        "End-to-end Microsoft Sentinel deployment from scratch including Resource Groups, Log Analytics workspaces, and Sentinel enablement.",
        "Multi-source data onboarding through Azure Monitor Agent (Windows/Linux VMs), Office 365 connectors, Azure Activity logs, and Azure AD Sign-in telemetry.",
        "Custom KQL analytics rules for RDP brute-force detection with MITRE ATT&CK mapping, entity extraction (Account, IP, Hostname), and automated incident generation.",
        "Intelligent alert grouping and incident severity mapping based on configurable thresholds and entity aggregation.",
        "Fully automated incident response through Logic Apps playbooks with System-Assigned Managed Identity, enabling VM power-off actions and email notifications via Office 365 Outlook.",
        "Threat intelligence integration via TAXII feeds and manual indicator uploads, with watchlist-based enrichment for detection rules.",
        "Interactive investigation capabilities using entity pages, visual investigation graphs, and timeline analysis for incident triage.",
        "Advanced hunting with Jupyter notebooks and MSTICPy, including KQL execution, data visualization, and timeline analysis.",
        "Case management with ownership assignment, status tracking, and automated playbook triggers through automation rules.",
        "Comprehensive cost management with configurable retention policies and cleanup procedures to minimize Azure spend.",
      ],
      challenges: [
        "Configuring managed identity RBAC permissions correctly to allow Logic Apps to trigger VM power-off actions without compromising security.",
        "Implementing robust KQL queries that accurately detect brute-force attempts while minimizing false positives through proper field mapping and threshold tuning.",
        "Ensuring seamless integration between Sentinel analytics rules and automation rules to trigger playbooks reliably without API permission errors.",
        "Setting up Azure Machine Learning compute instances and msticpyconfig.yaml configuration for notebook authentication and workspace connectivity.",
        "Managing cost optimization by balancing retention periods, VM sizes, and compute instance runtime to keep the lab affordable.",
        "Handling TAXII connector configuration for threat intelligence feeds and understanding the transition from legacy ThreatIntelligenceIndicator to new ThreatIntelIndicators tables.",
      ],
      learned: [
        "Deep understanding of Microsoft Sentinel architecture including workspace configuration, data ingestion pipelines, and analytics rule creation.",
        "Advanced KQL query writing for security detection, including event correlation, aggregation, time-window analysis, and entity mapping.",
        "Azure Logic Apps automation with managed identities, including RBAC role assignments, HTTP triggers, and integration with Sentinel incident data.",
        "Threat intelligence integration strategies using TAXII connectors, manual indicators, and CSV watchlists for detection enrichment.",
        "Jupyter notebook-based hunting using MSTICPy library for security analytics, including data visualization, timeline analysis, and entity pivoting.",
        "Azure infrastructure management including Virtual Machines, Log Analytics workspaces, Azure Machine Learning, and container-based Logic Apps.",
        "Complete SOC workflow from detection engineering and incident response to case management and automated remediation.",
        "Microsoft Sentinel investigation techniques using entity pages, graph visualization, and long-range historical searches.",
      ],
      featured: true,
      defaultFiles: [
        {
          name: "Sentinel Analyst Lab.pdf",
          type: "pdf",
          url: "/projects/Sentinel Analyst Lab.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj11",
      title: "Bank SMS to Notion Automation",
      company: "Self-Learning & Automation",
      date: "July 2026",
      shortDescription:
        "Automated transaction parsing pipeline routing Bank SMS (Al-Ahly, CIB, Banque Misr) into Notion using MacroDroid, n8n webhook, and custom Regex parsing logic.",
      longDescription:
        "Designed and built an offline-triggered real-time financial tracking automation system. The architecture monitors incoming transaction SMS messages from major Egyptian banks (Al-Ahly, CIB, Banque Misr), captures transaction details using MacroDroid/SMS-to-URL Forwarder on Android, securely forwards it to a self-hosted n8n webhook on Azure App Services (Docker), parses payloads via custom JS Regex functions (resolving merchant, transfer direction, and Instapay fees), and routes the transactions into a multi-table relational Notion database structure.",
      technologies: [
        "n8n Automation",
        "MacroDroid",
        "Notion API",
        "JavaScript",
        "Regex",
        "Azure App Service",
        "Docker Containers",
        "REST APIs Integration",
      ],
      features: [
        "Fully automated outgoing and incoming transaction synchronization for Al-Ahly and CIB banks.",
        "Automated ATM credit and deposit tracking for Banque Misr.",
        "Offline-to-online trigger pipeline using MacroDroid variables and secure HTTP POST webhook requests.",
        "Custom JavaScript Regex parsing engine isolating transaction types, amounts, sender/recipient names, and merchants in both Arabic and English text.",
        "Intelligent Instapay transfer fee calculation (0.1% of amount, min 0.5 EGP, max 20 EGP) automatically folded into total row expenditures.",
        "Relational database routing mapping transactions to three distinct databases in Notion (Income, Expense, Transfer) with custom field properties.",
      ],
      challenges: [
        "Ensuring robust multi-language name and merchant extraction across Arabic and Latin character sets in banker notifications.",
        "Configuring persistent container storage and environment variables for n8n inside Azure App Services (Web App for Containers) to avoid loss of state on container restarts.",
        "Eliminating false positives and transaction errors by introducing IF and Switch filter gates before executing Notion inserts.",
      ],
      learned: [
        "Advanced n8n workflow orchestration utilizing HTTP triggers, Function nodes, and dynamic API configurations.",
        "Structuring complex regex capturing groups to securely match highly variable SMS notification layouts.",
        "Azure container app services management, persistent storage mounts, and network webhook routing.",
      ],
      featured: true,
      defaultFiles: [
        {
          name: "Bank SMS to Notion Automation.pdf",
          type: "pdf",
          url: "/projects/Bank SMS to Notion Automation.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj1",
      title: "VM Deletion Watchdog",
      company: "Global Brands Group (GBG)",
      date: "July 2026",
      shortDescription:
        "Automated Sentinel SOAR workflow detecting unauthorized Azure VM deletions using Azure Activity Logs and Logic App containment.",
      longDescription:
        "Architected a comprehensive end-to-end Microsoft Sentinel SOAR workflow to monitor and instantly respond to unauthorized Azure virtual machine deletions. The system ingests subscription-level Azure Activity logs, processes them via Sentinel analytics, and triggers a Logic App playbook to enrich and neutralize threats.",
      technologies: [
        "Microsoft Sentinel",
        "Azure Logic Apps",
        "KQL",
        "Azure Activity Logs",
        "Microsoft Teams API",
        "Azure Policy",
      ],
      features: [
        "Real-time Azure Activity log ingestion and filtering for deletion operations.",
        "KQL-based analytics rule detecting anomalous deletion triggers.",
        "Logic App playbook for automated entity enrichment (fetching actor identity, IP, resource details).",
        "Adaptive Microsoft Teams adaptive card notifications for security staff review.",
      ],
      challenges: [
        "Resolving entity mapping delays and ensuring Logic App triggered with minimum latency from log ingestion.",
        "Handling permissions gracefully via Managed Identities for subscription-wide read properties.",
      ],
      learned: [
        "In-depth mastery of Microsoft Sentinel integration with Logic App playbooks.",
        "Utilizing KQL queries for parsing JSON properties inside activity logs.",
        "Leveraging Azure Policy to enforce diagnostic logging across multiple resource groups.",
      ],
      featured: true,
      defaultFiles: [
        {
          name: "VM Deletion Watchdog.pdf",
          type: "pdf",
          url: "/projects/VM Deletion Watchdog.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj2",
      title: "MDE Attack Disruption Simulation",
      company: "Global Brands Group (GBG)",
      date: "July 2026",
      shortDescription:
        "Multi-stage cyber attack simulation (Kali Linux -> Azure VM) validating Microsoft Defender for Endpoint (MDE) automated containment.",
      longDescription:
        "Executed a realistic multi-stage red team simulation targeting an MDE-onboarded Windows VM from Kali Linux, covering reconnaissance, credential brute forcing, and payload execution. This simulation validated Defender's automated disruption and verified remediation actions.",
      technologies: [
        "Microsoft Defender for Endpoint (MDE)",
        "Kali Linux",
        "Azure VMs",
        "Attack Simulation",
        "Incident Containment",
        "PowerShell",
      ],
      features: [
        "Kali Linux reconnaissance, dictionary-based credential brute force, and obfuscated payload execution.",
        "Verification of MDE's automated device isolation playbooks upon detection of high-confidence correlated signals.",
        "Validation of device group isolation boundaries, agent status logs, and registry state validation.",
      ],
      challenges: [
        "Configuring Kali payloads to trigger Defender's behavioral heuristic alerts without standard static signatures.",
        "Synchronizing remediation levels across distinct device groups for deterministic response verification.",
      ],
      learned: [
        "Advanced configurations of MDE automated investigation & response (AIR).",
        "Analysis of Defender telemetry logs and understanding sensor heartbeat responses.",
        "Documenting rollback protocols for host isolation in emergency outage scenarios.",
      ],
      featured: true,
      defaultFiles: [
        {
          name: "MDE Attack Disruption Simulation.pdf",
          type: "pdf",
          url: "/projects/MDE Attack Disruption Simulation.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj3",
      title: "Ingesting Sysmon Data into Microsoft Sentinel",
      company: "Global Brands Group (GBG)",
      date: "July 2026",
      shortDescription:
        "Deployment of Sysmon with custom XML filtering on endpoints, ingested into Microsoft Sentinel using Azure Arc and DCRs.",
      longDescription:
        "Enhanced endpoint monitoring by deploying Sysmon with a custom security filter (such as SwiftOnSecurity-based configuration) on hybrid endpoints. Machines were onboarded to Microsoft Sentinel via Azure Arc and custom Data Collection Rules (DCRs) to collect Windows Security and Sysmon logs.",
      technologies: [
        "Microsoft Sentinel",
        "Sysmon",
        "Azure Arc",
        "Data Collection Rules (DCRs)",
        "KQL",
        "Log Analytics Workspace",
      ],
      features: [
        "Deployment of Sysmon with fine-tuned XML filters matching LOLBins abuse, process injection, and LSASS dumping attempts.",
        "Azure Arc onboarding for on-premises/hybrid Windows servers.",
        "Custom DCR (Data Collection Rules) writing to route specific Windows Event IDs directly to Azure Log Analytics.",
        "Implementation of Sentinel advanced threat hunting queries in KQL.",
      ],
      challenges: [
        "Tuning Sysmon XML configurations to minimize noise (e.g. browser file creations) while capturing high-fidelity parent-child process telemetries.",
        "Debugging DCR JSON structure to properly parse the Event ID filters for Windows Event Channels.",
      ],
      learned: [
        "Deep architectural insight into Azure Monitor Agents and Log Analytics schema layouts.",
        "Advanced KQL skills including let-statements, string parsing, and join operations for correlation.",
        "Configuring Azure Arc hybrid infrastructure securely.",
      ],
      featured: false,
      defaultFiles: [
        {
          name: "Ingesting Sysmon Data into Microsoft Sentinel.pdf",
          type: "pdf",
          url: "/projects/Ingesting Sysmon Data into Microsoft Sentinel.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj4",
      title: "Enterprise Security Lab: Microsoft 365 Defense",
      company: "GBG Academy",
      date: "May 2026",
      shortDescription:
        "Zero-Trust framework implementation across 1,800+ simulated endpoints with Conditional Access, Intune compliance, and Purview DLP.",
      longDescription:
        "Architected and engineered a comprehensive, production-grade security framework across a simulated enterprise of 1,800+ hybrid endpoints. Implemented Zero-Trust identity protections, device configuration standards via Intune, and Microsoft Purview DLP controls to protect regulated data.",
      technologies: [
        "Microsoft Defender XDR",
        "Microsoft Intune",
        "Microsoft Entra ID",
        "Microsoft Purview DLP",
        "Conditional Access",
        "PIM",
        "Microsoft Sentinel",
      ],
      features: [
        "Zero-Trust identity enforcement with MFA, role-based Privileged Identity Management (PIM), and risk-based Conditional Access policies.",
        "MDM & MAM enrollment configurations in Intune to enforce device encryption, firewalls, and application patching policies.",
        "Data Loss Prevention (DLP) implementation with Purview sensitivity labels to prevent leakage of regulated IP and PHI.",
        "Telemetry aggregation from MDE, MDO, MDI, and Defender for Cloud Apps into a central Sentinel SIEM workspace.",
      ],
      challenges: [
        "Ensuring smooth rollouts without locking out administrative groups by utilizing Conditional Access Report-Only mode.",
        "Structuring Purview DLP policies to prevent false positives during legitimate collaborative sharing cycles.",
      ],
      learned: [
        "Designing defense-in-depth security architectures spanning Identity, Endpoint, Data, and Cloud layers.",
        "Interpreting cross-suite telemetry logs to identify complex persistent threats (APTs).",
        "Managing PIM activation policies and auditing administrator behavior.",
      ],
      featured: true,
      defaultFiles: [
        {
          name: "Enterprise Security Lab End-to-End Microsoft 365 Defense Implementation.pdf",
          type: "pdf",
          url: "/projects/Enterprise Security Lab End-to-End Microsoft 365 Defense Implementation.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj5",
      title: "Centralized Logging and Security Monitoring Using Splunk",
      company: "Self-Learning",
      date: "January 2026",
      shortDescription:
        "Deployment of Splunk Enterprise on Rocky Linux, forwarding telemetry from Kali Linux, configuring indexes and dashboards.",
      longDescription:
        "Designed and deployed a self-contained security monitoring lab centering Splunk Enterprise hosted on a Rocky Linux virtual machine. Configured secure syslog log forwarding from remote attacking nodes and implemented threat dashboards for incident monitoring.",
      technologies: [
        "Splunk Enterprise",
        "Rocky Linux",
        "Kali Linux",
        "rsyslog",
        "Splunk Universal Forwarder",
        "Linux Hardening",
      ],
      features: [
        "Installation and hardening of Splunk Enterprise on Rocky Linux with custom systemd service files.",
        "Log aggregation from Kali Linux attacking systems using rsyslog daemon.",
        "Splunk Universal Forwarder configuration on target nodes to stream system audits securely.",
        "Custom dashboards, alerts, and field-extraction rules for tracking anomalous SSH logins and sudo executions.",
      ],
      challenges: [
        "Parsing customized Linux syslog fields to index events properly without default source-type templates.",
        "Configuring firewall policies and TLS settings to encrypt logs in transit.",
      ],
      learned: [
        "Linux server administration, service isolation, and firewall configurations (firewalld).",
        "Splunk Query Language (SPL) for real-time aggregation and statistics.",
        "Designing alerts with throttles to prevent alert fatigue.",
      ],
      featured: false,
      defaultFiles: [
        {
          name: "Centralized Logging and Security Monitoring Using Splunk.pdf",
          type: "pdf",
          url: "/projects/Centralized Logging and Security Monitoring Using Splunk.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj6",
      title: "Enterprise Network Design & Security Implementation",
      company: "National Telecommunication Institute (NTI)",
      date: "December 2025",
      shortDescription:
        "Dual-stack IPv4/IPv6 corporate network with VLAN segmentation, OSPF routing, Zone-Based Firewalls, and Cisco ASA DMZ.",
      longDescription:
        "Engineered a dual-stack IPv4/IPv6 enterprise corporate network using Cisco equipment simulators, emphasizing secure isolation, resilient routing, and policy-driven traffic flow.",
      technologies: [
        "Cisco Packet Tracer",
        "OSPF / OSPFv3",
        "Zone-Based Firewall (ZPF)",
        "Cisco ASA",
        "IPSec VPN",
        "RADIUS/TACACS+",
      ],
      features: [
        "Enterprise network design with multi-VLAN segmentation and inter-VLAN OSPF/OSPFv3 routing.",
        "Zone-Based Firewall (ZPF) configuration on routers to define access boundaries.",
        "Cisco ASA firewall implementation to isolate public-facing web/mail resources in a demilitarized zone (DMZ).",
        "Site-to-Site IPSec VPN tunnel configuration between branches.",
        "AAA security integration using local RADIUS and TACACS+ protocols.",
      ],
      challenges: [
        "Overcoming routing table convergence discrepancies in OSPFv3 when configuring active dual-stack states.",
        "Writing packet filtering rules on Cisco ASA to allow SMTP traffic without exposing backend application servers.",
      ],
      learned: [
        "CCNA-level routing, switching, and advanced enterprise topology modeling.",
        "Deep technical comprehension of stateful packet inspection, IPSec tunnel negotiations, and security zone logic.",
        "Configuring administrative access privileges safely.",
      ],
      featured: false,
      defaultFiles: [
        {
          name: "Enterprise Network Design & Security Implementation.pdf",
          type: "pdf",
          url: "/projects/Enterprise Network Design & Security Implementation.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj7",
      title: "Splunk Threat Hunting Use Case Development",
      company: "National Telecommunication Institute (NTI)",
      date: "December 2025",
      shortDescription:
        "MITRE ATT&CK focused threat hunting use case development in Splunk, detecting process injection and LOLBins abuse.",
      longDescription:
        "Developed specialized SPL-based threat hunting playbooks mapped to MITRE ATT&CK techniques, focused on recognizing post-exploitation patterns in Windows enterprise environments.",
      technologies: [
        "Splunk SIEM",
        "MITRE ATT&CK",
        "Sysmon Logs",
        "SPL (Splunk Search)",
        "Threat Hunting",
      ],
      features: [
        "Mapped detection logic to MITRE ATT&CK techniques such as T1059 (Command and Scripting Interpreter) and T1055 (Process Injection).",
        "Constructed complex SPL correlation queries to identify anomalous parent-child execution threads.",
        "Documented exhaustive response playbooks outlining verification, containment, and recovery recommendations.",
      ],
      challenges: [
        "Developing queries with high precision to avoid false positives triggered by normal administrative PowerShell updates.",
        "Structuring efficient queries that perform within memory boundaries on large Splunk indexes.",
      ],
      learned: [
        "Practical application of the MITRE ATT&CK framework within Blue Team operations.",
        "Advanced searching, parsing, and correlation techniques using SPL.",
        "Standardized incident documentation guidelines.",
      ],
      featured: false,
      defaultFiles: [
        {
          name: "Splunk Threat Hunting Use Case.pdf",
          type: "pdf",
          url: "/projects/Splunk Threat Hunting Use Case.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj8",
      title: "Lumma Stealer PCAP Investigation",
      company: "National Telecommunication Institute (NTI)",
      date: "November 2025",
      shortDescription:
        "In-depth packet capture (PCAP) investigation of Lumma Stealer malware to identify Indicators of Compromise (IOCs).",
      longDescription:
        "Conducted an intensive investigation of malicious network traffic captures of Lumma Stealer infections using Wireshark. Identified command-and-control (C2) servers, patterns of data exfiltration, and host profiles.",
      technologies: [
        "Wireshark",
        "Network Forensics",
        "Lumma Stealer",
        "PCAP Analysis",
        "Indicators of Compromise (IOCs)",
      ],
      features: [
        "Reconstructed TCP streams to audit plain-text data transfers and encrypted payloads.",
        "Identified compromised domain endpoints, malicious IP nodes, and specific URI query configurations.",
        "Compiled detailed forensic reports with Indicators of Compromise (IOCs) and Suricata/Snort detection signatures.",
      ],
      challenges: [
        "Identifying C2 heartbeats among massive quantities of background HTTP/HTTPS noise in the network environment.",
        "De-obfuscating custom payload strings transferred via HTTP POST parameters.",
      ],
      learned: [
        "Network-layer forensics, protocol parsing, and packet-level data structure tracking.",
        "Characteristics of modern Trojan data exfiltrators.",
        "Documenting forensic details to trigger defense actions.",
      ],
      featured: false,
      defaultFiles: [
        {
          name: "Lumma Stealer PCAP Investigation.pdf",
          type: "pdf",
          url: "/projects/Lumma Stealer PCAP Investigation.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj9",
      title: "Metasploitable Attack Simulation",
      company: "National Telecommunication Institute (NTI)",
      date: "November 2025",
      shortDescription:
        "Vulnerability scanning with Nmap and exploitation via Metasploit against target machine inside a secure lab.",
      longDescription:
        "Conducted controlled offensive simulations against Metasploitable targets within a secured network environment to analyze vulnerabilities, test remediation actions, and study attack mechanics.",
      technologies: [
        "Nmap",
        "Metasploit",
        "Vulnerability Scanning",
        "Kali Linux",
        "Metasploitable",
        "C2 Infrastructure",
      ],
      features: [
        "Host discovery, port mapping, and service version enumeration using Nmap scripts.",
        "Identification and exploitation of misconfigured daemons (such as VSFTPD backdoor and Samba weaknesses) via Metasploit.",
        "Post-exploitation activities including payload deployment, basic administrative pivoting, and command-and-control connection testing.",
      ],
      challenges: [
        "Crafting exploit commands to maintain session stability on unstable legacy operating systems.",
        "Defining firewall rules to guarantee complete isolation of the attacking Kali box and target machines.",
      ],
      learned: [
        "Offensive methodologies used by penetration testers.",
        "Configuring security controls (e.g. host firewalls, service patches) to eliminate scanned vulnerabilities.",
        "Correlating offensive operations with events seen in host logs.",
      ],
      featured: false,
      defaultFiles: [
        {
          name: "Metasploitable Attack Simulation.pdf",
          type: "pdf",
          url: "/projects/Metasploitable Attack Simulation.pdf",
          category: "Documentation",
        },
      ],
    },
    {
      id: "proj10",
      title: "Integrated Smart Vehicle Management System (ISVMS)",
      company: "Zagazig University (Graduation Project)",
      date: "June 2025",
      shortDescription:
        "IoT-based smart vehicle system incorporating collision avoidance, automatic parking, real-time telemetry dashboard, and mobile control.",
      longDescription:
        "Designed and engineered an IoT-enabled smart vehicle management framework featuring advanced automated control loops, mobile interaction, and an analytical dashboard for environment monitoring.",
      technologies: [
        "ESP32",
        "ATmega32 microcontroller",
        "Android App (Java/Kotlin)",
        "Web Dashboard",
        "Sensors Integration",
        "IoT Core",
      ],
      features: [
        "Sensors array processing including ultrasonic distance, temperature, and environment sensors on ATmega32.",
        "Collision avoidance algorithms and automated parallel parking logic.",
        "ESP32 Wi-Fi module streaming telemetry data to a centralized web dashboard in real time.",
        "Custom-designed Android application allowing manual driving overrides, parameter viewing, and emergency stops.",
      ],
      challenges: [
        "Synchronizing clock signals and ensuring reliable communication via UART/I2C between ATmega32 and ESP32 under dynamic loads.",
        "Optimizing the Android layout and rendering loops to update live sensor coordinates without interface lag.",
      ],
      learned: [
        "Embedded systems programming in C/C++, register configurations, and sensor calibration.",
        "Developing mobile app interfaces with smooth client-server interactions.",
        "Designing real-time analytical dashboards using web socket technologies.",
      ],
      featured: false,
      defaultFiles: [
        {
          name: "Graduation_Project_Final_Report.pdf",
          type: "pdf",
          url: "/projects/Graduation book.pdf",
          category: "Documentation",
        },
      ],
    },
  ],
  certifications: [
    {
      id: "cert1",
      name: "Microsoft 365 Security",
      organization: "GBG Academy",
      date: "May 2026",
      skillsGained: [
        "Microsoft Defender XDR",
        "Microsoft Intune",
        "Microsoft Purview DLP",
        "Entra ID Protection",
      ],
      fileType: "pdf",
      fileUrl: "/certificates/Microsoft 365 Security.pdf",
    },
    {
      id: "cert2",
      name: "Blue Team Cybersecurity Boot Camp",
      organization: "National Telecommunication Institute (NTI)",
      date: "January 2026",
      skillsGained: [
        "Splunk SIEM",
        "YARA Analysis",
        "Incident Response",
        "Linux/Windows Hardening",
        "CompTIA Security+ Fundamentals",
      ],
      fileType: "pdf",
      fileUrl: "/certificates/Blue Team Cybersecurity Boot Camp.pdf",
    },
    {
      id: "cert3",
      name: "Network Security ",
      organization: "National Telecommunication Institute (NTI)",
      date: "January 2026",
      skillsGained: [
        "Zone-Based Firewalls",
        "Cisco ASA DMZ Routing",
        "IPSec VPN Tunneling",
        "AAA Administration",
        "Access Control Lists",
      ],
      fileType: "pdf",
      fileUrl: "/certificates/Network Security.pdf",
    },
    {
      id: "cert4",
      name: "Certified Cybersecurity Educator Professional (CCEP)",
      organization: "CCEP Board",
      date: "December 2025",
      skillsGained: [
        "Security Concept Training",
        "Hands-on Lab Design",
        "Technical Mentoring",
        "Curriculum Development",
      ],
      fileType: "pdf",
      fileUrl:
        "/certificates/Certified Cybersecurity Educator Professional (CCEP).pdf",
    },
    {
      id: "cert5",
      name: "Cybersecurity Academy (Graduate Level)",
      organization: "National Telecommunication Institute (NTI)",
      date: "September 2025",
      skillsGained: [
        "Advanced Vulnerability Assessment",
        "Cryptography Basics",
        "Threat Intelligence",
        "Advanced Incident Handling",
      ],
      fileType: "pdf",
      fileUrl: "/certificates/Cybersecurity Academy (Graduate Level).pdf",
    },
    {
      id: "cert6",
      name: "Windows Server Administration (MCSA equivalent)",
      organization: "YouTube (Online Accredited)",
      date: "July 2025",
      skillsGained: [
        "Active Directory Directory Services",
        "Group Policy Object (GPO) Deployment",
        "Windows Server Update Services (WSUS)",
        "DNS/DHCP Management",
      ],
      fileType: "image",
      // fileUrl: "/certificates/windows-server-mcsa.png"
    },
    {
      id: "cert7",
      name: "Cisco Certified Network Associate (CCNA course)",
      organization: "National Telecommunication Institute (NTI)",
      date: "September 2024",
      skillsGained: [
        "VLAN Segmentation",
        "OSPF Routing Protocols",
        "IP Services (NAT, DHCP, DNS)",
        "Network Topology Design",
      ],
      fileType: "pdf",
      fileUrl:
        "/certificates/Cisco Certified Network Associate (CCNA course).pdf",
    },
  ],
  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "Very Good" },
  ],
  volunteer: [
    "Created and shared study notes and summaries for university courses to help classmates better understand complex topics.",
    "Wrote and organized educational materials across different subjects to make learning easier for peers.",
  ],
};

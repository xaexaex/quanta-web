"use client";

import { useState } from "react";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

const useCases = [
  {
    id: "provenance",
    title: "AI Data Provenance",
    heading: "Anchor Inferences On-Chain",
    description: "Allow your AI agent to commit its inference outputs, logs, or web scraping results immutably to the ledger. This permanently anchors the data to the agent's identity and timestamp.",
    steps: [
      "Initialize the WASM Engine",
      "Agent Generates its own Wallet",
      "Serialize custom AI payload data",
      "Autonomously Sign and Submit"
    ],
    language: "typescript",
    code: `// 1. Import the Quanta SDK
import { QuantaWallet, TransactionBuilder, QuantaClient, initQuanta } from 'quanta-sdk';

// 2. Initialize WASM for Post-Quantum Crypto
await initQuanta();

// 3. Agent Generates its own Wallet
const walletInfo = QuantaWallet.create();
const agentWallet = QuantaWallet.fromMnemonic(walletInfo.mnemonic);

// 4. Commit AI Inference Output to Chain
const checkpointData = { model_hash: "0xabc...", confidence: 0.98 };
const payload = Array.from(new TextEncoder().encode(JSON.stringify(checkpointData)));

const tx = TransactionBuilder.createWithData(
  agentWallet.address, // Sender
  agentWallet.address, // Self-send to record data
  0, // 0 QUA amount
  payload,
  nonce
);

// 5. Autonomously Sign and Submit
const signedTx = TransactionBuilder.sign(tx, agentWallet);
const client = new QuantaClient('https://rpc.quantachain.org');
await client.submitTransaction(signedTx);`
  },
  {
    id: "escrow",
    title: "Trustless Escrows",
    heading: "Secure AI Task Outsourcing",
    description: "Solve the 'trust' problem in AI workflows. A human employer locks funds on-chain, and the AI agent can only claim them by providing a cryptographic proof of task completion.",
    steps: [
      "Employer deploys the escrow",
      "Set the target hash (expected result)",
      "Agent computes the result",
      "Agent claims escrow with the preimage"
    ],
    language: "bash",
    code: `# 1. Employer locks 50 QUA for a specific task output hash
quanta-wallet deploy-escrow \\
  --beneficiary 0xWorkerAddressHere \\
  --secret-hash 3a7f8b9cd... \\
  --amount 50.0

# 2. Worker (AI) receives the Contract Address (0xc_...)

# 3. Once the AI worker finishes the task, it proves completion 
# by submitting the raw data (the preimage) whose hash matches.
quanta-wallet claim-escrow \\
  --contract-address 0xc_ContractAddressHere \\
  --preimage deadbeef...

# If SHA3-256(preimage) == secret-hash, funds transfer atomically.`
  },
  {
    id: "agent-jobs",
    title: "Native Agent Jobs",
    heading: "M2M Micro-Transactions",
    description: "M2M Micro-transactions where DePIN nodes or AI swarms negotiate resources directly on-chain using the native TEMPLATE_AGENT_JOB contract.",
    steps: [
      "Deploy the Agent Job contract",
      "Specify worker criteria",
      "Worker accepts the job",
      "Fast 6-second settlement via AlephBFT"
    ],
    language: "typescript",
    code: `// 1. Deploy Agent Job Contract via SDK
const initArgs = JSON.stringify({ 
  job_type: "gpu_compute",
  max_reward: 100 
});

const deployTx = TransactionBuilder.createContractDeploy(
  employerWallet.address,
  "TEMPLATE_AGENT_JOB", // Native contract template
  initArgs,
  100, // Lock 100 QUA
  nonce
);

await client.submitTransaction(TransactionBuilder.sign(deployTx, employerWallet));

// 2. AI Worker executes the job and submits proof
const callArgs = JSON.stringify({ proof: "0x..." });

const callTx = TransactionBuilder.createContractCall(
  workerWallet.address,
  "0xc_ContractAddressHere",
  "complete_job",
  callArgs,
  nonce
);

await client.submitTransaction(TransactionBuilder.sign(callTx, workerWallet));`
  }
];

export default function InteractiveUseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);

  const currentCase = useCases.find(c => c.id === activeTab) || useCases[0];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Workflow Selection */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>
            Select an Integration Workflow
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose a use case below to see exactly how it works under the hood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                activeTab === uc.id 
                  ? "bg-[#C4ED5F] border-[#C4ED5F] shadow-lg shadow-[#C4ED5F]/20" 
                  : "bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <h3 className={`text-lg font-bold mb-2 ${activeTab === uc.id ? "text-[#7bb800]" : "text-black"}`}>
                {uc.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {uc.description}
              </p>
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 transition-all duration-500" key={currentCase.id}>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[rgba(196,237,95,0.4)] bg-[#C4ED5F]/10 text-[#7bb800] text-sm font-bold tracking-wide uppercase">
               <Terminal className="w-4 h-4" /> {currentCase.title}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              {currentCase.heading}
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              {currentCase.description}
            </p>
            <ul className="space-y-4 mb-8">
              {currentCase.steps.map((step, idx) => (
                <li key={idx} className="flex items-center gap-3 text-black font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#C4ED5F] flex items-center justify-center flex-shrink-0 text-sm">{idx + 1}</div>
                  {step}
                </li>
              ))}
            </ul>
            <Link href="https://quantachain.gitbook.io/quantachain-docs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#7bb800] font-bold hover:gap-3 transition-all">
              Explore the full documentation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex-1 w-full relative">
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-[#C4ED5F]/20 blur-3xl rounded-[3rem] transform -rotate-6 scale-105 transition-all duration-500" />
            
            <div className="relative bg-[#0d0d0d] rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-800 overflow-x-auto text-sm md:text-base font-mono text-gray-300 h-full min-h-[400px]">
              <pre className="!bg-transparent !p-0 m-0 leading-relaxed">
                <code className={`language-${currentCase.language}`}>
                  {currentCase.code.split('\n').map((line, i) => {
                    // Simple syntax highlighting heuristic for demo
                    const isComment = line.trim().startsWith('//') || line.trim().startsWith('#');
                    let highlightedLine = isComment 
                      ? `<span class="text-gray-500">${line}</span>`
                      : line;
                      
                    if (!isComment) {
                      // First extract strings to protect them from other regexes
                      const strings: string[] = [];
                      highlightedLine = highlightedLine.replace(/(['"].*?['"])/g, (match) => {
                        strings.push(match);
                        return `__STR_${strings.length - 1}__`;
                      });

                      // Highlight keywords
                      highlightedLine = highlightedLine
                        .replace(/\b(const|await|import|from|new)\b/g, '<span class="text-purple-400">$1</span>')
                        .replace(/\b(TransactionBuilder|QuantaWallet|QuantaClient|Array|TextEncoder|JSON)\b/g, '<span class="text-yellow-200">$1</span>')
                        .replace(/(\b[a-zA-Z_]\w*\s*)(?=\()/g, '<span class="text-blue-300">$1</span>');

                      // Restore and highlight strings
                      strings.forEach((str, idx) => {
                        highlightedLine = highlightedLine.replace(`__STR_${idx}__`, `<span class="text-green-300">${str}</span>`);
                      });
                    }
                            
                    return (
                      <span key={i} dangerouslySetInnerHTML={{ __html: highlightedLine + '\n' }} />
                    );
                  })}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

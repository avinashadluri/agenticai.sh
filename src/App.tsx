import React from 'react';
import { Brain, Cpu, Zap, Code, Rocket, BarChart, Bot, Layers, Workflow, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                The Rise of AI Agents
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Autonomous systems that perceive, decide, and act on your behalf
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                  Explore Agents
                </button>
                <button className="px-8 py-3 bg-transparent border border-cyan-500 rounded-full font-medium hover:bg-cyan-950/30 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-4 bg-black rounded-full flex items-center justify-center">
                  <Brain size={120} className="text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </header>

      {/* What is an AI Agent Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What is an <span className="text-cyan-400">AI Agent</span>?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="AI Agent Concept" 
                className="rounded-xl shadow-2xl shadow-cyan-500/10"
              />
            </div>
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-cyan-950/50 p-3 rounded-lg">
                  <Cpu className="text-cyan-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Autonomous Decision Making</h3>
                  <p className="text-gray-400">
                    Unlike traditional software, AI agents can make decisions independently based on their understanding of the environment and goals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-purple-950/50 p-3 rounded-lg">
                  <Zap className="text-purple-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Goal-Oriented Behavior</h3>
                  <p className="text-gray-400">
                    Agents are designed to achieve specific objectives, adapting their strategies as needed to reach their goals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-950/50 p-3 rounded-lg">
                  <Workflow className="text-blue-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-gray-400">
                    AI agents can improve over time by learning from interactions, feedback, and new data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How AI Agents Work */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How <span className="text-purple-400">AI Agents</span> Work</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding the core components and processes that power AI agents
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <div className="bg-purple-950/50 p-4 rounded-lg inline-block mb-6">
                <Brain className="text-purple-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Perception</h3>
              <p className="text-gray-400">
                Agents gather information from their environment through sensors, APIs, data feeds, or user inputs. This data is processed to create an internal representation of the world.
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="bg-cyan-950/50 p-4 rounded-lg inline-block mb-6">
                <Cpu className="text-cyan-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Reasoning</h3>
              <p className="text-gray-400">
                Using advanced algorithms and models, agents process information, identify patterns, and make decisions based on their goals and constraints.
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <div className="bg-blue-950/50 p-4 rounded-lg inline-block mb-6">
                <Zap className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Action</h3>
              <p className="text-gray-400">
                Agents execute actions in their environment, whether digital (sending emails, coding) or physical (controlling robots). These actions aim to achieve the agent's objectives.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-center">The Agent Loop</h3>
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center">
                  <div className="bg-purple-950/50 p-4 rounded-full inline-block mb-4">
                    <Layers className="text-purple-400 h-6 w-6" />
                  </div>
                  <p className="text-gray-400">Perceive</p>
                </div>
                
                <div className="hidden md:block">
                  <svg width="100" height="20">
                    <line x1="0" y1="10" x2="100" y2="10" stroke="#4B5563" strokeWidth="2" strokeDasharray="5,5" />
                    <polygon points="95,5 100,10 95,15" fill="#4B5563" />
                  </svg>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-950/50 p-4 rounded-full inline-block mb-4">
                    <Brain className="text-cyan-400 h-6 w-6" />
                  </div>
                  <p className="text-gray-400">Think</p>
                </div>
                
                <div className="hidden md:block">
                  <svg width="100" height="20">
                    <line x1="0" y1="10" x2="100" y2="10" stroke="#4B5563" strokeWidth="2" strokeDasharray="5,5" />
                    <polygon points="95,5 100,10 95,15" fill="#4B5563" />
                  </svg>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-950/50 p-4 rounded-full inline-block mb-4">
                    <Zap className="text-blue-400 h-6 w-6" />
                  </div>
                  <p className="text-gray-400">Act</p>
                </div>
                
                <div className="hidden md:block">
                  <svg width="100" height="20">
                    <line x1="0" y1="10" x2="100" y2="10" stroke="#4B5563" strokeWidth="2" strokeDasharray="5,5" />
                    <polygon points="95,5 100,10 95,15" fill="#4B5563" />
                  </svg>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-950/50 p-4 rounded-full inline-block mb-4">
                    <Sparkles className="text-green-400 h-6 w-6" />
                  </div>
                  <p className="text-gray-400">Learn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents vs Generative AI */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Agents vs <span className="text-blue-400">Generative AI</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding the key differences between AI agents and traditional generative AI systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cyan-950/50 p-3 rounded-lg">
                  <Bot className="text-cyan-400 h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">AI Agents</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-cyan-400 mt-1">•</div>
                  <p className="text-gray-400"><span className="text-white font-medium">Autonomous:</span> Can make decisions and take actions without human intervention</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-cyan-400 mt-1">•</div>
                  <p className="text-gray-400"><span className="text-white font-medium">Goal-oriented:</span> Designed to achieve specific objectives</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-cyan-400 mt-1">•</div>
                  <p className="text-gray-400"><span className="text-white font-medium">Interactive:</span> Can engage with environments and tools</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-cyan-400 mt-1">•</div>
                  <p className="text-gray-400"><span className="text-white font-medium">Persistent:</span> Maintain state and memory across interactions</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-cyan-400 mt-1">•</div>
                  <p className="text-gray-400"><span className="text-white font-medium">Tool-using:</span> Can leverage external tools and APIs</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-950/50 p-3 rounded-lg">
                  <Sparkles className="text-purple-400 h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">Generative AI</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-gray-400"><span className="text-white font-medium">Reactive:</span> Responds to specific prompts or inputs</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-gray-400"><span className="text-white font-medium">Content-focused:</span> Primarily creates content (text, images, etc.)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-gray-400"><span className="text-white font-medium">Stateless:</span> Typically doesn't maintain context between sessions</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-gray-400"><span className="text-white font-medium">Human-guided:</span> Requires human direction for complex tasks</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-purple-400 mt-1">•</div>
                  <p className="text-gray-400"><span className="text-white font-medium">Limited agency:</span> Cannot independently take actions</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-center">The Evolution</h3>
            <p className="text-gray-400 text-center mb-8">
              AI is evolving from passive tools to active collaborators
            </p>
            
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center mb-8 md:mb-0">
                <p className="text-gray-500 mb-2">Past</p>
                <div className="bg-gray-900 p-4 rounded-xl mb-2">
                  <p className="text-white font-medium">Rule-Based Systems</p>
                </div>
                <p className="text-gray-500 text-sm">Predefined responses</p>
              </div>
              
              <div className="hidden md:block">
                <svg width="40" height="20">
                  <line x1="0" y1="10" x2="40" y2="10" stroke="#4B5563" strokeWidth="2" />
                  <polygon points="35,5 40,10 35,15" fill="#4B5563" />
                </svg>
              </div>
              
              <div className="text-center mb-8 md:mb-0">
                <p className="text-gray-500 mb-2">Present</p>
                <div className="bg-purple-900/30 p-4 rounded-xl mb-2">
                  <p className="text-purple-300 font-medium">Generative AI</p>
                </div>
                <p className="text-gray-500 text-sm">Content creation</p>
              </div>
              
              <div className="hidden md:block">
                <svg width="40" height="20">
                  <line x1="0" y1="10" x2="40" y2="10" stroke="#4B5563" strokeWidth="2" />
                  <polygon points="35,5 40,10 35,15" fill="#4B5563" />
                </svg>
              </div>
              
              <div className="text-center">
                <p className="text-gray-500 mb-2">Future</p>
                <div className="bg-cyan-900/30 p-4 rounded-xl mb-2">
                  <p className="text-cyan-300 font-medium">Autonomous Agents</p>
                </div>
                <p className="text-gray-500 text-sm">Independent action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Use Cases of <span className="text-green-400">AI Agents</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Exploring the diverse applications of AI agents across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
              <div className="bg-green-950/50 p-4 rounded-lg inline-block mb-6">
                <Code className="text-green-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Software Development</h3>
              <p className="text-gray-400 mb-6">
                AI agents that can write code, debug issues, and even architect entire systems based on high-level requirements.
              </p>
              <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                <p className="text-sm text-gray-500">Example:</p>
                <p className="text-gray-300">An agent that automatically refactors legacy code, adds tests, and implements new features based on natural language specifications.</p>
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <div className="bg-blue-950/50 p-4 rounded-lg inline-block mb-6">
                <BarChart className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Data Analysis</h3>
              <p className="text-gray-400 mb-6">
                Agents that autonomously explore datasets, identify patterns, and generate insights without human guidance.
              </p>
              <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                <p className="text-sm text-gray-500">Example:</p>
                <p className="text-gray-300">A financial analysis agent that monitors market data, identifies trading opportunities, and executes trades based on predefined strategies.</p>
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <div className="bg-purple-950/50 p-4 rounded-lg inline-block mb-6">
                <Bot className="text-purple-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Personal Assistants</h3>
              <p className="text-gray-400 mb-6">
                AI agents that manage schedules, communications, and tasks with minimal human intervention.
              </p>
              <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                <p className="text-sm text-gray-500">Example:</p>
                <p className="text-gray-300">An agent that schedules meetings, drafts emails, books travel, and manages your digital life based on your preferences and past behavior.</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="bg-cyan-950/50 p-4 rounded-lg inline-block mb-6">
                <Rocket className="text-cyan-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Scientific Research</h3>
              <p className="text-gray-400 mb-6">
                Agents that design experiments, analyze results, and generate new hypotheses in scientific domains.
              </p>
              <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                <p className="text-sm text-gray-500">Example:</p>
                <p className="text-gray-300">A drug discovery agent that explores chemical compounds, predicts their properties, and suggests promising candidates for specific diseases.</p>
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
              <div className="bg-green-950/50 p-4 rounded-lg inline-block mb-6">
                <Workflow className="text-green-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Business Operations</h3>
              <p className="text-gray-400 mb-6">
                Agents that optimize workflows, manage resources, and automate complex business processes.
              </p>
              <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                <p className="text-sm text-gray-500">Example:</p>
                <p className="text-gray-300">A supply chain agent that forecasts demand, optimizes inventory levels, and automatically adjusts orders based on real-time data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Future of AI Agents */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The <span className="text-pink-400">Future</span> of AI Agents</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Exploring the emerging trends and possibilities in the world of autonomous AI systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Future of AI" 
                className="rounded-xl shadow-2xl shadow-pink-500/10"
              />
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-pink-500/30 transition-all">
                <h3 className="text-2xl font-semibold mb-3">Multi-Agent Collaboration</h3>
                <p className="text-gray-400">
                  Future systems will feature teams of specialized AI agents working together to solve complex problems, each bringing unique capabilities to the table.
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all">
                <h3 className="text-2xl font-semibold mb-3">Human-Agent Partnerships</h3>
                <p className="text-gray-400">
                  Rather than replacing humans, advanced AI agents will form symbiotic relationships with people, augmenting human capabilities and handling routine tasks.
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all">
                <h3 className="text-2xl font-semibold mb-3">Ethical Considerations</h3>
                <p className="text-gray-400">
                  As agents become more autonomous, ensuring they operate within ethical boundaries and align with human values will be increasingly important.
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-green-500/30 transition-all">
                <h3 className="text-2xl font-semibold mb-3">Democratized Access</h3>
                <p className="text-gray-400">
                  AI agent capabilities will become more accessible to individuals and small businesses, enabling new forms of creativity and productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the World of AI Agents?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Join us on the cutting edge of artificial intelligence and discover how AI agents can transform your work and life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 bg-transparent border border-cyan-500 rounded-full font-medium hover:bg-cyan-950/30 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Bot className="text-cyan-400 h-8 w-8 mr-3" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                AI Agents
              </span>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Use Cases</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Resources</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2025 AI Agents. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Code, 
  Terminal, 
  Activity, 
  CheckCircle, 
  Menu, 
  X, 
  ChevronRight,
  Mail,
  Facebook,
  Instagram,
  Globe,
  Database,
  Search,
  Zap
} from 'lucide-react';

// --- Types ---
// Added optional key property to resolve Type '{ icon: any; title: string; description: string; impact: string; key: number; }' is not assignable to type 'ServiceProps' error.
interface ServiceProps {
  icon: React.ElementType;
  title: string;
  description: string;
  impact: string;
  key?: React.Key;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Development', href: '#development' },
    { name: 'Trust', href: '#trust' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#05050a]/90 backdrop-blur-md border-b border-blue-900/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-[#00d2ff]" />
          <span className="text-2xl font-extrabold tracking-tighter text-white">Cyber<span className="text-[#00d2ff]">Fortify</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-[#00d2ff] transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 bg-[#00d2ff] text-[#05050a] rounded-full text-sm font-bold hover:bg-[#00b4db] transition-all transform hover:-translate-y-0.5 box-glow">
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a14] border-b border-blue-900/30 px-6 py-6 absolute top-full left-0 right-0 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300 hover:text-[#00d2ff]">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-[#00d2ff] text-[#05050a] rounded-xl font-bold">
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-[#00d2ff]/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-1/3 h-1/3 bg-blue-900/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-[#00d2ff] text-xs font-bold uppercase tracking-widest mb-6">
              <Lock className="w-3 h-3" />
              <span>Secure Your Future</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              Protecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-blue-500">Digital Frontline</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              CyberFortify delivers specialized Cybersecurity & Secure Web Development solutions. In an era where breaches cost millions, we ensure your organization proactively identifies and neutralizes threats before they emerge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-[#00d2ff] text-[#05050a] rounded-full font-bold text-lg hover:bg-[#00b4db] transition-all transform hover:-translate-y-1 box-glow">
                Schedule a Consultation
              </a>
              <a href="#services" className="w-full sm:w-auto px-8 py-4 border border-blue-500/30 text-white rounded-full font-bold text-lg hover:bg-blue-500/10 transition-all flex items-center justify-center space-x-2">
                <span>View Solutions</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-center lg:text-left">
                <div className="text-white text-2xl font-bold">100+</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">Threats Blocked</div>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div className="text-center lg:text-left">
                <div className="text-white text-2xl font-bold">24/7</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">Expert Monitoring</div>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div className="text-center lg:text-left">
                <div className="text-white text-2xl font-bold">ZERO</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">Client Breaches</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full animate-pulse"></div>
            <div className="relative p-12 bg-[#0a0a14] rounded-3xl border border-blue-900/30 box-glow">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-500 text-xs font-mono">root@cyberfortify:~</div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-[#00d2ff]">$</span>
                  <span className="text-slate-300">run vulnerability_scan --all-nodes</span>
                </div>
                <div className="text-green-400 pl-4">[OK] Scanning network topology...</div>
                <div className="text-green-400 pl-4">[OK] Analyzing firewall rules...</div>
                <div className="text-yellow-400 pl-4">[WARN] Detected outdated SSL certificate on port 443</div>
                <div className="flex items-start space-x-2">
                  <span className="text-[#00d2ff]">$</span>
                  <span className="text-slate-300">deploy hardening_patch_v2.1</span>
                </div>
                <div className="text-[#00d2ff] pl-4">System secured. All endpoints verified.</div>
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <div className="flex items-center space-x-3 text-slate-400">
                    <Activity className="w-4 h-4 text-[#00d2ff]" />
                    <span>Real-time monitoring active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, impact }: ServiceProps) => (
  <div className="p-8 bg-[#0a0a14] rounded-2xl border border-blue-900/20 box-glow transition-all duration-300 group hover:-translate-y-2 hover:border-[#00d2ff]/40">
    <div className="w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7 text-[#00d2ff]" />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-slate-400 mb-6 leading-relaxed">
      {description}
    </p>
    <div className="pt-6 border-t border-slate-800/50">
      <div className="flex items-center space-x-2 text-sm">
        <CheckCircle className="w-4 h-4 text-green-500" />
        <span className="text-slate-300 font-medium">Impact: <span className="text-white">{impact}</span></span>
      </div>
    </div>
  </div>
);

const Services = () => {
  const servicesData = [
    {
      icon: Globe,
      title: "Web Application Security",
      description: "Comprehensive testing of your web assets to identify and eliminate logic flaws and technical vulnerabilities before attackers can exploit them.",
      impact: "Zero exploit Surface"
    },
    {
      icon: Terminal,
      title: "Vulnerability & Pentesting",
      description: "We simulate high-end real-world attacks using the same methods as advanced persistent threats to uncover hidden risks across your infrastructure.",
      impact: "Validated Resilience"
    },
    {
      icon: Search,
      title: "Secure Code Review",
      description: "Our experts manually analyze your source code to detect subtle security flaws, poor implementation practices, and hardcoded secrets.",
      impact: "Clean Production Code"
    },
    {
      icon: Lock,
      title: "Security Hardening",
      description: "Strengthening your existing servers, operating systems, and network configurations to build an impenetrable defense layer.",
      impact: "Optimized Defense Posture"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#05050a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Enterprise Services</h2>
          <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">Strategic Security Solutions</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We don't just find bugs; we provide strategic business outcomes that mitigate risk and protect your company's most valuable digital assets.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Development = () => {
  return (
    <section id="development" className="py-24 bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#05050a] rounded-2xl border border-blue-900/20 box-glow text-center">
                <Code className="w-8 h-8 text-[#00d2ff] mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Secure-by-Design</h4>
                <p className="text-xs text-slate-500 leading-tight">Architecture built for safety from day one.</p>
              </div>
              <div className="p-6 bg-[#05050a] rounded-2xl border border-blue-900/20 box-glow text-center mt-8">
                <Database className="w-8 h-8 text-[#00d2ff] mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Data Protection</h4>
                <p className="text-xs text-slate-500 leading-tight">Encryption and secure storage protocols.</p>
              </div>
              <div className="p-6 bg-[#05050a] rounded-2xl border border-blue-900/20 box-glow text-center">
                <Zap className="w-8 h-8 text-[#00d2ff] mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">High Performance</h4>
                <p className="text-xs text-slate-500 leading-tight">Optimized for speed without compromise.</p>
              </div>
              <div className="p-6 bg-[#05050a] rounded-2xl border border-blue-900/20 box-glow text-center mt-8">
                <Shield className="w-8 h-8 text-[#00d2ff] mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Compliance</h4>
                <p className="text-xs text-slate-500 leading-tight">Meeting global security standards.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Secure Engineering</h2>
            <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">Security-First Web Development</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              In modern development, security isn't a feature—it's the foundation. We build robust, scalable web applications where security is woven into every line of code. Our engineering team specializes in remediation, optimization, and long-term reliability.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Remediation of legacy security flaws",
                "Advanced performance and stability optimization",
                "API security and integration hardening",
                "Infrastructure as code with automated security checks"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-[#00d2ff]/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#00d2ff]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="px-8 py-4 bg-transparent border border-[#00d2ff] text-[#00d2ff] rounded-full font-bold hover:bg-[#00d2ff] hover:text-[#05050a] transition-all inline-block">
              Learn About Our Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section id="trust" className="py-24 bg-[#05050a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Our Ethics</h2>
          <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">Transparency & Professional Integrity</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Ethical Hacking",
              desc: "We operate with a strict hacker-mindset but always guided by high professional ethics. We find the weaknesses before the bad actors do."
            },
            {
              title: "Confidentiality First",
              desc: "Your data and internal systems are handled with the highest level of privacy and strict non-disclosure agreements."
            },
            {
              title: "Responsible Disclosure",
              desc: "Our methodology ensures vulnerabilities are disclosed privately to you, with detailed remediation steps and follow-up validation."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-[#0a0a14] rounded-2xl border border-blue-900/10 hover:border-blue-500/20 transition-all">
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#05050a] relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-b from-blue-900/10 to-[#0a0a14] p-12 lg:p-20 rounded-[3rem] border border-blue-900/30 text-center relative overflow-hidden box-glow">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[#00d2ff]/10 blur-[60px] rounded-full"></div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">Request Your Professional Consultation</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            Ready to secure your business? Our team of specialists is standing by for confidential discussions regarding your security posture or development needs.
          </p>
          <div className="bg-[#05050a] p-8 rounded-2xl border border-blue-900/20 max-w-md mx-auto mb-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Mail className="w-6 h-6 text-[#00d2ff]" />
              <span className="text-slate-300 font-medium">Official Communications</span>
            </div>
            <a href="mailto:cyberfortify.contact@gmail.com" className="text-2xl lg:text-3xl font-bold text-[#00d2ff] hover:underline neon-glow">
              cyberfortify.contact@gmail.com
            </a>
          </div>
          <p className="text-slate-500 text-sm flex items-center justify-center space-x-2">
            <Lock className="w-4 h-4" />
            <span>End-to-end encrypted initial handling of all inquiries.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-[#05050a] border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <Shield className="w-6 h-6 text-[#00d2ff]" />
            <span className="text-xl font-extrabold tracking-tighter text-white">Cyber<span className="text-[#00d2ff]">Fortify</span></span>
          </div>
          
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a 
              href="https://www.facebook.com/share/17eCKjRWqM/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#00d2ff] transition-all hover:drop-shadow-[0_0_8px_#00d2ff]"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/mohssineeddaboz?igsh=MTl1Y3YzNXVsaWIwYw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#00d2ff] transition-all hover:drop-shadow-[0_0_8px_#00d2ff]"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <p className="text-slate-500 text-sm">
            © 2025 CyberFortify — Security First
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Development />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

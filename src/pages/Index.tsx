import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, Zap, Users, FileText, BarChart3, Sparkles, ChevronRight, Star, CheckCircle, TrendingUp, Award, Share2, Rocket } from "lucide-react";
import { RadarChart } from "@/components/RadarChart";
import { AgentShowcase } from "@/components/AgentShowcase";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Navigation } from "@/components/Navigation";
const Index = () => {
  const [activeTab, setActiveTab] = useState("discovery");
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 absolute bg-slate-50 border-b-2 border-black "></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto bg-transparent ">
            <Badge className="mb-6 text-white border-white/30 bg-slate-950">
              🚀 AI-Powered Career Success Platform
            </Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight text-zinc-950 md:text-7xl">
              Your AI Career <br />
              <span className="text-brand-purple">Sculptor</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-indigo-500 md:text-2xl font-normal">
              Discover opportunities that match your skills and generate ATS-optimized resumes, 
              portfolios, and application materials—all powered by our 9-agent AI system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/profile">
                <Button size="lg" className="text-blue-600 px-8 py-4 bg-zinc-500 hover:bg-zinc-400 font-semibold text-lg">
                  Start Building Your Career
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white px-8 py-4 bg-lime-500 hover:bg-lime-400 text-lg">
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gray-950">95%</div>
                <div className="text-sm text-blue-200 bg-gray-950">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gray-950">50K+</div>
                <div className="text-sm text-blue-200 bg-gray-950">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gray-950">9</div>
                <div className="text-sm text-blue-200 bg-gray-950">AI Agents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Visualization Demo */}
      <section className="py-20 px-4 bg-neutral-50 border-b-2 border-black ">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4 text-4xl text-zinc-950">See Your Skills in Action</h2>
            <p className="text-lime-400 font-medium text-2xl">
              Our AI analyzes your profile and matches it with perfect opportunities
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-6 bg-lime-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-brand-blue" />
                    Skill-Opportunity Match
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadarChart />
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-50 font-semibold text-sm">Python</span>
                      <Badge className="bg-green-100 text-green-800">Strong Match</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-50 font-semibold text-sm">SQL</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Good Match</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-zinc-50 text-sm">Machine Learning</span>
                      <Badge className="bg-green-100 text-green-800">Strong Match</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Smart Opportunity Matching</h3>
                  <p className="text-base text-zinc-950">
                    Our AI scans thousands of opportunities and ranks them based on your unique profile.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Real-time Skill Analysis</h3>
                  <p className="font-normal text-zinc-950">
                    See exactly how your skills align with job requirements and identify growth areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Personalized Recommendations</h3>
                  <p className="font-normal text-zinc-950">
                    Get actionable insights on how to improve your application for each opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4 text-4xl">Everything You Need to Succeed</h2>
            <p className="text-3xl font-medium text-lime-500">
              From opportunity discovery to application submission—all in one platform
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[{
            id: "discovery",
            label: "Opportunity Discovery",
            icon: Target
          }, {
            id: "content",
            label: "Content Creation",
            icon: FileText
          }, {
            id: "optimization",
            label: "ATS Optimization",
            icon: Zap
          }, {
            id: "sharing",
            label: "Social Sharing",
            icon: Share2
          }].map(tab => <Button key={tab.id} variant={activeTab === tab.id ? "default" : "outline"} onClick={() => setActiveTab(tab.id)} className={activeTab === tab.id ? "gradient-bg" : ""}>
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>)}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <FeatureCard icon={Brain} title="AI-Powered Matching" description="Our machine learning algorithms analyze thousands of opportunities to find your perfect matches." active={activeTab === "discovery"} />
            <FeatureCard icon={FileText} title="Instant Resume Generation" description="Create ATS-optimized resumes tailored to specific companies and roles in seconds." active={activeTab === "content"} />
            <FeatureCard icon={Zap} title="ATS Optimization" description="Ensure your applications pass automated screening with smart keyword integration." active={activeTab === "optimization"} />
            <FeatureCard icon={Users} title="Portfolio Microsites" description="Showcase your projects with beautiful, shareable portfolio websites." active={activeTab === "sharing"} />
            <FeatureCard icon={Award} title="Gamified Progress" description="Earn badges and track your career journey with our engaging progression system." active={activeTab === "discovery"} />
            <FeatureCard icon={BarChart3} title="Skill Visualization" description="Interactive charts that make your skills and achievements visually compelling." active={activeTab === "content"} />
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4 text-4xl">Meet Your AI Career Team</h2>
            <p className="text-lime-500 text-2xl">
              9 specialized agents working together to accelerate your career success
            </p>
          </div>
          <AgentShowcase />
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="font-normal text-lime-500 text-2xl">
              See how CareerCanvas has transformed careers across the globe
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="Sarah Chen" role="Computer Science Student" company="Google Intern" quote="CareerCanvas helped me land my dream internship at Google! The AI-generated resume was perfectly tailored to the role." rating={5} achievement="Landed Google SWE Internship" />
            <TestimonialCard name="Marcus Johnson" role="Data Science Student" company="Microsoft" quote="The skill visualization feature showed me exactly what I needed to work on. Got my Microsoft offer 3 months later!" rating={5} achievement="$95k Starting Salary" />
            <TestimonialCard name="Emily Rodriguez" role="Business Student" company="Goldman Sachs" quote="The portfolio microsite generated by CareerCanvas impressed recruiters. It's like having a personal brand manager!" rating={5} achievement="Investment Banking Analyst" />
          </div>

          <div className="text-center mt-12">
            <Link to="/dashboard">
              <Button size="lg" className="gradient-bg">
                Join 50,000+ Successful Students
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CareerCanvas</span>
              </div>
              <p className="text-slate-300 mb-4">
                Empowering students with AI-driven career success tools.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-slate-600 text-zinc-950">
                  Twitter
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-zinc-950">
                  LinkedIn
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Agents</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 CareerCanvas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
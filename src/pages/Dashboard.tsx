
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  TrendingUp,
  Target,
  FileText,
  Share2,
  Award
} from "lucide-react";
import { RadarChart } from "@/components/RadarChart";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const opportunities = [
    {
      title: "Google Data Science Internship",
      company: "Google",
      location: "Mountain View, CA",
      deadline: "March 15, 2024",
      match: 92,
      type: "Internship",
      description: "Work on machine learning projects with real-world impact."
    },
    {
      title: "Meta Software Engineering Internship",
      company: "Meta",
      location: "Menlo Park, CA", 
      deadline: "March 20, 2024",
      match: 88,
      type: "Internship",
      description: "Build systems that connect billions of people worldwide."
    },
    {
      title: "Microsoft Research Scholarship",
      company: "Microsoft",
      location: "Remote",
      deadline: "April 1, 2024",
      match: 85,
      type: "Scholarship",
      description: "$5,000 scholarship for students in computer science."
    }
  ];

  const tips = [
    "Add your hackathon project to boost your profile!",
    "Python skills are in high demand - showcase your projects",
    "Your communication skills match 95% of leadership roles"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Profile Completion</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <Badge className="bg-green-100 text-green-800">Profile Pro</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Skill Star</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Build Resume
                </Button>
                <Button className="w-full" variant="outline">
                  <Target className="w-4 h-4 mr-2" />
                  Create Portfolio
                </Button>
                <Button className="w-full" variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Opportunities Matched</p>
                      <p className="text-2xl font-bold">127</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-brand-blue" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Applications Sent</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <FileText className="w-8 h-8 text-brand-green" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Badges Earned</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <Award className="w-8 h-8 text-brand-orange" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skill Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Skill-Opportunity Match Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <RadarChart />
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Python</span>
                        <Badge className="bg-green-100 text-green-800">Strong Match</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">SQL</span>
                        <Badge className="bg-yellow-100 text-yellow-800">Good Match</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Machine Learning</span>
                        <Badge className="bg-green-100 text-green-800">Strong Match</Badge>
                      </div>
                    </div>
                    <Button className="w-full gradient-bg">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Skill Chart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Tips */}
            <Card>
              <CardHeader>
                <CardTitle>AI Career Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                      <div className="w-2 h-2 bg-brand-blue rounded-full mt-2"></div>
                      <p className="text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Opportunities Feed */}
            <Card>
              <CardHeader>
                <CardTitle>Matched Opportunities</CardTitle>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search opportunities..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {opportunities.map((opp, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{opp.title}</h3>
                              <Badge 
                                className={`${
                                  opp.match >= 90 ? "bg-green-100 text-green-800" :
                                  opp.match >= 80 ? "bg-blue-100 text-blue-800" :
                                  "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {opp.match}% Match
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{opp.company}</p>
                            <p className="text-sm">{opp.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {opp.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {opp.deadline}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button size="sm" className="gradient-bg">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Apply Now
                            </Button>
                            <Button size="sm" variant="outline">
                              Build Resume
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getImagePath } from "@/utils/imagePath";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const educationData = {
    masters: {
      degree: "Master of Science",
      field: "Data Science",
      institution: "Rochester Institute of Technology",
      institutionShort: "RIT",
      logo: getImagePath("/rit-logo.png"),
      location: "Rochester, NY, USA",
      period: "2024 - 2026",
      gpa: "4.0/4.0",
      coursework: [
        "Data Science & Analytics",
        "Database Design",
        "Non-Relational Databases",
        "Data Warehousing",
        "Visual Analytics",
        "Information Retrieval & Text Mining",
        "Time Series Forecasting",
        "Knowledge Discovery"
      ]
    },
    bachelors: {
      degree: "Bachelor of Engineering",
      field: "Artificial Intelligence",
      institution: "Mahindra University",
      institutionShort: "Mahindra University",
      logo: null,
      location: "Hyderabad, India",
      period: "2020 - 2024",
      gpa: "3.52/4.0",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering"
      ]
    }
  };

  const renderEducationCard = (edu: typeof educationData.masters) => (
    <Card className="bg-slate-900 backdrop-blur-sm border border-slate-800 shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all duration-300 overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 group-hover:w-1.5 transition-all duration-300"></div>
      
      <CardHeader className="pb-4 pl-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-4">
              {edu.logo && (
                <div className="flex-shrink-0">
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} logo`}
                    className="h-16 w-16 object-contain bg-white rounded-lg p-2 shadow-md border border-gray-200"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                          <GraduationCap className="w-7 h-7 text-blue-500 flex-shrink-0" />
                          <span>{edu.degree}</span>
                        </CardTitle>
                        <div className="text-xl font-semibold text-blue-400 mb-3">
                          {edu.field}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-slate-300">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="font-semibold">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </div>
              </div>
            </div>
          </div>
          
                  <div className="flex flex-col items-end gap-2 text-right">
                    <div className="flex items-center gap-2 text-slate-300 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-white">{edu.period}</span>
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center gap-2 text-slate-300 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                        <Award className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold text-white">GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>
        </div>
      </CardHeader>
      
              <CardContent className="pt-0 pl-8 pb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <h4 className="text-lg font-semibold text-white">Relevant Coursework</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.coursework.map((course, courseIndex) => (
                      <div 
                        key={courseIndex}
                        className="flex items-center gap-2 text-slate-300 bg-slate-800 px-4 py-2 rounded-md border border-slate-700 hover:bg-slate-700 hover:border-blue-500 transition-colors duration-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                        <span className="text-sm font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
    </Card>
  );

  return (
    <section id="education" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="masters" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-900 border border-slate-800 rounded-lg p-1">
              <TabsTrigger 
                value="masters" 
                className="data-[state=active]:bg-slate-800 data-[state=active]:text-blue-500 data-[state=active]:shadow-sm text-slate-300 font-semibold py-3 transition-all duration-200"
              >
                Master's Degree
              </TabsTrigger>
              <TabsTrigger 
                value="bachelors"
                className="data-[state=active]:bg-slate-800 data-[state=active]:text-blue-500 data-[state=active]:shadow-sm text-slate-300 font-semibold py-3 transition-all duration-200"
              >
                Bachelor's Degree
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="masters" className="mt-0">
              {renderEducationCard(educationData.masters)}
            </TabsContent>
            
            <TabsContent value="bachelors" className="mt-0">
              {renderEducationCard(educationData.bachelors)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 
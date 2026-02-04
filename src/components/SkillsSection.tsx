import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getImagePath } from "@/utils/imagePath";

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "Python", icon: getImagePath("/python-icon.png"), isImage: true, color: "bg-yellow-100" },
    { name: "Java", icon: getImagePath("/java-icon.png"), isImage: true, color: "bg-red-100" },
    { name: "R", icon: getImagePath("/r-icon.png"), isImage: true, color: "bg-blue-100" },
    { name: "MySQL", icon: getImagePath("/mysql-icon.png"), isImage: true, color: "bg-orange-100" }
  ];

  const machineLearning = [
    { name: "Pandas", icon: getImagePath("/pandas-icon.png"), isImage: true, color: "bg-green-100" },
    { name: "NumPy", icon: getImagePath("/numpy-icon.png"), isImage: true, color: "bg-blue-100" },
    { name: "Scikit-Learn", icon: getImagePath("/scikit-icon.png"), isImage: true, color: "bg-orange-100" },
    { name: "Keras", icon: getImagePath("/keras-icon.png"), isImage: true, color: "bg-red-100" },
    { name: "TensorFlow", icon: getImagePath("/tensorflow-icon.png"), isImage: true, color: "bg-yellow-100" },
    { name: "PyTorch", icon: getImagePath("/pytorch-icon.png"), isImage: true, color: "bg-purple-100" }
  ];

  const cloudPlatforms = [
    { name: "AWS", icon: getImagePath("/aws-icon.png"), isImage: true, color: "bg-orange-100" },
    { name: "Kafka", icon: getImagePath("/kafka-icon.png"), isImage: false, color: "bg-gray-100" },
    { name: "Databricks", icon: getImagePath("/databricks-icon.png"), isImage: false, color: "bg-blue-100" },
    { name: "Apache Spark", icon: getImagePath("/spark-icon.png"), isImage: false, color: "bg-orange-100" }
  ];

  const toolsAndTechnologies = [
    { name: "Tableau", icon: getImagePath("/tableau-icon.png"), isImage: true, color: "bg-blue-100" },
    { name: "Power BI", icon: getImagePath("/powerbi-icon.png"), isImage: true, color: "bg-yellow-100" },
    { name: "Looker", icon: getImagePath("/looker-icon.png"), isImage: false, color: "bg-purple-100" },
    { name: "MS Excel", icon: getImagePath("/excel-icon.png"), isImage: true, color: "bg-green-100" },
    { name: "MS Word", icon: getImagePath("/word-icon.png"), isImage: true, color: "bg-blue-100" },
    { name: "MS PowerPoint", icon: getImagePath("/powerpoint-icon.png"), isImage: true, color: "bg-red-100" },
    { name: "Git", icon: getImagePath("/git-icon.png"), isImage: true, color: "bg-orange-100" }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="space-y-16">
          {/* Programming Languages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {programmingLanguages.map((skill, skillIndex) => (
                <Card key={skillIndex} className="hover:shadow-md transition-all duration-300 hover:border-blue-500 border border-slate-800 h-32 bg-slate-900 relative overflow-hidden group">
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-16 h-16 mb-2 mx-auto flex items-center justify-center bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-700">
                      {skill.isImage ? (
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            console.error('Failed to load image:', skill.icon);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => console.log('Successfully loaded image:', skill.icon)}
                        />
                      ) : (
                        <span className="text-3xl">{skill.icon}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-xs text-slate-300 transition-all duration-300 font-mono tracking-wide">{skill.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Machine Learning */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Machine Learning</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {machineLearning.map((library, libraryIndex) => (
                <Card key={libraryIndex} className="hover:shadow-md transition-all duration-300 hover:border-blue-500 border border-slate-800 h-32 bg-slate-900 relative overflow-hidden group">
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-16 h-16 mb-2 mx-auto flex items-center justify-center bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-700">
                      {library.isImage ? (
                        <img 
                          src={library.icon} 
                          alt={library.name}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            console.error('Failed to load image:', library.icon);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => console.log('Successfully loaded image:', library.icon)}
                        />
                      ) : (
                        <span className="text-3xl">{library.icon}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-xs text-slate-300 transition-all duration-300 font-mono tracking-wide">{library.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cloud Platforms */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Cloud Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {cloudPlatforms.map((platform, platformIndex) => (
                <Card key={platformIndex} className="hover:shadow-md transition-all duration-300 hover:border-blue-500 border border-slate-800 h-32 bg-slate-900 relative overflow-hidden group">
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-16 h-16 mb-2 mx-auto flex items-center justify-center bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-700">
                      {platform.isImage ? (
                        <img 
                          src={platform.icon} 
                          alt={platform.name}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            console.error('Failed to load image:', platform.icon);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => console.log('Successfully loaded image:', platform.icon)}
                        />
                      ) : (
                        <span className="text-xs font-bold text-slate-300 text-center px-2">{platform.name}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-xs text-slate-300 transition-all duration-300 font-mono tracking-wide">{platform.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 gap-4 max-w-6xl mx-auto">
              {toolsAndTechnologies.map((tool, toolIndex) => (
                <Card key={toolIndex} className="hover:shadow-md transition-all duration-300 hover:border-blue-500 border border-slate-800 h-32 bg-slate-900 relative overflow-hidden group">
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-16 h-16 mb-2 mx-auto flex items-center justify-center bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-700">
                      {tool.isImage ? (
                        <img 
                          src={tool.icon} 
                          alt={tool.name}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            console.error('Failed to load image:', tool.icon);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => console.log('Successfully loaded image:', tool.icon)}
                        />
                      ) : (
                        <span className="text-xs font-bold text-slate-300 text-center px-2">{tool.name}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-xs text-slate-300 leading-tight transition-all duration-300 font-mono tracking-wide">{tool.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
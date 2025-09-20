import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getImagePath } from "@/utils/imagePath";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";


const EducationSection = () => {
  return (
    <>
      <section id="education" className="py-20 bg-blue-500 relative overflow-hidden">
      {/* Bubble Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-green-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-300 mb-4">Education</h2>
            
          </div>
          
          {/* Animated Train */}
          <div className="relative h-80 overflow-hidden bg-blue-500 mb-8">
            {/* Train tracks */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600">
              <div className="h-2 bg-gray-900 mt-3"></div>
              <div className="h-2 bg-gray-900 mt-2"></div>
            </div>
            
            {/* Moving train */}
            <div className="absolute bottom-8 left-0 animate-[train_30s_linear_infinite]">
              <div className="relative flex items-end">
                {/* Engine */}
                <div className="w-48 h-32 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border-4 border-black relative">
                  {/* Engine details */}
                  <div className="absolute top-3 left-3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 left-4 w-8 h-2 bg-gray-700 rounded"></div>
                  <div className="absolute top-12 left-4 w-8 h-2 bg-gray-700 rounded"></div>
                  <div className="absolute top-16 left-4 w-8 h-2 bg-gray-700 rounded"></div>
                  
                  {/* Engine windows */}
                  <div className="absolute top-6 left-6 w-5 h-3 bg-blue-300 rounded border border-gray-600"></div>
                  <div className="absolute top-6 right-6 w-5 h-3 bg-blue-300 rounded border border-gray-600"></div>
                </div>
                
                {/* Wheels below engine */}
                <div className="absolute bottom-0 left-8 w-7 h-7 bg-black rounded-full border-2 border-gray-600"></div>
                <div className="absolute bottom-0 left-24 w-7 h-7 bg-black rounded-full border-2 border-gray-600"></div>
                
                {/* Education cars */}
                <div className="flex space-x-2 ml-2">
                  {/* Car 1 - Masters */}
                  <div className="w-40 h-28 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg border-4 border-purple-700 relative">
                    <div className="p-2 text-center">
                      <div className="text-sm font-bold text-white">Masters in Science</div>
                      <div className="text-xs text-purple-100">RIT</div>
                      <div className="text-xs text-purple-100">Data Science</div>
                      <div className="text-xs text-purple-100">2024-2026</div>
                    </div>
                    {/* Wheels */}
                    <div className="absolute bottom-0 left-3 w-5 h-5 bg-black rounded-full border border-gray-600"></div>
                    <div className="absolute bottom-0 right-3 w-5 h-5 bg-black rounded-full border border-gray-600"></div>
                  </div>
                  
                  {/* Car 2 - Bachelors */}
                  <div className="w-40 h-28 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg border-4 border-orange-700 relative">
                    <div className="p-2 text-center">
                      <div className="text-sm font-bold text-white">Bachelor of Engineering</div>
                      <div className="text-xs text-orange-100">Mahindra University</div>
                      <div className="text-xs text-orange-100">Artificial Intelligence</div>
                      <div className="text-xs text-orange-100">2020-2024</div>
                    </div>
                    {/* Wheels */}
                    <div className="absolute bottom-0 left-3 w-5 h-5 bg-black rounded-full border border-gray-600"></div>
                    <div className="absolute bottom-0 right-3 w-5 h-5 bg-black rounded-full border border-gray-600"></div>
                  </div>
                </div>
                
                {/* Caboose */}
                <div className="w-32 h-28 bg-gradient-to-r from-red-600 to-red-700 rounded-lg border-4 border-red-800 relative ml-2">
                  {/* Train Driver Image - Bigger to fit the train box */}
                  <div className="absolute top-2 left-2 w-20 h-20 bg-blue-300 rounded border border-gray-600 overflow-hidden">
                    <img 
                      src={getImagePath("/driver.png")} 
                      alt="Train Driver" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Chimney */}
                  <div className="absolute top-0 right-2 w-3 h-4 bg-gray-700 rounded-t-lg border-2 border-gray-800">
                    {/* Smoke from chimney */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gray-300 rounded-full opacity-70 animate-[smoke_3s_ease-out_infinite]"></div>
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-400 rounded-full opacity-60 animate-[smoke_3s_ease-out_infinite_1s]"></div>
                  </div>
                  
                  {/* Pulsing lights */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  
                  {/* Wheels */}
                  <div className="absolute bottom-0 left-3 w-5 h-5 bg-black rounded-full border border-gray-600"></div>
                  <div className="absolute bottom-0 right-3 w-5 h-5 bg-black rounded-full border border-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
          </div>
        </div>
      </section>

      
     </>
   );
 };

 export default EducationSection; 
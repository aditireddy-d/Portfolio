import heroImage from "@/assets/hero-image.jpg";
import { getImagePath } from "@/utils/imagePath";
const profilePhoto = getImagePath("/profile-photo.jpg");

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Aditi Reddy Doma</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-slate-600 font-light">
                Data Scientist & Machine Learning Engineer
              </p>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                Transforming complex data into actionable insights through advanced analytics, 
                machine learning, and data engineering solutions.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 h-[650px] flex items-center justify-center border border-slate-200">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={profilePhoto} 
                  alt="Aditi Reddy Doma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
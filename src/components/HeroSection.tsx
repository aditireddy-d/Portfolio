import heroImage from "@/assets/hero-image.jpg";
import { getImagePath } from "@/utils/imagePath";
const profilePhoto = getImagePath("/profile-photo.jpg");

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-black pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Hey there! I am <span className="text-blue-500">Aditi Reddy Doma</span> and welcome to my data story
                </h1>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-900 rounded-2xl shadow-xl p-6 h-[650px] flex items-center justify-center border border-slate-800">
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
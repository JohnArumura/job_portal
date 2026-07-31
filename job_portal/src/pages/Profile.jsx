import Navbar from '../components/Navbar/Navbar'
// import Profileheader from '../components/profile/Profileheader'
import Profilecard from '../components/Navbar/Profilecard'
import About from '../components/profile/About'
import Education from '../components/profile/Education'
import Experience from '../components/profile/Experience'
import Skills from '../components/profile/Skills'
import Resume from '../components/profile/Resume'
import profile from '../data/profiledetails'

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-6xl mx-auto">
          <Profilecard profile={profile} />
          <div className="bg-white mt-6 rounded-2xl shadow-lg p-8 space-y-8">
            <About profile={profile} />
            <Education profile={profile} />
            <Experience profile={profile} />
            <Skills profile={profile} />
            <Resume profile={profile} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
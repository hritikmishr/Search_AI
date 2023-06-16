import { TbGridDots } from "react-icons/tb";
import Profile1 from "../assets/SmartAI.jpg";
// import Profile from "../assets/profile-200x200.jpg";
// import ProfileRing from "../assets/profile-ring.svg";
const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="h-10 w-10 relative flex justify-center items-center">        
                <span className="h-12 w-12 rounded-full overflow-hidden">
                    <a href="https://smart-ai-sigma.vercel.app/">
                        <img className="h-full w-full object-cover" src={Profile1} />
                    </a>
                </span>
            </span>
            {/* <span className="h-10 w-10 relative flex justify-center items-center">
                <img className="absolute" src={ProfileRing} />
                <span className="h-8 w-8 rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={Profile} />
                </span>
            </span> */}
        </div>        
    );

};

export default ProfileIcon;

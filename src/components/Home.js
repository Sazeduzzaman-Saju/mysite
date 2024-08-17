import useWebTitle from "../hooks/useWebTitle";
import SectionContainer from "./SectionContainer";
const socialIcon = [
  {
    id: 1,
    iconName: "icon-github-squared",
    link: "https://github.com/Sazeduzzaman-Saju",
  },
  {
    id: 2,
    iconName: "icon-facebook-squared",
    link: "https://www.facebook.com/iamsaju.99/",
  },
  {
    id: 3,
    iconName: "icon-linkedin-squared",
    link: "https://www.linkedin.com/in/szamansaju/",
  },
];
const Home = () => {
  useWebTitle('Sazeduzzama Saju ||')
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                data-img-url="assets/img/slider/1.jpg"
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[40px] font-extrabold uppercase mb-[14px]">
                Sazeduzzaman
              </h3>
              <h5 className="mb-[20px]">Frontend & MERN Stack Developer</h5>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]" style={{textAlign: "justify"}}>
                I’m a Frontend Developer with expertise in creating responsive,
                high-performance web interfaces using HTML, CSS, JavaScript, and
                React Or Next. I specialize in styling with Tailwind CSS and Bootstrap,
                and I bring designs to life with tools like Figma. My focus is
                on crafting intuitive user experiences through clean, efficient
                code and modern web technologies. Also knowledge in backedn sector.
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none">
                  {socialIcon.map((item) => (
                    <li className="mr-[8px] inline-block" key={item.id}>
                      <a
                        className="text-black text-[20px] transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={item.iconName} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;

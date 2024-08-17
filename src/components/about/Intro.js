import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img
          className="min-w-full"
          src="assets/img/logo/profile_banner.gif"
          alt="image"
        />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Sazeduzzaman</h3>
        <span>Frontend & MERN Stack Developer</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px] font-bold">
          Skilled Frontend Developer with Expertise in the MEARN Stack | Based
          in Bangladesh ❤️
        </p>
        <p className="text-justify">
          Hello! I'm a passionate frontend developer specializing in the MEARN
          (MongoDB, Express.js, React/Next.js, Node.js) stack. With a deep love
          for crafting user-friendly interfaces, I bring creativity and
          precision to every project I undertake. My expertise lies in
          transforming concepts into visually stunning and highly functional web
          applications that not only meet but exceed client expectations. I have
          a strong foundation in HTML, CSS, and JavaScript, and I'm proficient
          in using modern frontend frameworks like React.js and Angular. My
          skill set also extends to backend technologies, enabling me to work
          seamlessly across the entire web development process. I have a keen
          eye for detail and a commitment to writing clean, optimized, and
          scalable code. Staying updated with the latest trends and best
          practices in web development is a priority for me. I constantly
          explore new tools, libraries, and methodologies to ensure that the
          solutions I deliver are cutting-edge and future-proof. Whether it's
          building responsive layouts, implementing interactive elements, or
          optimizing performance, I approach every challenge with enthusiasm and
          a problem-solving mindset. Collaboration is at the heart of my work
          ethic. I enjoy working closely with designers, developers, and
          stakeholders to bring ideas to life. I believe that great digital
          experiences are the result of strong teamwork, clear communication,
          and a shared vision. When I'm not coding, you can find me exploring
          new design trends, contributing to open-source projects, or diving
          into tech communities to share knowledge and learn from others. I'm
          always eager to take on new challenges and push the boundaries of
          what's possible in web development. Let's collaborate and create
          something amazing together! Whether you need a sleek landing page, a
          dynamic web application, or anything in between, I'm here to help you
          turn your ideas into reality.
        </p>
      </div>
      <div className="saju_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="saju_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Birthday:
                </span>
                <span>01.02.1999</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Age:
                </span>
                <span>24</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Address:
                </span>
                <span>Amtoal, Khilkhet, Dhaka, Bangladesh</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:szamansaju@gmail.com"
                  >
                    szamansaju@gmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:01576614451"
                  >
                    01576614451
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="saju_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Nationality:
                </span>
                <span>Bangladeshi</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Study:
                </span>
                <span>European University Of Bangladesh</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Degree:
                </span>
                <span>BSC</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Interest:
                </span>
                <span>Programmer</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Freelance:
                </span>
                <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="saju_tm_button" data-position="left">
        <a
          href="https://drive.google.com/uc?export=download&id=FILE_ID"
          download
        >
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;

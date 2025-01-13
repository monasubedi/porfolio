import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Web design",
    desc: "Web development is the process of building, programming...",
  },
  {
    id: "02",
    title: "Graphics design",
    desc: "Web development is the process of building, programming...",
  },
  {
    id: "03",
    title: "Social media",
    desc: "Web development is the process of building, programming...",
  },
  {
    id: "04",
    title: "App design",
    desc: "Web development is the process of building, programming...",
  },
  {
    id: "05",
    title: "Digital marketing",
    desc: "Web development is the process of building, programming...",
  },
  {
    id: "06",
    title: "Content writing",
    desc: "Web development is the process of building, programming...",
  },
];

const Service = () => {
  return (
    <section id="services" className="myServices">
      <h1>My Services</h1>
      <div className="services">
        {services.map((service) => {
          return (
            <div className="service">
              <h3>{service.id}</h3>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>

              <div className="more">
                <p>Read More</p>
                <FaArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;

import {services} from '../../lib/services'
import ServiceCard from "../../components/Cards/ServiceCard"

const Services = () => {
    // console.log(services)
  return (
    <div className=" text-slate-800 min-h-screen">
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Services Area</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque enim quibusdam repellendus obcaecati ab praesentium tenetur, error quo? Magnam obcaecati voluptate ea esse quasi voluptates praesentium voluptatum nesciunt dolor ab!</p>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
        services?.map((service) => {
          return (
            <ServiceCard
            service={service}
             key={service.id}>
              <div className="bg-gray-100 p-10 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </ServiceCard>
          );
        })
    }
      </div>
    </div>
  );
};

export default Services;

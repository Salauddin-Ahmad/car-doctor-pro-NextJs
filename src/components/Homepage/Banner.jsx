const Banner = () => {
  return (
    <div className=" container mx-auto">
      <div className="carousel w-full mt-12">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full  bg-cover  h-[95vh] rounded-lg"
          >
            <div className="w-full h-full flex items-center pl-36">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">{banner.title}</h1>
                <p>{banner.description}</p>
                <button className="btn btn-primary mr-4">Discover More</button>
                <button className="btn btn-primary btn-outline">
                 Our Latest Project
                </button>
              </div>
            </div>
            <div className="absolute flex justify-between transform
            bottom-12 right-12">
              <a href={banner.prev} className="btn btn-circle mr-6">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description: "Lorem ipsum dolor sit amet consectetur.",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description: "Lorem ipsum dolor sit amet consectetur.",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description: "Lorem ipsum dolor sit amet consectetur.",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description: "Lorem ipsum dolor sit amet consectetur.",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;

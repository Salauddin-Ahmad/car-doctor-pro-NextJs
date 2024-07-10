import Image from "next/image";

const About = () => {
    return (
        <div className="text-slate-900 h-screen my-20">
            <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="">
                   <Image
                   className="object-cover rounded-lg "
                    alt='person' height={900} width={400} src={'/assets/images/about_us/person.jpg'}
                    />

                    <Image 
                    className="rounded-lg border-4 border-white relative bottom-40 left-40"
                    alt="parts"
                    src={'/assets/images/about_us/parts.jpg'}
                    height={400}
                    width={290}/>
                </div>
                <div className="space-y-4">
                  <h1 className="text-[#FF3811] font-semibold text-lg">
                  About Us
                  </h1>

                  <div>
                    <h1 className="font-bold text-3xl w-[70%] mb-3">We are qualified & of experince in this field</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, facilis!  ipsum dolor sit amet consectetur adipisicing elit. Quo, facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, facilis!  ipsum dolor sit amet consectetur adipisicing elit. Quo, facilis!</p>

                    <button className="btn btn-primary mt-4">Get More Info</button>
                  </div>
                 
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;
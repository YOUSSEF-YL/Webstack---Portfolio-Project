
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 text-white">
      
       <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
       </h2>
       <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
            <img className="rounded-2xl " src="/src/assets/about_500x341_1_250x171.jpg" alt="about" />
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, expedita, ullam cum enim, adipisci dolores eius obcaecati maiores porro nihil praesentium sapiente? Sint rem voluptas, itaque unde sit vero doloribus.</p>
            </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default About

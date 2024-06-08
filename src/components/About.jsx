
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
            <img className="rounded-2xl " src="/src/assets/about_500x341.jpg" alt="about" />
        </div>
       
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-center">
                <p my-2 max-xl py-6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga cumque deleniti magnam. Eligendi excepturi recusandae quod obcaecati, ea nulla porro iure itaque doloremque inventore nobis amet fugiat molestiae illum omnis, rem eos modi aliquid eaque sapiente dolore quos! Ullam corrupti distinctio quis, reiciendis aliquam nostrum obcaecati nulla repudiandae, exercitationem, voluptatum inventore tempora labore! Aspernatur deserunt laudantium nihil non odit placeat, suscipit, voluptatem architecto obcaecati ipsam optio repellat dolor esse delectus?</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default About

export default function About() {
    return (
        <div className="w-full  bg-gray-300 pb-24 pt-32 md:py-16 mt-16">
            <div className="max-w-[1240px] mx-auto " >
                <div className="text-center">
                    <h2 className="text-xl md:text-4xl font-bold pt-4">Lorem ipsum dolor sit amet.</h2>
                    <p className="text-xl md:text-2xl  py-4">Lorem amet consectetur adipisicing elit. Veritatis ullam labore
                        repudiandae </p>
                </div>
                <div className="grid md:grid-cols-3 gap-3 px-2 text-center md:pb-8">
                    <div className="border  py-6 rounded-xl shadow-md bg-white">
                        <p className="text-5xl text-yellow-900 font-bold">100%</p>

                        <p className="text-xl font-bold">completion</p>



                    </div>
                    <div className="border py-6 rounded-xl shadow-md bg-white">
                        <p className="text-5xl text-yellow-900 font-bold">100%</p>

                        <p className="text-xl font-bold">completion</p>



                    </div>
                    <div className="border py-6 rounded-xl shadow-md bg-white">
                        <p className="text-5xl text-yellow-900 font-bold">100%</p>

                        <p className="text-xl font-bold">completion</p>


                    </div>

                </div>
            </div>
        </div>
    )
}
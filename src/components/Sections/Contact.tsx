
export default function Contact() {
  return (
    <div className="p-6 md:p-28 relative contact" id="contact">
      <p className="p-6 text-xl md:text-3xl text-white">
        Get a Free Consultation
      </p>
      <div className="relative z-10">
        <div className="flex md:flex-row flex-col items-center justify-center">
          <div className="md:p-10 p-6 w-full md:w-[90%] border border-gray-50 rounded-4xl">
            <form action="" className="lg:w-[70%] text-white">
              <label htmlFor="name" className="text-xl">
                Full Name
              </label>
              <input
                placeholder="Name"
                type="text"
                className="outline-none p-4 my-4 block w-full bg-gray-400 text-black rounded-2xl border-2 border-[#0c7dff]"
              />

              <label htmlFor="email" className="text-xl">
                Email Address
              </label>
              <input
                placeholder="Email"
                type="email"
                className="outline-none p-4 my-4 block w-full bg-gray-400 text-black rounded-2xl border-2 border-[#0c7dff]"
              />

              <label htmlFor="service" className="text-xl">
                Required Service
              </label>
              <select
                name="service"
                id="service"
                className="outline-none p-4 my-4 block w-full bg-gray-400 text-black rounded-2xl border-2 border-[#0c7dff]"
              >
                <option value="">Select Service</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SEO">SEO</option>
              </select>

              <label htmlFor="message" className="text-xl">
                Message
              </label>
              <textarea
                placeholder="Write your message here"
                className="outline-none p-4 my-4 block w-full h-40 bg-gray-400 text-black rounded-2xl border-2 border-[#0c7dff]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#0c7dff] hover:bg-[#0c69ff] text-white py-4 px-12 rounded-2xl cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

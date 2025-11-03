import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="lg:fixed lg:top-0 lg:h-screen lg:w-96 flex flex-col gap-8 bg-lime-900 p-5 md:px-10 md:py-5 md:gap-12 lg:px-7">
        {/* Nav Bar */}
        <nav>
          <div className="flex items-start">
            <Image
              width={16}
              height={18}
              src="/Symbol.png"
              alt="Company Logo"
            />
            <h2 className="ml-3 text-white font-bold">Etran</h2>
            <a
              href="#"
              className="text-xs bg-lime-200 ml-auto py-2 px-3 rounded-xs hover:bg-lime-600"
            >
              Get started
            </a>
          </div>
        </nav>

        {/* Heading Text */}
        <div className="mb-2">
          <h1 className="text-white text-4xl mb-5 leading-7">
            Money Transfers <br />
            <span className=" text-lime-200">Simple</span>
          </h1>
          <h2 className="text-zinc-300 leading-4">
            No personal credit checks or founder guarantee
          </h2>
        </div>

        {/* Offerings */}
        <div className="w-auto">
          <h3 className="text-xs text-lime-200 mb-4">Our offerings</h3>
          {/* Offerings Items */}
          <div className="flex gap-2 text-center">
            {/* Offering 1 */}
            <a
              href=""
              className="flex-1 py-7 px-1 bg-lime-600 flex flex-col items-center justify-center gap-4 rounded-sm hover:bg-lime-200"
            >
              <Image src="/Bolt.svg" width={30} height={30} alt="bolt logo" />
              <p className="text-xs">Instant Productivity</p>
            </a>
            {/* Offering 2 */}
            <a className="flex-1 py-7 px-1 bg-lime-600 flex flex-col items-center justify-center gap-4 rounded-sm hover:bg-lime-200">
              <Image src="/Globe.svg" width={30} height={30} alt="globe logo" />
              <p className="text-xs">Expense Management</p>
            </a>
            {/* Offering 3 */}
            <a className="flex-1 py-7 px-1 bg-lime-600 flex flex-col items-center justify-center gap-4 rounded-sm hover:bg-lime-200">
              <Image
                src="/Shield.svg"
                width={30}
                height={30}
                alt="shield logo"
              />
              <p className="text-xs">Advanced Technology</p>
            </a>
          </div>
        </div>

        {/* Contact Links */}
        <div>
          <ul className="flex text-lime-200 text-xs gap-3">
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Social</li>
            <li className="hover:underline cursor-pointer">Address</li>
            <li className="hover:underline cursor-pointer">Legal Terms</li>
          </ul>
        </div>
      </header>

      {/* Main */}
      <main className="lg:ml-96 flex-col bg-white text-center">
        {/* Header Container */}
        <div className="flex flex-col gap-6 pt-12 px-5 items-center md:px-10 md:gap-12">
          <Image
            className="rounded-3xl w-full object-cover md:max-h-96 lg:max-h-[700px]"
            src="/personphone.jpg"
            width={2048}
            height={1365}
            loading="eager"
            alt="person on phone"
          />

          <h2 className="text-black text-xl">
            We escalate transfer efficiency and productivity
          </h2>
          <div>
            <Image
              className="w-full h-auto"
              src="/logowall.svg"
              width={335}
              height={159}
              alt="List of companies that are clients for Etran Bank"
            />
          </div>
        </div>

        {/* Get more done Section */}
        <div className="px-5 py-20 md:px-10">
          {/* Heading Text */}
          <div className="text-center mb-7">
            <h2 className="text-3xl text-lime-900 md:text-4xl">
              Get More Done In A Week
            </h2>
            <h2 className="text-xs">
              Maximize your productivity with smarter tools designed to
              streamline your workflow to automate tasks, stay organized
            </h2>
          </div>
          {/* Bento Container */}
          <div className="flex flex-col gap-5 md:flex-row md:justify-center">
            {/* Row 1 */}
            <div className="flex flex-col gap-5 items-center">
              <Image
                className=""
                src="/bento1.svg"
                width={350}
                height={222}
                alt="Image that says 2X Double Your Productivity"
              />
              <Image
                className=""
                src="/bento2.svg"
                width={350}
                height={222}
                alt="Image shows a chart that says Efficiency Increase Per Transfer"
              />
            </div>
            {/* Row 2 */}
            <div className="flex flex-col gap-5 items-center">
              <Image
                className=""
                src="/bento3.svg"
                width={350}
                height={222}
                alt="Image 130% More Activity"
              />
              <Image
                className=""
                src="/bento4.svg"
                width={350}
                height={222}
                alt="Image shows Etran logo with text under that says Centralize Your Finaces"
              />
            </div>
          </div>
        </div>

        {/* Reliable app Section */}
        <div className="px-5 py-12 md:px-10 md:py-20">
          {/* Section Header */}
          <h2 className="text-3xl text-lime-900 mb-7 md:text-4xl">
            The Most Reliable App
          </h2>

          {/* Section Content */}
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="md:w-1/2">
              <Image
                className="mb-5 w-full h-auto"
                src="/benefit1.svg"
                width={350}
                height={270}
                alt="Image of a bank card"
              />
              <div className="text-xs text-start">
                <p>Scale Your Team, Not Your Card Expenses</p>
                <p className="text-zinc-600">
                  Issue virtual and physical cards at no additional cost to
                  support teams of any size.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                className="mb-5 w-full h-auto"
                src="/benefit2.svg"
                width={350}
                height={270}
                alt="Image of tax form"
              />
              <div className="text-xs text-start">
                <p>Effortless Paper Tracking, Mobile Convenience</p>
                <p className="text-zinc-600">
                  Get precise control—at scale—with the ability to lock any card
                  and restrict any type of spend.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image breaker Section */}
        <div className="px-5 pb-16 md:px-10 md:py-20">
          <Image
            className="mb-5 w-full md:max-h-96 object-cover rounded-2xl"
            src="/imagebreaker.svg"
            width={1360}
            height={758}
            alt="Image of guy standing on his phone"
          />
        </div>

        {/* First class software Section */}
        <div className="px-10 pt-12 pb-20">
          {/* Section Header */}
          <div className="mb-7">
            <div>
              <h2 className="text-lime-900 text-3xl md:text-4xl">
                First class software
              </h2>
            </div>
            <h2 className="text-xs text-zinc-600">
              Get real-time insights, seamless transactions, and advanced tools
              to manage your wealth effortlessly.
            </h2>
          </div>

          {/* Icon section container */}
          <div className="flex flex-col items-center gap-10 md:px-10 md:flex-row md:justify-around">
            <div
              className="transition-transform duration-300 ease-in-out
            hover:-translate-y-2"
            >
              <Image
                className="mb-5"
                src="/icon1.svg"
                width={150}
                height={114}
                alt="Image of wallet"
              />
              <p className="text-xs">Safe Storage</p>
            </div>
            <div
              className="transition-transform duration-300 ease-in-out
            hover:-translate-y-2"
            >
              <Image
                className="mb-5"
                src="/icon2.svg"
                width={150}
                height={114}
                alt="Image of hand finger tapping"
              />
              <p className="text-xs">Secure</p>
            </div>
            <div
              className="transition-transform duration-300 ease-in-out
            hover:-translate-y-2"
            >
              <Image
                className="mb-5"
                src="/icon3.svg"
                width={150}
                height={114}
                alt="Image of chart with dollar sign"
              />
              <p className="text-xs">Earn Interest</p>
            </div>
            <div
              className="transition-transform duration-300 ease-in-out
            hover:-translate-y-2"
            >
              <Image
                className="mb-5"
                src="/icon4.svg"
                width={150}
                height={114}
                alt="Image of 4 family members icon"
              />
              <p className="text-xs">Family Plans</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-5 mb-5 md:px-10 md:pt-12 md:pb-24">
          <div className="relative">
            <Image
              className="w-full md:max-h-96 object-cover rounded-2xl"
              src="/CTA.svg"
              width={335}
              height={400}
              alt="Girl interacting with her phone"
            />
            {/* CTA Text and Button */}
            <div className="absolute bottom-10 p-4 text-start">
              <h3 className="text-white text-xl mb-3.5 md:text-2xl">
                Download Etran and manage everything from your phone.
              </h3>
              <a
                href="#"
                className="text-xs bg-lime-200 ml-auto py-2 px-3 rounded-xs hover:bg-lime-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="lg:ml-96 px-5 py-8 bg-zinc-100 flex md:px-10 md:py-8">
        {/* Left Footer */}
        <div className="w-1/2 md:w-4/5">
          <Image
            className="mb-36"
            src="/footerlogo.svg"
            width={48}
            height={54}
            alt="Etran logo"
          />
          <h1 className="text-5xl font-medium">Etran</h1>
        </div>

        {/* Right Footer */}
        <div className="w-1/2 flex flex-col justify-between text-xs md:w-1/5">
          {/* Contact Details */}
          <div>
            <p className="text-zinc-500 mb-3">Contact</p>
            <div>
              <p className="block hover:text-zinc-500">hello@test.com</p>
              <a href="#" className="block hover:text-zinc-500">
                Instagram
              </a>
              <a href="#" className="block hover:text-zinc-500">
                X
              </a>
              <a href="#" className="block hover:text-zinc-500">
                Linkedin
              </a>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="text-zinc-500">
            <a href="#">Terms & Conditions</a>
            <br />
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}

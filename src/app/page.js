import Image from "next/image"
import { RiArrowRightLine } from "react-icons/ri"

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-black h-[120vh] relative overflow-hidden">

        {/* -------- Hero Images Container -------- */}
        <div className="absolute inset-0">
          {/* Left side images */}
          <Image
            src="/images/hero1.png"
            alt="Hero main left"
            fill
            className="object-contain object-left"
            priority
          />
          <Image
            src="/images/hero5.png"
            alt="Floating hero"
            width={100}
            height={100}
            className="absolute bottom-20 left-[150px] object-contain"
          />
          <Image
            src="/images/hero3.png"
            alt="Floating hero small"
            width={50}
            height={100}
            className="absolute top-10 left-[170px] object-contain"
          />

          {/* Right side images */}
          <Image
            src="/images/hero2.png"
            alt="Hero main right"
            fill
            className="object-contain object-right"
          />
          <Image
            src="/images/hero4.png"
            alt="Floating hero right"
            width={100}
            height={100}
            className="absolute top-20 right-10 object-contain"
          />
          <Image
            src="/images/hero6.png"
            alt="Large floating hero"
            width={600}
            height={500}
            className="absolute top-[8rem] right-[8rem] object-contain"
          />

          {/* Bottom background image */}
          <Image
            src="/images/hero7.png"
            alt="Bottom decoration"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* -------- Hero Text -------- */}
        <div className="relative z-10 max-w-3xl px-6 py-20 ml-20">
          <h1 className="text-6xl font-bold text-white leading-tight">
            We Help to Develop <br /> your{" "}
            <span className="text-purple-600">Children.</span>
          </h1>
          <p className="text-lg text-gray-200 mt-6">
            We have a unique program that helps each child quickly adapt and feel
            at home. We also help each child find his own way.
          </p>

          <div className="mt-20">
            <button className="flex items-center gap-2 text-2xl text-white px-6 py-4 bg-purple-500 rounded">
              Enroll Now
              <RiArrowRightLine size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= NEXT SECTION ================= */}
      <section className="bg-white h-[100vh]">
        {/* You can place content here later */}
      </section>
    </>
  )
}

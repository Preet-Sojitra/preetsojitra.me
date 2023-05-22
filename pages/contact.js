import Head from "next/head"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Preet Sojitra</title>
      </Head>

      <div className="mt-14">
        <h1 className="text-4xl font-bold text-primary xl:text-5xl">
          Contact Me
        </h1>

        <form>
          <div className="mt-10 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5">
            <div className="flex flex-col gap-5">
              <label
                htmlFor="name"
                className="text-subtleWhite text-xl font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-grayBackground p-2 rounded-md text-subtleWhite text-xl"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label
                htmlFor="email"
                className="text-subtleWhite text-xl font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-grayBackground p-2 rounded-md text-subtleWhite text-xl"
              />
            </div>
          </div>
          <div className="mt-10 space-y-8">
            <div className="flex flex-col gap-5">
              <label
                htmlFor="subject"
                className="text-subtleWhite text-xl font-semibold"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="bg-grayBackground p-2 rounded-md text-subtleWhite text-xl"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label
                htmlFor="message"
                className="text-subtleWhite text-xl font-semibold"
              >
                Message
              </label>
              <textarea
                type="text"
                rows={4}
                name="message"
                id="message"
                className="bg-grayBackground p-2 rounded-md text-subtleWhite text-xl"
              />
            </div>
          </div>

          <div className="mt-10">
            <button className="bg-secondary px-4 py-2 rounded-md text-xl">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

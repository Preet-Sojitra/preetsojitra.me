import Image from "next/image"

export default function Project({ imageSrc, name, tags, liveLink, codeLink }) {
  return (
    <>
      <div className="bg-grayBackground p-5 rounded-md">
        <div className="relative group">
          <Image
            src={imageSrc}
            alt={name}
            width={800}
            height={800}
            className="w-full h-full"
            priority={true}
          />

          {/* Overlay Container Only for Desktop */}
          <div className="absolute h-full w-full bg-black inset-0 opacity-0 xl:group-hover:opacity-[0.95] transition-opacity duration-500 ease-in-out">
            <div className="h-full flex flex-col justify-center items-center text-2xl gap-5 lmd:text-xl">
              <button className="bg-secondary px-4 py-2 rounded">
                <a href={liveLink} target="_blank">
                  View Live Site
                </a>
              </button>
              <button className="bg-secondary px-4 py-2 rounded">
                <a href={codeLink} target="_blank">
                  View Code
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-primary text-3xl">{name}</h1>

          {/* For mobile as there is no hover state */}
          <div className="mt-4 text-subtleWhite flex flex-wrap text-xl gap-6 xl:hidden">
            <h1 className="font-medium">
              <a href={liveLink} target="_blank">
                View Live Site
              </a>
            </h1>
            <h1 className="font-medium">
              <a href={codeLink} target="_blank">
                View Code
              </a>
            </h1>
          </div>

          <div className="flex gap-5 text-subtleWhite text-xl mt-5 xl:mt-3 flex-wrap lmd:text-base">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="bg-lightGray cursor-default px-2 py-1 rounded-md"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

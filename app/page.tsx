import Feed from "@components/Feed"

const Home = () => {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover and share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat dolorum doloremque eos magnam magni accusantium commodi
        </p>
      </section>
      <Feed />
    </>
  )
}

export default Home
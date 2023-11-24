import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";

export default function Home() {
  return (
    <div className="flex flex-col bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-wite text-3xl font-semibold">
            Welcome Back
          </h1>
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-3
            mt-4
          ">
            <ListItem
              image="/images/liked.png"
              name="Like Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white capitalize text-2xl font-semibold">
            newest songs
          </h1>
        </div>
        <PageContent songs={['moein','parvizi','moradneh']} />
      </div>
    </div>
  );
}

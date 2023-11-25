import Header from "@/components/Header";
import SerachInput from "@/components/SearchInput";

const Search = () => {
  return (
    <div className="bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white font-semibold text-3xl">
            Search
          </h1>
          <SerachInput />
        </div>
      </Header>
    </div>
  );
}

export default Search;
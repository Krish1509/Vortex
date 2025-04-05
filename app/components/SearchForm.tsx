import Form from "next/form"
import SearchFormReset from "./SearchFormReset"
const SearchForm = ({ query }: { query?: string }) => {

    return (
        <Form action="/" scroll={false} className="search-form">
            <input
                className="search-input"
                name="query"
                defaultValue={query}
                placeholder="Search Startup"
            />

            <div className="flex gap-2">
                {query && (
                    <SearchFormReset />
                )}

                <button type="submit" className="search-btn text-white font-semibold">
                    S
                </button>

            </div>

        </Form>

    )
}

export default SearchForm
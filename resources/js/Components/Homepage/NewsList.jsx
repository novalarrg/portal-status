const isNews = (news) => {
    return news.map((data, i) => {
        return (
            // <>
            //     <div>{data.title}</div>
            //     <div>{data.description}</div>
            //     <div>{data.category}</div>
            //     <div>{data.author}</div>
            // </>
            <div
                key={i}
                className="card w-full lg:w-96 bg-white shadow-xl pt-4"
            >
                <div className="card-body">
                    <h2 className="card-title ">{data.title} </h2>
                    <p className="text-zinc-700">{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-primary bg-primary">
                            {data.category}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const nonNews = () => {
    return <div>Belum ada status!!</div>;
};

const NewsList = ({ news }) => {
    // console.log("ini data Kita: ", news);
    return !news ? nonNews() : isNews(news);
};

export default NewsList;

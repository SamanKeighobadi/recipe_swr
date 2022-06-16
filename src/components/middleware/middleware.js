const middleware = (useSWRNext) =>{
    return (key,fetcher,config) =>{
        const swr = useSWRNext(key,fetcher,config);
        return swr;
    }
}

export default middleware;
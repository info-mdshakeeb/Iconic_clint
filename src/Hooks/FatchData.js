import { useQuery } from "@tanstack/react-query";


export const FatchData = (urL) => {
    // console.log(urL);
    const { data = [], isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(urL)
            const data = await res.json()
            return data.data
        }
    })
    return { data, isLoading, refetch }
};


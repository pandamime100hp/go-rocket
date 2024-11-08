


export default function getPaginateData(url: string, page: number): string {
    return `${url}?page=${page}`;
}
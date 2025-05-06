import type { RequestResult } from "@hey-api/client-axios";
import { AxiosError } from "axios";

export async function prepReq<K>(data: RequestResult<K>) {
    try {
        const res = await data;
        if (!res.data) return null;
        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Axios error:', error.message);
        } else {
            console.error('Unknown error:', error);
        }
        return null;
    }
}
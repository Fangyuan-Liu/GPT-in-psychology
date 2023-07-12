import { Cloud } from "laf-client-sdk";

export const cloud = new Cloud({
	baseUrl: "https://u1d02u.laf.dev",
	getAccessToken: () => localStorage.getItem("access_token") as string,
	timeout: 1000000,
});



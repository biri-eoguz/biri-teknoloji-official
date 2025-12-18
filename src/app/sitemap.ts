import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "http://biriteknoloji.com", priority: 1
        }
    ];
}
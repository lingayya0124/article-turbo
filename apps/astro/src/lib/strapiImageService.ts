import type { ExternalImageService, ImageTransform, AstroConfig } from "astro";
import { STRAPI_URL } from "./urlConfig";

const service: ExternalImageService = {
  validateOptions(options: ImageTransform, imageConfig: AstroConfig["image"]) {
    return options;
  },
  getURL(options, imageConfig) {
    const strapiBaseUrl = STRAPI_URL;
    const imageUrl = options.src;

    const imageHash = imageUrl.substring(
      imageUrl.lastIndexOf("/uploads/") + "/uploads/".length
    );

    const transformedUrl = `${strapiBaseUrl}/uploads/${imageHash}?width=${options.width}&quality=${options.quality}`;

    return transformedUrl;
  },
  getHTMLAttributes(options, imageConfig) {
    const { src, format, quality, ...attributes } = options;
    return {
      ...attributes,
      loading: options.loading ?? "lazy",
      decoding: options.decoding ?? "async",
    };
  },
};

export default service;

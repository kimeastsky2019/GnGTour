export const BASE_PATH = "/med";

export function imagePath(path: string): string {
    if (path.startsWith("http")) return path;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${BASE_PATH}${cleanPath}`;
}

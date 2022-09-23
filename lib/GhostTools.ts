export function optimizeGhostImageUrl(url: string, size: string): string {
    return url.replace('/content/images/', `/content/images/size/${size}/`);
}

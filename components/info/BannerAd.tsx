export default function BannerAd({  url, imageUrl, heading, description, }: { url: string, imageUrl?: string; heading?: string; description?: string; }) {
    return (
        <div className="md:w-4/5 mx-auto py-6">
            <a
                href={url}
                className="flex justify-center overflow-hidden p-6 drop-shadow"
            >
                {imageUrl && <img className="max-h-96" src={imageUrl} />}
                {heading && <h2 className="text-5xl text-white font-bold mb-6">{heading}</h2>}
                {description && <p className="text-white text-2xl italic">{description}</p>}
            </a>
            <p className="block text-center uppercase text-gray-600 text-sm mt-1 -mb-4">Advertisement</p>
        </div>
    );
}

export default function BannerAd({ heading, description, url }: { heading: string; description: string; url: string }) {
    return (
        <div className="md:w-4/5 mx-auto py-6">
            <a
                href={url}
                className="block overflow-hidden p-6 transition drop-shadow bg-gradient-to-t from-gray-700 to-gray-500 opacity-90 hover:opacity-100"
            >
                <h2 className="text-5xl text-white font-bold mb-6">{heading}</h2>
                <p className="text-white text-2xl italic">{description}</p>
            </a>
            <p className="block text-center uppercase text-gray-600 text-sm mt-1 -mb-4">Advertisement</p>
        </div>
    );
}

export default function ShowcaseSquare({
    heading,
    buttonText,
    buttonUrl,
}: {
    heading: string;
    buttonText: string;
    buttonUrl: string;
}) {
    return (
        <a
            href={buttonUrl}
            className="aspect-square overflow-hidden flex flex-col justify-between p-6 scale-95 hover:scale-100 transition drop-shadow bg-gradient-to-t from-purple-900 to-purple-700 opacity-90 hover:opacity-100"
        >
            <h2 className="text-5xl text-white font-bold">{heading}</h2>
            <div>
                <p className="inline-block text-black text-xl mix-blend-screen tracking-wider rounded-lg px-8 py-6 bg-white/90 hover:bg-white uppercase font-bold scale-95 hover:scale-100 transition">
                    {buttonText}
                </p>
            </div>
        </a>
    );
}

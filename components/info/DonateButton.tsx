export default function DonateButton({ url }: { url: string }) {
    return (
        <a
            className="inline-block text-white drop-shadow scale-90 hover:scale-100 transition hover:bg-emerald-500 bg-emerald-600 rounded px-8 py-4 uppercase font-bold tracking-wider"
            href={url}
        >
            Donate
        </a>
    );
}

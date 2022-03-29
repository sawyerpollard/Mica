export default function InfoLinkBox({
    links,
}: {
    links: {
        name: string;
        url: string;
    }[];
}) {
    return (
        <div className="flex flex-wrap justify-center gap-x-4 text-sm font-medium">
            {links.map((link) => (
                <a className="block py-2 hover:text-white/80 transition" href={link.url} key={link.url}>
                    {link.name}
                </a>
            ))}
        </div>
    );
}

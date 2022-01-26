import React from 'react';

export default function VerticalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {React.Children.map(children, (child, index) => (
                <div key={index} className="py-10 first:pt-0 last:pb-0 border-t first:border-t-0 border-black/60">
                    {child}
                </div>
            ))}
        </div>
    );
}

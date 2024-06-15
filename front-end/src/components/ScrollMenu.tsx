import React from 'react';

interface Link {
    id: string;
    href: string;
    text: string;
}

interface ScrollMenuProps {
    links: Link[];
}

const ScrollMenu: React.FC<ScrollMenuProps> = ({ links }) => {
    return (
        <div className="scrollmenu overflow-x-auto whitespace-nowrap">
            {links.map((link) => (
                <a
                    key={link.id}
                    href={link.href}
                    className="inline-block text-xl text-black text-center py-4 px-6 hover:bg-black hover:text-white"
                >
                    {link.text}
                </a>
            ))}
        </div>
    );
};

export default ScrollMenu;
